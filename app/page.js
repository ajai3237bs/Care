"use client";

import React from 'react';
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./ui/Button";

// Icon Import //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcaseMedical, faHeartPulse, faUserNurse, faPeopleArrows, faPersonBreastfeeding, faHouseMedical, faWheelchair, faChildren } from "@fortawesome/free-solid-svg-icons";



//  Design Tokens //
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

//  Reusable Check Icon //
function CheckIcon({ color = "#8EB69B" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}



// SECTION 1 — HERO //

function HeroSection() {
  return (
    <section style={{ backgroundImage: `url('/asset/banner4.png')`, backgroundSize: "cover", backgroundPosition: "center", position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center" }}>
      {/* Dark overlay — solid left, fades right */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,31,32,0.97) 0%, rgba(5,31,32,0.40) 15%, rgba(5,31,32,0.50) 25%, rgba(5,31,32,0.10) 80%)" }} />

      <div style={{ position: "relative", width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "8rem 1.5rem 4rem" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>

          {/* Left: Content */}
          <div>

            {/* Headline */}
            <h1 style={{ ...serif, color: "#ffffff", fontSize: "clamp(2.2rem,5vw,3.4rem)", fontWeight: "500", lineHeight: "1.2", marginBottom: "1.25rem", textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}>
              Give Your Family{" "}
              <span style={{ color: "#C8A96A" }}>The Care</span>
              {" "}They Truly Deserve
            </h1>
            {/* Button Component */}
            <Button href="/plans">Explore Plans</Button>
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


//  SECTION 2 — TRUST BAR //

const trustPillars = [
  {
    label: "Home Care",
    icon: (
      <FontAwesomeIcon
        icon={faHouseMedical}
        style={{ color: "#6B8F71", fontSize: "28px" }}
      />
    ),
  },
  {
    label: "Medical Support",
    icon: (
      <FontAwesomeIcon
        icon={faSuitcaseMedical}
        style={{ color: "#6B8F71", fontSize: "28px" }}
      />
    ),
  },
  {
    label: "PostPartum Care",
    icon: (
      <FontAwesomeIcon
        icon={faPersonBreastfeeding}
        style={{ color: "#6B8F71", fontSize: "28px" }}
      />
    ),
  },
  {
    label: "Wellness",
    icon: (
      <FontAwesomeIcon
        icon={faHeartPulse}
        style={{ color: "#6B8F71", fontSize: "28px" }}
      />
    ),
  },
  {
    label: "Geriatric Experts",
    icon: (
      <FontAwesomeIcon
        icon={faUserNurse}
        style={{ color: "#6B8F71", fontSize: "28px" }}
      />
    ),
  },
];


function TrustBar() {
  return (
    <section
      style={{
        backgroundColor: "#EAF5F1",
        padding: "4.5rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            ...serif,
            color: "#0B2B26",
            fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
            fontWeight: "700",
            marginBottom: "3rem",
            lineHeight: "1.4",
          }}
        >
          Expert Elder & Postpartum Care <br />
          Right at Your Doorstep
        </h2>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          {trustPillars.map(({ label, icon }) => (
            <div
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.9rem",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "1.75rem 2rem",
                minWidth: "160px",
                minHeight: "140px",
                boxShadow: "0 4px 18px rgba(35,83,71,0.12)",
                transition: "all 0.25s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-6px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div style={{ color: "#6B8F71" }}>{icon}</div>

              <span
                style={{
                  color: "#163832",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  textAlign: "center",
                  lineHeight: "1.5",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


//  SECTION 3 — CHALLENGES //

const challenges = [
  {
    title: "Falls & Mobility",
    desc: "Reduced mobility can make everyday activities challenging and increase the risk of falls. Our caregivers provide gentle support, balance assistance, and guided movement to help seniors stay safe, confident, and independent at home.",
    icon: (
      <FontAwesomeIcon
        icon={faWheelchair}
        style={{ color: "#6B8F71", fontSize: "28px" }}
      />
    ),
  },
  {
    title: "Chronic Conditions",
    desc: "Managing conditions like diabetes, heart disease, or arthritis requires consistent care and attention. Our caregivers support daily routines, monitor health needs, and stay connected with doctors to help seniors remain stable, comfortable, and well cared for at home.",
    icon: (
      <FontAwesomeIcon
        icon={faHouseMedical}
        style={{ color: "#6B8F71", fontSize: "28px" }}
      />
    ),
  },
  {
    title: "Loneliness & Isolation",
    desc: "Loneliness can impact overall well-being just as much as physical illness. Our companion care provides friendly support, meaningful interaction, and engaging activities to help seniors feel connected, valued, and mentally active every day.",
    icon: (
      <FontAwesomeIcon
        icon={faPeopleArrows}
        style={{ color: "#6B8F71", fontSize: "28px" }}
      />
    ),
  },
  {
    title: "Distance from Children",
    desc: "Being away from your parents can create constant concern and uncertainty. Celedon helps you stay reassured with regular updates, easy communication, and round-the-clock caregiver support—so you always feel connected, no matter the distance.",
    icon: (
      <FontAwesomeIcon
        icon={faChildren}
        style={{ color: "#6B8F71", fontSize: "28px" }}
      />
    ),
  },
  {
    title: "Postpartum Recovery",
    desc: "The weeks after childbirth can be physically exhausting and emotionally overwhelming. Our trained caregivers and newborn care specialists provide gentle support, helping new mothers rest, recover, and build a strong, confident bond with their baby.",
    icon: (
      <FontAwesomeIcon
        icon={faPersonBreastfeeding}
        style={{ color: "#6B8F71", fontSize: "28px" }}
      />
    ),
  },
];

function ChallengesSection() {
  return (
    <section
      style={{
        backgroundColor: "#FAFDFB",
        padding: "5.5rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p
            style={{
              color: "#6B8F71",
              fontSize: "0.95rem",
              fontWeight: "600",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            The Problems We Solve
          </p>

          <h2
            style={{
              ...serif,
              color: "#051F20",
              fontSize: "clamp(1.9rem, 3vw, 2.6rem)",
              fontWeight: "700",
              lineHeight: "1.4",
            }}
          >
            Life’s Most Important Transitions
            <br />
            We Help You Face Them Together
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {challenges.map(({ title, desc, icon }) => (
            <div
              key={title}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "22px",
                padding: "2rem",
                border: "1px solid #E3EFE8",
                boxShadow: "0 6px 24px rgba(35,83,71,0.08)",
                transition: "all 0.25s ease",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  backgroundColor: "#EAF5F1",
                  color: "#6B8F71",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                {icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  ...serif,
                  color: "#0B2B26",
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  marginBottom: "0.75rem",
                  lineHeight: "1.4",
                }}
              >
                {title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "#2F4F4F",
                  fontSize: "0.95rem",
                  lineHeight: "1.75",
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION 4 — HOW CELEDON HELPS //
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
  {
    title: "Postpartum Support",
    desc: "Trained postpartum nurses and newborn care specialists for new mothers — covering recovery, lactation, baby care, and mental wellness through every step.",
    points: ["Mother recovery care", "Newborn nursing", "Lactation guidance", "Postpartum wellness"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>,
  },
];

function ServicesSection() {
  return (
    <section style={{ backgroundColor: "#DAF1DE", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "#6B8F71", fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>How We Help</p>
          <h2 style={{ ...serif, color: "#051F20", fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: "700" }}>
            Holistic Care, For Every Generation
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

//  SECTION 5 — WHY CHOOSE CELEDON  //
const whyPoints = [
  "Deep geriatric and postpartum expertise behind every care plan",
  "International care models adapted for Indian families",
  "Background-verified, trained, and empathetic caregivers",
  "Tech-enabled monitoring with real-time family dashboards",
  "Flexible and affordable membership plans",
];

const statsGrid = [
  { n: "24/7", l: "Emergency Support" },
  { n: "100%", l: "Background Verified" },
  { n: "7-Day", l: "Satisfaction Guarantee" },
  { n: "2026", l: "Founded with Purpose" },
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
              We combine geriatric expertise and postpartum care in one trusted service — so every generation in your family gets care that feels like family, not a clinic.
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            {statsGrid.map(({ n, l }) => (
              <div
                key={l}
                style={{
                  backgroundColor: "#163832",
                  borderRadius: "18px",
                  padding: "1.75rem",
                  textAlign: "center",
                  border: "1px solid #235347",
                }}
              >
                <p
                  style={{
                    ...serif,
                    color: "#C8A96A",
                    fontSize: "2.2rem",
                    fontWeight: "700",
                  }}
                >
                  {n}
                </p>

                <p
                  style={{
                    color: "#8EB69B",
                    fontSize: "0.8rem",
                    marginTop: "0.375rem",
                  }}
                >
                  {l}
                </p>
              </div>
            ))}
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

//  SECTION 6 — OUR PROMISE //
const promises = [
  {
    title: "Treated Like Family, Not a Case",
    desc: "Every senior or new mother we care for is a real person with a real story. Our caregivers are trained to listen, connect, and genuinely care — not just complete a checklist.",
  },
  {
    title: "You're Never Left in the Dark",
    desc: "Whether you're in the next room or in another country, we keep you updated. Real-time reports, family calls, and a direct line to your care team — always.",
  },
  {
    title: "We Stand Behind Every Plan",
    desc: "Not happy in the first 7 days? We'll make it right or refund you. No fine print. We'd rather earn your trust than hold onto your money.",
  },
];

function PromisesSection() {
  return (
    <section style={{ backgroundColor: "#FDF8F3", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "#6B8F71", fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>What We Stand For</p>
          <h2 style={{ ...serif, color: "#051F20", fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: "700" }}>
            Three Things We Promise Every Family
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {promises.map(({ title, desc }) => (
            <div key={title} style={{ backgroundColor: "#fff", borderRadius: "20px", padding: "2rem", boxShadow: "0 4px 20px rgba(22,56,50,0.07)", border: "1px solid rgba(142,182,155,0.2)", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ fontSize: "2.25rem", lineHeight: 1 }}></div>
              <h3 style={{ ...serif, color: "#0B2B26", fontSize: "1.1rem", fontWeight: "700", lineHeight: 1.4 }}>{title}</h3>
              <p style={{ color: "#235347", fontSize: "0.875rem", lineHeight: "1.8" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// PAGE EXPORT // 
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ChallengesSection />
      <ServicesSection />
      <WhyChooseSection />
      <PromisesSection />
      <Footer />
      <Header />
    </>
  );
}
