import { PROJECT_NAME } from "@/configs/env";
import {
  BasicDbsCheckIcon,
  EnhancedDbsCheckIcon,
  StandardDbsCheckIcon,
} from "../../assets/icons";
import { SERVICES_DETAILS_ID } from "../../constants";
import { pxToRem } from "@/utils/styles";
import { DecoratedImageText } from "@/components/data-displays/decorated-image-text";
import {
  AmlComplianceServiceHeroImage,
  DbsServiceHeroImage,
  DbsServiceSubHeroImage,
  IdInvestigationServiceHeroImage,
  IdInvestigationServiceSubHeroImage,
  IdVerificationServiceHeroImage,
  IdVerificationServiceSubHeroImage,
  KybServiceHeroImage,
  KybServiceSubHeroImage,
  KycServiceHeroImage,
  KycServiceSubHeroImage,
  PreEmploymentServiceHeroImage,
  PreEmploymentServiceSubHeroImage,
  ReferenceCheckServiceHeroImage,
  ReferenceCheckServiceSubHeroImage,
  RightToWorkServiceHeroImage,
  RightToWorkServiceSubHeroImage,
  SmsSignatureServiceHeroImage,
  SmsSignatureServiceSubHeroImage,
  SocialMediaChecksServiceHeroImage,
  SocialMediaChecksServiceSubHeroImage,
} from "../../assets/images/services-detail";

