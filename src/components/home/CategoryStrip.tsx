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
  padding-inline: 20px;
  padding-block: 36px;
  box-sizing: border-box;
  overflow: visible;
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
  grid-template-columns: minmax(0, 40%) minmax(0, 60%);
  align-items: center;
  gap: 14px;
  min-height: 148px;
  padding-inline: 18px;
  padding-block: 14px;
  background: #ffffff;
  border: 1px solid rgba(15, 35, 65, 0.14);
  border-radius: 18px;
  overflow: hidden;
  text-decoration: none;
  box-sizing: border-box;
  transform: translateY(0);
  outline: none;
  transition:
    transform 200ms cubic-bezier(0.2, 0.8, 0.2, 1),
    border-color 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

@media (hover: hover) and (pointer: fine) {
  .edio-catstrip-card:hover {
    transform: translateY(-2px);
    border-color: rgba(15, 35, 65, 0.22);
  }
  .edio-catstrip-card:active {
    transform: translateY(0);
    transition-duration: 120ms;
  }
}
@media (hover: none), (pointer: coarse) {
  .edio-catstrip-card:hover,
  .edio-catstrip-card:active {
    transform: none;
    border-color: rgba(15, 35, 65, 0.14);
  }
}
.edio-catstrip-card:focus { outline: none; }
.edio-catstrip-card:focus-visible {
  outline: 2px solid rgba(80, 160, 220, 0.55);
  outline-offset: 3px;
}
.edio-catstrip-card:focus:not(:focus-visible) { outline: none; }

/* Text */
.edio-catstrip-textcell {
  min-width: 0;
  width: 100%;
  padding-inline: 2px;
  display: flex;
  align-items: center;
}
.edio-catstrip-title {
  margin: 0;
  color: #090A32;
  font-family: var(--font-ar-main);
  font-weight: 600;
  font-synthesis-weight: none;
  line-height: 1.35;
  text-align: start;
  font-size: clamp(0.95rem, 1.15vw, 1.2rem);
  white-space: normal;
  overflow: visible;
  text-overflow: clip;
  word-break: normal;
  overflow-wrap: normal;
  hyphens: none;
}

/* Image cell */
.edio-catstrip-imgcell {
  width: 100%;
  align-self: stretch;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: visible;
  position: relative;
}
.edio-catstrip-imgcell.is-anchor-top    { align-items: flex-start; }
.edio-catstrip-imgcell.is-anchor-bottom { align-items: flex-end; }
.edio-catstrip-imgcell.is-anchor-center { align-items: center; }

.edio-catstrip-img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: contain;
}

.edio-catstrip-img.is-mic-hanging {
  max-width: 130px; max-height: 118px;
  object-position: center top;
  margin-block-start: -14px;
}
.edio-catstrip-img.is-headphones {
  max-width: 112px; max-height: 112px;
  object-position: center top;
  margin-block-start: -12px;
}
.edio-catstrip-img.is-mic-standing {
  max-width: 74px; max-height: 122px;
  object-position: center bottom;
  margin-block-end: -14px;
}
.edio-catstrip-img.is-iem {
  max-width: 118px; max-height: 112px;
  object-position: center bottom;
  margin-block-end: -12px;
}

/* Mobile carousel */
.edio-catstrip-carousel-wrap {
  display: block;
  overflow: visible;
}
@media (min-width: 768px) { .edio-catstrip-carousel-wrap { display: none; } }

.edio-catstrip-carousel {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  overflow-y: visible;
  padding-inline: 20px;
  padding-block: 12px 18px;
  scroll-padding-inline: 20px;
  scroll-snap-type: inline mandatory;
  overscroll-behavior-inline: contain;
  scrollbar-width: none;
  margin-inline: -20px;
}
.edio-catstrip-carousel::-webkit-scrollbar { display: none; }

.edio-catstrip-slide {
  flex: 0 0 84%;
  max-width: 360px;
  scroll-snap-align: start;
}
.edio-catstrip-slide .edio-catstrip-card {
  min-height: 160px;
  grid-template-columns: minmax(0, 42%) minmax(0, 58%);
  gap: 10px;
  padding-inline: 16px;
  padding-block: 14px;
}
.edio-catstrip-slide .edio-catstrip-title { font-size: 1.05rem; }
.edio-catstrip-slide .edio-catstrip-img.is-mic-hanging  { max-width: 132px; max-height: 122px; margin-block-start: -12px; }
.edio-catstrip-slide .edio-catstrip-img.is-headphones   { max-width: 118px; max-height: 116px; margin-block-start: -8px; }
.edio-catstrip-slide .edio-catstrip-img.is-mic-standing { max-width: 78px;  max-height: 126px; margin-block-end: -10px; }
.edio-catstrip-slide .edio-catstrip-img.is-iem          { max-width: 124px; max-height: 116px; margin-block-end: -8px; }

@media (prefers-reduced-motion: reduce) {
  .edio-catstrip-card,
  .edio-catstrip-card:hover,
  .edio-catstrip-card:active {
    transition: border-color 200ms ease;
    transform: none;
  }
}

`;

const ANCHOR: Record<Variant, "top" | "bottom" | "center"> = {
  "mic-hanging": "top",
  "headphones": "top",
  "mic-standing": "bottom",
  "iem": "bottom",
};

function Card({ card }: { card: Card }) {
  const anchor = ANCHOR[card.variant];
  return (
    <a href={card.href} className="edio-catstrip-card" aria-label={card.title}>
      <div className="edio-catstrip-textcell">
        <h3 className="edio-catstrip-title">{card.title}</h3>
      </div>
      <div className={`edio-catstrip-imgcell is-anchor-${anchor}`}>
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
