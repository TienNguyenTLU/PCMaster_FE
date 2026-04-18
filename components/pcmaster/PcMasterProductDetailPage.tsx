import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CircleSlash2, ShieldCheck, ShoppingCart, Sparkles, Star, Truck } from "lucide-react";
import { PcMasterFooter } from "@/components/pcmaster/PcMasterFooter";
import { PcMasterTopNav } from "@/components/pcmaster/PcMasterTopNav";
import { PRODUCT_CATALOG } from "@/components/pcmaster/data/products";

const HERO_BG = "https://www.figma.com/api/mcp/asset/b0e7569d-cd78-4373-bbfa-50edb2a09cdc";

const SPEC_ROWS: Array<{
  key: keyof (typeof PRODUCT_CATALOG)[number];
  label: string;
  value?: (product: (typeof PRODUCT_CATALOG)[number]) => string;
}> = [
  {
    key: "architecture",
    label: "GPU Architecture",
    value: (product) =>
      product.brand === "NVIDIA"
        ? `NVIDIA ${product.architecture} Architecture`
        : `${product.brand} ${product.architecture} Architecture`,
  },
  { key: "clockMHz", label: "Boost Clock", value: (product) => `${(product.clockMHz / 1000).toFixed(2)} GHz` },
  { key: "vram", label: "Memory Size" },
  {
    key: "vram",
    label: "Memory Type",
    value: (product) => {
      const match = product.vram.match(/GDDR\dX?|HBM\d|DDR\d/i);

      return match ? match[0].toUpperCase() : "N/A";
    },
  },
  { key: "outputs", label: "Standard Display Connectors" },
  {
    key: "dimensions",
    label: "Max Resolution",
    value: (product) => (product.category === "Graphics Cards" ? "7680 x 4320 (8K Ultra HD)" : "N/A"),
  },
];

type PcMasterProductDetailPageProps = {
  slug: string;
};

