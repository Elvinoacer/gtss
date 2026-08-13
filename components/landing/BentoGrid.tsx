import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { catalog } from "@/data/site";

export function BentoGrid() {
  return (
    <section className="bg-[var(--bg)] py-20 lg:py-28">
      <div className="site-wrap">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="site-kicker">What we ship</p>
            <h2 className="site-title mt-4">Five ready systems. One custom path if none of them fit.</h2>
          </div>
          <p className="site-lead lg:max-w-sm">
            Each product is already running in the field. You pick the one that matches the work, we configure it,
            train the team, and stay close after launch.
          </p>
        </div>

        <ul className="mt-12 list-none space-y-4 p-0">
          {catalog.map((product, index) => (
            <li key={product.id}>
              <Link
                href={product.href}
                className="group grid overflow-hidden border border-[var(--card-border)] bg-[var(--card-bg)] no-underline transition-colors hover:border-[var(--card-hover-border)] lg:grid-cols-[7.5rem_1fr_14rem_auto]"
              >
                <div className="flex items-center border-b border-[var(--card-border)] px-5 py-4 text-sm text-[var(--text-muted)] lg:border-b-0 lg:border-r">
                  0{index + 1}
                </div>
                <div className="px-5 py-5 lg:px-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.06em] text-[var(--accent)]">
                    {product.audience}
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[var(--text)]">{product.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">{product.description}</p>
                  <p className="mt-3 flex flex-wrap gap-2 text-xs text-[var(--text)]">
                    {product.features.map((feature) => (
                      <span key={feature} className="border border-[var(--border)] px-2 py-1">
                        {feature}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="relative hidden min-h-[8.5rem] lg:block">
                  <Image
                    src={product.image}
                    alt=""
                    fill
                    sizes="224px"
                    className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
                  />
                </div>
                <div className="flex items-center justify-between border-t border-[var(--card-border)] px-5 py-4 text-sm font-semibold text-[var(--accent)] lg:border-l lg:border-t-0">
                  View
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
