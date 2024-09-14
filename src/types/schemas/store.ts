import { z } from "zod";

const noticeTitleSchema = z.object({
  ar: z.null(),
  he: z.null(),
  "en-US": z.null(),
  fr: z.null(),
});

const shareMarketDataSchema = z.object({
  url: z.string(),
  message: z.string(),
});

const marketWorkingHourSchema = z.object({
  dayOfWeek: z.number(),
  fromHour: z.number(),
  toHour: z.number(),
  isActive: z.boolean(),
  utcOffset: z.number(),
  countryId: z.number(),
  specialWorkingHours: z.null(),
  type: z.number(),
  fromHourDate: z.string(),
  toHourDate: z.string(),
});

const marketBannerSchema = z.object({
  id: z.number(),
  serverImageUrl: z.string(),
  smallImageUrl: z.string(),
  priority: z.number(),
});

const productImageSchema = z.object({
  id: z.number(),
  priority: z.number(),
  serverImageUrl: z.string(),
  smallImageUrl: z.string(),
  blurhash: z.string().nullable(),
  group: z.number().nullable(),
});

const productDynamicWeightDataSchema = z.object({
  supportDynamicPricing: z.boolean(),
  maxWeightPercentage: z.number(),
});

const descriptionSchema = z.object({
  ar: z.null(),
  "en-US": z.null(),
  he: z.null(),
});

const name3Schema = z.object({
  ar: z.string(),
  "en-US": z.union([z.string(), z.string(), z.string()]).nullable(),
  he: z.union([z.string(), z.string(), z.string()]).nullable(),
});

const name2Schema = z.object({
  ar: z.string(),
  "en-US": z.string(),
  he: z.string(),
});

const nameSchema = z.object({
  ar: z.string(),
  he: z.string(),
  "en-US": z.string(),
  fr: z.string(),
});

const businessNoticeSchema = z.object({
  noticeTitle: noticeTitleSchema,
  noticeMessage: nameSchema,
});

const featureItemSchema = z.object({
  id: z.number(),
  name: name2Schema,
  serverImageUrl: z.union([z.string(), z.string()]).nullable(),
  smallImageUrl: z.union([z.string(), z.string()]).nullable(),
  blurhash: z.string(),
  priority: z.number(),
  hide: z.boolean(),
  isDefault: z.boolean(),
  notAvailable: z.boolean(),
  extraPrice: z.number(),
});

const productSizeSchema = z.object({
  id: z.number(),
  name: name2Schema,
  serverImageUrl: z.string().nullable(),
  smallImageUrl: z.string().nullable(),
  blurhash: z.string(),
  priority: z.number(),
  hide: z.boolean(),
  isDefault: z.boolean(),
  notAvailable: z.boolean(),
  extraPrice: z.number(),
});

const productColorSchema = z.object({
  id: z.number(),
  name: name2Schema,
  serverImageUrl: z.null(),
  smallImageUrl: z.null(),
  blurhash: z.string(),
  priority: z.number(),
  hide: z.boolean(),
  isDefault: z.boolean(),
  notAvailable: z.boolean(),
  extraPrice: z.number(),
  hexColor: z.string(),
});

const productFeatureSchema = z.object({
  id: z.number(),
  name: name2Schema,
  hide: z.boolean(),
  notAvailable: z.boolean(),
  featureItems: z.array(featureItemSchema),
});

const productSchema = z.object({
  name: name3Schema,
  description: descriptionSchema,
  categoryId: z.number(),
  subCategoryId: z.number(),
  unitType: z.number(),
  minUnit: z.number(),
  maxUnit: z.number(),
  unitStep: z.number(),
  productColors: z.array(z.array(productColorSchema)),
  productSizes: z.array(z.array(productSizeSchema)),
  productFeatures: z.array(z.array(productFeatureSchema)),
  marketCategoryId: z.number(),
  marketSubCategoryId: z.number(),
  noVat: z.boolean(),
  quantityType: z.string(),
  unitDetails: z.null(),
  barcode: z.null(),
  productCode: z.null(),
  discount: z.null(),
  discountsHistories: z.null(),
  availability: z.array(z.any()),
  productDynamicWeightData: productDynamicWeightDataSchema,
  productDeal: z.null(),
  brandId: z.number(),
  brandName: z.null(),
  isCocaColaBrand: z.boolean(),
  id: z.number(),
  priority: z.number(),
  basePrice: z.number(),
  hide: z.boolean(),
  notAvailable: z.boolean(),
  discountPercentage: z.number(),
  discountPrice: z.number(),
  productImages: z.array(productImageSchema),
  supportDynamicPricing: z.boolean(),
  pricePerWeight: z.null(),
  avgWeightPerItem: z.null(),
  weightToPresent: z.null(),
  isBigItem: z.boolean(),
});

const marketSubcategorySchema = z.object({
  id: z.number(),
  name: name2Schema,
  serverImageUrl: z.null(),
  smallImageUrl: z.null(),
  priority: z.number(),
  hide: z.boolean(),
  products: z.array(productSchema),
  productsCount: z.number(),
  hasDiscount: z.boolean(),
  supportDynamicPricing: z.boolean(),
  discountsHistories: z.null(),
});

const marketCategorySchema = z.object({
  marketSubcategories: z.array(marketSubcategorySchema),
  id: z.number(),
  name: nameSchema,
  serverImageUrl: z.string(),
  smallImageUrl: z.string(),
  priority: z.number(),
  hide: z.boolean(),
  productsCount: z.number(),
  hasDiscount: z.boolean(),
  supportDynamicPricing: z.boolean(),
});

const storeSchema = z.object({
  id: z.number(),
  name: z.string().optional(),
  address: z.string().optional(),
  description: nameSchema,
  iconServerImageUrl: z.string(),
  iconSmallImageUrl: z.string(),
  priority: z.number().optional(),
  status: z.number().optional(),
  discount: z.number(),
  longitude: z.number(),
  latitude: z.number(),
  phoneNumber: z.string(),
  isReady: z.boolean(),
  noDelivery: z.boolean(),
  noPick: z.boolean(),
  noSeat: z.boolean(),
  autoRefreshEnabled: z.boolean(),
  busyExpirationDate: z.null(),
  marketCategories: z.array(marketCategorySchema),
  marketBanners: z.array(marketBannerSchema),
  marketWorkingHours: z.array(marketWorkingHourSchema),
  deliveryFeeLabel: z.null(),
  shareMarketData: shareMarketDataSchema,
  isMarketPreferredForUser: z.boolean(),
  dealsAndDiscountsCategory: z.null(),
  businessNotice: businessNoticeSchema,
  popUpList: z.array(z.any()),
});
