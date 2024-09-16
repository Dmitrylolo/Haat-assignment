import { z } from "zod";

import { UnitDetailsSchema } from "./unitDetails";

export const DynamicWeightDetailsSchema = z.object({
  quantityType: z.number(),
  avgWeightPerItem: z.number().nullable(),
  pricePerWeight: z.number().nullable(),
  weightToPresent: z.number().nullable(),
  unitDetails: UnitDetailsSchema,
});
