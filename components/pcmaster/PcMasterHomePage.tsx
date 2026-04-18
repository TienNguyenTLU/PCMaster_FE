import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { PcMasterFooter } from "@/components/pcmaster/PcMasterFooter";
import { PcMasterCategoriesSection } from "@/components/pcmaster/PcMasterCategoriesSection";
import { PcMasterTopNav } from "@/components/pcmaster/PcMasterTopNav";

const HERO_IMAGE =
  "https://www.figma.com/api/mcp/asset/59a9e701-0450-467e-a6a5-7d18e33cc89c";
const CATEGORY_IMAGES = {
  processors: "https://www.figma.com/api/mcp/asset/d8ae3b8b-889d-40fb-8424-275165e998d9",
  graphics: "https://www.figma.com/api/mcp/asset/cf8775f8-44b5-4414-a43d-a317d59cb145",
  prebuilt: "https://www.figma.com/api/mcp/asset/844d0b13-635d-4211-93f0-52f469464444",
  memory: "https://www.figma.com/api/mcp/asset/198621b5-0d8e-43c0-bcf7-6d7efb8f1c38",
  storage: "https://www.figma.com/api/mcp/asset/a740b4cb-2965-4e81-a37b-d6ef72afee84",
  motherboards: "https://www.figma.com/api/mcp/asset/1283bbed-77bc-4062-bfe1-b5b1a259195c",
  cooling: "https://www.figma.com/api/mcp/asset/453978b5-81df-40de-a56e-4c3bd8cc3749",
  psu: "https://www.figma.com/api/mcp/asset/59a9e701-0450-467e-a6a5-7d18e33cc89c",
  workstation: "https://www.figma.com/api/mcp/asset/d057b428-0a56-4507-85e6-9e1870e7e419",
};
const TECH_BG =
  "https://www.figma.com/api/mcp/asset/453978b5-81df-40de-a56e-4c3bd8cc3749";

type Category = {
  title: string;
  subtitle: string;
  image: string;
};

type FeaturedProduct = {
  slug: string;
  name: string;
  series: string;
  price: string;
  image: string;
  badge: string;
};

const CATEGORIES: Category[] = [
  {
    title: "Processors",
    subtitle: "Next-gen CPU architectures",
    image: CATEGORY_IMAGES.processors,
  },
  {
    title: "Graphics Cards",
    subtitle: "Ultimate rendering power",
    image: CATEGORY_IMAGES.graphics,
  },
  {
    title: "Pre-built Systems",
    subtitle: "Ready-to-deploy power",
    image: CATEGORY_IMAGES.prebuilt,
  },
  {
    title: "Memory Kits",
    subtitle: "DDR5 speed for modern workflows",
    image: CATEGORY_IMAGES.memory,
  },
  {
    title: "NVMe Storage",
    subtitle: "Ultra-fast PCIe 4.0 and 5.0 drives",
    image: CATEGORY_IMAGES.storage,
  },
  {
    title: "Motherboards",
    subtitle: "Stable platforms for flagship builds",
    image: CATEGORY_IMAGES.motherboards,
  },
  {
    title: "Cooling Systems",
    subtitle: "AIO and custom-loop thermal control",
    image: CATEGORY_IMAGES.cooling,
  },
  {
    title: "Power Supplies",
    subtitle: "80+ Gold and Platinum reliability",
    image: CATEGORY_IMAGES.psu,
  },
];

const FEATURED_PRODUCTS: FeaturedProduct[] = [
  {
    slug: "gpu-4090",
    name: "ROG Strix RTX 4090 OC",
    series: "NVIDIA GEFORCE",
    price: "$1,999.99",
    image: "https://www.figma.com/api/mcp/asset/27b5b208-7daa-4a92-8c00-107441d19ff9",
    badge: "Best Seller",
  },
  {
    slug: "cpu-ultra9",
    name: "Core Ultra 9 285K",
    series: "INTEL CORE ULTRA",
    price: "$699.00",
    image: CATEGORY_IMAGES.workstation,
    badge: "New Release",
  },
  {
    slug: "gpu-4080",
    name: "TUF RTX 4080 Super",
    series: "NVIDIA GEFORCE",
    price: "$1,199.00",
    image: "https://www.figma.com/api/mcp/asset/198621b5-0d8e-43c0-bcf7-6d7efb8f1c38",
    badge: "Creator Pick",
  },
  {
    slug: "gpu-7900xtx",
    name: "Sapphire RX 7900 XTX",
    series: "AMD RADEON",
    price: "$999.99",
    image: "https://www.figma.com/api/mcp/asset/1283bbed-77bc-4062-bfe1-b5b1a259195c",
    badge: "Performance",
  },
];

const METRICS = [
  { label: "Clock Speed", value: "5.2 GHz" },
  { label: "Memory", value: "128 GB" },
  { label: "Storage", value: "4 TB" },
  { label: "Cores", value: "24-Core" },
];

