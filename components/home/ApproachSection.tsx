"use client";

import { motion } from "framer-motion";

const principles = [
  {
    num: "01",
    title: "Start with the problem, not the deliverable.",
    body: "Every engagement begins with understanding the actual business goal. We don't accept a brief at face value — we ask why, until the real opportunity is clear.",
  },
  {
    num: "02",
    title: "Engineering and design from the same brief.",
    body: "We don't pass wireframes over a wall to a developer. Design and engineering work from the same understanding — which means fewer surprises and faster delivery.",
  },
  {
    num: "03",
    title: "Ship something real, then make it excellent.",
    body: "We move fast by making disciplined decisions early. Getting a working product in front of real users is worth more than six months of internal iteration.",
  },
];

export default function ApproachSection() {
  return (
    <section
      className="section py-20"
      style={{ background: "var(--ink)", color: "#fff", overflow: "hidden" }}
    >
      <div className="container w-[90%] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 34 }}
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
            How we work
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#fff",
              maxWidth: 520,
            }}
          >
            Not a vendor.
            <br />
            <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.5)" }}>
              A delivery partner.
            </em>
          </h2>
        </motion.div>

        {/* Principles */}
        <div className="flex flex-col md:flex-row gap-10">
          {principles.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "grid",
                gridTemplateColumns: "50px 1fr",
                gap: 0,
                padding: "32px 0",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                alignItems: "flex-start",
              }}
              className="approach-row"
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.06em",
                  paddingTop: 4,
                }}
              >
                {p.num}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(20px, 2.5vw, 28px)",
                    fontWeight: 400,
                    color: "#fff",
                    marginBottom: 10,
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.7,
                    maxWidth: 560,
                  }}
                >
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
          
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 32 }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(18px, 2vw, 24px)",
                color: "rgba(255,255,255,0.4)",
                maxWidth: 640,
              }}
            >
              &ldquoThe services are the engine. The product is the destination. We care
              about both — and we always tell you which one is which.&ldquo
            </p>
          </div>
      </div>
    </section>
  );
}
