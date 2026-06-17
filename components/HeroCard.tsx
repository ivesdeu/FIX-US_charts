"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/content";

function formatDate(d: Date) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
  ];
  const day = days[d.getDay()];
  const month = months[d.getMonth()];
  const date = d.getDate();
  let hours = d.getHours();
  const minutes = d.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const hh = hours.toString().padStart(2, "0");
  return `${day}, ${month} ${date}, ${hh}:${minutes} ${ampm}`;
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function HeroCard() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(formatDate(new Date()));
    const id = setInterval(() => setTime(formatDate(new Date())), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="text-center pt-6 pb-8">
      <p className="label-meta mb-8">{time}</p>

      <div className="relative flex flex-col items-center">
        <h1 className="sr-only">{SITE.name}</h1>
        <p
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-[clamp(2.5rem,8vw,4.5rem)] font-semibold text-[#E8E8E8] select-none pointer-events-none whitespace-nowrap"
        >
          {SITE.name}
        </p>
        <div className="relative z-10 w-[100px] h-[100px] rounded-full border-4 border-white shadow-sm overflow-hidden">
          <Image
            src={SITE.headshot}
            alt={SITE.name}
            width={100}
            height={100}
            className="object-cover size-full"
            priority
          />
        </div>
      </div>

      <p className="text-[13px] text-muted mt-5">{SITE.descriptor}</p>

      <div className="flex items-center justify-center gap-2 mt-4">
        <a
          href={SITE.resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 h-9 border border-border rounded-lg text-[13px] font-medium text-text hover:bg-[#FAFAFA] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          Resume
        </a>
        <a
          href={SITE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-9 h-9 border border-border rounded-lg text-muted hover:text-text transition-colors"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
      </div>
    </section>
  );
}
