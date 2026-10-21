"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
const navLinks = [
  
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 0",
        }}
      >
        <div className="md:w-[70%] w-[90%] pr-4"
          style={{
            margin: "24px auto",
            borderRadius: "var(--radius-xl)",
            background: scrolled
              ? "#f3eae1"
              : "#f3eae1",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid var(--border)",
            boxShadow: scrolled ? "var(--shadow-md)" : "none",
            transition:
              "background 0.3s ease, box-shadow 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            
            

          }}
        >
          {/* Logo */}
          <Link href="/" >
          <Image src='/logo.jpg' alt='logo' width={150} height={100} className='rounded-full'/>
           
          </Link>

          {/* Desktop Nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: isActive ? 600 : 500,
                    fontSize: 14,
                    color: isActive ? "var(--ink)" : "var(--body)",
                    padding: "6px 14px",
                    borderRadius: "var(--radius-full)",
                    background: isActive ? "var(--pill)" : "transparent",
                    border: isActive ? "1px solid var(--border)" : "1px solid transparent",
                    transition: "all 0.2s ease",
                    letterSpacing: "-0.01em",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.target as HTMLAnchorElement).style.background = "var(--pill)";
                      (e.target as HTMLAnchorElement).style.color = "var(--ink)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.target as HTMLAnchorElement).style.background = "transparent";
                      (e.target as HTMLAnchorElement).style.color = "var(--body)";
                    }
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* Status pill */}
           
            <Link href="/contact" className="btn btn-primary bg-[#FF5B22] rounded-full text-white" style={{ padding: "8px 18px", fontSize: 13 }}>
              Let&apos;s Talk
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: "none",
                width: 36,
                height: 36,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "var(--radius-sm)",
                background: "var(--pill)",
                border: "1px solid var(--border)",
              }}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              top: 85,
              left: 12,
              right: 12,
              zIndex: 99,
              background: "rgba(251,248,243,0.96)",
              backdropFilter: "blur(20px)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              padding: "20px",
              boxShadow: "var(--shadow-xl)",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  fontSize: 16,
                  color: pathname === link.href ? "var(--accent)" : "var(--ink)",
                  padding: "12px 16px",
                  borderRadius: "var(--radius-md)",
                  background:
                    pathname === link.href
                      ? "rgba(255,91,34,0.06)"
                      : "transparent",
                  border: "1px solid transparent",
                }}
              >
                {link.label}
              </Link>
            ))}
            <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "8px 0" }} />
            <Link href="/contact" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Let&apos;s Talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .status-pill { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>

      {/* Spacer */}
      <div style={{ height: 80 }} />
    </>
  );
}
