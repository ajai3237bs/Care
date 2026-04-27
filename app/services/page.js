"use client";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

/* ─── Design Tokens ─── */
const C = {
  950: "#051F20",
  900: "#0B2B26",
  800: "#163832",
  700: "#235347",
  300: "#8EB69B",
  100: "#DAF1DE",
  primary: "#6B8F71",
  terra:   "#C8A96A",
  cream:   "#FDF8F3",
};
const serif = { fontFamily: "var(--font-lora)" };

/* ═══════════════════════════════════════
   SECTION 1 — HERO
═══════════════════════════════════════ */
function ServicesHero() {
  return (
    <section style={{
      backgroundImage: `url('/asset/banner3.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      overflow: "hidden",
      minHeight: "580px",
      display: "flex",
      alignItems: "center",
    }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,31,32,0.95) 0%, rgba(5,31,32,0.80) 55%, rgba(5,31,32,0.30) 100%)" }} />

      <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "10rem 1.5rem 5rem", width: "100%" }}>
        <ScrollReveal animation="fadeUp" delay={0}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "rgba(212,149,106,0.15)", border: "1px solid rgba(212,149,106,0.35)", color: C.terra, padding: "0.375rem 1rem", borderRadius: "9999px", fontSize: "0.8rem", fontWeight: "600", marginBottom: "1.5rem" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: C.terra, display: "inline-block" }} />
            Our Services
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={120}>
          <h1 style={{ ...serif, color: "#fff", fontSize: "clamp(2rem,5vw,3.4rem)", fontWeight: "700", lineHeight: "1.2", maxWidth: "660px", marginBottom: "1.25rem", textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}>
            Everything Your Parent Needs,{" "}
            <span style={{ color: C.terra }}>Delivered at Home</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={240}>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: "1.8", maxWidth: "520px", marginBottom: "2rem", textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
            We bring the right care, the right people, and the right support — so your parents never have to leave the comfort of home.
          </p>
          <Link href="/plans" style={{ backgroundColor: C.terra, color: "#fff", padding: "0.9rem 2rem", borderRadius: "9999px", fontSize: "0.95rem", fontWeight: "700", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem", boxShadow: "0 6px 24px rgba(212,149,106,0.4)" }}>
            Find the Right Plan for Us
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 2 — HONEST INTRO
═══════════════════════════════════════ */
function HonestIntro() {
  return (
    <section style={{ backgroundColor: C[900], padding: "3.5rem 1.5rem", borderBottom: `1px solid rgba(142,182,155,0.1)` }}>
      <ScrollReveal animation="fadeUp">
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: "40px", height: "3px", backgroundColor: C.terra, borderRadius: "2px", margin: "0 auto 1.5rem" }} />
          <p style={{ ...serif, color: C[100], fontSize: "clamp(1.1rem,2.5vw,1.4rem)", lineHeight: "1.8", fontStyle: "italic" }}>
            "We're not trying to do everything at once. We've carefully chosen the services that matter most — the ones that make a{" "}
            <span style={{ color: C.terra }}>real difference</span> in a senior's daily life."
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 3 — CORE SERVICES
═══════════════════════════════════════ */
const services = [
  {
    emoji: "🏠",
    num: "01",
    title: "Home Health Care",
    tagline: "Professional care, in the place they love most.",
    accent: C[300],
    points: [
      "Skilled nursing visits at home",
      "Post-surgery and post-hospitalisation recovery care",
      "Wound dressing and IV therapy at home",
      "Physiotherapy and mobility support",
      "Injection administration and catheter care",
    ],
    forWho: "Seniors recovering from surgery, managing chronic illness, or needing regular skilled nursing support.",
    quote: null,
  },
  {
    emoji: "💊",
    num: "02",
    title: "Health Monitoring & Chronic Care",
    tagline: "Stay ahead of health issues — before they become emergencies.",
    accent: C.terra,
    points: [
      "Regular vitals check (BP, sugar, oxygen, weight)",
      "Chronic condition management — diabetes, hypertension, heart conditions",
      "Medication reminders and compliance tracking",
      "Monthly health summary reports shared with family",
      "Caregiver coordination and follow-up",
    ],
    forWho: "Seniors with ongoing health conditions who need consistent monitoring without frequent hospital visits.",
    quote: null,
  },
  {
    emoji: "🧪",
    num: "03",
    title: "Lab & Diagnostics at Home",
    tagline: "No queues. No travel. Just results.",
    accent: C[300],
    points: [
      "Blood, urine, and stool sample collection at home",
      "ECG and basic diagnostics at doorstep",
      "Reports shared digitally with family",
      "Tie-ups with certified diagnostic labs",
      "Fasting and non-fasting test support",
    ],
    forWho: "Seniors who find it difficult or risky to travel to diagnostic centres.",
    quote: null,
  },
  {
    emoji: "🏥",
    num: "04",
    title: "Hospital Accompaniment",
    tagline: "Your parent is never alone at the hospital — even when you can't be there.",
    accent: C.terra,
    points: [
      "Trained Celedon companion accompanies parent to OPD and consultations",
      "Real-time updates shared with family via phone/WhatsApp",
      "Support with paperwork, insurance, and pharmacy",
      "Post-visit follow-up and report sharing",
      "Emergency admission support",
    ],
    forWho: "Families living away from parents who worry about hospital visits going unsupported.",
    quote: "This is one of our most requested services — because distance is hard, and no one wants their parent sitting alone in a hospital waiting room.",
  },
  {
    emoji: "📞",
    num: "05",
    title: "Tele-consultation",
    tagline: "Expert medical advice — in minutes, not hours.",
    accent: C[300],
    points: [
      "Video/phone consultations with geriatricians and specialists",
      "Second opinions and prescription reviews",
      "Mental wellness consultations",
      "Nutritionist and diet counselling sessions",
      "Follow-up after hospitalisation or procedure",
    ],
    forWho: "Seniors and families who want quick access to expert guidance without the wait.",
    quote: null,
  },
  {
    emoji: "🚑",
    num: "06",
    title: "24/7 Emergency Support",
    tagline: "When every minute matters, we're already moving.",
    accent: C.terra,
    points: [
      "Round-the-clock emergency helpline",
      "Rapid response team dispatch",
      "Ambulance coordination and hospital liaison",
      "Family notification and real-time updates",
      "Post-emergency follow-up and recovery support",
    ],
    forWho: "Every Celedon member — emergency support is included in all plans.",
    quote: "This is the service we hope you never need — but we'll always be ready.",
  },
  {
    emoji: "🤸",
    num: "07",
    title: "Wellness & Social Activities",
    tagline: "Good health isn't just physical. It's joy, connection, and purpose.",
    accent: C[300],
    points: [
      "Guided yoga and gentle exercise sessions",
      "Meditation and breathing programs",
      "Online and in-person social events",
      "Hobby groups — reading, music, art, gardening",
      "Mental wellness check-ins",
    ],
    forWho: "Seniors who are physically stable but at risk of loneliness, isolation, or low mental engagement.",
    quote: "Loneliness is one of the most underrated health risks for seniors. We take this seriously.",
  },
  {
    emoji: "🔬",
    num: "08",
    title: "Medical Equipment Support",
    tagline: "The right equipment, when you need it — no hassle.",
    accent: C.terra,
    points: [
      "Wheelchair, walker, and crutch rental or purchase",
      "Oxygen concentrator setup and support",
      "BP monitors, pulse oximeters, glucometers",
      "Hospital-grade beds and mattresses",
      "Delivery, setup, and usage training at home",
    ],
    forWho: "Seniors recovering from illness or managing conditions that require medical aids at home.",
    quote: null,
  },
];

function ServiceCard({ service, index }) {
  const isEven = index % 2 === 0;
  return (
    <ScrollReveal animation={isEven ? "fadeLeft" : "fadeRight"} delay={0} duration={680} style={{ height: "100%" }}>
      <div style={{
        backgroundColor: "#fff",
        borderRadius: "24px",
        overflow: "hidden",
        boxShadow: "0 4px 32px rgba(5,31,32,0.07)",
        border: "1px solid #DAF1DE",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}>
        {/* Card top accent bar */}
        <div style={{ height: "4px", backgroundColor: service.accent, flexShrink: 0 }} />

        <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flex: 1 }}>
          {/* Header row */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", backgroundColor: service.accent === C.terra ? "rgba(212,149,106,0.12)" : "rgba(142,182,155,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>
                {service.emoji}
              </div>
              <div>
                <p style={{ color: service.accent, fontSize: "0.7rem", fontWeight: "700", letterSpacing: "0.1em" }}>{service.num}</p>
                <h3 style={{ ...serif, color: C[950], fontSize: "1.1rem", fontWeight: "700", lineHeight: 1.3, marginTop: "0.2rem" }}>{service.title}</h3>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <p style={{ color: C[700], fontSize: "0.875rem", fontStyle: "italic", marginBottom: "1.25rem", lineHeight: 1.5, borderLeft: `3px solid ${service.accent}`, paddingLeft: "0.75rem" }}>
            {service.tagline}
          </p>

          {/* Points */}
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
            {service.points.map((p) => (
              <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontSize: "0.85rem", color: C[700], lineHeight: "1.6" }}>
                <span style={{ width: "18px", height: "18px", borderRadius: "50%", backgroundColor: service.accent === C.terra ? "rgba(212,149,106,0.15)" : "rgba(142,182,155,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={service.accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                {p}
              </li>
            ))}
          </ul>

          {/* Who it's for — pushed to bottom */}
          <div style={{ backgroundColor: C.cream, borderRadius: "12px", padding: "0.875rem 1rem", marginTop: "auto", marginBottom: service.quote ? "1rem" : "0" }}>
            <p style={{ fontSize: "0.7rem", fontWeight: "700", color: C[700], letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.25rem" }}>Who it's for</p>
            <p style={{ fontSize: "0.82rem", color: C[700], lineHeight: "1.6" }}>{service.forWho}</p>
          </div>

          {/* Quote */}
          {service.quote && (
            <div style={{ marginTop: "1rem", backgroundColor: service.accent === C.terra ? "rgba(212,149,106,0.08)" : "rgba(142,182,155,0.08)", borderRadius: "12px", padding: "0.875rem 1rem", borderLeft: `3px solid ${service.accent}` }}>
              <p style={{ fontSize: "0.82rem", color: C[800], fontStyle: "italic", lineHeight: "1.7" }}>💬 "{service.quote}"</p>
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}

function CoreServicesSection() {
  return (
    <section style={{ backgroundColor: C.cream, padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ScrollReveal animation="fadeUp">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ color: C.terra, fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>What We Offer</p>
            <h2 style={{ ...serif, color: C[950], fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: "700", lineHeight: 1.25 }}>
              Our Core Services
            </h2>
            <p style={{ color: C[700], fontSize: "0.95rem", marginTop: "0.75rem", maxWidth: "500px", margin: "0.75rem auto 0" }}>
              Eight carefully chosen services. Each one built around what actually matters in a senior's daily life.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 4 — ADD-ONS
═══════════════════════════════════════ */
const addons = [
  { icon: "💉", title: "Vaccination at Home",      desc: "Flu, pneumonia, and other recommended vaccines administered by trained staff" },
  { icon: "🥗", title: "Nutrition Program",         desc: "Personalised 3-month diet plan by expert dieticians" },
  { icon: "🧠", title: "Memory & Dementia Care",    desc: "Specialist programs and family coaching for memory-related conditions" },
  { icon: "📱", title: "Elder Tech Devices",        desc: "GPS trackers, fall sensors, SOS buttons, smart medication dispensers" },
  { icon: "🚗", title: "Transportation Support",    desc: "Safe, assisted travel to hospitals, clinics, or family events" },
];

function AddOnsSection() {
  return (
    <section style={{ backgroundColor: C[900], padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ScrollReveal animation="fadeUp">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: C[300], fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Extras</p>
            <h2 style={{ ...serif, color: C[100], fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: "700" }}>
              Need Something Extra? We've Got You.
            </h2>
          </div>
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
          {addons.map(({ icon, title, desc }, i) => (
            <ScrollReveal key={title} animation="scaleIn" delay={i * 80} duration={600}>
              <div style={{ backgroundColor: C[800], borderRadius: "18px", padding: "1.75rem", border: "1px solid rgba(142,182,155,0.12)", display: "flex", gap: "1rem", alignItems: "flex-start", height: "100%" }}>
                <div style={{ fontSize: "1.75rem", lineHeight: 1, flexShrink: 0 }}>{icon}</div>
                <div>
                  <p style={{ ...serif, color: C[100], fontSize: "0.95rem", fontWeight: "700", marginBottom: "0.4rem" }}>{title}</p>
                  <p style={{ color: C[300], fontSize: "0.82rem", lineHeight: "1.65" }}>{desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 5 — HOW IT WORKS
═══════════════════════════════════════ */
const steps = [
  {
    num: "01",
    icon: "📞",
    title: "Book a Free Call",
    desc: "Talk to a Celedon Care Expert. Tell us about your parent — health condition, location, daily routine, and what worries you most.",
  },
  {
    num: "02",
    icon: "📋",
    title: "Get a Personalised Care Plan",
    desc: "We assess your parent's needs and recommend the right combination of services and membership plan.",
  },
  {
    num: "03",
    icon: "🏠",
    title: "Care Begins at Home",
    desc: "Our verified team arrives at your parent's home. You get real-time updates, regular reports, and 24/7 access to support.",
  },
];

function HowItWorks() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ScrollReveal animation="fadeUp">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ color: C.primary, fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>The Process</p>
            <h2 style={{ ...serif, color: C[950], fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: "700" }}>
              Simple to Start. Powerful in Practice.
            </h2>
          </div>
        </ScrollReveal>

        {/* Steps with connector line */}
        <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0", position: "relative" }}>
          {/* Connector line behind steps */}
          <div style={{ position: "absolute", top: "52px", left: "calc(16.6% + 24px)", right: "calc(16.6% + 24px)", height: "2px", backgroundColor: C[100], zIndex: 0 }} className="steps-line" />

          {steps.map(({ num, icon, title, desc }, i) => (
            <ScrollReveal key={title} animation="fadeUp" delay={i * 150} duration={680}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
                {/* Circle */}
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", backgroundColor: i === 1 ? C[800] : C.cream, border: `3px solid ${i === 1 ? C[800] : C[100]}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.75rem", marginBottom: "1.5rem", boxShadow: i === 1 ? "0 8px 32px rgba(5,31,32,0.25)" : "0 4px 16px rgba(5,31,32,0.08)", flexShrink: 0 }}>
                  {icon}
                </div>
                <p style={{ color: C.terra, fontSize: "0.7rem", fontWeight: "700", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>STEP {num}</p>
                <h3 style={{ ...serif, color: C[950], fontSize: "1.05rem", fontWeight: "700", marginBottom: "0.75rem" }}>{title}</h3>
                <p style={{ color: C[700], fontSize: "0.875rem", lineHeight: "1.75" }}>{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fadeUp" delay={300}>
          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <Link href="/contact" style={{ backgroundColor: C[800], color: C[100], padding: "0.9rem 2rem", borderRadius: "9999px", fontSize: "0.95rem", fontWeight: "600", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              Book Your Free Call
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .steps-line  { display: none !important; }
        }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 6 — REASSURANCE BLOCK
═══════════════════════════════════════ */
function ReassuranceBlock() {
  const trustPoints = [
    "Verified and trained care professionals",
    "Transparent pricing — no hidden charges",
    "Every service backed by a satisfaction guarantee",
  ];

  return (
    <section style={{ backgroundColor: C[800], padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reassure-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

          {/* Left */}
          <ScrollReveal animation="fadeLeft" duration={700}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "rgba(212,149,106,0.15)", border: "1px solid rgba(212,149,106,0.3)", color: C.terra, padding: "0.375rem 0.875rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: "600", marginBottom: "1.25rem" }}>
                Startup Honesty
              </div>
              <h2 style={{ ...serif, color: C[100], fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: "700", lineHeight: 1.3, marginBottom: "1.25rem" }}>
                We're New —<br />
                <span style={{ color: C.terra }}>But We're Not Guessing</span>
              </h2>
              <p style={{ color: C[300], fontSize: "0.95rem", lineHeight: "1.8", marginBottom: "0.75rem" }}>
                At Celedon, we've built our services based on deep research, international geriatric care standards, and honest conversations with hundreds of Indian families. Every service we offer is one we'd want for our own parents.
              </p>
              <p style={{ color: C[300], fontSize: "0.95rem", lineHeight: "1.8" }}>
                We may be a young company —{" "}
                <strong style={{ color: C[100] }}>but our commitment to quality is non-negotiable.</strong>
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Trust points */}
          <ScrollReveal animation="fadeRight" delay={120} duration={700}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {trustPoints.map((p, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "1.25rem 1.5rem", border: "1px solid rgba(142,182,155,0.12)" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "rgba(142,182,155,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C[300]} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <p style={{ color: C[100], fontSize: "0.9rem", fontWeight: "500", lineHeight: "1.5" }}>{p}</p>
                </div>
              ))}

              {/* Stat strip */}
              <div style={{ display: "flex", gap: "1.5rem", marginTop: "0.5rem", padding: "1.25rem 1.5rem", backgroundColor: "rgba(212,149,106,0.1)", borderRadius: "16px", border: "1px solid rgba(212,149,106,0.2)" }}>
                {[{ n: "500+", l: "Families Served" }, { n: "96%", l: "Satisfaction" }, { n: "8", l: "Core Services" }].map(({ n, l }) => (
                  <div key={l} style={{ flex: 1, textAlign: "center" }}>
                    <p style={{ ...serif, color: C.terra, fontSize: "1.5rem", fontWeight: "700" }}>{n}</p>
                    <p style={{ color: C[300], fontSize: "0.72rem", marginTop: "0.2rem" }}>{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .reassure-grid { grid-template-columns: 1fr !important; }
          .steps-grid    { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 7 — CTA
═══════════════════════════════════════ */
function ServicesCTA() {
  return (
    <section style={{ background: "linear-gradient(135deg, #051F20 0%, #163832 55%, #235347 100%)", padding: "5rem 1.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "240px", height: "240px", borderRadius: "50%", backgroundColor: C.terra, opacity: 0.1 }} />
      <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "180px", height: "180px", borderRadius: "50%", backgroundColor: C[300], opacity: 0.07 }} />

      <div style={{ position: "relative", maxWidth: "640px", margin: "0 auto" }}>
        <ScrollReveal animation="fadeUp" duration={700}>
          <p style={{ color: C[300], fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Let's Talk
          </p>
          <h2 style={{ ...serif, color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: "700", lineHeight: 1.25, marginBottom: "1rem" }}>
            Not Sure Which Services You Need?
          </h2>
          <p style={{ color: "rgba(218,241,222,0.85)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "2.5rem" }}>
            Let's figure it out together. Our Care Experts will guide you — no pressure, no sales pitch.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={180} duration={650}>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ backgroundColor: C.terra, color: "#fff", padding: "1rem 2.25rem", borderRadius: "9999px", fontSize: "1rem", fontWeight: "700", textDecoration: "none", boxShadow: "0 6px 24px rgba(212,149,106,0.4)", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              Book a Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link href="/plans" style={{ color: "#fff", border: "2px solid rgba(255,255,255,0.4)", padding: "1rem 2.25rem", borderRadius: "9999px", fontSize: "1rem", fontWeight: "600", textDecoration: "none" }}>
              View Our Plans
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   PAGE EXPORT
═══════════════════════════════════════ */
export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <HonestIntro />
      <CoreServicesSection />
      <AddOnsSection />
      <HowItWorks />
      <ReassuranceBlock />
      <ServicesCTA />
    </>
  );
}
