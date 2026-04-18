import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PcMasterProductCard } from "@/components/pcmaster/explore/PcMasterProductCard";
import { Product } from "@/components/pcmaster/explore/types";

const FEATURE_BANNER_BG = "https://www.figma.com/api/mcp/asset/5c3ddbb7-bd09-4e47-bd01-66f8b1a11251";
const FEATURE_BANNER_CPU = "https://www.figma.com/api/mcp/asset/d057b428-0a56-4507-85e6-9e1870e7e419";

type PcMasterProductListProps = {
  products: Product[];
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function PcMasterProductList({ products, page, totalPages, onPageChange }: PcMasterProductListProps) {
  return (
    <section className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <PcMasterProductCard key={product.id} product={product} />
        ))}

        {page === 1 ? (
          <article className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] p-8 text-white md:col-span-2">
            <Image
              src={FEATURE_BANNER_BG}
              alt="Featured architecture"
              fill
              className="pointer-events-none object-cover opacity-20 mix-blend-overlay"
              sizes="(max-width: 1280px) 100vw, 66vw"
            />
            <div className="relative z-10 grid gap-6 sm:grid-cols-[1.2fr_1fr] sm:items-center">
              <div>
                <p className="text-[11px] tracking-[0.3em] text-[#d8e2ff]">NEXT-GEN ARRIVAL</p>
                <h3 className="mt-3 text-[44px] leading-[1.05] tracking-[-0.03em]">
                  <span className="block">Core ultra 9</span>
                  <span className="block">285K Architecture</span>
                </h3>
                <p className="mt-3 max-w-[420px] text-base text-[#cbd5e1]">
                  Experience unprecedented speeds with the latest 24-core powerhouse.
                  Engineered for ultimate precision.
                </p>
                <button
                  type="button"
                  className="mt-6 rounded-lg bg-white px-6 py-3 text-sm text-[#0f172a] transition-colors hover:bg-[#e7edf9]"
                >
                  Explore Intel Core
                </button>
              </div>

              <div className="relative h-[220px] sm:h-[260px]">
                <Image
                  src={FEATURE_BANNER_CPU}
                  alt="Intel processor close-up"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1280px) 100vw, 33vw"
                />
              </div>
            </div>
          </article>
        ) : null}
      </div>

      <div className="flex items-center justify-center gap-2 pt-2">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(page - 1, 1))}
          disabled={page === 1}
          className="inline-flex items-center gap-2 rounded-lg border border-[#c2c6d6] bg-white px-3 py-2 text-sm text-[#191c1e] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronLeft className="h-4 w-4" />
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onPageChange(item)}
            className={`h-9 min-w-9 rounded-lg px-3 text-sm transition-colors ${
              item === page ? "bg-[#0058be] text-white" : "bg-white text-[#191c1e] hover:bg-[#eef1f5]"
            }`}
          >
            {item}
          </button>
        ))}

        <button
          type="button"
          onClick={() => onPageChange(Math.min(page + 1, totalPages))}
          disabled={page === totalPages}
          className="inline-flex items-center gap-2 rounded-lg border border-[#c2c6d6] bg-white px-3 py-2 text-sm text-[#191c1e] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
