import { z } from "zod";

export const postCreateSchema = z.object({
  model_id: z.string().uuid("Invalid model ID"),
  platform: z.enum(["instagram", "linkedin", "twitter", "youtube"]),
  content_idea: z.string().min(10, "Idea must be at least 10 characters"),
  reference_image: z.string().optional(),
});
