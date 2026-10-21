"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const principles = [
  { title: "Deliver real value", body: "Every project addresses a genuine business need. We solve problems, not just produce files." },
  { title: "Maintain quality", body: "Software, design, and creative work should meet a professional standard we would be proud to put our name on." },
  { title: "Be direct and clear", body: "We say what something costs, what it includes, and what we cannot do. No ambiguity, no surprises at the end." },
  { title: "Build relationships", body: "Good communication and reliable delivery lead to long-term partnerships — not just transactions." },
  { title: "Grow with demand", body: "We expand our team and capabilities based on real opportunities, not on how large we want to appear." },
  { title: "Think in products", body: "Whether it's a client project or our own, we think about software as something people will use — not just something we will build." },
];

const skills = [
  "Full-stack Web Engineering",
  "Next.js & React",
  "Node.js & APIs",
  "PostgreSQL & Databases",
  "UI/UX Product Design",
  "Design Systems",
  "Brand Identity",
  "Motion Graphics",
  "TypeScript",
  "DevOps & Deployment",
  "Technical Consultation",
  "Agile & Product Thinking",
];

export default function AboutClient() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "80px 0 64px" }}>
        <div className="container w-[90%] mx-auto" >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 16,
              }}
            >
              About the Studio
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 5vw, 72px)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                color: "var(--ink)",
                maxWidth: 720,
                marginBottom: 28,
              }}
            >
              A founder-led studio
              <br />
              with{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                enterprise-grade thinking.
              </em>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "64px 0",
        }}
      >
        <div className="container mx-auto w-[90%]">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 64,
            }}
            className="about-story-grid"
          >
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: 20,
                }}
              >
                The origin
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  color: "var(--body)",
                  lineHeight: 1.75,
                }}
              >
                <p>
                  Lintrotech started from a simple observation: businesses with real potential
                  were being let down by fragmented execution. They hired one person for
                  the website, another for the logo, another for the app — and ended up
                  with something that looked like it was built by three strangers with no
                  shared brief.
                </p>
                <p>
                  Lintrotech was built to fix that. By bringing software engineering,
                  product design, branding, and creative production under one roof, clients
                  get a coordinated partner rather than a vendor list to manage.
                </p>
                <p>
                  Today, Lintrotech operates as a founder-led studio — lean, capable, and
                  focused on the work that actually matters. We work with startups,
                  growing businesses, and ambitious founders who want to build something
                  real and look serious doing it.
                </p>
                <p>
                  Based in Nigeria. Serving clients across Africa and internationally.
                </p>
              </div>

              {/* Skills / Capabilities */}
              <div className="flex flex-wrap gap-2.5 mt-8">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all hover:border-[var(--accent)] hover:text-[var(--ink)]"
                    style={{
                      border: "1px solid var(--border)",
                      borderRadius: "9999px",
                      backgroundColor: "var(--canvas-alt)",
                      color: "var(--body)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right: founder card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div
                className="card"
                style={{
                  padding: 32,
                  position: "sticky",
                  top: 100,
                }}
              >
                {/* Avatar placeholder */}
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--accent), #f97316)",
                    marginBottom: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                    fontFamily: "var(--font-display)",
                    color: "#fff",
                    fontWeight: 400,
                  }}
                >
                  V
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: 4,
                  }}
                >
                  Principal
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    fontSize: 18,
                    color: "var(--ink)",
                    letterSpacing: "-0.02em",
                    marginBottom: 4,
                  }}
                >
                  Studio Founder
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "var(--muted)",
                    marginBottom: 20,
                  }}
                >
                  Software Engineer · Product Designer · Brand Strategist
                </p>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "var(--body)",
                    lineHeight: 1.7,
                    marginBottom: 24,
                  }}
                >
                  Full-cycle engineering and design background, spanning SaaS products,
                  brand systems, and digital platforms across multiple industries.
                  Shipped products used by thousands of users. Designed systems used by
                  engineering teams.
                </p>

                <div
                  style={{
                    marginTop: 24,
                    paddingTop: 20,
                    borderTop: "1px solid var(--border)",
                    display: "flex",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--accent)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    <span className="status-dot" /> Available for projects
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section py-16" style={{ background: "var(--canvas-alt)" }}>
        <div className="container w-[90%] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 28 }}
          >
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
              Studio Principles
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
              }}
            >
              How we operate.
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="card"
                style={{ padding: 24 }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.07em",
                    color: "var(--muted)",
                    marginBottom: 10,
                    textTransform: "uppercase",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    fontSize: 15,
                    color: "var(--ink)",
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "var(--body)",
                    lineHeight: 1.65,
                  }}
                >
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section py-14">
        <div className="container" style={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 4vw, 52px)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                marginBottom: 16,
              }}
            >
              Want to work together?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                color: "var(--body)",
                marginBottom: 32,
              }}
            >
              Tell us what you are building and we will tell you if we are the right fit.
            </p>
            <Link
              href="/contact"
              className="bg-[#0c0908] text-[#F4F0E8] py-3 px-6 rounded-full hover:bg-[#0c0908]/80"
              style={{ display: "inline-flex", gap: 8 }}
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @media (min-width: 860px) {
          .about-story-grid {
            grid-template-columns: 1fr 380px !important;
          }
        }
      `}</style>
    </>
  );
}
