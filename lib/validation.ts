import * as z from "zod";
export const QuestionsSchema = z.object({
  title: z.string().min(5, "Title is too short"),
  description: z
    .string()
    .min(100, "Description is too short"),
  tags: z
    .array(z.string().min(1).max(15))
    .min(1)
    .max(3),
});
