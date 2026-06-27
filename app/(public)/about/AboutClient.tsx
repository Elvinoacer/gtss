import { ArrowRight, Globe, Network, Sparkles, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { TeamMember } from "@/prisma/generated/client";

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
    <main className="flex-1 px-6 lg:px-20 pb-20 pt-16">
      <div className="mx-auto max-w-7xl space-y-32">
        {/* Hero Section */}
        <section className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="max-w-3xl">
            <div className="section-tag font-mono-dm text-[9px] tracking-[0.3em] text-[var(--gold)] uppercase mb-6 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--gold)]"></div>
              ABOUT_GTSS_CORE
            </div>
            <h1 className="font-bebas text-[clamp(48px,6vw,90px)] leading-[0.95] tracking-[0.02em] text-[var(--text)] mb-8">
              WE BUILD THE SOFTWARE LAYER FOR <span className="text-[var(--gold)]">SOVEREIGN</span> OPERATIONS.
            </h1>
            <p className="font-cormorant text-[20px] font-light leading-relaxed text-[var(--text-muted)] max-w-2xl mb-10">
              GTSS designs and deploys practical software systems for operators
              who need more than a flashy interface. We care about launch
              quality, day-two usability, and whether the system still feels
              solid when real customers and real teams are leaning on it.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              {["Built in Africa", "Deployment-minded", "Premium by design"].map(
                (item) => (
                  <span key={item} className="font-mono-dm text-[10px] tracking-[0.15em] uppercase text-[var(--text-muted)] px-4 py-2 border border-[var(--border)] bg-[rgba(3,5,8,0.4)]">
                    {item}
                  </span>
                ),
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/products"
                className="btn-primary font-mono-dm text-[11px] tracking-[0.2em] uppercase text-[var(--black)] bg-[var(--gold)] px-9 py-4 border-none cursor-none relative overflow-hidden transition-all hover:bg-[var(--gold-bright)] hover:shadow-[var(--glow-gold)] [clip-path:polygon(10px_0%,100%_0%,calc(100%-10px)_100%,0%_100%)] flex items-center gap-3 justify-center"
              >
                Explore Products
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="btn-ghost font-mono-dm text-[11px] tracking-[0.2em] uppercase text-[var(--text-muted)] bg-transparent px-9 py-[15px] border border-[var(--border)] cursor-none transition-all hover:text-[var(--gold)] hover:border-[var(--border-bright)] flex items-center justify-center"
              >
                Talk to GTSS
              </Link>
            </div>
          </div>

          <div className="relative border border-[var(--border)] bg-[rgba(3,5,8,0.6)] backdrop-blur-xl p-8 lg:p-12 overflow-hidden before:absolute before:top-0 before:left-0 before:w-8 before:h-8 before:border-t before:border-l before:border-[var(--gold)] after:absolute after:bottom-0 after:right-0 after:w-8 after:h-8 after:border-b after:border-r after:border-[var(--gold)]">
            <div className="grid grid-cols-2 gap-px bg-[var(--border)] overflow-hidden">
              {[
                { value: "50+", label: "project surfaces delivered" },
                { value: "EA", label: "primary context (East Africa)" },
                { value: "OFFLINE", label: "default design posture" },
                { value: "OPERATOR", label: "workflow philosophy" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[rgba(3,5,8,0.8)] p-6 lg:p-8"
                >
                  <p className="font-bebas text-3xl lg:text-4xl text-[var(--gold)]">
                    {item.value}
                  </p>
                  <p className="font-mono-dm text-[9px] uppercase tracking-[0.2em] text-[var(--text-dim)] mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-[var(--border)]">
              <p className="font-mono-dm text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--gold-dim)] mb-4">
                Operating thesis
              </p>
              <p className="font-cormorant text-xl lg:text-2xl font-light italic text-[var(--text)] leading-relaxed">
                "Good software should reduce noise, make the business look more
                capable, and give teams clearer control of the work in front of
                them."
              </p>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="section-tag font-mono-dm text-[9px] tracking-[0.3em] text-[var(--gold)] uppercase mb-6 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--gold)]"></div>
              OUR_APPROACH
            </div>
            <h2 className="font-bebas text-5xl lg:text-7xl text-[var(--text)] leading-none tracking-[0.02em] mb-8">
              POLISH MEETS <span className="text-[var(--gold)]">REALITY.</span>
            </h2>
            <p className="font-cormorant text-xl font-light text-[var(--text-muted)] leading-relaxed">
              We do not think of software as a disconnected digital artifact.
              It is part of how a company presents itself, coordinates work,
              settles payments, tracks accountability, and grows.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="group relative border border-[var(--border)] bg-[rgba(3,5,8,0.4)] p-8 lg:p-10 transition-all hover:border-[var(--gold-dim)] hover:bg-[rgba(3,5,8,0.6)]"
              >
                <div className="absolute top-4 right-6 font-mono-dm text-[10px] tracking-[0.2em] text-[var(--gold-dim)] opacity-40 group-hover:opacity-100 transition-opacity">
                  PROTOCOL_0{principles.indexOf(principle) + 1}
                </div>
                <h3 className="font-rajdhani text-2xl lg:text-3xl font-semibold tracking-tight text-[var(--text)] mb-4 uppercase">
                  {principle.title}
                </h3>
                <p className="font-cormorant text-[17px] lg:text-[19px] font-light leading-relaxed text-[var(--text-muted)]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Capabilities Section */}
        <section>
          <div className="max-w-3xl mb-16">
            <div className="section-tag font-mono-dm text-[9px] tracking-[0.3em] text-[var(--gold)] uppercase mb-6 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--gold)]"></div>
              CORE_CAPABILITIES
            </div>
            <h2 className="font-bebas text-5xl lg:text-7xl text-[var(--text)] leading-none tracking-[0.02em]">
              DESIGNED FOR <span className="text-[var(--gold)]">PRESSURE.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="group relative border border-[var(--border)] bg-[rgba(3,5,8,0.4)] p-8 lg:p-10 flex flex-col justify-between aspect-square hover:border-[var(--gold-dim)] transition-all"
              >
                <div className="w-12 h-12 border border-[var(--border)] flex items-center justify-center bg-[var(--black)] group-hover:border-[var(--gold)] transition-colors">
                  <Sparkles className="w-6 h-6 text-[var(--gold)]" />
                </div>
                <div>
                  <h3 className="font-rajdhani text-2xl lg:text-3xl font-semibold tracking-tight text-[var(--text)] mb-4 uppercase">
                    {capability.title}
                  </h3>
                  <p className="font-cormorant text-[17px] font-light leading-relaxed text-[var(--text-muted)]">
                    {capability.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="max-w-3xl mb-16">
            <div className="section-tag font-mono-dm text-[9px] tracking-[0.3em] text-[var(--gold)] uppercase mb-6 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--gold)]"></div>
              THE_PERSONNEL
            </div>
            <h2 className="font-bebas text-5xl lg:text-7xl text-[var(--text)] leading-none tracking-[0.02em] mb-8">
              SHAPING <span className="text-[var(--gold)]">GTSS.</span>
            </h2>
            <p className="font-cormorant text-xl font-light text-[var(--text-muted)] max-w-2xl">
              Engineers, operators, and builders focused on making software
              genuinely useful for businesses that cannot afford fragile
              systems.
            </p>
          </div>

          {teamMembers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <article
                  key={member.id}
                  className="group relative border border-[var(--border)] bg-[rgba(3,5,8,0.4)] p-8 flex flex-col hover:border-[var(--gold-dim)] transition-all"
                >
                  <div className="flex items-start gap-6 mb-8">
                    {member.avatar && canRenderRemoteImage(member.avatar) ? (
                      <div className="relative h-20 w-20 grayscale hover:grayscale-0 transition-all border border-[var(--border)] p-1">
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 border border-[var(--border)] flex items-center justify-center font-bebas text-3xl text-[var(--gold-dim)] bg-[rgba(201,160,69,0.05)]">
                        {getInitials(member.name)}
                      </div>
                    )}

                    <div className="min-w-0 flex-1 pt-1">
                      <h3 className="font-rajdhani text-2xl font-semibold tracking-tight text-[var(--text)] mb-1 uppercase">
                        {member.name}
                      </h3>
                      <div className="font-mono-dm text-[9px] tracking-[0.2em] text-[var(--gold)] uppercase mb-2">
                        {member.role}
                      </div>
                      <div className="font-mono-dm text-[8px] tracking-[0.15em] text-[var(--text-dim)] uppercase">
                        Active since {member.joinDate || "Origin"}
                      </div>
                    </div>
                  </div>

                  <p className="font-cormorant text-[17px] font-light leading-relaxed text-[var(--text-muted)] flex-1 mb-8">
                    {member.bio ||
                      "Focused on building dependable systems, clear workflows, and product experiences that feel polished without becoming fragile."}
                  </p>

                  <div className="flex items-center gap-3 pt-6 border-t border-[var(--border)]">
                    {member.portfolioUrl && (
                      <Link href={member.portfolioUrl} className="w-9 h-9 border border-[var(--border)] flex items-center justify-center text-[var(--text-dim)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all">
                        <Globe className="w-4 h-4" />
                      </Link>
                    )}
                    {member.linkedinUrl && (
                      <Link href={member.linkedinUrl} className="w-9 h-9 border border-[var(--border)] flex items-center justify-center text-[var(--text-dim)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all">
                        <Network className="w-4 h-4" />
                      </Link>
                    )}
                    {member.twitterUrl && (
                      <Link href={member.twitterUrl} className="w-9 h-9 border border-[var(--border)] flex items-center justify-center text-[var(--text-dim)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all">
                        <MessageCircle className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="border border-[var(--border)] bg-[rgba(3,5,8,0.6)] p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center font-bebas text-[200px] select-none">
                REFRESHING
              </div>
              <div className="font-mono-dm text-[9px] tracking-[0.3em] text-[var(--gold)] uppercase mb-6">
                SYSTEM_STATUS: UPDATE_IN_PROGRESS
              </div>
              <h3 className="font-bebas text-4xl text-[var(--text)] mb-6">
                TEAM PROFILES BEING REFRESHED.
              </h3>
              <p className="font-cormorant text-lg font-light text-[var(--text-muted)] max-w-xl mx-auto">
                GTSS is actively building the public team roster. If you want to
                meet the people behind a project or product line, reach out and
                we'll make the right introduction directly.
              </p>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="relative border border-[var(--border)] bg-[var(--black)] p-12 lg:p-20 text-center overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="section-tag font-mono-dm text-[9px] tracking-[0.3em] text-[var(--gold)] uppercase mb-8 mx-auto w-fit flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--gold)]"></div>
              INITIALIZE_PARTNERSHIP
            </div>
            <h2 className="font-bebas text-6xl lg:text-8xl text-[var(--text)] mb-10 tracking-[0.02em]">
              SHAPE YOUR <span className="text-[var(--gold)]">LAYER.</span>
            </h2>
            <p className="font-cormorant text-xl font-light text-[var(--text-muted)] mb-12 max-w-xl mx-auto leading-relaxed">
              Whether you need a product walkthrough, a deployment plan, or a
              more tailored delivery path, GTSS is built to meet the work where
              it actually happens.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/contact"
                className="btn-primary font-mono-dm text-[11px] tracking-[0.25em] uppercase text-[var(--black)] bg-[var(--gold)] px-12 py-5 border-none cursor-none relative overflow-hidden transition-all hover:bg-[var(--gold-bright)] hover:shadow-[var(--glow-gold)] [clip-path:polygon(12px_0%,100%_0%,calc(100%-12px)_100%,0%_100%)] flex items-center gap-3 justify-center"
              >
                Start the Conversation
              </Link>
              <Link
                href="/products"
                className="btn-ghost font-mono-dm text-[11px] tracking-[0.25em] uppercase text-[var(--text-muted)] bg-transparent px-10 py-[19px] border border-[var(--border)] cursor-none transition-all hover:text-[var(--gold)] hover:border-[var(--border-bright)] flex items-center justify-center"
              >
                Browse Product Suite
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
