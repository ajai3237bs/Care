import Link from "next/link";

const services = [
  "Home Health Care",
  "Companion Care",
  "Medical Support",
  "Emergency Response",
  "Wellness Programs",
  "Geriatric Consultation",
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Membership Plans", href: "/plans" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy" },
];

const socials = [
  {
    name: "Facebook",
    path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
  {
    name: "Twitter / X",
    path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
  },
  {
    name: "Instagram",
    path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01",
    extra: true,
  },
  {
    name: "LinkedIn",
    path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
    circle: true,
  },
];

function LeafLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 34 34" fill="none">
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

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#051F20", color: "#DAF1DE" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div
          style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
              <LeafLogo />
              <span
                style={{
                  fontFamily: "var(--font-lora)",
                  color: "#DAF1DE",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                }}
              >
                Celedon
              </span>
            </div>
            <p style={{ color: "#8EB69B", fontSize: "0.875rem", lineHeight: "1.75", marginBottom: "1.25rem" }}>
              Care that comes home. Bringing expert elder care, 24/7 support, and warm companionship — right to your loved ones' doorstep.
            </p>
            <div style={{ display: "flex", gap: "0.625rem" }}>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  style={{
                    backgroundColor: "#163832",
                    color: "#8EB69B",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d={s.path} fill={s.extra ? "none" : "currentColor"} stroke={s.extra ? "currentColor" : "none"} />
                    {s.extra && <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" />}
                    {s.circle && <circle cx="4" cy="4" r="2" fill="currentColor" />}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                color: "#DAF1DE",
                fontSize: "0.75rem",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1.25rem",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Our Services
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    style={{ color: "#8EB69B", fontSize: "0.875rem", textDecoration: "none" }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              style={{
                color: "#DAF1DE",
                fontSize: "0.75rem",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1.25rem",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Company
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{ color: "#8EB69B", fontSize: "0.875rem", textDecoration: "none" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4
              style={{
                color: "#DAF1DE",
                fontSize: "0.75rem",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1.25rem",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Get In Touch
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span style={{ color: "#C8A96A", fontSize: "1rem", marginTop: "2px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.18 19.79 19.79 0 01.12 0.5 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div>
                  <p style={{ color: "#8EB69B", fontSize: "0.7rem", marginBottom: "0.125rem" }}>Toll Free</p>
                  <a href="tel:18001234567" style={{ color: "#DAF1DE", fontSize: "0.875rem", fontWeight: "500", textDecoration: "none" }}>
                    1800-123-4567
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span style={{ color: "#C8A96A", marginTop: "2px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <div>
                  <p style={{ color: "#8EB69B", fontSize: "0.7rem", marginBottom: "0.125rem" }}>Email</p>
                  <a href="mailto:care@celedon.in" style={{ color: "#DAF1DE", fontSize: "0.875rem", fontWeight: "500", textDecoration: "none" }}>
                    care@celedon.in
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span style={{ color: "#C8A96A", marginTop: "2px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <p style={{ color: "#8EB69B", fontSize: "0.7rem", marginBottom: "0.125rem" }}>Address</p>
                  <p style={{ color: "#DAF1DE", fontSize: "0.875rem" }}>Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <p style={{ color: "#8EB69B", fontSize: "0.75rem", marginBottom: "0.5rem" }}>Stay Updated</p>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1,
                  backgroundColor: "#163832",
                  color: "#DAF1DE",
                  border: "1px solid #235347",
                  borderRadius: "0.5rem",
                  padding: "0.5rem 0.75rem",
                  fontSize: "0.8rem",
                  outline: "none",
                }}
              />
              <button
                style={{
                  backgroundColor: "#C8A96A",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "0.5rem",
                  padding: "0.5rem 0.875rem",
                  fontSize: "0.875rem",
                  cursor: "pointer",
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #163832",
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ color: "#235347", fontSize: "0.75rem" }}>
            © 2024 Celedon Elder Care Pvt. Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Terms of Service", "Privacy Policy", "Refund Policy"].map((item) => (
              <a
                key={item}
                href="#"
                style={{ color: "#235347", fontSize: "0.75rem", textDecoration: "none" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
