-- Social Accounts Table
CREATE TABLE public.social_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  platform TEXT CHECK (platform IN ('instagram', 'linkedin', 'twitter', 'youtube')),
  platform_user_id TEXT,
  username TEXT,
  access_token TEXT, -- Should be encrypted in application layer
  refresh_token TEXT, -- Should be encrypted in application layer
  token_expires_at TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'expired', 'error')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS Policies
ALTER TABLE public.social_accounts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own social accounts" ON public.social_accounts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own social accounts" ON public.social_accounts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own social accounts" ON public.social_accounts FOR DELETE USING (auth.uid() = user_id);
