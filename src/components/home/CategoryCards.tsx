import headphonesAsset from "@/assets/cat-headphones.png.asset.json";
import microphoneAsset from "@/assets/cat-microphone.png.asset.json";

type Card = {
  title: string;
  href: string;
  image: string;
  alt: string;
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
  },
];

export function CategoryCards() {
  return (
    <section
      dir="rtl"
      aria-label="فئات المنتجات"
      className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {CARDS.map((card) => (
          <a
            key={card.href}
            href={card.href}
            className="group block rounded-[28px] border border-edio-sky/40 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-edio-navy/20 hover:shadow-[0_20px_40px_-24px_rgba(9,10,50,0.18)]"
          >
            <div className="grid min-h-[260px] grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center lg:min-h-[340px]">
              {/* Text zone (right in RTL) */}
              <div className="flex items-center px-6 py-8 lg:px-10 lg:py-10">
                <h3 className="text-2xl font-semibold leading-tight text-edio-navy sm:text-3xl lg:text-[42px]">
                  {card.title}
                </h3>
              </div>
              {/* Image zone (left in RTL) */}
              <div className="flex h-full items-center justify-center p-5 lg:p-8">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="max-h-[180px] w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.03] lg:max-h-[240px]"
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
