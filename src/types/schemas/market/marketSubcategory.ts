import { z } from "zod";

import { LocalizedStringSchema } from "../shared/localizedString";
import { ProductSchema } from "../store/product";

export const MarketSubcategorySchema = z.object({
  id: z.number(),
  name: LocalizedStringSchema,
  serverImageUrl: z.string().nullable(),
  smallImageUrl: z.string().nullable(),
  priority: z.number(),
  hide: z.boolean(),
  products: ProductSchema.array(),
  productsCount: z.number(),
  hasDiscount: z.boolean(),
  supportDynamicPricing: z.boolean(),
  discountsHistories: z.unknown().nullable().optional(),
});
