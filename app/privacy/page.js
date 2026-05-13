import PolicyLayout from "../components/PolicyLayout";

const sections = [
  {
    heading: "Information We Collect",
    paragraphs: [
      "When you interact with Celedon — through our website, phone, WhatsApp, or in person — we may collect the following information:",
    ],
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
    paragraphs: [
      "Your information is used exclusively to provide, improve, and personalise our care services. Specifically, we use it to:",
    ],
    list: [
      "Match you with the most suitable caregiver based on your parent's needs",
      "Send service updates, appointment reminders, and care reports",
      "Process billing and issue invoices",
      "Respond to your queries and support requests",
      "Improve the quality of our services through aggregated, anonymised analysis",
    ],
  },
  {
    heading: "Information Sharing",
    paragraphs: [
      "We do not sell, rent, or trade your personal information to any third party. Period.",
      "We may share limited information only in the following circumstances:",
    ],
    list: [
      "With assigned caregivers — only the information they need to provide care",
      "With healthcare professionals — if required for medical coordination, with your consent",
      "With payment processors — to complete billing transactions securely",
      "With legal authorities — if required by law, court order, or to protect safety",
    ],
  },
  {
    heading: "Data Security",
    paragraphs: [
      "We take the security of your information seriously. We use industry-standard encryption for data in transit (TLS/HTTPS) and apply access controls to ensure only authorised personnel can view your data.",
      "All caregivers and staff undergo background verification and are bound by confidentiality agreements. Despite these measures, no system is completely immune from risk, and we encourage you to keep your account credentials secure.",
    ],
  },
  {
    heading: "Cookies and Tracking",
    paragraphs: [
      "Our website uses cookies to enhance your browsing experience. These include essential cookies (required for the site to function) and analytics cookies (to understand how visitors use our site).",
      "You can disable non-essential cookies through your browser settings at any time. This will not affect your ability to use our services.",
    ],
  },
  {
    heading: "Your Rights",
    paragraphs: [
      "Under applicable Indian data protection laws, you have the right to:",
    ],
    list: [
      "Access the personal data we hold about you",
      "Request correction of inaccurate or incomplete information",
      "Request deletion of your data (subject to legal and contractual obligations)",
      "Withdraw consent for marketing communications at any time",
      "Lodge a complaint with the relevant data protection authority",
    ],
  },
  {
    heading: "Retention of Data",
    paragraphs: [
      "We retain your personal data for as long as your care arrangement is active and for a period of 3 years thereafter, as required for accounting, legal, and compliance purposes. After this period, data is securely deleted or anonymised.",
    ],
  },
  {
    heading: "Children's Privacy",
    paragraphs: [
      "Our services are not directed to children under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such information, please contact us and we will delete it promptly.",
    ],
  },
  {
    heading: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. We will notify you of significant changes via email or a notice on our website at least 14 days before they take effect.",
    ],
  },
];

export const metadata = {
  title: "Privacy Policy — Celedon Elder Care",
  description: "Learn how Celedon collects, uses, and protects your personal information. Your privacy and trust are our priority.",
};

export default function PrivacyPage() {
  return (
    <PolicyLayout
      badge="Privacy Policy"
      title="Privacy Policy"
      subtitle="Your family's privacy is as important to us as their care. Here is exactly how we handle your information — transparently and responsibly."
      lastUpdated="1 May 2026"
      sections={sections}
    />
  );
}
