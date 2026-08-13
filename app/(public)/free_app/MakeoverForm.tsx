"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { site } from "@/data/site";

const fieldClass =
  "w-full border border-[var(--card-border)] bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-dim)] focus:border-[var(--accent)] focus:outline-none";

export function MakeoverForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const needs = data.getAll("needs").join(", ") || "Not specified";
    const message = [
      data.get("why") || "",
      "",
      `Phone: ${data.get("phone") || ""}`,
      `Business type: ${data.get("type") || ""}`,
      `Social: ${data.get("social") || "—"}`,
      `Needs: ${needs}`,
    ].join("\n");

    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          subject: "Business makeover application",
          message,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.errors ? body.errors.join(" ") : "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="border border-[var(--card-border)] bg-[var(--card-bg)] p-8 text-center">
        <CheckCircle2 className="mx-auto h-8 w-8 text-[var(--green)]" />
        <h2 className="mt-4 text-2xl font-semibold">Application received.</h2>
        <p className="mt-2 text-sm text-[var(--text-muted)]">We will contact selected businesses directly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 border border-[var(--card-border)] bg-[var(--card-bg)] p-6 lg:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-[var(--text)]">Apply</h2>
        <p className="mt-1 text-sm text-[var(--text-muted)]">We review every form. Selected businesses hear from us directly.</p>
      </div>
      <Field label="Business name" htmlFor="company">
        <input id="company" name="company" required className={fieldClass} />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name">
          <input id="name" name="name" required className={fieldClass} autoComplete="name" />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input id="phone" name="phone" type="tel" required className={fieldClass} placeholder="+254 7XX XXX XXX" autoComplete="tel" />
        </Field>
      </div>
      <Field label="Email" htmlFor="email">
        <input id="email" name="email" type="email" required className={fieldClass} autoComplete="email" />
      </Field>
      <Field label="What do you run?" htmlFor="type">
        <select id="type" name="type" className={fieldClass} defaultValue="Food / restaurant">
          <option>Fashion / boutique</option>
          <option>Food / restaurant</option>
          <option>Barber / beauty</option>
          <option>Tech / gadgets</option>
          <option>Freelance services</option>
          <option>Other</option>
        </select>
      </Field>
      <Field label="Instagram or other handle" htmlFor="social">
        <input id="social" name="social" className={fieldClass} placeholder="@yourbusiness" />
      </Field>
      <Field label="Why should we pick you?" htmlFor="why">
        <textarea id="why" name="why" rows={5} required className={`${fieldClass} resize-y`} />
      </Field>
      <fieldset>
        <legend className="mb-2 text-sm font-medium text-[var(--text)]">What do you need most?</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {["Website", "Branding", "Promo designs", "More customers"].map((item) => (
            <label key={item} className="flex items-center gap-2 border border-[var(--border)] px-3 py-3 text-sm">
              <input type="checkbox" name="needs" value={item} className="accent-[var(--accent)]" />
              {item}
            </label>
          ))}
        </div>
      </fieldset>
      {error ? (
        <p className="flex items-start gap-2 text-sm text-[var(--red)]" role="alert">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {error}
        </p>
      ) : null}
      <button type="submit" disabled={submitting} className="site-btn site-btn-primary w-full disabled:opacity-60">
        {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {submitting ? "Sending…" : "Submit application"}
      </button>
      <p className="text-xs text-[var(--text-muted)]">
        Questions in the meantime: {site.email} or {site.phoneDisplay}.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-[var(--text)]">
        {label}
      </label>
      {children}
    </div>
  );
}
