import { z } from "zod";

const titleSchema = z.object({
  ar: z.string(),
  "en-US": z.string(),
  he: z.string(),
  fr: z.string(),
});

const cocaColaCampaignDetailsSchema = z.object({
  hasCocaColaBrand: z.boolean(),
  isDone: z.boolean(),
});

const deliveryFeeDetailsSchema = z.object({
  taskCost: z.number(),
  userFee: z.number(),
  originalUserFee: z.number(),
  userExtraFees: z.array(z.any()),
  restaurantFeeCoverage: z.number(),
  haatMarketingFeeCoverage: z.number(),
  haatOperationFeeCoverage: z.number(),
  userPricingModel: z.number(),
  driverPricingModel: z.number(),
});

const unitDetailsSchema = z.object({
  stepSize: z.number(),
  unitType: z.number(),
});

const productImageSchema = z.object({
  id: z.number(),
  priority: z.number(),
  serverImageUrl: z.string(),
  smallImageUrl: z.string(),
  blurhash: z.string(),
});

const nameSchema = z.object({
  ar: z.string(),
  "en-US": z.string(),
  he: z.string(),
});

const mealContentSchema = z.object({
  id: z.number(),
  type: z.number(),
  price: z.number(),
  smallImageUrl: z.string(),
  serverImageUrl: z.string(),
  name: z.string(),
  name_AR: z.string(),
  name_EN: z.string(),
  name_HE: z.string(),
  name_FR: z.null(),
  qty: z.number(),
  mealContentType: z.number(),
  group: z.number(),
  priority: z.number(),
  hideExtra: z.boolean(),
  isPizza: z.boolean(),
  mealContentPrinting: z.number(),
});

const mealSchema = z.object({
  id: z.number(),
  quantity: z.number(),
  mealContents: z.array(z.any()),
  smallImage: z.string(),
  price: z.number(),
  serverImage: z.string(),
  blurhash: z.string(),
  name: z.string(),
  name_AR: z.string(),
  name_EN: z.string(),
  name_HE: z.string(),
  name_FR: z.string(),
  namesDictionary: z.null(),
  isPizza: z.boolean(),
  prioirty: z.number(),
  mealTypePriority: z.number(),
  isPartialMealContentPricing: z.boolean(),
  finalPriceToDisplay: z.number(),
  finalPriceOfExtrasToDisplay: z.number(),
  finalPriceWithExtrasToDisplay: z.number(),
});

const workingHourSchema = z.object({
  dayOfWeek: z.number(),
  fromHour: z.number(),
  toHour: z.number(),
  fromHourDate: z.string(),
  toHourDate: z.string(),
});

const imageSchema = z.object({
  id: z.number(),
  serverImageUrl: z.string(),
  smallImageUrl: z.string(),
  priority: z.number(),
});

const invoiceSchema = z.object({
  link: z.string(),
  title: titleSchema,
});

const currencyDataSchema = z.object({
  symbol: z.string(),
  names: nameSchema,
});

const dynamicWeightDetailsSchema = z.object({
  quantityType: z.number(),
  avgWeightPerItem: z.null(),
  pricePerWeight: z.null(),
  weightToPresent: z.null(),
  unitDetails: unitDetailsSchema,
});

const meals2Schema = z.object({
  id: z.number(),
  quantity: z.number(),
  mealContents: z.array(mealContentSchema),
  smallImage: z.string(),
  price: z.number(),
  serverImage: z.string(),
  blurhash: z.string(),
  name: z.string(),
  name_AR: z.string(),
  name_EN: z.string(),
  name_HE: z.string(),
  name_FR: z.string(),
  namesDictionary: z.null(),
  isPizza: z.boolean(),
  prioirty: z.number(),
  mealTypePriority: z.number(),
  isPartialMealContentPricing: z.boolean(),
  finalPriceToDisplay: z.number(),
  finalPriceOfExtrasToDisplay: z.number(),
  finalPriceWithExtrasToDisplay: z.number(),
});

const detailsSchema = z.object({
  id: z.number(),
  name: z.string(),
  name_AR: z.string(),
  name_HE: z.string(),
  name_EN: z.string(),
  address: z.string(),
  address_AR: z.string(),
  address_HE: z.string(),
  address_EN: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  havePrivateDelivery: z.boolean(),
  phoneNumber: z.string(),
  priority: z.number(),
  restaurantCategoryId: z.number(),
  images: z.array(imageSchema),
  workingHours: z.array(workingHourSchema),
  icon: z.string(),
  smallIcon: z.string(),
  status: z.number(),
});

