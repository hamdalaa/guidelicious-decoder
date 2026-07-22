import headphonesAsset from "@/assets/cat-headphones.png.asset.json";
import microphoneAsset from "@/assets/cat-microphone.png.asset.json";
import iemAsset from "@/assets/cat-iem.png.asset.json";
import micAtAsset from "@/assets/cat-mic-at.png.asset.json";

type Card = {
  title: string;
  href: string;
  image: string;
  alt: string;
  alignTop?: boolean;
};

// Order per user spec (RTL reading order):
// الميكروفونات، سماعات الرأس، مايكات، سماعات داخل الأذن
const CARDS: Card[] = [
  {
    title: "الميكروفونات",
    href: "#microphones",
    image: microphoneAsset.url,
    alt: "",
    alignTop: true,
  },
  {
    title: "سماعات الرأس",
    href: "#headphones",
    image: headphonesAsset.url,
    alt: "",
  },
  {
    title: "مايكات",
    href: "#mics",
    image: micAtAsset.url,
    alt: "",
    alignTop: true,
  },
  {
    title: "سماعات داخل الأذن",
    href: "#iem",
    image: iemAsset.url,
    alt: "",
  },
];

function CategoryCard({ card }: { card: Card }) {
  return (
    <a
      href={card.href}
      className="group block h-full overflow-hidden rounded-[22px] border border-edio-sky/40 bg-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-edio-navy/25 hover:shadow-[0_14px_30px_-22px_rgba(9,10,50,0.22)]"
    >
      <div className="grid h-[132px] grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-stretch lg:h-[148px]">
        {/* Text zone (right in RTL) */}
        <div className="flex items-center px-4 lg:px-5">
          <h3 className="text-[17px] font-semibold leading-tight text-edio-navy lg:text-[20px]">
            {card.title}
          </h3>
        </div>
        {/* Image zone (left in RTL) */}
        <div
          className={
            card.alignTop
              ? "relative flex h-full items-start justify-center overflow-hidden px-3 pt-1 lg:px-4"
              : "relative flex h-full items-center justify-center px-3 py-3 lg:px-4"
          }
        >
          <img
            src={card.image}
            alt={card.alt}
            style={card.alignTop ? { objectPosition: "top" } : undefined}
            className={
              card.alignTop
                ? "block w-auto max-w-full self-start object-contain max-h-[120px] lg:max-h-[138px] transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.02]"
                : "max-h-[100px] w-auto max-w-full object-contain transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.02] lg:max-h-[116px]"
            }
            loading="lazy"
          />
        </div>
      </div>
    </a>
  );
}

export function CategoryCards() {
  return (
    <section
      dir="rtl"
      aria-label="فئات المنتجات"
      className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16"
    >
      {/* Desktop / tablet: single horizontal strip */}
      <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {CARDS.map((card) => (
          <CategoryCard key={card.href} card={card} />
        ))}
      </div>

      {/* Mobile: horizontal snap carousel */}
      <div className="-mx-6 sm:hidden">
        <div
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-6 px-6 pb-2"
          style={{ scrollbarWidth: "none" }}
        >
          {CARDS.map((card) => (
            <div
              key={card.href}
              className="w-[78%] shrink-0 snap-start"
            >
              <CategoryCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
