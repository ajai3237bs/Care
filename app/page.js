"use client";

import React, { useRef, useEffect, useState } from 'react';
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./ui/Button";
import RegisterModal from './components/RegisterForm';
import Image from 'next/image';

// Icon Import //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcaseMedical,
  faHeartPulse,
  faUserNurse,
  faPeopleArrows,
  faPersonBreastfeeding,
  faHouseMedical,
  faWheelchair,
  faChildren
}
  from "@fortawesome/free-solid-svg-icons";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";




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
  const [open, setOpen] = useState(false);
  return (
    <section style={{ backgroundImage: `url('/asset/banner4.png')`, backgroundSize: "cover", backgroundPosition: "center", position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center" }}>
      {/* Dark overlay — solid left, fades right */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,31,32,0.97) 0%, rgba(5,31,32,0.40) 15%, rgba(5,31,32,0.50) 25%, rgba(5,31,32,0.10) 80%)" }} />

      <div style={{ position: "relative", width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "8rem 1.5rem 4rem" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>

          {/* Left: Content */}
          <div>

            {/* Headline */}
            <h1 style={{ fontFamily: "var(--font-dancing)", color: "#ffffff", fontSize: "clamp(2.8rem,6vw,4.2rem)", fontWeight: "700", lineHeight: "1.2", marginBottom: "1.25rem", textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}>
              Give Your Family{" "}
              <span style={{ color: "#C8A96A" }}>The Care</span>
              {" "}They Truly Deserve
            </h1>
            {/* Button Component */}
            <>
              <Button onOpen={() => setOpen(true)}>
                Get Started
              </Button>
              {/* Modal */}
              {open && <RegisterModal onClose={() => setOpen(false)} />}
            </>
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
// SECTION 2 — ABOUT //

function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-[#EAF5F1] via-[#f5fbf8] to-[#ffffff] py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="relative w-full h-[350px] md:h-[420px] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/asset/aboutbanner.png"
            alt="Elder care"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2B26] mb-3">
            What is Celedon?
          </h2>

          <p className="text-xl text-gray-700 font-medium mb-4">
            Your extended family
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Celedon is a home based care platform that supports
            elderly parents and new mothers with reliable,
            compassionate, and verified assistance.
            We help families manage care remotely through trained
            caregivers, nurses, monitoring, reminders, and emergency
            support.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            To make home care trusted, accessible, and emotionally
            reassuring for every family.
          </p>

          <Button href="/about" size="md">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}


//  SECTION 3 — TRUST BAR //

const trustPillars = [
  {
    label: "Home Care",
    description:
      "Personalized in home assistance including daily activities, hygiene support, and companionship for seniors.",
    icon: faHouseMedical,
  },
  {
    label: "Medical Support",
    description:
      "Professional nursing care, medication management, and health monitoring at home.",
    icon: faSuitcaseMedical,
  },
  {
    label: "Postpartum Care",
    description:
      "Complete support for new mothers and newborns including recovery, baby care, and emotional support.",
    icon: faPersonBreastfeeding,
  },
  {
    label: "Wellness",
    description:
      "Holistic care including physiotherapy, mental wellness, and lifestyle support.",
    icon: faHeartPulse,
  },
  {
    label: "Geriatric Experts",
    description:
      "Specialized elderly care planning and consultation from experienced professionals.",
    icon: faUserNurse,
  },
];


function TrustBar() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-gradient-to-br from-gray-50 via-green-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0B2B26] mb-10 leading-relaxed">
          Expert Elder & Postpartum Care <br />
          Right at Your Doorstep
        </h2>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {trustPillars.map((item) => (
            <div
              key={item.label}
              onClick={() => setSelected(item)}
              className="flex flex-col items-center gap-3 bg-white rounded-2xl px-6 py-6 min-w-[160px] shadow-md hover:shadow-lg hover:-translate-y-1 transition cursor-pointer"
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="text-[#6B8F71] text-2xl"
              />

              <span className="text-xl font-semibold text-[#163832] text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 ShadCN Dialog */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        {selected && (
          <DialogContent className="sm:max-w-md rounded-2xl bg-white">
            <DialogHeader className="items-center text-center">
              <FontAwesomeIcon
                icon={selected.icon}
                className="text-[#6B8F71] text-3xl mb-2"
              />

              <DialogTitle className="text-2xl text-[#0B2B26]">
                {selected.label}
              </DialogTitle>

              <DialogDescription className="text-lg text-gray-600 leading-relaxed mt-2">
                {selected.description}
              </DialogDescription>
            </DialogHeader>

            <div className="flex justify-center mt-4">
              <button
                onClick={() => setSelected(null)}
                className="px-5 py-2 rounded-lg bg-[#6B8F71] text-white text-sm hover:bg-[#5a7a63] transition"
              >
                Close
              </button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}

//  SECTION 4 — CHALLENGES //

const challenges = [
  {
    title: "Falls & Mobility",
    desc: "Reduced mobility can make everyday activities challenging and increase the risk of falls. Our caregivers provide gentle support, balance assistance, and guided movement to help seniors stay safe, confident, and independent at home.",
    icon: faWheelchair,
  },
  {
    title: "Chronic Conditions",
    desc: "Managing conditions like diabetes, heart disease, or arthritis requires consistent care and attention. Our caregivers support daily routines, monitor health needs, and stay connected with doctors to help seniors remain stable, comfortable, and well cared for at home.",
    icon: faHouseMedical,
  },
  {
    title: "Postpartum Recovery",
    desc: "The weeks after childbirth can be physically exhausting and emotionally overwhelming. Our trained caregivers and newborn care specialists provide gentle support, helping new mothers rest, recover, and build a strong, confident bond with their baby.",
    icon: faPersonBreastfeeding,
  },
  {
    title: "Loneliness & Isolation",
    desc: "Loneliness can impact overall well-being just as much as physical illness. Our companion care provides friendly support, meaningful interaction, and engaging activities to help seniors feel connected, valued, and mentally active every day.",
    icon: faPeopleArrows,
  },
  {
    title: "Distance from Children",
    desc: "Being away from your parents can create constant concern and uncertainty. Celedon helps you stay reassured with regular updates, easy communication, and round the clock caregiver support so you always feel connected, no matter the distance.",
    icon: faChildren,
  },
];

function ChallengesSection() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollRef.current;
    if (!section || !scrollContainer) return;

    let busy = false;

    const handleWheel = (e) => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      // How many pixels of the section are currently visible in the viewport
      const visiblePx = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
      // Activate when section covers at least 70% of the viewport
      if (visiblePx < vh * 0.7) return;

      // Always block page scroll while section is active
      e.preventDefault();
      if (busy) return;

      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      const maxScroll = scrollWidth - clientWidth;
      const atStart = scrollLeft <= 2;
      const atEnd = scrollLeft >= maxScroll - 2;
      const goingDown = e.deltaY > 0;
      const goingUp = e.deltaY < 0;

      busy = true;

      if (goingDown && !atEnd) {
        // Scroll next card into view
        scrollContainer.scrollBy({ left: 304, behavior: "smooth" });
        setTimeout(() => { busy = false; }, 500);
      } else if (goingUp && !atStart) {
        // Scroll previous card into view
        scrollContainer.scrollBy({ left: -304, behavior: "smooth" });
        setTimeout(() => { busy = false; }, 500);
      } else if (goingDown && atEnd) {
        // All cards done — jump to next section
        const next = section.nextElementSibling;
        if (next) next.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => { busy = false; }, 900);
      } else if (goingUp && atStart) {
        // Back at first card — jump to previous section
        const prev = section.previousElementSibling;
        if (prev) prev.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => { busy = false; }, 900);
      } else {
        busy = false;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #f8f8f8 0%, #ecf8f3 60%, #ffffff 100%)",
        padding: "4.5rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
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

        {/* Scroll Hint */}
        <p
          style={{
            textAlign: "center",
            fontSize: "0.85rem",
            color: "#6B8F71",
            marginBottom: "1.5rem",
          }}
        >
          ← Scroll to explore →
        </p>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: "1.5rem",
            overflowX: "auto",
            paddingBottom: "1rem",
            scrollSnapType: "x mandatory",
          }}
          className="hide-scrollbar"
        >
          {challenges.map(({ title, desc, icon }) => (
            <div
              key={title}
              style={{
                minWidth: "280px",
                maxWidth: "320px",
                flex: "0 0 auto",
                backgroundColor: "#FFFFFF",
                borderRadius: "22px",
                padding: "2rem",
                border: "1px solid #E3EFE8",
                boxShadow: "0 6px 24px rgba(35,83,71,0.08)",
                scrollSnapAlign: "start",
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
                <FontAwesomeIcon icon={icon} style={{ fontSize: "26px" }} />
              </div>

              {/* Title */}
              <h3
                style={{
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
                  fontSize: "1rem",
                  lineHeight: "1.75",
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
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
                  <span style={{ color: "#DAF1DE", fontSize: "1.25rem", lineHeight: "1.6" }}>{p}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "2rem" }}>
              <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#8EB69B", fontSize: "0.9rem", fontWeight: "600", textDecoration: "none", borderBottom: "2px solid #6B8F71", paddingBottom: "2px" }}>
                Explore Our Approach
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
    desc: "Every senior or new mother we care for is a real person with a real story. Our caregivers are trained to listen, connect, and genuinely care not just complete a checklist.",
  },
  {
    title: "You're Never Left in the Dark",
    desc: "Whether you are in the next room or in another country, we keep you updated. Real-time reports, family calls, and a direct line to your care team always.",
  },
  {
    title: "We Stand Behind Every Plan",
    desc: "Not happy in the first 7 days? We will make it right or refund you. No fine print. We did rather earn your trust than hold onto your money.",
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
              <p style={{ color: "#235347", fontSize: "1rem", lineHeight: "1.8" }}>{desc}</p>
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
      <AboutSection />
      <TrustBar />
      <ChallengesSection />
      <WhyChooseSection />
      <PromisesSection />
      <Footer />
      <Header />
    </>
  );
}
