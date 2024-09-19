interface LocalizedName {
  name: string;
  name_AR: string;
  name_EN: string;
  name_HE: string;
  name_FR?: string | null;
}

interface LocalizedString {
  ar: string;
  "en-US": string;
  he: string;
  fr?: string;
}

interface RestaurantImage {
  id: number;
  serverImageUrl: string;
  smallImageUrl: string;
  priority: number;
}

interface WorkingHour {
  dayOfWeek: number;
  fromHour?: number;
  toHour?: number;
  fromHourDate?: string;
  toHourDate?: string;
}

interface RestaurantDetail {
  details: RestaurantDetails;
  meals: Meal[];
  deals: unknown[];
  products: unknown[];
}

interface RestaurantDetails extends LocalizedName {
  id: number;
  address: string;
  address_AR: string;
  address_HE: string;
  address_EN: string;
  latitude: number;
  longitude: number;
  phoneNumber: string;
  priority: number;
  restaurantCategoryId: number;
  images: RestaurantImage[];
  workingHours: WorkingHour[];
  icon: string;
  smallIcon: string;
  status: number;
  havePrivateDelivery: boolean;
}

interface MealContent extends LocalizedName {
  id: number;
  type: number;
  price: number;
  smallImageUrl: string;
  serverImageUrl: string;
  qty: number;
  mealContentType: number;
  group: number;
  priority: number;
  hideExtra: boolean;
  isPizza: boolean;
  mealContentPrinting: number;
}

interface Meal extends LocalizedName {
  id: number;
  quantity: number;
  mealContents: MealContent[];
  smallImage: string;
  price: number;
  serverImage: string;
  blurhash: string;
  prioirty: number;
  mealTypePriority: number;
  isPartialMealContentPricing: boolean;
  finalPriceToDisplay: number;
  finalPriceOfExtrasToDisplay: number;
  finalPriceWithExtrasToDisplay: number;
}

interface DeliveryFeeDetails {
  taskCost: number;
  userFee: number;
  originalUserFee: number;
  userExtraFees: unknown[];
  restaurantFeeCoverage: number;
  haatMarketingFeeCoverage: number;
  haatOperationFeeCoverage: number;
  userPricingModel: number;
  driverPricingModel: number;
}

interface CurrencyData {
  symbol: string;
  names: LocalizedString;
}

interface CocaColaCampaignDetails {
  hasCocaColaBrand: boolean;
  isDone: boolean;
}

interface Invoice {
  link: string;
  title: LocalizedString;
}

interface Order {
  id: number;
  longitude: number;
  paymentMethod: number;
  latitude: number;
  companyId: number;
  driverId: string | null;
  price: number;
  orderDate: string;
  acceptedDate: string | null;
  pickedDate: string | null;
  arriveDate: string | null;
  meals: Meal[] | null;
  deals: unknown[] | null;
  estimationTime: number | null;
  driverPrice: number;
  restaurantPrice: number;
  address: string | null;
  withDriver: boolean;
  restaurantIds: unknown[] | null;
  discount: unknown | null;
  couponCode: unknown | null;
  restaurantId: number;
  startPrepare: string | null;
  receiptCode: string | number | null;
  transactionCode: string | null;
  operatingSystem: unknown | null;
  deviceType: unknown | null;
  rejectedDateByRestaurant: string | null;
  rejectReason: number | null;
  driverName: string | null;
  driverPhoneNumber: string | null;
  driverImage: string | null;
  timeToUser: number;
  userFeedBack: boolean;
  donePrepare: string | null;
  driverDescription: string | null;
  appVersion: unknown | null;
  creditCardToken: unknown | null;
  cardYear: unknown | null;
  cardMonth: unknown | null;
  phoneNumber: unknown | null;
  userName: unknown | null;
  email: unknown | null;
  payRestaurant: number;
  getFromClient: number;
  deliveryType: number;
  restaurantDetail: RestaurantDetail;
  tokenCardType: number;
  areaId: unknown | null;
  locationAccuracy: unknown | null;
  serviceFee: number;
  paymentMethodId: unknown | null;
  deliveryFeeDetails: DeliveryFeeDetails;
  l4digits: string | null;
  currencyData: CurrencyData;
  isCibus: boolean;
  remakeDetails: unknown | null;
  isRemake: boolean;
  isCanceled: boolean;
  cancellationReason: string | null;
  cocaColaCampaignDetails: CocaColaCampaignDetails;
  productReplacementSuggestions: unknown[];
  customerNotes: unknown | null;
  posOrderId: unknown | null;
  credits: number;
  scheduledOrderDetails: unknown | null;
  invoices: Invoice[];
  referenceNumber: string | number | null;
}

