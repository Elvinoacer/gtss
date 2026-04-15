import { Linkedin, Twitter, Globe, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { TeamMember } from "@/src/generated/client";

interface AboutClientProps {
  teamMembers: TeamMember[];
}

const capabilityCards = [
  {
    title: "Strong Products",
    description: "Scalable solutions built for heavy-duty business needs.",
    accent: "from-blue-500 to-blue-700",
  },
  {
    title: "Clear Trust",
    description: "Transparent operations and systems you can rely on 24/7.",
    accent: "from-emerald-500 to-emerald-700",
  },
  {
    title: "Sustainable Growth",
    description: "Long-term value creation for the local tech ecosystem.",
    accent: "from-purple-500 to-purple-700",
  },
  {
    title: "Practical Innovation",
    description: "Solving real problems with software that actually works.",
    accent: "from-amber-500 to-amber-700",
  },
];

function teamMemberAvatar(member: TeamMember) {
  if (member.avatar) return member.avatar;
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(member.name)}`;
}

export function AboutClient({ teamMembers }: AboutClientProps) {
  return (
    <main className="flex-1">
      <section className="relative pt-14 pb-18 md:pt-24 md:pb-22 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-72 h-72 md:w-96 md:h-96 bg-blue-500/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-1/4 -right-20 w-72 h-72 md:w-96 md:h-96 bg-indigo-500/10 blur-[100px] rounded-full" />
          <div className="absolute top-0 -right-20 md:right-0 w-[400px] md:w-[900px] h-auto opacity-10">
            <Image
              src="/images/GTSS-logo.png"
              alt=""
              width={900}
              height={420}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-10 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 mb-6">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  Transforming African Tech
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.05] mb-6">
                Building Africa&apos;s Digital Infrastructure Engine
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mb-8 mx-auto lg:mx-0">
                We design, build, and deploy enterprise-grade software systems
                that empower businesses and drive sustainable growth across
                Africa.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/products"
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Explore Solutions
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 transition-colors text-center"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-sm mx-auto lg:mx-0">
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "100+", label: "Business Partners" },
                { value: "24/7", label: "System Uptime" },
                { value: "∞", label: "Growth Potential" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 bg-white/70 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-100 dark:border-slate-700/50 text-center lg:text-left"
                >
                  <div className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-22">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3 block">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
              More Than Code, It&apos;s Infrastructure
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              We build systems that form the backbone of business operations
              across Africa.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                The GTSS Approach
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We combine technical excellence with deep understanding of local
                business needs to create software that doesn&apos;t just
                function, it transforms.
              </p>
              <div className="space-y-3">
                {[
                  "Enterprise-grade reliability for mission-critical operations",
                  "Scalable architecture that grows with your business",
                  "Localized solutions with global best practices",
                  "24/7 support and continuous improvement",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {capabilityCards.map((card) => (
                <article
                  key={card.title}
                  className="relative h-full p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden"
                >
                  <div
                    className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${card.accent}`}
                  />
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-22">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3 block">
              The Builders
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
              Meet the Architects of Progress
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              The minds engineering Africa&apos;s digital future.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <article
                key={member.id}
                className="relative h-full bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700 p-6"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-slate-100 dark:ring-slate-700">
                    <Image
                      src={teamMemberAvatar(member)}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white truncate">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-xs uppercase tracking-wider mt-1">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                      Joined {member.joinDate || "2023"}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">
                  {member.bio ||
                    "Passionate about building scalable systems and solving complex user problems through clean code and practical innovation."}
                </p>

                <div className="flex gap-2 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                  {member.portfolioUrl ? (
                    <Link
                      href={member.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-50 dark:bg-slate-700/50 rounded-lg text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                      aria-label="Portfolio"
                    >
                      <Globe className="w-4 h-4" />
                    </Link>
                  ) : null}
                  {member.linkedinUrl ? (
                    <Link
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-50 dark:bg-slate-700/50 rounded-lg text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Link>
                  ) : null}
                  {member.twitterUrl ? (
                    <Link
                      href={member.twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-50 dark:bg-slate-700/50 rounded-lg text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-22">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative max-w-4xl mx-auto overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 p-8 md:p-12">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
            </div>

            <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between lg:gap-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Join the Movement
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Ready to Build Africa&apos;s Future?
                </h2>
                <p className="text-blue-100 text-lg max-w-xl mb-6 lg:mb-0">
                  Whether you&apos;re a developer, investor, or business looking
                  to digitize, let&apos;s build something extraordinary
                  together.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Join Our Team
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 text-center"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
