import headphonesAsset from "@/assets/cat-headphones.png.asset.json";
import microphoneAsset from "@/assets/cat-microphone.png.asset.json";
import iemAsset from "@/assets/cat-iem.png.asset.json";
import micAtAsset from "@/assets/cat-mic-at.png.asset.json";

type Variant = "mic-hanging" | "headphones" | "mic-standing" | "iem";

type Card = {
  title: string;
  href: string;
  image: string;
  variant: Variant;
};

// RTL reading order — first card renders on the right
const CARDS: Card[] = [
  { title: "الميكروفونات", href: "#microphones", image: microphoneAsset.url, variant: "mic-hanging" },
  { title: "سماعات الرأس", href: "#headphones", image: headphonesAsset.url, variant: "headphones" },
  { title: "مايكات", href: "#mics", image: micAtAsset.url, variant: "mic-standing" },
  { title: "سماعات داخل الأذن", href: "#iem", image: iemAsset.url, variant: "iem" },
];

const CSS = `
.edio-catstrip-section {
  width: 100%;
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: 24px;
  padding-block: 36px;
  box-sizing: border-box;
}
@media (min-width: 768px) {
  .edio-catstrip-section { padding-block: 56px; }
}

/* Desktop grid — 4 equal cards */
.edio-catstrip-grid { display: none; }
@media (min-width: 1200px) {
  .edio-catstrip-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
    width: 100%;
  }
}
/* Tablet grid — 2 per row */
@media (min-width: 768px) and (max-width: 1199px) {
  .edio-catstrip-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    width: 100%;
  }
}

/* Card */
.edio-catstrip-card {
  display: grid;
  grid-template-columns: 44% minmax(0, 56%);
  align-items: center;
  gap: 14px;
  height: 144px;
  min-height: 144px;
  max-height: 144px;
  padding-inline: 20px;
  padding-block: 16px;
  background: #ffffff;
  border: 1px solid rgba(135, 203, 246, 0.5);
  border-radius: 22px;
  overflow: hidden;
  text-decoration: none;
  box-sizing: border-box;
  transition: transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
}
@media (min-width: 768px) and (max-width: 1199px) {
  .edio-catstrip-card { height: 140px; min-height: 140px; max-height: 140px; }
}

@media (hover: hover) {
  .edio-catstrip-card:hover {
    transform: translateY(-2px);
    border-color: rgba(135, 203, 246, 0.9);
    box-shadow: 0 8px 22px rgba(10, 35, 70, 0.07);
  }
  .edio-catstrip-card:hover .edio-catstrip-img { transform: scale(1.02); }
}
@media (hover: none) {
  .edio-catstrip-card:hover, .edio-catstrip-card:active { transform: none; }
}

/* Text */
.edio-catstrip-textcell {
  min-width: 0;
  padding-inline: 4px;
  display: flex;
  align-items: center;
}
.edio-catstrip-title {
  margin: 0;
  color: #090A32;
  font-weight: 700;
  line-height: 1.35;
  text-align: start;
  font-size: clamp(18px, 1.25vw, 23px);
  word-break: normal;
  overflow-wrap: normal;
  hyphens: none;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
/* Keep "الميكروفونات" on one line on desktop */
.edio-catstrip-title.is-nowrap {
  white-space: nowrap;
  font-size: clamp(18px, 1.15vw, 20px);
}

/* Image */
.edio-catstrip-imgcell {
  width: 100%;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.edio-catstrip-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  transition: transform 200ms ease;
}
.edio-catstrip-img.is-mic-hanging { max-width: 155px; max-height: 105px; }
.edio-catstrip-img.is-headphones  { max-width: 112px; max-height: 105px; }
.edio-catstrip-img.is-mic-standing{ max-width: 76px;  max-height: 112px; }
.edio-catstrip-img.is-iem         { max-width: 122px; max-height: 102px; }

/* Mobile carousel */
.edio-catstrip-carousel-wrap { display: block; }
@media (min-width: 768px) { .edio-catstrip-carousel-wrap { display: none; } }

.edio-catstrip-carousel {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-inline: 20px;
  scroll-padding-inline: 20px;
  scroll-snap-type: inline mandatory;
  overscroll-behavior-inline: contain;
  scrollbar-width: none;
  /* cancel section padding so carousel spans full viewport */
  margin-inline: -24px;
}
.edio-catstrip-carousel::-webkit-scrollbar { display: none; }

.edio-catstrip-slide {
  flex: 0 0 calc(100vw - 64px);
  width: calc(100vw - 64px);
  max-width: 360px;
  scroll-snap-align: start;
}
.edio-catstrip-slide .edio-catstrip-card {
  height: 156px;
  min-height: 156px;
  max-height: 156px;
  grid-template-columns: 46% minmax(0, 54%);
  gap: 10px;
  padding-inline: 16px;
  padding-block: 14px;
}
.edio-catstrip-slide .edio-catstrip-title { font-size: 19px; white-space: normal; }
.edio-catstrip-slide .edio-catstrip-imgcell { height: 118px; }
.edio-catstrip-slide .edio-catstrip-img.is-mic-hanging { max-width: 140px; max-height: 100px; }

@media (prefers-reduced-motion: reduce) {
  .edio-catstrip-card, .edio-catstrip-img { transition: none; }
}
`;

function Card({ card }: { card: Card }) {
  const isHangingMic = card.variant === "mic-hanging";
  return (
    <a href={card.href} className="edio-catstrip-card" aria-label={card.title}>
      <div className="edio-catstrip-textcell">
        <h3 className={`edio-catstrip-title${isHangingMic ? " is-nowrap" : ""}`}>{card.title}</h3>
      </div>
      <div className="edio-catstrip-imgcell">
        <img
          src={card.image}
          alt=""
          loading="lazy"
          className={`edio-catstrip-img is-${card.variant}`}
        />
      </div>
    </a>
  );
}

export function CategoryStrip() {
  return (
    <section dir="rtl" aria-label="فئات المنتجات" className="edio-catstrip-section">
      <style>{CSS}</style>

      <div className="edio-catstrip-grid">
        {CARDS.map((c) => (
          <Card key={c.href} card={c} />
        ))}
      </div>

      <div className="edio-catstrip-carousel-wrap">
        <div className="edio-catstrip-carousel">
          {CARDS.map((c) => (
            <div key={c.href} className="edio-catstrip-slide">
              <Card card={c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryStrip;
