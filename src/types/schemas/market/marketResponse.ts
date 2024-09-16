import { z } from "zod";

import {
  BusinessNoticeSchema,
  MarketWorkingHourSchema,
  ShareMarketDataSchema,
} from "@shemas/shared";

import { LocalizedStringSchema } from "../store";
import { MarketBannerSchema } from "./marketBanner";
import { MarketCategorySchema } from "./marketCategory";

export const MarketResponseSchema = z.object({
  id: z.number(),
  name: LocalizedStringSchema,
  address: LocalizedStringSchema,
  description: LocalizedStringSchema,
  iconServerImageUrl: z.string(),
  iconSmallImageUrl: z.string(),
  priority: z.number(),
  status: z.number(),
  discount: z.number(),
  longitude: z.number(),
  latitude: z.number(),
  phoneNumber: z.string(),
  isReady: z.boolean(),
  noDelivery: z.boolean(),
  noPick: z.boolean(),
  noSeat: z.boolean(),
  autoRefreshEnabled: z.boolean(),
  busyExpirationDate: z.string().nullable(),
  marketCategories: MarketCategorySchema.array(),
  marketBanners: MarketBannerSchema.array(),
  marketWorkingHours: MarketWorkingHourSchema.array(),
  deliveryFeeLabel: z.string().nullable(),
  shareMarketData: ShareMarketDataSchema,
  isMarketPreferredForUser: z.boolean(),
  dealsAndDiscountsCategory: z.unknown().nullable(),
  businessNotice: BusinessNoticeSchema,
  popUpList: z.unknown().array(),
});
