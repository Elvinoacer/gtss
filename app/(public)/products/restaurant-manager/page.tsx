import path from "node:path";
import { readFile } from "node:fs/promises";

import type { Metadata } from "next";

import { RestaurantManagerInteractivity } from "./restaurant-manager-interactivity";

type ExtractedMarkup = {
  styles: string;
  body: string;
};

const ALIGNMENT_AND_SCOPE_PATCH_CSS = `
/* ===================== SHARED LAYOUT ALIGNMENT ===================== */
[data-resmg-root] {
  --resmg-font-display: var(--font-display);
  --resmg-font-body: var(--font-sans);
  --resmg-font-mono: var(--font-mono);
  background: transparent !important;
  --navy: #000000;
}

/* Remove expensive full-screen noise layer to improve first paint */
[data-resmg-root]::before {
  display: none !important;
}

[data-resmg-root] #hero,
[data-resmg-root] #problem,
[data-resmg-root] #howitworks,
[data-resmg-root] #integrations,
[data-resmg-root] #proof,
[data-resmg-root] #cta {
  background: transparent !important;
}

[data-resmg-root] .hero-bg-glow,
[data-resmg-root] .hero-bg-glow2 {
  filter: blur(24px) !important;
  opacity: 0.45;
}

[data-resmg-root] .hero-float-card {
  backdrop-filter: blur(10px);
}

/* Defer offscreen sections to reduce initial layout/paint cost */
[data-resmg-root] #problem,
[data-resmg-root] #howitworks,
[data-resmg-root] #roles,
[data-resmg-root] #integrations,
[data-resmg-root] #proof,
[data-resmg-root] #pricing,
[data-resmg-root] #cta {
  content-visibility: auto;
  contain-intrinsic-size: 1px 900px;
}

[data-resmg-root] .container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 640px) {
  [data-resmg-root] .container {
    padding: 0 24px;
  }
}

@media (min-width: 1024px) {
  [data-resmg-root] .container {
    padding: 0 32px;
  }
}
`;

const MOBILE_POLISH_CSS = `
/* ===================== MOBILE POLISH ===================== */
@media (max-width: 480px) {
  [data-resmg-root] .container {
    padding: 0 16px;
  }

  [data-resmg-root] .hero-title {
    font-size: clamp(32px, 10vw, 46px);
    line-height: 1.05;
  }

  [data-resmg-root] .hero-sub {
    font-size: 16px;
  }

  [data-resmg-root] .hero-cta-row {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  [data-resmg-root] .hero-cta-row .btn-primary,
  [data-resmg-root] .hero-cta-row .btn-secondary {
    width: 100%;
    justify-content: center;
  }

  [data-resmg-root] .metric-item {
    padding: 24px 16px;
  }

  [data-resmg-root] .metric-num {
    font-size: 34px;
  }

  [data-resmg-root] .role-content h2 {
    font-size: 30px;
  }

  [data-resmg-root] .cta-form {
    padding: 24px;
  }

  [data-resmg-root] .form-submit {
    padding: 14px;
    font-size: 15px;
  }

  [data-resmg-root] .pricing-note {
    padding: 18px;
    font-size: 13px;
  }
}

@media (max-width: 360px) {
  [data-resmg-root] .hero-title {
    font-size: 30px;
  }

  [data-resmg-root] .hero-stats {
    gap: 16px;
  }

  [data-resmg-root] .hero-stat-num {
    font-size: 28px;
  }
}
`;

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "GTSS Restaurant Manager - Offline-First Hotel & POS System",
  description:
    "Offline-first restaurant and hotel operations platform for African hospitality with M-Pesa and Business Central integrations.",
};

