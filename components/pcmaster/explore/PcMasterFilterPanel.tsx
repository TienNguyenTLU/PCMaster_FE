import { Cpu, HardDrive, MemoryStick, Microchip, PackageSearch } from "lucide-react";
import { FilterState, ProductCategory } from "@/components/pcmaster/explore/types";

type PcMasterFilterPanelProps = {
  filters: FilterState;
  onFiltersChange: (next: FilterState) => void;
};

const CATEGORIES: Array<{ label: ProductCategory; icon: React.ComponentType<{ className?: string }> }> = [
  { label: "Processors", icon: Cpu },
  { label: "Graphics Cards", icon: PackageSearch },
  { label: "Memory", icon: MemoryStick },
  { label: "Storage", icon: HardDrive },
  { label: "Motherboards", icon: Microchip },
];

const BRAND_OPTIONS: FilterState["brands"] = ["NVIDIA", "AMD", "ASUS", "MSI"];
const VRAM_OPTIONS = ["8GB", "12GB", "16GB", "24GB"];

export function PcMasterFilterPanel({ filters, onFiltersChange }: PcMasterFilterPanelProps) {
  const toggleBrand = (brand: FilterState["brands"][number]) => {
    const exists = filters.brands.includes(brand);
    onFiltersChange({
      ...filters,
      brands: exists ? filters.brands.filter((item) => item !== brand) : [...filters.brands, brand],
    });
  };

  const toggleVram = (option: string) => {
    const exists = filters.vramOptions.includes(option);
    onFiltersChange({
      ...filters,
      vramOptions: exists
        ? filters.vramOptions.filter((item) => item !== option)
        : [...filters.vramOptions, option],
    });
  };

  return (
    <aside className="space-y-6 rounded-xl bg-[#eef1f4] p-4 lg:sticky lg:top-24 lg:h-fit lg:min-w-[256px]">
      <section className="space-y-2">
        <h2 className="text-lg text-[#191c1e]">Categories</h2>
        <p className="text-[11px] tracking-[0.1em] text-[#727785]">FILTER BY COMPONENT</p>
      </section>

      <section className="space-y-1">
        {CATEGORIES.map((item) => {
          const Icon = item.icon;
          const selected = filters.category === item.label;
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => onFiltersChange({ ...filters, category: item.label })}
              className={`flex w-full items-center gap-3 rounded-lg p-3 text-left text-sm transition-colors ${
                selected
                  ? "bg-white text-[#2563eb] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                  : "text-[#64748b] hover:bg-white/70"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}
      </section>

      <section className="space-y-3 border-t border-[#c2c6d626] pt-5">
        <p className="text-[11px] tracking-[0.1em] text-[#424754]">PRICE RANGE</p>
        <div className="space-y-2">
          <input
            type="range"
            min={300}
            max={2200}
            step={50}
            value={filters.maxPrice}
            onChange={(event) =>
              onFiltersChange({
                ...filters,
                maxPrice: Number(event.target.value),
              })
            }
            className="w-full accent-[#0058be]"
          />
          <div className="flex items-center justify-between text-xs text-[#727785]">
            <span>${filters.minPrice}</span>
            <span>${filters.maxPrice}+</span>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <p className="text-[11px] tracking-[0.1em] text-[#424754]">BRAND</p>
        <div className="flex flex-wrap gap-2">
          {BRAND_OPTIONS.map((brand) => {
            const active = filters.brands.includes(brand);
            return (
              <button
                type="button"
                key={brand}
                onClick={() => toggleBrand(brand)}
                className={`rounded-md border px-3 py-1.5 text-xs transition-colors ${
                  active
                    ? "border-[#0058be] bg-[#0058be12] text-[#0058be]"
                    : "border-[#c2c6d6] bg-white text-[#191c1e] hover:border-[#9ca3af]"
                }`}
              >
                {brand}
              </button>
            );
          })}
        </div>
      </section>

      <section className="space-y-3">
        <p className="text-[11px] tracking-[0.1em] text-[#424754]">VRAM</p>
        <div className="grid grid-cols-2 gap-2">
          {VRAM_OPTIONS.map((option) => {
            const active = filters.vramOptions.includes(option);
            return (
              <button
                type="button"
                key={option}
                onClick={() => toggleVram(option)}
                className={`rounded-md border px-2 py-1.5 text-xs transition-colors ${
                  active
                    ? "border-[#0058be] bg-[#0058be12] text-[#0058be]"
                    : "border-[#c2c6d6] bg-white text-[#191c1e] hover:border-[#9ca3af]"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </section>

      <label className="flex items-center gap-2 text-sm text-[#191c1e]">
        <input
          type="checkbox"
          checked={filters.onlyInStock}
          onChange={(event) => onFiltersChange({ ...filters, onlyInStock: event.target.checked })}
          className="h-4 w-4 accent-[#0058be]"
        />
        In-stock only
      </label>
    </aside>
  );
}
