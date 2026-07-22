import heroImg from "@/assets/hero/edio-hero.png.asset.json";

export function HeroCard() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 pt-5 sm:px-8 sm:pt-8 xl:px-12">
      {/* Desktop / tablet */}
      <div className="relative hidden overflow-hidden rounded-[20px] md:block md:rounded-[18px] lg:rounded-[20px] xl:rounded-[22px]">
        <div className="relative aspect-[2.3/1] min-h-[500px] lg:min-h-[580px] xl:min-h-[620px]">
          <img
            src={heroImg.url}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "70% 50%" }}
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="relative overflow-hidden rounded-[22px] md:hidden">
        <div className="relative aspect-[3/4] w-full">
          <img
            src={heroImg.url}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "50% 55%" }}
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
