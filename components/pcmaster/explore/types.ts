export type ProductCategory = "Processors" | "Graphics Cards" | "Memory" | "Storage" | "Motherboards";

export type Product = {
  id: string;
  vendor: string;
  name: string;
  image: string;
  price: number;
  vram: string;
  clockMHz: number;
  brand: "NVIDIA" | "AMD" | "ASUS" | "MSI";
  category: ProductCategory;
  inStock: boolean;
  releaseDate: string;
};

export type SortBy = "newest" | "price-low" | "price-high" | "clock-high";

export type FilterState = {
  category: ProductCategory;
  minPrice: number;
  maxPrice: number;
  brands: Array<Product["brand"]>;
  vramOptions: string[];
  onlyInStock: boolean;
};
