"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Check, MessageCircle, ArrowUpRight, ExternalLink, Sparkles, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type PortfolioItem = {
  id: string;
  title: string;
  category: "Software Engineering" | "Product & UI/UX Design" | "Brand & Visual Identity";
  tag: string;
  client: string;
  image?: string;
  video?: string;
  live?: string;
  role?: string;
  summary: string;
  brief: string;
  approach: string;
  deliverables: string[];
  outcome: string;
  stack: string[];
  isComingSoon?: boolean;
};

const portfolioItems: PortfolioItem[] = [
  // ── SOFTWARE / FULLSTACK PROJECTS ──
  {
    id: "inkwell-studio",
    title: "Inkwell Studio",
    category: "Software Engineering",
    tag: "FULLSTACK WEB",
    client: "Dublin Tattoo & Piercing Studio",
    video: "https://res.cloudinary.com/dibwnfwk9/video/upload/v1791786403/galway_psolzj.mp4",
    live: "https://tattoos-studio.vercel.app/",
    role: "Built the responsive marketing experience, service discovery and conversion-focused booking journey.",
    summary:
      "A refined, conversion-focused website for a Dublin tattoo and piercing studio, presenting custom artwork, studio services, booking pathways, gallery content, and location details in an immersive visual experience.",
    brief:
      "The client required an evocative, visually driven web presence that captures the raw artistic ethos of their studio while giving prospective clients a smooth, friction-free booking and gallery browsing flow.",
    approach:
      "Engineered an editorial dark-themed web experience using Next.js and Tailwind CSS with fluid Framer Motion micro-interactions, responsive high-resolution visual showcases, and strategic call-to-actions.",
    deliverables: [
      "Responsive marketing web application",
      "Interactive tattoo & piercing gallery",
      "Conversion-optimized booking flows",
      "Artist profile & studio showcase",
      "Mobile-first performance optimization",
    ],
    outcome:
      "Delivered a striking, high-conversion studio portal with rapid page speeds and seamless mobile navigation.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
  },
  {
    id: "mednoris",
    title: "MEDNORIS",
    category: "Software Engineering",
    tag: "HEALTHCARE UX & WEB",
    client: "MEDNORIS Health",
    video: "https://res.cloudinary.com/dibwnfwk9/video/upload/v1791789777/Screen_Recording_2026-09-23_172044_wppsek.mp4",
    live: "https://mednoris-web.vercel.app/",
    role: "Built the product experience for secure record access, doctor discovery and healthcare workflows.",
    summary:
      "A privacy-first healthcare platform that gives patients ownership of their medical records while enabling secure consultations, verified doctors, and streamlined hospital records management.",
    brief:
      "Healthcare records are notoriously fragmented and difficult for patients to control. MEDNORIS needed an institutional-grade yet intuitive web platform that prioritizes patient autonomy, HIPAA/privacy standards, and verified clinical interactions.",
    approach:
      "Built structured dashboard interfaces for patients and practitioners with permission-gated medical record viewers, clean doctor profile search, and responsive telehealth scheduling modules.",
    deliverables: [
      "Patient record ownership portal",
      "Verified doctor discovery directory",
      "Hospital records management workflow",
      "Secure patient consultation UI",
      "Comprehensive TypeScript component system",
    ],
    outcome:
      "Delivered a production-ready healthcare interface that balances high-security compliance with frictionless patient usability.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Healthcare UX"],
  },
  {
    id: "mednoris-waitlist",
    title: "MEDNORIS Waitlist",
    category: "Software Engineering",
    tag: "PRODUCT LAUNCH",
    client: "MEDNORIS Health",
    image: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1791790061/Screenshot_2026-10-12_074405_ogcun1.png",
    live: "https://mednoris-waitlist.vercel.app/",
    role: "Designed and built the responsive launch experience and waitlist conversion flow.",
    summary:
      "A launch-ready waitlist experience for MEDNORIS, introducing patient-controlled records, verified doctor access, and secure permission-based care through a clear, confidence-building product story.",
    brief:
      "Ahead of the core platform rollout, MEDNORIS needed a high-impact launch page to build momentum, collect prospective user signups, and validate clinical interest.",
    approach:
      "Designed a confidence-building narrative architecture that communicates security, verified physician access, and patient autonomy with immediate signup forms and real-time validation.",
    deliverables: [
      "Responsive launch landing page",
      "High-conversion waitlist capture workflow",
      "Interactive feature storytelling cards",
      "Trust & security badge integrations",
      "Mobile-optimized responsive layout",
    ],
    outcome:
      "Successfully launched to capture early platform interest with high signup conversion rates.",
    stack: ["Next.js", "Tailwind CSS", "Product Design", "Responsive Design"],
  },
  {
    id: "nsukka-legends-fa",
    title: "Nsukka Legends FA",
    category: "Software Engineering",
    tag: "SPORTS PORTAL",
    client: "Nsukka Legends Football Academy",
    video: "/nsukka.mp4",
    live: "https://www.nsukkalegendsfa.com/",
    role: "Designed and built the responsive web portal, team profiles, and match reporting system.",
    summary:
      "Nsukka Legends Football Academy is a youth-focused football academy promoting athletic development and sports education. The site was created to share match updates, display team profiles, and communicate the academy vision.",
    brief:
      "The academy needed a credible, professional digital home to showcase talent to scouts, post fixture results, and attract enrollment for youth training camps.",
    approach:
      "Engineered an energetic athletic web portal featuring team rosters, match fixture logs, and registration forms integrated with Firebase backend services.",
    deliverables: [
      "Official academy web portal",
      "Match fixtures & live scores display",
      "Player roster & team profiles",
      "Youth player registration pipeline",
      "Firebase database integration",
    ],
    outcome:
      "Expanded academy visibility and provided scouts and parents with reliable match updates and registration.",
    stack: ["Next.js", "CSS", "Tailwind CSS", "Firebase"],
  },

  // ── BRAND & VISUAL IDENTITY ──
 
  {
    id: "pens-food-day",
    title: "World Food Day Campaign",
    category: "Brand & Visual Identity",
    tag: "SOCIAL MEDIA",
    client: "PENS Community",
    image: "/photo_2026-10-20_17-47-09.jpg",
    summary:
      "World Food Day awareness graphic for PENS Community — a creative organisation.",
    brief:
      "PENS Community needed a compelling social media graphic for World Food Day that matched their brand and drove engagement.",
    approach:
      "Built around a dramatic food photography hero image, bold serif typography, and the PENS brand mark. High contrast dark background makes the content pop in a social feed.",
    deliverables: [
      "World Food Day social media graphic",
      "On-brand typography treatment",
      "PENS brand mark integration",
    ],
    outcome:
      "Delivered on-brand graphic ready for publish across all social platforms.",
    stack: ["Photoshop", "Illustrator"],
  },
  {
    id: "pens-poverty-day",
    title: "Eradication of Poverty Day",
    category: "Brand & Visual Identity",
    tag: "SOCIAL MEDIA",
    client: "PENS Community",
    image: "/photo_2026-10-20_17-47-13.jpg",
    summary:
      "International Day for the Eradication of Poverty awareness campaign graphic.",
    brief:
      "PENS Community needed an emotionally resonant graphic for this international awareness day, consistent with their identity.",
    approach:
      "Used a black-and-white editorial photography approach with an orange accent callout block — balancing emotional weight with clear message delivery and strong brand presence.",
    deliverables: [
      "Poverty Day campaign graphic",
      "Emotional editorial layout",
      "Orange accent callout treatment",
    ],
    outcome:
      "Delivered impactful awareness graphic maintaining PENS brand consistency.",
    stack: ["Photoshop", "Illustrator"],
  },
  {
    id: "pens-earth-day",
    title: "World Earth Day Campaign",
    category: "Brand & Visual Identity",
    tag: "SOCIAL MEDIA",
    client: "PENS Community",
    image: "/photo_2026-10-20_17-47-17.jpg",
    summary:
      "World Earth Day social media graphic for PENS Community with bold green visual identity.",
    brief:
      "PENS Community needed a vibrant Earth Day graphic that felt energetic and optimistic while carrying their brand.",
    approach:
      "Anchored by a globe-in-nature concept image, the design uses a bold green pill CTA bar and clean typographic hierarchy to deliver the message clearly even at small social media sizes.",
    deliverables: [
      "Earth Day social media graphic",
      "Green colour palette treatment",
      "Bold typographic hierarchy",
    ],
    outcome:
      "Delivered energetic, on-brand Earth Day graphic ready for all platforms.",
    stack: ["Photoshop", "Canva Pro"],
  },

  // ── PRODUCT & UI/UX DESIGN (COMING SOON) ──
  
];

