import Card from "@/components/Card";
import { SITE } from "@/lib/content";

function DocumentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

export default function ResumeCard({ className = "" }: { className?: string }) {
  return (
    <Card className={`flex flex-col justify-between !p-3 ${className}`}>
      <DocumentIcon />
      <a
        href={SITE.resumeHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto"
      >
        <p className="text-[20px] font-medium text-text leading-tight">Resume</p>
        <p className="text-[17px] text-muted mt-1">PDF · 2026</p>
      </a>
    </Card>
  );
}
