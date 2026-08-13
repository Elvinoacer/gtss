"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { catalog, mailUrl, site, telUrl } from "@/data/site";
import { PageHeader } from "@/components/site/PageHeader";

const fieldClass =
  "w-full border border-[var(--card-border)] bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-dim)] focus:border-[var(--accent)] focus:outline-none";

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    date: "",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.errors ? data.errors.join(" ") : "Something went wrong. Please try again.");
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
      <div className="site-wrap py-20 text-center">
        <CheckCircle2 className="mx-auto h-8 w-8 text-[var(--green)]" />
        <h1 className="site-title mt-5">Demo request received.</h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-[var(--text-muted)]">
          Thank you{formData.name ? `, ${formData.name}` : ""}. We will confirm a time within 24 hours
          {formData.product ? ` for ${formData.product}` : ""}.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/products" className="site-btn site-btn-primary">
            Browse products
          </Link>
          <Link href="/faq" className="site-btn site-btn-ghost">
            Read the FAQ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        kicker="Demo"
        title="Thirty minutes on your actual workflow."
        description="We walk through the product that fits, answer questions, and leave you with a clear price and timeline."
      />

      <section className="site-wrap grid gap-8 pb-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)]">
        <form onSubmit={handleSubmit} className="space-y-5 border border-[var(--card-border)] bg-[var(--card-bg)] p-6 lg:p-8">
          <Field label="Full name" htmlFor="name">
            <input id="name" name="name" required value={formData.name} onChange={handleChange} className={fieldClass} autoComplete="name" />
          </Field>
          <Field label="Email" htmlFor="email">
            <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={fieldClass} autoComplete="email" />
          </Field>
          <Field label="Phone / WhatsApp" htmlFor="phone">
            <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} className={fieldClass} autoComplete="tel" placeholder="+254 7XX XXX XXX" />
          </Field>
          <Field label="Product" htmlFor="product">
            <select id="product" name="product" required value={formData.product} onChange={handleChange} className={fieldClass}>
              <option value="">Select a product</option>
              {catalog.map((item) => (
                <option key={item.id} value={item.title}>
                  {item.title}
                </option>
              ))}
              <option value="Custom Enterprise Solution">Custom enterprise</option>
            </select>
          </Field>
          <Field label="Preferred date" htmlFor="date">
            <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} className={fieldClass} />
          </Field>
          <Field label="What should we prepare for?" htmlFor="message">
            <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`${fieldClass} resize-y`} />
          </Field>
          {error ? (
            <p className="flex items-start gap-2 text-sm text-[var(--red)]" role="alert">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              {error}
            </p>
          ) : null}
          <button type="submit" disabled={submitting} className="site-btn site-btn-primary disabled:opacity-60">
            {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            {submitting ? "Sending…" : "Request the walkthrough"}
          </button>
        </form>

        <aside className="space-y-4">
          <div className="border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">Reach us directly</p>
            <p className="mt-3 text-sm">
              <a href={mailUrl} className="text-[var(--text)] no-underline hover:underline">
                {site.email}
              </a>
            </p>
            <p className="mt-1 text-sm">
              <a href={telUrl} className="text-[var(--text)] no-underline hover:underline">
                {site.phoneDisplay}
              </a>
            </p>
          </div>
          <div className="border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">What you get</p>
            <ul className="mt-3 space-y-2 p-0 text-sm text-[var(--text-muted)]">
              <li>A live look at the product, not a slide deck</li>
              <li>Time for your questions</li>
              <li>A written price and rollout window</li>
              <li>No obligation</li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
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
