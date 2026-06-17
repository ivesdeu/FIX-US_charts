"use client";

import { useState } from "react";
import Card from "@/components/Card";

function BookmarkIcon() {
  return (
    <svg width="20" height="22" viewBox="0 0 20 24" fill="none">
      <path
        d="M2 2h16v20l-8-5-8 5V2z"
        fill="#E85D2C"
        stroke="#E85D2C"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <line x1="6" y1="7" x2="14" y2="7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="10.5" x2="14" y2="10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted shrink-0">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

export default function NewsletterCard({ className = "" }: { className?: string }) {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <Card className={`flex flex-col justify-between !p-3 ${className}`}>
      <BookmarkIcon />

      <div className="min-h-0">
        <h2 className="text-[12px] font-semibold text-text leading-snug">
          Subscribe to my newsletter
        </h2>
        <p className="text-[10px] text-muted mt-0.5 leading-snug line-clamp-2">
          Analytics reports and product updates infrequently.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-1.5 shrink-0">
        <div className="flex items-center gap-1.5 bg-tag-bg rounded-full pl-2.5 pr-0.5 py-0.5">
          <MailIcon />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@email.com"
            className="flex-1 min-w-0 bg-transparent text-[10px] text-text placeholder:text-muted outline-none"
          />
          <button
            type="submit"
            className="flex items-center justify-center w-6 h-6 rounded-full bg-white border border-border text-text hover:bg-tag-bg transition-colors shrink-0"
            aria-label="Subscribe"
          >
            <ArrowUpIcon />
          </button>
        </div>
      </form>
    </Card>
  );
}
