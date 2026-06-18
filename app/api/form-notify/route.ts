import { FORM_NOTIFICATION_EMAIL } from "@/lib/content";
import { NextResponse } from "next/server";

type NotifyBody = {
  subject?: string;
  fields?: Record<string, string>;
};

export async function POST(request: Request) {
  let body: NotifyBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { subject = "Form submission", fields = {} } = body;

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(FORM_NOTIFICATION_EMAIL)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...fields,
        _subject: subject,
        _captcha: "false",
        _template: "table",
      }),
    }
  );

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to send notification" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
