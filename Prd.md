# 📄 PRD.md — AI Influencer SaaS Platform

## Product Requirements Document v1.0

---

## 1. Executive Summary

| Field | Details |
|-------|---------|
| **Product Name** | InfluenceAI (working title) |
| **Type** | B2C / B2B SaaS Web Application |
| **Target Users** | Content creators, marketers, agencies, solopreneurs |
| **Core Value Prop** | Generate AI-powered social media influencer personas, create posts, schedule & track performance — all in one platform |
| **Monetization** | Credit-based subscription tiers |

---

## 2. Problem Statement

Content creators and marketing teams face three core friction points:

1. **Identity Creation** — Building a consistent, visual influencer persona requires expensive photographers, designers, and brand consultants
2. **Content Production** — Generating high-quality, on-brand posts at scale is time-intensive and costly
3. **Distribution & Analytics** — Managing multiple social accounts with scheduling and performance tracking requires multiple tools (Buffer, Hootsuite, Sprout Social)

**InfluenceAI** collapses all three into a single, credit-powered platform.

---

## 3. Goals & Success Metrics

### 3.1 Business Goals

```
- Reach 1,000 paying users within 90 days of launch
- Achieve $15K MRR by Month 3
- Maintain < 5% monthly churn
- Credit consumption rate > 80% (signals engagement)
```

### 3.2 Key Performance Indicators (KPIs)

| KPI | Target |
|-----|--------|
| Monthly Active Users (MAU) | 5,000 by Month 6 |
| Avg. Posts Created/User/Month | ≥ 10 |
| Model Generation Rate | ≥ 2 models/user |
| Free → Paid Conversion | ≥ 8% |
| Scheduled Post Success Rate | ≥ 99% uptime |
| Credit Burn Rate | ≥ 70% of allocated |

---

## 4. User Personas

### 4.1 Persona A — "Solo Creator" (Sarah)
```
Age: 24
Role: Lifestyle content creator
Pain: Can't afford photographers or brand agency
Goal: Build a faceless AI persona to monetize a niche
Plan: Free → Standard
Usage: Creates 1 model, posts 3x/week
```

### 4.2 Persona B — "Growth Marketer" (Marcus)
```
Age: 32
Role: Head of Social at a startup
Pain: Needs volume content across 5 channels
Goal: Automate AI influencer content for brand campaigns
Plan: Standard → Pro
Usage: 3 models, 20+ posts/week, full analytics
```

### 4.3 Persona C — "Agency Lead" (Priya)
```
Age: 38
Role: Runs a digital agency
Pain: Client demand for AI content at scale
Goal: White-label AI personas per client
Plan: Pro (multi-seat)
Usage: 10+ models, unlimited posts, team collaboration
```

---

## 5. Full Feature Specification

---

### 5.1 MODULE: Authentication

**Flow:**
```
Landing → Check Session → [Authenticated → Dashboard] OR [Not Authenticated → Sign In/Up]
```

**Requirements:**

| ID | Requirement | Priority |
|----|------------|---------|
| AUTH-01 | Email/password sign up with email verification | P0 |
| AUTH-02 | OAuth login: Google, GitHub | P0 |
| AUTH-03 | Supabase Auth integration | P0 |
| AUTH-04 | JWT session management with auto-refresh | P0 |
| AUTH-05 | Password reset via email | P0 |
| AUTH-06 | "Remember me" persistent session | P1 |
| AUTH-07 | Multi-factor authentication (TOTP) | P2 |

**Technical Stack:**
```yaml
Provider: Supabase Auth
Session: Supabase JWT (auto-managed)
OAuth: Google OAuth 2.0, GitHub OAuth App
Storage: Supabase auth.users table
```

---

### 5.2 MODULE: Dashboard

**Layout:**
```
┌────────────────────────────────────────────────┐
│  SIDEBAR          │  MAIN CONTENT AREA          │
│  ─────────        │  ──────────────             │
│  🏠 Home          │  [Dynamic Module Renders]   │
│  🤖 Models        │                             │
│  📅 Calendar      │                             │
│  🔗 Accounts      │                             │
│  ⚙️  Settings     │                             │
│                   │                             │
│  [Credit Badge]   │                             │
└────────────────────────────────────────────────┘
```

**Requirements:**

