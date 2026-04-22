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
    <main className="flex-1 px-3 pb-20 pt-6 sm:px-6 lg:px-8 lg:pt-14">
      <div className="mx-auto max-w-7xl space-y-16 sm:space-y-24">
        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <span className="public-kicker">About GTSS</span>
            <h1 className="public-section-title mt-5 text-3xl text-white sm:mt-6 sm:text-5xl lg:text-6xl">
              We build the software layer that helps modern African businesses
              operate with more confidence.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/66 sm:mt-6 sm:text-lg sm:leading-8">
              GTSS designs and deploys practical software systems for operators
              who need more than a flashy interface. We care about launch
              quality, day-two usability, and whether the system still feels
              solid when real customers and real teams are leaning on it.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
              {["Built in Africa", "Deployment-minded", "Premium by design"].map(
                (item) => (
                  <span key={item} className="public-chip text-[0.68rem] sm:text-sm">
                    {item}
                  </span>
                ),
              )}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4 sm:flex-row">
              <Link
                href="/products"
                className="public-button-primary px-5 py-3 text-sm sm:px-6 sm:py-4 sm:text-base"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="public-button-secondary px-5 py-3 text-sm sm:px-6 sm:py-4 sm:text-base"
              >
                Talk to GTSS
              </Link>
            </div>
          </div>

          <div className="public-panel-strong public-card-outline rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-6">
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {[
                { value: "50+", label: "project surfaces delivered" },
                { value: "East Africa", label: "primary operating context" },
                { value: "Offline-aware", label: "default design posture" },
                { value: "Operator-first", label: "workflow philosophy" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-3 sm:rounded-[1.5rem] sm:p-5"
                >
                  <p className="text-base font-semibold text-white sm:text-2xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[0.55rem] uppercase tracking-[0.14em] text-white/40 sm:mt-2 sm:text-xs sm:tracking-[0.22em]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-[1.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(243,215,154,0.10),rgba(143,216,255,0.10))] p-4 sm:mt-4 sm:rounded-[1.75rem] sm:p-6">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/40 sm:text-xs sm:tracking-[0.24em]">
                Operating thesis
              </p>
              <p className="mt-2 text-base font-semibold text-white sm:mt-3 sm:text-lg">
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
            <h2 className="public-section-title mt-5 text-2xl text-white sm:mt-6 sm:text-4xl lg:text-5xl">
              GTSS sits at the intersection of product polish and operating
              reality.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/66 sm:mt-5 sm:text-lg sm:leading-8">
              We do not think of software as a disconnected digital artifact.
              It is part of how a company presents itself, coordinates work,
              settles payments, tracks accountability, and grows.
            </p>
          </div>

          <div className="grid gap-4">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="public-panel rounded-[1.35rem] p-4 sm:rounded-[1.75rem] sm:p-6"
              >
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#8fd8ff] sm:text-xs sm:tracking-[0.22em]">
                  Principle
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white sm:mt-3 sm:text-2xl">
                  {principle.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-white/62 sm:mt-3 sm:text-base sm:leading-7">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="max-w-3xl">
            <span className="public-kicker">What we build</span>
            <h2 className="public-section-title mt-5 text-2xl text-white sm:mt-6 sm:text-4xl lg:text-5xl">
              GTSS is designed to be useful where execution pressure is high.
            </h2>
          </div>

          <div className="mt-6 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="public-panel public-card-outline rounded-[1.35rem] p-4 sm:rounded-[1.75rem] sm:p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 sm:h-12 sm:w-12 sm:rounded-2xl">
                  <Sparkles className="h-4 w-4 text-[#f3d79a] sm:h-5 sm:w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white sm:mt-8 sm:text-2xl">
                  {capability.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-white/62 sm:mt-3 sm:text-base sm:leading-7">
                  {capability.copy}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="max-w-3xl">
            <span className="public-kicker">The team</span>
            <h2 className="public-section-title mt-5 text-2xl text-white sm:mt-6 sm:text-4xl lg:text-5xl">
              The people shaping GTSS.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/66 sm:mt-5 sm:text-lg sm:leading-8">
              Engineers, operators, and builders focused on making software
              genuinely useful for businesses that cannot afford fragile
              systems.
            </p>
          </div>

          {teamMembers.length > 0 ? (
            <div className="mt-6 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
              {teamMembers.map((member) => (
                <article
                  key={member.id}
                  className="public-panel public-card-outline flex h-full flex-col rounded-[1.35rem] p-4 sm:rounded-[1.75rem] sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    {member.avatar && canRenderRemoteImage(member.avatar) ? (
                      <div className="relative h-12 w-12 overflow-hidden rounded-[1rem] border border-white/10 sm:h-16 sm:w-16 sm:rounded-[1.25rem]">
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    ) : (
                      <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-[linear-gradient(135deg,rgba(243,215,154,0.25),rgba(143,216,255,0.25))] text-sm font-semibold text-white sm:h-16 sm:w-16 sm:rounded-[1.25rem] sm:text-lg">
                        {getInitials(member.name)}
                      </div>
                    )}

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-base font-semibold text-white sm:text-xl">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[#8fd8ff] sm:text-xs sm:tracking-[0.2em]">
                        {member.role}
                      </p>
                      <p className="mt-1.5 text-[0.58rem] uppercase tracking-[0.14em] text-white/35 sm:mt-2 sm:text-xs sm:tracking-[0.18em]">
                        Joined {member.joinDate || "GTSS early team"}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 flex-1 text-xs leading-6 text-white/62 sm:mt-5 sm:text-base sm:leading-7">
                    {member.bio ||
                      "Focused on building dependable systems, clear workflows, and product experiences that feel polished without becoming fragile."}
                  </p>

                  <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4 sm:mt-6 sm:gap-3 sm:pt-5">
                    {member.portfolioUrl ? (
                      <Link
                        href={member.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/65 transition-colors hover:border-white/20 hover:text-white sm:h-10 sm:w-10 sm:rounded-2xl"
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
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/65 transition-colors hover:border-white/20 hover:text-white sm:h-10 sm:w-10 sm:rounded-2xl"
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
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/65 transition-colors hover:border-white/20 hover:text-white sm:h-10 sm:w-10 sm:rounded-2xl"
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
            <div className="public-panel public-card-outline mt-6 rounded-[1.35rem] px-4 py-10 text-center sm:mt-10 sm:rounded-[1.75rem] sm:px-6 sm:py-16">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/38 sm:text-xs sm:tracking-[0.22em]">
                Team profiles
              </p>
              <p className="mt-3 text-xl font-semibold text-white sm:mt-4 sm:text-3xl">
                Team profiles are being refreshed.
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-white/62 sm:mt-4 sm:text-base sm:leading-7">
                GTSS is actively building the public team roster. If you want to
                meet the people behind a project or product line, reach out and
                we&apos;ll make the right introduction directly.
              </p>
            </div>
          )}
        </section>

        <section className="public-panel-strong public-card-outline rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <span className="public-kicker">Work with GTSS</span>
            <h2 className="public-section-title mt-5 text-2xl text-white sm:mt-6 sm:text-4xl lg:text-5xl">
              If the business needs a stronger digital operating layer, we can
              help shape it.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/66 sm:mt-5 sm:text-lg sm:leading-8">
              Whether you need a product walkthrough, a deployment plan, or a
              more tailored delivery path, GTSS is built to meet the work where
              it actually happens.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="public-button-primary px-5 py-3 text-sm sm:px-6 sm:py-4 sm:text-base"
            >
              Start the Conversation
            </Link>
            <Link
              href="/products"
              className="public-button-secondary px-5 py-3 text-sm sm:px-6 sm:py-4 sm:text-base"
            >
              Browse the Product Suite
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
