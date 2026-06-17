import Image from "next/image";
import Card from "@/components/Card";
import { type Venture } from "@/lib/content";

function ExternalLinkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function VentureCard({
  venture,
  className = "",
}: {
  venture: Venture;
  className?: string;
}) {
  const inner = (
    <div className="relative flex flex-col h-full">
      <div className="relative flex-1 bg-[#F2F2F2] min-h-0">
        {venture.image ? (
          <Image
            src={venture.image}
            alt={`${venture.name} logo`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 720px) 33vw, 220px"
          />
        ) : null}
      </div>
      {venture.href && (
        <span className="absolute top-2.5 right-2.5 text-muted">
          <ExternalLinkIcon />
        </span>
      )}
      <div className="p-3 bg-white">
        <p className="text-[18px] font-medium text-text leading-tight">{venture.name}</p>
        <p className="text-[14px] text-muted mt-1 leading-snug line-clamp-2">
          {venture.description}
        </p>
      </div>
    </div>
  );

  if (venture.href) {
    return (
      <Card noPadding className={className}>
        <a
          href={venture.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {inner}
        </a>
      </Card>
    );
  }

  return <Card noPadding className={className}>{inner}</Card>;
}
