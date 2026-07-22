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

      {/* Mobile — dedicated composition, sits directly on cream page bg */}
      <div className="md:hidden">
        <div className="flex flex-col gap-5 px-4 pt-5 pb-6 xs:px-5">
          <div>
            <h1
              className="font-semibold text-edio-navy"
              style={{ fontSize: "clamp(2rem, 8vw, 2.6rem)", lineHeight: 1.08 }}
            >
              {t("hero.headline")}
            </h1>
            <p className="mt-3 max-w-[34ch] text-[15px] leading-[1.55] text-edio-navy/75 sm:text-[16px]">
              {t("hero.tagline")}
            </p>
          </div>

          <div className="w-full">
            <img
              src={heroImg.url}
              alt=""
              className="block h-auto w-full object-contain"
              style={{ objectPosition: "center" }}
              loading="eager"
              fetchPriority="high"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 [@media(max-width:359px)]:grid-cols-1">
            <a
              href="#shop"
              className="inline-flex h-[46px] w-full items-center justify-center rounded-[10px] bg-edio-navy px-5 text-[14px] font-medium leading-none text-white active:opacity-95"
            >
              {t("hero.cta.explore")}
            </a>
            <a
              href="#audio"
              className="inline-flex h-[46px] w-full items-center justify-center rounded-[10px] border-[1.5px] border-edio-navy/85 px-5 text-[14px] font-medium leading-none text-edio-navy active:opacity-95"
            >
              {t("hero.cta.shopAudio")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
