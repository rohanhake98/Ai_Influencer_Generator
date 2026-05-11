import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { publishPost } from "@/inngest/functions/publishPost";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    publishPost,
  ],
});
