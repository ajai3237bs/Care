"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/plans", label: "Plans" },
];

function LeafLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <path
        d="M17 3C17 3 5 10 5 21C5 27.6 10.4 33 17 33C23.6 33 29 27.6 29 21C29 10 17 3 17 3Z"
        fill="#8EB69B"
      />
      <path d="M17 33V17" stroke="#DAF1DE" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M17 23L12 18" stroke="#DAF1DE" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M17 23L22 18" stroke="#DAF1DE" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 🔥 Hide / Show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ${showHeader ? "top-4 opacity-100" : "-top-24 opacity-0"
        }`}
    >
      {/* Pill Container */}
      <div
        className="w-[95%] max-w-7xl rounded-full px-6"
        style={{
          background: "rgba(11,43,38,0.55)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(142,182,155,0.2)",
          boxShadow:
            "0 8px 30px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        <div className="flex items-center justify-between h-[72px]">

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
              CELEDON
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#8EB69B] text-lg text-white font-medium hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button href="/contact" variant="ghost" size="lg" showArrow={false}>
              Talk To Us
            </Button>

            <Button
              href="/authentication/login" size="lg" className="bg-[#C8A96A] hover:bg-[#b89655]" showArrow={false}>
              Login
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[#8EB69B] p-2 rounded-lg"
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
        <div className="absolute top-[90px] w-[95%] max-w-7xl">
          <div
            style={{
              backgroundColor: "#051F20",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "1rem",
            }}
            className="lg:hidden px-4 py-5 space-y-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-[#DAF1DE] px-4 py-3 rounded-lg text-lg font-medium hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <Button
                href="/contact"
                variant="secondary"
                size="sm"
                showArrow={false}
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Talk to Us
              </Button>

              <Button
                href="/plans"
                size="sm"
                className="w-full bg-[#C8A96A] hover:bg-[#b89655]"
                onClick={() => setOpen(false)}
              >
                Explore Plans
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}