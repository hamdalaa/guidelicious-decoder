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

const CARDS: Card[] = [
  {
    title: "سماعات الرأس",
    href: "#headphones",
    image: headphonesAsset.url,
    alt: "",
  },
  {
    title: "الميكروفونات",
    href: "#microphones",
    image: microphoneAsset.url,
    alt: "",
    alignTop: true,
  },
];

export function CategoryCards() {
  return (
    <section
      dir="rtl"
      aria-label="فئات المنتجات"
      className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16"
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
        {CARDS.map((card) => (
          <a
            key={card.href}
            href={card.href}
            className="group block overflow-hidden rounded-[24px] border border-edio-sky/40 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-edio-navy/25 hover:shadow-[0_18px_36px_-22px_rgba(9,10,50,0.22)]"
          >
            <div className="grid h-[180px] grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-stretch lg:h-[200px]">
              {/* Text zone (right in RTL) */}
              <div className="flex items-center px-6 lg:px-10">
                <h3 className="text-2xl font-semibold leading-tight text-edio-navy lg:text-[32px]">
                  {card.title}
                </h3>
              </div>
              {/* Image zone (left in RTL) */}
              <div
                className={
                  card.alignTop
                    ? "relative flex h-full items-start justify-center overflow-hidden px-4 pt-1 lg:px-6 lg:pt-1.5"
                    : "relative flex h-full items-center justify-center px-4 py-4 lg:px-6"
                }
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  style={card.alignTop ? { objectPosition: "top" } : undefined}
                  className={
                    card.alignTop
                      ? "block w-auto max-w-full self-start object-contain max-h-[170px] lg:max-h-[190px] transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.02]"
                      : "max-h-[140px] w-auto max-w-full object-contain transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.02] lg:max-h-[160px]"
                  }
                  loading="lazy"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

