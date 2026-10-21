"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import ServicesSection from "@/components/home/ServicesSection";
import WorkPreview from "@/components/home/WorkPreview";
import ApproachSection from "@/components/home/ApproachSection";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="min-h-[85vh] flex flex-col justify-center pt-12 sm:pt-24 lg:pt-16 pb-10 lg:pb-20 overflow-hidden relative">
        <div className="max-w-[95%] mx-auto px-6 md:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-cente">
            {/* Left: Copy & CTAs */}
            <div className="lg:col-span-5 xl:col-span-6">
              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-[#171717] mb-6"
              >
                We engineer
                <br />
                software, design
                <br />
                <em className="italic text-[#FF5B22]">products & brands.</em>
              </motion.h1>

              {/* Sub-copy */}
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="font-sans text-base sm:text-lg text-[#52525B] leading-relaxed mb-8 max-w-"
              >
                A technology and creative studio. We take ideas from concept to
                shipped product, combining full-stack engineering, UI/UX design,
                brand identity, and creative execution in one coordinated team.
              </motion.p>

              {/* Metrics strip */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="flex flex-wrap gap-8 sm:gap-10 mb-8"
              >
                {[
                  { value: "12+", label: "Projects Shipped" },
                  { value: "4", label: "Industries Served" },
                  { value: "100%", label: "Ownership of Outcomes" },
                ].map((m) => (
                  <div key={m.label}>
                    <p className="font-serif text-3xl sm:text-4xl font-normal text-[#171717] leading-none mb-1">
                      {m.value}
                    </p>
                    <p className="font-mono text-xs tracking-wider uppercase text-[#8E8E99]">
                      {m.label}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={4}
                className="flex flex-wrap gap-3.5"
              >
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FF5B22] text-white font-sans font-semibold text-sm tracking-tight transition-all duration-200 hover:bg-[#E64B14] hover:shadow-lg hover:shadow-[#FF5B22]/25 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  See Our Work <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3.5 rounded-full bg-[#EFECE6] border border-[#E7E2D8] text-[#171717] font-sans font-semibold text-sm tracking-tight transition-all duration-200 hover:bg-[#E7E2D8] hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  Work With Us
                </Link>
              </motion.div>
            </div>

            {/* Right: hero1.jpg showcase image (enlarged) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
              className="lg:col-span-6 xl:col-span-6 relative  overflow-visible"
            >
              <div className="relative w-full h-[300px] sm:h-[450px] lg:h-[450px] xl:h-[480px] flex items-center justify-center">
                <Image
                  src="/hero2.jpg"
                  alt="Lintrotech Services - Software Engineering, UI/UX Design, Brand Identity"
                  fill
                  priority
                  className="object-contain scale-110 sm:scale-115 lg:scale-80 xl:scale-90 origin-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ticker strip */}
      <div className="border-y border-[#E7E2D8] bg-[#171717] py-3.5 overflow-hidden relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap w-max"
        >
          {Array(4)
            .fill(null)
            .map((_, i) =>
              [
                "Software Engineering",
                "✦",
                "UI/UX Design",
                "✦",
                "Brand & Identity",
                "✦",
                "Motion & Creative",
                "✦",
                "Technical Consultation",
                "✦",
              ].map((t, j) => (
                <span
                  key={`${i}-${j}`}
                  className={`font-mono text-xs tracking-widest uppercase ${t === "✦" ? "text-[#FF5B22]" : "text-white/70"
                    }`}
                >
                  {t}
                </span>
              ))
            )}
        </motion.div>
      </div>

      {/* Services */}
      <ServicesSection />

      {/* Work preview */}
      <WorkPreview />

      {/* Approach */}
      <ApproachSection />

      {/* CTA Banner */}
      <section className="py-16 md:py-16 bg-[#F4F0E8] border-t border-[#E7E2D8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-xs tracking-widest uppercase text-[#FF5B22] mb-4 font-medium">
              Ready to build?
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight text-[#171717] mb-5">
              Let&apos;s build something
              <br />
              <em className="text-[#FF5B22] italic">worth shipping.</em>
            </h2>
            <p className="font-sans text-base text-[#52525B] max-w-md mx-auto mb-9 leading-relaxed">
              Tell us what you are working on — a new product, a redesign, a
              brand, or a technical problem that needs a serious solution.
            </p>
            <div className="flex flex-wrap gap-3.5 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FF5B22] text-white font-sans font-semibold text-sm tracking-tight transition-all duration-200 hover:bg-[#E64B14] hover:shadow-lg hover:shadow-[#FF5B22]/25 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                Start a Conversation
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center px-6 py-3.5 rounded-full bg-[#EFECE6] border border-[#E7E2D8] text-[#171717] font-sans font-semibold text-sm tracking-tight transition-all duration-200 hover:bg-[#E7E2D8] hover:-translate-y-0.5 active:scale-[0.98]"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
