"use client";

import { useEffect, useState } from "react";
import Card from "@/components/Card";
import { GlobeCdn } from "@/components/ui/cobe-globe-cdn";
import { fetchWeather } from "@/lib/weather";
import { SITE } from "@/lib/content";

function USFlag() {
  return (
    <svg width="20" height="15" viewBox="0 0 16 12" fill="none" className="shrink-0">
      <rect width="16" height="12" rx="1" fill="#fff" />
      <rect width="16" height="0.923" fill="#B22234" />
      <rect y="1.846" width="16" height="0.923" fill="#B22234" />
      <rect y="3.692" width="16" height="0.923" fill="#B22234" />
      <rect y="5.538" width="16" height="0.923" fill="#B22234" />
      <rect y="7.385" width="16" height="0.923" fill="#B22234" />
      <rect y="9.231" width="16" height="0.923" fill="#B22234" />
      <rect y="11.077" width="16" height="0.923" fill="#B22234" />
      <rect width="7" height="6.462" fill="#3C3B6E" />
    </svg>
  );
}

const MILWAUKEE_MARKERS = [
  {
    id: "mke",
    location: [SITE.lat, SITE.lng] as [number, number],
    region: "MKE",
  },
];

export default function LocationCard({ className = "" }: { className?: string }) {
  const [weather, setWeather] = useState<{ temperature: number; condition: string } | null>(null);

  useEffect(() => {
    fetchWeather().then(setWeather);
  }, []);

  return (
    <Card className={`flex flex-col justify-between !p-3 overflow-hidden ${className}`}>
      <div className="flex items-start justify-end shrink-0">
        <USFlag />
      </div>

      <div className="flex-1 flex items-center justify-center min-h-0 w-full">
        <div className="aspect-square h-full max-w-full">
          <GlobeCdn
            markers={MILWAUKEE_MARKERS}
            arcs={[]}
            speed={0.002}
            hideOverlays
            className="size-full"
          />
        </div>
      </div>

      <div className="shrink-0">
        <p className="text-[13px] font-semibold text-text leading-tight">
          Milwaukee, Wisconsin
        </p>
        <p className="text-[12px] text-muted mt-0.5">
          {weather !== null
            ? `${weather.temperature}° ${weather.condition}`
            : "—"}
        </p>
      </div>
    </Card>
  );
}