| ID | Requirement | Priority |
|----|------------|---------|
| DASH-01 | Persistent sidebar navigation | P0 |
| DASH-02 | Credit balance visible at all times in sidebar | P0 |
| DASH-03 | Responsive layout (mobile-first) | P0 |
| DASH-04 | Active route highlighting in sidebar | P1 |
| DASH-05 | Notification bell with activity feed | P1 |
| DASH-06 | Quick-action button: "Create Post" global CTA | P1 |
| DASH-07 | Dark mode default, light mode toggle | P2 |

---

### 5.3 MODULE: Home / Analytics Overview

**UI Sections:**
```
┌──────────────────────────────────────────────┐
│ 📊 Analytics Overview                         │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│ │ Total    │ │ Total    │ │ Credits  │       │
│ │ Posts    │ │ Reach    │ │ Remaining│       │
│ └──────────┘ └──────────┘ └──────────┘       │
│                                              │
│ [Engagement Chart — 30 days]                 │
│ [Top Performing Post Cards]                  │
│ [Platform Breakdown: IG / LI / X / YT]       │
└──────────────────────────────────────────────┘
```

**Requirements:**

| ID | Requirement | Priority |
|----|------------|---------|
| HOME-01 | Summary cards: posts, reach, engagement, credits | P0 |
| HOME-02 | Line chart: engagement over time (30/60/90 days) | P0 |
| HOME-03 | Platform breakdown bar chart | P1 |
| HOME-04 | Top 3 performing posts widget | P1 |
| HOME-05 | Credits usage trend chart | P1 |
| HOME-06 | "Upgrade Plan" CTA if credits < 20% | P1 |

---

### 5.4 MODULE: AI Influencer Model (Studio)

**Complete Flow:**
```
Models Page
│
├── [View Existing Models Grid]
│
└── [Create New Model Button]
    │
    ├── Step 1: Choose Gender
    │   └── Options: Male / Female / Non-binary / Ambiguous
    │
    ├── Step 2: Select Age Range
    │   └── Options: 18–24 / 25–34 / 35–44 / 45+
    │
    ├── Step 3: Select Niche
    │   └── Options: Fashion / Tech / Fitness / Finance / 
    │             Food / Travel / Gaming / Beauty / Lifestyle
    │
    ├── Step 4: Style & Tone
    │   └── Options: Professional / Casual / Edgy / Minimalist / 
    │             Luxury / Playful
    │
    ├── Step 5: Upload Reference Images (Optional)
    │   └── Up to 5 images, used as visual reference for AI
    │
    └── [Generate AI Influencer] → API Call → Model Card Created
        └── Deduct 50 Credits
```

**Requirements:**

| ID | Requirement | Priority |
|----|------------|---------|
| MODEL-01 | Multi-step wizard UI with progress indicator | P0 |
| MODEL-02 | Gender selection with visual icons | P0 |
| MODEL-03 | Age range selector | P0 |
| MODEL-04 | Niche tag picker (multi-select allowed) | P0 |
| MODEL-05 | Style & tone selector | P0 |
| MODEL-06 | Reference image upload (max 5, 10MB each) | P0 |
| MODEL-07 | AI generation call to image generation API | P0 |
| MODEL-08 | 50 credit deduction on generation trigger | P0 |
| MODEL-09 | Block generation if insufficient credits | P0 |
| MODEL-10 | Generated model stored in user's library | P0 |
| MODEL-11 | Model card: name, niche, avatar preview, created date | P1 |
| MODEL-12 | Ability to rename, archive, or delete a model | P1 |
| MODEL-13 | Model regeneration option (consumes 50 credits) | P2 |
| MODEL-14 | Model sharing via public link | P2 |

**Data Schema:**
```sql
Table: ai_models
─────────────────────────────────────────────
id              UUID PRIMARY KEY
user_id         UUID FK → users.id
name            TEXT
gender          ENUM('male','female','nonbinary','ambiguous')
age_range       ENUM('18-24','25-34','35-44','45+')
niche           TEXT[] (array of niches)
style_tone      TEXT
reference_urls  TEXT[] (storage URLs)
generated_url   TEXT (final AI image URL)
credits_used    INT DEFAULT 50
status          ENUM('pending','generated','failed')
created_at      TIMESTAMP
updated_at      TIMESTAMP
```

---

### 5.5 MODULE: Post Creation Flow

