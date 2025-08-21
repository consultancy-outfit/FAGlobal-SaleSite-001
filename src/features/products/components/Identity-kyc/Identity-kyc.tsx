"use client";
import { Box } from "@mui/material";
import { IdentityKyc1, IdentityKyc2, IdentityKyc3 } from "../../assets/images";
import HeroCustomSection from "../hero/hero";
import SectionPanel from "../proudct-card/proudct-card";

interface SectionData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageUrl?: string;
  featuresHeading?: string;
  mediaRadius?: string;
}

export const IdentityKycFeature = () => {
  const sections: SectionData[] = [
    {
      id: "bank-based-identity-verification",
      title: "Bank-Based Identity Verification",
      subtitle:
        "Verify real identities using trusted banking credentials for seamless onboarding and fraud prevention.",
      description: `Bank-Based Identity Verification allows organisations to confirm a user’s legal identity directly from their bank. By leveraging Open Banking APIs, this service accesses bank-validated identity details such as full name, date of birth, and address without relying on document uploads. This real-time verification method is faster, safer, and harder to fake than traditional ID scans, helping institutions comply with KYC regulations while reducing drop-offs during sign-up. It is particularly useful for digital lenders, wealthtech apps, gig economy platforms, and challenger banks that need instant, high-trust verification. The service eliminates manual errors, speeds up customer onboarding, and ensures that verified data originates from a regulated institution.`,
      features: [
        "Retrieval of full legal name, DOB, and address via bank API",
        "Multi-bank identity cross-check for fraud prevention",
        "Document-free onboarding support",
        "Name matching logic for identity fraud detection",
        "Watchlist and PEP/Sanctions integration",
        "Instant identity validation reports",
        "Full GDPR and FCA compliance",
        "Real-time verification response for smooth UX",
      ],
      imageUrl: IdentityKyc1.src,
      featuresHeading: "Bank-Based Identity Verification Features:",
      mediaRadius: "20px 20px 0 0",
    },
    {
      id: "account-ownership-confirmation",
      title: "Account Ownership Confirmation",
      subtitle:
        "Ensure the user truly owns the bank account used for payments or verification.",
      description: `Account Ownership Confirmation verifies that the person sharing banking data is the true owner of the account in question. It links Open Banking credentials to verified personal information, matching names between the account and the requestor. This is especially vital for preventing payment fraud, first-party chargebacks, and identity misuse in digital onboarding, payout systems, or BNPL credit checks. It adds an extra layer of trust to account-based services and supports regulatory requirements like Strong Customer Authentication (SCA). Businesses can easily embed this feature into their app workflows, automating trust without disrupting the user experience.`,
      features: [
        "Account holder name match against user input",
        "Bank-confirmed account registration metadata",
        "Reconciliation for payouts or refunds",
        "Prevention of impersonation and stolen account usage",
        "Strong Customer Authentication (SCA) compliance",
        "Fraud flagging if mismatched or unverifiable",
        "API-driven name confirmation service",
        "Custom alerts and audit logs for compliance",
      ],
      imageUrl: IdentityKyc2.src,
      featuresHeading: "Account Ownership Confirmation-Related Services::",
      mediaRadius: "20px 20px 0 0",
    },
    {
      id: "consent-flow-customisation",
      title: "Consent Flow Customisation",
      subtitle:
        "Design trusted, branded consent journeys that drive user confidence and increase conversion.",
      description: `Consent Flow Customisation empowers businesses to control the look, feel, and behaviour of user consent screens during data sharing. Whether for identity, transactions, or balance checks, users must grant explicit permission—and the smoother that experience, the higher your conversion rate. This service allows businesses to white-label the interface, adjust messaging, and guide users through Open Banking consent steps that feel safe, clear, and brand-aligned. Enhanced consent flows help increase trust, reduce user hesitation, and meet regulatory expectations around transparency. The tool supports granular consent permissions and expiry controls, with full auditability.`,
      features: [
        "White-labelled consent screens with brand assets",
        "Custom messaging and multi-language options",
        "Configurable data access types (e.g., identity only, balance only)",
        "Consent expiry control and extension options",
        "Multi-device and mobile-optimised flows",
        "GDPR-compliant consent recording",
        "Dynamic consent reminders and reauthorisation",
        "Embedded or redirect-based implementation flexibility",
      ],
      imageUrl: IdentityKyc3.src,
      featuresHeading: "Consent Flow Customisation -Related Services:",
      mediaRadius: "20px 20px 0 0",
    },
  ];

  return (
    <>
      <Box sx={{ bgcolor: "#ffffff" }}>
        <HeroCustomSection
          subtitle="Identity & KYC"
          title="Secure, verify, and onboard users with confidence"
          description="The Identity & KYC services streamline user authentication and regulatory checks by linking directly with trusted financial institutions. Leveraging open banking and verified bank account data, this solution ensures identity confirmation, account ownership validation, and consent-driven onboarding—all while enhancing the user experience. Businesses can meet AML and KYC obligations with ease, reduce fraud risk, and accelerate customer onboarding using bank-verified identity intelligence. Each component is designed for compliance, efficiency, and seamless integration into digital journeys across fintech, banking, and regulated industries."
          textColor="#FFFFFF"
        />
        <SectionPanel sections={sections} />
      </Box>
    </>
  );
};

export default IdentityKycFeature;
