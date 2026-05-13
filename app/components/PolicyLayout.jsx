"use client";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

const C = {
  950: "#051F20", 900: "#0B2B26", 800: "#163832",
  700: "#235347", 300: "#8EB69B", 100: "#DAF1DE",
  primary: "#6B8F71", terra: "#C8A96A", cream: "#FDF8F3",
};
const serif = { fontFamily: "var(--font-lora)" };

/**
 * sections = [
 *   { heading: "...", paragraphs: ["..."], list: ["..."] }
 * ]
 */
export default function PolicyLayout({ badge, title, subtitle, lastUpdated, sections, contactEmail = "hello@celedon.in" }) {
  return (
    <>
      <Header />

      {/* ── Hero ── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${C[950]} 0%, ${C[800]} 55%, ${C[700]} 100%)`,
          position: "relative",
          overflow: "hidden",
          minHeight: "360px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* decorative blobs */}
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "320px", height: "320px", borderRadius: "50%", backgroundColor: C[700], opacity: 0.2 }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "-40px", width: "200px", height: "200px", borderRadius: "50%", backgroundColor: C.terra, opacity: 0.07 }} />

        <div style={{ position: "relative", maxWidth: "860px", margin: "0 auto", padding: "10rem 1.5rem 5rem", width: "100%", textAlign: "center" }}>
          {/* badge */}
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              backgroundColor: "rgba(200,169,106,0.15)", border: "1px solid rgba(200,169,106,0.35)",
              color: C.terra, padding: "0.375rem 1.125rem", borderRadius: "9999px",
              fontSize: "0.78rem", fontWeight: "700", letterSpacing: "0.08em",
              textTransform: "uppercase", marginBottom: "1.5rem",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: C.terra, display: "inline-block" }} />
            {badge}
          </div>

          <h1 style={{ ...serif, color: "#fff", fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: "700", lineHeight: 1.25, marginBottom: "1rem" }}>
            {title}
          </h1>

          {subtitle && (
            <p style={{ color: "rgba(218,241,222,0.8)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "520px", margin: "0 auto 1.5rem" }}>
              {subtitle}
            </p>
          )}

          <p style={{ color: "rgba(142,182,155,0.7)", fontSize: "0.8rem" }}>
            Last updated: <span style={{ color: C[300], fontWeight: "600" }}>{lastUpdated}</span>
          </p>
        </div>
      </section>

      {/* ── Breadcrumb ── */}
      <div style={{ backgroundColor: C.cream, borderBottom: "1px solid #DAF1DE", padding: "0.875rem 1.5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", color: C.primary }}>
          <Link href="/" style={{ color: C.primary, textDecoration: "none", fontWeight: "500" }}>Home</Link>
          <span style={{ color: C[300] }}>›</span>
          <span style={{ color: C[800], fontWeight: "600" }}>{badge}</span>
        </div>
      </div>

      {/* ── Content ── */}
      <section style={{ backgroundColor: "#fff", padding: "4.5rem 1.5rem 6rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>

          {/* Table of contents */}
          <div
            style={{
              backgroundColor: C.cream, borderRadius: "16px",
              padding: "1.75rem 2rem", border: "1px solid #DAF1DE",
              marginBottom: "3.5rem",
            }}
          >
            <p style={{ color: C.primary, fontSize: "0.72rem", fontWeight: "700", letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: "1rem" }}>
              In This Document
            </p>
            <ol style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {sections.map(({ heading }, i) => (
                <li key={heading} style={{ color: C[700], fontSize: "0.9rem", lineHeight: 1.5 }}>
                  <a
                    href={`#section-${i}`}
                    style={{ color: C[800], textDecoration: "none", fontWeight: "500" }}
                    onMouseOver={(e) => (e.target.style.color = C.terra)}
                    onMouseOut={(e) => (e.target.style.color = C[800])}
                  >
                    {heading}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Sections */}
          {sections.map(({ heading, paragraphs = [], list = [] }, i) => (
            <div key={heading} id={`section-${i}`} style={{ marginBottom: "3rem", scrollMarginTop: "100px" }}>
              {/* Section header */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.25rem" }}>
                <div
                  style={{
                    minWidth: "36px", height: "36px", borderRadius: "10px",
                    backgroundColor: C.cream, border: "1px solid #DAF1DE",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: C.primary, fontSize: "0.78rem", fontWeight: "700", flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 style={{ ...serif, color: C[900], fontSize: "clamp(1.15rem, 2.5vw, 1.4rem)", fontWeight: "700", lineHeight: 1.35, paddingTop: "0.4rem" }}>
                  {heading}
                </h2>
              </div>

              {/* Paragraphs */}
              <div style={{ paddingLeft: "52px" }}>
                {paragraphs.map((p, pi) => (
                  <p key={pi} style={{ color: C[700], fontSize: "0.925rem", lineHeight: 1.85, marginBottom: "0.875rem" }}>
                    {p}
                  </p>
                ))}

                {/* Bullet list */}
                {list.length > 0 && (
                  <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {list.map((item, li) => (
                      <li key={li} style={{ color: C[700], fontSize: "0.925rem", lineHeight: 1.75 }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Divider (not on last) */}
              {i < sections.length - 1 && (
                <div style={{ height: "1px", backgroundColor: "#DAF1DE", margin: "2.5rem 0 0" }} />
              )}
            </div>
          ))}

          {/* Contact callout */}
          <div
            style={{
              marginTop: "3rem", backgroundColor: C[900], borderRadius: "20px",
              padding: "2.5rem", textAlign: "center",
            }}
          >
            <p style={{ color: C.terra, fontSize: "0.72rem", fontWeight: "700", letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Questions About This Policy?
            </p>
            <p style={{ color: C[300], fontSize: "0.925rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Our team is happy to clarify anything. Write to us and we will respond within one business day.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                backgroundColor: C.terra, color: "#fff", padding: "0.875rem 2rem",
                borderRadius: "9999px", fontSize: "0.9rem", fontWeight: "700",
                textDecoration: "none", boxShadow: "0 4px 20px rgba(200,169,106,0.35)",
              }}
            >
              {contactEmail}
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