**Complete Flow:**
```
Create New Post
│
├── Step 1: Select AI Model
│   └── Dropdown from user's model library
│
├── Step 2: Select Social Media Account
│   └── Connected accounts (IG / LinkedIn / X / YouTube)
│
├── Step 3: Enter Content Idea
│   └── Free text prompt: "Gym motivation Monday post"
│
├── Step 4: Upload Reference Image (Optional)
│   └── User can upload a scene/product image
│
└── [Generate Post] → AI API Call
    │
    ├── AI Caption Generation (GPT-4o)
    ├── AI Image Generation (SDXL / DALL-E / Flux)
    ├── Hashtag Suggestions
    └── Platform-specific formatting
    
    → PREVIEW UI
    └── Deduct 20 Credits
```

**Requirements:**

| ID | Requirement | Priority |
|----|------------|---------|
| POST-01 | Model selector with avatar thumbnails | P0 |
| POST-02 | Social account selector (multi-select for cross-posting) | P0 |
| POST-03 | Content idea text area with character counter | P0 |
| POST-04 | Optional reference image upload | P0 |
| POST-05 | AI caption generation via LLM (GPT-4o) | P0 |
| POST-06 | AI image generation matching model + idea | P0 |
| POST-07 | 20 credit deduction per generation | P0 |
| POST-08 | Post Preview UI (see 5.6) | P0 |
| POST-09 | Hashtag auto-suggestion (10–15 tags) | P1 |
| POST-10 | Platform-specific text formatting rules | P1 |
| POST-11 | Regenerate caption only (5 credits) | P2 |
| POST-12 | Regenerate image only (15 credits) | P2 |
| POST-13 | Save as draft without consuming credits | P1 |

**Data Schema:**
```sql
Table: posts
─────────────────────────────────────────────
id              UUID PRIMARY KEY
user_id         UUID FK → users.id
model_id        UUID FK → ai_models.id
account_ids     UUID[] (social accounts targeted)
content_idea    TEXT
caption         TEXT
hashtags        TEXT[]
generated_image TEXT (storage URL)
reference_image TEXT (storage URL, nullable)
status          ENUM('draft','scheduled','published','failed')
platform        ENUM('instagram','linkedin','twitter','youtube')
scheduled_at    TIMESTAMP (nullable)
published_at    TIMESTAMP (nullable)
credits_used    INT DEFAULT 20
created_at      TIMESTAMP
```

---

### 5.6 MODULE: Post Preview UI

**UI Layout:**
```
┌─────────────────────────────────────────────────┐
│  📱 POST PREVIEW                                │
│  ┌──────────────────────────────────────────┐  │
│  │  [AI Generated Image]                    │  │
│  │                                          │  │
│  │  @username                               │  │
│  │  [Caption Text...]                       │  │
│  │  #hashtag1 #hashtag2 #hashtag3           │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
│  [Edit Caption] [Edit Hashtags]                │
│                                                 │
│  [📅 Schedule Post]  [🚀 Post Now]             │
│  [💾 Save Draft]     [🔄 Regenerate]           │
└─────────────────────────────────────────────────┘
```

**Requirements:**

| ID | Requirement | Priority |
|----|------------|---------|
| PREV-01 | Mobile-frame post preview | P0 |
| PREV-02 | Inline caption editing | P0 |
| PREV-03 | Inline hashtag editing | P0 |
| PREV-04 | "Post Now" — immediate publish via API | P0 |
| PREV-05 | "Schedule Post" — opens scheduling modal | P0 |
| PREV-06 | "Save Draft" — saves without posting | P1 |
| PREV-07 | Platform toggle preview (IG / X / LinkedIn styles) | P1 |
| PREV-08 | Download image as PNG | P2 |

---

### 5.7 MODULE: Auto Scheduler

**Flow:**
```
Schedule Post Modal
│
├── Date Picker
├── Time Picker (with timezone detection)
├── Platform Selector (checkboxes)
│   ├── ✅ Instagram
│   ├── ✅ LinkedIn
│   ├── ✅ Twitter/X
│   └── ✅ YouTube
│
└── [Confirm Schedule]
    └── Queued to background job worker
        └── Publishes via platform APIs at scheduled time
```

**Requirements:**

