import type { Metadata } from "next";
import { MakeoverForm } from "./MakeoverForm";

export const metadata: Metadata = {
  title: "Business makeover",
  description:
    "Apply for a GTSS digital makeover: website, branding, and online presence for a small group of East African businesses.",
};

const included = [
  "A clear, fast website",
  "Brand visuals and promo artwork",
  "Help getting found online",
  "No fee for selected businesses",
];

export default function GTSSApplicationForm() {
  return (
    <div>
      <div className="site-wrap grid gap-10 py-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:py-20">
        <div>
          <p className="site-kicker">Limited programme</p>
          <h1 className="site-display mt-4">Your business should look as serious as the work behind it.</h1>
          <p className="site-lead mt-5">
            We are choosing ten operators for a digital makeover — site, brand surfaces, and a stronger online
            presence. Built in Nairobi, for businesses that already have customers.
          </p>
          <ul className="mt-8 space-y-3 p-0">
            {included.map((item) => (
              <li key={item} className="border-l-2 border-[var(--accent)] pl-3 text-sm text-[var(--text)]">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 border border-[var(--card-border)] bg-[var(--card-bg)] p-5 text-sm text-[var(--text-muted)]">
            Ten places. We pick the operators who can tell us clearly what they sell and who they serve.
          </p>
        </div>
        <MakeoverForm />
      </div>
    </div>
  );
}
