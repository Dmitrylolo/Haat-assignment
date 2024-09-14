interface Store {
  id: number;
  name?: string;
  address?: string;
  description: Name;
  iconServerImageUrl: string;
  iconSmallImageUrl: string;
  priority?: number;
  status?: number;
  discount: number;
  longitude: number;
  latitude: number;
  phoneNumber: string;
  isReady: boolean;
  noDelivery: boolean;
  noPick: boolean;
  noSeat: boolean;
  autoRefreshEnabled: boolean;
  busyExpirationDate: null;
  marketCategories: MarketCategory[];
  marketBanners: MarketBanner[];
  marketWorkingHours: MarketWorkingHour[];
  deliveryFeeLabel: null;
  shareMarketData: ShareMarketData;
  isMarketPreferredForUser: boolean;
  dealsAndDiscountsCategory: null;
  businessNotice: BusinessNotice;
  popUpList: any[];
}

interface BusinessNotice {
  noticeTitle: NoticeTitle;
  noticeMessage: Name;
}

interface NoticeTitle {
  ar: null;
  he: null;
  "en-US": null;
  fr: null;
}

interface ShareMarketData {
  url: string;
  message: string;
}

interface MarketWorkingHour {
  dayOfWeek: number;
  fromHour: number;
  toHour: number;
  isActive: boolean;
  utcOffset: number;
  countryId: number;
  specialWorkingHours: null;
  type: number;
  fromHourDate: string;
  toHourDate: string;
}

interface MarketBanner {
  id: number;
  serverImageUrl: string;
  smallImageUrl: string;
  priority: number;
}

interface MarketCategory {
  marketSubcategories: MarketSubcategory[];
  id: number;
  name: Name;
  serverImageUrl: string;
  smallImageUrl: string;
  priority: number;
  hide: boolean;
  productsCount: number;
  hasDiscount: boolean;
  supportDynamicPricing: boolean;
}

interface MarketSubcategory {
  id: number;
  name: Name2;
  serverImageUrl: null;
  smallImageUrl: null;
  priority: number;
  hide: boolean;
  products: Product[];
  productsCount: number;
  hasDiscount: boolean;
  supportDynamicPricing: boolean;
  discountsHistories: null;
}

interface Product {
  name: Name3;
  description: Description;
  categoryId: number;
  subCategoryId: number;
  unitType: number;
  minUnit: number;
  maxUnit: number;
  unitStep: number;
  productColors: ProductColor[][];
  productSizes: ProductSize[][];
  productFeatures: ProductFeature[][];
  marketCategoryId: number;
  marketSubCategoryId: number;
  noVat: boolean;
  quantityType: string;
  unitDetails: null;
  barcode: null;
  productCode: null;
  discount: null;
  discountsHistories: null;
  availability: any[];
  productDynamicWeightData: ProductDynamicWeightData;
  productDeal: null;
  brandId: number;
  brandName: null;
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
  pricePerWeight: null;
  avgWeightPerItem: null;
  weightToPresent: null;
  isBigItem: boolean;
}

interface ProductImage {
  id: number;
  priority: number;
  serverImageUrl: string;
  smallImageUrl: string;
  blurhash: null | null | null | string;
  group: null | null | null | number;
}

interface ProductDynamicWeightData {
  supportDynamicPricing: boolean;
  maxWeightPercentage: number;
}

interface ProductFeature {
  id: number;
  name: Name2;
  hide: boolean;
  notAvailable: boolean;
  featureItems: FeatureItem[];
}

interface FeatureItem {
  id: number;
  name: Name2;
  serverImageUrl: null | string | string;
  smallImageUrl: null | string | string;
  blurhash: string;
  priority: number;
  hide: boolean;
  isDefault: boolean;
  notAvailable: boolean;
  extraPrice: number;
}

interface ProductSize {
  id: number;
  name: Name2;
  serverImageUrl: null | string;
  smallImageUrl: null | string;
  blurhash: string;
  priority: number;
  hide: boolean;
  isDefault: boolean;
  notAvailable: boolean;
  extraPrice: number;
}

interface ProductColor {
  id: number;
  name: Name2;
  serverImageUrl: null;
  smallImageUrl: null;
  blurhash: string;
  priority: number;
  hide: boolean;
  isDefault: boolean;
  notAvailable: boolean;
  extraPrice: number;
  hexColor: string;
}

interface Description {
  ar: null;
  "en-US": null;
  he: null;
}

interface Name3 {
  ar: string;
  "en-US": null | string | string | string;
  he: null | string | string | string;
}

interface Name2 {
  ar: string;
  "en-US": string;
  he: string;
}

interface Name {
  ar: string;
  he: string;
  "en-US": string;
  fr: string;
}
