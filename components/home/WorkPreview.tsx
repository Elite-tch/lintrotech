"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export type ProjectItem = {
  id: string;
  title: string;
  category: string;
  tag: string;
  client: string;
  thumb?: string;
  accent?: string;
  image?: string;
  video?: string;
  live?: string;
  summary: string;
  brief: string;
  work?: string;
  approach?: string;
  deliverables?: string[];
  outcome?: string;
  stack: string[];
  featured?: boolean;
};

export const allProjects: ProjectItem[] = [
  {
    id: "inkwell-studio",
    title: "Inkwell Studio",
    category: "Software Engineering",
    tag: "FULLSTACK WEB",
    client: "Dublin Tattoo & Piercing Studio",
    video: "https://res.cloudinary.com/dibwnfwk9/video/upload/v1791786403/galway_psolzj.mp4",
    live: "https://tattoos-studio.vercel.app/",
    thumb: "#121316",
    accent: "#FF5B22",
    summary:
      "A refined, conversion-focused website for a Dublin tattoo and piercing studio, presenting custom artwork, studio services, booking pathways, and location details in an immersive visual experience.",
    brief:
      "The studio needed an evocative, high-converting digital storefront that reflects their artistic craft while making appointment bookings and artist discovery seamless.",
    work: "Built the responsive marketing experience, service discovery and conversion-focused booking journey.",
    approach:
      "Developed a modern, visual-first interactive website with fluid Framer Motion transitions, responsive gallery grids, and a direct inquiry pipeline.",
    deliverables: [
      "Responsive marketing website",
      "Interactive gallery showcase",
      "Service & artist catalog",
      "Booking & inquiry workflows",
      "Mobile-optimized experience",
    ],
    outcome:
      "Elevated brand prestige and streamlined client booking inquiries with immersive visual presentation.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    featured: true,
  },
  {
    id: "mednoris",
    title: "MEDNORIS",
    category: "Software Engineering",
    tag: "HEALTHCARE UX",
    client: "MEDNORIS Health",
    video: "https://res.cloudinary.com/dibwnfwk9/video/upload/v1791789777/Screen_Recording_2026-09-23_172044_wppsek.mp4",
    live: "https://mednoris-web.vercel.app/",
    thumb: "#0b192c",
    accent: "#38bdf8",
    summary:
      "A privacy-first healthcare platform that gives patients ownership of their medical records while enabling secure consultations, verified doctors, and streamlined hospital records management.",
    brief:
      "Healthcare data fragmentation and lack of patient control cause severe delays and privacy vulnerabilities in clinical care.",
    work: "Built the product experience for secure record access, doctor discovery and healthcare workflows.",
    approach:
      "Engineered high-security interface paradigms with strict access permissions, clear doctor discovery cards, and encrypted consultation flows.",
    deliverables: [
      "Patient record ownership portal",
      "Doctor verification & directory",
      "Hospital records workflow UI",
      "Secure consultation interface",
    ],
    outcome:
      "Delivered an institutional-grade, privacy-first healthcare web platform with seamless user flows.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Healthcare UX"],
    featured: true,
  },
  {
    id: "mednoris-waitlist",
    title: "MEDNORIS Waitlist",
    category: "Software Engineering",
    tag: "PRODUCT LAUNCH",
    client: "MEDNORIS Health",
    image: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1791790061/Screenshot_2026-10-12_074405_ogcun1.png",
    live: "https://mednoris-waitlist.vercel.app/",
    thumb: "#0f172a",
    accent: "#0ea5e9",
    summary:
      "A launch-ready waitlist experience for MEDNORIS, introducing patient-controlled records, verified doctor access, and secure permission-based care through a clear, confidence-building product story.",
    brief:
      "Prior to general rollout, MEDNORIS required an impactful landing page and waitlist conversion funnel to educate prospective patients and capture early adopters.",
    work: "Designed and built the responsive launch experience and waitlist conversion flow.",
    approach:
      "Structured a high-trust narrative with interactive feature highlights, social proof indicators, and a low-friction multi-step signup modal.",
    deliverables: [
      "High-conversion launch landing page",
      "Waitlist signup system",
      "Interactive feature storytelling",
      "Responsive design",
    ],
    outcome:
      "Generated significant early interest and waitlist conversions ahead of platform beta launch.",
    stack: ["Next.js", "Tailwind CSS", "Product Design", "Responsive Design"],
    featured: true,
  },
  
  
  
  
];

const featured = allProjects.filter((p) => p.featured);

export default function WorkPreview() {
  return (
    <section className="section py-16">
      <div className="container w-[90%] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 12,
              }}
            >
              Selected Work
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "var(--ink)",
              }}
            >
              What we&apos;ve
              <br />
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>shipped.</em>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="btn btn-secondary inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border)] bg-[var(--canvas)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors text-sm font-medium"
          >
            View All Work <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card group overflow-hidden flex flex-col justify-between border border-[var(--border)] rounded-2xl bg-white transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {/* Media Container */}
              <div className="relative w-full h-[220px] bg-[#0c0d10] overflow-hidden">
                {p.video ? (
                  <video
                    src={p.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-center transition-transform duration-700 group-hover:scale-105"
                  />
                ) : p.image ? (
                  <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                    {/* Ambient blurred backdrop for crisp aspect ratio */}
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      className="object-cover blur-xl opacity-30 scale-110 pointer-events-none"
                    />
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      unoptimized={p.image.startsWith("http")}
                      className="object-contain relative p-2 transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      background: p.thumb || "#121316",
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 120,
                        fontWeight: 400,
                        color: p.accent || "var(--accent)",
                        opacity: 0.15,
                        lineHeight: 1,
                        userSelect: "none",
                      }}
                    >
                      {p.title[0]}
                    </span>
                  </div>
                )}

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

                {/* Category tag pill */}
                <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full border border-[#E7E2D8] shadow-sm">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#171717]">
                    {p.tag}
                  </span>
                </div>

                {/* Live Badge if available */}
                {p.live && (
                  <div className="absolute top-3 right-3 z-10 bg-[#171717]/85 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[10px] uppercase tracking-wider font-medium">LIVE</span>
                  </div>
                )}

                {/* Hover overlay indicator */}
                <div className="absolute inset-0 bg-[#171717]/0 group-hover:bg-[#171717]/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                    <span className="font-sans text-xs font-semibold text-[#171717]">
                      View Case Study
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5B22]" />
                  </div>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "20px 24px 24px" }} className="flex-1 flex flex-col justify-between">
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginBottom: 6,
                    }}
                  >
                    {p.client}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 700,
                      fontSize: 18,
                      color: "var(--ink)",
                      letterSpacing: "-0.02em",
                      marginBottom: 8,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      color: "var(--body)",
                      lineHeight: 1.6,
                      marginBottom: 16,
                    }}
                  >
                    {p.summary}
                  </p>
                </div>

                <div>
                  {/* Stack tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                    {p.stack.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full border border-[var(--border)] bg-[var(--canvas-alt)] text-[11px] font-mono text-[var(--body)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/portfolio#${p.id}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--accent)",
                      transition: "gap 0.2s ease",
                    }}
                    className="hover:gap-2 transition-all"
                  >
                    View Case Study <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
