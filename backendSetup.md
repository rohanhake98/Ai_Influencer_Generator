# 🛠 Backend Setup Guide — InfluenceAI

This document outlines the steps to set up the backend infrastructure for the InfluenceAI platform, as specified in the [PRD.md](./Prd.md).

---

## 1. Prerequisites & Dependencies

### 1.1 Core Backend Dependencies
Install the following packages:

```bash
# Supabase
npm install @supabase/auth-helpers-nextjs @supabase/supabase-js

# Background Jobs
npm install inngest

# Payments
npm install stripe

# AI Services
npm install openai replicate

# Utilities
npm install zod react-hook-form
```

### 1.2 Environment Variables
Create a `.env.local` file with the following keys:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Replicate
REPLICATE_API_TOKEN=your_replicate_api_token

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Social APIs (OAuth)
INSTAGRAM_CLIENT_ID=...
INSTAGRAM_CLIENT_SECRET=...
LINKEDIN_CLIENT_ID=...
LINKEDIN_CLIENT_SECRET=...
TWITTER_CLIENT_ID=...
TWITTER_CLIENT_SECRET=...
```

---

## 2. Supabase Configuration

### 2.1 Database Schema
Create the following tables in Supabase using migrations or the SQL Editor:

#### `profiles`
Extends Supabase `auth.users`.
```sql
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  plan TEXT DEFAULT 'free' CHECK (plan IN ('free', 'standard', 'pro')),
  credits INT DEFAULT 300,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
```

#### `ai_models`
Stores generated AI influencer personas.
```sql
CREATE TABLE public.ai_models (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT,
  gender TEXT CHECK (gender IN ('male', 'female', 'nonbinary', 'ambiguous')),
  age_range TEXT CHECK (age_range IN ('18-24', '25-34', '35-44', '45+')),
  niche TEXT[],
  style_tone TEXT,
  reference_urls TEXT[],
  generated_url TEXT,
  credits_used INT DEFAULT 50,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'generated', 'failed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
```

#### `posts`
Stores generated social media posts.
```sql
CREATE TABLE public.posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  model_id UUID REFERENCES public.ai_models(id) ON DELETE SET NULL,
  account_ids UUID[],
  content_idea TEXT,
  caption TEXT,
  hashtags TEXT[],
  generated_image TEXT,
  reference_image TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'published', 'failed')),
  platform TEXT CHECK (platform IN ('instagram', 'linkedin', 'twitter', 'youtube')),
  scheduled_at TIMESTAMP WITH TIME ZONE,
  published_at TIMESTAMP WITH TIME ZONE,
  credits_used INT DEFAULT 20,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
```

#### `social_accounts`
OAuth tokens for connected social platforms.
```sql
CREATE TABLE public.social_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  platform TEXT CHECK (platform IN ('instagram', 'linkedin', 'twitter', 'youtube')),
  platform_user_id TEXT,
  username TEXT,
  access_token TEXT, -- Should be encrypted
  refresh_token TEXT, -- Should be encrypted
  token_expires_at TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'expired', 'error')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
```

#### `credit_ledger`
Audit log for credit consumption.
```sql
CREATE TABLE public.credit_ledger (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  action TEXT NOT NULL,
  credits_delta INT NOT NULL,
  balance_after INT NOT NULL,
  reference_id UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
```

#### `subscriptions`
Stripe subscription status.
```sql
CREATE TABLE public.subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  stripe_customer_id TEXT,
  stripe_sub_id TEXT,
  plan TEXT CHECK (plan IN ('free', 'standard', 'pro')),
  status TEXT CHECK (status IN ('active', 'canceled', 'past_due')),
  current_period_end TIMESTAMP WITH TIME ZONE,
  credits_allocated INT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
```

### 2.2 Row Level Security (RLS)
Enable RLS on all tables and ensure users can only access their own data.
Example for `profiles`:
```sql
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
```

---

## 3. Inngest Setup (Background Jobs)

1. Create `src/inngest/client.ts` to initialize the Inngest client.
2. Create `src/app/api/inngest/route.ts` to handle Inngest events.
3. Define jobs in `src/inngest/functions/`:
   - `publishPost`: Handles scheduled posting.
   - `syncMetrics`: Periodically fetches engagement data.
   - `refreshTokens`: Refreshes OAuth tokens.

---

## 4. API Routes Structure

Organize API routes in `src/app/api/` (Directories already initialized):
- `auth/callback/route.ts`: Handle OAuth redirects.
- `models/route.ts`: Model creation and listing.
- `posts/route.ts`: Post generation and scheduling.
- `billing/`: Stripe checkout and webhooks.
- `credits/route.ts`: Credit balance and history.

---

## 5. Implementation Steps (Order of Operations)

1. **Phase 1: Database & Auth**
   - Run SQL migrations in Supabase.
   - Set up Supabase Client in `src/lib/supabase/`.
   - Implement Auth callback.

2. **Phase 2: Credit System**
   - Create server-side utilities to deduct credits and log to `credit_ledger`.

3. **Phase 3: AI Integrations**
   - Set up OpenAI and Replicate clients in `src/lib/`.
   - Implement `/api/models/create` and `/api/posts/create`.

4. **Phase 4: Scheduling & Background Jobs**
   - Set up Inngest.
   - Implement post scheduling logic.

5. **Phase 5: Payments**
   - Integrate Stripe.
   - Handle subscription webhooks to update user plans and credits.
