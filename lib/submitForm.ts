export async function submitToNetlify(form: HTMLFormElement): Promise<void> {
  await fetch("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(
      new FormData(form) as unknown as Record<string, string>
    ).toString(),
  });
}

function fieldsFromForm(form: HTMLFormElement): Record<string, string> {
  const fields: Record<string, string> = {};
  new FormData(form).forEach((value, key) => {
    if (key !== "form-name" && typeof value === "string") {
      fields[key] = value;
    }
  });
  return fields;
}

async function sendFormNotification(
  subject: string,
  fields: Record<string, string>
): Promise<void> {
  await fetch("/api/form-notify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ subject, fields }),
  });
}

export async function submitForm(
  form: HTMLFormElement,
  subject: string
): Promise<void> {
  const fields = fieldsFromForm(form);

  await Promise.all([
    submitToNetlify(form),
    sendFormNotification(subject, fields).catch(() => {}),
  ]);
}
