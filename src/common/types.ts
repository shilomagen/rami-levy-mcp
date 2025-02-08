import { z } from "zod";

// Base schemas for common types
export const CartItemSchema = z.object({
  id: z.number().describe("Product identifier"),
  quantity: z.number().min(1).describe("Quantity of the product"),
});

export const CartResponseItemSchema = z.object({
  countUsesSale: z.record(z.string(), z.number()).optional(),
  FormatedSavePrice: z.number(),
  FormatedTotalPrice: z.number(),
  FormatedSavePriceClub: z.number(),
  FormatedTotalPriceClub: z.number(),
  finalPriceClub: z.number(),
  id: z.number(),
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
  has_coupon: z.boolean(),
  is_delivery: z.boolean(),
  isClub: z.boolean(),
});

export const CartResponseSchema = z.object({
  items: z.array(CartResponseItemSchema),
  price: z.number(),
  priceClub: z.number(),
  discount: z.number(),
  quantity: z.number(),
  status: z.number(),
});

// Simplified product schema with only the fields we need
export const SimpleProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.object({
    price: z.number(),
  }),
  images: z.object({
    small: z.string(),
  }),
});

// Transform function to convert raw product data to simplified format
export const transformProduct = (product: any) => ({
  id: product.id,
  name: product.name,
  price: product.price.price,
  images: `https://www.rami-levy.co.il${product.images?.small || ""}`,
});

export const SearchResponseSchema = z.object({
  data: z
    .array(z.any())
    .transform((items) => items.map((item) => transformProduct(item))),
  total: z.number(),
  status: z.number(),
});

// Type exports
export type CartItem = z.infer<typeof CartItemSchema>;
export type CartResponse = z.infer<typeof CartResponseSchema>;
export type CartResponseItem = z.infer<typeof CartResponseItemSchema>;
export type SimpleProduct = z.infer<typeof SimpleProductSchema>;
export type SearchResponse = z.infer<typeof SearchResponseSchema>;
