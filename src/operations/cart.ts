import { z } from "zod";
import { ramiLevyRequest } from "../common/utils.js";
import { CartItemSchema, CartResponseSchema } from "../common/types.js";

const CART_API_URL = "https://www.rami-levy.co.il/api/v2/cart";

// Schema definitions for cart operations
export const AddToCartSchema = z.object({
  store: z.string().describe("Store identifier (e.g., '331')"),
  items: z.array(CartItemSchema).describe("List of items to add to cart"),
});

export const RemoveFromCartSchema = z.object({
  store: z.string().describe("Store identifier"),
  items: z
    .array(CartItemSchema)
    .describe("Updated list of items to keep in cart"),
});

export const UpdateQuantitySchema = z.object({
  store: z.string().describe("Store identifier"),
  id: z.number().describe("Product identifier"),
  newQuantity: z.number().min(1).describe("New quantity for the product"),
});

// Function implementations
export async function addToCart(params: z.infer<typeof AddToCartSchema>) {
  const payload = {
    store: params.store,
    isClub: 0,
    supplyAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Tomorrow
    items: Object.fromEntries(
      params.items.map((item) => [item.id.toString(), item.quantity.toString()])
    ),
    meta: null,
  };

  const response = await ramiLevyRequest(CART_API_URL, {
    method: "POST",
    body: payload,
  });

  return CartResponseSchema.parse(response);
}

export async function removeFromCart(
  params: z.infer<typeof RemoveFromCartSchema>
) {
  const payload = {
    store: params.store,
    isClub: 0,
    supplyAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    items: Object.fromEntries(
      params.items.map((item) => [item.id.toString(), item.quantity.toString()])
    ),
    meta: null,
  };

  const response = await ramiLevyRequest(CART_API_URL, {
    method: "POST",
    body: payload,
  });

  return CartResponseSchema.parse(response);
}

export async function updateQuantity(
  params: z.infer<typeof UpdateQuantitySchema>
) {
  // First, get current cart
  const currentCart = await ramiLevyRequest(CART_API_URL);
  const parsedCart = CartResponseSchema.parse(currentCart);

  // Update the quantity for the specified item
  const updatedItems = parsedCart.items.map((item) => ({
    id: item.id,
    quantity: item.id === params.id ? params.newQuantity : item.quantity,
  }));

  // Submit updated cart
  return removeFromCart({
    store: params.store,
    items: updatedItems,
  });
}
