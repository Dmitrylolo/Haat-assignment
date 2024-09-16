import { z } from "zod";

import { LocalizedStringSchema } from "../store";
import { MarketSubcategorySchema } from "./marketSubcategory";

export const MarketCategorySchema = z.object({
  id: z.number(),
  name: LocalizedStringSchema,
  serverImageUrl: z.string(),
  smallImageUrl: z.string(),
  priority: z.number(),
  hide: z.boolean(),
  marketSubcategories: MarketSubcategorySchema.array(),
  productsCount: z.number(),
  hasDiscount: z.boolean(),
  supportDynamicPricing: z.boolean(),
});