export function PcMasterProductDetailPage({ slug }: PcMasterProductDetailPageProps) {
  const product = PRODUCT_CATALOG.find((item) => item.id === slug);

  if (!product) {
    notFound();
  }

  const related = PRODUCT_CATALOG.filter((item) => item.id !== product.id && item.category === product.category).slice(0, 3);
  const isNvidia = product.vendor.includes("NVIDIA");
  const heroBadge = product.inStock ? "IN STOCK" : "OUT OF STOCK";
  const heroSubBadge = isNvidia ? "FE EDITION" : `${product.brand} EDITION`;
  const heading =
    product.category === "Graphics Cards"
      ? `${isNvidia ? "NVIDIA" : product.brand} ${product.name.replace(/^(ROG Strix|TUF Gaming|MSI Gaming X Slim|MSI Ventus|ASUS TUF|Sapphire Nitro\+)\s*/i, "")}`
      : product.name;

  return (
    <main className="flex min-h-screen flex-col bg-[#f7f9fb]">
      <PcMasterTopNav />

      <section className="mx-auto w-full max-w-7xl flex-1 px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <nav className="mb-5 flex flex-wrap items-center gap-2 text-[11px] tracking-[0.025em] text-[#424754]">
          <Link href="/homepage" className="uppercase hover:text-[#191c1e]">
            Home
          </Link>
          <span className="text-[#c2c6d6]">/</span>
          <Link href="/explore" className="uppercase hover:text-[#191c1e]">
            Parts
          </Link>
          <span className="text-[#c2c6d6]">/</span>
          <span className="uppercase">{product.category}</span>
          <span className="text-[#c2c6d6]">/</span>
          <span className="uppercase text-[#191c1e]">{product.id.replace(/^gpu-/, "RTX ").replace(/-/g, " ")}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-12">
          <section className="space-y-4 lg:col-span-7">
            <div className="relative overflow-hidden rounded-lg bg-white p-6 sm:p-10">
              <Image
                src={product.image}
                alt={product.name}
                width={700}
                height={460}
                className="mx-auto h-70 w-full object-contain sm:h-90"
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute bottom-6 left-6 flex items-center gap-2">
                <span className="rounded bg-[#0058be12] px-3 py-1 text-[10px] tracking-widest text-[#0058be]">{heroBadge}</span>
                <span className="rounded bg-[#191c1e0d] px-3 py-1 text-[10px] tracking-widest text-[#424754]">{heroSubBadge}</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1 rounded-lg border-2 border-[#0058be] bg-white p-3">
                <Image
                  src={product.image}
                  alt={`${product.name} thumbnail`}
                  width={120}
                  height={120}
                  className="h-18 w-full object-contain"
                  sizes="120px"
                />
              </div>
            </div>
          </section>

          <aside className="space-y-6 lg:col-span-5">
            <div>
              <p className="text-[12px] tracking-[0.2em] text-[#0058be]">{product.vendor} GRADE</p>
              <h1 className="mt-2 text-[34px] leading-[1.1] tracking-[-0.04em] text-[#191c1e] sm:text-[48px]">{heading}</h1>

              <div className="mt-4 flex items-center gap-2">
                <div className="flex items-center text-[#f59e0b]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-[#424754]">(128 Reviews)</p>
              </div>
            </div>

            <div className="rounded-xl bg-[#f2f4f6] p-6">
              <p className="text-[36px] leading-none tracking-[-0.03em] text-[#191c1e]">
                ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </p>
              <p className="mt-2 text-sm text-[#424754]">Free overnight shipping and professional installation available.</p>

              <div className="mt-5 space-y-2">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-[#0058be] to-[#2170e4] px-4 py-4 text-sm text-white shadow-[0_8px_20px_rgba(0,88,190,0.2)] transition-transform hover:-translate-y-0.5"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#c2c6d64d] bg-white px-4 py-4 text-sm text-[#191c1e]"
                >
                  <CircleSlash2 className="h-4 w-4" />
                  Compare Specifications
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-lg border border-[#c2c6d61f] bg-white p-4">
                <div className="rounded-full bg-[#0058be12] p-2.5 text-[#0058be]">
                  <Truck className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-[#191c1e]">Next Day</p>
                  <p className="text-[10px] tracking-[0.08em] text-[#424754]">DELIVERY</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-[#c2c6d61f] bg-white p-4">
                <div className="rounded-full bg-[#0058be12] p-2.5 text-[#0058be]">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-[#191c1e]">3-Year</p>
                  <p className="text-[10px] tracking-[0.08em] text-[#424754]">WARRANTY</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-10 rounded-xl bg-white px-5 pb-8 pt-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] sm:px-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-[28px] tracking-[-0.03em] text-[#191c1e]">Technical Architecture</h2>
              <p className="mt-1 text-sm text-[#424754]">Deep dive into the {product.architecture} specifications.</p>
            </div>
            <div className="flex gap-2">
              <button type="button" className="rounded-full bg-[#eceef0] px-4 py-1.5 text-xs text-[#424754]">
                PDF Manual
              </button>
              <button type="button" className="rounded-full bg-[#eceef0] px-4 py-1.5 text-xs text-[#424754]">
                Support Docs
              </button>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-lg border border-[#c2c6d633]">
            {SPEC_ROWS.map((row, index) => (
              <div
                key={row.label}
                className={`grid grid-cols-1 border-t px-4 py-4 sm:grid-cols-[320px_1fr] sm:px-6 ${index === 0 ? "border-t-0" : "border-[#c2c6d61a]"}`}
              >
                <p className="text-[11px] tracking-widest text-[#424754] uppercase">{row.label}</p>
                <p className="mt-2 text-sm text-[#191c1e] sm:mt-0">{row.value ? row.value(product) : String(product[row.key])}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <article className="relative overflow-hidden rounded-xl bg-[#0f172a] p-8 text-white lg:col-span-2">
            <Image
              src={HERO_BG}
              alt="Ray tracing visual"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0f172a] via-[#0f172a99] to-transparent" />
            <div className="relative">
              <p className="text-[10px] tracking-[0.2em] text-[#60a5fa]">NEXT-GEN RAY TRACING</p>
              <h3 className="mt-2 text-[34px] leading-[1.1] tracking-[-0.03em]">Real-time Ray Tracing at 4K 144Hz.</h3>
              <p className="mt-3 max-w-[48ch] text-sm text-[#94a3b8]">
                Experience worlds that feel indistinguishable from reality with dedicated RT Cores and DLSS Frame
                Generation technology.
              </p>
              <button type="button" className="mt-6 rounded-lg bg-[#2563eb] px-6 py-2.5 text-xs text-white">
                View Benchmarks
              </button>
            </div>
          </article>

          <article className="rounded-xl bg-[#2170e4] p-8 text-white">
            <Sparkles className="h-5 w-5" />
            <h3 className="mt-5 text-2xl tracking-[-0.03em]">Thermal Masterpiece</h3>
            <p className="mt-3 text-sm text-white/80">
              The Founders Edition features a dual-axial flow through design for maximum acoustic performance and cooling
              efficiency.
            </p>
          </article>
        </section>

        {related.length > 0 ? (
          <section className="mt-10 space-y-4">
            <h2 className="text-2xl tracking-[-0.03em] text-[#191c1e]">Related {product.category}</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/explore/${item.id}`}
                  className="rounded-xl border border-[#e2e8f0] bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(15,23,42,0.06)]"
                >
                  <p className="text-[10px] tracking-widest text-[#0058be]">{item.vendor}</p>
                  <h3 className="mt-1 text-base text-[#191c1e]">{item.name}</h3>
                  <p className="mt-3 text-sm text-[#475569]">
                    ${item.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </section>

      <PcMasterFooter />
    </main>
  );
}
