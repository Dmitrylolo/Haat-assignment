import { z } from "zod";

import { LocalizedStringSchema } from "./localizedString";

export const ProductFeatureItemSchema = z.object({
  id: z.number(),
  name: LocalizedStringSchema,
  serverImageUrl: z.string().nullable(),
  smallImageUrl: z.string().nullable(),
  blurhash: z.string(),
  priority: z.number(),
  hide: z.boolean(),
  isDefault: z.boolean(),
  notAvailable: z.boolean(),
  extraPrice: z.number(),
});

export const ProductFeatureSchema = z.object({
  id: z.number(),
  name: LocalizedStringSchema,
  hide: z.boolean(),
  notAvailable: z.boolean(),
  featureItems: ProductFeatureItemSchema.array(),
});
