import { z } from "zod";

export const LocalizedStringSchema = z.object({
  ar: z.string().nullable().optional(),
  he: z.string().nullable().optional(),
  "en-US": z.string().nullable().optional(),
  fr: z.string().nullable().optional(),
});
