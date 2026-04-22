"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { PcMasterFooter } from "@/components/pcmaster/PcMasterFooter";
import { PcMasterTopNav } from "@/components/pcmaster/PcMasterTopNav";
import { PRODUCT_CATALOG } from "@/components/pcmaster/data/products";
import { PcMasterFilterPanel } from "@/components/pcmaster/explore/PcMasterFilterPanel";
import { PcMasterProductList } from "@/components/pcmaster/explore/PcMasterProductList";
import { FilterState, Product, ProductCategory, SortBy } from "@/components/pcmaster/explore/types";

const PAGE_SIZE = 4;
const CATEGORY_OPTIONS: ProductCategory[] = ["Processors", "Graphics Cards", "Memory", "Storage", "Motherboards"];

const DEFAULT_FILTERS: FilterState = {
  category: "Graphics Cards",
  minPrice: 0,
  maxPrice: 3000,
  brands: [],
  vramOptions: [],
  vramTypes: [],
  ramMemoryTypes: [],
  cpuCoresMin: 0,
  cpuProcessNmMax: 20,
  cpuClockMinMHz: 0,
  cpuTdpMaxW: 500,
  motherboardSockets: [],
  motherboardPcieSupport: [],
  motherboardMemoryTypes: [],
  onlyInStock: false,
};

const CATEGORY_DESCRIPTIONS: Record<ProductCategory, string> = {
  "Graphics Cards": "Unleash peak performance with the world&apos;s most powerful GPUs.",
  Processors: "Select precision CPUs by process node, clocks, cores, and thermal targets.",
  Memory: "Find workstation memory kits by generation and speed profile.",
  Storage: "Browse high-throughput storage options for creative and gaming builds.",
  Motherboards: "Choose boards by socket, PCIe generation, and supported memory type.",
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
  const [filters, setFilters] = useState<FilterState>(() => {
    if (typeof window === "undefined") {
      return DEFAULT_FILTERS;
    }

    const requestedCategory = new URLSearchParams(window.location.search).get("category");
    if (!requestedCategory || !CATEGORY_OPTIONS.includes(requestedCategory as ProductCategory)) {
      return DEFAULT_FILTERS;
    }

    return {
      ...DEFAULT_FILTERS,
      category: requestedCategory as ProductCategory,
    };
  });
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
      if (filters.category === "Graphics Cards") {
        if (
          filters.vramOptions.length > 0 &&
          !filters.vramOptions.some((option) => product.vram.toUpperCase().includes(option.toUpperCase()))
        ) {
          return false;
        }
        if (
          filters.vramTypes.length > 0 &&
          !filters.vramTypes.includes((product.vramType ?? "").toUpperCase())
        ) {
          return false;
        }
      }
      if (filters.category === "Memory") {
        if (
          filters.ramMemoryTypes.length > 0 &&
          !filters.ramMemoryTypes.includes((product.memoryType ?? "").toUpperCase())
        ) {
          return false;
        }
      }
      if (filters.category === "Processors") {
        if (typeof product.cores === "number" && product.cores < filters.cpuCoresMin) {
          return false;
        }
        if (typeof product.processNm === "number" && product.processNm > filters.cpuProcessNmMax) {
          return false;
        }
        if (product.clockMHz < filters.cpuClockMinMHz) {
          return false;
        }
        if (typeof product.tdpW === "number" && product.tdpW > filters.cpuTdpMaxW) {
          return false;
        }
      }
      if (filters.category === "Motherboards") {
        if (
          filters.motherboardSockets.length > 0 &&
          !filters.motherboardSockets.includes((product.socket ?? "").toUpperCase())
        ) {
          return false;
        }
        if (
          filters.motherboardPcieSupport.length > 0 &&
          !filters.motherboardPcieSupport.includes((product.pcieSupport ?? "").toUpperCase())
        ) {
          return false;
        }
        if (
          filters.motherboardMemoryTypes.length > 0 &&
          !filters.motherboardMemoryTypes.includes((product.motherboardMemoryType ?? "").toUpperCase())
        ) {
          return false;
        }
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

      <section className="mx-auto grid w-full max-w-[1280px] flex-1 gap-5 px-4 pb-20 pt-24 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-8 lg:pt-28 xl:grid-cols-[256px_minmax(0,1fr)]">
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
              <p className="mt-1 text-lg text-[#424754]">{CATEGORY_DESCRIPTIONS[filters.category]}</p>
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
