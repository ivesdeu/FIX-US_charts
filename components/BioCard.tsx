import Card from "@/components/Card";
import { BIO } from "@/lib/content";

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-muted">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="14" y2="17" />
    </svg>
  );
}

export default function BioCard({ className = "" }: { className?: string }) {
  return (
    <Card className={`flex flex-col !p-3 ${className}`}>
      <MenuIcon />
      <p className="text-[12px] leading-[1.38] text-text mt-2">
        {BIO}
      </p>
    </Card>
  );
}
