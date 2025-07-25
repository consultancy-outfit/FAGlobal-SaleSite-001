import {
  ServiceAMLComplianceIcon,
  ServiceCheckMyDBSIcon,
  ServiceDigitalIDVerificationIcon,
  ServiceIdentityInvestigationIcon,
  ServiceKnowYourBusinessIcon,
  ServiceKnowYourCustomerIcon,
  ServicePreEmploymentScreeningIcon,
  ServiceReferenceChecksIcon,
  ServiceRightToWorkIcon,
  ServiceSmsSignatureIcon,
  ServiceSocialMediaChecksIcon,
} from "../../assets/icons";
import { SERVICES_DETAILS_ID } from "../../constants";

export const servicesListData = [
  {
    _id: [SERVICES_DETAILS_ID?.CHECK_MY_DBS],
    icon: <ServiceCheckMyDBSIcon />,
    heading: "Check My DBS",
    description:
      "Verify criminal records for safe hiring, protecting workplace integrity. Make informed employment decisions with trusted background screening.",
  },
  {
    _id: [SERVICES_DETAILS_ID?.DIGITAL_ID_VERIFICATION],
    icon: <ServiceDigitalIDVerificationIcon />,
    heading: "Digital ID Verification",
    description:
      "Our AI-powered system verifies 10,000+ global identity documents instantly. Users simply upload a passport, driving licence, or national ID for real-time authentication.",
  },
  {
    _id: [SERVICES_DETAILS_ID?.RIGHT_TO_WORK],
    icon: <ServiceRightToWorkIcon />,
    heading: "Right to Work",
    description:
      "Ensure compliance with UK employment laws by verifying candidates’ work eligibility. Our system cross-checks national insurance details and visa statuses.",
  },
  {
    _id: [SERVICES_DETAILS_ID?.SOCIAL_MEDIA_CHECKS],
    icon: <ServiceSocialMediaChecksIcon />,
    heading: "Social Media Checks",
    description:
      "Analyse an individual’s digital footprint across platforms to identify potential risks, such as hate speech, misconduct, or reputational concerns.",
  },
  {
    _id: [SERVICES_DETAILS_ID?.KNOW_YOUR_CUSTOMER],
    icon: <ServiceKnowYourCustomerIcon />,
    heading: "Know your Customer",
    description:
      "Prevent fraud by verifying customer identities, ensuring regulatory compliance. Build secure business relationships with trusted verification processes.",
  },
  {
    _id: [SERVICES_DETAILS_ID?.IDENTITY_INVESTIGATION],
    icon: <ServiceIdentityInvestigationIcon />,
    heading: "Identity Investigation",
    description:
      "Conduct in-depth identity analysis for risk mitigation, preventing fraudulent activities. Strengthen security with detailed verification and fraud detection.",
  },
  {
    _id: [SERVICES_DETAILS_ID?.KNOW_YOUR_BUSINESS],
    icon: <ServiceKnowYourBusinessIcon />,
    heading: "Know your Business",
    description:
      "Conduct due diligence on businesses and suppliers, safeguarding against financial crime. Verify corporate identities and maintain regulatory adherence.",
  },
  {
    _id: [SERVICES_DETAILS_ID?.PRE_EMPLOYMENT_SCREENING],
    icon: <ServicePreEmploymentScreeningIcon />,
    heading: "Pre-employment Screening",
    description:
      "Reduce hiring risks by conducting criminal record checks, employment history verification, and financial background assessments.",
  },
  {
    _id: [SERVICES_DETAILS_ID?.AML_COMPLIANCE],
    icon: <ServiceAMLComplianceIcon />,
    heading: "AML Compliance",
    description:
      "Stay compliant with Anti-Money Laundering laws by detecting high-risk individuals and businesses using AI-driven fraud detection.",
  },
  {
    _id: [SERVICES_DETAILS_ID?.REFERENCE_CHECKS],
    icon: <ServiceReferenceChecksIcon />,
    heading: "Reference Checks",
    description:
      " Streamline hiring processes with automated reference checks and secure legally binding electronic signatures via SMS authentication.",
  },
  {
    _id: [SERVICES_DETAILS_ID?.SMS_SIGNATURE],
    icon: <ServiceSmsSignatureIcon />,
    heading: "SMS Signature",
    description:
      "Enable legally binding digital signatures via SMS, ensuring fast and secure approvals. Simplify authentication with seamless, mobile-friendly verification.",
  },
];
