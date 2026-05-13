"use client";
import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import Footer from "../components/Footer";
import Header from "../components/Header";

/* ─── Design Tokens ─── */
const C = {
  950: "#051F20", 900: "#0B2B26", 800: "#163832",
  700: "#235347", 300: "#8EB69B", 100: "#DAF1DE",
  primary: "#6B8F71", terra: "#C8A96A", cream: "#FDF8F3",
};
const serif = { fontFamily: "var(--font-lora)" };

/* ═══════════════════════════════════════
   SECTION 1 — HERO
═══════════════════════════════════════ */
function ContactHero() {
  return (
    <section style={{ background: `linear-gradient(135deg, ${C[950]} 0%, ${C[800]} 55%, ${C[700]} 100%)`, position: "relative", overflow: "hidden", minHeight: "640px", display: "flex", alignItems: "center" }}>
      <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "360px", height: "360px", borderRadius: "50%", backgroundColor: C[700], opacity: 0.2 }} />
      <div style={{ position: "absolute", bottom: "-60px", left: "-40px", width: "240px", height: "240px", borderRadius: "50%", backgroundColor: C.terra, opacity: 0.07 }} />

      <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "10rem 1.5rem 5rem", width: "100%", textAlign: "center" }}>
        <ScrollReveal animation="fadeUp" delay={0}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "rgba(200,169,106,0.15)", border: "1px solid rgba(200,169,106,0.35)", color: C.terra, padding: "0.375rem 1rem", borderRadius: "9999px", fontSize: "0.8rem", fontWeight: "600", marginBottom: "1.5rem" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: C.terra, display: "inline-block" }} />
            We're Here to Help
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fadeUp" delay={120}>
          <h1 style={{ ...serif, color: "#fff", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: "700", lineHeight: "1.2", marginBottom: "1.25rem" }}>
            Let's Talk About{" "}
            <span style={{ color: C.terra }}>Your Parent's Care</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal animation="fadeUp" delay={240}>
          <p style={{ color: "rgba(218,241,222,0.85)", fontSize: "1.05rem", lineHeight: "1.8", maxWidth: "500px", margin: "0 auto" }}>
            No pressure, no sales pitch. Just an honest conversation about what your parent needs — and how we can help.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 2 — CONTACT OPTIONS
═══════════════════════════════════════ */
const contactOptions = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.17 1.18 2 2 0 012.14 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.86-.86a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
    label: "Call Us",
    value: "1800-XXX-XXXX",
    sub: "Mon–Sat, 9am–7pm IST",
    href: "tel:1800000000",
    accent: C.terra,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email Us",
    value: "hello@celedon.in",
    sub: "We reply within 4 hours",
    href: "mailto:hello@celedon.in",
    accent: C[300],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+91 98XXX XXXXX",
    sub: "Quick responses, always",
    href: "https://wa.me/91980000000",
    accent: C.terra,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Book a Free Call",
    value: "15-min with a Care Expert",
    sub: "Choose your time slot",
    href: "#form",
    accent: C[300],
  },
];

