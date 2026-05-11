-- Subscriptions Table
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

-- RLS Policies
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own subscriptions" ON public.subscriptions FOR SELECT USING (auth.uid() = user_id);