function HeroSection() {
  return (
    <section id="builds" className="overflow-hidden rounded-2xl bg-[#f2f4f6]">
      <div className="grid min-h-[520px] lg:grid-cols-[1.15fr_1fr]">
        <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-16">
          <span className="w-fit rounded bg-[#0058be1a] px-3 py-1 text-[11px] tracking-[0.12em] text-[#0058be]">
            2024 COLLECTION
          </span>

          <h1 className="text-balance text-[42px] leading-[1.02] tracking-[-0.05em] text-[#191c1e] sm:text-[56px] lg:text-[64px]">
            <span className="block">Architect Your</span>
            <span className="block font-bold text-[#0b82d2]">Powerful PC</span>
          </h1>

          <p className="max-w-[560px] text-base leading-7 text-[#424754]">
            Experience precision engineering with our custom-built workstations.
            Every component is selected for maximum synergy and thermal efficiency.
          </p>

          <div className="flex flex-wrap gap-4 pt-1">
            <button className="rounded-lg bg-gradient-to-r from-[#0058be] to-[#2170e4] px-8 py-4 text-sm text-white shadow-[0_10px_15px_-3px_rgba(0,88,190,0.2),0_4px_6px_-4px_rgba(0,88,190,0.2)] transition-transform hover:-translate-y-0.5">
              Build Your PC
            </button>
            <button className="rounded-lg border border-[#c2c6d64d] bg-white/70 px-8 py-4 text-sm text-[#191c1e] transition-colors hover:bg-white">
              Explore
            </button>
          </div>
        </div>

        <div className="relative min-h-[360px]">
          <Image
            src={HERO_IMAGE}
            alt="High-end custom PC workstation"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f2f4f6] via-[#f2f4f680] to-transparent" />
        </div>
      </div>
    </section>
  );
}

function SpecsSection() {
  return (
    <section id="laptops" className="grid gap-6 lg:grid-cols-12">
      <article className="relative overflow-hidden rounded-2xl bg-[#0f172a] p-8 sm:p-10 lg:col-span-8">
        <Image
          src={TECH_BG}
          alt="Tech background"
          fill
          className="pointer-events-none object-cover opacity-30 mix-blend-lighten"
          sizes="(max-width: 1024px) 100vw, 65vw"
        />

        <div className="relative z-10">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.04em] text-white sm:text-[42px]">
            <span className="block">Master the</span>
            <span className="block">Workstation Flow</span>
          </h2>

          <p className="mt-4 max-w-[520px] text-base leading-7 text-[#94a3b8]">
            Deploy your creative suite on hardware that does not just keep up, it
            anticipates your next move.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg bg-white/5 p-4 backdrop-blur-sm"
              >
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#0b82d2]">
                  {metric.label}
                </p>
                <p className="mt-1 text-[30px] tracking-[-0.03em] text-white">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </article>

      <article className="rounded-2xl bg-[#0058be] p-8 text-white sm:p-10 lg:col-span-4 lg:flex lg:flex-col lg:items-center lg:justify-center">
        <div className="mb-6 inline-flex rounded-xl bg-white/10 p-3">
          <BadgeCheck className="h-7 w-7" />
        </div>
        <h3 className="text-center text-[34px] leading-[1.1] tracking-[-0.04em]">
          Precision Warranty
        </h3>
        <p className="mt-4 text-center text-base leading-7 text-white/85">
          Every PCMaster architected system comes with 3 years of on-site support
          and lifetime tech advice.
        </p>
        <button className="mt-8 w-full rounded-lg bg-white px-6 py-4 text-base text-[#0058be] transition-colors hover:bg-[#eef4ff]">
          Learn More
        </button>
      </article>
    </section>
  );
}

function FeaturedProductsSection() {
  return (
    <section className="space-y-8">
      <div className="flex items-end justify-between gap-4 border-b border-[#c2c6d633] pb-5">
        <div>
          <p className="text-xs tracking-[0.12em] text-[#0058be]">SHOWCASE</p>
          <h2 className="mt-2 text-3xl tracking-[-0.04em] text-[#191c1e] sm:text-[40px]">
            Featured Products
          </h2>
        </div>
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 text-sm text-[#424754] transition-colors hover:text-[#0f172a]"
        >
          Browse Catalog
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {FEATURED_PRODUCTS.map((product) => (
          <article
            key={product.name}
            className="group overflow-hidden rounded-lg bg-white p-5 shadow-[0_20px_40px_rgba(0,26,66,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(0,26,66,0.12)]"
          >
            <div className="mb-4 inline-flex rounded bg-[#0058be12] px-2.5 py-1 text-[10px] tracking-[0.08em] text-[#0058be]">
              {product.badge}
            </div>

            <Link href={`/explore/${product.slug}`} className="block overflow-hidden rounded-lg bg-[#f2f4f6]">
              <Image
                src={product.image}
                alt={product.name}
                width={420}
                height={240}
                className="h-[180px] w-full object-contain transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1280px) 50vw, 25vw"
              />
            </Link>

            <p className="mt-4 text-[10px] tracking-[0.1em] text-[#0058be]">{product.series}</p>
            <h3 className="mt-1 text-[22px] leading-7 tracking-[-0.03em] text-[#191c1e]">{product.name}</h3>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-base text-[#191c1e]">{product.price}</p>
              <Link
                href={`/explore/${product.slug}`}
                className="rounded-lg border border-[#c2c6d633] bg-white px-3 py-1.5 text-xs text-[#191c1e] transition-colors hover:bg-[#f8fafc]"
              >
                Quick View
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PcMasterHomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f9fb]">
      <PcMasterTopNav />

      <div
        id="support"
        className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-16 px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28"
      >
        <HeroSection />
        <PcMasterCategoriesSection categories={CATEGORIES} />
        <FeaturedProductsSection />
        <SpecsSection />
      </div>

      <PcMasterFooter />
    </main>
  );
}
