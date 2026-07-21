import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroCard } from "@/components/hero/HeroCard";
import { CategoryStrip } from "@/components/home/CategoryStrip";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Edio — Sound, guided." },
      {
        name: "description",
        content:
          "Edio helps you choose the right audio gear — headphones, speakers, microphones, and audio equipment — with calm, expert guidance.",
      },
      { property: "og:title", content: "Edio — Sound, guided." },
      {
        property: "og:description",
        content:
          "Find the sound that fits you. Curated headphones, speakers, microphones and audio equipment.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { dir } = useI18n();
  return (
    <div className="min-h-screen bg-edio-cream">
      <Header />
      <main dir={dir}>
        <HeroCard />
        <CategoryStrip />
      </main>
      <Footer />
    </div>
  );
}
