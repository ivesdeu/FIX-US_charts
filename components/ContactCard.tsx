"use client";

import { useState } from "react";
import Card from "@/components/Card";
import { SITE } from "@/lib/content";

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function ContactCard({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);
  const [user, domain] = SITE.email.split("@");

  async function handleCopy() {
    await navigator.clipboard.writeText(SITE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Card className={`flex flex-col justify-between !p-3 ${className}`}>
      <MailIcon />
      <button onClick={handleCopy} className="text-left w-full mt-auto">
        <p className="text-[20px] font-medium text-text leading-tight">
          {user}
          <br />
          @{domain}
        </p>
        <p className="text-[17px] text-muted mt-2 h-6">
          {copied ? "Copied to clipboard" : "Click to copy"}
        </p>
      </button>
    </Card>
  );
}
