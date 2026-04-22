"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { addProductToCart } from "@/components/pcmaster/data/cartStore";
import type { Product } from "@/components/pcmaster/explore/types";

type PcMasterAddToCartButtonProps = {
  product: Product;
  className: string;
  idleLabel?: string;
  addedLabel?: string;
};

export function PcMasterAddToCartButton({
  product,
  className,
  idleLabel = "Add to Cart",
  addedLabel = "Added",
}: PcMasterAddToCartButtonProps) {
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        addProductToCart(product);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1200);
      }}
      className={className}
    >
      <ShoppingCart className="h-4 w-4" />
      {added ? addedLabel : idleLabel}
    </button>
  );
}