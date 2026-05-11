import { inngest } from "../client";
import { createServiceRoleClient } from "@/lib/supabase/server";

export const publishPost = inngest.createFunction(
  { id: "publish-post" },
  { event: "post/publish" },
  async ({ event, step }) => {
    const { postId } = event.data;
    const supabase = createServiceRoleClient();

    // 1. Fetch post data
    const post = await step.run("fetch-post", async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*, social_accounts(*)')
        .eq('id', postId)
        .single();
      
      if (error) throw new Error(`Post not found: ${error.message}`);
      return data;
    });

    // 2. Perform platform-specific publishing
    const result = await step.run("publish-to-platform", async () => {
      // Mock publishing logic
      console.log(`Publishing post ${postId} to ${post.platform}...`);
      
      // Here you would use the platform SDKs (Instagram, LinkedIn, etc.)
      // with the access tokens from post.social_accounts
      
      return { success: true, platform_post_id: "mock_id_123" };
    });

    // 3. Update post status in DB
    await step.run("update-db-status", async () => {
      const { error } = await supabase
        .from('posts')
        .update({ 
          status: 'published',
          published_at: new Date().toISOString()
        })
        .eq('id', postId);
      
      if (error) throw new Error(`Failed to update post status: ${error.message}`);
    });

    return { message: "Post published successfully", result };
  }
);
