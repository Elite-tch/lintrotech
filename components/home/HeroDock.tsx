"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight} from "lucide-react";

const serviceHighlights = [
  { label: "01 Software Engineering", dot: "#3b82f6" },
  { label: "02 Product & UI/UX", dot: "#FF5B22" },
  { label: "03 Brand & Identity", dot: "#8b5cf6" },
  { label: "04 Tech Consulting", dot: "#10b981" },
];

export default function HeroDock() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 580,
        margin: "0 auto",
      }}
    >
      {/* Decorative ambient background glow */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "20%",
          width: "60%",
          height: "60%",
          background: "radial-gradient(circle, rgba(255,91,34,0.18) 0%, rgba(255,91,34,0) 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Main Showcase Container */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-xl)",
          padding: "16px 16px 20px",
          boxShadow: "0 24px 48px -12px rgba(23, 20, 18, 0.12), 0 8px 16px -4px rgba(23, 20, 18, 0.06)",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Browser / Studio window header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "4px 8px 14px",
            borderBottom: "1px solid var(--border-light, rgba(0,0,0,0.06))",
            marginBottom: 14,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <div
                key={c}
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: c,
                }}
              />
            ))}
            <span
              style={{
                marginLeft: 8,
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--muted)",
                letterSpacing: "0.04em",
              }}
            >
              lintrotech.com/workstation
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 8px var(--accent)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                fontWeight: 600,
              }}
            >
              Live Services
            </span>
          </div>
        </div>

        {/* Laptop Display Presentation */}
        <div
          style={{
            position: "relative",
            width: "100%",
            borderRadius: "calc(var(--radius-lg) - 2px)",
            overflow: "hidden",
            background: "#121110",
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.1)",
          }}
        >
          <Image
            src="/hero-laptop-services.jpg"
            alt="Lintrotech Services Laptop - Software Engineering, UI/UX Design, Brand Identity, Technical Consultation"
            width={1200}
            height={675}
            priority
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "cover",
            }}
          />

          {/* Interactive view services button overlay */}
          <Link
            href="/services"
            style={{
              position: "absolute",
              bottom: 14,
              right: 14,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(23, 20, 18, 0.85)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              color: "#ffffff",
              padding: "7px 13px",
              borderRadius: "var(--radius-full)",
              border: "1px solid rgba(255,255,255,0.15)",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.04em",
              textDecoration: "none",
              transition: "transform 0.2s ease, background 0.2s ease",
            }}
          >
            Explore All Services
            <ArrowUpRight size={13} color="var(--accent)" />
          </Link>
        </div>

        {/* Services pill grid underneath */}
        <div
          style={{
            marginTop: 14,
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 8,
          }}
        >
          {serviceHighlights.map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 12px",
                borderRadius: "var(--radius-md)",
                background: "var(--canvas-alt, #faf7f2)",
                border: "1px solid var(--border)",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: s.dot,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--ink)",
                  letterSpacing: "0.02em",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating accent badge — top right */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        style={{
          position: "absolute",
          top: -16,
          right: -16,
          background: "var(--accent)",
          color: "#fff",
          padding: "10px 16px",
          borderRadius: "var(--radius-lg)",
          boxShadow: "0 10px 24px rgba(255,91,34,0.38)",
          zIndex: 3,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            opacity: 0.9,
          }}
        >
          Production Grade
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 700, margin: 0 }}>
          Code → Product
        </p>
      </motion.div>

      {/* Floating bottom-left status chip */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{
          position: "absolute",
          bottom: -14,
          left: -14,
          background: "var(--card)",
          border: "1px solid var(--border)",
          padding: "9px 14px",
          borderRadius: "var(--radius-lg)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#22c55e",
            boxShadow: "0 0 6px rgba(34,197,94,0.6)",
            display: "inline-block",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--body)",
            letterSpacing: "0.03em",
          }}
        >
          Available for new builds
        </span>
      </motion.div>
    </div>
  );
}