type Orders = Order[];
interface Coordinate {
  latitude: number;
  longitude: number;
}

interface Area {
  areaId: number;
  coordinates: Coordinate[];
  latitude: number;
  longitude: number;
  distance: number;
  name: string;
  countryId: number;
  isNew?: boolean;
  isReadyArea?: boolean;
  isMarketReady?: boolean;
  isRestaurantReady?: boolean;
}

interface AreasContainer {
  areasInCountry: Area[];
  areasOutOfCountry: Area[];
}

interface Version {
  iosMinVersion: number;
  androidMinVersion: number;
}

interface Currency {
  currencyId: number;
  symbol: string;
  name: string;
}

interface ForceUpdateSettings {
  messageTitle: string | null;
  messageBody: string | null;
  androidVersion: number;
  iosVersion: number;
}

interface RegularUpdateSettings {
  messageTitle: string | null;
  messageBody: string | null;
  androidVersion: number;
  iosVersion: number;
}

interface AppUpdateSettings {
  forceUpdateSettings: ForceUpdateSettings;
  regularUpdateSettings: RegularUpdateSettings;
}

interface Announcement {
  title: string | null;
  message: string | null;
}

interface RestrictionMessage {
  title: string;
  message: string;
}

interface AreaSettings {
  areaStatus: number;
  isAnnouncement: boolean;
  announcement: Announcement;
  restrictionMessage: RestrictionMessage;
  pickupWorkingHours: WorkingHour[];
  deliveryWorkingHours: WorkingHour[];
}

interface Image {
  serverImage: string | null;
  smallServerImage: string | null;
  blurhashImage: string | null;
}

interface TagImages {
  serverImage: string | null;
  smallServerImage: string | null;
  blurhashImage: string | null;
}

interface Tag {
  id: number;
  name: string;
  images: TagImages;
  backgroundColor: string | null;
}

interface StoreRating {
  value: number;
  numberOfRatings: string;
}

type CategoryStore = Store | StoreElement;

interface Labels {
  text: string;
  labelType: string;
}

interface Store {
  storeId: number;
  name: string;
  address: string;
  opacity: number;
  distance: number;
  icon: Image;
  rating?: StoreRating | null;
  labels?: Labels[];
  closestWorkingHour?: string | null;
  is24Hours: boolean;
  priority: number;
  status: number;
  isNew?: boolean;
  zoneId?: string | null;
  recommendedPriority: number;
}

interface StoreElement {
  storeId: number;
  title?: string;
  subTitle?: string;
  backgroundImage?: Image;
  foregroundImage?: Image[];
}

type CategoryElementType =
  | "MarketHorizontalCategory"
  | "MarketVerticalCategory"
  | "SuggestedMarketsCategory";

interface Category {
  id: number;
  priority: number;
  elementType: CategoryElementType | string;
  name: string;
  backgroundImage?: Image;
  topImage?: Image;
  topImageType?: number;
  isSponsored?: boolean;
  viewAll?: boolean;
  backgroundColor?: string | null;
  stores: CategoryStore[];
}

interface MainPageBanners {
  interval: number;
  banners: any[];
}

interface Tags {
  title: string;
  tags: Tag[];
}

interface AppSettings {
  version: Version;
  customerServicePhone: string;
  imageServer: string;
  currency: Currency;
  appUpdateSettings: AppUpdateSettings;
}

interface MainAppData {
  isInOperating: boolean;
  closestArea: unknown | null;
  areasContainer: AreasContainer;
  appSettings: AppSettings;
  areaSettings: AreaSettings;
  tags: Tags;
  mainPageBanners: MainPageBanners;
  categories: Category[];
}

interface LanguageName {
  ar?: string | null;
  "en-US"?: string | null;
  he?: string | null;
  fr?: string | null;
}

