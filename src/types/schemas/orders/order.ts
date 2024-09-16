import { z } from "zod";

import { OrderItemSchema } from "./orderItem";

export const OrderSchema = z.object({
  id: z.number(),
  customerId: z.number(),
  items: OrderItemSchema.array(),
  totalPrice: z.number(),
  createdAt: z.string(), // ISO date
  status: z.enum(["pending", "completed", "cancelled"]),
});
