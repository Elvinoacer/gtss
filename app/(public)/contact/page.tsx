"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { mailUrl, site, telUrl, whatsappUrl } from "@/data/site";
import { PageHeader } from "@/components/site/PageHeader";

const subjects = ["General inquiry", "Sales & pricing", "Technical support", "Partnership"];

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  privacy: boolean;
}

const fieldClass =
  "w-full border border-[var(--card-border)] bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-dim)] focus:border-[var(--accent)] focus:outline-none";

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message || !form.privacy) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          subject: form.subject,
          message: form.message,
        }),
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

  return (
    <div>
      <PageHeader
        kicker="Contact"
        title="Tell us what you run."
        description="A restaurant, a lodge, a shop, a church, or something custom. We reply within 24 hours."
      />

      <section className="site-wrap grid gap-8 pb-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
        <div className="border border-[var(--card-border)] bg-[var(--card-bg)] p-6 lg:p-8">
          {submitted ? (
            <div className="py-10 text-center">
              <CheckCircle2 className="mx-auto h-8 w-8 text-[var(--green)]" />
              <h2 className="mt-4 text-2xl font-semibold text-[var(--text)]">Message received.</h2>
              <p className="mt-2 text-sm text-[var(--text-muted)]">We will be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <input id="name" name="name" required value={form.name} onChange={onChange} className={fieldClass} autoComplete="name" />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input id="email" name="email" type="email" required value={form.email} onChange={onChange} className={fieldClass} autoComplete="email" />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Company / organization" htmlFor="company">
                  <input id="company" name="company" value={form.company} onChange={onChange} className={fieldClass} autoComplete="organization" />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Subject" htmlFor="subject">
                  <select id="subject" name="subject" required value={form.subject} onChange={onChange} className={fieldClass}>
                    <option value="" disabled>
                      Choose a subject
                    </option>
                    {subjects.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Message" htmlFor="message">
                  <textarea id="message" name="message" required rows={6} value={form.message} onChange={onChange} className={`${fieldClass} resize-y`} />
                </Field>
              </div>
              {error ? (
                <p className="mt-5 flex items-start gap-2 text-sm text-[var(--red)]" role="alert">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  {error}
                </p>
              ) : null}
              <label className="mt-6 flex items-start gap-3 text-sm text-[var(--text-muted)]">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  checked={form.privacy}
                  onChange={(event) => setForm((prev) => ({ ...prev, privacy: event.target.checked }))}
                  className="mt-1 accent-[var(--accent)]"
                />
                I agree that GTSS may use this information to reply to my inquiry, as described in the privacy policy.
              </label>
              <button type="submit" disabled={submitting} className="site-btn site-btn-primary mt-6 disabled:opacity-60">
                {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {submitting ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>

        <aside className="space-y-4">
          <InfoBlock label="Phone" value={site.phoneDisplay} href={telUrl} />
          <InfoBlock label="Email" value={site.email} href={mailUrl} />
          <InfoBlock label="Address" value={site.addressLines.join("\n")} />
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-[var(--card-border)] bg-[var(--card-bg)] p-5 no-underline"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--green)]">WhatsApp</p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">Usually the fastest way during business hours.</p>
            <p className="mt-3 text-sm font-semibold text-[var(--green)]">Open chat</p>
          </a>
          <div className="border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">Response</p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">We reply to every inquiry {site.responseSla.toLowerCase()}.</p>
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

function InfoBlock({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = <span className="whitespace-pre-line">{value}</span>;
  return (
    <div className="border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">{label}</p>
      <p className="mt-2 text-sm font-medium text-[var(--text)]">
        {href ? (
          <a href={href} className="text-[var(--text)] no-underline hover:underline">
            {content}
          </a>
        ) : (
          content
        )}
      </p>
    </div>
  );
}
