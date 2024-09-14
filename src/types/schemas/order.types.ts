interface Order {
  id: number;
  longitude: number;
  paymentMethod: number;
  latitude: number;
  companyId: number;
  driverId: null | string;
  price: number;
  orderDate: string;
  acceptedDate: null | string;
  pickedDate: null | string;
  arriveDate: null | string;
  meals: null;
  deals: null;
  estimationTime: null | number;
  driverPrice: number;
  restaurantPrice: number;
  address: null;
  withDriver: boolean;
  restaurantIds: null;
  discount: null;
  couponCode: null;
  restaurantId: number;
  startPrepare: null | string;
  receiptCode: null | number;
  transactionCode: null | string;
  operatingSystem: null;
  deviceType: null;
  rejectedDateByRestaurant: null | string;
  rejectReason: null | number;
  driverName: null | string;
  driverPhoneNumber: null | string;
  driverImage: null;
  timeToUser: number;
  userFeedBack: boolean;
  donePrepare: null | string;
  driverDescription: null;
  appVersion: null;
  creditCardToken: null;
  cardYear: null;
  cardMonth: null;
  phoneNumber: null;
  userName: null;
  email: null;
  payRestaurant: number;
  getFromClient: number;
  deliveryType: number;
  restaurantDetail: RestaurantDetail;
  tokenCardType: number;
  areaId: null;
  locationAccuracy: null;
  serviceFee: number;
  paymentMethodId: null;
  deliveryFeeDetails: DeliveryFeeDetails;
  l4digits: null | string;
  currencyData: CurrencyData;
  isCibus: boolean;
  remakeDetails: null;
  isRemake: boolean;
  isCanceled: boolean;
  cancellationReason: null | string;
  cocaColaCampaignDetails: CocaColaCampaignDetails;
  productReplacementSuggestions: any[];
  customerNotes: null;
  posOrderId: null;
  credits: number;
  scheduledOrderDetails: null;
  invoices: Invoice[];
  referenceNumber: null | number;
}

interface Invoice {
  link: string;
  title: Title;
}

interface Title {
  ar: string;
  "en-US": string;
  he: string;
  fr: string;
}

interface CocaColaCampaignDetails {
  hasCocaColaBrand: boolean;
  isDone: boolean;
}

interface CurrencyData {
  symbol: string;
  names: Name;
}

interface DeliveryFeeDetails {
  taskCost: number;
  userFee: number;
  originalUserFee: number;
  userExtraFees: any[];
  restaurantFeeCoverage: number;
  haatMarketingFeeCoverage: number;
  haatOperationFeeCoverage: number;
  userPricingModel: number;
  driverPricingModel: number;
}

interface RestaurantDetail {
  details: Details;
  meals: (Meal | Meals2)[];
  deals: any[];
  products: Product[];
}

interface Product {
  id: number;
  name: Name3;
  productImages: ProductImage[];
  discountPercentage: number;
  discountPrice: number;
  price: number;
  quantity: number;
  orderProductColors: null;
  orderProductSizes: null;
  orderProductFeatures: any[];
  orderId: number;
  productId: number;
  supportDynamicPricing: boolean;
  orderProductWeightUpdate: null;
  dynamicWeightDetails: DynamicWeightDetails;
  notAvailable: boolean;
  productReplacement: null;
  isBigItem: boolean;
  finalWeight: number;
  finalPrice: number;
  finalWeightToDisplay: number;
  finalPriceToDisplay: number;
  strikedPriceToDisplay: null;
  finalPriceOfExtrasToDisplay: number;
  finalPriceWithExtrasToDisplay: number;
  quantityTypeToDisplay: number;
  unitTypeToDisplay: number;
  weightBeforeUpdateToDisplay: null;
  priceBeforeUpdateToDisplay: null;
  strikedPriceBeforeUpdateToDisplay: null;
  dealProduct: null;
  orderDealProductId: null;
}

interface DynamicWeightDetails {
  quantityType: number;
  avgWeightPerItem: null;
  pricePerWeight: null;
  weightToPresent: null;
  unitDetails: UnitDetails;
}

interface UnitDetails {
  stepSize: number;
  unitType: number;
}

interface ProductImage {
  id: number;
  priority: number;
  serverImageUrl: string;
  smallImageUrl: string;
  blurhash: string | null;
}

interface Name {
  ar: string;
  "en-US": string;
  he: string;
}

interface Meals2 {
  id: number;
  quantity: number;
  mealContents: MealContent[];
  smallImage: string;
  price: number;
  serverImage: string;
  blurhash: string;
  name: string;
  name_AR: string;
  name_EN: string;
  name_HE: string;
  name_FR: string;
  namesDictionary: null;
  isPizza: boolean;
  prioirty: number;
  mealTypePriority: number;
  isPartialMealContentPricing: boolean;
  finalPriceToDisplay: number;
  finalPriceOfExtrasToDisplay: number;
  finalPriceWithExtrasToDisplay: number;
}

interface MealContent {
  id: number;
  type: number;
  price: number;
  smallImageUrl: string;
  serverImageUrl: string;
  name: string;
  name_AR: string;
  name_EN: string;
  name_HE: string;
  name_FR: null;
  qty: number;
  mealContentType: number;
  group: number;
  priority: number;
  hideExtra: boolean;
  isPizza: boolean;
  mealContentPrinting: number;
}

interface Meal {
  id: number;
  quantity: number;
  mealContents: any[];
  smallImage: string;
  price: number;
  serverImage: string;
  blurhash: string;
  name: string;
  name_AR: string;
  name_EN: string;
  name_HE: string;
  name_FR: string;
  namesDictionary: null;
  isPizza: boolean;
  prioirty: number;
  mealTypePriority: number;
  isPartialMealContentPricing: boolean;
  finalPriceToDisplay: number;
  finalPriceOfExtrasToDisplay: number;
  finalPriceWithExtrasToDisplay: number;
}

interface Details {
  id: number;
  name: string;
  name_AR: string;
  name_HE: string;
  name_EN: string;
  address: string;
  address_AR: string;
  address_HE: string;
  address_EN: string;
  latitude: number;
  longitude: number;
  havePrivateDelivery: boolean;
  phoneNumber: string;
  priority: number;
  restaurantCategoryId: number;
  images: Image[];
  workingHours: WorkingHour[];
  icon: string;
  smallIcon: string;
  status: number;
}

interface WorkingHour {
  dayOfWeek: number;
  fromHour: number;
  toHour: number;
  fromHourDate: string;
  toHourDate: string;
}

interface Image {
  id: number;
  serverImageUrl: string;
  smallImageUrl: string;
  priority: number;
}
