"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.257 5.63 5.907-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const engagements = [
  "Web / Mobile App Development",
  "UI/UX Product Design",
  "Brand & Visual Identity",
  "MVP Sprint",
  "Technical Consultation",
  "Motion & Creative Content",
  "Other",
];

export default function ContactClient() {
  const [selected, setSelected] = useState<string[]>([]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const toggle = (item: string) =>
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          selected,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send enquiry. Please try again.");
      }

      setStatus("sent");
    } catch (err: unknown) {
      console.error(err);
      setStatus("idle");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <>
      {/* Header */}
      <section style={{ padding: "80px 0 0" }}>
        <div className="container w-[90%] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: 560 }}
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
              Get in Touch
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 5vw, 64px)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.08,
                color: "var(--ink)",
                marginBottom: 20,
              }}
            >
              Let&apos;s build something
              <br />
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                worth shipping.
              </em>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                color: "var(--body)",
                lineHeight: 1.7,
              }}
            >
              Tell us what you are working on. We&apos;ll respond within one business
              day with whether we are the right fit and what a next step could look like.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ padding: "64px 0 100px" }}>
        <div className="container mx-auto w-[90%]">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 64,
              alignItems: "flex-start",
            }}
            className="contact-grid"
          >
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    background: "#f3eae1",
                    border: "#f3eae1",
                    borderRadius: "var(--radius-xl)",
                    padding: 48,
                    textAlign: "center",
                  }}
                >
                  <CheckCircle2
                    size={40}
                    style={{ color: "var(--accent)", margin: "0 auto 16px" }}
                  />
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 28,
                      fontWeight: 400,
                      color: "var(--ink)",
                      marginBottom: 8,
                    }}
                  >
                    Message received.
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      color: "var(--body)",
                    }}
                  >
                    We&apos;ll be in touch within one business day. Looking forward to it.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: 20,
                    }}
                    className="form-cols"
                  >
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        style={{
                          display: "block",
                          fontFamily: "var(--font-mono)",
                          fontSize: 10,
                          letterSpacing: "0.07em",
                          textTransform: "uppercase",
                          color: "var(--muted)",
                          marginBottom: 8,
                        }}
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          fontFamily: "var(--font-body)",
                          fontSize: 15,
                          color: "var(--ink)",
                          
                          border: "1px solid var(--border)",
                          borderRadius: "var(--radius-md)",
                          outline: "none",
                          transition: "border-color 0.2s ease",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        style={{
                          display: "block",
                          fontFamily: "var(--font-mono)",
                          fontSize: 10,
                          letterSpacing: "0.07em",
                          textTransform: "uppercase",
                          color: "var(--muted)",
                          marginBottom: 8,
                        }}
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          fontFamily: "var(--font-body)",
                          fontSize: 15,
                          color: "var(--ink)",
                         
                          border: "1px solid var(--border)",
                          borderRadius: "var(--radius-md)",
                          outline: "none",
                          transition: "border-color 0.2s ease",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                      />
                    </div>
                  </div>

                  {/* What are you looking to build */}
                  <div style={{ marginTop: 20 }}>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        letterSpacing: "0.07em",
                        textTransform: "uppercase",
                        color: "var(--muted)",
                        marginBottom: 10,
                      }}
                    >
                      What do you need?
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {engagements.map((e) => {
                        const on = selected.includes(e);
                        return (
                          <button
                            key={e}
                            type="button"
                            onClick={() => toggle(e)}
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: 13,
                              fontWeight: 500,
                              padding: "7px 14px",
                              borderRadius: "var(--radius-full)",
                              border: on
                                ? "1px solid var(--accent)"
                                : "1px solid var(--border)",
                              background: on
                                ? "rgba(255,91,34,0.08)"
                                : "var(--pill)",
                              color: on ? "var(--accent)" : "var(--body)",
                              cursor: "pointer",
                              transition: "all 0.18s ease",
                            }}
                          >
                            {e}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div style={{ marginTop: 20 }}>
                    <label
                      htmlFor="contact-message"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        letterSpacing: "0.07em",
                        textTransform: "uppercase",
                        color: "var(--muted)",
                        marginBottom: 8,
                      }}
                    >
                      Tell us more
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Describe what you are building, where you are in the process, and what outcome you are looking for..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        fontFamily: "var(--font-body)",
                        fontSize: 15,
                        color: "var(--ink)",
                        
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius-md)",
                        outline: "none",
                        resize: "vertical",
                        transition: "border-color 0.2s ease",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-[var(--accent)] w-[50%] mx-auto flex justify-center items-center text-white  py-3 px-6 rounded-full cursor-pointer hover:bg-[var(--accent-hover)] transition-colors"
                    style={{
                      marginTop: 24,
                      justifyContent: "center",
                      opacity: status === "sending" ? 0.7 : 1,
                      gap: 8,
                    }}
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
                        Sending...
                      </>
                    ) : (
                      "Send Enquiry"
                    )}
                  </button>

                  {errorMessage && (
                    <p
                      style={{
                        marginTop: 16,
                        fontFamily: "var(--font-body)",
                        fontSize: 14,
                        color: "#ef4444",
                        textAlign: "center",
                        background: "rgba(239,68,68,0.08)",
                        padding: "10px 16px",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid rgba(239,68,68,0.2)",
                      }}
                    >
                      {errorMessage}
                    </p>
                  )}
                </form>
              )}
            </motion.div>

            {/* Right: Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ display: "flex", flexDirection: "column", gap: 24 }}
            >
              {/* Direct contact */}
              <div
                className="card"
                style={{ padding: 28 }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: 16,
                  }}
                >
                  Direct Contact
                </p>
                <a
                  href="mailto:hello.lintrotechteam@gmail.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--ink)",
                    marginBottom: 20,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--ink)")}
                >
                  <Mail size={18} style={{ color: "var(--accent)" }} />
                  hello.lintrotechteam@gmail.com
                </a>

                <div style={{ display: "flex", gap: 8 }}>
                  {[
                    { icon: <GithubIcon />, href: "https://github.com", label: "GitHub" },
                    { icon: <LinkedinIcon />, href: "https://linkedin.com", label: "LinkedIn" },
                    { icon: <XIcon />, href: "https://twitter.com", label: "Twitter" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: "var(--radius-sm)",
                        background: "var(--pill)",
                        border: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--body)",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
                        (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                        (e.currentTarget as HTMLAnchorElement).style.color = "var(--body)";
                      }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

             

              {/* What to expect */}
              <div className="card" style={{ padding: 24 }}>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: 14,
                  }}
                >
                  What happens next
                </p>
                {[
                  "We review your enquiry and reply within 1 business day.",
                  "We schedule a 30-minute discovery call at no cost.",
                  "If there's a fit, we send a proposal with scope and pricing.",
                  "You decide. No pressure, no commitment until you sign.",
                ].map((step, i) => (
                  <div
                    key={step}
                    style={{
                      display: "flex",
                      gap: 12,
                      marginBottom: i < 3 ? 12 : 0,
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "var(--accent)",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        fontWeight: 500,
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      {i + 1}
                    </span>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 13,
                        color: "var(--body)",
                        lineHeight: 1.55,
                      }}
                    >
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr 380px !important;
          }
        }
        @media (min-width: 520px) {
          .form-cols {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