function ContactOptions() {
  return (
    <section style={{ backgroundColor: C.cream, padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
          {contactOptions.map(({ icon, label, value, sub, href, accent }, i) => (
            <ScrollReveal key={label} animation="fadeUp" delay={i * 80} duration={600}>
              <a href={href} style={{ textDecoration: "none", display: "block" }}>
                <div style={{ backgroundColor: "#fff", borderRadius: "18px", padding: "1.625rem", border: "1px solid #DAF1DE", boxShadow: "0 2px 16px rgba(5,31,32,0.05)", transition: "box-shadow 0.2s", height: "100%", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  <div style={{ width: "52px", height: "52px", borderRadius: "14px", backgroundColor: accent === C.terra ? "rgba(200,169,106,0.12)" : "rgba(142,182,155,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: accent }}>
                    {icon}
                  </div>
                  <div>
                    <p style={{ color: accent, fontSize: "0.72rem", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.25rem" }}>{label}</p>
                    <p style={{ ...serif, color: C[900], fontSize: "1rem", fontWeight: "700" }}>{value}</p>
                    <p style={{ color: C[700], fontSize: "0.8rem", marginTop: "0.2rem" }}>{sub}</p>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 3 — CONTACT FORM + SIDEBAR
═══════════════════════════════════════ */
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "", plan: "", condition: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const field = (key, label, type = "text", placeholder = "") => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
      <label style={{ color: C[800], fontSize: "0.82rem", fontWeight: "600" }}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        style={{
          padding: "0.75rem 1rem", borderRadius: "10px", border: "1px solid #DAF1DE",
          backgroundColor: "#fff", color: C[800], fontSize: "0.9rem", outline: "none",
          fontFamily: "inherit", transition: "border-color 0.2s",
        }}
        onFocus={(e) => (e.target.style.borderColor = C[300])}
        onBlur={(e) => (e.target.style.borderColor = "#DAF1DE")}
      />
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="form" style={{ backgroundColor: "#fff", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ScrollReveal animation="fadeUp">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ color: C.primary, fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Get in Touch</p>
            <h2 style={{ ...serif, color: C[950], fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: "700" }}>Tell Us About Your Parent</h2>
            <p style={{ color: C[700], fontSize: "0.95rem", marginTop: "0.625rem" }}>We'll get back to you within a few hours — personally, not with an automated reply.</p>
          </div>
        </ScrollReveal>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "3rem", alignItems: "start" }}>

          {/* Left: Sidebar info */}
          <ScrollReveal animation="fadeLeft" duration={700}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {/* What happens next */}
              <div style={{ backgroundColor: C[900], borderRadius: "20px", padding: "2rem" }}>
                <p style={{ color: C.terra, fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>What Happens Next</p>
                {[
                  { n: "1", t: "We review your message", d: "A real Care Expert reads it — not a bot." },
                  { n: "2", t: "We call you back", d: "Usually within 2–4 hours on working days." },
                  { n: "3", t: "Free care consultation", d: "15 minutes. No commitment required." },
                  { n: "4", t: "Your plan begins", d: "Only when you're fully comfortable." },
                ].map(({ n, t, d }) => (
                  <div key={n} style={{ display: "flex", gap: "1rem", marginBottom: "1.125rem", alignItems: "flex-start" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%", backgroundColor: "rgba(200,169,106,0.2)", color: C.terra, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: "700", flexShrink: 0 }}>{n}</div>
                    <div>
                      <p style={{ color: C[100], fontSize: "0.875rem", fontWeight: "600" }}>{t}</p>
                      <p style={{ color: C[300], fontSize: "0.8rem", marginTop: "0.2rem", lineHeight: "1.5" }}>{d}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reassurance */}
              <div style={{ backgroundColor: C.cream, borderRadius: "16px", padding: "1.5rem", border: "1px solid #DAF1DE" }}>
                {[
                  "🔒 Your information is private and never shared",
                  "🚫 No spam, no pushy follow-ups",
                  "💬 Talk to a real person every time",
                  "✅ Free consultation, no commitment",
                ].map((p) => (
                  <p key={p} style={{ color: C[700], fontSize: "0.85rem", lineHeight: "1.6", marginBottom: "0.625rem" }}>{p}</p>
                ))}
              </div>

              {/* Emergency note */}
              <div style={{ backgroundColor: "rgba(200,169,106,0.1)", borderRadius: "14px", padding: "1.25rem 1.5rem", border: "1px solid rgba(200,169,106,0.25)" }}>
                <p style={{ color: C.terra, fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "0.5rem" }}>🚨 Emergency?</p>
                <p style={{ color: C[800], fontSize: "0.875rem", lineHeight: "1.6" }}>Don't fill a form. Call us immediately at <strong>1800-XXX-XXXX</strong> — available 24/7.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal animation="fadeRight" delay={100} duration={700}>
            {submitted ? (
              <div style={{ backgroundColor: C.cream, borderRadius: "22px", padding: "3rem", textAlign: "center", border: "1px solid #DAF1DE" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🙏</div>
                <h3 style={{ ...serif, color: C[900], fontSize: "1.5rem", fontWeight: "700", marginBottom: "0.75rem" }}>Thank You, {form.name || "Friend"}!</h3>
                <p style={{ color: C[700], fontSize: "0.95rem", lineHeight: "1.8", marginBottom: "1.5rem" }}>
                  We've received your message. A Celedon Care Expert will reach out to you personally within 2–4 hours.
                </p>
                <p style={{ color: C[700], fontSize: "0.875rem" }}>While you wait, you can explore our <Link href="/plans" style={{ color: C.terra, textDecoration: "none", fontWeight: "600" }}>membership plans</Link> or read about our <Link href="/services" style={{ color: C.terra, textDecoration: "none", fontWeight: "600" }}>services</Link>.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ backgroundColor: C.cream, borderRadius: "22px", padding: "2.5rem", border: "1px solid #DAF1DE", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                  {field("name", "Your Full Name *", "text", "e.g. Rahul Sharma")}
                  {field("phone", "Phone Number *", "tel", "+91 98XXX XXXXX")}
                </div>
                {field("email", "Email Address", "email", "rahul@example.com")}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                  {field("city", "Your City *", "text", "e.g. Bengaluru")}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    <label style={{ color: C[800], fontSize: "0.82rem", fontWeight: "600" }}>Select Your Service</label>
                    <select
                      value={form.plan}
                      onChange={(e) => setForm({ ...form, plan: e.target.value })}
                      style={{ padding: "0.75rem 1rem", borderRadius: "10px", border: "1px solid #DAF1DE", backgroundColor: "#fff", color: C[700], fontSize: "0.9rem", fontFamily: "inherit", outline: "none" }}
                    >
                      <option value="">Not sure yet</option>
                      <option value="elder-care">🧓 Elder Care</option>
                      <option value="postpartum">🤱 Postpartum Care</option>
                    </select>
                  </div>
                </div>
               
                <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                  <label style={{ color: C[800], fontSize: "0.82rem", fontWeight: "600" }}>Your Message *</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us a little about your situation — what worries you, what you're looking for, or any questions you have..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ padding: "0.75rem 1rem", borderRadius: "10px", border: "1px solid #DAF1DE", backgroundColor: "#fff", color: C[800], fontSize: "0.9rem", fontFamily: "inherit", outline: "none", resize: "vertical", lineHeight: "1.6" }}
                    onFocus={(e) => (e.target.style.borderColor = C[300])}
                    onBlur={(e) => (e.target.style.borderColor = "#DAF1DE")}
                  />
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: C[800], color: "#fff", padding: "1rem", borderRadius: "9999px", fontSize: "1rem", fontWeight: "700", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", boxShadow: "0 4px 20px rgba(5,31,32,0.2)" }}
                >
                  Send Message — We'll Call You Back
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <p style={{ color: "#999", fontSize: "0.78rem", textAlign: "center" }}>🔒 Your data is safe. We never share it with third parties.</p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 4 — OFFICE / REACH INFO
═══════════════════════════════════════ */
function ReachSection() {
  return (
    <section style={{ backgroundColor: C[900], padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
          {[
            { icon: "📍", title: "Our Office", lines: ["Celedon Elder Care Pvt. Ltd.", "Bengaluru, Karnataka — 560001"] },
            { icon: "🕐", title: "Working Hours", lines: ["Mon–Sat: 9:00 AM – 7:00 PM", "Emergency line: 24/7"] },
            { icon: "🌆", title: "Cities We Serve", lines: ["Bengaluru · Delhi · Mumbai", "Chennai · Hyderabad · Pune", "Expanding every month →"] },
            { icon: "📧", title: "Write to Us", lines: ["hello@celedon.in", "support@celedon.in"] },
          ].map(({ icon, title, lines }, i) => (
            <ScrollReveal key={title} animation="fadeUp" delay={i * 80} duration={600}>
              <div style={{ backgroundColor: C[800], borderRadius: "18px", padding: "1.625rem", border: "1px solid rgba(142,182,155,0.1)" }}>
                <span style={{ fontSize: "1.75rem", display: "block", marginBottom: "0.875rem" }}>{icon}</span>
                <p style={{ color: C.terra, fontSize: "0.72rem", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{title}</p>
                {lines.map((l) => (
                  <p key={l} style={{ color: C[300], fontSize: "0.875rem", lineHeight: "1.7" }}>{l}</p>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 5 — FINAL CTA
═══════════════════════════════════════ */
function ContactCTA() {
  return (
    <section style={{ background: "linear-gradient(135deg, #163832 0%, #6B8F71 100%)", padding: "5rem 1.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "220px", height: "220px", borderRadius: "50%", backgroundColor: C.terra, opacity: 0.1 }} />
      <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "160px", height: "160px", borderRadius: "50%", backgroundColor: C[100], opacity: 0.06 }} />

      <div style={{ position: "relative", maxWidth: "600px", margin: "0 auto" }}>
        <ScrollReveal animation="fadeUp" duration={700}>
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🤝</div>
          <h2 style={{ ...serif, color: "#fff", fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: "700", lineHeight: 1.3, marginBottom: "1rem" }}>
            Not Ready to Fill a Form?<br />
            <span style={{ color: C.terra }}>Just Call Us.</span>
          </h2>
          <p style={{ color: "rgba(218,241,222,0.85)", fontSize: "0.975rem", lineHeight: "1.75", marginBottom: "2rem" }}>
            Sometimes you just want to talk to someone. Our Care Experts are available Mon–Sat, 9am–7pm. No scripts, no pressure.
          </p>
        </ScrollReveal>
        <ScrollReveal animation="fadeUp" delay={160} duration={650}>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a href="tel:1800000000" style={{ backgroundColor: C.terra, color: "#fff", padding: "1rem 2.25rem", borderRadius: "9999px", fontSize: "1rem", fontWeight: "700", textDecoration: "none", boxShadow: "0 6px 24px rgba(200,169,106,0.4)", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.17 1.18 2 2 0 012.14 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.86-.86a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>
              Call 1800-XXX-XXXX
            </a>
            <Link href="/plans" style={{ color: "#fff", border: "2px solid rgba(255,255,255,0.4)", padding: "1rem 2.25rem", borderRadius: "9999px", fontSize: "1rem", fontWeight: "600", textDecoration: "none" }}>
              View Plans First
            </Link>
          </div>
          <p style={{ color: "rgba(218,241,222,0.55)", fontSize: "0.8rem", marginTop: "1.25rem" }}>
            📞 Toll-free &nbsp;·&nbsp; 🕐 Mon–Sat 9am–7pm &nbsp;·&nbsp; 🚨 Emergency line: 24/7
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   PAGE EXPORT
═══════════════════════════════════════ */
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactOptions />
      <ContactForm />
      <ReachSection />
      <ContactCTA />
      <Footer />
      <Header />
    </>
  );
}
