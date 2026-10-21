"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X,  Code2, Layers, Palette, ChevronRight } from "lucide-react";

const coreServices = [
  {
    num: "01",
    icon: <Code2 className="w-5 h-5 text-[#FF5B22]" />,
    title: "Software Engineering",
    short: "Web apps, MVPs, and custom platforms built to production standards with modern full-stack performance.",
    full: "We design and develop digital products from the ground up. Whether you need a complex web application, a rapid MVP to validate your idea, or a custom platform to run your business — we architect and build with performance, scalability, and real-user experience in mind.",
    deliverables: [
      "Web & SaaS application development",
      "MVP & rapid prototype builds",
      "Custom business tools & platforms",
      "API design and third-party integrations",
      "Performance audits & legacy refactors",
    ],
    for: "Startups, founders, and businesses ready to build a real digital product.",
    tag: "EXPLORE WORK",
    image: "/img.jpg",
  },
  {
    num: "02",
    icon: <Layers className="w-5 h-5 text-[#FF5B22]" />,
    title: "Product & UI/UX Design",
    short: "User flow mapping, interactive prototypes, and high-fidelity design systems that turn complex ideas into intuitive software.",
    full: "Good software needs more than functioning features — it needs to feel right. We research user needs, map out experiences, and design interfaces that are clear, functional, and visually consistent. From early wireframes to pixel-perfect UI, we bridge the gap between idea and shipped product.",
    deliverables: [
      "UX research and user flow mapping",
      "Wireframes and interactive prototypes",
      "High-fidelity UI design",
      "Design systems and component libraries",
      "Product discovery and planning sessions",
    ],
    for: "Teams who want to build software people actually enjoy using.",
    tag: "EXPLORE WORK",
    image: "/ui.jpg",
  },
  {
    num: "03",
    icon: <Palette className="w-5 h-5 text-[#FF5B22]" />,
    title: "Brand & Visual Identity",
    short: "Complete visual identities, distinctive logomarks, typography systems, and brand guidelines built for credibility.",
    full: "A brand is more than a logo — it is a system of decisions that communicates who you are before you say a word. We build complete visual identities: from logo systems and brand colors to typography, usage guidelines, and application across your digital touchpoints.",
    deliverables: [
      "Logo design and brand mark systems",
      "Color palettes and typography selection",
      "Brand identity guidelines",
      "Graphic design and marketing materials",
      "Social media and presentation templates",
    ],
    for: "Businesses that want to look serious, credible, and consistent.",
    tag: "EXPLORE WORK",
    image: "/brand.jpg",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState<null | (typeof coreServices)[0]>(null);

  return (
    <>
      <section id="services" className="py-20 lg:py-28 bg-[#F4F0E8] border-b border-[#E7E2D8]">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* ── TOP SECTION (Split 2 Columns matching Section -2.png) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5">
              <p className="font-mono text-xs sm:text-sm tracking-widest uppercase text-[#FF5B22] font-semibold mb-3">
                OUR CAPABILITIES
              </p>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#171717] leading-[1.12] mb-5 tracking-tight">
                Engineered for scale.
                <br />
                Crafted for impact.
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#52525B] leading-relaxed mb-8 max-w-md">
                We bring together the technical and creative expertise needed to take an idea from concept
                to a shipped digital product — without the friction of multiple vendors.
              </p>

              {/* Action Button with Cyan Underlay Offset (matching Section -2.png) */}
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-[#171717] rounded-xl translate-x-[-5px] translate-y-[5px]" />
                <Link
                  href="/contact"
                  className="relative block bg-[#FF5B22] text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-sm hover:opacity-95 transition-opacity"
                >
                  START A PROJECT
                </Link>
              </div>
            </div>

            {/* Right Large Rounded Visual Frame (matching Section -2.png) */}
            <div className="lg:col-span-7">
              <div className="bg-[#D9D9D9] rounded-[32px] w-full min-h-[300px] sm:min-h-[360px] lg:min-h-[400px] overflow-hidden relative shadow-sm border border-black/5 flex items-center justify-center">
                <Image
                  src="/hero-laptop-services.jpg"
                  alt="Lintrotech Showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* ── BOTTOM SECTION (3 Cards Grid matching Section -2.png) ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mt-16 sm:mt-20">
            {coreServices.map((service) => (
              <div key={service.num} className="flex flex-col">
                {/* Visual placeholder / image container with large rounded corners */}
                <div className="bg-[#D9D9D9] rounded aspect-[16/11] w-full overflow-hidden relative mb-5  border border-black/5">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-center"
                  />
                </div>

                {/* Card Title */}
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#171717] mb-2.5 tracking-tight">
                  {service.title}
                </h3>

                {/* Card Description */}
                <p className="font-sans text-sm text-[#52525B] leading-relaxed mb-4 flex-grow">
                  {service.short}
                </p>

                {/* Bottom Link (orange uppercase text) */}
                <button
                  onClick={() => setActive(service)}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#FF5B22] text-left hover:underline cursor-pointer pt-1"
                >
                  <span>{service.tag}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE DETAIL MODAL (Opens on click) ── */}
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200]"
            />

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed bottom-0 left-0 right-0 z-[201] bg-[#FBF8F3] rounded-t-3xl p-6 sm:p-10 max-h-[85vh] overflow-y-auto shadow-2xl border-t border-[#E7E2D8]"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close details"
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#EFECE6] border border-[#E7E2D8] flex items-center justify-center text-[#52525B] hover:text-[#171717] hover:bg-[#E7E2D8] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <div className="mb-3">{active.icon}</div>
                  <h3 className="font-serif text-3xl font-normal tracking-tight text-[#171717] mb-4">
                    {active.title}
                  </h3>
                  <p className="font-sans text-sm text-[#52525B] leading-relaxed">
                    {active.full}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-xs tracking-wider uppercase text-[#8E8E99] font-medium mb-3">
                    What&apos;s included
                  </p>
                  <ul className="space-y-2 mb-6">
                    {active.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 font-sans text-sm text-[#52525B] leading-snug">
                        <span className="w-4 h-4 rounded-full bg-[#FF5B22]/10 border border-[#FF5B22] flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-2 h-2 text-[#FF5B22]" viewBox="0 0 8 6" fill="none">
                            <path
                              d="M1 3L3 5L7 1"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-4 bg-white rounded-xl border border-[#E7E2D8]">
                    <p className="font-mono text-[10px] tracking-wider uppercase text-[#8E8E99] mb-1">
                      Best for
                    </p>
                    <p className="font-sans text-sm font-medium text-[#171717]">
                      {active.for}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
