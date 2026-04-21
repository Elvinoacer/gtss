"use client";

import { LoaderCircle } from "lucide-react";
import type { FormEvent } from "react";
import { useState, useTransition } from "react";

type FormStatus =
  | {
      tone: "idle";
      message: string;
    }
  | {
      tone: "success" | "error";
      message: string;
    };

const initialStatus: FormStatus = {
  tone: "idle",
  message: "No commitment, no credit card, and no pressure. We reach out within 24 hours.",
};

export function RestaurantManagerLeadForm() {
  const [status, setStatus] = useState<FormStatus>(initialStatus);
  const [isPending, startTransition] = useTransition();

  async function submitLead(
    form: HTMLFormElement,
    payload: {
      company: string;
      email: string;
      interest: string;
      name: string;
      phone: string;
      source: string;
    },
  ) {
    try {
      const response = await fetch("/api/leads/public", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as {
        error?: string;
        message?: string;
        success?: boolean;
      };

      if (!response.ok || !data.success) {
        setStatus({
          tone: "error",
          message:
            data.error ||
            "We could not submit your request right now. Please try again shortly.",
        });
        return;
      }

      form.reset();
      setStatus({
        tone: "success",
        message:
          data.message ||
          "Demo request submitted successfully. Our team will reach out within 24 hours.",
      });
    } catch {
      setStatus({
        tone: "error",
        message:
          "We could not submit your request right now. Please try again shortly.",
      });
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      interest: String(formData.get("interest") || "").trim(),
      source: "Restaurant Manager Premium Page",
    };

    setStatus(initialStatus);

    startTransition(() => {
      void submitLead(form, payload);
    });
  }

  const statusToneClasses =
    status.tone === "success"
      ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-100"
      : status.tone === "error"
        ? "border-rose-400/20 bg-rose-400/10 text-rose-100"
        : "border-white/10 bg-white/[0.03] text-white/60";

  return (
    <form
      id="demo-form"
      onSubmit={handleSubmit}
      className="public-panel public-card-outline rounded-[1.75rem] p-6 sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/42">
            Your Name
          </span>
          <input
            name="name"
            type="text"
            required
            disabled={isPending}
            autoComplete="name"
            placeholder="e.g. James Karanja"
            className="mt-2 w-full rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/20 disabled:cursor-not-allowed disabled:opacity-70"
          />
        </label>

        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/42">
            Phone Number
          </span>
          <input
            name="phone"
            type="tel"
            required
            disabled={isPending}
            autoComplete="tel"
            placeholder="+254 7XX XXX XXX"
            className="mt-2 w-full rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/20 disabled:cursor-not-allowed disabled:opacity-70"
          />
        </label>

        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/42">
            Email Address
          </span>
          <input
            name="email"
            type="email"
            required
            disabled={isPending}
            autoComplete="email"
            placeholder="you@yourhotel.com"
            className="mt-2 w-full rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/20 disabled:cursor-not-allowed disabled:opacity-70"
          />
        </label>

        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/42">
            Business Name
          </span>
          <input
            name="company"
            type="text"
            required
            disabled={isPending}
            autoComplete="organization"
            placeholder="e.g. Nairobi Grand Hotel"
            className="mt-2 w-full rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/20 disabled:cursor-not-allowed disabled:opacity-70"
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/42">
          I&apos;m interested in
        </span>
        <select
          name="interest"
          required
          disabled={isPending}
          defaultValue="GTSS Pro ($100/mo) — Busy Restaurants & Boutique Hotels"
          className="mt-2 w-full rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition-colors focus:border-white/20 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <option className="bg-slate-950 text-white">
            GTSS Core ($40/mo) — Cafes & Small Restaurants
          </option>
          <option className="bg-slate-950 text-white">
            GTSS Pro ($100/mo) — Busy Restaurants & Boutique Hotels
          </option>
          <option className="bg-slate-950 text-white">
            GTSS Nexus ($250+/mo) — Large Hotels & Chains
          </option>
          <option className="bg-slate-950 text-white">
            30-Day Offline Pilot
          </option>
        </select>
      </label>

      <button
        type="submit"
        disabled={isPending}
        className="public-button-primary mt-6 w-full px-6 py-4 text-base disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? (
          <>
            <LoaderCircle className="h-5 w-5 animate-spin" />
            Sending Request
          </>
        ) : (
          "Book My Demo"
        )}
      </button>

      <p
        className={`mt-4 rounded-[1.25rem] border px-4 py-3 text-sm leading-7 ${statusToneClasses}`}
      >
        {status.message}
      </p>
    </form>
  );
}
