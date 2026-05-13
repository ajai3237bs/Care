import PolicyLayout from "../components/PolicyLayout";

const sections = [
  {
    heading: "Acceptance of Terms",
    paragraphs: [
      "By accessing or using any service provided by Celedon Elder Care Pvt. Ltd. ('Celedon', 'we', 'us', or 'our'), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, please do not use our services.",
      "These Terms apply to all visitors, clients, family members, and anyone who accesses or uses our platform, whether through our website, phone, or any other channel.",
    ],
  },
  {
    heading: "Description of Services",
    paragraphs: [
      "Celedon provides professional home-based elder care and postpartum care services across selected cities in India. Our services include, but are not limited to:",
    ],
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
      "To use Celedon's services, you must be at least 18 years of age and legally capable of entering into a binding agreement under applicable Indian law. By enrolling a family member, you confirm that you have the authority to do so on their behalf.",
    ],
  },
  {
    heading: "Service Agreement and Care Plans",
    paragraphs: [
      "All care services are subject to a formal care agreement signed between Celedon and the primary family contact. The specific scope, duration, caregiver assignments, and pricing are detailed in that agreement.",
      "Celedon reserves the right to adjust caregiver assignments based on availability, skill match, and the evolving needs of the care recipient. We will always notify you in advance of any such change.",
    ],
  },
  {
    heading: "Payment Terms",
    paragraphs: [
      "Membership fees and service charges are billed as specified in your care agreement — monthly, quarterly, or annually. Payment is due on or before the billing date mentioned in your plan.",
      "Accepted payment methods include UPI, net banking, credit/debit cards, and bank transfer. Invoices are issued electronically and GST is applied as per applicable rates.",
      "Late payments may result in a temporary suspension of services. We will make every effort to contact you before taking such action.",
    ],
  },
  {
    heading: "Client Responsibilities",
    paragraphs: [
      "To ensure the safety and effectiveness of care, clients and their families agree to:",
    ],
    list: [
      "Provide accurate and complete information about the care recipient's health, medications, and living situation",
      "Ensure a safe working environment for our caregivers",
      "Inform Celedon promptly of any change in the care recipient's medical condition",
      "Treat our caregivers with respect and dignity at all times",
      "Not engage Celedon caregivers directly outside of the agreed service arrangement",
    ],
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      "Celedon's liability in connection with any service is limited to the amount paid for that service in the preceding 30 days. We are not liable for indirect, incidental, or consequential damages arising from the use of our services.",
      "We are not a medical institution and our caregivers do not replace licensed medical professionals. In the event of a medical emergency, always contact emergency services (112) first.",
    ],
  },
  {
    heading: "Termination",
    paragraphs: [
      "Either party may terminate the service arrangement in accordance with the notice period specified in the care agreement (typically 15 days written notice).",
      "Celedon may terminate services immediately in cases of non-payment, breach of these Terms, or if continuing the service poses a safety risk to our caregivers.",
    ],
  },
  {
    heading: "Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of India. Any disputes arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.",
    ],
  },
  {
    heading: "Changes to These Terms",
    paragraphs: [
      "We may update these Terms from time to time. When we do, we will notify you via email or through our website with at least 14 days' notice before the changes take effect. Continued use of our services after that date constitutes your acceptance of the revised Terms.",
    ],
  },
];

export const metadata = {
  title: "Terms of Service — Celedon Elder Care",
  description: "Read Celedon's Terms of Service. Understand your rights and responsibilities when using our elder care and postpartum care services.",
};

export default function TermsPage() {
  return (
    <PolicyLayout
      badge="Terms of Service"
      title="Terms of Service"
      subtitle="Please read these terms carefully before using Celedon's services. They outline your rights, responsibilities, and ours."
      lastUpdated="1 May 2026"
      sections={sections}
    />
  );
}
