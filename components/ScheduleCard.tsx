import Card from "@/components/Card";
import { SITE } from "@/lib/content";

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export default function ScheduleCard({ className = "" }: { className?: string }) {
  const slug = SITE.calUrl.replace("https://cal.com/", "");

  return (
    <Card className={`flex flex-col justify-between !p-3 ${className}`}>
      <CalendarIcon />
      <a
        href={SITE.calUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[18px] font-medium text-text hover:text-muted transition-colors mt-auto leading-tight"
      >
        cal.com / {slug}
      </a>
    </Card>
  );
}
