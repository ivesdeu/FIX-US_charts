"use client";

import { useEffect, useState } from "react";

type ContactFormModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ContactFormModal({ open, onClose }: ContactFormModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [open]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(
        new FormData(form) as unknown as Record<string, string>
      ).toString(),
    });

    setSubmitted(true);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/40"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white border border-border rounded-2xl p-5 shadow-lg"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-form-title"
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h2 id="contact-form-title" className="text-[18px] font-semibold text-text">
              Get in touch
            </h2>
            <p className="text-[13px] text-muted mt-1">
              Send a message and I&apos;ll get back to you.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-muted hover:text-text transition-colors text-[20px] leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {submitted ? (
          <p className="text-[14px] text-text py-4">Thanks — your message was sent.</p>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-3"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="contact-name" className="sr-only">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
                className="w-full px-3 py-2.5 border border-border rounded-lg text-[14px] text-text placeholder:text-muted outline-none focus:border-muted"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="sr-only">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full px-3 py-2.5 border border-border rounded-lg text-[14px] text-text placeholder:text-muted outline-none focus:border-muted"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="sr-only">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                required
                rows={4}
                className="w-full px-3 py-2.5 border border-border rounded-lg text-[14px] text-text placeholder:text-muted outline-none focus:border-muted resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full h-10 bg-text text-white rounded-lg text-[14px] font-medium hover:opacity-90 transition-opacity"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
