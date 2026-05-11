import { createRouteHandlerClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

// Client for Route Handlers and Server Actions
export const createActionClient = () => createRouteHandlerClient({ cookies });

// Client for Server Components
export const createServerClient = () => createServerComponentClient({ cookies });

// Service Role Client (bypass RLS)
import { createClient } from '@supabase/supabase-js';

export const createServiceRoleClient = () => 
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    }
  );
