import Card from "@/components/Card";
import SectionLabel from "@/components/SectionLabel";
import { NOW } from "@/lib/content";

function ExternalLinkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function ReadingCard({ className = "" }: { className?: string }) {
  return (
    <Card className={`flex flex-col justify-between !p-3 ${className}`}>
      <SectionLabel label="READING" />
      <div className="mt-auto">
        <p className="text-[13px] font-medium text-text">{NOW.reading.title}</p>
        <p className="text-[11px] text-muted">{NOW.reading.author}</p>
      </div>
    </Card>
  );
}

export function ListeningCard({ className = "" }: { className?: string }) {
  return (
    <Card className={`flex flex-col justify-between !p-3 ${className}`}>
      <SectionLabel label="LISTENING" />
      <a
        href={NOW.listening.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-[13px] font-medium text-text hover:text-muted transition-colors mt-auto"
      >
        {NOW.listening.title}
        <ExternalLinkIcon />
      </a>
    </Card>
  );
}
