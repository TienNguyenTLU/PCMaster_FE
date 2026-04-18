import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/components/pcmaster/explore/types";

type PcMasterProductCardProps = {
  product: Product;
};

export function PcMasterProductCard({ product }: PcMasterProductCardProps) {
  const productHref = `/explore/${product.id}`;

  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_rgba(15,23,42,0.12)]">
      <div className="relative bg-[#f2f4f6] p-4">
        {product.inStock ? (
          <span className="absolute left-4 top-4 rounded bg-[#0058be] px-2 py-1 text-[10px] tracking-[0.05em] text-white">
            IN STOCK
          </span>
        ) : null}
        <Link href={productHref} aria-label={`View ${product.name} details`}>
          <Image
            src={product.image}
            alt={product.name}
            width={420}
            height={240}
            className="h-[200px] w-full object-contain"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </Link>
      </div>

      <div className="space-y-4 p-6">
        <div className="space-y-1">
          <p className="text-[10px] tracking-[0.1em] text-[#0058be]">{product.vendor}</p>
          <h3 className="text-[24px] leading-8 tracking-[-0.03em] text-[#191c1e]">
            <Link href={productHref} className="transition-colors hover:text-[#0058be]">
              {product.name}
            </Link>
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-[#f2f4f6] px-3 py-2">
            <p className="text-[10px] tracking-[0.03em] text-[#727785]">VRAM</p>
            <p className="mt-1 text-sm text-[#191c1e]">{product.vram}</p>
          </div>
          <div className="rounded-lg bg-[#f2f4f6] px-3 py-2">
            <p className="text-[10px] tracking-[0.03em] text-[#727785]">CLOCK</p>
            <p className="mt-1 text-sm text-[#191c1e]">{product.clockMHz} MHz</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <p className="text-base text-[#191c1e]">${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
          <div className="flex items-center gap-2">
            <Link
              href={productHref}
              className="rounded-lg border border-[#c2c6d6] bg-white px-3 py-2 text-sm text-[#191c1e] transition-colors hover:bg-[#f2f4f6]"
            >
              Details
            </Link>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#0058be] to-[#2170e4] px-4 py-2 text-sm text-white shadow-[0_4px_10px_rgba(0,88,190,0.25)] transition-transform hover:-translate-y-0.5"
            >
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
