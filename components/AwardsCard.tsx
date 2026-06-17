import Card from "@/components/Card";
import SectionLabel from "@/components/SectionLabel";
import { AWARDS } from "@/lib/content";

export default function AwardsCard({ className = "" }: { className?: string }) {
  return (
    <Card className={`!p-3 ${className}`}>
      <SectionLabel label="RECOGNITION" />
      <ul className="divide-y divide-border">
        {AWARDS.map((award) => (
          <li
            key={award}
            className="py-2.5 text-[13px] leading-snug text-text first:pt-0 last:pb-0"
          >
            {award}
          </li>
        ))}
      </ul>
    </Card>
  );
}
