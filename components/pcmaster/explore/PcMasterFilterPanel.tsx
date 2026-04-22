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

const BRAND_OPTIONS = [
  "NVIDIA",
  "AMD",
  "ASUS",
  "MSI",
  "Gigabyte",
  "Asrock",
  "Galax",
  "Zotac",
  "Leadtek",
  "Sapphire",
  "Biostar",
  "Colorful",
  "Inno3D",
  "Palit",
];
const VRAM_OPTIONS = ["8GB", "12GB", "16GB", "24GB"];
const VRAM_TYPES = ["GDDR6", "GDDR6X", "HBM3"];
const RAM_MEMORY_TYPES = ["DDR4", "DDR5"];
const MOTHERBOARD_SOCKET_OPTIONS = ["AM5", "LGA1700", "LGA1851"];
const MOTHERBOARD_PCIE_OPTIONS = ["PCIe 4.0", "PCIe 5.0"];
const MOTHERBOARD_MEMORY_OPTIONS = ["DDR4", "DDR5"];

function toggleString(array: string[], value: string) {
  return array.includes(value) ? array.filter((item) => item !== value) : [...array, value];
}

export function PcMasterFilterPanel({ filters, onFiltersChange }: PcMasterFilterPanelProps) {
  return (
    <aside className="space-y-5 rounded-xl bg-[#eef1f4] p-3.5 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-2">
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
              onClick={() =>
                onFiltersChange({
                  ...filters,
                  category: item.label,
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
                })
              }
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
            min={100}
            max={3000}
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
        <div className="max-h-36 overflow-y-auto pr-1 flex flex-wrap gap-2">
          {BRAND_OPTIONS.map((brand) => {
            const active = filters.brands.includes(brand);
            return (
              <button
                type="button"
                key={brand}
                onClick={() => onFiltersChange({ ...filters, brands: toggleString(filters.brands, brand) })}
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

      {filters.category === "Graphics Cards" ? (
        <>
          <section className="space-y-3">
            <p className="text-[11px] tracking-[0.1em] text-[#424754]">VRAM CAPACITY</p>
            <div className="grid grid-cols-2 gap-2">
              {VRAM_OPTIONS.map((option) => {
                const active = filters.vramOptions.includes(option);
                return (
                  <button
                    type="button"
                    key={option}
                    onClick={() =>
                      onFiltersChange({ ...filters, vramOptions: toggleString(filters.vramOptions, option) })
                    }
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

          <section className="space-y-3">
            <p className="text-[11px] tracking-[0.1em] text-[#424754]">VRAM TYPE</p>
            <div className="flex flex-wrap gap-2">
              {VRAM_TYPES.map((option) => {
                const active = filters.vramTypes.includes(option.toUpperCase());
                return (
                  <button
                    type="button"
                    key={option}
                    onClick={() =>
                      onFiltersChange({
                        ...filters,
                        vramTypes: toggleString(filters.vramTypes, option.toUpperCase()),
                      })
                    }
                    className={`rounded-md border px-3 py-1.5 text-xs transition-colors ${
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
        </>
      ) : null}

      {filters.category === "Memory" ? (
        <section className="space-y-3">
          <p className="text-[11px] tracking-[0.1em] text-[#424754]">MEMORY TYPE (RAM)</p>
          <div className="flex flex-wrap gap-2">
            {RAM_MEMORY_TYPES.map((option) => {
              const active = filters.ramMemoryTypes.includes(option.toUpperCase());
              return (
                <button
                  type="button"
                  key={option}
                  onClick={() =>
                    onFiltersChange({
                      ...filters,
                      ramMemoryTypes: toggleString(filters.ramMemoryTypes, option.toUpperCase()),
                    })
                  }
                  className={`rounded-md border px-3 py-1.5 text-xs transition-colors ${
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
      ) : null}

      {filters.category === "Processors" ? (
        <>
          <section className="space-y-3">
            <p className="text-[11px] tracking-[0.1em] text-[#424754]">NUMBER OF CORES</p>
            <input
              type="range"
              min={0}
              max={32}
              step={1}
              value={filters.cpuCoresMin}
              onChange={(event) =>
                onFiltersChange({ ...filters, cpuCoresMin: Number(event.target.value) })
              }
              className="w-full accent-[#0058be]"
            />
            <p className="text-xs text-[#727785]">Min {filters.cpuCoresMin} cores</p>
          </section>

          <section className="space-y-3">
            <p className="text-[11px] tracking-[0.1em] text-[#424754]">PROCESS NODE</p>
            <input
              type="range"
              min={2}
              max={20}
              step={1}
              value={filters.cpuProcessNmMax}
              onChange={(event) =>
                onFiltersChange({ ...filters, cpuProcessNmMax: Number(event.target.value) })
              }
              className="w-full accent-[#0058be]"
            />
            <p className="text-xs text-[#727785]">Up to {filters.cpuProcessNmMax}nm</p>
          </section>

          <section className="space-y-3">
            <p className="text-[11px] tracking-[0.1em] text-[#424754]">BOOST CLOCK</p>
            <input
              type="range"
              min={0}
              max={6500}
              step={100}
              value={filters.cpuClockMinMHz}
              onChange={(event) =>
                onFiltersChange({ ...filters, cpuClockMinMHz: Number(event.target.value) })
              }
              className="w-full accent-[#0058be]"
            />
            <p className="text-xs text-[#727785]">Min {(filters.cpuClockMinMHz / 1000).toFixed(1)} GHz</p>
          </section>

          <section className="space-y-3">
            <p className="text-[11px] tracking-[0.1em] text-[#424754]">TDP</p>
            <input
              type="range"
              min={35}
              max={300}
              step={5}
              value={filters.cpuTdpMaxW}
              onChange={(event) =>
                onFiltersChange({ ...filters, cpuTdpMaxW: Number(event.target.value) })
              }
              className="w-full accent-[#0058be]"
            />
            <p className="text-xs text-[#727785]">Max {filters.cpuTdpMaxW}W</p>
          </section>
        </>
      ) : null}

      {filters.category === "Motherboards" ? (
        <>
          <section className="space-y-3">
            <p className="text-[11px] tracking-[0.1em] text-[#424754]">SOCKET</p>
            <div className="flex flex-wrap gap-2">
              {MOTHERBOARD_SOCKET_OPTIONS.map((option) => {
                const value = option.toUpperCase();
                const active = filters.motherboardSockets.includes(value);
                return (
                  <button
                    type="button"
                    key={option}
                    onClick={() =>
                      onFiltersChange({
                        ...filters,
                        motherboardSockets: toggleString(filters.motherboardSockets, value),
                      })
                    }
                    className={`rounded-md border px-3 py-1.5 text-xs transition-colors ${
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

          <section className="space-y-3">
            <p className="text-[11px] tracking-[0.1em] text-[#424754]">PCIE SUPPORT</p>
            <div className="flex flex-wrap gap-2">
              {MOTHERBOARD_PCIE_OPTIONS.map((option) => {
                const value = option.toUpperCase();
                const active = filters.motherboardPcieSupport.includes(value);
                return (
                  <button
                    type="button"
                    key={option}
                    onClick={() =>
                      onFiltersChange({
                        ...filters,
                        motherboardPcieSupport: toggleString(filters.motherboardPcieSupport, value),
                      })
                    }
                    className={`rounded-md border px-3 py-1.5 text-xs transition-colors ${
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

          <section className="space-y-3">
            <p className="text-[11px] tracking-[0.1em] text-[#424754]">MEMORY TYPE</p>
            <div className="flex flex-wrap gap-2">
              {MOTHERBOARD_MEMORY_OPTIONS.map((option) => {
                const value = option.toUpperCase();
                const active = filters.motherboardMemoryTypes.includes(value);
                return (
                  <button
                    type="button"
                    key={option}
                    onClick={() =>
                      onFiltersChange({
                        ...filters,
                        motherboardMemoryTypes: toggleString(filters.motherboardMemoryTypes, value),
                      })
                    }
                    className={`rounded-md border px-3 py-1.5 text-xs transition-colors ${
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
        </>
      ) : null}

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
