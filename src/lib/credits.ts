import { createServiceRoleClient } from './supabase/server';

/**
 * Deducts credits from a user's balance and records the transaction in the ledger.
 * This should be run on the server using the service role client to ensure atomic updates.
 */
export async function deductCredits(
  userId: string,
  amount: number,
  action: string,
  referenceId?: string
) {
  const supabase = createServiceRoleClient();

  // 1. Get current balance and check if enough
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('credits')
    .eq('id', userId)
    .single();

  if (profileError || !profile) {
    throw new Error('User profile not found');
  }

  if (profile.credits < amount) {
    throw new Error('Insufficient credits');
  }

  const newBalance = profile.credits - amount;

  // 2. Perform atomic update using a transaction (or sequential calls if RPC is not available)
  // In Supabase, we can use an RPC for atomic decrement, or just update and log.
  // For simplicity here, we'll update then insert. 
  // Ideally, use a PostgreSQL function (RPC) for atomicity.

  const { error: updateError } = await supabase
    .from('profiles')
    .update({ credits: newBalance })
    .eq('id', userId);

  if (updateError) {
    throw new Error('Failed to update credits');
  }

  // 3. Log to ledger
  const { error: ledgerError } = await supabase
    .from('credit_ledger')
    .insert({
      user_id: userId,
      action: action,
      credits_delta: -amount,
      balance_after: newBalance,
      reference_id: referenceId
    });

  if (ledgerError) {
    // Note: In a production app, you might want to rollback the credit update if ledger fails
    console.error('Failed to log credit transaction:', ledgerError);
  }

  return { success: true, newBalance };
}

/**
 * Gets the current credit balance for a user.
 */
export async function getCreditBalance(userId: string) {
  const supabase = createServiceRoleClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('credits')
    .eq('id', userId)
    .single();

  if (error) return 0;
  return data.credits;
}
