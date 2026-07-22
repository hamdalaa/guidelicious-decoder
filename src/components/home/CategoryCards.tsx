import headphonesAsset from "@/assets/cat-headphones.png.asset.json";
import microphoneAsset from "@/assets/cat-microphone.png.asset.json";
import iemAsset from "@/assets/cat-iem.png.asset.json";
import micAtAsset from "@/assets/cat-mic-at.png.asset.json";

type Card = {
  title: string;
  href: string;
  image: string;
  alt: string;
};

// RTL reading order
const CARDS: Card[] = [
  { title: "الميكروفونات", href: "#microphones", image: microphoneAsset.url, alt: "" },
  { title: "سماعات الرأس", href: "#headphones", image: headphonesAsset.url, alt: "" },
  { title: "مايكات", href: "#mics", image: micAtAsset.url, alt: "" },
  { title: "سماعات داخل الأذن", href: "#iem", image: iemAsset.url, alt: "" },
];

// Isolated styles — scoped to `.edio-cat-*` so nothing bleeds in from banner/hero CSS.
const SCOPED_CSS = `
.edio-cat-section { margin-inline: auto; max-width: 80rem; padding: 2.5rem 1.25rem; }
@media (min-width: 640px) { .edio-cat-section { padding: 3rem 2rem; } }
@media (min-width: 1024px) { .edio-cat-section { padding: 3.5rem 2rem; } }

.edio-cat-strip { display: none; }
@media (min-width: 1024px) {
  .edio-cat-strip {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
    align-items: stretch;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .edio-cat-strip {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    align-items: stretch;
  }
}

.edio-cat-carousel { display: flex; gap: 14px; overflow-x: auto; scroll-snap-type: x mandatory; padding: 0 20px 8px; margin: 0 -20px; scrollbar-width: none; }
.edio-cat-carousel::-webkit-scrollbar { display: none; }
@media (min-width: 768px) { .edio-cat-carousel-wrap { display: none; } }

.edio-cat-slide { flex: 0 0 85%; scroll-snap-align: start; }

.edio-cat-card {
  display: grid;
  grid-template-columns: 1fr 120px;
  align-items: stretch;
  height: 140px;
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(135, 203, 246, 0.45);
  border-radius: 22px;
  overflow: hidden;
  text-decoration: none;
  transition: transform 200ms ease-out, border-color 200ms ease-out, box-shadow 200ms ease-out;
}
@media (min-width: 1280px) { .edio-cat-card { height: 148px; } }
@media (max-width: 767px) { .edio-cat-card { height: 134px; grid-template-columns: 1fr 108px; } }

@media (hover: hover) {
  .edio-cat-card:hover { transform: translateY(-2px); border-color: rgba(9,10,50,0.28); box-shadow: 0 8px 22px -18px rgba(9,10,50,0.30); }
  .edio-cat-card:hover .edio-cat-img { transform: scale(1.02); }
}

.edio-cat-img-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  min-width: 0;
  overflow: hidden;
}
.edio-cat-img {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 108px;
  object-fit: contain;
  object-position: center;
  transition: transform 220ms ease-out;
}
@media (max-width: 767px) {
  .edio-cat-img { max-width: 88px; max-height: 96px; }
  .edio-cat-img-wrap { padding: 10px; }
}

.edio-cat-text {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  min-width: 0;
}
.edio-cat-title {
  margin: 0;
  color: #090A32;
  font-weight: 600;
  line-height: 1.25;
  text-align: start;
  font-size: clamp(14px, 1.05vw, 17px);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
}
@media (max-width: 767px) {
  .edio-cat-text { padding: 14px 16px; }
  .edio-cat-title { font-size: 14px; }
}

@media (prefers-reduced-motion: reduce) {
  .edio-cat-card, .edio-cat-img { transition: none; }
  .edio-cat-card:hover { transform: none; }
  .edio-cat-card:hover .edio-cat-img { transform: none; }
}
`;


function CategoryCard({ card }: { card: Card }) {
  return (
    <a href={card.href} className="edio-cat-card" aria-label={card.title}>
      {/* In RTL, first grid cell renders on the right — text sits on the right, image on the left */}
      <div className="edio-cat-text">
        <h3 className="edio-cat-title">{card.title}</h3>
      </div>
      <div className="edio-cat-img-wrap">
        <img src={card.image} alt={card.alt} loading="lazy" className="edio-cat-img" />
      </div>
    </a>
  );
}

export function CategoryCards() {
  return (
    <section dir="rtl" aria-label="فئات المنتجات" className="edio-cat-section">
      <style>{SCOPED_CSS}</style>

      {/* Desktop / tablet: single horizontal strip */}
      <div className="edio-cat-strip">
        {CARDS.map((card) => (
          <CategoryCard key={card.href} card={card} />
        ))}
      </div>

      {/* Mobile: snap carousel */}
      <div className="edio-cat-carousel-wrap">
        <div className="edio-cat-carousel">
          {CARDS.map((card) => (
            <div key={card.href} className="edio-cat-slide">
              <CategoryCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
