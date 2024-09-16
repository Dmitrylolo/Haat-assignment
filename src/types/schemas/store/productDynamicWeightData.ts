import { z } from "zod";

export const ProductDynamicWeightDataSchema = z.object({
  supportDynamicPricing: z.boolean(),
  maxWeightPercentage: z.number(),
});
