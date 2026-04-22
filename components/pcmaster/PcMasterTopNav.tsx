"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CircleUserRound, Search, ShoppingCart } from "lucide-react";
import { MAIN_NAV_LINKS } from "@/components/pcmaster/data/mockData";

type PcMasterTopNavProps = {
  className?: string;
};

export function PcMasterTopNav({ className = "" }: PcMasterTopNavProps) {
  const pathname = usePathname();
  const [selectedLink, setSelectedLink] = useState<string>(MAIN_NAV_LINKS[0].key);

  const routeSelectedKey =
    pathname === "/explore" || pathname.startsWith("/explore/") || pathname === "/cart"
      ? "shop"
      : pathname === "/homepage" || pathname === "/"
        ? "home"
        : undefined;
  const activeKey = routeSelectedKey ?? selectedLink;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-[#e2e8f0] bg-white/80 backdrop-blur-xl ${className}`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8 lg:gap-12">
          <Link className="text-[24px] font-semibold tracking-[-0.05em] text-[#0f172a]" href="/">
            PCMaster
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {MAIN_NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setSelectedLink(link.key)}
                aria-current={activeKey === link.key ? "page" : undefined}
                className={`relative rounded-md px-2 py-1 text-sm transition-all duration-300 ${
                  activeKey === link.key
                    ? "bg-[#0058be12] text-[#0058be]"
                    : "text-[#475569] hover:text-[#0f172a]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-[-8px] left-2 h-0.5 rounded-full bg-[#0058be] transition-all duration-300 ${
                    activeKey === link.key ? "w-[calc(100%-1rem)] opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <label className="hidden h-10 w-[256px] items-center rounded-lg bg-[#f2f4f6] px-4 md:flex">
            <Search className="h-[14px] w-[14px] text-[#667085]" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border-none bg-transparent px-3 text-sm text-[#424754] outline-none placeholder:text-[#42475480]"
            />
          </label>

          <Link
            href="/cart"
            aria-label="Cart"
            className="rounded-lg p-2 text-[#0f172a] transition-colors hover:bg-[#f2f4f6]"
          >
            <ShoppingCart className="h-5 w-5" />
          </Link>

          <button
            type="button"
            aria-label="Profile"
            className="rounded-lg p-2 text-[#0f172a] transition-colors hover:bg-[#f2f4f6]"
          >
            <CircleUserRound className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
