import heroImg from "@/assets/hero/edio-hero.png.asset.json";

export function HeroCard() {
  return (
    <section className="px-5 pt-5 sm:px-8 sm:pt-8">
      <div className="mx-auto max-w-7xl">
        {/* Desktop / tablet */}
        <div className="relative hidden overflow-hidden rounded-[40px] bg-edio-sky/25 shadow-[0_30px_80px_-40px_rgba(9,10,50,0.35)] md:block">
          <div className="relative min-h-[520px] lg:min-h-[600px]">
            <img
              src={heroImg.url}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Mobile */}
        <div className="relative overflow-hidden rounded-[28px] bg-edio-sky/25 md:hidden">
          <div className="relative aspect-[4/3] w-full">
            <img
              src={heroImg.url}
              alt=""
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
