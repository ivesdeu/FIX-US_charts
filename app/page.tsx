import HeroCard from "@/components/HeroCard";
import BioCard from "@/components/BioCard";
import LocationCard from "@/components/LocationCard";
import ContactCard from "@/components/ContactCard";
import ScheduleCard from "@/components/ScheduleCard";
import NewsletterCard from "@/components/NewsletterCard";
import ResearchCard from "@/components/ResearchCard";
import ResumeCard from "@/components/ResumeCard";
import { ActiveModelCard } from "@/components/ModelCard";
import VentureCard from "@/components/VentureCard";
import AwardsCard from "@/components/AwardsCard";
import { VENTURES } from "@/lib/content";

export default function Home() {
  return (
    <main className="max-w-[720px] mx-auto px-5 pb-6">
      {/* Netlify form detection */}
      <form name="contact" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
      </form>
      <form name="newsletter" data-netlify="true" hidden>
        <input type="email" name="email" />
      </form>

      <HeroCard />

      <div className="bento-grid">
        {/* Rows 1–3: 1×1 squares (3 wide) */}
        <BioCard className="bento-1x1" />
        <LocationCard className="bento-1x1" />
        <ResumeCard className="bento-1x1" />
        <ContactCard className="bento-1x1" />
        <ScheduleCard className="bento-1x1" />
        <NewsletterCard className="bento-1x1" />

        {/* Active model + ventures */}
        <ActiveModelCard className="bento-2x1" />
        <VentureCard venture={VENTURES[0]} className="bento-1x1" />
        <VentureCard venture={VENTURES[1]} className="bento-1x1" />
        <ResearchCard className="bento-2x1" />
        <AwardsCard className="bento-full-width" />
      </div>
    </main>
  );
}