| ID | Requirement | Priority |
|----|------------|---------|
| SCH-01 | Date + time picker with timezone support | P0 |
| SCH-02 | Multi-platform simultaneous scheduling | P0 |
| SCH-03 | Calendar view of scheduled posts | P0 |
| SCH-04 | Background job queue (BullMQ / Inngest) | P0 |
| SCH-05 | Retry logic on publish failure (3 attempts) | P0 |
| SCH-06 | Email notification on publish success/failure | P1 |
| SCH-07 | Edit or cancel a scheduled post | P1 |
| SCH-08 | Optimal time suggestion based on engagement data | P2 |

**Calendar Module Requirements:**

| ID | Requirement | Priority |
|----|------------|---------|
| CAL-01 | Monthly/weekly calendar view | P0 |
| CAL-02 | Color-coded posts per platform | P1 |
| CAL-03 | Drag-and-drop reschedule | P2 |
| CAL-04 | Click post on calendar → opens preview | P1 |

---

### 5.8 MODULE: Performance Tracking

**Metrics Captured:**

```
Per Post:
├── Impressions / Reach
├── Likes
├── Comments
├── Shares / Reposts
├── Clicks (link in bio / URL)
├── Saves (Instagram)
└── Engagement Rate (%)

Aggregated:
├── Total reach across platforms
├── Best performing model
├── Best performing niche
└── Credit ROI (engagement per credit spent)
```

**Requirements:**

| ID | Requirement | Priority |
|----|------------|---------|
| PERF-01 | Sync metrics via platform APIs (Instagram Graph, LinkedIn, X, YouTube Data) | P0 |
| PERF-02 | Per-post metric cards | P0 |
| PERF-03 | Engagement rate calculation | P0 |
| PERF-04 | Charts: reach over time, engagement over time | P0 |
| PERF-05 | Top performing posts ranking | P1 |
| PERF-06 | Platform comparison bar chart | P1 |
| PERF-07 | Metrics refresh cadence: every 6 hours | P1 |
| PERF-08 | Export to CSV | P2 |

---

### 5.9 MODULE: Connected Accounts

**Flow:**
```
Accounts Page
│
├── [Connected Accounts List]
│   └── Each shows: Platform icon, username, status, disconnect button
│
└── [Add Account Button]
    └── OAuth flow per platform
        ├── Instagram → Meta OAuth
        ├── LinkedIn → LinkedIn OAuth
        ├── Twitter/X → X OAuth 2.0
        └── YouTube → Google OAuth (YouTube scope)
```

**Requirements:**

| ID | Requirement | Priority |
|----|------------|---------|
| ACC-01 | Connect Instagram via Meta OAuth | P0 |
| ACC-02 | Connect LinkedIn via LinkedIn OAuth | P0 |
| ACC-03 | Connect Twitter/X via OAuth 2.0 PKCE | P0 |
| ACC-04 | Connect YouTube via Google OAuth | P1 |
| ACC-05 | Show connection status (active/expired/error) | P0 |
| ACC-06 | Disconnect account with confirmation | P0 |
| ACC-07 | Token refresh handling (silent re-auth) | P0 |
| ACC-08 | Enforce account limits per plan | P0 |

**Data Schema:**
```sql
Table: social_accounts
─────────────────────────────────────────────
id              UUID PRIMARY KEY
user_id         UUID FK → users.id
platform        ENUM('instagram','linkedin','twitter','youtube')
platform_user_id TEXT
username        TEXT
access_token    TEXT (encrypted)
refresh_token   TEXT (encrypted, nullable)
token_expires_at TIMESTAMP
status          ENUM('active','expired','error')
created_at      TIMESTAMP
```

---

### 5.10 MODULE: Credit System

**Credit Rules:**

```
Action                    Credits Consumed
─────────────────────────────────────────
Generate AI Model         50 credits
Generate Post (full)      20 credits
Regenerate Caption only   5 credits
Regenerate Image only     15 credits
Scheduled Posts           0 credits (free)
Analytics Sync            0 credits (free)
```

**Requirements:**

| ID | Requirement | Priority |
|----|------------|---------|
| CR-01 | Credit balance stored per user in DB | P0 |
| CR-02 | Deduct atomically (DB transaction) to prevent overdraft | P0 |
| CR-03 | Block action if credits insufficient → show upgrade modal | P0 |
| CR-04 | Credit history/audit log per user | P0 |
| CR-05 | Credit balance visible in sidebar at all times | P0 |
| CR-06 | Low credit warning at 20% remaining | P1 |
| CR-07 | Credit top-up option (buy add-on credits) | P2 |

