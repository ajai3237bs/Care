"use client";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import Footer from "../components/Footer";
import Header from "../components/Header";


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

/* ═══════════════════════════════════════
   SECTION 1 — HERO
═══════════════════════════════════════ */
function AboutHero() {
  return (
    <section style={{
      backgroundImage: `url('/asset/banner2.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center top",
      position: "relative",
      overflow: "hidden",
      minHeight: "560px",
      display: "flex",
      alignItems: "center",
    }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,31,32,0.93) 0%, rgba(5,31,32,0.78) 55%, rgba(5,31,32,0.35) 100%)" }} />

      <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "10rem 1.5rem 5rem", width: "100%" }}>
        <ScrollReveal animation="fadeUp" delay={0} duration={700}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "rgba(142,182,155,0.15)", border: "1px solid rgba(142,182,155,0.3)", color: C[300], padding: "0.375rem 1rem", borderRadius: "9999px", fontSize: "0.8rem", fontWeight: "500", marginBottom: "1.5rem" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: C.terra, display: "inline-block" }} />
            Our Story
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={120} duration={750}>
          <h1 style={{ ...serif, color: "#ffffff", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: "700", lineHeight: "1.2", maxWidth: "640px", marginBottom: "1.25rem", textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}>
            Supporting every generation with care{" "}
            <span style={{ color: C.terra }}>Comfort and Dignity</span>
          </h1>
        </ScrollReveal>

        {/* <ScrollReveal animation="fadeUp" delay={260} duration={750}>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: "1.8", maxWidth: "520px", textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
            Like you, we've worried about a parent alone at home. That worry became our purpose.
          </p>
        </ScrollReveal> */}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 2 — OUR STORY
═══════════════════════════════════════ */
function OurStory() {
  return (
    <section style={{ backgroundColor: C.cream, padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="story-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

          {/* Left */}
          <ScrollReveal animation="fadeLeft" duration={700}>
            <div>
              <p style={{ color: C.terra, fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>The Origin</p>
              <h2 style={{ ...serif, color: C[950], fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: "700", lineHeight: 1.25, marginBottom: "1.75rem" }}>
                A Simple Problem.<br />A Big Mission.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  "Celedon was born out of a personal moment — watching a parent struggle to get the care they deserved, while family members were miles away, helpless.",
                  "We looked around and saw the same story repeating in thousands of Indian families. Quality elder care existed — but it was fragmented, hard to access, and rarely felt human.",
                  "So we built Celedon. A service designed not just around health, but around dignity, warmth, and the comfort of home. We're just getting started — and we're building this with every family who trusts us.",
                ].map((p, i) => (
                  <p key={i} style={{ color: C[700], fontSize: "0.95rem", lineHeight: "1.8" }}>{p}</p>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal animation="fadeRight" delay={100} duration={700}>
            <div style={{ position: "relative" }}>
              <div style={{ backgroundColor: C[800], borderRadius: "24px", padding: "2.5rem", boxShadow: "0 20px 60px rgba(5,31,32,0.2)" }}>
                <div style={{ position: "absolute", top: "-24px", right: "-24px", width: "120px", height: "120px", borderRadius: "50%", backgroundColor: C.terra, opacity: 0.15 }} />
                <div style={{ position: "absolute", bottom: "-16px", left: "-16px", width: "80px", height: "80px", borderRadius: "50%", backgroundColor: C[300], opacity: 0.12 }} />
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={C[300]} strokeWidth="1.5" style={{ marginBottom: "1.5rem" }}>
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
                <p style={{ ...serif, color: C[100], fontSize: "1.3rem", fontWeight: "700", lineHeight: 1.4, marginBottom: "1.5rem" }}>
                  "Care should never feel institutional. Home is where healing happens."
                </p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.25rem", display: "flex", gap: "2rem" }}>
                  {[{ n: "500+", l: "Families Touched" }, { n: "96%", l: "Satisfaction" }, { n: "2024", l: "Founded" }].map(({ n, l }) => (
                    <div key={l}>
                      <p style={{ ...serif, color: C.terra, fontSize: "1.5rem", fontWeight: "700" }}>{n}</p>
                      <p style={{ color: C[300], fontSize: "0.75rem", marginTop: "0.2rem" }}>{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .story-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 3 — MISSION & VISION
═══════════════════════════════════════ */
function MissionVision() {
  return (
    <section style={{ backgroundColor: C[900], padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ScrollReveal animation="fadeUp" duration={650}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ color: C[300], fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>What Drives Us</p>
            <h2 style={{ ...serif, color: C[100], fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: "700" }}>
              Mission &amp; Vision
            </h2>
          </div>
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {/* Mission */}
          <ScrollReveal animation="fadeLeft" delay={0} duration={680}>
            <div style={{ backgroundColor: C[800], borderRadius: "22px", padding: "2.5rem", border: "1px solid rgba(142,182,155,0.15)", position: "relative", overflow: "hidden", height: "100%" }}>
              <div style={{ position: "absolute", top: "-30px", right: "-30px", width: "100px", height: "100px", borderRadius: "50%", backgroundColor: C.terra, opacity: 0.1 }} />
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", backgroundColor: "rgba(212,149,106,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke={C.terra} strokeWidth="2" width="26" height="26">
                  <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <p style={{ color: C.terra, fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Our Mission</p>
              <p style={{ ...serif, color: C[100], fontSize: "1.15rem", fontWeight: "700", lineHeight: 1.5, marginBottom: "1rem" }}>
                To make aging a dignified, joyful, and well-supported experience.
              </p>
              <p style={{ color: C[300], fontSize: "0.9rem", lineHeight: "1.75" }}>
                Starting right at home — because that's where seniors feel safe, loved, and most like themselves.
              </p>
            </div>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal animation="fadeRight" delay={120} duration={680}>
            <div style={{ backgroundColor: C[800], borderRadius: "22px", padding: "2.5rem", border: "1px solid rgba(142,182,155,0.15)", position: "relative", overflow: "hidden", height: "100%" }}>
              <div style={{ position: "absolute", top: "-30px", right: "-30px", width: "100px", height: "100px", borderRadius: "50%", backgroundColor: C[300], opacity: 0.08 }} />
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", backgroundColor: "rgba(142,182,155,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke={C[300]} strokeWidth="2" width="26" height="26">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <p style={{ color: C[300], fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Our Vision</p>
              <p style={{ ...serif, color: C[100], fontSize: "1.15rem", fontWeight: "700", lineHeight: 1.5, marginBottom: "1rem" }}>
                Every senior in India has access to expert care, companionship, and freedom.
              </p>
              <p style={{ color: C[300], fontSize: "0.9rem", lineHeight: "1.75" }}>
                A future where aging on your own terms isn't a privilege — it's the standard.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 4 — VALUES
═══════════════════════════════════════ */
const values = [
  { emoji: "💚", title: "People over process", desc: "Every senior is a person, not a case file. We treat them as we'd treat our own family." },
  { emoji: "🏠", title: "Home is sacred", desc: "Care should never feel institutional. Comfort, familiarity, and warmth matter as much as medicine." },
  { emoji: "🤝", title: "Family stays in the loop", desc: "No parent should feel alone. No child should feel helpless. We keep everyone connected." },
  { emoji: "📈", title: "Always improving", desc: "We're a startup and we learn fast. Every family we serve makes us sharper and more thoughtful." },
  { emoji: "❤️", title: "Empathy first", desc: "Every decision starts with one question: how does this feel for the senior?" },
];

function ValuesSection() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ScrollReveal animation="fadeUp" duration={650}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: C.primary, fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>What We Stand For</p>
            <h2 style={{ ...serif, color: C[950], fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: "700" }}>
              A Few Things We'll Never Compromise On
            </h2>
          </div>
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
          {values.map(({ emoji, title, desc }, i) => (
            <ScrollReveal key={title} animation="scaleIn" delay={i * 90} duration={600}>
              <div style={{ backgroundColor: C.cream, borderRadius: "20px", padding: "1.875rem", border: "1px solid #DAF1DE", height: "100%" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem", lineHeight: 1 }}>{emoji}</div>
                <h3 style={{ ...serif, color: C[900], fontSize: "1rem", fontWeight: "700", marginBottom: "0.625rem" }}>{title}</h3>
                <p style={{ color: C[700], fontSize: "0.875rem", lineHeight: "1.7" }}>{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 5 — FOUNDERS
═══════════════════════════════════════ */
const founders = [
  {
    name: "Arjun Mehta",
    title: "Co-Founder & CEO",
    initials: "AM",
    note: "I started Celedon after spending six months coordinating my father's care from Bangalore while he was in Lucknow. I knew every family shouldn't have to go through that alone.",
    color: C[800],
  },
  {
    name: "Nisha Iyer",
    title: "Co-Founder & Head of Care",
    initials: "NI",
    note: "I started Celedon because I spent years as a geriatric nurse watching brilliant elders fade — not from illness, but from loneliness. That had to change.",
    color: C[700],
  },
];

function FoundersSection() {
  return (
    <section style={{ backgroundColor: C.cream, padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ScrollReveal animation="fadeUp" duration={650}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: C.terra, fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>The People Behind Celedon</p>
            <h2 style={{ ...serif, color: C[950], fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: "700" }}>
              Meet the Founders
            </h2>
            <p style={{ color: C[700], fontSize: "0.95rem", marginTop: "0.75rem", maxWidth: "480px", margin: "0.75rem auto 0" }}>
              Real people, real motivation. This is who you're trusting when you choose Celedon.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          {founders.map(({ name, title, initials, note, color }, i) => (
            <ScrollReveal key={name} animation="fadeUp" delay={i * 140} duration={680}>
              <div style={{ backgroundColor: "#fff", borderRadius: "22px", padding: "2.25rem", boxShadow: "0 4px 24px rgba(22,56,50,0.08)", border: "1px solid rgba(142,182,155,0.2)", maxWidth: "360px", width: "100%", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: color, color: C[100], display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", fontWeight: "700", flexShrink: 0 }}>
                    {initials}
                  </div>
                  <div>
                    <p style={{ ...serif, color: C[900], fontSize: "1rem", fontWeight: "700" }}>{name}</p>
                    <p style={{ color: C.primary, fontSize: "0.8rem", marginTop: "0.2rem" }}>{title}</p>
                  </div>
                </div>
                <div style={{ color: C[300], opacity: 0.4 }}>
                  <svg width="24" height="18" viewBox="0 0 36 28" fill="currentColor">
                    <path d="M0 28V17C0 6.333 5.333 1 16 0l2 3C12.667 4.333 10 6.667 9 10h8v18H0zm20 0V17C20 6.333 25.333 1 36 0l2 3C32.667 4.333 30 6.667 29 10h8v18H20z" />
                  </svg>
                </div>
                <p style={{ color: C[700], fontSize: "0.9rem", lineHeight: "1.8", fontStyle: "italic", flex: 1 }}>{note}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 6 — WHERE WE ARE TODAY
═══════════════════════════════════════ */
function TodaySection() {
  return (
    <section style={{ backgroundColor: C[900], padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="today-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

          <ScrollReveal animation="fadeLeft" duration={700}>
            <div>
              <p style={{ color: C.terra, fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Honest &amp; Grounded</p>
              <h2 style={{ ...serif, color: C[100], fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: "700", marginBottom: "1.25rem" }}>
                We're Early. And That's{" "}
                <span style={{ color: C.terra }}>Exciting.</span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p style={{ color: C[300], fontSize: "0.95rem", lineHeight: "1.8" }}>
                  Celedon is a young company with a big heart. We're currently serving families across India and growing every month. Every member we serve makes us sharper, more thoughtful, and more committed to our mission.
                </p>
                <p style={{ color: C[300], fontSize: "0.95rem", lineHeight: "1.8" }}>
                  We don't have decades of history — but we have something more important right now: <strong style={{ color: C[100] }}>full focus, genuine care, and the drive to get this right.</strong>
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { icon: "📍", label: "Serving families across India", sub: "And expanding every month" },
              { icon: "⭐", label: "96% member satisfaction", sub: "Based on direct family feedback" },
              { icon: "🚀", label: "Launched in 2024", sub: "Fresh eyes on an old problem" },
            ].map(({ icon, label, sub }, i) => (
              <ScrollReveal key={label} animation="fadeRight" delay={i * 110} duration={650}>
                <div style={{ backgroundColor: C[800], borderRadius: "16px", padding: "1.25rem 1.5rem", border: "1px solid rgba(142,182,155,0.12)", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{icon}</span>
                  <div>
                    <p style={{ color: C[100], fontSize: "0.9rem", fontWeight: "600" }}>{label}</p>
                    <p style={{ color: C[300], fontSize: "0.8rem", marginTop: "0.2rem" }}>{sub}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .today-grid { grid-template-columns: 1fr !important; }
          .story-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 7 — CTA
═══════════════════════════════════════ */
function AboutCTA() {
  return (
    <section style={{ background: "linear-gradient(135deg, #163832 0%, #6B8F71 100%)", padding: "5rem 1.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "220px", height: "220px", borderRadius: "50%", backgroundColor: C.terra, opacity: 0.12 }} />
      <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "160px", height: "160px", borderRadius: "50%", backgroundColor: C[100], opacity: 0.07 }} />

      <div style={{ position: "relative", maxWidth: "640px", margin: "0 auto" }}>
        <ScrollReveal animation="fadeUp" duration={700}>
          <p style={{ color: C[100], opacity: 0.8, fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Be Part of Something Real
          </p>
          <h2 style={{ ...serif, color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: "700", lineHeight: 1.25, marginBottom: "1rem" }}>
            Care Enough to Join Us?
          </h2>
          <p style={{ color: C[100], opacity: 0.85, fontSize: "1rem", lineHeight: "1.7", marginBottom: "2.5rem" }}>
            Whether you're a family looking for care, or a professional who believes in our mission — there's a place for you here.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={180} duration={650}>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/plans" style={{ backgroundColor: C.terra, color: "#fff", padding: "1rem 2.25rem", borderRadius: "9999px", fontSize: "1rem", fontWeight: "700", textDecoration: "none", boxShadow: "0 6px 24px rgba(212,149,106,0.4)", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              Explore Care Plans
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link href="/contact" style={{ color: "#fff", border: "2px solid rgba(255,255,255,0.45)", padding: "1rem 2.25rem", borderRadius: "9999px", fontSize: "1rem", fontWeight: "600", textDecoration: "none" }}>
              Work With Us
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
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <ValuesSection />
      <FoundersSection />
      <TodaySection />
      <AboutCTA />
      <Footer />
      <Header />
    </>
  );
}
