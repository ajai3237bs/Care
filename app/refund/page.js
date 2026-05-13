import PolicyLayout from "../components/PolicyLayout";

const sections = [
  {
    heading: "Our Commitment",
    paragraphs: [
      "At Celedon, we stand behind the quality of our care. If something is not right, we want to make it right. This Refund Policy outlines the conditions under which refunds and credits are provided, and how to request them.",
    ],
  },
  {
    heading: "Subscription Membership Refunds",
    paragraphs: [
      "Monthly memberships: Refunds are available within 7 days of the billing date, provided no care sessions have been delivered in that cycle.",
      "Quarterly and annual memberships: A prorated refund will be issued for the unused portion of the term if you cancel after the first 30 days. No refund is available for the first 30 days of an annual plan.",
      "Trial periods: If a free trial or discounted introductory offer was used, no cash refund is available; however, an account credit may be issued at our discretion.",
    ],
  },
  {
    heading: "Cancellation of Care Services",
    paragraphs: [
      "You may cancel ongoing care services at any time by providing the notice period specified in your care agreement (typically 15 days).",
      "Sessions cancelled by you with less than 24 hours' notice may be charged in full.",
      "Sessions cancelled by Celedon due to caregiver unavailability will be fully credited to your account or rescheduled at no additional cost.",
    ],
  },
  {
    heading: "Non-Refundable Items",
    paragraphs: [
      "The following are non-refundable under any circumstances:",
    ],
    list: [
      "One-time onboarding and care assessment fees",
      "Completed care sessions and home visits",
      "Medical consumables or equipment procured on your behalf",
      "Administrative or documentation fees",
      "Charges for emergency call-outs responded to and completed",
    ],
  },
  {
    heading: "How to Request a Refund",
    paragraphs: [
      "To initiate a refund, contact our support team within the eligible window:",
    ],
    list: [
      "Email: hello@celedon.in with subject line 'Refund Request — [Your Name]'",
      "Phone: Call us at 1800-XXX-XXXX (Mon–Sat, 9am–7pm)",
      "WhatsApp: Message us at +91 98XXX XXXXX",
    ],
  },
  {
    heading: "Refund Processing",
    paragraphs: [
      "Once your refund request is approved, the amount will be credited back to the original payment method within 7–10 business days. For bank transfers, this may take up to 5 additional business days depending on your bank.",
      "You will receive an email confirmation once the refund has been processed from our end.",
    ],
  },
  {
    heading: "Service Quality Disputes",
    paragraphs: [
      "If you are dissatisfied with the quality of care provided, please reach out to us before requesting a refund. We will assign a senior Care Manager to your case and work to resolve the issue — which may include a replacement caregiver, service credit, or partial refund depending on the circumstances.",
      "We take every complaint seriously and aim to resolve quality concerns within 48 hours.",
    ],
  },
  {
    heading: "Exceptional Circumstances",
    paragraphs: [
      "In cases of sudden hospitalisation, bereavement, or other unforeseen events affecting the care recipient, we will review refund requests on a case-by-case basis and aim to act with compassion and fairness.",
      "Please contact us as soon as possible in such situations so we can assist you promptly.",
    ],
  },
];

export const metadata = {
  title: "Refund Policy — Celedon Elder Care",
  description: "Celedon's refund and cancellation policy. Understand when and how you can request a refund for care services and memberships.",
};

export default function RefundPage() {
  return (
    <PolicyLayout
      badge="Refund Policy"
      title="Refund & Cancellation Policy"
      subtitle="We believe in fair, transparent billing. If something doesn't go as expected, here is how we will make it right."
      lastUpdated="1 May 2026"
      sections={sections}
    />
  );
}