const productSchema = z.object({
  id: z.number(),
  name: nameSchema,
  productImages: z.array(productImageSchema),
  discountPercentage: z.number(),
  discountPrice: z.number(),
  price: z.number(),
  quantity: z.number(),
  orderProductColors: z.null(),
  orderProductSizes: z.null(),
  orderProductFeatures: z.array(z.any()),
  orderId: z.number(),
  productId: z.number(),
  supportDynamicPricing: z.boolean(),
  orderProductWeightUpdate: z.null(),
  dynamicWeightDetails: dynamicWeightDetailsSchema,
  notAvailable: z.null(),
  productReplacement: z.null(),
  isBigItem: z.boolean(),
  finalWeight: z.number(),
  finalPrice: z.number(),
  finalWeightToDisplay: z.number(),
  finalPriceToDisplay: z.number(),
  strikedPriceToDisplay: z.null(),
  finalPriceOfExtrasToDisplay: z.number(),
  finalPriceWithExtrasToDisplay: z.number(),
  quantityTypeToDisplay: z.number(),
  unitTypeToDisplay: z.number(),
  weightBeforeUpdateToDisplay: z.null(),
  priceBeforeUpdateToDisplay: z.null(),
  strikedPriceBeforeUpdateToDisplay: z.null(),
  dealProduct: z.null(),
  orderDealProductId: z.null(),
});

const restaurantDetailSchema = z.object({
  details: detailsSchema,
  meals: z.array(z.union([mealSchema, meals2Schema])),
  deals: z.array(z.any()),
  products: z.array(productSchema),
});

const orderSchema = z.object({
  id: z.number(),
  longitude: z.number(),
  paymentMethod: z.number(),
  latitude: z.number(),
  companyId: z.number(),
  driverId: z.string().nullable(),
  price: z.number(),
  orderDate: z.string(),
  acceptedDate: z.string().nullable(),
  pickedDate: z.string().nullable(),
  arriveDate: z.string().nullable(),
  meals: z.null(),
  deals: z.null(),
  estimationTime: z.number().nullable(),
  driverPrice: z.number(),
  restaurantPrice: z.number(),
  address: z.null(),
  withDriver: z.boolean(),
  restaurantIds: z.null(),
  discount: z.null(),
  couponCode: z.null(),
  restaurantId: z.number(),
  startPrepare: z.string().nullable(),
  receiptCode: z.number().nullable(),
  transactionCode: z.string().nullable(),
  operatingSystem: z.null(),
  deviceType: z.null(),
  rejectedDateByRestaurant: z.string().nullable(),
  rejectReason: z.number().nullable(),
  driverName: z.string().nullable(),
  driverPhoneNumber: z.string().nullable(),
  driverImage: z.null(),
  timeToUser: z.number(),
  userFeedBack: z.boolean(),
  donePrepare: z.string().nullable(),
  driverDescription: z.null(),
  appVersion: z.null(),
  creditCardToken: z.null(),
  cardYear: z.null(),
  cardMonth: z.null(),
  phoneNumber: z.null(),
  userName: z.null(),
  email: z.null(),
  payRestaurant: z.number(),
  getFromClient: z.number(),
  deliveryType: z.number(),
  restaurantDetail: restaurantDetailSchema,
  tokenCardType: z.number(),
  areaId: z.null(),
  locationAccuracy: z.null(),
  serviceFee: z.number(),
  paymentMethodId: z.null(),
  deliveryFeeDetails: deliveryFeeDetailsSchema,
  l4digits: z.string().nullable(),
  currencyData: currencyDataSchema,
  isCibus: z.boolean(),
  remakeDetails: z.null(),
  isRemake: z.boolean(),
  isCanceled: z.boolean(),
  cancellationReason: z.string().nullable(),
  cocaColaCampaignDetails: cocaColaCampaignDetailsSchema,
  productReplacementSuggestions: z.array(z.any()),
  customerNotes: z.null(),
  posOrderId: z.null(),
  credits: z.number(),
  scheduledOrderDetails: z.null(),
  invoices: z.array(invoiceSchema),
  referenceNumber: z.number().nullable(),
});
