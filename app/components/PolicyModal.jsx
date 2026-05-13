"use client";
import { useEffect } from "react";

const C = {
  950: "#051F20", 900: "#0B2B26", 800: "#163832",
  700: "#235347", 300: "#8EB69B", 100: "#DAF1DE",
  primary: "#6B8F71", terra: "#C8A96A", cream: "#FDF8F3",
};
const serif = { fontFamily: "var(--font-lora)" };

/* ── Policy content ─────────────────────────────────────── */
const policies = {
  terms: {
    badge: "Terms of Service",
    title: "Terms of Service",
    lastUpdated: "1 May 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        paragraphs: [
          "By accessing or using any service provided by Celedon Elder Care Pvt. Ltd. ('Celedon', 'we', 'us', or 'our'), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.",
          "These Terms apply to all visitors, clients, family members, and anyone who accesses our platform, whether through our website, phone, or any other channel.",
        ],
      },
      {
        heading: "Description of Services",
        paragraphs: ["Celedon provides professional home-based elder care and postpartum care services across selected cities in India, including:"],
        list: [
          "Personalised elder care plans (Silver, Gold, and Platinum memberships)",
          "Postpartum mother and newborn care",
          "Companionship and daily assistance for seniors",
          "Medical coordination, medication reminders, and health monitoring",
          "Emergency response and caregiver dispatch",
        ],
      },
      {
        heading: "Eligibility",
        paragraphs: [
          "To use Celedon's services you must be at least 18 years of age and legally capable of entering into a binding agreement under applicable Indian law. By enrolling a family member, you confirm you have the authority to do so on their behalf.",
        ],
      },
      {
        heading: "Payment Terms",
        paragraphs: [
          "Membership fees are billed monthly, quarterly, or annually as specified in your care agreement. Payment is due on or before the billing date.",
          "Accepted methods include UPI, net banking, credit/debit cards, and bank transfer. GST is applied as per applicable rates. Late payments may result in temporary suspension of services.",
        ],
      },
      {
        heading: "Client Responsibilities",
        paragraphs: ["Clients and their families agree to:"],
        list: [
          "Provide accurate information about the care recipient's health and living situation",
          "Ensure a safe working environment for our caregivers",
          "Inform Celedon promptly of any change in the care recipient's medical condition",
          "Treat our caregivers with respect and dignity at all times",
        ],
      },
      {
        heading: "Limitation of Liability",
        paragraphs: [
          "Celedon's liability is limited to the amount paid for the service in the preceding 30 days. We are not a medical institution; our caregivers do not replace licensed medical professionals. In any emergency, always contact emergency services (112) first.",
        ],
      },
      {
        heading: "Termination",
        paragraphs: [
          "Either party may terminate the arrangement per the notice period in the care agreement (typically 15 days). Celedon may terminate immediately in cases of non-payment, breach of these Terms, or safety risks to our caregivers.",
        ],
      },
      {
        heading: "Governing Law",
        paragraphs: [
          "These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka.",
        ],
      },
    ],
  },

  privacy: {
    badge: "Privacy Policy",
    title: "Privacy Policy",
    lastUpdated: "1 May 2026",
    sections: [
      {
        heading: "Information We Collect",
        paragraphs: ["When you interact with Celedon we may collect:"],
        list: [
          "Personal identification: name, age, gender, phone number, and email address",
          "Care recipient details: health conditions, medications, mobility status, and dietary needs",
          "Location information: home address and city of service",
          "Payment details: billing address and transaction records (we do not store card numbers)",
          "Communication records: call logs, messages, and service feedback",
        ],
      },
      {
        heading: "How We Use Your Information",
        paragraphs: ["Your information is used exclusively to provide and improve our services:"],
        list: [
          "Match you with the most suitable caregiver based on your parent's needs",
          "Send service updates, appointment reminders, and care reports",
          "Process billing and issue invoices",
          "Respond to your queries and support requests",
          "Improve service quality through aggregated, anonymised analysis",
        ],
      },
      {
        heading: "Information Sharing",
        paragraphs: [
          "We do not sell, rent, or trade your personal information to any third party. We may share limited information only with assigned caregivers (need-to-know basis), payment processors, or legal authorities when required by law.",
        ],
      },
      {
        heading: "Data Security",
        paragraphs: [
          "We use industry-standard TLS/HTTPS encryption and apply strict access controls. All caregivers undergo background verification and are bound by confidentiality agreements.",
        ],
      },
      {
        heading: "Cookies",
        paragraphs: [
          "Our website uses essential and analytics cookies. You can disable non-essential cookies through your browser settings at any time without affecting your ability to use our services.",
        ],
      },
      {
        heading: "Your Rights",
        paragraphs: ["Under applicable Indian data protection laws, you have the right to:"],
        list: [
          "Access the personal data we hold about you",
          "Request correction of inaccurate or incomplete information",
          "Request deletion of your data (subject to legal obligations)",
          "Withdraw consent for marketing communications at any time",
        ],
      },
      {
        heading: "Data Retention",
        paragraphs: [
          "We retain your data for as long as your care arrangement is active and for 3 years thereafter for legal and accounting purposes. After this period, data is securely deleted or anonymised.",
        ],
      },
      {
        heading: "Changes to This Policy",
        paragraphs: [
          "We may update this Privacy Policy periodically. We will notify you of significant changes via email or a notice on our website at least 14 days before they take effect.",
        ],
      },
    ],
  },

  refund: {
    badge: "Refund Policy",
    title: "Refund & Cancellation Policy",
    lastUpdated: "1 May 2026",
    sections: [
      {
        heading: "Our Commitment",
        paragraphs: [
          "At Celedon, we stand behind the quality of our care. If something is not right, we want to make it right. This policy outlines the conditions under which refunds and credits are provided.",
        ],
      },
      {
        heading: "Subscription Membership Refunds",
        paragraphs: [
          "Monthly memberships: Refunds are available within 7 days of the billing date, provided no care sessions have been delivered in that cycle.",
          "Quarterly and annual memberships: A prorated refund will be issued for the unused portion of the term if you cancel after the first 30 days.",
        ],
      },
      {
        heading: "Cancellation of Care Services",
        paragraphs: [
          "You may cancel ongoing care services at any time with the notice period specified in your care agreement (typically 15 days).",
          "Sessions cancelled by you with less than 24 hours' notice may be charged in full. Sessions cancelled by Celedon due to caregiver unavailability will be fully credited.",
        ],
      },
      {
        heading: "Non-Refundable Items",
        paragraphs: ["The following are non-refundable:"],
        list: [
          "One-time onboarding and care assessment fees",
          "Completed care sessions and home visits",
          "Medical consumables or equipment procured on your behalf",
          "Administrative or documentation fees",
        ],
      },
      {
        heading: "How to Request a Refund",
        paragraphs: ["Contact our support team within the eligible window:"],
        list: [
          "Email: hello@celedon.in with subject 'Refund Request — [Your Name]'",
          "Phone: 1800-XXX-XXXX (Mon–Sat, 9am–7pm IST)",
          "WhatsApp: +91 98XXX XXXXX",
        ],
      },
      {
        heading: "Refund Processing",
        paragraphs: [
          "Approved refunds are credited back to the original payment method within 7–10 business days. You will receive an email confirmation once the refund has been processed.",
        ],
      },
      {
        heading: "Service Quality Disputes",
        paragraphs: [
          "If you are dissatisfied with the quality of care, please reach out before requesting a refund. We will assign a senior Care Manager to resolve the issue — which may include a replacement caregiver, service credit, or partial refund.",
        ],
      },
      {
        heading: "Exceptional Circumstances",
        paragraphs: [
          "In cases of sudden hospitalisation, bereavement, or other unforeseen events, we review refund requests on a case-by-case basis and act with compassion and fairness. Contact us as soon as possible in such situations.",
        ],
      },
    ],
  },
};

