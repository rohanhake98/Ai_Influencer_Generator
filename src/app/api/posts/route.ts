import { NextResponse } from 'next/server';
import { createActionClient } from '@/lib/supabase/server';
import { deductCredits } from '@/lib/credits';
import { postCreateSchema } from '@/lib/validations/post';
import openai from '@/lib/openai';

export async function GET() {
  const supabase = createActionClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 0 });
  }

  const { data: posts, error } = await supabase
    .from('posts')
    .select('*, ai_models(name, generated_url)')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const supabase = createActionClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 0 });
  }

  try {
    const body = await request.json();
    const validatedData = postCreateSchema.parse(body);

    // 1. Deduct 20 credits
    try {
      await deductCredits(user.id, 20, 'post_generation');
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 402 });
    }

    // 2. Create entry in DB with status 'draft'
    const { data: post, error: insertError } = await supabase
      .from('posts')
      .insert({
        user_id: user.id,
        model_id: validatedData.model_id,
        platform: validatedData.platform,
        content_idea: validatedData.content_idea,
        reference_image: validatedData.reference_image,
        status: 'draft',
        credits_used: 20
      })
      .select()
      .single();

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    // 3. Trigger AI Content Generation (async)
    // Here you would call GPT-4o for caption and an image model for the image.
    
    return NextResponse.json(post);

  } catch (error: any) {
    if (error.name === 'ZodError') {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