const categories = ["All", "Software Engineering", "Product & UI/UX Design", "Brand & Visual Identity"] as const;

export default function WorkPage() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<PortfolioItem | null>(null);

  const filtered =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-[var(--canvas)] text-[#171717] pt-8 pb-0">
      {/* ── HEADER ── */}
      <section className="py-14 border-b border-[#E7E2D8]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="font-mono text-xs tracking-widest uppercase text-[#FF5B22] font-semibold mb-3">
            PORTFOLIO & CASE STUDIES
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#171717] leading-[1.1] mb-5">
            Selected works,{" "}
            <em className="italic text-[#FF5B22]">built to ship.</em>
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#52525B] leading-relaxed max-w-2xl mx-auto mb-8">
            A curated collection of web applications, product engineering,
            and brand identities delivered from concept to live production.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-tight transition-all cursor-pointer ${
                  filter === cat
                    ? "bg-[#171717] text-white shadow-sm"
                    : "bg-[#EFECE6] border border-[#E7E2D8] text-[#52525B] hover:text-[#171717] hover:bg-[#E7E2D8]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CARD GRID ── */}
      <section className="py-14 sm:py-20 px-6 md:px-10 max-w-[1300px] mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.35, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActive(item)}
                className="group cursor-pointer bg-whit rounded border border-[#E7E2D8] overflow-hidden shadow transition-all duration-300 flex flex-col justify-between"
              >
                {/* Media Preview Box */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#121316]">
                  {/* Video Preview */}
                  {item.video ? (
                    <div className="relative w-full h-full bg-[#0a0a0c]">
                      <video
                        src={item.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-center opacity-90 group-hover:opacity-100 transition-all duration-500"
                      />
                      
                    </div>
                  ) : item.image ? (
                    <div className="relative w-full h-full bg-[#0e0f12] overflow-hidden flex items-center justify-center">
                      {/* Ambient background glow preserving true proportions without harsh empty letterboxes */}
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-cover blur-xl opacity-35 scale-110 pointer-events-none"
                      />
                      {/* True unsqueezed image */}
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        unoptimized={item.image.startsWith("http")}
                        className="object-contain relative z- p-2 group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>
                  ) : item.isComingSoon ? (
                    <div className="w-full h-full bg-gradient-to-br from-[#1C1D22] via-[#22242B] to-[#17181D] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                      {/* Subtle decorative background pattern */}
                      <div className="absolute inset-0 bg-[radial-gradient(#FF5B22_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
                      
                      <div className="relative z-10 w-12 h-12 rounded-2xl bg-[#FF5B22]/15 border border-[#FF5B22]/30 flex items-center justify-center mb-3 text-[#FF5B22]">
                        <Clock className="w-6 h-6 animate-pulse" />
                      </div>
                      <span className="relative z-10 font-mono text-xs uppercase tracking-widest text-[#FF5B22] font-semibold mb-1">
                        In Production
                      </span>
                      <p className="relative z-10 font-sans text-xs text-white/60 max-w-xs">
                        Confidential Client Work · Dropping Soon
                      </p>
                    </div>
                  ) : null}

                  {/* Tag Overlay */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1  rounded-full border border-[#E7E2D8] shadow-sm">
                    <span className="font-mono text-[10px] font-semibold uppercase flex items-center justify-center tracking-wider text-[#171717]">
                      {item.tag}
                    </span>
                  </div>

                  {/* Live Badge if available */}
                  {item.live && (
                    <div className="absolute top-3 right-3 bg-[#171717]/85 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1 text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-mono text-[10px] uppercase tracking-wider font-medium">LIVE</span>
                    </div>
                  )}

                  {/* Hover indicator */}
                  <div className="absolute inset-0 bg-[#171717]/0 group-hover:bg-[#171717]/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                      <span className="font-sans text-xs font-semibold text-[#171717]">
                        {item.isComingSoon ? "Learn More" : "View Details"}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5B22]" />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#FF5B22] font-semibold mb-1.5">
                      {item.category} · {item.client}
                    </p>
                    <h3 className="font-serif text-2xl text-[#171717] font-normal leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-[#52525B] leading-relaxed line-clamp-2">
                      {item.summary}
                    </p>
                  </div>

                  {/* Footer / Tech stack */}
                  <div className="pt-4 border-t border-[#F0ECE1] mt-4 flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex flex-wrap gap-1.5">
                      {item.stack.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 bg-[#EFECE6] border border-[#E7E2D8] rounded-full text-[10px] font-mono font-medium text-[#52525B]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {item.live && (
                      <span className="inline-flex items-center gap-1 text-xs font-mono font-medium text-[#FF5B22] group-hover:underline">
                        <span>Visit Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-sans text-[#8E8E99] text-sm">No projects in this category yet.</p>
          </div>
        )}
      </section>

      {/* ── PROJECT DETAIL MODAL ── */}
      <AnimatePresence>
        {active && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="fixed inset-0 bg-black/60  backdrop-blur-sm z-[200]"
            />

            {/* Modal Panel */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-auto w-[90%] sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 bottom-0 top-0 sm:bottom-auto sm:top-[5vh] z-[201] w-full sm:w-[90vw] max-w-3xl bg-[#FBF8F3] md:rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#E7E2D8] md:max-h-[92vh] sm:max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#EFECE6]/90 backdrop-blur-md border border-[#E7E2D8] flex items-center justify-center text-[#52525B] hover:text-[#171717] hover:bg-[#E7E2D8] transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Media Showcase */}
              <div className="relative w-full bg-[#0a0a0c]">
                {active.video ? (
                  <div className="w-full relative aspect-[16/9] max-h-[420px] bg-black">
                    <video
                      src={active.video}
                      controls
                      autoPlay
                      loop
                      playsInline
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : active.image ? (
                  <div className="relative w-full min-h-[300px] sm:min-h-[380px] max-h-[480px] aspect-[4/3] sm:aspect-[16/10] bg-[#0c0d10] flex items-center justify-center overflow-hidden">
                    {/* Ambient backdrop glow */}
                    <Image
                      src={active.image}
                      alt=""
                      fill
                      className="object-cover blur-2xl opacity-30 scale-110 pointer-events-none"
                    />
                    <Image
                      src={active.image}
                      alt={active.title}
                      fill
                      unoptimized={active.image.startsWith("http")}
                      className="object-contain relative z-10 p-4"
                    />
                  </div>
                ) : active.isComingSoon ? (
                  <div className="w-full h-56 bg-gradient-to-br from-[#1C1D22] via-[#22242B] to-[#17181D] flex flex-col items-center justify-center text-center p-6">
                    <Sparkles className="w-10 h-10 text-[#FF5B22] mb-3 animate-pulse" />
                    <h3 className="font-serif text-2xl text-white font-normal mb-1">
                      Case Study In Progress
                    </h3>
                    <p className="font-sans text-xs text-white/70 max-w-sm">
                      Full interactive prototype and UX breakdown launching shortly.
                    </p>
                  </div>
                ) : null}

                {/* Tag pill */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-[#E7E2D8] z-10">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#171717]">
                    {active.tag}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                {/* Header row with Title & Live button */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-[#FF5B22] font-semibold mb-1">
                      {active.category} · {active.client}
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#171717] font-normal leading-tight">
                      {active.title}
                    </h2>
                  </div>

                  {active.live && (
                    <a
                      href={active.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171717] text-white hover:bg-[#FF5B22] transition-colors font-sans text-xs font-semibold shrink-0"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <p className="font-sans text-sm sm:text-base text-[#52525B] leading-relaxed mb-6 border-b border-[#E7E2D8] pb-6">
                  {active.summary}
                </p>

                {/* Role / Contribution highlight */}
                {active.role && (
                  <div className="mb-8 p-4 bg-[#F4F0E8] rounded-xl border border-[#E7E2D8]">
                    <p className="font-mono text-[10px] tracking-wider uppercase text-[#FF5B22] mb-1 font-semibold">
                      Role & Contribution
                    </p>
                    <p className="font-sans text-sm font-medium text-[#171717]">
                      {active.role}
                    </p>
                  </div>
                )}

                {/* Two-column detail grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Left: Brief & Approach */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#FF5B22] mb-2">
                        The Brief
                      </h4>
                      <p className="font-sans text-sm text-[#52525B] leading-relaxed">
                        {active.brief}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#FF5B22] mb-2">
                        The Approach
                      </h4>
                      <p className="font-sans text-sm text-[#52525B] leading-relaxed">
                        {active.approach}
                      </p>
                    </div>
                  </div>

                  {/* Right: Deliverables, Outcome, Stack */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#FF5B22] mb-3">
                        Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {active.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2.5 font-sans text-sm text-[#52525B] leading-snug"
                          >
                            <span className="w-4 h-4 rounded-full bg-[#FF5B22]/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-[#FF5B22] stroke-[3]" />
                            </span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-[#F4F0E8] rounded-xl border border-[#E7E2D8]">
                      <p className="font-mono text-[10px] tracking-wider uppercase text-[#68686d] mb-1 font-semibold">
                        Impact & Result
                      </p>
                      <p className="font-sans text-sm font-semibold text-[#171717]">
                        {active.outcome}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#FF5B22] mb-3">
                        Stack & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {active.stack.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 bg-[#EFECE6] border border-[#E7E2D8] rounded-full text-xs font-mono font-medium text-[#171717]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── CTA SECTION ── */}
      <section className="py-20 md:py-24 bg-[#F4F0E8] border-t border-[#E7E2D8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-mono text-xs tracking-widest uppercase text-[#FF5B22] mb-4 font-semibold">
            READY TO BUILD?
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight text-[#171717] mb-5">
            Let&apos;s build something
            <br />
            <em className="text-[#FF5B22] italic">worth shipping.</em>
          </h2>
          <p className="font-sans text-base text-[#52525B] max-w-md mx-auto mb-9 leading-relaxed">
            Tell us what you are working on — a new web application, a redesign,
            or an end-to-end brand system.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FF5B22] text-white font-sans font-semibold text-sm tracking-tight transition-all duration-200 hover:bg-[#E64B14] hover:shadow-lg hover:shadow-[#FF5B22]/25 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              Start a Conversation
            </Link>
            <Link
              href="/"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-[#EFECE6] border border-[#E7E2D8] text-[#171717] font-sans font-semibold text-sm tracking-tight transition-all duration-200 hover:bg-[#E7E2D8] hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
