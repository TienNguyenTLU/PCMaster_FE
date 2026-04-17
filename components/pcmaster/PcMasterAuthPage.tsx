import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { PcMasterFooter } from "@/components/pcmaster/PcMasterFooter";

type AuthMode = "register" | "login";

type AuthPageProps = {
  mode: AuthMode;
};

const AVATAR_URLS = [
  "https://www.figma.com/api/mcp/asset/782e57d1-bf7e-406e-80e0-d51e17d516e8",
  "https://www.figma.com/api/mcp/asset/cac0bf90-8b9e-40ef-a4fc-5f94b3dc477d",
  "https://www.figma.com/api/mcp/asset/d36cf260-b846-46c6-b905-85b068832e3d",
];

function AuthCard({ mode }: { mode: AuthMode }) {
  const isRegister = mode === "register";

  return (
    <section className="w-full max-w-[520px] lg:ml-auto">
      <header className="space-y-2">
        <h2 className="text-[32px] font-semibold tracking-[-0.03em] text-[#191c1e] sm:text-[34px]">
          {isRegister ? "Create Account" : "Welcome Back"}
        </h2>
        <p className="text-sm text-[#424754]">
          {isRegister
            ? "Elevate your building journey today."
            : "Sign in to continue building with PCMaster."}
        </p>
      </header>

      <form className="mt-8 space-y-6">
        {isRegister ? (
          <label className="block space-y-2">
            <span className="text-[10px] tracking-[0.1em] text-[#54647a]">FULL NAME</span>
            <input
              className="w-full rounded border border-[#c2c6d633] px-4 py-3 text-base text-[#191c1e] outline-none ring-[#0058be] transition focus:ring-2"
              defaultValue="Nikola Tesla"
              type="text"
            />
          </label>
        ) : null}

        <label className="block space-y-2">
          <span className="text-[10px] tracking-[0.1em] text-[#54647a]">EMAIL ADDRESS</span>
          <input
            className="w-full rounded border border-[#c2c6d633] px-4 py-3 text-base text-[#191c1e] outline-none ring-[#0058be] transition focus:ring-2"
            defaultValue="builder@pcmaster.tech"
            type="email"
          />
        </label>

        {isRegister ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block space-y-2">
              <span className="text-[10px] tracking-[0.1em] text-[#54647a]">PASSWORD</span>
              <input
                className="w-full rounded border border-[#c2c6d633] px-4 py-3 text-base text-[#191c1e] outline-none ring-[#0058be] transition focus:ring-2"
                defaultValue="........"
                type="password"
              />
            </label>
            <label className="block space-y-2">
              <span className="text-[10px] tracking-[0.1em] text-[#54647a]">CONFIRM</span>
              <input
                className="w-full rounded border border-[#c2c6d633] px-4 py-3 text-base text-[#191c1e] outline-none ring-[#0058be] transition focus:ring-2"
                defaultValue="........"
                type="password"
              />
            </label>
          </div>
        ) : (
          <label className="block space-y-2">
            <span className="text-[10px] tracking-[0.1em] text-[#54647a]">PASSWORD</span>
            <input
              className="w-full rounded border border-[#c2c6d633] px-4 py-3 text-base text-[#191c1e] outline-none ring-[#0058be] transition focus:ring-2"
              defaultValue="........"
              type="password"
            />
          </label>
        )}

        <button
          className="flex w-full items-center justify-center gap-2 rounded bg-[#0058be] px-6 py-4 text-base text-white shadow-[0_10px_15px_-3px_rgba(0,88,190,0.2),0_4px_6px_-4px_rgba(0,88,190,0.2)] transition-colors hover:bg-[#004ca5]"
          type="submit"
        >
          <span>{isRegister ? "Sign up" : "Sign in"}</span>
          <MoveRight className="h-4 w-4" />
        </button>

      </form>

      <p className="mt-7 text-center text-sm text-[#424754]">
        {isRegister ? "Already part of the network?" : "Need to start your build journey?"}{" "}
        <Link className="font-semibold text-[#0058be]" href={isRegister ? "/login" : "/register"}>
          {isRegister ? "Sign in" : "Create account"}
        </Link>
      </p>
    </section>
  );
}

function EditorialPanel() {
  return (
    <section className="space-y-8">
      <p className="text-xs tracking-[0.2em] text-[#0058be]">LABORATORY ACCESS</p>

      <h1 className="text-[clamp(2.25rem,5vw,5.25rem)] leading-[0.98] tracking-[-0.03em] text-[#191c1e]">
        <span className="block">Join the</span>
        <span className="block font-extrabold">PCMaster</span>
      </h1>

      <p className="max-w-[460px] text-base leading-[1.6] text-[#424754] sm:text-lg">
        Precision-engineered tools for the ultimate PC building experience. Access
        high-fidelity specifications and laboratory-grade guides.
      </p>

      <div className="flex items-center gap-4 pt-4">
        <div className="flex">
          {AVATAR_URLS.map((avatar, index) => (
            <div
              className="-mr-3 h-10 w-10 overflow-hidden rounded-xl border-2 border-[#f7f9fb] bg-[#e2e8f0]"
              key={avatar}
            >
              <Image
                alt={`Builder ${index + 1}`}
                className="h-full w-full object-cover"
                height={40}
                src={avatar}
                unoptimized
                width={40}
              />
            </div>
          ))}
        </div>
        <span className="text-sm text-[#424754]">Used by 50k+ builders worldwide.</span>
      </div>
    </section>
  );
}

export function PcMasterAuthPage({ mode }: AuthPageProps) {
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f9fb]">
      <section className="relative flex min-h-screen flex-1 items-stretch justify-stretch overflow-hidden px-0 py-0">
        <div className="pointer-events-none absolute left-[-64px] top-[-92px] h-[552px] w-[512px] rounded-xl bg-[#d3e4fe] opacity-25 blur-[60px]" />
        <div className="pointer-events-none absolute bottom-[-92px] right-[-64px] h-[460px] w-[448px] rounded-xl bg-[#d8e2ff] opacity-30 blur-[50px]" />

        <div className="relative z-10 flex min-h-screen w-full border-y border-[#c2c6d626] bg-white/95 p-6 shadow-[0_40px_80px_rgba(0,0,0,0.04)] backdrop-blur-sm sm:p-8 lg:p-12">
          <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-12">
            <EditorialPanel />
            <div className="border-t border-[#e2e8f0] pt-8 lg:border-l lg:border-t-0 lg:pt-0 lg:pl-8">
              <AuthCard mode={mode} />
            </div>
          </div>
        </div>
      </section>

      <PcMasterFooter />
    </main>
  );
}
