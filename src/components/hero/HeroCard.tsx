import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero/edio-hero.png.asset.json";

export function HeroCard() {
  return (
    <section className="px-3 pt-4 sm:px-6 sm:pt-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-edio-sky/60 via-white to-edio-sky/40 shadow-[0_30px_80px_-40px_rgba(9,10,50,0.35)] sm:rounded-[2.5rem]">
        <div className="grid grid-cols-1 gap-6 p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-8 lg:p-14">
          {/* Copy */}
          <div className="flex min-w-0 flex-col justify-between gap-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium tracking-wide text-edio-navy/70">
                <span className="h-1.5 w-1.5 rounded-full bg-edio-blue" />
                Sound, guided.
              </span>

              <h1
                className="mt-6 font-medium text-edio-navy"
                style={{
                  fontSize: "clamp(2.5rem, 6vw + 1rem, 5rem)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.025em",
                }}
              >
                Find the sound
                <br />
                that fits you.
              </h1>

              <p className="mt-5 max-w-md text-base text-edio-navy/70 sm:text-lg">
                Edio helps you choose the right audio gear — no noise, no pressure.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#headphones"
                className="group inline-flex items-center gap-2 rounded-full bg-edio-navy px-6 py-3 text-sm font-medium text-edio-cream transition-transform hover:-translate-y-0.5"
              >
                Explore
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center rounded-full border border-edio-navy/15 bg-white/70 px-6 py-3 text-sm font-medium text-edio-navy transition-colors hover:bg-white"
              >
                How it works
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-6 rounded-[1.5rem] bg-white/50 blur-2xl" aria-hidden />
            <img
              src={heroImg.url}
              alt="Edio audio collection — headphones, IEMs and DAC on light-blue geometric surfaces"
              className="relative w-full max-w-2xl object-contain drop-shadow-[0_25px_40px_rgba(9,10,50,0.15)]"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