interface ProductFeatureItem {
  id: number;
  name: LanguageName;
  serverImageUrl?: string | null;
  smallImageUrl?: string | null;
  blurhash?: string | null;
  priority: number;
  hide: boolean;
  isDefault: boolean;
  notAvailable: boolean;
  extraPrice: number;
}

interface ProductFeature {
  id: number;
  name: LanguageName;
  hide: boolean;
  notAvailable: boolean;
  featureItems: ProductFeatureItem[];
}

interface ProductImage {
  id: number;
  priority: number;
  serverImageUrl: string;
  smallImageUrl: string;
  blurhash?: string | null;
  group?: string | null | number;
}

interface ProductDynamicWeightData {
  supportDynamicPricing: boolean;
  maxWeightPercentage: number;
}

interface Product {
  name: LanguageName;
  description?: LanguageName;
  categoryId: number;
  subCategoryId: number;
  unitType: number;
  minUnit: number;
  maxUnit: number;
  unitStep: number;
  productColors: unknown[];
  productSizes: unknown[];
  productFeatures: ProductFeature[];
  marketCategoryId: number;
  marketSubCategoryId: number;
  noVat: boolean;
  quantityType: string;
  unitDetails?: unknown | null;
  barcode?: unknown | null;
  productCode?: unknown | null;
  discount?: unknown | null;
  discountsHistories?: unknown | null;
  availability: unknown[];
  productDynamicWeightData: ProductDynamicWeightData;
  productDeal?: unknown | null;
  brandId: number;
  brandName?: unknown | null;
  isCocaColaBrand: boolean;
  id: number;
  priority: number;
  basePrice: number;
  hide: boolean;
  notAvailable: boolean;
  discountPercentage: number;
  discountPrice: number;
  productImages: ProductImage[];
  supportDynamicPricing: boolean;
  pricePerWeight?: unknown | null;
  avgWeightPerItem?: unknown | null;
  weightToPresent?: unknown | null;
  isBigItem: boolean;
}

interface MarketSubcategory {
  id: number;
  name: LanguageName;
  serverImageUrl?: string | null;
  smallImageUrl?: string | null;
  priority: number;
  hide: boolean;
  products: Product[];
  productsCount: number;
  hasDiscount: boolean;
  supportDynamicPricing: boolean;
  discountsHistories?: unknown | null;
}

interface MarketCategory {
  id: number;
  name: LanguageName;
  serverImageUrl?: string | null;
  smallImageUrl?: string | null;
  priority: number;
  hide: boolean;
  marketSubcategories: MarketSubcategory[];
  productsCount: number;
  hasDiscount: boolean;
  supportDynamicPricing: boolean;
}

interface MarketBanner {
  id: number;
  serverImageUrl: string;
  smallImageUrl: string;
  priority: number;
}

interface MarketWorkingHour {
  dayOfWeek: number;
  fromHour: number;
  toHour: number;
  isActive: boolean;
  utcOffset: number;
  countryId: number;
  specialWorkingHours?: unknown | null;
  type: number;
  fromHourDate: string;
  toHourDate: string;
}

interface BusinessNotice {
  noticeTitle: LanguageName;
  noticeMessage: LanguageName;
}

interface ShareMarketData {
  url: string;
  message: string;
}

interface StoreResponse {
  id: number;
  name: LanguageName;
  address: LanguageName;
  description?: LanguageName;
  iconServerImageUrl: string;
  iconSmallImageUrl: string;
  priority: number;
  status: number;
  discount: number;
  longitude: number;
  latitude: number;
  phoneNumber: string;
  isReady: boolean;
  noDelivery: boolean;
  noPick: boolean;
  noSeat: boolean;
  autoRefreshEnabled: boolean;
  busyExpirationDate?: unknown | null;
  marketCategories: MarketCategory[];
  marketBanners: MarketBanner[];
  marketWorkingHours: MarketWorkingHour[];
  deliveryFeeLabel?: unknown | null;
  shareMarketData: ShareMarketData;
  isMarketPreferredForUser: boolean;
  dealsAndDiscountsCategory?: unknown | null;
  businessNotice: BusinessNotice;
  popUpList: unknown[];
}
