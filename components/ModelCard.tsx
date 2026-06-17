import Card from "@/components/Card";
import SectionLabel from "@/components/SectionLabel";
import { ACTIVE_MODEL, METHODOLOGY } from "@/lib/content";

function ArrowRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function ActiveModelCard({ className = "" }: { className?: string }) {
  return (
    <Card className={`flex flex-col justify-between !p-3 ${className}`}>
      <SectionLabel label="ACTIVE MODEL" />
      <div>
        <p className="text-[18px] font-medium text-text leading-tight">
          {ACTIVE_MODEL.company}
        </p>
        <p className="text-[14px] text-muted mt-1.5 line-clamp-2">
          {ACTIVE_MODEL.description}
        </p>
        <div className="flex flex-wrap gap-1 mt-2">
          {ACTIVE_MODEL.methods.slice(0, 3).map((m) => (
            <span
              key={m}
              className="text-[12px] font-medium bg-tag-bg text-tag-text px-2 py-0.5 rounded"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
      <a
        href={ACTIVE_MODEL.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-[14px] text-muted hover:text-text transition-colors mt-2"
      >
        View model <ArrowRight />
      </a>
    </Card>
  );
}

export function MethodologyCard({ className = "" }: { className?: string }) {
  return (
    <Card className={`!p-3 ${className}`}>
      <SectionLabel label="APPROACH" />
      <ul className="space-y-1">
        {METHODOLOGY.map((item) => (
          <li key={item} className="text-[11px] text-text flex items-start gap-1.5 leading-snug">
            <span className="text-muted">·</span>
            <span className="line-clamp-2">{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
