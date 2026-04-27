"use client";
import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

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
function PlansHero() {
  return (
    <section style={{ background: `linear-gradient(135deg, ${C[950]} 0%, ${C[800]} 55%, ${C[700]} 100%)`, position: "relative", overflow: "hidden", minHeight: "420px", display: "flex", alignItems: "center" }}>
      <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", backgroundColor: C[700], opacity: 0.2 }} />
      <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "280px", height: "280px", borderRadius: "50%", backgroundColor: C.terra, opacity: 0.08 }} />

      <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "10rem 1.5rem 5rem", width: "100%", textAlign: "center" }}>
        <ScrollReveal animation="fadeUp" delay={0}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "rgba(200,169,106,0.15)", border: "1px solid rgba(200,169,106,0.35)", color: C.terra, padding: "0.375rem 1rem", borderRadius: "9999px", fontSize: "0.8rem", fontWeight: "600", marginBottom: "1.5rem" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: C.terra, display: "inline-block" }} />
            Membership Plans
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fadeUp" delay={120}>
          <h1 style={{ ...serif, color: "#fff", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: "700", lineHeight: "1.2", marginBottom: "1.25rem" }}>
            Simple Plans. Real Care.{" "}
            <span style={{ color: C.terra }}>No Surprises.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal animation="fadeUp" delay={240}>
          <p style={{ color: "rgba(218,241,222,0.88)", fontSize: "1.05rem", lineHeight: "1.8", maxWidth: "520px", margin: "0 auto 2rem" }}>
            We've kept our plans straightforward — because choosing care for your parent shouldn't feel complicated.
          </p>
          <a href="#plans" style={{ backgroundColor: C.terra, color: "#fff", padding: "0.9rem 2rem", borderRadius: "9999px", fontSize: "0.95rem", fontWeight: "700", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem", boxShadow: "0 6px 24px rgba(200,169,106,0.35)" }}>
            Compare Plans Below
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
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
    <section style={{ backgroundColor: C.cream, padding: "3.5rem 1.5rem", borderBottom: "1px solid #DAF1DE" }}>
      <ScrollReveal animation="fadeUp">
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: "40px", height: "3px", backgroundColor: C.terra, borderRadius: "2px", margin: "0 auto 1.5rem" }} />
          <p style={{ ...serif, color: C[800], fontSize: "clamp(1.05rem,2vw,1.3rem)", lineHeight: "1.85", fontStyle: "italic" }}>
            "We're not here to upsell you. We're here to help you find what your parent actually needs — whether that's our most basic plan or our most complete one.{" "}
            <span style={{ color: C[700], fontStyle: "normal", fontWeight: "600" }}>Every plan is built with the same care and commitment.</span>"
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 3 — PLAN CARDS
═══════════════════════════════════════ */
const plans = [
  {
    id: "silver",
    emoji: "🌱",
    name: "Silver",
    tagline: "Peace of mind, without the overwhelm.",
    forWho: "Seniors who are largely independent but need a safety net",
    color: C[300],
    bgLight: "rgba(142,182,155,0.08)",
    borderColor: C[300],
    popular: false,
    included: [
      "24/7 Emergency helpline access",
      "Monthly health vitals check (1 visit/month)",
      "2 tele-consultations per month",
      "Access to wellness & activity programs",
      "Monthly health summary report to family",
      "Medication reminders (app-based)",
      "Member app access",
    ],
    excluded: ["Home nursing visits", "Hospital accompaniment", "Dedicated care manager"],
    bestFor: "Parents who are healthy and active but live alone — and families who want basic assurance.",
    cta: "Start with Silver",
  },
  {
    id: "gold",
    emoji: "🌿",
    name: "Gold",
    tagline: "The right balance of care and independence.",
    forWho: "Seniors who need regular monitoring and occasional support",
    color: C.terra,
    bgLight: "rgba(200,169,106,0.08)",
    borderColor: C.terra,
    popular: true,
    included: [
      "Everything in Silver, plus:",
      "Bi-weekly health vitals check (2 visits/month)",
      "5 tele-consultations per month",
      "1 hospital accompaniment per month",
      "Bi-monthly home nursing visit",
      "Caregiver coordination support",
      "Family WhatsApp update group",
      "Bi-monthly health report with recommendations",
      "Priority emergency response",
    ],
    excluded: ["Dedicated care manager", "Weekly home visits"],
    bestFor: "Parents managing one or two chronic conditions — diabetes, BP, thyroid — who need regular monitoring but not full-time care.",
    cta: "Choose Gold",
  },
  {
    id: "platinum",
    emoji: "💎",
    name: "Platinum",
    tagline: "Complete care. Total peace of mind.",
    forWho: "Seniors who need comprehensive, proactive care",
    color: C[300],
    bgLight: "rgba(142,182,155,0.08)",
    borderColor: C[800],
    popular: false,
    included: [
      "Everything in Gold, plus:",
      "Weekly health vitals check (4 visits/month)",
      "Unlimited tele-consultations",
      "3 hospital accompaniments per month",
      "Weekly home nursing visit",
      "Dedicated personal Care Manager",
      "Quarterly comprehensive health assessment",
      "Priority ambulance & hospitalisation support",
      "Premium wellness & activity programs",
      "Weekly family health briefing call",
    ],
    excluded: [],
    bestFor: "Parents with multiple conditions, recent hospitalisation, post-surgery recovery, or families who want a complete hands-off care solution.",
    cta: "Go Platinum",
  },
];

