import { ArrowUpRight, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero/edio-hero.png.asset.json";

export function HeroCard() {
  return (
    <section className="px-3 pt-4 sm:px-6 sm:pt-6">
      {/* ============ DESKTOP / TABLET ============ */}
      <div className="mx-auto hidden max-w-7xl md:block">
        <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-40px_rgba(9,10,50,0.35)] lg:rounded-[2.5rem]">
          <img
            src={heroImg.url}
            alt="Edio audio collection — headphones, IEMs and DAC on light-blue geometric surfaces"
            className="h-[560px] w-full object-cover object-center lg:h-[640px]"
            loading="eager"
            fetchPriority="high"
          />

          {/* Product label — top-left, like "Kini Wearable" */}
          <div className="absolute left-8 top-8 lg:left-14 lg:top-12">
            <div className="flex items-baseline gap-3">
              <span
                className="font-semibold text-edio-navy"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}
              >
                Edio
              </span>
              <span
                className="text-edio-navy/40"
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", letterSpacing: "-0.01em" }}
              >
                Audio
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-edio-navy/70 lg:text-base">
              Find the sound that fits you — no noise, no pressure.
            </p>
          </div>

          {/* CTA overlay — bottom-left */}
          <div className="absolute bottom-8 left-8 flex flex-wrap items-center gap-3 lg:bottom-12 lg:left-14">
            <a
              href="#headphones"
              className="group inline-flex items-center gap-2 rounded-full bg-edio-navy px-6 py-3 text-sm font-medium text-edio-cream shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Explore
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#headphones"
              className="inline-flex items-center rounded-full border border-edio-navy/15 bg-white/80 px-6 py-3 text-sm font-medium text-edio-navy backdrop-blur transition-colors hover:bg-white"
            >
              Shop headphones
            </a>
          </div>
        </div>
      </div>

      {/* ============ MOBILE ============ */}
      <div className="mx-auto max-w-md md:hidden">
        {/* Featured panel */}
        <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_20px_60px_-30px_rgba(9,10,50,0.35)]">
          <img
            src={heroImg.url}
            alt="Edio audio collection"
            className="h-[440px] w-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />

          {/* Top-left overlay text (rotated-block feel like the mockup) */}
          <div className="absolute left-5 top-5 max-w-[65%]">
            <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-edio-navy/60">
              New collection
            </p>
            <h1
              className="mt-2 font-semibold text-edio-navy"
              style={{ fontSize: "clamp(1.5rem, 6vw, 1.9rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Introducing Edio, a new standard in curated audio.
            </h1>
          </div>

          {/* Bottom pills */}
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
            <a
              href="#headphones"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-edio-navy shadow-md"
            >
              Shop now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center rounded-full bg-edio-navy/85 px-4 py-2.5 text-sm font-medium text-edio-cream backdrop-blur"
            >
              Details
            </a>
          </div>
        </div>

        {/* Teaser strip (peek of next section) */}
        <div className="relative mt-3 overflow-hidden rounded-[1.5rem] bg-gradient-to-r from-edio-sky/70 via-white to-edio-sky/70">
          <div className="flex items-center justify-between gap-4 p-5">
            <div className="min-w-0">
              <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-edio-navy/60">
                Curated by Edio
              </p>
              <h2
                className="mt-1 truncate font-semibold text-edio-navy"
                style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}
              >
                Essential bundles.
              </h2>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-edio-navy/70" />
          </div>
        </div>
      </div>
    </section>
  );
}
