"use client";

import { useState, type FormEvent } from "react";
import { business } from "@/lib/business";

const serviceOptions = [
  { value: "10-yard", label: "10 Yard Dumpster — heavy debris" },
  { value: "20-yard", label: "20 Yard Dumpster — household trash" },
  { value: "40-yard", label: "40 Yard Dumpster — large trash" },
  { value: "not-sure", label: "Not sure — help me pick" },
];

type Status = "idle" | "loading" | "success" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      service: data.get("service"),
      cityZip: data.get("cityZip"),
      message: data.get("message"),
      company: data.get("company"), // honeypot
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok || !result.ok) {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again or call/text us.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or call/text us.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border-2 border-brand-300 bg-brand-50 p-6 text-center"
      >
        <p className="font-heading text-lg font-bold text-brand-800">Thanks — request received!</p>
        <p className="mt-2 text-sm text-brand-700">
          We&apos;ll call or text you shortly. For the fastest quote, text photos to{" "}
          <a href={business.phoneSms} className="font-semibold underline underline-offset-2">
            {business.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot field — hidden from real users, catches bots that fill every input */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-ink-800">
            Name <span className="text-safety-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-lg border border-ink-200 px-3 py-2.5 text-ink-900 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-ink-800">
            Phone <span className="text-safety-600">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="mt-1.5 w-full rounded-lg border border-ink-200 px-3 py-2.5 text-ink-900 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-ink-800">
            Email <span className="text-ink-400 font-normal">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="mt-1.5 w-full rounded-lg border border-ink-200 px-3 py-2.5 text-ink-900 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-ink-800">
            Service needed
          </label>
          <select
            id="service"
            name="service"
            defaultValue="not-sure"
            className="mt-1.5 w-full rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-ink-900 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-200"
          >
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cityZip" className="block text-sm font-semibold text-ink-800">
          City / ZIP <span className="text-safety-600">*</span>
        </label>
        <input
          id="cityZip"
          name="cityZip"
          type="text"
          required
          placeholder="e.g. Chino Hills, 91709"
          className="mt-1.5 w-full rounded-lg border border-ink-200 px-3 py-2.5 text-ink-900 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-200"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-ink-800">
          Describe the job
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="What do you need hauled away or dropped off?"
          className="mt-1.5 w-full rounded-lg border border-ink-200 px-3 py-2.5 text-ink-900 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-200"
        />
      </div>

      {status === "error" ? (
        <p role="alert" className="rounded-lg bg-safety-50 px-4 py-3 text-sm font-medium text-safety-800">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center rounded-full bg-safety-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-safety-900/20 transition-colors hover:bg-safety-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Get a Free Quote"}
      </button>
    </form>
  );
}
