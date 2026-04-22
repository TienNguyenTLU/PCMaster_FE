"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ReceiptText, ShieldCheck, ShoppingCart, Trash2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { PcMasterFooter } from "@/components/pcmaster/PcMasterFooter";
import { PcMasterTopNav } from "@/components/pcmaster/PcMasterTopNav";
import {
  CART_UPDATED_EVENT,
  changeCartItemQuantity,
  loadCartItems,
  removeCartItem,
} from "@/components/pcmaster/data/cartStore";
import type { CartItem } from "@/components/pcmaster/data/mockData";

const TAX_RATE = 0.08;

function formatMoney(value: number) {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function PcMasterCartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => loadCartItems());

  useEffect(() => {
    const syncFromStore = () => {
      setCartItems(loadCartItems());
    };

    window.addEventListener(CART_UPDATED_EVENT, syncFromStore);

    return () => {
      window.removeEventListener(CART_UPDATED_EVENT, syncFromStore);
    };
  }, []);

  const totals = useMemo(() => {
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;

    return { itemCount, subtotal, tax, total };
  }, [cartItems]);

  const updateQuantity = (id: string, delta: number) => {
    changeCartItemQuantity(id, delta);
    setCartItems(loadCartItems());
  };

  const removeItem = (id: string) => {
    removeCartItem(id);
    setCartItems(loadCartItems());
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#f7f9fb] text-[#191c1e]">
      <PcMasterTopNav />

      <section className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col gap-10 px-4 pb-24 pt-24 sm:px-6 lg:px-8">
        <header className="space-y-2">
          <h1 className="text-[36px] leading-[1.12] tracking-[-0.05em] sm:text-[44px]">Shopping Cart</h1>
          <p className="text-xs uppercase tracking-[0.08em] text-[#424754]">Review your technical configuration</p>
        </header>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_392px]">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <article
                key={item.id}
                className="relative flex gap-6 rounded-lg bg-white p-6 shadow-[0px_4px_6px_-1px_rgba(0,88,190,0.04),0px_10px_15px_-3px_rgba(0,0,0,0.03)]"
              >
                <div className="flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#f2f4f6]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={160}
                    height={160}
                    className="h-full w-full object-contain p-2"
                    sizes="128px"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-between gap-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 space-y-1">
                      <h2 className="truncate text-[18px] leading-7 tracking-[-0.025em]">{item.name}</h2>
                      <p className="text-xs uppercase tracking-[0.1em] text-[#505f76]">{item.subtitle}</p>
                    </div>
                    <p className="shrink-0 text-[20px] leading-7 tracking-[-0.05em] text-[#0058be]">
                      ${formatMoney(item.price)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex items-center rounded-full bg-[#f2f4f6] px-3 py-1.5">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-[#424754] transition-colors hover:bg-white"
                        aria-label={`Decrease quantity for ${item.name}`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 px-4 text-center text-sm text-[#191c1e]">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-[#424754] transition-colors hover:bg-white"
                        aria-label={`Increase quantity for ${item.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="inline-flex items-center gap-2 text-sm text-[#424754] transition-colors hover:text-[#191c1e]"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}

            <div className="pointer-events-none fixed bottom-8 right-8 hidden h-16 w-16 items-center justify-center rounded-full bg-[#0058be] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] xl:flex">
              <ShoppingCart className="h-6 w-6 text-white" />
              <span className="absolute right-[-2px] top-[-2px] h-4 w-4 rounded-full border-2 border-[#f7f9fb] bg-[#924700]" />
            </div>
          </div>

          <aside className="space-y-4 self-start xl:sticky xl:top-24">
            <div className="rounded-lg border border-[rgba(194,198,214,0.1)] bg-white p-8 shadow-[0px_4px_6px_-1px_rgba(0,88,190,0.04),0px_10px_15px_-3px_rgba(0,0,0,0.03)]">
              <h2 className="text-[20px] leading-7 tracking-[-0.025em]">Order Summary</h2>

              <div className="mt-8 space-y-4">
                <div className="flex items-start justify-between gap-4 text-sm">
                  <span className="text-[#424754]">Subtotal ({totals.itemCount} items)</span>
                  <span className="text-[#191c1e]">${formatMoney(totals.subtotal)}</span>
                </div>
                <div className="flex items-start justify-between gap-4 text-sm">
                  <span className="text-[#424754]">Shipping Logistics</span>
                  <span className="text-[#505f76]">Calculated at next step</span>
                </div>
                <div className="flex items-start justify-between gap-4 text-sm">
                  <span className="text-[#424754]">Estimated Tax (8%)</span>
                  <span className="text-[#191c1e]">${formatMoney(totals.tax)}</span>
                </div>
                <div className="h-px bg-[#f2f4f6]" />
                <div className="flex items-start justify-between gap-4 py-2">
                  <span className="text-[20px] tracking-[-0.05em]">Total</span>
                  <span className="text-[20px] tracking-[-0.05em] text-[#0058be]">${formatMoney(totals.total)}</span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#0058be] to-[#2170e4] py-4 text-base text-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-0.5"
                >
                  Secure Checkout
                  <span className="text-lg leading-none">→</span>
                </button>

                <Link
                  href="/explore"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-[#f2f4f6] py-4 text-base text-[#191c1e] transition-colors hover:bg-[#e8edf3]"
                >
                  Continue Shopping
                </Link>
              </div>

              <div className="mt-4 rounded-lg bg-[rgba(208,225,251,0.3)] px-4 py-4">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.1em] text-[#54647a]">
                  <ReceiptText className="h-5 w-5 text-[#54647a]" />
                  Price Match Guarantee Included
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-[#d0e1fb] bg-[#f7f9fb] px-4 py-4 text-xs uppercase tracking-[0.08em] text-[#54647a] shadow-[0px_4px_6px_-1px_rgba(0,88,190,0.04)]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                Protected checkout ready
              </div>
              <span>{totals.itemCount} items</span>
            </div>
          </aside>
        </div>
      </section>

      <PcMasterFooter />
    </main>
  );
}