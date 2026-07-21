import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero/edio-hero.png.asset.json";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroCard } from "@/components/hero/HeroCard";

const HERO_IMG_URL = `https://cdn.gpteng.co${heroImg.url}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Edio — Sound, guided." },
      {
        name: "description",
        content:
          "Edio helps you choose the right audio gear — headphones, IEMs, DACs and amps — with calm, expert guidance.",
      },
      { property: "og:title", content: "Edio — Sound, guided." },
      {
        property: "og:description",
        content:
          "Find the sound that fits you. Curated headphones, IEMs, DACs and amps, guided by Edio.",
      },
      { property: "og:image", content: HERO_IMG_URL },
      { name: "twitter:image", content: HERO_IMG_URL },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-edio-cream">
      <Header />
      <main>
        <HeroCard />
      </main>
      <Footer />
    </div>
  );
}
