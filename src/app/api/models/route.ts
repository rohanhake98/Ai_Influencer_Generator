import { NextResponse } from 'next/server';
import { createActionClient } from '@/lib/supabase/server';
import { deductCredits } from '@/lib/credits';
import { modelCreateSchema } from '@/lib/validations/model';
import replicate from '@/lib/replicate';

export async function GET() {
  const supabase = createActionClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 0 });
  }

  const { data: models, error } = await supabase
    .from('ai_models')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(models);
}

export async function POST(request: Request) {
  const supabase = createActionClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 0 });
  }

  try {
    const body = await request.json();
    const validatedData = modelCreateSchema.parse(body);

    // 1. Deduct 50 credits
    try {
      await deductCredits(user.id, 50, 'model_generation');
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 402 });
    }

    // 2. Create entry in DB with status 'pending'
    const { data: model, error: insertError } = await supabase
      .from('ai_models')
      .insert({
        user_id: user.id,
        name: validatedData.name,
        gender: validatedData.gender,
        age_range: validatedData.age_range,
        niche: validatedData.niche,
        style_tone: validatedData.style_tone,
        reference_urls: validatedData.reference_urls || [],
        status: 'pending',
        credits_used: 50
      })
      .select()
      .single();

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    // 3. Trigger AI Generation (async)
    // In a real app, you might use Inngest here or a separate worker.
    // For now, we'll just acknowledge the creation.
    
    // Example Replicate call (placeholder)
    /*
    const output = await replicate.run(
      "stability-ai/sdxl:...",
      { input: { prompt: `A ${validatedData.gender} influencer, ${validatedData.age_range} years old, niche: ${validatedData.niche.join(', ')}...` } }
    );
    */

    return NextResponse.json(model);

  } catch (error: any) {
    if (error.name === 'ZodError') {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
