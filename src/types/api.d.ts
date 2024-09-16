interface LocalizedString {
  ar?: string | null;
  he?: string | null;
  "en-US"?: string | null;
  fr?: string | null;
}

interface Image {
  id: number;
  serverImageUrl: string;
  smallImageUrl: string;
  blurhash: string | null;
  priority: number;
  group?: string | null;
}

interface ProductImage extends Image {}

interface ProductFeatureItem {
  id: number;
  name: LocalizedString;
  serverImageUrl: string | null;
  smallImageUrl: string | null;
  blurhash: string;
  priority: number;
  hide: boolean;
  isDefault: boolean;
  notAvailable: boolean;
  extraPrice: number;
}

interface ProductFeature {
  id: number;
  name: LocalizedString;
  hide: boolean;
  notAvailable: boolean;
  featureItems: ProductFeatureItem[];
}

interface ProductDynamicWeightData {
  supportDynamicPricing: boolean;
  maxWeightPercentage: number;
}

interface DynamicWeightDetails {
  quantityType: number;
  avgWeightPerItem: number | null;
  pricePerWeight: number | null;
  weightToPresent: number | null;
  unitDetails: UnitDetails;
}

interface UnitDetails {
  stepSize: number;
  unitType: number;
}

interface Product {
  id: number;
  name: LocalizedString | Record<string, string>;
  description?: LocalizedString;
  categoryId?: number;
  subCategoryId?: number;
  unitType?: number;
  minUnit?: number;
  maxUnit?: number;
  unitStep?: number;
  productColors?: unknown[];
  productSizes?: unknown[];
  productFeatures?: ProductFeature[];
  marketCategoryId?: number;
  marketSubCategoryId?: number;
  noVat?: boolean;
  quantityType?: string;
  unitDetails?: string | null;
  barcode?: string | null;
  productCode?: string | null;
  discount?: unknown | null;
  discountsHistories?: unknown | null;
  availability?: unknown[];
  productDynamicWeightData?: ProductDynamicWeightData;
  productDeal?: unknown | null;
  brandId?: number;
  brandName?: string | null;
  isCocaColaBrand?: boolean;
  priority?: number;
  basePrice?: number;
  hide?: boolean;
  notAvailable?: boolean;
  discountPercentage?: number;
  discountPrice?: number;
  productImages: ProductImage[];
  supportDynamicPricing?: boolean;
  pricePerWeight?: unknown | null;
  avgWeightPerItem?: unknown | null;
  weightToPresent?: unknown | null;
  isBigItem?: boolean;
  quantity?: number;
  orderProductColors?: string[] | null;
  orderProductSizes?: string[] | null;
  orderProductFeatures?: string[];
  orderId?: number;
  productId?: number;
  orderProductWeightUpdate?: string | null;
  dynamicWeightDetails?: DynamicWeightDetails;
  finalWeight?: number;
  finalPrice?: number;
  finalWeightToDisplay?: number;
  finalPriceToDisplay?: number;
  strikedPriceToDisplay?: number | null;
  finalPriceOfExtrasToDisplay?: number;
  finalPriceWithExtrasToDisplay?: number;
  quantityTypeToDisplay?: number;
  unitTypeToDisplay?: number;
  weightBeforeUpdateToDisplay?: string | null;
  priceBeforeUpdateToDisplay?: string | null;
  strikedPriceBeforeUpdateToDisplay?: string | null;
  dealProduct?: string | null;
  orderDealProductId?: number | null;
}

interface MarketSubcategory {
  id: number;
  name: LocalizedString;
  serverImageUrl: string | null;
  smallImageUrl: string | null;
  priority: number;
  hide: boolean;
  products: Product[];
  productsCount: number;
  hasDiscount: boolean;
  supportDynamicPricing: boolean;
  discountsHistories: unknown | null; // Replace with specific type if known
}

interface MarketCategory {
  id: number;
  name: LocalizedString;
  serverImageUrl: string;
  smallImageUrl: string;
  priority: number;
  hide: boolean;
  marketSubcategories: MarketSubcategory[];
  productsCount: number;
  hasDiscount: boolean;
  supportDynamicPricing: boolean;
}

interface MarketBanner extends Image {}

interface MarketWorkingHour {
  dayOfWeek: number;
  fromHour: number;
  toHour: number;
  isActive: boolean;
  utcOffset: number;
  countryId: number;
  specialWorkingHours: unknown | null; // Replace with specific type if known
  type: number;
  fromHourDate: string;
  toHourDate: string;
}

interface ShareMarketData {
  url: string;
  message: string;
}

interface BusinessNotice {
  noticeTitle: LocalizedString;
  noticeMessage: LocalizedString;
}

interface MarketResponse {
  id: number;
  name: LocalizedString;
  address: LocalizedString;
  description: LocalizedString;
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
  busyExpirationDate: string | null;
  marketCategories: MarketCategory[];
  marketBanners: MarketBanner[];
  marketWorkingHours: MarketWorkingHour[];
  deliveryFeeLabel: string | null;
  shareMarketData: ShareMarketData;
  isMarketPreferredForUser: boolean;
  dealsAndDiscountsCategory: unknown | null;
  businessNotice: BusinessNotice;
  popUpList: unknown[];
}
