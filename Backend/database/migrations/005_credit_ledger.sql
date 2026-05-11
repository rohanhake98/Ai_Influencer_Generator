-- Credit Ledger Table
CREATE TABLE public.credit_ledger (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  action TEXT NOT NULL,
  credits_delta INT NOT NULL,
  balance_after INT NOT NULL,
  reference_id UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS Policies
ALTER TABLE public.credit_ledger ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own credit ledger" ON public.credit_ledger FOR SELECT USING (auth.uid() = user_id);
-- Only system should insert into ledger usually, but for now allowing user to see their own.