function PlanCards() {
  return (
    <section id="plans" style={{ backgroundColor: "#fff", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ScrollReveal animation="fadeUp">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ color: C.primary, fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Choose Your Plan</p>
            <h2 style={{ ...serif, color: C[950], fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: "700" }}>Find the Right Fit</h2>
          </div>
        </ScrollReveal>

        <div className="plans-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem", alignItems: "start" }}>
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.id} animation="fadeUp" delay={i * 120} duration={680} style={{ height: "100%" }}>
              <div style={{
                borderRadius: "24px", overflow: "hidden", border: plan.popular ? `2px solid ${C.terra}` : "1px solid #DAF1DE",
                backgroundColor: "#fff", boxShadow: plan.popular ? "0 12px 48px rgba(200,169,106,0.18)" : "0 4px 24px rgba(5,31,32,0.06)",
                display: "flex", flexDirection: "column", height: "100%", position: "relative",
              }}>
                {/* Popular badge */}
                {plan.popular && (
                  <div style={{ position: "absolute", top: "16px", right: "16px", backgroundColor: C.terra, color: "#fff", fontSize: "0.7rem", fontWeight: "700", padding: "0.3rem 0.75rem", borderRadius: "9999px", letterSpacing: "0.05em" }}>
                    ⭐ Most Chosen
                  </div>
                )}

                {/* Top color band */}
                <div style={{ height: "6px", backgroundColor: plan.popular ? C.terra : plan.color }} />

                <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  {/* Header */}
                  <div style={{ marginBottom: "1.25rem" }}>
                    <span style={{ fontSize: "2rem" }}>{plan.emoji}</span>
                    <h3 style={{ ...serif, color: C[950], fontSize: "1.5rem", fontWeight: "700", marginTop: "0.5rem" }}>{plan.name} Plan</h3>
                    <p style={{ color: plan.popular ? C.terra : C.primary, fontSize: "0.875rem", fontStyle: "italic", marginTop: "0.25rem" }}>{plan.tagline}</p>
                  </div>

                  {/* For who */}
                  <div style={{ backgroundColor: plan.popular ? "rgba(200,169,106,0.08)" : C.cream, borderRadius: "10px", padding: "0.625rem 0.875rem", marginBottom: "1.25rem" }}>
                    <p style={{ color: C[700], fontSize: "0.8rem", lineHeight: "1.5" }}><strong style={{ color: C[800] }}>For:</strong> {plan.forWho}</p>
                  </div>

                  {/* Price */}
                  <div style={{ marginBottom: "1.25rem", padding: "1rem", backgroundColor: plan.popular ? "rgba(200,169,106,0.06)" : "rgba(22,56,50,0.03)", borderRadius: "12px", border: `1px dashed ${plan.popular ? C.terra : "#DAF1DE"}` }}>
                    <p style={{ color: C[700], fontSize: "0.75rem", marginBottom: "0.25rem" }}>Starting from</p>
                    <p style={{ ...serif, color: plan.popular ? C.terra : C[800], fontSize: "2rem", fontWeight: "700", lineHeight: 1 }}>₹ ___</p>
                    <p style={{ color: C[700], fontSize: "0.75rem", marginTop: "0.25rem" }}>/ month &nbsp;·&nbsp; Save up to 20% annually</p>
                  </div>

                  {/* Included */}
                  <p style={{ color: C[800], fontSize: "0.72rem", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "0.625rem" }}>What's Included</p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.45rem", marginBottom: "1.25rem" }}>
                    {plan.included.map((item) => (
                      <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: C[700], lineHeight: "1.55" }}>
                        <span style={{ color: plan.popular ? C.terra : C[300], flexShrink: 0, marginTop: "1px", fontWeight: "700" }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Excluded */}
                  {plan.excluded.length > 0 && (
                    <>
                      <p style={{ color: "#999", fontSize: "0.72rem", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Not Included</p>
                      <ul style={{ display: "flex", flexDirection: "column", gap: "0.35rem", marginBottom: "1.25rem" }}>
                        {plan.excluded.map((item) => (
                          <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.82rem", color: "#999", lineHeight: "1.5" }}>
                            <span style={{ flexShrink: 0 }}>✕</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* Best for */}
                  <div style={{ backgroundColor: C.cream, borderRadius: "10px", padding: "0.75rem 0.875rem", marginBottom: "1.5rem", marginTop: "auto" }}>
                    <p style={{ fontSize: "0.7rem", fontWeight: "700", color: C[700], textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.25rem" }}>Best For</p>
                    <p style={{ fontSize: "0.82rem", color: C[700], lineHeight: "1.6" }}>{plan.bestFor}</p>
                  </div>

                  {/* CTA */}
                  <Link href="/contact" style={{
                    display: "block", textAlign: "center", padding: "0.875rem", borderRadius: "9999px",
                    backgroundColor: plan.popular ? C.terra : "transparent",
                    color: plan.popular ? "#fff" : C[800],
                    border: plan.popular ? "none" : `2px solid ${C[800]}`,
                    fontSize: "0.9rem", fontWeight: "700", textDecoration: "none",
                    boxShadow: plan.popular ? "0 6px 20px rgba(200,169,106,0.3)" : "none",
                  }}>
                    {plan.cta} →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .plans-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 4 — COMPARISON TABLE
═══════════════════════════════════════ */
const tableRows = [
  { feature: "24/7 Emergency Helpline", silver: "✅", gold: "✅", platinum: "✅ Priority" },
  { feature: "Health Vitals Check",     silver: "1× / month", gold: "2× / month", platinum: "4× / month" },
  { feature: "Tele-consultations",      silver: "2 / month", gold: "5 / month", platinum: "Unlimited" },
  { feature: "Home Nursing Visit",      silver: "—", gold: "2× / month", platinum: "4× / month" },
  { feature: "Hospital Accompaniment",  silver: "Add-on", gold: "1 / month", platinum: "3 / month" },
  { feature: "Wellness & Activities",   silver: "Standard", gold: "Standard", platinum: "Premium" },
  { feature: "Family Health Reports",   silver: "Monthly", gold: "Bi-monthly", platinum: "Weekly" },
  { feature: "Dedicated Care Manager",  silver: "—", gold: "—", platinum: "✅" },
  { feature: "Lab & Diagnostics",       silver: "Add-on", gold: "Add-on", platinum: "1 free / quarter" },
  { feature: "Ambulance Support",       silver: "Standard", gold: "Priority", platinum: "Priority + Liaison" },
  { feature: "Member App Access",       silver: "✅", gold: "✅", platinum: "✅" },
];

function ComparisonTable() {
  return (
    <section style={{ backgroundColor: C.cream, padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ScrollReveal animation="fadeUp">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: C.primary, fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Side by Side</p>
            <h2 style={{ ...serif, color: C[950], fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: "700" }}>Full Plan Comparison</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="scaleIn" duration={700}>
          <div style={{ overflowX: "auto", borderRadius: "20px", boxShadow: "0 4px 32px rgba(5,31,32,0.08)", border: "1px solid #DAF1DE" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#fff", fontSize: "0.875rem" }}>
              <thead>
                <tr style={{ backgroundColor: C[900] }}>
                  <th style={{ padding: "1.125rem 1.5rem", textAlign: "left", color: C[300], fontWeight: "600", fontSize: "0.8rem", letterSpacing: "0.05em" }}>Feature</th>
                  {["🌱 Silver", "🌿 Gold", "💎 Platinum"].map((h, i) => (
                    <th key={h} style={{ padding: "1.125rem 1.5rem", textAlign: "center", color: i === 1 ? C.terra : C[100], fontWeight: "700", fontSize: "0.9rem", position: "relative" }}>
                      {h}
                      {i === 1 && <div style={{ fontSize: "0.65rem", color: C.terra, marginTop: "0.2rem", letterSpacing: "0.05em" }}>MOST POPULAR</div>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={row.feature} style={{ backgroundColor: i % 2 === 0 ? "#fff" : C.cream, borderBottom: "1px solid #DAF1DE" }}>
                    <td style={{ padding: "1rem 1.5rem", color: C[800], fontWeight: "500" }}>{row.feature}</td>
                    {[row.silver, row.gold, row.platinum].map((val, j) => (
                      <td key={j} style={{ padding: "1rem 1.5rem", textAlign: "center", color: val === "—" ? "#ccc" : j === 1 ? C.terra : C[700], fontWeight: j === 1 ? "600" : "400" }}>{val}</td>
                    ))}
                  </tr>
                ))}
                <tr style={{ backgroundColor: C[900] }}>
                  <td style={{ padding: "1.125rem 1.5rem", color: C[300], fontWeight: "600" }}>Monthly Price</td>
                  {["₹ ___", "₹ ___", "₹ ___"].map((p, i) => (
                    <td key={i} style={{ padding: "1.125rem 1.5rem", textAlign: "center" }}>
                      <span style={{ ...serif, color: i === 1 ? C.terra : C[100], fontSize: "1.2rem", fontWeight: "700" }}>{p}</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 5 — ADD-ONS
═══════════════════════════════════════ */
const addons = [
  { icon: "💉", name: "Vaccination at Home",         price: "₹ __ per visit" },
  { icon: "🧪", name: "Lab & Diagnostics Package",    price: "₹ __ per month" },
  { icon: "🥗", name: "Nutrition Counselling Program", price: "₹ __ for 3 months" },
  { icon: "🧠", name: "Memory & Dementia Support",    price: "₹ __ per session" },
  { icon: "🚑", name: "Extra Hospital Accompaniment", price: "₹ __ per visit" },
  { icon: "📱", name: "Elder Tech Device Rental",     price: "₹ __ per month" },
  { icon: "🚗", name: "Transportation Support",        price: "₹ __ per trip" },
  { icon: "💆", name: "Physiotherapy Sessions",       price: "₹ __ per session" },
];

function AddOns() {
  return (
    <section style={{ backgroundColor: C[900], padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ScrollReveal animation="fadeUp">
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <p style={{ color: C[300], fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Customise Your Care</p>
            <h2 style={{ ...serif, color: C[100], fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: "700" }}>Build Your Own Care — Top Up Any Plan</h2>
          </div>
          <p style={{ color: C[300], fontSize: "0.95rem", textAlign: "center", maxWidth: "560px", margin: "0.75rem auto 3rem", lineHeight: "1.75" }}>
            Not everything fits neatly into a plan. That's why we offer add-ons — so you can customise care exactly to what your parent needs.
          </p>
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
          {addons.map(({ icon, name, price }, i) => (
            <ScrollReveal key={name} animation="scaleIn" delay={i * 60} duration={580}>
              <div style={{ backgroundColor: C[800], borderRadius: "16px", padding: "1.25rem 1.5rem", border: "1px solid rgba(142,182,155,0.1)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{icon}</span>
                  <p style={{ color: C[100], fontSize: "0.875rem", fontWeight: "500", lineHeight: "1.4" }}>{name}</p>
                </div>
                <p style={{ color: C.terra, fontSize: "0.8rem", fontWeight: "700", flexShrink: 0, textAlign: "right" }}>{price}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 6 — BILLING & FLEXIBILITY
═══════════════════════════════════════ */
const billingPoints = [
  { icon: "📅", title: "Monthly or Annual", desc: "Pay monthly for flexibility or annually to save up to 20%" },
  { icon: "🔄", title: "Change Anytime", desc: "Upgrade or downgrade your plan whenever your parent's needs change" },
  { icon: "👨‍👩‍👧", title: "Family Plans", desc: "Caring for both parents? Ask us about our couple & family pricing" },
  { icon: "🚫", title: "No Lock-in", desc: "Cancel anytime with 30 days notice. No penalty, no hassle" },
  { icon: "💳", title: "Easy Payment", desc: "UPI, net banking, credit/debit card, and EMI options available" },
];

function BillingSection() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ScrollReveal animation="fadeUp">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: C.terra, fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Flexibility</p>
            <h2 style={{ ...serif, color: C[950], fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: "700" }}>Plans That Work Around You</h2>
          </div>
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {billingPoints.map(({ icon, title, desc }, i) => (
            <ScrollReveal key={title} animation="fadeUp" delay={i * 80} duration={620}>
              <div style={{ backgroundColor: C.cream, borderRadius: "18px", padding: "1.5rem 1.75rem", border: "1px solid #DAF1DE", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.75rem", flexShrink: 0, lineHeight: 1 }}>{icon}</span>
                <div>
                  <p style={{ ...serif, color: C[900], fontSize: "0.95rem", fontWeight: "700", marginBottom: "0.35rem" }}>{title}</p>
                  <p style={{ color: C[700], fontSize: "0.85rem", lineHeight: "1.65" }}>{desc}</p>
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
   SECTION 7 — DECISION HELPER
═══════════════════════════════════════ */
const decisions = [
  {
    plan: "Silver", emoji: "🌱", color: C[300], bg: "rgba(142,182,155,0.08)", border: C[300],
    points: [
      "Your parent is healthy and independent",
      "You mainly want emergency backup and basic monitoring",
      "You're new to structured elder care and want to start small",
    ],
  },
  {
    plan: "Gold", emoji: "🌿", color: C.terra, bg: "rgba(200,169,106,0.08)", border: C.terra,
    points: [
      "Your parent has one or two ongoing health conditions",
      "You worry about hospital visits and need regular check-ins",
      "You live in a different city and need reliable local support",
    ],
  },
  {
    plan: "Platinum", emoji: "💎", color: C[800], bg: "rgba(22,56,50,0.06)", border: C[800],
    points: [
      "Your parent needs regular medical attention",
      "They've recently been hospitalised or had surgery",
      "You want a dedicated person managing your parent's care end-to-end",
    ],
  },
];

function DecisionHelper() {
  return (
    <section style={{ backgroundColor: C.cream, padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ScrollReveal animation="fadeUp">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: C.primary, fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Decision Helper</p>
            <h2 style={{ ...serif, color: C[950], fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: "700" }}>Still Not Sure? Let's Make It Simple.</h2>
          </div>
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {decisions.map(({ plan, emoji, color, bg, border, points }, i) => (
            <ScrollReveal key={plan} animation="fadeUp" delay={i * 100} duration={650}>
              <div style={{ backgroundColor: "#fff", borderRadius: "20px", padding: "2rem", border: `1.5px solid ${border}`, boxShadow: "0 4px 20px rgba(5,31,32,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", backgroundColor: bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem" }}>{emoji}</div>
                  <div>
                    <p style={{ color: "#999", fontSize: "0.7rem", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase" }}>Choose</p>
                    <p style={{ ...serif, color, fontSize: "1.1rem", fontWeight: "700" }}>{plan}</p>
                  </div>
                </div>
                <p style={{ color: C[700], fontSize: "0.72rem", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "0.75rem" }}>If:</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {points.map((p) => (
                    <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontSize: "0.875rem", color: C[700], lineHeight: "1.6" }}>
                      <span style={{ color, fontWeight: "700", flexShrink: 0 }}>→</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 8 — TRANSPARENCY BLOCK
═══════════════════════════════════════ */
function TransparencyBlock() {
  return (
    <section style={{ backgroundColor: C[800], padding: "5rem 1.5rem" }}>
      <ScrollReveal animation="scaleIn" duration={700}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "rgba(200,169,106,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", fontSize: "1.5rem" }}>🤝</div>
          <p style={{ color: C.terra, fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>A Note From Us</p>
          <h2 style={{ ...serif, color: C[100], fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: "700", marginBottom: "1.5rem" }}>
            We're a young company and we want to earn your trust — not just your subscription.
          </h2>
          <p style={{ color: C[300], fontSize: "0.95rem", lineHeight: "1.85", marginBottom: "1.25rem" }}>
            That's why every Celedon plan comes with a <strong style={{ color: C[100] }}>7-day trial period.</strong> If you feel we haven't delivered on our promise in the first week, we'll refund your first month. No questions asked.
          </p>
          <p style={{ color: C[300], fontSize: "0.95rem", lineHeight: "1.75", marginBottom: "2rem", fontStyle: "italic" }}>
            We believe good care speaks for itself.
          </p>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.25rem" }}>
            <p style={{ color: C[300], fontSize: "0.875rem" }}>— <strong style={{ color: C[100] }}>The Celedon Team</strong></p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 9 — FAQ
═══════════════════════════════════════ */
const faqs = [
  { q: "Can I change my plan later?", a: "Yes — you can upgrade or downgrade any time through your member dashboard or by calling us." },
  { q: "What if my parent needs services not in my plan?", a: "You can add any service as an add-on at any time. We'll never leave you without support because of a plan limitation." },
  { q: "Is there a joining fee or security deposit?", a: "No. You pay only what's shown — no hidden charges, no setup fees." },
  { q: "Do you serve my city?", a: "We're currently available across select cities and expanding fast — drop us your city and we'll let you know when we reach you." },
  { q: "What happens when I cancel?", a: "You can cancel anytime with 30 days notice. Your care continues until the end of your billing cycle." },
  { q: "Can I get a demo or trial before committing?", a: "Absolutely. Book a free 15-minute call with our Care Expert — and we offer a 7-day satisfaction guarantee on your first month." },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section style={{ backgroundColor: "#fff", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <ScrollReveal animation="fadeUp">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: C.primary, fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>FAQ</p>
            <h2 style={{ ...serif, color: C[950], fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: "700" }}>Questions We Get Asked the Most</h2>
          </div>
        </ScrollReveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {faqs.map(({ q, a }, i) => (
            <ScrollReveal key={q} animation="fadeUp" delay={i * 60} duration={580}>
              <div style={{ backgroundColor: C.cream, borderRadius: "14px", border: `1px solid ${open === i ? C[300] : "#DAF1DE"}`, overflow: "hidden", transition: "border-color 0.2s" }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.125rem 1.375rem", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "1rem" }}
                >
                  <span style={{ ...serif, color: C[900], fontSize: "0.95rem", fontWeight: "600", lineHeight: "1.4" }}>{q}</span>
                  <span style={{ color: C[300], fontSize: "1.2rem", flexShrink: 0, transform: open === i ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.25s", fontWeight: "300" }}>+</span>
                </button>
                {open === i && (
                  <div style={{ padding: "0 1.375rem 1.25rem" }}>
                    <p style={{ color: C[700], fontSize: "0.9rem", lineHeight: "1.75" }}>{a}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 10 — FINAL CTA
═══════════════════════════════════════ */
function PlansCTA() {
  return (
    <section style={{ background: "linear-gradient(135deg, #163832 0%, #6B8F71 100%)", padding: "5rem 1.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "220px", height: "220px", borderRadius: "50%", backgroundColor: C.terra, opacity: 0.1 }} />
      <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "160px", height: "160px", borderRadius: "50%", backgroundColor: C[100], opacity: 0.07 }} />

      <div style={{ position: "relative", maxWidth: "640px", margin: "0 auto" }}>
        <ScrollReveal animation="fadeUp" duration={700}>
          <p style={{ color: C[100], opacity: 0.8, fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Get Started</p>
          <h2 style={{ ...serif, color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: "700", lineHeight: 1.25, marginBottom: "1rem" }}>
            Ready to Give Your Parent the Care They Deserve?
          </h2>
          <p style={{ color: "rgba(218,241,222,0.88)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "2.5rem" }}>
            Join Celedon today. Our Care Experts are here to help you choose — no pressure, just honest guidance.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={180} duration={650}>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            <Link href="/contact" style={{ backgroundColor: C.terra, color: "#fff", padding: "1rem 2.25rem", borderRadius: "9999px", fontSize: "1rem", fontWeight: "700", textDecoration: "none", boxShadow: "0 6px 24px rgba(200,169,106,0.4)", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              Book a Free Care Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <a href="tel:1800000000" style={{ color: "#fff", border: "2px solid rgba(255,255,255,0.4)", padding: "1rem 2.25rem", borderRadius: "9999px", fontSize: "1rem", fontWeight: "600", textDecoration: "none" }}>
              Call Us Now — 1800-XXX-XXXX
            </a>
          </div>
          <p style={{ color: "rgba(218,241,222,0.65)", fontSize: "0.82rem" }}>
            🔒 No commitment needed. Free 15-min call. Cancel anytime.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   PAGE EXPORT
═══════════════════════════════════════ */
export default function PlansPage() {
  return (
    <>
      <PlansHero />
      <HonestIntro />
      <PlanCards />
      <ComparisonTable />
      <AddOns />
      <BillingSection />
      <DecisionHelper />
      <TransparencyBlock />
      <FAQ />
      <PlansCTA />
    </>
  );
}
