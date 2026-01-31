"use client";

import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Globe,
  ArrowRight,
  Target,
  Cpu,
  Users,
  Zap,
  Sparkles,
  Building,
  Rocket,
  Shield,
} from "lucide-react";
import Link from "next/link";

interface AboutClientProps {
  teamMembers: any[];
}

export function AboutClient({ teamMembers }: AboutClientProps) {
  return (
    <main className="flex-1">
      {/* 1. ENHANCED HERO: More dynamic with better visual hierarchy */}
      <section className="relative pt-12 pb-16 md:pt-24 md:pb-20 overflow-hidden">
        {/* Animated background gradient and Watermark Logo */}
        {/* Animated background gradient and Watermark Logo */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 blur-[80px] md:blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-purple-500/5 blur-[80px] md:blur-[120px] rounded-full" />
          
          {/* Large Watermark Logo - Refined Version */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-0 -right-20 md:right-0 w-[400px] md:w-[1000px] h-auto"
          >
            <motion.img
              src="/images/GTSS-logo.png"
              alt=""
              className="w-full h-full object-contain dark:brightness-200"
              animate={{ 
                rotate: [0, 2, 0, -2, 0],
                y: [0, 40, 0, -40, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8 text-center lg:text-left">
              {/* Left content */}
              <div className="flex-1 relative z-10 font-medium">

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800/60 mb-6 mx-auto lg:mx-0"
                >
                  <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600" />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                    Transforming African Tech
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-6 leading-[1.1] text-balance"
                >
                  Building Africa's{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">Digital</span>
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-blue-500/20 to-blue-500/10 dark:from-blue-500/30 dark:to-blue-500/10 -z-0" />
                  </span>
                  <br className="hidden md:block" />
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block md:inline mt-2 md:mt-0">
                    Infrastructure Engine
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mb-8 font-medium leading-relaxed mx-auto lg:mx-0 text-pretty"
                >
                  We design, build, and deploy enterprise-grade software systems
                  that empower businesses and drive sustainable growth across
                  Africa.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                >
                  <Link
                    href="/solutions"
                    className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-blue-500/25 hover:-translate-y-0.5"
                  >
                    Explore Solutions
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 transition-colors flex items-center justify-center"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </div>

              {/* Right stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full sm:w-auto lg:w-80 grid grid-cols-2 gap-3 md:gap-4 mt-8 lg:mt-0"
              >
                {[
                  { value: "50+", label: "Projects Delivered", icon: Rocket },
                  { value: "100+", label: "Business Partners", icon: Building },
                  { value: "24/7", label: "System Uptime", icon: Shield },
                  { value: "∞", label: "Growth Potential", icon: Zap },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-100 dark:border-slate-700/50 flex flex-col items-center lg:items-start text-center lg:text-left"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <stat.icon className="w-4 h-4 text-blue-500" />
                      <div className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ENHANCED CORE PURPOSE: Visual story with better spacing */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4 block">
                  Our Philosophy
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
                  More Than Code, It's{" "}
                  <span className="text-blue-600">Infrastructure</span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                  We build systems that form the backbone of business operations
                  across Africa
                </p>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left side */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    The GTSS Approach
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    We combine technical excellence with deep understanding of
                    local business needs to create software that doesn't just
                    function—it transforms.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "Enterprise-grade reliability for mission-critical operations",
                    "Scalable architecture that grows with your business",
                    "Localized solutions with global best practices",
                    "24/7 support and continuous improvement",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right side - Pillars */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  {
                    title: "Strong Products",
                    desc: "Scalable solutions built for heavy-duty business needs.",
                    icon: Cpu,
                    color: "bg-gradient-to-br from-blue-500 to-blue-600",
                    delay: 0.1,
                  },
                  {
                    title: "Clear Trust",
                    desc: "Transparent operations and systems you can rely on 24/7.",
                    icon: Target,
                    color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
                    delay: 0.2,
                  },
                  {
                    title: "Sustainable Growth",
                    desc: "Long-term value creation for the local tech ecosystem.",
                    icon: Users,
                    color: "bg-gradient-to-br from-purple-500 to-purple-600",
                    delay: 0.3,
                  },
                  {
                    title: "Practical Innovation",
                    desc: "Solving real problems with code that actually works.",
                    icon: Zap,
                    color: "bg-gradient-to-br from-amber-500 to-amber-600",
                    delay: 0.4,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: item.delay }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative h-full p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700/50 overflow-hidden">
                      {/* Icon background */}
                      <div
                        className={`absolute top-4 right-4 w-12 h-12 rounded-xl ${item.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                      />

                      <div className="relative z-10">
                        <div
                          className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      {/* Hover effect line */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ENHANCED TEAM SECTION: Better card layout and hierarchy */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4 block">
                The Builders
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
                Meet the <span className="text-blue-600">Architects</span> of
                Progress
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                The brilliant minds engineering Africa's digital future
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group"
                >
                  <div className="relative h-full bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 transition-all duration-500 hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-700/50 overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />
                    </div>

                    {/* Member header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative flex-shrink-0">
                        <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-slate-100 dark:ring-slate-700 group-hover:ring-blue-500/30 transition-all duration-500">
                          <img
                            src={
                              member.avatar ||
                              `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`
                            }
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 size-4 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-800" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white truncate">
                              {member.name}
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 font-semibold text-xs uppercase tracking-wider mt-1">
                              {member.role}
                            </p>
                          </div>
                          <div className="text-[10px] font-black uppercase px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                            GTSS
                          </div>
                        </div>

                        {/* Expertise tags */}
                        {member.expertise && (
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {member.expertise
                              .slice(0, 3)
                              .map((exp: string, i: number) => (
                                <span
                                  key={i}
                                  className="px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full"
                                >
                                  {exp}
                                </span>
                              ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="relative mb-6">
                      <div className="absolute -left-1 top-0 text-3xl text-slate-200 dark:text-slate-700 font-serif opacity-50">
                        "
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed pl-4 relative z-10">
                        {member.bio ||
                          "Passionate about building scalable systems and solving complex user problems through clean code and innovative solutions."}
                      </p>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-700/50">
                      <div className="flex gap-2">
                        {[
                          {
                            icon: Globe,
                            href: member.portfolioUrl,
                            label: "Portfolio",
                          },
                          {
                            icon: Linkedin,
                            href: member.linkedinUrl,
                            label: "LinkedIn",
                          },
                          {
                            icon: Twitter,
                            href: member.twitterUrl,
                            label: "Twitter",
                          },
                        ].map(
                          (social, i) =>
                            social.href && (
                              <Link
                                key={i}
                                href={social.href}
                                className="p-2 bg-slate-50 dark:bg-slate-700/50 rounded-lg text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300"
                                aria-label={social.label}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <social.icon className="w-4 h-4" />
                              </Link>
                            )
                        )}
                      </div>

                      <div className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                        Joined {member.joinDate || "2023"}
                      </div>
                    </div>

                    {/* Hover accent */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. ENHANCED CTA: More engaging and visually striking */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 p-8 md:p-12">
              {/* Background elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                      <Sparkles className="w-4 h-4 text-white" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        Join the Movement
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                      Ready to Build Africa's Future?
                    </h2>
                    <p className="text-blue-100 text-lg max-w-xl mb-6">
                      Whether you're a developer, investor, or business looking
                      to digitize—let's build something extraordinary together.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/careers"
                      className="group px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02]"
                    >
                      Join Our Team
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="/partnerships"
                      className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300"
                    >
                      Partner With Us
                    </Link>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/20">
                  {[
                    { value: "48h", label: "Response Time" },
                    { value: "100%", label: "Commitment" },
                    { value: "24/7", label: "Support" },
                    { value: "∞", label: "Possibilities" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-black text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-blue-200 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
