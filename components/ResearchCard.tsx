import Card from "@/components/Card";
import SectionLabel from "@/components/SectionLabel";
import { RESEARCH, type ResearchRow } from "@/lib/content";

function ArrowRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function RatingBadge({ rating }: { rating: ResearchRow["rating"] }) {
  if (!rating) return <span className="text-[10px] text-muted">—</span>;

  const styles: Record<string, string> = {
    SELL: "bg-text text-white",
    BUY: "bg-white text-text border border-text",
    HOLD: "bg-tag-bg text-tag-text",
  };

  return (
    <span className={`text-[10px] font-medium px-1.5 py-px rounded ${styles[rating]}`}>
      {rating}
    </span>
  );
}

function ResearchRowItem({ row }: { row: ResearchRow }) {
  return (
    <a
      href={row.pdfHref}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 py-1.5 group"
    >
      <span className="shrink-0 font-mono text-[10px] bg-text text-white px-1 py-px rounded">
        {row.ticker}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-[12px] font-medium text-text truncate">{row.company}</p>
        <p className="text-[11px] text-muted italic truncate">{row.thesis}</p>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <RatingBadge rating={row.rating} />
        <span className="text-muted group-hover:text-text transition-colors">
          <ArrowRight />
        </span>
      </div>
    </a>
  );
}

export default function ResearchCard({ className = "" }: { className?: string }) {
  return (
    <Card className={`flex flex-col !p-3 ${className}`}>
      <SectionLabel label="EQUITY RESEARCH" />
      <div className="divide-y divide-border flex-1 min-h-0 overflow-hidden">
        {RESEARCH.map((row) => (
          <ResearchRowItem key={row.ticker} row={row} />
        ))}
      </div>
    </Card>
  );
}
