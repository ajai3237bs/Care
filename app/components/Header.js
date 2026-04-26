"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/plans", label: "Plans" },
  { href: "/contact", label: "Contact" },
];

function LeafLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <path
        d="M17 3C17 3 5 10 5 21C5 27.6 10.4 33 17 33C23.6 33 29 27.6 29 21C29 10 17 3 17 3Z"
        fill="#8EB69B"
      />
      <path
        d="M17 33V17"
        stroke="#DAF1DE"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M17 23L12 18"
        stroke="#DAF1DE"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M17 23L22 18"
        stroke="#DAF1DE"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: "#0B2B26" }}
      className="sticky top-0 z-50 shadow-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: "72px" }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <LeafLogo />
            <span
              style={{
                fontFamily: "var(--font-lora)",
                color: "#DAF1DE",
                fontSize: "1.25rem",
                fontWeight: "700",
                letterSpacing: "0.03em",
              }}
            >
              Celedon
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: "#8EB69B", fontSize: "0.875rem", fontWeight: "500" }}
                className="hover:text-white transition-colors duration-200"
                onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
                onMouseLeave={(e) => (e.target.style.color = "#8EB69B")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              style={{ color: "#8EB69B", fontSize: "0.875rem", fontWeight: "500" }}
            >
              Talk to Us
            </Link>
            <Link
              href="/plans"
              style={{
                backgroundColor: "#D4956A",
                color: "#ffffff",
                padding: "0.625rem 1.5rem",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: "600",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
              }}
            >
              Explore Plans
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{ color: "#8EB69B", padding: "0.5rem" }}
            className="lg:hidden rounded-lg"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{ backgroundColor: "#051F20", borderTop: "1px solid rgba(255,255,255,0.08)" }}
          className="lg:hidden"
        >
          <div className="px-4 py-5 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: "#DAF1DE", display: "block", padding: "0.75rem 1rem", borderRadius: "0.5rem", fontSize: "0.9rem", fontWeight: "500" }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ paddingTop: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <Link
                href="/contact"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "0.75rem",
                  border: "1px solid #8EB69B",
                  borderRadius: "9999px",
                  color: "#8EB69B",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                }}
                onClick={() => setOpen(false)}
              >
                Talk to Us
              </Link>
              <Link
                href="/plans"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "0.75rem",
                  backgroundColor: "#D4956A",
                  borderRadius: "9999px",
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                }}
                onClick={() => setOpen(false)}
              >
                Explore Plans →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