**Data Schema:**
```sql
Table: credit_ledger
─────────────────────────────────────────────
id              UUID PRIMARY KEY
user_id         UUID FK → users.id
action          TEXT (e.g., 'model_generation', 'post_generation')
credits_delta   INT (negative = deduction, positive = top-up)
balance_after   INT
reference_id    UUID (nullable, FK to posts.id or ai_models.id)
created_at      TIMESTAMP
```

---

### 5.11 MODULE: Pricing & Subscriptions

**Plans:**

```
┌─────────────────────────────────────────────────────────┐
│  FREE           STANDARD          PRO                   │
│  ──────────     ────────────      ───────────           │
│  300 credits    2,000 credits     10,000 credits        │
│  1 account      5 accounts        Unlimited accounts    │
│  1 AI model     10 AI models      Unlimited models      │
│  10 posts/mo    Unlimited posts   Unlimited posts        │
│  Basic analytics Full analytics  Advanced analytics     │
│  $0/mo          $29/mo           $99/mo                 │
└─────────────────────────────────────────────────────────┘
```

**Requirements:**

| ID | Requirement | Priority |
|----|------------|---------|
| PAY-01 | Stripe integration for subscription billing | P0 |
| PAY-02 | Plan upgrade/downgrade flows | P0 |
| PAY-03 | Credit allocation on plan activation/renewal | P0 |
| PAY-04 | Webhook handling for Stripe events | P0 |
| PAY-05 | Invoice generation and email delivery | P1 |
| PAY-06 | Cancel subscription flow with retention offer | P1 |
| PAY-07 | Add-on credit packs (purchase extra credits) | P2 |

**Data Schema:**
```sql
Table: subscriptions
─────────────────────────────────────────────
id                  UUID PRIMARY KEY
user_id             UUID FK → users.id
stripe_customer_id  TEXT
stripe_sub_id       TEXT
plan                ENUM('free','standard','pro')
status              ENUM('active','canceled','past_due')
current_period_end  TIMESTAMP
credits_allocated   INT
created_at          TIMESTAMP
```

---

### 5.12 MODULE: Settings

**Sections:**

```
Settings
├── Profile
│   ├── Display name
│   ├── Avatar upload
│   └── Email (read-only, change via auth flow)
│
├── Billing
│   ├── Current plan display
│   ├── Upgrade/downgrade button
│   ├── Credit balance + history
│   └── Invoice history
│
├── Notifications
│   ├── Email: post published
│   ├── Email: post failed
│   ├── Email: low credits
│   └── Email: weekly summary
│
└── Security
    ├── Change password
    ├── Enable 2FA
    └── Active sessions + revoke
```

---

## 6. Technical Architecture

### 6.1 Tech Stack

```yaml
Frontend:
  Framework: Next.js 14 (App Router)
  Language: TypeScript
  Styling: Tailwind CSS + shadcn/ui
  State: Zustand + React Query (TanStack)
  Charts: Recharts
  Forms: React Hook Form + Zod

Backend:
  Runtime: Next.js API Routes + Edge Functions
  BaaS: Supabase (Auth, DB, Storage, Realtime)
  Queue: Inngest (background job scheduling)
  Payment: Stripe

AI Services:
  Text/Caption: OpenAI GPT-4o API
  Image Generation: Replicate (SDXL / Flux) or OpenAI DALL-E 3
  Prompt Engineering: Server-side prompt templates

Social APIs:
  Instagram: Meta Graph API
  LinkedIn: LinkedIn Marketing API
  Twitter/X: X API v2
  YouTube: YouTube Data API v3

Infrastructure:
  Hosting: Vercel (Frontend + API)
  Database: Supabase (PostgreSQL)
  Storage: Supabase Storage (model images, post images)
  CDN: Vercel Edge Network
  Monitoring: Sentry + Vercel Analytics
```

### 6.2 Database Architecture (Full Schema)

