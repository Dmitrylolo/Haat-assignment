import { z } from "zod";

import { LocalizedStringSchema } from "../shared/localizedString";
import { DynamicWeightDetailsSchema } from "./dynamicWeightDetails";
import { ProductDynamicWeightDataSchema } from "./productDynamicWeightData";
import { ProductFeatureSchema } from "./productFeature";
import { ProductImageSchema } from "./productImage";

export const ProductSchema = z.object({
  id: z.number(),
  name: z.union([LocalizedStringSchema, z.record(z.string())]),
  description: LocalizedStringSchema.optional(),
  categoryId: z.number().optional(),
  subCategoryId: z.number().optional(),
  unitType: z.number().optional(),
  minUnit: z.number().optional(),
  maxUnit: z.number().optional(),
  unitStep: z.number().optional(),
  productColors: z.unknown().array().optional(),
  productSizes: z.unknown().array().optional(),
  productFeatures: ProductFeatureSchema.array().optional(),
  marketCategoryId: z.number().optional(),
  marketSubCategoryId: z.number().optional(),
  noVat: z.boolean().optional(),
  quantityType: z.string().optional(),
  unitDetails: z.string().nullable().optional(),
  barcode: z.string().nullable().optional(),
  productCode: z.string().nullable().optional(),
  discount: z.unknown().nullable().optional(),
  discountsHistories: z.unknown().nullable().optional(),
  availability: z.unknown().array().optional(),
  productDynamicWeightData: ProductDynamicWeightDataSchema.optional(),
  productDeal: z.unknown().nullable().optional(),
  brandId: z.number().optional(),
  brandName: z.string().nullable().optional(),
  isCocaColaBrand: z.boolean().optional(),
  priority: z.number().optional(),
  basePrice: z.number().optional(),
  hide: z.boolean().optional(),
  notAvailable: z.boolean().optional(),
  discountPercentage: z.number().optional(),
  discountPrice: z.number().optional(),
  productImages: ProductImageSchema.array(),
  supportDynamicPricing: z.boolean().optional(),
  pricePerWeight: z.unknown().nullable().optional(),
  avgWeightPerItem: z.unknown().nullable().optional(),
  weightToPresent: z.unknown().nullable().optional(),
  isBigItem: z.boolean().optional(),
  quantity: z.number().optional(),
  orderProductColors: z.string().array().nullable().optional(),
  orderProductSizes: z.string().array().nullable().optional(),
  orderProductFeatures: z.string().array(),
  orderId: z.number().optional(),
  productId: z.number().optional(),
  orderProductWeightUpdate: z.string().nullable().optional(),
  dynamicWeightDetails: DynamicWeightDetailsSchema.optional(),
  finalWeight: z.number().optional(),
  finalPrice: z.number().optional(),
  finalWeightToDisplay: z.number().optional(),
  finalPriceToDisplay: z.number().optional(),
  strikedPriceToDisplay: z.number().nullable().optional(),
  finalPriceOfExtrasToDisplay: z.number(),
  finalPriceWithExtrasToDisplay: z.number(),
  quantityTypeToDisplay: z.number(),
  unitTypeToDisplay: z.number(),
  weightBeforeUpdateToDisplay: z.string().nullable().optional(),
  priceBeforeUpdateToDisplay: z.string().nullable().optional(),
  strikedPriceBeforeUpdateToDisplay: z.string().nullable().optional(),
  dealProduct: z.string().nullable().optional(),
  orderDealProductId: z.number().nullable().optional(),
});
