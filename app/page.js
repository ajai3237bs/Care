import Link from "next/link";

/* ─── Design Tokens ─── */
const C = {
  950: "#051F20",
  900: "#0B2B26",
  800: "#163832",
  700: "#235347",
  300: "#8EB69B",
  100: "#DAF1DE",
  primary: "#6B8F71",
  terra: "#C8A96A",
  cream: "#FDF8F3",
};

const serif = { fontFamily: "var(--font-lora)" };

/* ─── Reusable Check Icon ─── */
function CheckIcon({ color = "#8EB69B" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ─── Star Rating ─── */
function Stars({ n = 5 }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#C8A96A">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════
   SECTION 1 — HERO
═══════════════════════════════════════ */
function HeroSection() {
  return (
    <section style={{ backgroundImage: `url('/asset/banner4.png')`, backgroundSize: "cover", backgroundPosition: "center", position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center" }}>
      {/* Dark overlay — solid left, fades right */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,31,32,0.97) 0%, rgba(5,31,32,0.40) 15%, rgba(5,31,32,0.50) 25%, rgba(5,31,32,0.10) 80%)" }} />

      <div style={{ position: "relative", width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "8rem 1.5rem 4rem" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>

          {/* Left: Content */}
          <div>
            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "rgba(142,182,155,0.2)", border: "1px solid rgba(142,182,155,0.5)", color: "#DAF1DE", padding: "0.375rem 1rem", borderRadius: "9999px", fontSize: "0.8rem", fontWeight: "600", marginBottom: "1.5rem" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#C8A96A", display: "inline-block" }} />
              Elder Care Specialists
            </div>

            {/* Headline */}
            <h1 style={{ fontFamily: "var(--font-inter)", fontWeight: "400", color: "#ffffff", fontSize: "clamp(2.2rem,5vw,3.4rem)", lineHeight: "1.2", marginBottom: "1.25rem", textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}>
              Give Your Loved Ones{" "}
              <span style={{ color: "#C8A96A" }}>The Care</span>
              {" "}They Truly Deserve
            </h1>

            {/* <p style={{ color: "rgba(255,255,255,0.92)", fontSize: "1.05rem", lineHeight: "1.75", marginBottom: "2rem", maxWidth: "480px", textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}>
              Personalized elder care and postpartum support delivered with compassion, right at home in Kerala.</p>
            <p style={{ color: "rgba(255,255,255,0.92)", fontSize: "1.05rem", lineHeight: "1.75", marginBottom: "2rem", maxWidth: "480px", textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}>
              From daily assistance to medical monitoring, we ensure safety, comfort, and peace of mind for both families and NRIs</p> */}

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Link href="/plans" style={{ backgroundColor: "#D4A373", color: "#fff", padding: "0.875rem 1.875rem", borderRadius: "9999px", fontSize: "0.95rem", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(212,149,106,0.45)" }}>
                Explore Plans
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link href="/contact" style={{ color: "#ffffff", border: "1px solid rgba(255,255,255,0.6)", padding: "0.875rem 1.875rem", borderRadius: "9999px", fontSize: "0.95rem", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
                Talk to Us
              </Link>
            </div>

            {/* Stat strip */}
            <div style={{ display: "flex", gap: "2.5rem", marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.2)" }}>
              {[
                { n: "10,000+", l: "Families Served" },
                { n: "30+", l: "Years Expertise" },
                { n: "24/7", l: "Emergency Support" },
              ].map(({ n, l }) => (
                <div key={l}>
                  <p style={{ ...serif, color: "#C8A96A", fontSize: "1.6rem", fontWeight: "700", lineHeight: 1 }}>{n}</p>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.75rem", marginTop: "0.25rem" }}>{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual card */}

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 2 — TRUST BAR
═══════════════════════════════════════ */
const trustPillars = [
  { label: "Home Care", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
  { label: "Medical Support", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg> },
  { label: "Wellness", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg> },
  { label: "24/7 Emergency", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg> },
  { label: "Geriatric Experts", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg> },
];

function TrustBar() {
  return (
    <section style={{ backgroundColor: "#DAF1DE", padding: "3.5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ color: "#235347", fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Trusted Nationwide</p>
        <h2 style={{ ...serif, color: "#0B2B26", fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: "700", marginBottom: "2.5rem" }}>
          Trusted by 10,000+ Families Across India
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
          {trustPillars.map(({ label, icon }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.625rem", backgroundColor: "#fff", borderRadius: "16px", padding: "1.25rem 1.75rem", minWidth: "130px", boxShadow: "0 2px 12px rgba(35,83,71,0.1)" }}>
              <div style={{ color: "#6B8F71" }}>{icon}</div>
              <span style={{ color: "#163832", fontSize: "0.8rem", fontWeight: "600" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 3 — CHALLENGES
═══════════════════════════════════════ */
const challenges = [
  {
    title: "Falls & Mobility",
    desc: "Declining mobility makes daily life risky. We provide fall prevention, physiotherapy support, and safe-movement guidance at home.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28"><circle cx="12" cy="5" r="3" /><path d="M6 22v-5l-2-5 6-3 4 5 6-3" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    title: "Chronic Conditions",
    desc: "Managing diabetes, heart disease, or arthritis is a daily challenge. Our caregivers coordinate with doctors to keep health on track.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28"><path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    title: "Loneliness & Isolation",
    desc: "Loneliness affects health as much as illness. Our companion care keeps seniors engaged, social, and mentally sharp every day.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
  },
  {
    title: "Distance from Children",
    desc: "Living far from parents brings constant worry. Celedon keeps you connected with real-time updates and 24/7 caregiver access.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  },
];

function ChallengesSection() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "#C8A96A", fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>The Problem We Solve</p>
          <h2 style={{ ...serif, color: "#051F20", fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: "700", lineHeight: 1.25 }}>
            Aging Brings New Challenges.<br />We Help You Face Them Together.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
          {challenges.map(({ title, desc, icon }) => (
            <div key={title} style={{ backgroundColor: "#FDF8F3", borderRadius: "20px", padding: "1.875rem", border: "1px solid #DAF1DE" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", backgroundColor: "#DAF1DE", color: "#6B8F71", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.125rem" }}>
                {icon}
              </div>
              <h3 style={{ ...serif, color: "#0B2B26", fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.625rem" }}>{title}</h3>
              <p style={{ color: "#235347", fontSize: "0.875rem", lineHeight: "1.7" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 4 — HOW CELEDON HELPS
═══════════════════════════════════════ */
const services = [
  {
    title: "Health & Medical",
    desc: "Certified nurses and health aides for medication management, vitals monitoring, wound care, and coordination with your senior's doctors.",
    points: ["Medication reminders", "Vitals tracking", "Doctor liaison", "Post-hospital care"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32"><path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    title: "Companionship & Activities",
    desc: "Trained companions who bring genuine warmth — conversations, games, outings, hobbies, and mental wellness tailored to each senior.",
    points: ["Daily engagement", "Mental wellness", "Social outings", "Hobby support"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>,
  },
  {
    title: "Safety & Emergency",
    desc: "24/7 emergency response, fall-detection support, smart home safety assessments, and instant family notifications — always there.",
    points: ["24/7 helpline", "Emergency dispatch", "Family updates", "Home safety checks"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  },
];

function ServicesSection() {
  return (
    <section style={{ backgroundColor: "#DAF1DE", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "#6B8F71", fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>How We Help</p>
          <h2 style={{ ...serif, color: "#051F20", fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: "700" }}>
            Holistic Care, Designed for Every Senior
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {services.map(({ title, desc, points, icon }) => (
            <div key={title} style={{ backgroundColor: "#fff", borderRadius: "22px", padding: "2rem", boxShadow: "0 4px 24px rgba(22,56,50,0.08)" }}>
              <div style={{ width: "60px", height: "60px", borderRadius: "16px", backgroundColor: "#163832", color: "#8EB69B", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                {icon}
              </div>
              <h3 style={{ ...serif, color: "#0B2B26", fontSize: "1.2rem", fontWeight: "700", marginBottom: "0.75rem" }}>{title}</h3>
              <p style={{ color: "#235347", fontSize: "0.875rem", lineHeight: "1.7", marginBottom: "1.25rem" }}>{desc}</p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {points.map((p) => (
                  <li key={p} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <CheckIcon />
                    <span style={{ color: "#163832", fontSize: "0.85rem", fontWeight: "500" }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 5 — WHY CHOOSE CELEDON
═══════════════════════════════════════ */
const whyPoints = [
  "30+ years of geriatric expertise behind every care plan",
  "International care models adapted for Indian families",
  "Background-verified, trained, and empathetic caregivers",
  "Tech-enabled monitoring with real-time family dashboards",
  "Flexible and affordable membership plans",
];

const statsGrid = [
  { n: "10K+", l: "Families Served" },
  { n: "500+", l: "Verified Caregivers" },
  { n: "15+", l: "Cities Covered" },
  { n: "96%", l: "Satisfaction Rate" },
];

function WhyChooseSection() {
  return (
    <section style={{ backgroundColor: "#0B2B26", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

          {/* Left */}
          <div>
            <p style={{ color: "#C8A96A", fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Why Choose Us</p>
            <h2 style={{ ...serif, color: "#DAF1DE", fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: "700", marginBottom: "0.75rem" }}>
              The Celedon Difference
            </h2>
            <p style={{ color: "#8EB69B", fontSize: "0.95rem", lineHeight: "1.75", marginBottom: "2rem" }}>
              We combine decades of geriatric expertise with a warm, human-centred approach — so your parents get care that feels like family, not a clinic.
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {whyPoints.map((p) => (
                <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(142,182,155,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                    <CheckIcon color="#8EB69B" />
                  </div>
                  <span style={{ color: "#DAF1DE", fontSize: "0.9rem", lineHeight: "1.6" }}>{p}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "2rem" }}>
              <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#8EB69B", fontSize: "0.9rem", fontWeight: "600", textDecoration: "none", borderBottom: "2px solid #6B8F71", paddingBottom: "2px" }}>
                Learn More About Us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>

          {/* Right: Stat cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {statsGrid.map(({ n, l }) => (
              <div key={l} style={{ backgroundColor: "#163832", borderRadius: "18px", padding: "1.75rem", textAlign: "center", border: "1px solid #235347" }}>
                <p style={{ ...serif, color: "#C8A96A", fontSize: "2.2rem", fontWeight: "700" }}>{n}</p>
                <p style={{ color: "#8EB69B", fontSize: "0.8rem", marginTop: "0.375rem" }}>{l}</p>
              </div>
            ))}
            <div style={{ gridColumn: "1 / -1", backgroundColor: "#163832", borderRadius: "18px", padding: "1.5rem", border: "1px solid #235347", display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ flexShrink: 0, width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "rgba(212,149,106,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C8A96A" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" strokeLinecap="round" /></svg>
              </div>
              <div>
                <p style={{ color: "#DAF1DE", fontSize: "0.9rem", fontWeight: "600" }}>Always available, even at 3 AM</p>
                <p style={{ color: "#8EB69B", fontSize: "0.8rem", marginTop: "0.25rem" }}>Our care team never sleeps so you can rest easy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid  { grid-template-columns: 1fr !important; }
          .why-grid   { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 6 — TESTIMONIALS
═══════════════════════════════════════ */
const testimonials = [
  {
    name: "Priya Menon", city: "Bengaluru", initials: "PM",
    quote: "The Celedon team treats my mother like their own family. Watching her laugh and thrive at 78 — that's priceless. I finally sleep without worry.",
  },
  {
    name: "Rajesh Sharma", city: "Delhi", initials: "RS",
    quote: "Being posted abroad, I was terrified about my father's health. Celedon's daily updates and 24/7 access have been a true lifesaver for our family.",
  },
  {
    name: "Anita Krishnaswamy", city: "Chennai", initials: "AK",
    quote: "The companion they assigned clicked instantly with my father-in-law. He's more active, more cheerful — it's transformed the whole household.",
  },
];

function TestimonialsSection() {
  return (
    <section style={{ backgroundColor: "#FDF8F3", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "#6B8F71", fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Member Stories</p>
          <h2 style={{ ...serif, color: "#051F20", fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: "700" }}>
            Hear From Our Members
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {testimonials.map(({ name, city, initials, quote }) => (
            <div key={name} style={{ backgroundColor: "#fff", borderRadius: "20px", padding: "2rem", boxShadow: "0 4px 20px rgba(22,56,50,0.07)", border: "1px solid rgba(142,182,155,0.2)", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ color: "#8EB69B", opacity: 0.5 }}>
                <svg width="30" height="22" viewBox="0 0 36 28" fill="currentColor">
                  <path d="M0 28V17C0 6.333 5.333 1 16 0l2 3C12.667 4.333 10 6.667 9 10h8v18H0zm20 0V17C20 6.333 25.333 1 36 0l2 3C32.667 4.333 30 6.667 29 10h8v18H20z" />
                </svg>
              </div>
              <p style={{ color: "#163832", fontSize: "0.9rem", lineHeight: "1.8", fontStyle: "italic", flex: 1 }}>{quote}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "50%", backgroundColor: "#163832", color: "#8EB69B", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: "700" }}>
                    {initials}
                  </div>
                  <div>
                    <p style={{ color: "#0B2B26", fontSize: "0.875rem", fontWeight: "600" }}>{name}</p>
                    <p style={{ color: "#8EB69B", fontSize: "0.75rem" }}>{city}</p>
                  </div>
                </div>
                <Stars />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 7 — CTA BANNER
═══════════════════════════════════════ */
function CTABanner() {
  return (
    <section style={{ background: "linear-gradient(135deg, #163832 0%, #6B8F71 100%)", padding: "5rem 1.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "220px", height: "220px", borderRadius: "50%", backgroundColor: "#C8A96A", opacity: 0.12 }} />
      <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "160px", height: "160px", borderRadius: "50%", backgroundColor: "#DAF1DE", opacity: 0.08 }} />

      <div style={{ position: "relative", maxWidth: "640px", margin: "0 auto" }}>
        <p style={{ color: "#DAF1DE", opacity: 0.8, fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
          Get Started Today
        </p>
        <h2 style={{ ...serif, color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: "700", lineHeight: 1.25, marginBottom: "1rem" }}>
          Give Your Parents the Care They Deserve
        </h2>
        <p style={{ color: "#DAF1DE", opacity: 0.85, fontSize: "1rem", lineHeight: "1.7", marginBottom: "2rem" }}>
          Join 10,000+ Indian families who trust Celedon to care for the people they love most.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/plans" style={{ backgroundColor: "#C8A96A", color: "#fff", padding: "1rem 2.25rem", borderRadius: "9999px", fontSize: "1rem", fontWeight: "700", textDecoration: "none", boxShadow: "0 6px 24px rgba(212,149,106,0.4)", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            View Membership Plans
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <Link href="/contact" style={{ color: "#fff", border: "2px solid rgba(255,255,255,0.45)", padding: "1rem 2.25rem", borderRadius: "9999px", fontSize: "1rem", fontWeight: "600", textDecoration: "none" }}>
            Speak to Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   PAGE EXPORT
═══════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ChallengesSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
