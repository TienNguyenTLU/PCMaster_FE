import type { CartItem } from "@/components/pcmaster/data/mockData";
import { CART_ITEMS } from "@/components/pcmaster/data/mockData";
import type { Product } from "@/components/pcmaster/explore/types";

const CART_STORAGE_KEY = "pcmaster-cart-items";
export const CART_UPDATED_EVENT = "pcmaster-cart-updated";

function emitCartUpdated() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(CART_UPDATED_EVENT));
  }
}

export function loadCartItems(): CartItem[] {
  if (typeof window === "undefined") {
    return CART_ITEMS;
  }

  const raw = window.localStorage.getItem(CART_STORAGE_KEY);
  if (!raw) {
    return CART_ITEMS;
  }

  try {
    const parsed = JSON.parse(raw) as CartItem[];
    if (Array.isArray(parsed)) {
      return parsed;
    }
  } catch {
    return CART_ITEMS;
  }

  return CART_ITEMS;
}

export function saveCartItems(items: CartItem[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  emitCartUpdated();
}

export function addProductToCart(product: Product) {
  const existing = loadCartItems();
  const found = existing.find((item) => item.id === product.id);

  const next = found
    ? existing.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      )
    : [
        ...existing,
        {
          id: product.id,
          name: product.name,
          subtitle: `${product.vram} • ${product.brand}`,
          price: product.price,
          quantity: 1,
          image: product.image,
        },
      ];

  saveCartItems(next);
}

export function removeCartItem(itemId: string) {
  saveCartItems(loadCartItems().filter((item) => item.id !== itemId));
}

export function changeCartItemQuantity(itemId: string, delta: number) {
  const next = loadCartItems()
    .map((item) =>
      item.id === itemId
        ? {
            ...item,
            quantity: Math.max(1, item.quantity + delta),
          }
        : item,
    )
    .filter((item) => item.quantity > 0);

  saveCartItems(next);
}
