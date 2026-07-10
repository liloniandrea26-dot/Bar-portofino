import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SpiaggiaContent from "@/sections/spiaggia/SpiaggiaContent";
import FinalCTA from "@/sections/home/FinalCTA";
import { siteImages } from "@/data/content";

export const metadata: Metadata = {
  title: "La Spiaggia",
  description:
    "La zona attrezzata e tranquilla del Portofino Beach Bar: lettini, ombrelloni e relax sulla spiaggia di Lignano Sabbiadoro, con il bar sempre a due passi.",
};

export default function SpiaggiaPage() {
  return (
    <>
      <PageHero
        title="La Spiaggia"
        breadcrumb="Spiaggia"
        subtitle="Zona attrezzata e tranquilla: il tuo angolo di relax sulla sabbia di Lignano."
        image={siteImages.spiaggia}
        imageAlt="Ombrelloni e lettini della spiaggia del Portofino"
      />
      <SpiaggiaContent />
      <FinalCTA />
    </>
  );
}
