import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Gauge,
  LifeBuoy,
  Rocket,
  ShieldCheck,
  Wrench,
} from "lucide-react";

type HeroCard = {
  title: string;
  image: string;
  rotationClass: string;
};

type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string[];
};

type FooterColumn = {
  title: string;
  links: string[];
};

const heroCards: HeroCard[] = [
  {
    title: "Rog Astral RTX 4090",
    image: "https://www.figma.com/api/mcp/asset/cb47bdfc-9fa7-447b-8b7b-36d04e43e9c7",
    rotationClass: "-rotate-4",
  },
  {
    title: "Corsair Dominator 16x2 DDR5",
    image: "https://www.figma.com/api/mcp/asset/bed05f18-970b-4c9a-8e56-32a151b1e4d5",
    rotationClass: "rotate-3",
  },
  {
    title: "Samsung 970Evo Plus",
    image: "https://www.figma.com/api/mcp/asset/28db13fe-5ea4-4207-bcf1-7e0142f10238",
    rotationClass: "rotate-7",
  },
];

type TrustLogo = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const trustLogos: TrustLogo[] = [
  {
    src: "https://www.figma.com/api/mcp/asset/c5bfbae6-dbc1-404c-98ef-37798cef572e",
    width: 63,
    height: 32,
    alt: "Tech pioneer logo 1",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/b5515a31-7fa8-45e9-849c-5ddfc9b7aff2",
    width: 119,
    height: 32,
    alt: "Tech pioneer logo 2",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/0e421f1e-acfd-49e9-9b5e-6b2abf5f817c",
    width: 81,
    height: 32,
    alt: "Tech pioneer logo 3",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/67fbb001-dd32-4056-a211-cfbdd6e1e0cb",
    width: 63,
    height: 32,
    alt: "Tech pioneer logo 4",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/3f1ceec7-ab4e-499b-a433-0e2ed4528cf3",
    width: 102,
    height: 32,
    alt: "Tech pioneer logo 5",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/a0a8123b-4a8c-48cb-86ee-68f39278729e",
    width: 77,
    height: 32,
    alt: "Tech pioneer logo 6",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/5d81d1b3-8275-4bb4-b742-3ebe06273176",
    width: 77,
    height: 32,
    alt: "Tech pioneer logo 7",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/5d81d1b3-8275-4bb4-b742-3ebe06273176",
    width: 77,
    height: 32,
    alt: "Tech pioneer logo 8",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/2f156d1d-4a49-415c-bc8d-230fb0b129ba",
    width: 77,
    height: 32,
    alt: "Tech pioneer logo 9",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/0b271ff1-5111-406d-bef4-34e7b020d516",
    width: 77,
    height: 32,
    alt: "Tech pioneer logo 10",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/bdf9dcac-6481-4980-b0f4-3b8f4d9aa80a",
    width: 77,
    height: 32,
    alt: "Tech pioneer logo 11",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/a4c67a42-4c7c-4c87-8a43-d4b8458d707e",
    width: 77,
    height: 32,
    alt: "Tech pioneer logo 12",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/cefc572d-316c-48cd-b789-ac43555e1578",
    width: 77,
    height: 32,
    alt: "Tech pioneer logo 13",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/96bd2e82-dae8-4d0e-9cd4-d7a0f29a5ae6",
    width: 77,
    height: 32,
    alt: "Tech pioneer logo 14",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/46b74f90-1c46-4a72-a5a1-edeedf3902a4",
    width: 77,
    height: 32,
    alt: "Tech pioneer logo 15",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/2f017e35-4597-4859-b641-07f38737e67b",
    width: 77,
    height: 32,
    alt: "Tech pioneer logo 16",
  },
];

const footerColumns: FooterColumn[] = [
  {
    title: "Ecosystem",
    links: [
      "Pre-Built Systems",
      "Custom Configurator",
      "Workstation Class",
      "Gaming Series",
    ],
  },
  {
    title: "Company",
    links: ["Privacy Policy", "Terms of Service", "Affiliates", "Careers"],
  },
  {
    title: "Support",
    links: ["Shipping", "Returns", "Warranty", "Knowledge Base"],
  },
];

const tuningBars = [98, 94, 99];

const performanceFeature: Feature = {
  icon: Rocket,
  title: "Performance Tuning",
  description: [
    "BIOS optimization and component",
    "overclocking included as standard.",
    "We push every frame.",
  ],
};

