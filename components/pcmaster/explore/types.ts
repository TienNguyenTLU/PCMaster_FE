export type ProductCategory = "Processors" | "Graphics Cards" | "Memory" | "Storage" | "Motherboards";

export type Product = {
  id: string;
  vendor: string;
  name: string;
  image: string;
  price: number;
  vram: string;
  clockMHz: number;
  brand: string;
  category: ProductCategory;
  inStock: boolean;
  releaseDate: string;
  vramCapacityGB?: number;
  vramType?: string;
  memoryType?: string;
  processNm?: number;
  cores?: number;
  tdpW?: number;
  socket?: string;
  pcieSupport?: string;
  motherboardMemoryType?: string;
};

export type SortBy = "newest" | "price-low" | "price-high" | "clock-high";

export type FilterState = {
  category: ProductCategory;
  minPrice: number;
  maxPrice: number;
  brands: string[];
  vramOptions: string[];
  vramTypes: string[];
  ramMemoryTypes: string[];
  cpuCoresMin: number;
  cpuProcessNmMax: number;
  cpuClockMinMHz: number;
  cpuTdpMaxW: number;
  motherboardSockets: string[];
  motherboardPcieSupport: string[];
  motherboardMemoryTypes: string[];
  onlyInStock: boolean;
};
