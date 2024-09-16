import { z } from "zod";

import { ProductSchema } from "../store/product";

export const OrderItemSchema = z.object({
  product: ProductSchema,
  quantity: z.number(),
  price: z.number(),
  discount: z.number().optional(),
});
