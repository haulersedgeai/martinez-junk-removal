import { NextResponse } from "next/server";
import { Resend } from "resend";
import { business } from "@/lib/business";

export const runtime = "nodejs";

const SERVICE_LABELS: Record<string, string> = {
  "junk-removal": "Junk Removal",
  "dumpster-rental": "Dumpster Rental",
  "appliance-removal": "Appliance Removal",
  "construction-debris": "Construction Debris",
  cleanout: "Cleanout",
  other: "Other",
};

type QuotePayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  service?: unknown;
  cityZip?: unknown;
  message?: unknown;
  company?: unknown; // honeypot
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: QuotePayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: bots fill every field, including hidden ones. Real users never see this field.
  if (isNonEmptyString(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const name = isNonEmptyString(body.name) ? body.name.trim() : "";
  const phone = isNonEmptyString(body.phone) ? body.phone.trim() : "";
  const email = isNonEmptyString(body.email) ? body.email.trim() : "";
  const service = isNonEmptyString(body.service) ? body.service.trim() : "";
  const cityZip = isNonEmptyString(body.cityZip) ? body.cityZip.trim() : "";
  const message = isNonEmptyString(body.message) ? body.message.trim() : "";

  const errors: string[] = [];
  if (!name) errors.push("Name is required.");
  if (!phone) errors.push("Phone is required.");
  if (!cityZip) errors.push("City/ZIP is required.");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Email address looks invalid.");

  if (errors.length > 0) {
    return NextResponse.json({ ok: false, error: errors.join(" ") }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { ok: false, error: "Email is not configured yet. Please call or text us instead." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const serviceLabel = SERVICE_LABELS[service] ?? service ?? "Not specified";

  const html = `
    <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto;">
      <h2 style="color:#145733;">New quote request</h2>
      <table cellpadding="6" style="border-collapse: collapse; width: 100%;">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${email ? escapeHtml(email) : "—"}</td></tr>
        <tr><td><strong>Service</strong></td><td>${escapeHtml(serviceLabel)}</td></tr>
        <tr><td><strong>City / ZIP</strong></td><td>${escapeHtml(cityZip)}</td></tr>
        <tr><td valign="top"><strong>Message</strong></td><td>${message ? escapeHtml(message).replace(/\n/g, "<br/>") : "—"}</td></tr>
      </table>
      <p style="color:#545c55; font-size: 12px; margin-top: 24px;">
        Sent from the quote form at martinezjunkremoval.net
      </p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      // TODO: switch to a verified domain sender (e.g. quotes@martinezjunkremoval.net) once the sending domain is verified in Resend.
      from: `${business.name} Website <onboarding@resend.dev>`,
      to: business.email,
      replyTo: email || undefined,
      subject: `New quote request — ${name} (${cityZip})`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "We couldn't send your request. Please call or text us instead." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("Failed to send quote email:", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your request. Please call or text us instead." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
