-- Posts Table
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

-- RLS Policies
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own posts" ON public.posts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own posts" ON public.posts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own posts" ON public.posts FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own posts" ON public.posts FOR DELETE USING (auth.uid() = user_id);