function scopeGlobalSelectors(styles: string): string {
  return styles
    .replace(
      /\*,\s*\n\s*\*::before,\s*\n\s*\*::after\s*\{/m,
      "[data-resmg-root] *,\n      [data-resmg-root] *::before,\n      [data-resmg-root] *::after {",
    )
    .replace(/(^|\n)\s*html\s*\{/g, "$1[data-resmg-root] {")
    .replace(/(^|\n)\s*body::before\s*\{/g, "$1[data-resmg-root]::before {")
    .replace(/(^|\n)\s*body\s*\{/g, "$1[data-resmg-root] {")
    .replace(/(^|\n)\s*a\s*\{/g, "$1[data-resmg-root] a {")
    .replace(/(^|\n)\s*img\s*\{/g, "$1[data-resmg-root] img {")
    .replace(
      /h1\s*,\s*\n\s*h2\s*,\s*\n\s*h3\s*,\s*\n\s*h4\s*\{/m,
      "[data-resmg-root] h1,\n      [data-resmg-root] h2,\n      [data-resmg-root] h3,\n      [data-resmg-root] h4 {",
    )
    .replace(/(^|\n)\s*section\s*\{/g, "$1[data-resmg-root] section {")
    .replace(/(^|\n)\s*\.container\s*\{/g, "$1[data-resmg-root] .container {");
}

function stripCssSection(styles: string, sectionName: string): string {
  const sectionRegex = new RegExp(
    String.raw`\/\*\s*=+\s*${sectionName}\s*=+\s*\*\/[\s\S]*?(?=\/\*\s*=+\s*[A-Z0-9 \/&()\-]+\s*=+\s*\*\/|$)`,
    "i",
  );

  return styles.replace(sectionRegex, "").trim();
}

function normalizeRestaurantManagerStyles(styles: string): string {
  const fontMappedStyles = styles
    .replace(/"Syne",\s*sans-serif/g, "var(--resmg-font-display), sans-serif")
    .replace(/"DM Sans",\s*sans-serif/g, "var(--resmg-font-body), sans-serif")
    .replace(
      /"IBM Plex Mono",\s*monospace/g,
      "var(--resmg-font-mono), monospace",
    );

  // Shared public layout already provides header/footer; keep this page focused on product content.
  const withoutStandaloneNav = stripCssSection(fontMappedStyles, "NAV");
  const withoutStandaloneFooter = stripCssSection(
    withoutStandaloneNav,
    "FOOTER",
  );

  const scopedStyles = scopeGlobalSelectors(withoutStandaloneFooter);

  return `${scopedStyles}\n\n${ALIGNMENT_AND_SCOPE_PATCH_CSS}\n\n${MOBILE_POLISH_CSS}`;
}

function normalizeRestaurantManagerBody(body: string): string {
  return body
    .replace(/<!--\s*=+\s*NAV\s*=+\s*-->[\s\S]*?<\/nav>/i, "")
    .replace(/<!--\s*=+\s*FOOTER\s*=+\s*-->[\s\S]*?<\/footer>/i, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(
      /onclick="switchRole\('([^']+)'\)"/g,
      'data-role-switch="$1" type="button"',
    )
    .replace(/<div class="cta-form">/i, '<div class="cta-form" data-cta-form>')
    .replace(
      /<input type="text" placeholder="e\.g\. James Karanja"\s*\/>/i,
      '<input name="name" type="text" placeholder="e.g. James Karanja" autocomplete="name" required />',
    )
    .replace(
      /<input type="tel" placeholder="\+254 7XX XXX XXX"\s*\/>/i,
      '<input name="phone" type="tel" placeholder="+254 7XX XXX XXX" autocomplete="tel" required />',
    )
    .replace(
      /<input type="email" placeholder="you@yourhotel\.com"\s*\/>/i,
      '<input name="email" type="email" placeholder="you@yourhotel.com" autocomplete="email" required />',
    )
    .replace(
      /<input type="text" placeholder="e\.g\. Nairobi Grand Hotel"\s*\/>/i,
      '<input name="company" type="text" placeholder="e.g. Nairobi Grand Hotel" autocomplete="organization" required />',
    )
    .replace(/<select>/i, '<select name="interest" required>')
    .replace(
      /<button class="btn-primary form-submit">/i,
      '<button class="btn-primary form-submit" type="button">',
    )
    .replace(/href="#"/g, 'href="/contact"');
}

function extractRestaurantManagerMarkup(html: string): ExtractedMarkup {
  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/i);
  const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/i);

  if (!styleMatch?.[1] || !bodyMatch?.[1]) {
    throw new Error("Unable to extract styles and body from resmg.html");
  }

  const styles = normalizeRestaurantManagerStyles(styleMatch[1]);
  const body = normalizeRestaurantManagerBody(bodyMatch[1]);

  return {
    styles,
    body,
  };
}

async function getRestaurantManagerMarkup(): Promise<ExtractedMarkup> {
  const htmlFilePath = path.join(process.cwd(), "resmg.html");
  const html = await readFile(htmlFilePath, "utf-8");
  return extractRestaurantManagerMarkup(html);
}

export default async function RestaurantManagerPage() {
  const { styles, body } = await getRestaurantManagerMarkup();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <RestaurantManagerInteractivity />
      <div data-resmg-root dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
