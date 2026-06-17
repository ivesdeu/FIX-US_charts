import Image from "next/image";
import Card from "@/components/Card";
import { BIO, SITE } from "@/lib/content";

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
      <div className="flex items-start justify-between shrink-0">
        <MenuIcon />
        <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0">
          <Image
            src={SITE.headshot}
            alt=""
            width={24}
            height={24}
            className="object-cover size-full"
            aria-hidden
          />
        </div>
      </div>
      <p className="text-[11px] leading-[1.5] text-text mt-2 flex-1 min-h-0 overflow-y-auto">
        {BIO}
      </p>
    </Card>
  );
}
