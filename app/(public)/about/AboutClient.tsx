import { Globe, Linkedin, Sparkles, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { TeamMember } from "@/src/generated/client";

interface AboutClientProps {
  teamMembers: TeamMember[];
}

const principles = [
  {
    title: "Product quality that signals trust",
    description:
      "GTSS aims for software that feels composed, visually credible, and stable enough to earn confidence quickly.",
  },
  {
    title: "Local realities built into the model",
    description:
      "Connectivity, operational pressure, staff training, and payment realities are accounted for from the start.",
  },
  {
    title: "Delivery that survives contact with the real world",
    description:
      "We care about launch quality, yes, but also about whether the product still holds up on a busy Tuesday.",
  },
];

const capabilities = [
  {
    title: "Operational products",
    copy: "Systems for hospitality, internal workflows, field execution, and customer-facing experiences.",
  },
  {
    title: "Deployment partnership",
    copy: "Configuration, onboarding, rollout, and support so the product arrives as a complete operating layer.",
  },
  {
    title: "Premium presentation",
    copy: "Interfaces and brand surfaces that help ambitious businesses look more mature and more organized.",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

function canRenderRemoteImage(src: string | null | undefined) {
  if (!src) return false;

  return (
    src.startsWith("/") ||
    src.includes("images.unsplash.com") ||
    src.includes("res.cloudinary.com") ||
    src.includes("lh3.googleusercontent.com")
  );
}

export function AboutClient({ teamMembers }: AboutClientProps) {
  return (
    <main className="flex-1 px-4 pb-24 pt-10 sm:px-6 lg:px-8 lg:pt-14">
      <div className="mx-auto max-w-7xl space-y-24">
        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <span className="public-kicker">About GTSS</span>
            <h1 className="public-section-title mt-6 text-5xl text-white sm:text-6xl">
              We build the software layer that helps modern African businesses
              operate with more confidence.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/66 sm:text-lg">
              GTSS designs and deploys practical software systems for operators
              who need more than a flashy interface. We care about launch
              quality, day-two usability, and whether the system still feels
              solid when real customers and real teams are leaning on it.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Built in Africa", "Deployment-minded", "Premium by design"].map(
                (item) => (
                  <span key={item} className="public-chip text-sm">
                    {item}
                  </span>
                ),
              )}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="public-button-primary px-6 py-4 text-base"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="public-button-secondary px-6 py-4 text-base"
              >
                Talk to GTSS
              </Link>
            </div>
          </div>

          <div className="public-panel-strong public-card-outline rounded-[2rem] p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { value: "50+", label: "project surfaces delivered" },
                { value: "East Africa", label: "primary operating context" },
                { value: "Offline-aware", label: "default design posture" },
                { value: "Operator-first", label: "workflow philosophy" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/40">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(243,215,154,0.10),rgba(143,216,255,0.10))] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
                Operating thesis
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Good software should reduce noise, make the business look more
                capable, and give teams clearer control of the work in front of
                them.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="public-kicker">Our approach</span>
            <h2 className="public-section-title mt-6 text-4xl text-white sm:text-5xl">
              GTSS sits at the intersection of product polish and operating
              reality.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/66 sm:text-lg">
              We do not think of software as a disconnected digital artifact.
              It is part of how a company presents itself, coordinates work,
              settles payments, tracks accountability, and grows.
            </p>
          </div>

          <div className="grid gap-4">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="public-panel rounded-[1.75rem] p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8fd8ff]">
                  Principle
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/62 sm:text-base">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="max-w-3xl">
            <span className="public-kicker">What we build</span>
            <h2 className="public-section-title mt-6 text-4xl text-white sm:text-5xl">
              GTSS is designed to be useful where execution pressure is high.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="public-panel public-card-outline rounded-[1.75rem] p-6 sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Sparkles className="h-5 w-5 text-[#f3d79a]" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/62 sm:text-base">
                  {capability.copy}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="max-w-3xl">
            <span className="public-kicker">The team</span>
            <h2 className="public-section-title mt-6 text-4xl text-white sm:text-5xl">
              The people shaping GTSS.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66 sm:text-lg">
              Engineers, operators, and builders focused on making software
              genuinely useful for businesses that cannot afford fragile
              systems.
            </p>
          </div>

          {teamMembers.length > 0 ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {teamMembers.map((member) => (
                <article
                  key={member.id}
                  className="public-panel public-card-outline flex h-full flex-col rounded-[1.75rem] p-6 sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    {member.avatar && canRenderRemoteImage(member.avatar) ? (
                      <div className="relative h-16 w-16 overflow-hidden rounded-[1.25rem] border border-white/10">
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    ) : (
                      <div className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-[linear-gradient(135deg,rgba(243,215,154,0.25),rgba(143,216,255,0.25))] text-lg font-semibold text-white">
                        {getInitials(member.name)}
                      </div>
                    )}

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-xl font-semibold text-white">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#8fd8ff]">
                        {member.role}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/35">
                        Joined {member.joinDate || "GTSS early team"}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 flex-1 text-sm leading-7 text-white/62 sm:text-base">
                    {member.bio ||
                      "Focused on building dependable systems, clear workflows, and product experiences that feel polished without becoming fragile."}
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    {member.portfolioUrl ? (
                      <Link
                        href={member.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/65 transition-colors hover:border-white/20 hover:text-white"
                        aria-label="Portfolio"
                      >
                        <Globe className="h-4 w-4" />
                      </Link>
                    ) : null}
                    {member.linkedinUrl ? (
                      <Link
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/65 transition-colors hover:border-white/20 hover:text-white"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    ) : null}
                    {member.twitterUrl ? (
                      <Link
                        href={member.twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/65 transition-colors hover:border-white/20 hover:text-white"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-4 w-4" />
                      </Link>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="public-panel public-card-outline mt-10 rounded-[1.75rem] px-6 py-16 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/38">
                Team profiles
              </p>
              <p className="mt-4 text-3xl font-semibold text-white">
                Team profiles are being refreshed.
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
                GTSS is actively building the public team roster. If you want to
                meet the people behind a project or product line, reach out and
                we&apos;ll make the right introduction directly.
              </p>
            </div>
          )}
        </section>

        <section className="public-panel-strong public-card-outline rounded-[2rem] p-8 sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <span className="public-kicker">Work with GTSS</span>
            <h2 className="public-section-title mt-6 text-4xl text-white sm:text-5xl">
              If the business needs a stronger digital operating layer, we can
              help shape it.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66 sm:text-lg">
              Whether you need a product walkthrough, a deployment plan, or a
              more tailored delivery path, GTSS is built to meet the work where
              it actually happens.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="public-button-primary px-6 py-4 text-base"
            >
              Start the Conversation
            </Link>
            <Link
              href="/products"
              className="public-button-secondary px-6 py-4 text-base"
            >
              Browse the Product Suite
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
