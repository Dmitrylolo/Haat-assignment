interface Market {
  isInOperating: boolean;
  closestArea: null | string;
  areasContainer: AreasContainer;
  appSettings: AppSettings;
  areaSettings: AreaSettings;
  tags: Tags;
  mainPageBanners: MainPageBanners;
  categories: Category[];
}

interface Category {
  id: number;
  priority: number;
  elementType: string;
  name: string;
  backgroundImage?: BackgroundImage;
  topImage?: Images;
  topImageType?: number;
  isSponsored?: boolean;
  viewAll?: boolean;
  backgroundColor?: null | string;
  stores: Store[];
  title?: null | string;
  maxRows?: number;
}

interface Store {
  storeId: number;
  name?: string;
  address?: string;
  opacity?: number;
  distance?: number;
  icon?: Icon;
  rating?: Rating | Rating | null | null;
  labels?: (Label | Label)[];
  closestWorkingHour?: null | null | string | string;
  is24Hours?: boolean;
  priority?: number;
  status?: number;
  isNew?: boolean;
  zoneId?: null | string;
  recommendedPriority?: number;
  backgroundImage?: BackgroundImage2;
  foregroundImage?: ForegroundImage[];
  title?: string;
  subTitle?: string;
}

interface ForegroundImage {
  serverImage: null | string | string;
  smallServerImage: null | string;
  blurhashImage: null | string | string;
}

interface BackgroundImage2 {
  serverImage: string;
  smallServerImage: null | string;
  blurhashImage: string;
}

interface Label {
  text: string;
  labelType: string;
}

interface Rating {
  value: number;
  numberOfRatings: string;
}

interface Icon {
  serverImage: null | null | string | string;
  smallServerImage: null | null | string | string;
  blurhashImage: null | string;
}

interface BackgroundImage {
  serverImage: null | string;
  smallServerImage: null | string;
  blurhashImage: null | string;
}

interface MainPageBanners {
  interval: number;
  banners: any[];
}

interface Tags {
  title: string;
  tags: Tag[];
}

interface Tag {
  id: number;
  name: string;
  images: Images;
  backgroundColor: null | string;
}

interface Images {
  serverImage: null | string;
  smallServerImage: null | string;
  blurhashImage: null | string;
}

interface AreaSettings {
  areaStatus: number;
  isAnnouncement: boolean;
  announcement: Announcement;
  restrictionMessage: RestrictionMessage;
  pickupWorkingHours: PickupWorkingHour[];
  deliveryWorkingHours: PickupWorkingHour[];
  aggregatedDeliveryWorkingHours: AggregatedDeliveryWorkingHour[];
  aggregatedPickupWorkingHours: AggregatedDeliveryWorkingHour[];
}

interface AggregatedDeliveryWorkingHour {
  fromDay: number;
  toDay: number;
  fromHour: number;
  toHour: number;
  type: number;
}

interface PickupWorkingHour {
  dayOfWeek: number;
  from: number;
  to: number;
  type: number;
}

interface RestrictionMessage {
  title: string;
  message: string;
}

interface Announcement {
  title: null | string;
  message: null | string;
}

interface AppSettings {
  version: Version;
  customerServicePhone: string;
  imageServer: string;
  currency: Currency;
  appUpdateSettings: AppUpdateSettings;
}

interface AppUpdateSettings {
  forceUpdateSettings: ForceUpdateSettings;
  regularUpdateSettings: ForceUpdateSettings;
}

interface ForceUpdateSettings {
  messageTitle: string;
  messageBody: string;
  androidVersion: number;
  iosVersion: number;
}

interface Currency {
  currencyId: number;
  symbol: string;
  name: string;
}

interface Version {
  iosMinVersion: number;
  androidMinVersion: number;
}

interface AreasContainer {
  areasInCountry: any[];
  areasOutOfCountry: AreasOutOfCountry[];
  allAreas: AreasOutOfCountry[];
}

interface AreasOutOfCountry {
  areaId: number;
  coordinates: Coordinate[];
  latitude: number;
  longitude: number;
  distance: number;
  name: string;
  countryId: number;
  isNew: boolean;
  isReadyArea: boolean;
  isMarketReady: boolean;
  isRestaurantReady: boolean;
}

interface Coordinate {
  latitude: number;
  longitude: number;
}
