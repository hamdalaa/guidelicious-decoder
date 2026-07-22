import heroImg from "@/assets/hero/edio-hero.png.asset.json";
import { useI18n } from "@/lib/i18n";

export function HeroCard() {
  const { t } = useI18n();

  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 pt-5 sm:px-8 sm:pt-8 xl:px-12">
      {/* Desktop / tablet */}
      <div className="relative hidden overflow-hidden rounded-[20px] bg-edio-sky/25 shadow-[0_30px_80px_-40px_rgba(9,10,50,0.25)] md:block md:rounded-[18px] lg:rounded-[20px] xl:rounded-[22px]">
        <div className="relative aspect-[2.3/1] min-h-[500px] lg:min-h-[580px] xl:min-h-[620px]">
          <img
            src={heroImg.url}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "70% 50%" }}
            loading="eager"
            fetchPriority="high"
          />
          {/* Localized text-side gradient */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 start-0 w-[58%] bg-gradient-to-r from-edio-cream/85 via-edio-cream/50 to-transparent rtl:bg-gradient-to-l"
          />
          {/* Copy block */}
          <div className="relative z-10 flex h-full items-center">
            <div className="w-full max-w-[560px] px-10 py-14 lg:px-14 lg:py-16 xl:px-16">
              <h1
                className="font-semibold leading-[1.05] text-edio-navy"
                style={{ fontSize: "clamp(40px, 4.2vw, 64px)" }}
              >
                {t("hero.headline")}
              </h1>
              <p className="mt-5 max-w-[420px] text-[16px] leading-[1.55] text-edio-navy/75 lg:text-[17px]">
                {t("hero.tagline")}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#shop"
                  className="edio-btn-primary inline-flex h-[46px] items-center rounded-[10px] bg-edio-navy px-7 text-[14px] font-medium leading-none text-white active:opacity-95"
                >
                  {t("hero.cta.explore")}
                </a>
                <a
                  href="#audio"
                  className="edio-btn-secondary inline-flex h-[46px] items-center rounded-[10px] border-[1.5px] border-edio-navy/85 px-7 text-[14px] font-medium leading-none text-edio-navy active:opacity-95"
                >
                  {t("hero.cta.shopAudio")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile — full-bleed image with overlaid copy + CTAs */}
      <div className="md:hidden">
        <div className="relative overflow-hidden rounded-[22px] bg-edio-sky/30 shadow-[0_20px_60px_-30px_rgba(9,10,50,0.28)]">
          <div className="relative aspect-[3/4] w-full">
            <img
              src={heroImg.url}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: "50% 55%" }}
              loading="eager"
              fetchPriority="high"
            />
            {/* Top scrim for headline legibility */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-edio-cream/85 via-edio-cream/45 to-transparent"
            />
            {/* Bottom scrim for buttons */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-edio-navy/70 via-edio-navy/25 to-transparent"
            />

            {/* Overlay content */}
            <div className="relative z-10 flex h-full flex-col justify-between p-6">
              <div>
                <h1
                  className="font-semibold tracking-tight text-edio-navy"
                  style={{ fontSize: "clamp(2rem, 9vw, 2.75rem)", lineHeight: 1.06 }}
                >
                  {t("hero.headline")}
                </h1>
                <p className="mt-3 max-w-[28ch] text-[15px] leading-[1.5] text-edio-navy/80">
                  {t("hero.tagline")}
                </p>
              </div>

              <div className="flex w-full flex-col gap-3">
                <a
                  href="#shop"
                  className="inline-flex h-[50px] w-full items-center justify-center rounded-[10px] bg-edio-navy px-5 text-[15px] font-semibold leading-none text-white active:opacity-95"
                >
                  {t("hero.cta.explore")}
                </a>
                <a
                  href="#audio"
                  className="inline-flex h-[50px] w-full items-center justify-center rounded-[10px] border-2 border-white/90 bg-white/10 px-5 text-[15px] font-semibold leading-none text-white backdrop-blur-md active:opacity-95"
                >
                  {t("hero.cta.shopAudio")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
