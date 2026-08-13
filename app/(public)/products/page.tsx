import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { catalog } from "@/data/site";
import { PageHeader } from "@/components/site/PageHeader";
import { SiteCTA } from "@/components/site/SiteCTA";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Ready-to-deploy software for restaurants, hotels, shops, churches, and service teams across East Africa.",
};

export default function ProductsPage() {
  return (
    <div>
      <PageHeader
        kicker="Products"
        title="Pick the system that matches the work."
        description="Five products already running in the field. Each one works offline, takes local payments, and comes with setup and staff training."
      />

      <section className="site-wrap pb-20">
        <ul className="list-none space-y-8 p-0">
          {catalog.map((product, index) => (
            <li key={product.id}>
              <article className="grid overflow-hidden border border-[var(--card-border)] bg-[var(--card-bg)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                <div className="flex flex-col justify-between p-6 lg:p-10">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">
                      0{index + 1} · {product.audience}
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text)]">{product.title}</h2>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-muted)] lg:text-base">
                      {product.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2 p-0">
                      {product.features.map((feature) => (
                        <li key={feature} className="border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--text)]">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={product.href} className="site-btn site-btn-primary mt-8 w-fit">
                    View {product.title}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="relative min-h-[14rem] border-t border-[var(--card-border)] lg:border-l lg:border-t-0">
                  <Image
                    src={product.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <SiteCTA
        title="Need something that is not on this list?"
        copy="We also build custom systems when a ready product is not the right fit."
        primary={{ href: "/contact", label: "Describe the work" }}
        secondary={{ href: "/enterprise", label: "Enterprise" }}
      />
    </div>
  );
}
