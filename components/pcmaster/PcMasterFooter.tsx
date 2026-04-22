import { Globe, Share2 } from "lucide-react";
import { FOOTER_COLUMNS } from "@/components/pcmaster/data/mockData";

export function PcMasterFooter() {
  return (
    <footer className="mt-auto border-t border-[#e2e8f0] bg-[#f1f5f9]">
      <div className="grid gap-10 px-7 py-16 md:grid-cols-4 md:px-12">
        <div className="space-y-6">
          <h3 className="text-2xl text-[#0f172a]">PCMaster</h3>
          <p className="max-w-[280px] text-sm leading-6 text-[#64748b]">
            Architecting high-performance digital environments for creators, gamers,
            and visionaries.
          </p>
          <div className="flex items-center gap-4 text-[#94a3b8]">
            <Share2 className="h-4 w-4" />
            <Globe className="h-4 w-4" />
          </div>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <div className="space-y-6" key={column.title}>
            <p className="text-xs tracking-[0.1em] text-[#0f172a]">{column.title}</p>
            <ul className="space-y-4">
              {column.links.map((link) => (
                <li className="text-xs tracking-[0.1em] text-[#64748b] underline" key={link}>
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-1">
          <h4 className="mb-4 text-base text-[#0f172a]">Newsletter</h4>
          <div className="flex max-w-[280px] gap-2">
            <input
              className="w-full rounded-lg bg-white px-3 py-2 text-xs text-[#6b7280] outline-none ring-[#0058be] transition focus:ring-2"
              defaultValue="Email address"
              type="email"
            />
            <button className="rounded-lg bg-[#0058be] px-4 py-2 text-xs text-white" type="button">
              Join
            </button>
          </div>
          <p className="mt-4 text-[10px] leading-4 text-[#94a3b8]">
            © 2024 PCMaster Precision Architect. All rights reserved.
          </p>
        </div>
      </div>

      <div className="border-t border-[#e2e8f0] px-7 py-8 text-center text-xs tracking-[0.1em] text-[#64748b] md:px-12">
        © 2024 PCMASTER PRECISION ARCHITECT. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
