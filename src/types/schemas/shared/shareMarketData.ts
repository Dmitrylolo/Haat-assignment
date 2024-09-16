import { z } from "zod";

export const ShareMarketDataSchema = z.object({
  url: z.string(),
  message: z.string(),
});