/* ── Modal Component ────────────────────────────────────── */
export default function PolicyModal({ type, onClose }) {
  const policy = policies[type];

  useEffect(() => {
    if (!policy) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [policy, onClose]);

  if (!policy) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 9998,
          backgroundColor: "rgba(5,31,32,0.65)",
          backdropFilter: "blur(6px)",
          animation: "fadeIn 0.25s ease",
        }}
      />

      {/* Sheet */}
      <div
        style={{
          position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9999,
          maxHeight: "92vh",
          backgroundColor: "#fff",
          borderRadius: "24px 24px 0 0",
          display: "flex", flexDirection: "column",
          animation: "slideUp 0.3s cubic-bezier(0.22,1,0.36,1)",
          boxShadow: "0 -8px 60px rgba(5,31,32,0.25)",
        }}
      >
        {/* Sticky header */}
        <div
          style={{
            background: `linear-gradient(135deg, ${C[950]} 0%, ${C[800]} 60%, ${C[700]} 100%)`,
            borderRadius: "24px 24px 0 0",
            padding: "1.75rem 2rem 1.5rem",
            position: "sticky", top: 0, zIndex: 1,
            flexShrink: 0,
          }}
        >
          {/* drag handle */}
          <div style={{ width: "40px", height: "4px", borderRadius: "2px", backgroundColor: "rgba(255,255,255,0.2)", margin: "0 auto 1.25rem" }} />

          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                backgroundColor: "rgba(200,169,106,0.18)", border: "1px solid rgba(200,169,106,0.4)",
                color: C.terra, padding: "0.3rem 0.875rem", borderRadius: "9999px",
                fontSize: "0.72rem", fontWeight: "700", letterSpacing: "0.08em",
                textTransform: "uppercase", marginBottom: "0.75rem",
              }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: C.terra, display: "inline-block" }} />
                {policy.badge}
              </div>
              <h2 style={{ ...serif, color: "#fff", fontSize: "clamp(1.25rem, 3vw, 1.75rem)", fontWeight: "700", lineHeight: 1.25, margin: 0 }}>
                {policy.title}
              </h2>
              <p style={{ color: "rgba(142,182,155,0.7)", fontSize: "0.75rem", marginTop: "0.4rem" }}>
                Last updated: <span style={{ color: C[300] }}>{policy.lastUpdated}</span>
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                width: "38px", height: "38px", borderRadius: "50%", flexShrink: 0,
                backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff", fontSize: "1.1rem", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div style={{ overflowY: "auto", flex: 1, padding: "2rem 2rem 3rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            {policy.sections.map(({ heading, paragraphs = [], list = [] }, i) => (
              <div key={heading} style={{ marginBottom: "2.25rem" }}>
                {/* Section header */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem", marginBottom: "1rem" }}>
                  <div style={{
                    minWidth: "32px", height: "32px", borderRadius: "9px",
                    backgroundColor: C.cream, border: "1px solid #DAF1DE",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: C.primary, fontSize: "0.72rem", fontWeight: "700", flexShrink: 0,
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 style={{ ...serif, color: C[900], fontSize: "1.1rem", fontWeight: "700", lineHeight: 1.35, paddingTop: "0.35rem", margin: 0 }}>
                    {heading}
                  </h3>
                </div>

                <div style={{ paddingLeft: "44px" }}>
                  {paragraphs.map((p, pi) => (
                    <p key={pi} style={{ color: C[700], fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "0.75rem" }}>
                      {p}
                    </p>
                  ))}
                  {list.length > 0 && (
                    <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.25rem" }}>
                      {list.map((item, li) => (
                        <li key={li} style={{ color: C[700], fontSize: "0.9rem", lineHeight: 1.75 }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {i < policy.sections.length - 1 && (
                  <div style={{ height: "1px", backgroundColor: "#DAF1DE", margin: "2rem 0 0" }} />
                )}
              </div>
            ))}

            {/* Contact callout */}
            <div style={{ backgroundColor: C[900], borderRadius: "18px", padding: "2rem", textAlign: "center", marginTop: "1rem" }}>
              <p style={{ color: C.terra, fontSize: "0.7rem", fontWeight: "700", letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: "0.625rem" }}>
                Questions About This Policy?
              </p>
              <p style={{ color: C[300], fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                Our team is happy to clarify anything within one business day.
              </p>
              <a
                href="mailto:hello@celedon.in"
                style={{
                  display: "inline-block", backgroundColor: C.terra, color: "#fff",
                  padding: "0.75rem 1.75rem", borderRadius: "9999px",
                  fontSize: "0.875rem", fontWeight: "700", textDecoration: "none",
                  boxShadow: "0 4px 18px rgba(200,169,106,0.35)",
                }}
              >
                hello@celedon.in
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(100%) } to { transform: translateY(0) } }
      `}</style>
    </>
  );
}
