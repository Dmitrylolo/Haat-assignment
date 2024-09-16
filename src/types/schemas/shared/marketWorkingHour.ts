import { z } from "zod";

export const MarketWorkingHourSchema = z.object({
  dayOfWeek: z.number(),
  fromHour: z.number(),
  toHour: z.number(),
  isActive: z.boolean(),
  utcOffset: z.number(),
  countryId: z.number(),
  specialWorkingHours: z.unknown().nullable().optional(),
  type: z.number(),
  fromHourDate: z.string(),
  toHourDate: z.string(),
});
