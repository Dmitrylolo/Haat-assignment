import { z } from "zod";

const foregroundImageSchema = z.object({
  serverImage: z.union([z.string(), z.string()]).nullable(),
  smallServerImage: z.string().nullable(),
  blurhashImage: z.union([z.string(), z.string()]).nullable(),
});

const backgroundImage2Schema = z.object({
  serverImage: z.string(),
  smallServerImage: z.string().nullable(),
  blurhashImage: z.string(),
});

const labelSchema = z.object({
  text: z.string(),
  labelType: z.string(),
});

const ratingSchema = z.object({
  value: z.number(),
  numberOfRatings: z.string(),
});

const iconSchema = z.object({
  serverImage: z.union([z.string(), z.string()]).nullable(),
  smallServerImage: z.union([z.string(), z.string()]).nullable(),
  blurhashImage: z.string().nullable(),
});

const backgroundImageSchema = z.object({
  serverImage: z.string().nullable(),
  smallServerImage: z.string().nullable(),
  blurhashImage: z.string().nullable(),
});

const mainPageBannersSchema = z.object({
  interval: z.number(),
  banners: z.array(z.any()),
});

const imagesSchema = z.object({
  serverImage: z.string().nullable(),
  smallServerImage: z.string().nullable(),
  blurhashImage: z.string().nullable(),
});

const aggregatedDeliveryWorkingHourSchema = z.object({
  fromDay: z.number(),
  toDay: z.number(),
  fromHour: z.number(),
  toHour: z.number(),
  type: z.number(),
});

const pickupWorkingHourSchema = z.object({
  dayOfWeek: z.number(),
  from: z.number(),
  to: z.number(),
  type: z.number(),
});

const restrictionMessageSchema = z.object({
  title: z.string(),
  message: z.string(),
});

const announcementSchema = z.object({
  title: z.string().nullable(),
  message: z.string().nullable(),
});

const forceUpdateSettingsSchema = z.object({
  messageTitle: z.string(),
  messageBody: z.string(),
  androidVersion: z.number(),
  iosVersion: z.number(),
});

const currencySchema = z.object({
  currencyId: z.number(),
  symbol: z.string(),
  name: z.string(),
});

const versionSchema = z.object({
  iosMinVersion: z.number(),
  androidMinVersion: z.number(),
});

const coordinateSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
});

const storeSchema = z.object({
  storeId: z.number(),
  name: z.string().optional(),
  address: z.string().optional(),
  opacity: z.number().optional(),
  distance: z.number().optional(),
  icon: iconSchema.optional(),
  rating: z.union([ratingSchema, ratingSchema]).optional().nullable(),
  labels: z.array(z.union([labelSchema, labelSchema])).optional(),
  closestWorkingHour: z.union([z.string(), z.string()]).optional().nullable(),
  is24Hours: z.boolean().optional(),
  priority: z.number().optional(),
  status: z.number().optional(),
  isNew: z.boolean().optional(),
  zoneId: z.string().optional().nullable(),
  recommendedPriority: z.number().optional(),
  backgroundImage: backgroundImage2Schema.optional(),
  foregroundImage: z.array(foregroundImageSchema).optional(),
  title: z.string().optional(),
  subTitle: z.string().optional(),
});

const tagSchema = z.object({
  id: z.number(),
  name: z.string(),
  images: imagesSchema,
  backgroundColor: z.string().nullable(),
});

const areaSettingsSchema = z.object({
  areaStatus: z.number(),
  isAnnouncement: z.boolean(),
  announcement: announcementSchema,
  restrictionMessage: restrictionMessageSchema,
  pickupWorkingHours: z.array(pickupWorkingHourSchema),
  deliveryWorkingHours: z.array(pickupWorkingHourSchema),
  aggregatedDeliveryWorkingHours: z.array(aggregatedDeliveryWorkingHourSchema),
  aggregatedPickupWorkingHours: z.array(aggregatedDeliveryWorkingHourSchema),
});

const appUpdateSettingsSchema = z.object({
  forceUpdateSettings: forceUpdateSettingsSchema,
  regularUpdateSettings: forceUpdateSettingsSchema,
});

const areasOutOfCountrySchema = z.object({
  areaId: z.number(),
  coordinates: z.array(coordinateSchema),
  latitude: z.number(),
  longitude: z.number(),
  distance: z.number(),
  name: z.string(),
  countryId: z.number(),
  isNew: z.boolean(),
  isReadyArea: z.boolean(),
  isMarketReady: z.boolean(),
  isRestaurantReady: z.boolean(),
});

const categorySchema = z.object({
  id: z.number(),
  priority: z.number(),
  elementType: z.string(),
  name: z.string(),
  backgroundImage: backgroundImageSchema.optional(),
  topImage: imagesSchema.optional(),
  topImageType: z.number().optional(),
  isSponsored: z.boolean().optional(),
  viewAll: z.boolean().optional(),
  backgroundColor: z.string().optional().nullable(),
  stores: z.array(storeSchema),
  title: z.string().optional().nullable(),
  maxRows: z.number().optional(),
});

const tagsSchema = z.object({
  title: z.string(),
  tags: z.array(tagSchema),
});

const appSettingsSchema = z.object({
  version: versionSchema,
  customerServicePhone: z.string(),
  imageServer: z.string(),
  currency: currencySchema,
  appUpdateSettings: appUpdateSettingsSchema,
});

const areasContainerSchema = z.object({
  areasInCountry: z.array(z.any()),
  areasOutOfCountry: z.array(areasOutOfCountrySchema),
  allAreas: z.array(areasOutOfCountrySchema),
});

export const marketSchema = z.object({
  isInOperating: z.boolean(),
  closestArea: z.string().nullable(),
  areasContainer: areasContainerSchema,
  appSettings: appSettingsSchema,
  areaSettings: areaSettingsSchema,
  tags: tagsSchema,
  mainPageBanners: mainPageBannersSchema,
  categories: z.array(categorySchema),
});