```sql
-- USERS (extended from Supabase auth.users)
Table: profiles
  id            UUID PK (FK auth.users)
  display_name  TEXT
  avatar_url    TEXT
  plan          ENUM('free','standard','pro') DEFAULT 'free'
  credits       INT DEFAULT 300
  created_at    TIMESTAMP

-- AI MODELS
Table: ai_models (see 5.4)

-- POSTS  
Table: posts (see 5.5)

-- SOCIAL ACCOUNTS
Table: social_accounts (see 5.9)

-- CREDIT LEDGER
Table: credit_ledger (see 5.10)

-- SUBSCRIPTIONS
Table: subscriptions (see 5.11)

-- POST METRICS
Table: post_metrics
  id              UUID PK
  post_id         UUID FK → posts.id
  platform        TEXT
  impressions     INT
  likes           INT
  comments        INT
  shares          INT
  clicks          INT
  saves           INT
  engagement_rate DECIMAL
  synced_at       TIMESTAMP
```

### 6.3 API Routes Map

```
POST   /api/auth/callback              → Supabase OAuth callback
GET    /api/user/profile               → Fetch user profile + credits
POST   /api/models/create              → Trigger AI model generation
GET    /api/models                     → List user's models
DELETE /api/models/[id]                → Delete model
POST   /api/posts/create               → Generate AI post
GET    /api/posts                      → List posts with filters
POST   /api/posts/[id]/schedule        → Schedule a post
POST   /api/posts/[id]/publish         → Publish immediately
GET    /api/analytics/overview         → Dashboard metrics
GET    /api/analytics/posts/[id]       → Per-post metrics
POST   /api/accounts/connect           → Initiate OAuth for social
DELETE /api/accounts/[id]              → Disconnect account
POST   /api/billing/create-checkout    → Stripe checkout session
POST   /api/billing/webhook            → Stripe webhook handler
GET    /api/credits/balance            → Current credit balance
GET    /api/credits/history            → Credit ledger
```

### 6.4 Background Jobs (Inngest)

```typescript
// Job Definitions
jobs: [
  {
    name: "post/publish",
    trigger: "scheduled",
    handler: publishPostToSocialPlatforms,
    retries: 3
  },
  {
    name: "metrics/sync",
    trigger: "cron: every 6 hours",
    handler: syncPostMetricsFromAPIs,
  },
  {
    name: "tokens/refresh",
    trigger: "cron: every 12 hours",
    handler: refreshExpiredSocialTokens,
  },
  {
    name: "credits/low-alert",
    trigger: "event: credits.updated",
    handler: sendLowCreditEmailIfThreshold,
  }
]
```

---

## 7. Security Requirements

| ID | Requirement | Priority |
|----|------------|---------|
| SEC-01 | All API routes protected by Supabase JWT middleware | P0 |
| SEC-02 | Row Level Security (RLS) on all Supabase tables | P0 |
| SEC-03 | Social OAuth tokens encrypted at rest (AES-256) | P0 |
| SEC-04 | Rate limiting on AI generation endpoints (10 req/min) | P0 |
| SEC-05 | Input sanitization on all user text inputs | P0 |
| SEC-06 | CSRF protection on all mutations | P0 |
| SEC-07 | File upload validation (type, size, magic bytes) | P0 |
| SEC-08 | Stripe webhook signature verification | P0 |
| SEC-09 | No credentials in client-side code | P0 |

---

## 8. Development Phases & Milestones

### Phase 1 — Foundation (Weeks 1–3)
```
✅ Project setup: Next.js + Supabase + Tailwind
✅ Auth flow (email, Google OAuth)
✅ Dashboard shell + navigation
✅ User profiles + credit balance display
✅ Pricing page + Stripe checkout
✅ Subscription webhook handler
```

### Phase 2 — Core AI Features (Weeks 4–6)
```
✅ AI Model creation wizard (5-step)
✅ Image generation API integration
✅ Credit deduction system
✅ Post creation flow (4 inputs)
✅ Caption generation (GPT-4o)
✅ Post image generation
✅ Post preview UI
```

### Phase 3 — Social & Scheduling (Weeks 7–9)
```
✅ Instagram OAuth + publish API
✅ LinkedIn OAuth + publish API
✅ Twitter/X OAuth + publish API
✅ YouTube OAuth + publish API
✅ Scheduler UI (date/time picker)
✅ Inngest job queue setup
✅ Calendar view
```

### Phase 4 — Analytics & Polish (Weeks 10–12)
```
✅ Metrics sync background jobs
✅ Analytics dashboard charts
✅ Performance tracking per post
✅ Settings module (all sections)
✅ Email notifications
✅ Mobile responsiveness audit
✅ Error handling + loading states
✅ Beta launch
```