const certificationFeature: Feature = {
  icon: ShieldCheck,
  title: "Rigorous Certification",
  description: [
    "Each system receives a signed",
    "Certificate of Precision, detailing",
    "benchmark results and thermal profiles.",
  ],
};

function Navigation() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-[#f7f9fb]/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-xl font-semibold tracking-tight text-slate-900">PCMaster</div>

        <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          <Link className="transition-colors hover:text-slate-900" href="#">
            PC building
          </Link>
          <Link className="transition-colors hover:text-slate-900" href="#">
            Shop
          </Link>
          <Link className="transition-colors hover:text-slate-900" href="#">
            Laptop &amp; Pre-built system
          </Link>
          <Link className="transition-colors hover:text-slate-900" href="#">
            Support
          </Link>
        </nav>

        <Link
          className="rounded-lg bg-gradient-to-br from-[#0058BE] to-[#2170E4] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(0,88,190,0.8)] transition-transform hover:-translate-y-0.5"
          href="/register"
        >
          Login / Signup
        </Link>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fb]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_35%_at_70%_50%,rgba(0,88,190,0.12),transparent_70%)]" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="relative z-10">
          <span className="inline-flex rounded-full bg-[#dae2fd] px-3 py-1 text-xs tracking-[0.12em] text-slate-600">
            PERFORMANCE REIMAGINED
          </span>

          <h1 className="mt-5 text-5xl font-bold leading-[0.95] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Master Your
            <span className="block text-[#0058BE]">Digital</span>
            <span className="block text-[#0058BE]">Realm.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Engineered for elite performance, PCMaster delivers custom-built ecosystems
            that blend surgical precision with raw computational power.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-lg bg-[#0058BE] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_24px_-14px_rgba(0,88,190,0.9)] transition-transform hover:-translate-y-0.5">
              Configure Your Build
            </button>
            <button className="rounded-lg bg-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-300">
              View Ecosystem
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:ml-auto lg:max-w-[560px] lg:pl-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:gap-8">
            <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8">
              <article className="pcmaster-float pcmaster-float-a rounded-lg bg-white p-4 shadow-2xl shadow-slate-900/10 ring-1 ring-black/5 sm:p-5 lg:p-4 xl:p-5 2xl:p-6">
                <div className={`${heroCards[0].rotationClass} origin-center`}>
                  <Image
                    alt={heroCards[0].title}
                    className="h-44 w-full rounded-md object-cover sm:h-52"
                    src={heroCards[0].image}
                    width={440}
                    height={320}
                    unoptimized
                  />
                  <p className="mt-3 text-xs font-semibold text-slate-900 sm:text-sm">
                    {heroCards[0].title}
                  </p>
                </div>
              </article>

              <article className="pcmaster-float pcmaster-float-b rounded-lg bg-white p-4 shadow-2xl shadow-slate-900/10 ring-1 ring-black/5 sm:p-5 lg:p-4 xl:p-5 2xl:p-6">
                <div className={`${heroCards[1].rotationClass} origin-center`}>
                  <Image
                    alt={heroCards[1].title}
                    className="h-32 w-full rounded-md object-cover sm:h-36"
                    src={heroCards[1].image}
                    width={440}
                    height={240}
                    unoptimized
                  />
                  <p className="mt-3 text-xs font-semibold text-slate-900 sm:text-sm">
                    {heroCards[1].title}
                  </p>
                </div>
              </article>
            </div>

            <article className="pcmaster-float pcmaster-float-c rounded-lg bg-white p-4 shadow-2xl shadow-slate-900/10 ring-1 ring-black/5 sm:mt-8 sm:p-5 lg:mt-12 lg:p-4 xl:p-5 2xl:p-6">
              <div className={`${heroCards[2].rotationClass} origin-center`}>
                <Image
                  alt={heroCards[2].title}
                  className="h-[19rem] w-full rounded-md object-cover sm:h-[22rem]"
                  src={heroCards[2].image}
                  width={440}
                  height={560}
                  unoptimized
                />
                <p className="mt-3 text-xs font-semibold text-slate-900 sm:text-sm">
                  {heroCards[2].title}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="bg-[#f2f4f6] py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] tracking-[0.2em] text-slate-500">
          TRUSTED BY GLOBAL TECH PIONEERS
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
          {trustLogos.map((logo, index) => (
            <Image
              key={`${logo.src}-${index}`}
              alt={logo.alt}
              src={logo.src}
              width={logo.width}
              height={logo.height}
              className="h-8 w-auto object-contain"
              unoptimized
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="bg-[#f7f9fb] py-20">
      <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Engineering as an Art Form.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          At PCMaster, we believe that a workstation is more than just hardware; it is
          the physical manifestation of your ambition. Each system is hand-assembled in
          our precision lab, undergoing 72 hours of thermal stress-testing to ensure
          that when you are at the edge of discovery, your system never flinches.
        </p>
        <Link
          className="mt-8 inline-flex items-center gap-2 border-b border-slate-300 pb-1 text-sm font-medium text-slate-900 transition-colors hover:border-[#0058BE] hover:text-[#0058BE]"
          href="#"
        >
          Learn about our assembly process
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function MainFeatureCard() {
  return (
    <article className="rounded-lg border border-slate-200/70 bg-white p-6 shadow-sm sm:p-8 lg:col-span-8">
      <Wrench className="h-7 w-7 text-[#0058BE]" />
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        Expert Assembly
      </h3>
      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
        Every component is selected for maximum synergy. Our master builders manage
        every millimeter of cable routing and thermal paste application.
      </p>
      <div className="mt-8 overflow-hidden rounded-lg">
        <Image
          alt="Expert assembly process"
          className="h-56 w-full object-cover"
          src="https://www.figma.com/api/mcp/asset/2fee9c1b-e217-4a3c-8b0c-402522047b69"
          width={860}
          height={430}
          unoptimized
        />
      </div>
    </article>
  );
}

function SupportCard() {
  return (
    <article className="rounded-lg bg-[#0058BE] p-6 text-white shadow-sm sm:p-8 lg:col-span-4">
      <LifeBuoy className="h-7 w-7" />
      <h3 className="mt-4 text-2xl font-semibold tracking-tight">Lifetime Support</h3>
      <p className="mt-4 text-sm leading-7 text-blue-50/90 sm:text-base">
        Direct access to our hardware engineers 24/7. No bots, no scripts, just elite
        support.
      </p>
      <p className="mt-8 border-t border-white/25 pt-5 text-sm text-blue-50/85">
        SLA: 15-minute response time
      </p>
    </article>
  );
}

function SimpleFeatureCard({ icon: Icon, title, description }: Feature) {
  return (
    <article className="rounded-lg border border-slate-200/70 bg-white p-6 shadow-sm sm:p-8">
      <Icon className="h-7 w-7 text-[#0058BE]" />
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">{title}</h3>
      <div className="mt-4 space-y-1 text-sm leading-7 text-slate-600 sm:text-base">
        {description.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  );
}

function CertificationMeter() {
  return (
    <article className="rounded-lg border border-slate-200/70 bg-white p-6 shadow-sm sm:p-8 lg:col-span-8">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <Gauge className="h-7 w-7 text-[#0058BE]" />
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
            {certificationFeature.title}
          </h3>
          <div className="mt-4 space-y-1 text-sm leading-7 text-slate-600 sm:text-base">
            {certificationFeature.description.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {tuningBars.map((value, index) => (
            <div key={`bar-${index}`} className="h-2.5 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-[#0058BE]"
                style={{ width: `${value}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function FeaturesSection() {
  return (
    <section className="bg-[#f2f4f6] py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <MainFeatureCard />
        <SupportCard />
        <div className="lg:col-span-4">
          <SimpleFeatureCard {...performanceFeature} />
        </div>
        <CertificationMeter />
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="border-t border-slate-200/80 bg-[#f2f4f6] py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h4 className="text-lg font-semibold text-slate-900">PCMaster</h4>
          <p className="mt-5 max-w-xs text-sm leading-7 text-slate-600">
            © 2024 PCMaster Ecosystem. Engineered for Precision. Designed for the bold.
          </p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h5 className="text-base font-semibold text-slate-900">{column.title}</h5>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {column.links.map((link) => (
                <li key={link}>
                  <Link className="transition-colors hover:text-slate-900" href="#">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

export function PcMasterLandingPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fb] text-slate-900">
      <Navigation />
      <HeroSection />
      <TrustSection />
      <StorySection />
      <FeaturesSection />
      <FooterSection />
    </main>
  );
}