export const servicesDetailsListData: any = {
  [SERVICES_DETAILS_ID?.CHECK_MY_DBS]: {
    heroHeading: (
      <>
        Building Trust, One Background Ch
        <DecoratedImageText
          variant="h3"
          fontWeight="fontWeightSemiBold"
          letterSpacing={pxToRem(-2)}
        >
          eck at a Time
        </DecoratedImageText>
      </>
    ),
    heroImage: DbsServiceHeroImage,
    subHeroImage: DbsServiceSubHeroImage,
    subHeroSection: {
      mainHeading: "DBS Checks: Ensuring Safe Hiring & Compliance",
      descriptionOne: `Explore ${PROJECT_NAME}’s DBS Checks Services, where trust and security take priority. In today’s dynamic world, safeguarding your workforce and organisation is essential. Our comprehensive DBS (Disclosure and Barring Service) Checks give you the confidence to make informed hiring decisions with peace of mind.`,
      descriptionTwo: `Discover our DBS Checks services to strengthen workplace security, foster community trust, and ensure your team upholds your commitment to safety and integrity. Rely on ${PROJECT_NAME} for a secure, accurate, and dependable verification process that drives your organisation’s success.`,
      descriptionThree: `Our mission is to equip businesses and organisations with thorough and reliable background checks. With ${PROJECT_NAME}, you benefit from a seamless and efficient DBS Checks process that upholds the highest standards of compliance and accuracy.`,
    },
    chooseUs: {
      mainHeading: `Why Choose ${PROJECT_NAME}'s DBS Checks`,
      points: [
        {
          _id: 1,
          heading: "Compliance:",
          title: `Our DBS Checks comply with legal and regulatory standards, ensuring your hiring process meets the highest level of compliance and integrity.`,
        },
        {
          _id: 2,
          heading: "Precision:",
          title: `Offering different levels of checks, you can customise your verification process for each role, ensuring the scrutiny aligns with the responsibilities`,
        },
        {
          _id: 3,
          heading: "Trust:",
          title: `Conducting thorough DBS Checks builds trust with clients, partners, and employees, demonstrating your dedication to safety and reliability.`,
        },
      ],
    },
    howItWorks: {
      mainHeading: `How It Works`,
      points: [
        {
          _id: 1,
          heading: "Candidate Information Submission:",
          title: ` The applicant provides personal details and identity documents required for the Disclosure and Barring Service (DBS) check.`,
        },
        {
          _id: 2,
          heading: "Identity & Eligibility Verification:",
          title: ` Our system verifies the candidate’s identity and eligibility by cross-referencing official databases and records.`,
        },
        {
          _id: 3,
          heading: "DBS Application Processing",
          title: `  The application is securely submitted to the DBS for screening against police records and relevant barred lists`,
        },
        {
          _id: 4,
          heading: "Criminal Record Check",
          title: ` Depending on the level of check (Basic, Standard, or Enhanced), the DBS reviews criminal history, cautions, and convictions`,
        },
        {
          _id: 5,
          heading: "Results & Compliance Reporting:",
          title: ` The completed DBS check report is shared with the employer, ensuring compliance and informed hiring decisions`,
        },
      ],
    },
    offerServices: {
      mainHeading: (
        <>
          Choosing the Right DBS Che
          <DecoratedImageText
            variant="inherit"
            fontWeight="inherit"
            letterSpacing={pxToRem(-2)}
          >
            ck for Your Needs
          </DecoratedImageText>
        </>
      ),
      offerServices: [
        {
          _id: 1,
          heading: "Basic DBS Checks",
          description:
            "Perfect for roles with minimal interaction with vulnerable groups, our Basic DBS Checks offer insight into an individual’s unspent convictions. This essential check helps build trust while ensuring a smooth and efficient hiring process.",
          icon: <BasicDbsCheckIcon />,
          backgroundColor: "info.light",
        },
        {
          _id: 2,
          heading: "Standard DBS Checks",
          description:
            "For positions involving regular contact with vulnerable groups or greater responsibilities, our Standard DBS Checks provide deeper insight beyond unspent convictions. They cover spent convictions, cautions, reprimands, and warnings, ensuring a more thorough assessment of a candidate’s criminal history.",
          icon: <StandardDbsCheckIcon />,
          backgroundColor: "warning.light",
          borderColor: "warning.dark",
        },
        {
          _id: 3,
          heading: "Enhanced DBS Checks",
          description:
            "For roles with significant responsibility or close contact with vulnerable individuals, our Enhanced DBS Checks offer the highest level of scrutiny. In addition to the details from a Standard DBS Check, they include any relevant information held by local police, ensuring a thorough assessment for sensitive positions.",
          icon: <EnhancedDbsCheckIcon />,
          backgroundColor: "success.light",
        },
      ],
    },
  },

  [SERVICES_DETAILS_ID?.DIGITAL_ID_VERIFICATION]: {
    heroHeading: (
      <>
        Enable Trust with Effortless Digital I
        <DecoratedImageText letterSpacing={pxToRem(-2)}>
          D Verification
        </DecoratedImageText>
      </>
    ),
    heroImage: IdVerificationServiceHeroImage,
    subHeroImage: IdVerificationServiceSubHeroImage,
    subHeroSection: {
      mainHeading:
        "Digital ID Verification: Secure, Seamless, and Future-Ready",
      descriptionOne: `${PROJECT_NAME} is revolutionising verification with advanced, user-friendly solutions tailored for today’s digital landscape. Our cutting-edge technology ensures seamless authentication while maintaining the highest security standards. We empower businesses and individuals with reliable identity verification tools for customer onboarding, user authentication, and regulatory compliance. Prioritising security, privacy, and efficiency, our process provides peace of mind while streamlining operations. With our future-ready Digital ID Verification services, you can reduce fraud, enhance trust, and stay ahead in a rapidly evolving digital world. ${PROJECT_NAME} seamlessly merges security and convenience, shaping the future of identity verification.`,
    },
    chooseUs: {
      mainHeading: `Why Choose ${PROJECT_NAME}'s Digital ID Verification Services:`,
      points: [
        {
          _id: 1,
          heading: "Efficiency: ",
          title: `Our services simplify onboarding, minimising customer friction while saving your business time and resources`,
        },
        {
          _id: 2,
          heading: "Accuracy:",
          title: `Offering different levels of checks, you can customise your verification process for each role, ensuring the scrutiny aligns with the responsibilities.`,
        },
        {
          _id: 3,
          heading: "Security:",
          title: ` Conducting thorough DBS Checks builds trust with clients, partners, and employees, demonstrating your dedication to safety and reliability.`,
        },
        {
          _id: 4,
          heading: "Customisation:",
          title: `Our Digital ID Verification services are adaptable to your specific needs, allowing you to tailor your verification process to your industry and requirements`,
        },
      ],
    },
    howItWorks: {
      mainHeading: `How It Works`,
      points: [
        {
          _id: 1,
          heading: "Upload Your ID",
          title: ` Customers can simply upload a photo of their ID document (passport, driver's license, etc).`,
        },
        {
          _id: 2,
          heading: "Follow Easy Steps",
          title: ` Our system verifies the candidate’s identity and eligibility by cross-referencing official databases and records.`,
        },
        {
          _id: 3,
          heading: "Instant Verification: ",
          title: `The application is securely submitted to the DBS for screening against police records and relevant barred lists`,
        },
        {
          _id: 4,
          heading: "Ready to Go:",
          title: `Depending on the level of check (Basic, Standard, or Enhanced), the DBS reviews criminal history, cautions, and convictions`,
        },
      ],
    },
    offerServices: {
      mainHeading: (
        <>
          Our Digital ID Verification
          <DecoratedImageText letterSpacing={pxToRem(-2)}>
            {" "}
            Services Include
          </DecoratedImageText>
        </>
      ),
      offerServices: [
        {
          _id: 1,
          heading: "Video ID Verification",
          description:
            "Step into the future of identity verification with our Video ID Verification service. Customers can securely authenticate their identity via live video calls, ensuring accuracy, reliability, and enhanced security for remote onboarding.",
          icon: <BasicDbsCheckIcon />,
          backgroundColor: "info.light",
        },
        {
          _id: 2,
          heading: "NFC Identity Verification",
          description:
            "Make identity verification effortless with NFC Identity Verification. Users can simply tap their NFC-enabled ID cards or passports against their device for fast, secure, and seamless authentication.",
          icon: <StandardDbsCheckIcon />,
          backgroundColor: "warning.light",
          borderColor: "warning.dark",
        },
        {
          _id: 3,
          heading: "Address Verification",
          description:
            "Verify the authenticity of an individual's address with our Address Verification service. Enhance customer data accuracy while minimising fraud risks with a secure and reliable validation process.",
          icon: <EnhancedDbsCheckIcon />,
          backgroundColor: "success.light",
        },
      ],
    },
  },
  [SERVICES_DETAILS_ID?.RIGHT_TO_WORK]: {
    heroHeading: (
      <>
        Strengthen Your Workforce, Main
        <DecoratedImageText letterSpacing={pxToRem(-2)}>
          tain Complia
        </DecoratedImageText>
        nce
      </>
    ),
    heroImage: RightToWorkServiceHeroImage,
    subHeroImage: RightToWorkServiceSubHeroImage,
    subHeroSection: {
      mainHeading:
        "Right to Work Verification: Simplified, Compliant, and Reliable",
      descriptionOne: `Welcome to ${PROJECT_NAME}'s Right to Work Verification Services, where we provide you with the tools to streamline your hiring process and ensure compliance. In today's global job market, verifying an individual's eligibility to work is a crucial step in recruitment.`,
      descriptionTwo: `${PROJECT_NAME}'s Right to Work services offer an efficient solution to confirm a candidate’s eligibility to work in your region, ensuring full compliance with labor laws and regulations. Our goal is to equip employers with the necessary resources to confidently navigate the complexities of workforce eligibility. We simplify the verification process, reduce administrative tasks, and provide peace of mind for both employers and employees.`,
      descriptionThree: `Discover our Right to Work services to optimise your hiring process, minimise risks, and empower your workforce.`,
    },
    chooseUs: {
      mainHeading: `Why Choose ${PROJECT_NAME} Right to Work Services:`,
      points: [
        {
          _id: 1,
          heading: "Streamlined Verification: ",
          title: ` Our services simplify the process of verifying work eligibility, making it faster and more efficient.`,
        },
        {
          _id: 2,
          heading: "Precision and Accuracy:",
          title: `${PROJECT_NAME} leverages cutting-edge technology to provide precise results, reducing false positives and ensuring full compliance`,
        },
        {
          _id: 3,
          heading: "Efficiency:",
          title: `Our verification processes are designed for efficiency, saving you time and resources while simplifying the management of your workforce or customer base.`,
        },
        {
          _id: 4,
          heading: "Security:",
          title: `We prioritise data security to safeguard sensitive information, ensuring that your verification processes remain confidential and trustworthy.`,
        },
        {
          _id: 5,
          heading: "Reduced Administrative Burden:",
          title: `With our automated tools, you can reduce the time and effort spent on manual verification processes`,
        },
        {
          _id: 6,
          heading: "Expert Support:",
          title: ` Our team is committed to helping you navigate the complexities of right to work verification, offering tailored solutions for your needs`,
        },
      ],
    },
    howItWorks: {
      mainHeading: `How It Works`,
      points: [
        {
          _id: 1,
          heading: "Submit Employee Information:",
          title: `Customers can simply upload a photo of their ID document (passport, driver's license, etc.).`,
        },
        {
          _id: 2,
          heading: "Verification Process:",
          title: `Our step-by-step process guides users through the verification, ensuring a smooth experience.`,
        },
        {
          _id: 3,
          heading: "Instant Results: ",
          title: ` Once the ID is submitted, our technology verifies it in real-time, and the results are available immediately.`,
        },
        {
          _id: 4,
          heading: "Ongoing Compliance: ",
          title: `With successful verification, your customers are ready to access your services or products, hassle-free.`,
        },
        {
          _id: 5,
          heading: "Support and Assistance: ",
          title: `If needed, our team is available to guide you through any verification queries or concerns, ensuring a smooth and accurate process.`,
        },
      ],
    },
    offerServices: {
      mainHeading: (
        <>
          Our Right to Wor
          <DecoratedImageText letterSpacing={pxToRem(-2)}>
            k Services Include
          </DecoratedImageText>
        </>
      ),
      offerServices: [
        {
          _id: 1,
          heading: "Legal Compliance:",
          description:
            "Our services help you comply with immigration and age-restriction laws, reducing the risk of legal complications.  ",
          icon: <BasicDbsCheckIcon />,
          backgroundColor: "info.light",
        },
        {
          _id: 2,
          heading: "Right to Work Checks:",
          description: `${PROJECT_NAME}'s Right to Work Checks assist businesses in verifying that employees have the legal right to work in their respective countries. We help you navigate complex immigration laws, ensuring that your workforce is authorised and compliant.  `,
          icon: <StandardDbsCheckIcon />,
          backgroundColor: "warning.light",
          borderColor: "warning.dark",
        },
        {
          _id: 3,
          heading: "Age Verification:",
          description:
            "Our Age Verification service ensures that individuals meet age requirements for specific products or services, age-restricted content. This feature is crucial for complying with age-related regulations and protecting vulnerable populations. ",
          icon: <EnhancedDbsCheckIcon />,
          backgroundColor: "success.light",
        },
      ],
    },
  },
  [SERVICES_DETAILS_ID?.SOCIAL_MEDIA_CHECKS]: {
    heroHeading: (
      <>
        Insightful Screening for{" "}
        <DecoratedImageText letterSpacing={pxToRem(-2)}>
          Safer Hiring.
        </DecoratedImageText>
      </>
    ),
    heroImage: SocialMediaChecksServiceHeroImage,
    subHeroImage: SocialMediaChecksServiceSubHeroImage,
    subHeroSection: {
      mainHeading: "Social Media Checks: Uncover More, Hire Better",
      descriptionOne: `In today’s digital world, a candidate’s online presence can provide valuable insights into their character and suitability for your organisation. ${PROJECT_NAME}’s Social Media Checks offer a comprehensive review of an individual’s digital footprint, giving you a clear understanding of their online activities and associations.`,
      descriptionTwo: `We empower employers with the tools to make informed hiring decisions, minimise risks related to online behavior, and build a workforce that reflects your company’s values.`,
      descriptionThree: `Discover how our Social Media Checks go beyond the CV, providing you with the insights needed to hire with confidence. With ${PROJECT_NAME}, you gain a thorough and reliable assessment for smarter, more secure hiring.`,
    },
    chooseUs: {
      mainHeading: `Why Choose ${PROJECT_NAME} Checks Services:`,
      points: [
        {
          _id: 1,
          heading: "Enhanced Insight:",
          title: ` Social Media Checks offer deeper insights into a candidate’s behaviour and character, ensuring they align with your organisation’s values.`,
        },
        {
          _id: 2,
          heading: "Risk Mitigation:",
          title: ` Identifying potential issues early helps mitigate risks from candidates with concerning online activity`,
        },
        {
          _id: 3,
          heading: "Compliance:",
          title: ` We ensure our services respect privacy and comply with all relevant laws and regulations`,
        },
        {
          _id: 4,
          heading: "Efficiency:",
          title: ` We prioritise data security to safeguard sensitive information, ensuring that your verification processes remain confidential and trustworthy`,
        },
      ],
    },
    howItWorks: {
      mainHeading: `How It Works`,
      points: [
        {
          _id: 1,
          heading: "Data Collection",
          title: ` Our system scans news articles, blogs, forums, and social media for negative mentions of a candidate or entity.`,
        },
        {
          _id: 2,
          heading: "Keyword & Sentiment Analysis",
          title: ` AI-driven tools analyse content to identify potential red flags, such as fraud, misconduct, or legal issues`,
        },
        {
          _id: 3,
          heading: "Risk Categorisation ",
          title: `Findings are categorised by risk level, helping you assess potential threats.`,
        },
        {
          _id: 4,
          heading: "Comprehensive Report:",
          title: ` Receive a detailed report outlining any adverse media findings for informed decision-making.`,
        },
      ],
    },
    offerServices: {
      mainHeading: (
        <>
          Our Social Media Checks{" "}
          <DecoratedImageText letterSpacing={pxToRem(-2)}>
            Services Include
          </DecoratedImageText>
        </>
      ),
      alignment: "center",
      offerServices: [
        {
          _id: 1,
          heading: "Adverse Media Screening",
          description: `${PROJECT_NAME}'s Adverse Media Screening scans social media and online sources for negative mentions, helping you spot red flags and make informed hiring decisions.`,
          icon: <BasicDbsCheckIcon />,
          backgroundColor: "info.light",
        },
        {
          _id: 2,
          heading: "Proxy Detection",
          description: `${PROJECT_NAME}'s Proxy Detection technology identifies proxy servers and anonymising tools, ensuring the authenticity and reliability of a candidate's online presence. `,
          icon: <StandardDbsCheckIcon />,
          backgroundColor: "warning.light",
          borderColor: "warning.dark",
        },
      ],
    },
  },
  [SERVICES_DETAILS_ID?.KNOW_YOUR_CUSTOMER]: {
    heroHeading: (
      <>
        Verify Customers, Foster{" "}
        <DecoratedImageText letterSpacing={pxToRem(-2)}>
          Global Trust
        </DecoratedImageText>
      </>
    ),
    heroImage: KycServiceHeroImage,
    subHeroImage: KycServiceSubHeroImage,
    subHeroSection: {
      mainHeading: "Trusted KYC Solutions for Secure and Seamless Verification",
      descriptionOne: `${PROJECT_NAME}'s KYC services provide a trusted foundation for transparency and customer confidence. Our comprehensive solutions enable businesses to verify and understand their customers worldwide while ensuring compliance and risk reduction.`,
      descriptionTwo: `We are committed to delivering robust KYC solutions that enhance security, protect data privacy, and uphold regulatory standards. With ${PROJECT_NAME}, you gain a seamless platform designed to prevent fraud, streamline operations, and foster trust.`,
      descriptionThree: `Explore our Digital ID Verification services and embrace the future of secure identity verification—where convenience and security come together to unlock new opportunities.`,
    },
    chooseUs: {
      mainHeading: `Why Choose ${PROJECT_NAME}'s KYC Services`,
      points: [
        {
          _id: 1,
          heading: "Comprehensive Coverage:",
          title: ` Our KYC services offer flexible identity verification solutions, allowing you to customise your approach to meet industry-specific needs and compliance requirements.`,
        },
        {
          _id: 2,
          heading: "Risk Mitigation:",
          title: ` Identifying potential issues early helps mitigate risks from candidates with concerning online activity.`,
        },
        {
          _id: 3,
          heading: "Compliance:",
          title: ` We ensure our services respect privacy and comply with all relevant laws and regulations`,
        },
        {
          _id: 4,
          heading: "Efficiency:",
          title: `We simplify the process, saving you time and resources while conducting comprehensive checks.`,
        },
      ],
    },
    howItWorks: {
      mainHeading: `How It Works`,
      points: [
        {
          _id: 1,
          heading: "Submit Customer Information:",
          title: ` Collect and provide the necessary customer details, including identification documents and relevant personal data.`,
        },
        {
          _id: 2,
          heading: "Identity Verification:",
          title: `  Our AI-driven system verifies documents, cross-checks data with global databases, and conducts biometric authentication to confirm identity.`,
        },
        {
          _id: 3,
          heading: "Risk Assessment & Compliance Checks: ",
          title: `  Screen customers against watchlists, sanctions lists, and adverse media to detect potential risks and ensure regulatory compliance.`,
        },
        {
          _id: 4,
          heading: "Instant Verification Results: ",
          title: ` Receive a real-time verification report, detailing the customer's identity status and any potential concerns.`,
        },
        {
          _id: 5,
          heading: " Ongoing Monitoring & Compliance: ",
          title: `  Maintain continuous compliance with automated monitoring and alerts for any changes in a customer’s risk profile.`,
        },
      ],
    },
    offerServices: {
      mainHeading: (
        <>
          Our KYC{" "}
          <DecoratedImageText letterSpacing={pxToRem(-2)}>
            Services Include
          </DecoratedImageText>
        </>
      ),
      offerServices: [
        {
          _id: 1,
          heading: "Ongoing Customer Monitoring",
          description: `Stay proactive with our Ongoing Customer Monitoring service, offering real-time tracking to detect and respond to suspicious activities swiftly.`,
          icon: <BasicDbsCheckIcon />,
          backgroundColor: "info.light",
        },
        {
          _id: 2,
          heading: "Email Risk Scoring",
          description: `${PROJECT_NAME}'s Email Risk Scoring analyses email authenticity to detect suspicious accounts, reducing fraud risks and enhancing security. `,
          icon: <StandardDbsCheckIcon />,
          backgroundColor: "warning.light",
          borderColor: "warning.dark",
        },
        {
          _id: 3,
          heading: "Registry Screening",
          description:
            "Our Registry Screening service verifies individuals and businesses against public and private databases, ensuring compliance and preventing fraud.",
          icon: <EnhancedDbsCheckIcon />,
          backgroundColor: "success.light",
        },
        {
          _id: 4,
          heading: "Geolocation",
          description: `Confirm user identities and prevent fraud with Geolocation services, ensuring accurate verification of physical locations.`,
          icon: <BasicDbsCheckIcon />,
          backgroundColor: "info.light",
        },
        {
          _id: 5,
          heading: "Negative Media Screening",
          description: `Our Negative Media Screening monitors global media sources to detect adverse mentions or associations, helping you assess potential risks effectively. `,
          icon: <StandardDbsCheckIcon />,
          backgroundColor: "warning.light",
          borderColor: "warning.dark",
        },
        {
          _id: 6,
          heading: "Spoofing Detection",
          description:
            "Safeguard against identity fraud with our Spoofing Detection technology, designed to detect fake or manipulated documents and images.",
          icon: <EnhancedDbsCheckIcon />,
          backgroundColor: "success.light",
        },
        {
          _id: 7,
          heading: "Facial Verification",
          description: `Our Facial Verification services leverage advanced algorithms to compare live photos or videos with official documents, ensuring secure and accurate identity validation.`,
          icon: <BasicDbsCheckIcon />,
          backgroundColor: "info.light",
        },
        {
          _id: 8,
          heading: "Biometric Face Comparison",
          description: `Achieve top-tier identity accuracy with Biometric Face Comparison, which matches live captures to reference images, minimising impersonation risks. `,
          icon: <StandardDbsCheckIcon />,
          backgroundColor: "warning.light",
          borderColor: "warning.dark",
        },
        {
          _id: 9,
          heading: "Customer Due Diligence (CDD)",
          description: `${PROJECT_NAME}'s Customer Due Diligence (CDD) services play a crucial role in the KYC (Know Your Customer) process. We conduct comprehensive identity verification.`,
          icon: <EnhancedDbsCheckIcon />,
          backgroundColor: "success.light",
        },
        {
          _id: 10,
          heading: "Enhanced Due Diligence (EDD)",
          description: `When dealing with high-risk clients or complex transactions, our Enhanced Due Diligence (EDD) services offer in-depth analysis. We assess backgrounds, connections, and potential threats, enabling you to implement targeted risk management strategies effectively.`,
          icon: <BasicDbsCheckIcon />,
          backgroundColor: "info.light",
          md: 12,
        },
      ],
    },
  },
  [SERVICES_DETAILS_ID?.IDENTITY_INVESTIGATION]: {
    heroHeading: (
      <>
        Secure Insights for Smarter{" "}
        <DecoratedImageText letterSpacing={pxToRem(-2)}>
          Decisions
        </DecoratedImageText>
      </>
    ),
    heroImage: IdInvestigationServiceHeroImage,
    subHeroImage: IdInvestigationServiceSubHeroImage,
    subHeroSection: {
      mainHeading: "Clarity in Identity, Confidence in Every Decision",
      descriptionOne: `${PROJECT_NAME}’s Identity Investigation Services are designed to uncover the truth and build trust through verified insights. From debt tracing and driver validation to workplace behavior analysis, we provide a complete view of the individuals you engage with. Our goal is to empower your organisation to make informed, confident decisions while minimising risk. With ${PROJECT_NAME}, trust begins with clarity and ends with security.`,
    },
    chooseUs: {
      mainHeading: `Why Choose ${PROJECT_NAME}'s Identity Investigation Services`,
      points: [
        {
          _id: 1,
          heading: "Comprehensive Coverage:",
          title: `  Our services offer a comprehensive view of individuals, enabling informed decisions grounded in their background, behavior, and trustworthiness.`,
        },
        {
          _id: 2,
          heading: "Risk Mitigation: ",
          title: ` By evaluating financial risks, analysing workplace behavior, and verifying driver credentials, you can reduce liabilities and foster a secure, efficient environment.`,
        },
        {
          _id: 3,
          heading: "Compliance:",
          title: `   We place the highest importance on data security, ensuring sensitive information remains protected at every stage of the investigation process.`,
        },
        {
          _id: 4,
          heading: "Efficiency:",
          title: ` Our efficient processes help you save time and resources without compromising the depth and quality of investigations.`,
        },
      ],
    },
    howItWorks: {
      mainHeading: `How It Works`,
      points: [
        {
          _id: 1,
          heading: "Data Collection:",
          title: ` We securely gather relevant information such as personal identifiers, employment history, financial records, and behavioral data.`,
        },
        {
          _id: 2,
          heading: "Verification & Validation:",
          title: ` Our system cross-references data with trusted sources to confirm accuracy and authenticity—ensuring nothing is missed.`,
        },
        {
          _id: 3,
          heading: "Behavioral & Risk Analysis: ",
          title: `  We assess patterns in work behavior, financial activity, and driving history to identify red flags or inconsistencies.`,
        },
        {
          _id: 4,
          heading: "Insight Generation: ",
          title: ` Detailed, easy-to-understand reports are generated with verified findings, empowering you to make informed, confident decisions.`,
        },
      ],
    },
    offerServices: {
      mainHeading: (
        <>
          Our Identity Inve
          <DecoratedImageText letterSpacing={pxToRem(-2)}>
            stigation Services
          </DecoratedImageText>
          Include
        </>
      ),
      offerServices: [
        {
          _id: 1,
          heading: "Debt Tracing",
          description: `${PROJECT_NAME}'s Debt Tracing service helps you locate and verify individuals with outstanding debts or financial obligations. This service is essential for businesses looking to recover outstanding payments or make informed financial decisions.  `,
          icon: <BasicDbsCheckIcon />,
          backgroundColor: "info.light",
        },
        {
          _id: 2,
          heading: "Work Behavior Analysis",
          description: `Gain insights into an individual's work behavior, ethics, and reliability with our Work Behavior Analysis. This service assists employers in making informed hiring decisions and promoting a productive work environment.   `,
          icon: <StandardDbsCheckIcon />,
          backgroundColor: "warning.light",
          borderColor: "warning.dark",
        },
        {
          _id: 3,
          heading: "Driver Validation",
          description:
            "Ensure that an individual's driver's license is valid and up-to-date with our Driver Validation service. This is crucial for industries that require employees to operate vehicles as part of their duties.  ",
          icon: <EnhancedDbsCheckIcon />,
          backgroundColor: "success.light",
        },
      ],
    },
  },
  [SERVICES_DETAILS_ID?.KNOW_YOUR_BUSINESS]: {
    heroHeading: (
      <>
        Know Your Partners. Grow wi
        <DecoratedImageText letterSpacing={pxToRem(-2)}>
          th Confidence
        </DecoratedImageText>
      </>
    ),
    heroImage: KybServiceHeroImage,
    subHeroImage: KybServiceSubHeroImage,
    subHeroSection: {
      mainHeading: "Know Your Partners. Grow Your Business with Confidence.",
      descriptionOne: `${PROJECT_NAME}’s KYB (Know Your Business) solutions help you build trusted partnerships by providing deep insights into the businesses you engage with. In an ever-evolving marketplace, we empower you to make informed, strategic decisions with confidence. From verifying legitimacy to ensuring compliance, our services offer a clear view of your partners, suppliers, and collaborators. With ${PROJECT_NAME}, you gain the knowledge needed to reduce risk, align with the right entities, and drive sustainable growth. Trust starts with knowing who you're doing business with. `,
    },
    chooseUs: {
      mainHeading: `Why Choose ${PROJECT_NAME}'s Know your Business Services`,
      points: [
        {
          _id: 1,
          heading: "Comprehensive Coverage:",
          title: ` Our KYB services provide a comprehensive view of your business partners, helping you thoroughly evaluate their credibility, compliance, and potential risks.`,
        },
        {
          _id: 2,
          heading: "Advanced Technology: ",
          title: ` We leverage advanced technology to provide timely, accurate insights, enhancing the effectiveness and precision of your due diligence process.`,
        },
        {
          _id: 3,
          heading: "Regulatory Compliance:",
          title: ` Our solutions ensure regulatory compliance, safeguarding your business against legal challenges and reputational risks.`,
        },
        {
          _id: 4,
          heading: "Trust and Transparency: ",
          title: `Conducting KYB checks showcases your commitment to trust, transparency, and responsible business practices.`,
        },
      ],
    },
    howItWorks: {
      mainHeading: `How It Works`,
      points: [
        {
          _id: 1,
          heading: "Business Data Collection:",
          title: ` Gather key information such as company registration details, ownership structure, financial records, and regulatory history.`,
        },
        {
          _id: 2,
          heading: "Verification & Validation:",
          title: ` Cross-check collected data against official registries, watchlists, and global compliance databases to confirm legitimacy.`,
        },
        {
          _id: 3,
          heading: "Risk Assessment:  ",
          title: `  Analyse the business’s financial health, legal standing, and reputation to identify any red flags or risk factors.`,
        },
        {
          _id: 4,
          heading: "Beneficial Ownership Identification:",
          title: `  Uncover the individuals behind the business, ensuring transparency and helping detect potential fraud or hidden interests.`,
        },
        {
          _id: 5,
          heading: "Ongoing Monitoring:",
          title: `   Stay updated with real-time alerts and periodic reviews to maintain continuous compliance and reduce long-term risk.`,
        },
      ],
    },
    offerServices: {
      mainHeading: (
        <>
          Our KYB{" "}
          <DecoratedImageText letterSpacing={pxToRem(-2)}>
            Services Include
          </DecoratedImageText>
        </>
      ),
      offerServices: [
        {
          _id: 1,
          heading: "Supplier Due Diligence",
          description: `Ensure the reliability of your suppliers with our Supplier Due Diligence service. We evaluate their financial stability, regulatory compliance, and reputation, helping you make informed procurement decisions.  `,
          icon: <BasicDbsCheckIcon />,
          backgroundColor: "info.light",
        },
        {
          _id: 2,
          heading: "Transaction Screenings",
          description: `Our Transaction Screening services assist in monitoring financial transactions for unusual or suspicious activities, contributing to a safer financial environment.     `,
          icon: <StandardDbsCheckIcon />,
          backgroundColor: "warning.light",
          borderColor: "warning.dark",
        },
        {
          _id: 3,
          heading: "Entity Screening",
          description: `${PROJECT_NAME}'s Entity Screening scans corporate entities against multiple databases to verify their legitimacy, compliance, and potential risks.     `,
          icon: <EnhancedDbsCheckIcon />,
          backgroundColor: "success.light",
        },
        {
          _id: 4,
          heading: "Know Your Merchant (KYM)",
          description: `Verify the identities and reputations of your merchant partners to build trust and reliability in your business transactions. `,
          icon: <BasicDbsCheckIcon />,
          backgroundColor: "info.light",
        },
        {
          _id: 5,
          heading: "Adverse Media Screening",
          description: `Adverse Media Screening scans a range of media sources to identify negative mentions related to your business partners, helping you manage risks.   `,
          icon: <StandardDbsCheckIcon />,
          backgroundColor: "warning.light",
          borderColor: "warning.dark",
        },
        {
          _id: 6,
          heading: "Entity Screening",
          description: `${PROJECT_NAME}'s Entity Screening scans corporate entities against multiple databases to verify their legitimacy, compliance, and potential risks.  `,
          icon: <EnhancedDbsCheckIcon />,
          backgroundColor: "success.light",
        },
      ],
    },
  },
  [SERVICES_DETAILS_ID?.PRE_EMPLOYMENT_SCREENING]: {
    heroHeading: (
      <>
        Screen with Confidence. H
        <DecoratedImageText letterSpacing={pxToRem(-2)}>
          ire with Trust
        </DecoratedImageText>
      </>
    ),
    heroImage: PreEmploymentServiceHeroImage,
    subHeroImage: PreEmploymentServiceSubHeroImage,
    subHeroSection: {
      mainHeading: "Hire with Confidence. Build with Integrity.",
      descriptionOne: `${PROJECT_NAME}’s Pre-Employment Screening Services help you make confident, informed hiring decisions by providing a complete view of each candidate. From background checks to behavioral assessments, our solutions ensure that every new hire aligns with your organisation’s values and standards. We streamline the hiring process, reduce the risk of bad hires, and support ethical recruitment practices. With ${PROJECT_NAME}, you can build a trustworthy, high-performing team that drives long-term success.`,
    },
    chooseUs: {
      mainHeading: `Why Choose ${PROJECT_NAME}'s Pre-employment screening  Services`,
      points: [
        {
          _id: 1,
          heading: "Comprehensive Coverage:",
          title: `  Our services offer a comprehensive understanding of candidates, enabling you to make well-informed and confident hiring decisions.`,
        },
        {
          _id: 2,
          heading: "Regulatory Compliance: ",
          title: ` We support your compliance with employment laws and regulations, minimising the risk of legal issues and ensuring responsible hiring.`,
        },
        {
          _id: 3,
          heading: " Security: ",
          title: `We prioritise data security to safeguard sensitive candidate information at every stage of the screening process.`,
        },
        {
          _id: 4,
          heading: "Efficiency: ",
          title: ` Our efficient processes save time and resources, so you can focus on interviewing and securing the best talent for your team.`,
        },
      ],
    },
    howItWorks: {
      mainHeading: `How It Works`,
      points: [
        {
          _id: 1,
          heading: "Submit Customer Information:",
          title: `  Collect and provide the necessary customer details, including identification documents and relevant personal data.`,
        },
        {
          _id: 2,
          heading: "Identity Verification:",
          title: `Our AI-driven system verifies documents, cross-checks data with global databases, and conducts biometric authentication to confirm identity.`,
        },
        {
          _id: 3,
          heading: "Risk Assessment & Compliance Checks:",
          title: `   Screen customers against watchlists, sanctions lists, and adverse media to detect potential risks and ensure regulatory compliance.`,
        },
        {
          _id: 4,
          heading: "Instant Verification Results:",
          title: ` Receive a real-time verification report, detailing the customer's identity status and any potential concerns.`,
        },
        {
          _id: 5,
          heading: "Ongoing Monitoring & Compliance:",
          title: ` Maintain continuous compliance with automated monitoring and alerts for any changes in a customer’s risk profile.`,
        },
      ],
    },
    offerServices: {
      mainHeading: (
        <>
          Our Pre-Employme
          <DecoratedImageText letterSpacing={pxToRem(-2)}>
            nt Screening Servi
          </DecoratedImageText>
          ces Include
        </>
      ),
      offerServices: [
        {
          _id: 1,
          heading: "Criminal Background Checks",
          description: `Ensure the reliability of your suppliers with our Supplier Due Diligence service. We evaluate their financial stability, regulatory compliance, and reputation, helping you make informed procurement decisions. `,
          icon: <BasicDbsCheckIcon />,
          backgroundColor: "info.light",
        },
        {
          _id: 2,
          heading: "Reference Checks",
          description: `Our Transaction Screening services assist in monitoring financial transactions for unusual or suspicious activities, contributing to a safer financial environment.    `,
          icon: <StandardDbsCheckIcon />,
          backgroundColor: "warning.light",
          borderColor: "warning.dark",
        },
        {
          _id: 3,
          heading: "Education and Credential Verification",
          description:
            "Confirm the authenticity of academic degrees, certifications, and credentials claimed by candidates. Our Education and Credential Verification services prevent resume fraud. ",
          icon: <EnhancedDbsCheckIcon />,
          backgroundColor: "success.light",
        },
        {
          _id: 4,
          heading: "Employment History Verification",
          description: `Ensure that candidates' work histories are accurate and complete with Employment History Verification. We validate employment dates, positions held, and more. `,
          icon: <BasicDbsCheckIcon />,
          backgroundColor: "info.light",
        },
        {
          _id: 5,
          heading: "Professional License Verification",
          description: `For roles that require specific licenses or certifications, our Professional License Verification ensures that candidates hold valid and current credentials.  `,
          icon: <StandardDbsCheckIcon />,
          backgroundColor: "warning.light",
          borderColor: "warning.dark",
        },
        {
          _id: 6,
          heading: "Adverse Media Screening",
          description:
            "Our Adverse Media Screening scans a wide range of media sources to identify negative mentions or associations related to your business partners, helping you manage risks. ",
          icon: <EnhancedDbsCheckIcon />,
          backgroundColor: "success.light",
        },
      ],
    },
  },
  [SERVICES_DETAILS_ID?.AML_COMPLIANCE]: {
    heroHeading: (
      <>
        Stay Compliant. Stay{" "}
        <DecoratedImageText letterSpacing={pxToRem(-2)}>
          Protected
        </DecoratedImageText>
      </>
    ),
    heroImage: AmlComplianceServiceHeroImage,
    subHeroSection: {
      mainHeading: "Protecting Your Business. Powering Compliance.",
      descriptionOne: `${PROJECT_NAME}’s AML Compliance Services are designed to help businesses strengthen security, reduce financial risk, and meet global regulatory standards. In a rapidly evolving financial landscape, protecting your organisation from money laundering and fraudulent activity is essential. Our comprehensive solutions offer real-time monitoring, risk assessment, and robust reporting tools to ensure you stay compliant and alert. Acting as your AML defense partner, we provide the insights and support needed to safeguard your operations and reputation. With ${PROJECT_NAME}, you can focus on growth while we help you navigate compliance with confidence and clarity.`,
    },
    chooseUs: {
      mainHeading: `Why Choose ${PROJECT_NAME}'s AML Compliance  Services`,
      points: [
        {
          _id: 1,
          heading: "Comprehensive Solutions: ",
          title: ` Our AML services encompass comprehensive due diligence and transaction monitoring, enabling you to navigate the ever-changing financial landscape with confidence and efficiency.`,
        },
        {
          _id: 2,
          heading: "Advanced Technology:",
          title: ` We use advanced technology to provide accurate, real-time results, strengthening your ability to assess and manage risk effectively.`,
        },
        {
          _id: 3,
          heading: " Regulatory Compliance:",
          title: ` ${PROJECT_NAME}’s solutions are built to ensure AML compliance, protecting both your business and its reputation from financial and regulatory risks.`,
        },
        {
          _id: 4,
          heading: "Security:",
          title: ` We prioritise data security to safeguard sensitive information, ensuring your compliance processes remain both secure and dependable.`,
        },
      ],
    },
    howItWorks: {
      mainHeading: `How It Works`,
      points: [
        {
          _id: 1,
          heading: "Customer & Entity Onboarding:",
          title: ` Collect and verify identity information through KYC/KYB checks to establish a trusted relationship from the start.`,
        },
        {
          _id: 2,
          heading: "Risk Assessment:",
          title: `  Classify customers and transactions based on risk levels using factors like geography, transaction type, and business sector.`,
        },
        {
          _id: 3,
          heading: "Transaction Monitoring: ",
          title: ` Continuously track financial activity to detect suspicious behavior, unusual patterns, or potential red flags.`,
        },
        {
          _id: 4,
          heading: " Sanctions & Watchlist Screening:",
          title: ` Automatically screen individuals and entities against global sanctions lists, PEPs (Politically Exposed Persons), and adverse media.`,
        },
        {
          _id: 5,
          heading: "Reporting & Audit Trail: ",
          title: `Generate real-time alerts, detailed reports, and maintain a clear audit trail for internal reviews and regulatory compliance.`,
        },
        {
          _id: 6,
          heading: "Ongoing Compliance & Updates: ",
          title: ` Stay ahead of evolving regulations with regular updates and automated workflows that adapt to changing compliance needs.`,
        },
      ],
    },
    offerServices: false,
    showSubHero: false,
  },
  [SERVICES_DETAILS_ID?.REFERENCE_CHECKS]: {
    heroHeading: (
      <>
        Reference Checks That Reveal W
        <DecoratedImageText letterSpacing={pxToRem(-2)}>
          hat Resumes
        </DecoratedImageText>
        Can’t
      </>
    ),
    heroImage: ReferenceCheckServiceHeroImage,
    subHeroImage: ReferenceCheckServiceSubHeroImage,
    subHeroSection: {
      mainHeading: "Hire Smarter. Trust Built on Verified Insight",
      descriptionOne: `${PROJECT_NAME}’s Reference Check Services help you make informed hiring decisions by providing verified insights into a candidate’s past performance, behavior, and professional integrity. In an increasingly competitive job market, understanding who you're hiring is more important than ever. Our solutions simplify the reference checking process while ensuring accuracy, security, and compliance. By validating a candidate’s history through trusted sources, you reduce hiring risks and strengthen your workforce. With ${PROJECT_NAME}, you gain the confidence to hire individuals who truly align with your organisation’s values and goals.`,
    },
    chooseUs: {
      mainHeading: `Why Choose ${PROJECT_NAME}'s Reference Check screening  Services`,
      points: [
        {
          _id: 1,
          heading: "Thorough Assessment:",
          title: ` Our Reference Checks go beyond the surface, offering a comprehensive evaluation of a candidate's professional and personal qualities.`,
        },
        {
          _id: 2,
          heading: "Informed Decisions: ",
          title: ` Access detailed insights to make informed hiring choices that align with your organisation's goals and values.`,
        },
        {
          _id: 3,
          heading: "Compliance:",
          title: ` We conduct our checks with the utmost respect for privacy and compliance with relevant laws and regulations.  `,
        },
        {
          _id: 4,
          heading: "Efficiency:",
          title: `Our streamlined processes save you time and resources while ensuring thorough evaluations.`,
        },
      ],
    },
    howItWorks: {
      mainHeading: `How It Works`,
      points: [
        {
          _id: 1,
          heading: "Candidate Information Collection:",
          title: ` Collect and provide the necessary customer details, including identification documents and relevant personal data.`,
        },
        {
          _id: 2,
          heading: "Reference Outreach:",
          title: ` ${PROJECT_NAME} securely reaches out to listed references through automated or manual communication channels.`,
        },
        {
          _id: 3,
          heading: "Risk Assessment & Compliance Checks:  ",
          title: ` References respond to tailored questions about the candidate’s role, performance, reliability, and work ethic.`,
        },
        {
          _id: 4,
          heading: " Insight Compilation: ",
          title: ` Responses are verified, analysed, and compiled into a detailed report with clear insights for your hiring team.`,
        },
        {
          _id: 5,
          heading: " Decision Support: ",
          title: ` Use the verified feedback to make confident, informed hiring decisions—reducing risk and improving quality of hire.`,
        },
      ],
    },
    offerServices: {
      mainHeading: (
        <>
          Our Reference{" "}
          <DecoratedImageText letterSpacing={pxToRem(-2)}>
            Checks Services I
          </DecoratedImageText>
          nclude
        </>
      ),
      offerServices: [
        {
          _id: 1,
          heading: "Professional Reference Checks",
          description: `${PROJECT_NAME}'s Adverse Media Screening scours social media platforms and online sources for any negative mentions or associations related to a candidate. This service helps you identify potential red flags and make informed hiring decisions. `,
          icon: <BasicDbsCheckIcon />,
          backgroundColor: "info.light",
        },
        {
          _id: 2,
          heading: "Character Reference Checks",
          description: `Gain a deeper understanding of a candidate's character and values with our Character Reference Checks. We contact individuals who can vouch for the candidate's personality, work ethics, and reliability.  `,
          icon: <StandardDbsCheckIcon />,
          backgroundColor: "warning.light",
          borderColor: "warning.dark",
        },
      ],
    },
  },
  [SERVICES_DETAILS_ID?.SMS_SIGNATURE]: {
    heroHeading: (
      <>
        Secure{" "}
        <DecoratedImageText letterSpacing={pxToRem(-2)}>
          Signature Solu
        </DecoratedImageText>
        tion
      </>
    ),
    heroImage: SmsSignatureServiceHeroImage,
    subHeroImage: SmsSignatureServiceSubHeroImage,
    subHeroSection: {
      mainHeading: "Sign Anywhere. Secure Every Signature.",
      descriptionOne: `${PROJECT_NAME}’s SMS Signature Services offer a fast, secure, and convenient way to sign important documents directly from your mobile device. Whether you’re approving contracts, closing deals, or managing workflows, our SMS-based solution ensures a seamless signing experience anytime, anywhere. Designed for both individuals and businesses, it eliminates delays and boosts efficiency without compromising on security. With strong data protection measures and real-time delivery, you can trust every transaction to be safe and reliable. Embrace a smarter, more flexible way to handle document signing with ${PROJECT_NAME}.`,
    },
    chooseUs: {
      mainHeading: `Why Choose ${PROJECT_NAME}'s SMS Signature Services`,
      points: [
        {
          _id: 1,
          heading: "Efficiency: ",
          title: `Simplify the signing process by removing the need for physical documents and handwritten signatures.`,
        },
        {
          _id: 2,
          heading: "Security: ",
          title: `SMS Signature provides secure document access and verification, minimising the risk of unauthorised signings.`,
        },
        {
          _id: 3,
          heading: "Convenience: ",
          title: `Sign documents on the go, anytime and anywhere, right from your mobile device—boosting flexibility and accelerating business transactions.`,
        },
        {
          _id: 4,
          heading: "Compliance:",
          title: ` Our service complies with legal standards, ensuring it's reliable and applicable across diverse industries and use cases.`,
        },
      ],
    },
    howItWorks: {
      mainHeading: `How It Works`,
      points: [
        {
          _id: 1,
          heading: "Upload the Document:",
          title: `Start by uploading the contract, agreement, or form that needs to be signed.`,
        },
        {
          _id: 2,
          heading: "Enter Recipient Details: ",
          title: `Add the recipient’s phone number and any custom message or signing instructions.`,
        },
        {
          _id: 3,
          heading: "Send Secure SMS Link: ",
          title: ` The recipient receives a secure, time-sensitive link via SMS to access the document.`,
        },
        {
          _id: 4,
          heading: "Review & Sign:",
          title: ` The recipient reviews the document and signs it digitally—directly from their mobile device.`,
        },
        {
          _id: 5,
          heading: "Receive Confirmation:",
          title: `Once completed, all parties receive a confirmation and a copy of the signed document, with audit trail and timestamp.`,
        },
      ],
    },
    offerServices: {
      mainHeading: (
        <>
          Our SMS Sign
          <DecoratedImageText letterSpacing={pxToRem(-2)}>
            ature Se
          </DecoratedImageText>
          rvices Include
        </>
      ),
      offerServices: [
        {
          _id: 1,
          heading: "Document Preparation",
          description:
            "Prepare your document or contract that requires a signature. Ensure it's in a digital format that's easily accessible via mobile.",
          icon: <BasicDbsCheckIcon />,
          backgroundColor: "info.light",
        },
        {
          _id: 2,
          heading: "SMS Request",
          description:
            "Initiate the signing process by sending an SMS to the signing party's mobile number. The SMS includes a unique PIN number and a link to the document.  ",
          icon: <StandardDbsCheckIcon />,
          backgroundColor: "warning.light",
          borderColor: "warning.dark",
        },
        {
          _id: 3,
          heading: "Secure Verification",
          description:
            "The signing party receives the SMS, enters the provided PIN number, and verifies their identity.  ",
          icon: <EnhancedDbsCheckIcon />,
          backgroundColor: "success.light",
        },
        {
          _id: 4,
          heading: "Completion and Storage",
          description:
            "The signed document is securely stored and can be easily accessed by all parties involved. ",
          icon: <BasicDbsCheckIcon />,
          backgroundColor: "info.light",
        },
      ],
    },
  },
};
