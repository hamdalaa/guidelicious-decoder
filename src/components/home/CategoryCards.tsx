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
.edio-cat-section { margin-inline: auto; max-width: 80rem; padding: 3rem 1.5rem; }
@media (min-width: 1024px) { .edio-cat-section { padding: 4rem 2.5rem; } }

.edio-cat-strip { display: none; }
@media (min-width: 768px) {
  .edio-cat-strip {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
    align-items: stretch;
  }
}

.edio-cat-carousel { display: flex; gap: 12px; overflow-x: auto; scroll-snap-type: x mandatory; padding: 0 24px 8px; margin: 0 -24px; scrollbar-width: none; }
.edio-cat-carousel::-webkit-scrollbar { display: none; }
@media (min-width: 768px) { .edio-cat-carousel-wrap { display: none; } }

.edio-cat-slide { flex: 0 0 84vw; scroll-snap-align: start; }

.edio-cat-card {
  display: grid;
  grid-template-columns: 42% 58%;
  align-items: stretch;
  height: 170px;
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(135, 203, 246, 0.4);
  border-radius: 22px;
  overflow: hidden;
  text-decoration: none;
  transition: transform 200ms ease-out, border-color 200ms ease-out, box-shadow 200ms ease-out;
}
@media (min-width: 1024px) { .edio-cat-card { height: 180px; } }
@media (max-width: 767px) { .edio-cat-card { height: 155px; } }

@media (hover: hover) {
  .edio-cat-card:hover { transform: translateY(-2px); border-color: rgba(9,10,50,0.25); box-shadow: 0 10px 24px -20px rgba(9,10,50,0.28); }
  .edio-cat-card:hover .edio-cat-img { transform: scale(1.03); }
}

/* Image area (visually first in RTL reading) */
.edio-cat-img-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  min-width: 0;
  overflow: hidden;
}
.edio-cat-img {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 170px;
  max-height: 125px;
  object-fit: contain;
  object-position: center;
  transition: transform 200ms ease-out;
}
@media (max-width: 767px) {
  .edio-cat-img { max-width: 118px; max-height: 105px; }
  .edio-cat-img-wrap { padding: 12px; }
}

/* Text area */
.edio-cat-text {
  display: flex;
  align-items: center;
  padding: 20px 22px;
  min-width: 0;
}
.edio-cat-title {
  margin: 0;
  color: #090A32;
  font-weight: 600;
  line-height: 1.2;
  font-size: clamp(15px, 1.25vw, 20px);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
@media (max-width: 767px) {
  .edio-cat-text { padding: 16px 18px; }
  .edio-cat-title { font-size: 15px; }
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
