import { z } from "zod";

export const modelCreateSchema = z.object({
  name: z.string().min(1, "Name is required"),
  gender: z.enum(["male", "female", "nonbinary", "ambiguous"]),
  age_range: z.enum(["18-24", "25-34", "35-44", "45+"]),
  niche: z.array(z.string()).min(1, "Select at least one niche"),
  style_tone: z.string().min(1, "Style/Tone is required"),
  reference_urls: z.array(z.string()).optional(),
});
