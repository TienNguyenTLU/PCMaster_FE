"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { PcMasterFooter } from "@/components/pcmaster/PcMasterFooter";
import { PcMasterTopNav } from "@/components/pcmaster/PcMasterTopNav";
import { PRODUCT_CATALOG } from "@/components/pcmaster/data/products";
import { PcMasterFilterPanel } from "@/components/pcmaster/explore/PcMasterFilterPanel";
import { PcMasterProductList } from "@/components/pcmaster/explore/PcMasterProductList";
import { FilterState, Product, SortBy } from "@/components/pcmaster/explore/types";

const PAGE_SIZE = 4;

const DEFAULT_FILTERS: FilterState = {
  category: "Graphics Cards",
  minPrice: 0,
  maxPrice: 2000,
  brands: ["NVIDIA"],
  vramOptions: [],
  onlyInStock: false,
};

function sortProducts(products: Product[], sortBy: SortBy) {
  const sorted = [...products];
  switch (sortBy) {
    case "price-low":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "clock-high":
      sorted.sort((a, b) => b.clockMHz - a.clockMHz);
      break;
    default:
      sorted.sort(
        (a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime(),
      );
      break;
  }

  return sorted;
}

export function PcMasterExplorePage() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [sortBy, setSortBy] = useState<SortBy>("newest");
  const [page, setPage] = useState(1);

  const handleFiltersChange = (next: FilterState) => {
    setFilters(next);
    setPage(1);
  };

  const handleSortChange = (next: SortBy) => {
    setSortBy(next);
    setPage(1);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCT_CATALOG.filter((product) => {
      if (product.category !== filters.category) {
        return false;
      }
      if (product.price < filters.minPrice || product.price > filters.maxPrice) {
        return false;
      }
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
        return false;
      }
      if (
        filters.vramOptions.length > 0 &&
        !filters.vramOptions.some((option) => product.vram.toUpperCase().includes(option.toUpperCase()))
      ) {
        return false;
      }
      if (filters.onlyInStock && !product.inStock) {
        return false;
      }
      return true;
    });
  }, [filters]);

  const sortedProducts = useMemo(
    () => sortProducts(filteredProducts, sortBy),
    [filteredProducts, sortBy],
  );

  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginatedProducts = sortedProducts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <main className="flex min-h-screen flex-col bg-[#f7f9fb]">
      <PcMasterTopNav />

      <section className="mx-auto flex w-full max-w-[1280px] flex-1 gap-6 px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <PcMasterFilterPanel filters={filters} onFiltersChange={handleFiltersChange} />

        <div className="flex min-w-0 flex-1 flex-col gap-5">
          <nav className="flex items-center gap-2 text-xs text-[#727785]">
            <Link href="/homepage" className="hover:text-[#191c1e]">
              Home
            </Link>
            <span>/</span>
            <span>Components</span>
            <span>/</span>
            <span className="text-[#191c1e]">{filters.category}</span>
          </nav>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-[48px] leading-[1.02] tracking-[-0.04em] text-[#191c1e]">
                {filters.category}
              </h1>
              <p className="mt-1 text-lg text-[#424754]">
                Unleash peak performance with the world&apos;s most powerful GPUs.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-[#727785]">{filteredProducts.length} Products</span>
              <label className="relative">
                <select
                  value={sortBy}
                  onChange={(event) => handleSortChange(event.target.value as SortBy)}
                  className="appearance-none rounded-lg bg-[#f2f4f6] px-4 py-2 pr-8 text-sm text-[#191c1e] outline-none"
                >
                  <option value="newest">Sort by: Newest</option>
                  <option value="price-low">Sort by: Price low to high</option>
                  <option value="price-high">Sort by: Price high to low</option>
                  <option value="clock-high">Sort by: Highest clock</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748b]" />
              </label>
            </div>
          </div>

          <PcMasterProductList
            products={paginatedProducts}
            page={currentPage}
            totalPages={totalPages}
            onPageChange={(next) => setPage(Math.min(Math.max(next, 1), totalPages))}
          />
        </div>
      </section>

      <PcMasterFooter />
    </main>
  );
}