---

## 9. User Stories (Acceptance Criteria)

```gherkin
Feature: AI Model Creation
  Scenario: User creates an AI influencer
    Given I am on the Models page
    When I click "Create New Model"
    And I complete all 5 wizard steps
    And I click "Generate AI Influencer"
    Then the system deducts 50 credits
    And a generated AI model image appears
    And the model is saved to my library

Feature: Post Generation
  Scenario: User generates a post
    Given I have at least 20 credits
    And I have at least 1 AI model
    When I fill in all post creation fields
    And I click "Generate Post"
    Then the system deducts 20 credits
    And a post preview appears with caption and image

Feature: Credit Guard
  Scenario: User has insufficient credits
    Given my credit balance is 10
    When I attempt to generate an AI model (costs 50)
    Then I see an "Insufficient Credits" modal
    And I am prompted to upgrade my plan

Feature: Post Scheduling
  Scenario: User schedules a post
    Given I have a completed post preview
    When I click "Schedule Post"
    And I select a date, time, and platform
    And I confirm
    Then the post appears in my calendar
    And it is published automatically at the scheduled time
```

---

## 10. Non-Functional Requirements

| Category | Requirement |
|---------|------------|
| **Performance** | Dashboard loads in < 2s on 3G |
| **Uptime** | 99.9% SLA for scheduling infrastructure |
| **Scalability** | Support 10,000 concurrent users without degradation |
| **AI Latency** | Post generation completes in < 30 seconds |
| **Data Retention** | Post data retained for 24 months |
| **GDPR** | Data export and deletion on request |
| **Accessibility** | WCAG 2.1 AA compliance |

---

## 11. Open Questions & Decisions Needed

```
1. Image Generation Provider
   → Replicate (Flux/SDXL) vs OpenAI DALL-E 3 vs Stability AI?
   Decision needed: Quality vs cost vs speed tradeoff

2. YouTube Content Type
   → Shorts thumbnails only? Or full video generation roadmap?

3. White-label / Agency Tier
   → Is multi-seat / client management in v1 scope?

4. Model Ownership / IP
   → Who owns the generated AI persona legally?
   → Terms of Service must address this explicitly

5. Content Moderation
   → Need NSFW filter on all generated images (Replicate safety checker)
   → Need caption moderation layer

6. Mobile App
   → Web-first confirmed. iOS/Android in roadmap?
```

---

## 12. Appendix — File Structure

```
influnece-ai/
├── app/
│   ├── (auth)/
│   │   ├── signin/page.tsx
│   │   └── signup/page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx            ← Sidebar shell
│   │   ├── home/page.tsx
│   │   ├── models/
│   │   │   ├── page.tsx          ← Model library
│   │   │   └── create/page.tsx   ← Wizard
│   │   ├── posts/
│   │   │   ├── page.tsx
│   │   │   └── create/page.tsx
│   │   ├── calendar/page.tsx
│   │   ├── accounts/page.tsx
│   │   └── settings/page.tsx
│   └── api/
│       ├── auth/callback/route.ts
│       ├── models/route.ts
│       ├── posts/route.ts
│       ├── analytics/route.ts
│       ├── billing/
│       │   ├── checkout/route.ts
│       │   └── webhook/route.ts
│       └── credits/route.ts
├── components/
│   ├── ui/                       ← shadcn/ui components
│   ├── dashboard/
│   ├── models/
│   ├── posts/
│   └── analytics/
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   └── server.ts
│   ├── stripe.ts
│   ├── openai.ts
│   ├── replicate.ts
│   └── social/
│       ├── instagram.ts
│       ├── linkedin.ts
│       ├── twitter.ts
│       └── youtube.ts
├── inngest/
│   ├── client.ts
│   └── functions/
│       ├── publishPost.ts
│       ├── syncMetrics.ts
│       └── refreshTokens.ts
├── types/
│   └── index.ts
└── supabase/
    └── migrations/
        ├── 001_profiles.sql
        ├── 002_ai_models.sql
        ├── 003_posts.sql
        ├── 004_social_accounts.sql
        ├── 005_credit_ledger.sql
        └── 006_subscriptions.sql
```

---

*PRD Version: 1.0 | Status: Ready for Engineering Review | Last Updated: 2025*