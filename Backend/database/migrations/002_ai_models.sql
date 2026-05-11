-- AI Models Table
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

-- RLS Policies
ALTER TABLE public.ai_models ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own models" ON public.ai_models FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own models" ON public.ai_models FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own models" ON public.ai_models FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own models" ON public.ai_models FOR DELETE USING (auth.uid() = user_id);
