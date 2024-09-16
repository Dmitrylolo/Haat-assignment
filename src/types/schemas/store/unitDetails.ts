import { z } from "zod";

export const UnitDetailsSchema = z.object({
  stepSize: z.number(),
  unitType: z.number(),
});
