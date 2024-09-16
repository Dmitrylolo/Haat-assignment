import { z } from "zod";

export const ImageSchema = z.object({
  id: z.number(),
  serverImageUrl: z.string(),
  smallImageUrl: z.string(),
  blurhash: z.string().nullable(),
  priority: z.number(),
  group: z.string().nullable().optional(),
});
