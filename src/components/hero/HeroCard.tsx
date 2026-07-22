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
          {/* Frosted edge vignette */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-edio-cream/40 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_bottom,black,transparent)]" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-edio-cream/40 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_top,black,transparent)]" />
            <div className="absolute inset-y-0 end-0 w-16 bg-gradient-to-l from-edio-cream/35 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_left,black,transparent)]" />
          </div>
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
                  className="edio-btn-secondary inline-flex h-[46px] items-center rounded-[10px] border-2 border-edio-navy/85 bg-white/25 px-7 text-[14px] font-medium leading-none text-edio-navy backdrop-blur-md active:opacity-95"
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
        <div className="relative overflow-hidden rounded-[22px] bg-edio-sky/30">
          <div className="relative aspect-[3/4] w-full">
            <img
              src={heroImg.url}
              alt=""
              className="absolute inset-0 h-full w-full object-contain"
              style={{ objectPosition: "50% 50%" }}
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>


    </section>
  );
}
