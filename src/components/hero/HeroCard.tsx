import { ArrowUpRight, Headphones } from "lucide-react";
import heroImg from "@/assets/hero/edio-hero.png.asset.json";

export function HeroCard() {
  return (
    <section className="px-3 pt-4 sm:px-6 sm:pt-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-edio-sky/60 via-white to-edio-sky/40 shadow-[0_30px_80px_-40px_rgba(9,10,50,0.35)] sm:rounded-[2.5rem]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          {/* Copy */}
          <div className="flex min-w-0 flex-col justify-between gap-10 p-6 sm:p-10 lg:p-14">
            <div>
              <h1
                className="font-medium text-edio-navy"
                style={{
                  fontSize: "clamp(2.25rem, 5.5vw + 1rem, 4.75rem)",
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
                href="#headphones"
                className="inline-flex items-center gap-2 rounded-full border border-edio-navy/15 bg-white/70 px-6 py-3 text-sm font-medium text-edio-navy transition-colors hover:bg-white"
              >
                <Headphones className="h-4 w-4" />
                Shop headphones
              </a>
            </div>
          </div>

          {/* Image — full-bleed panel, not a floating clipped PNG */}
          <div className="relative min-h-[280px] overflow-hidden bg-gradient-to-br from-edio-sky/50 via-white/40 to-edio-sky/70 sm:min-h-[360px] lg:min-h-[560px]">
            <img
              src={heroImg.url}
              alt="Edio audio collection — headphones, IEMs and DAC on light-blue geometric surfaces"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
