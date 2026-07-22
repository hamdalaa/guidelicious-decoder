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
  grid-template-columns: 44% minmax(0, 56%);
  align-items: center;
  gap: 14px;
  height: 144px;
  min-height: 144px;
  max-height: 144px;
  padding-inline: 20px;
  padding-block: 16px;
  background: #ffffff;
  border: 1px solid rgba(15, 35, 65, 0.14);
  border-radius: 22px;
  overflow: hidden;
  text-decoration: none;
  box-sizing: border-box;
  transform: translateY(0) scale(1);
  transform-origin: center;
  box-shadow: none;
  outline: none;
  transition:
    transform 200ms cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 200ms cubic-bezier(0.2, 0.8, 0.2, 1),
    border-color 200ms cubic-bezier(0.2, 0.8, 0.2, 1),
    background-color 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
}
@media (min-width: 768px) and (max-width: 1199px) {
  .edio-catstrip-card { height: 140px; min-height: 140px; max-height: 140px; }
}

.edio-catstrip-img {
  transition: transform 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

@media (hover: hover) and (pointer: fine) {
  .edio-catstrip-card:hover {
    transform: translateY(-2px);
    border-color: rgba(15, 35, 65, 0.24);
    background-color: #ffffff;
    box-shadow: 0 8px 24px rgba(15, 35, 65, 0.06);
  }
  .edio-catstrip-card:hover .edio-catstrip-img { transform: none; }
  .edio-catstrip-card:active {
    transform: translateY(0) scale(0.99);
    box-shadow: 0 4px 14px rgba(15, 35, 65, 0.05);
    transition-duration: 120ms;
  }
}
@media (hover: none), (pointer: coarse) {
  .edio-catstrip-card:hover,
  .edio-catstrip-card:active {
    transform: translateY(0) scale(1);
    border-color: rgba(15, 35, 65, 0.14);
    box-shadow: none;
  }
  .edio-catstrip-card:hover .edio-catstrip-img,
  .edio-catstrip-card:active .edio-catstrip-img { transform: none; }
}
.edio-catstrip-card:focus { outline: none; }
.edio-catstrip-card:focus-visible {
  outline: 2px solid rgba(80, 160, 220, 0.55);
  outline-offset: 3px;
  box-shadow: none;
}
.edio-catstrip-card:focus:not(:focus-visible) { outline: none; }


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
  font-weight: 600;
  line-height: 1.35;
  text-align: start;
  font-size: clamp(16px, 1.05vw, 19px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: normal;
  overflow-wrap: normal;
  hyphens: none;
}
/* mobile carousel allows wrap */
.edio-catstrip-title.is-nowrap { white-space: nowrap; }

/* Image cell — fills full card height so anchoring hits the outer border */
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
  transform-origin: center;
  will-change: transform;
}

/* Per-variant sizes + edge-connect offsets (card padding-block is 16px, so -16px reaches border) */
.edio-catstrip-img.is-mic-hanging {
  max-width: 155px; max-height: 130px;
  object-position: center top;
  margin-block-start: -16px;
}
.edio-catstrip-img.is-headphones {
  max-width: 122px; max-height: 122px;
  object-position: center top;
  margin-block-start: -14px;
}
.edio-catstrip-img.is-mic-standing {
  max-width: 82px; max-height: 132px;
  object-position: center bottom;
  margin-block-end: -16px;
}
.edio-catstrip-img.is-iem {
  max-width: 130px; max-height: 122px;
  object-position: center bottom;
  margin-block-end: -14px;
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
.edio-catstrip-slide .edio-catstrip-imgcell { height: 124px; }
.edio-catstrip-slide .edio-catstrip-img.is-mic-hanging  { max-width: 148px; max-height: 128px; margin-block-start: -12px; }
.edio-catstrip-slide .edio-catstrip-img.is-headphones   { max-width: 124px; max-height: 118px; margin-block-start: -4px; }
.edio-catstrip-slide .edio-catstrip-img.is-mic-standing { max-width: 82px;  max-height: 128px; margin-block-end: -8px; }
.edio-catstrip-slide .edio-catstrip-img.is-iem          { max-width: 132px; max-height: 118px; margin-block-end: -8px; }

@media (prefers-reduced-motion: reduce) {
  .edio-catstrip-card,
  .edio-catstrip-card:hover,
  .edio-catstrip-card:active,
  .edio-catstrip-img,
  .edio-catstrip-card:hover .edio-catstrip-img {
    transition: background-color 200ms ease, border-color 200ms ease;
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
  const isHangingMic = card.variant === "mic-hanging";
  const anchor = ANCHOR[card.variant];
  return (
    <a href={card.href} className="edio-catstrip-card" aria-label={card.title}>
      <div className="edio-catstrip-textcell">
        <h3 className={`edio-catstrip-title${isHangingMic ? " is-nowrap" : ""}`}>{card.title}</h3>
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
