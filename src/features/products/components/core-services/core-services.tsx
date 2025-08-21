"use client";
import { Box } from "@mui/material";
import {
  coreservicesimg1,
  coreservicesimg2,
  coreservicesimg3,
} from "../../assets/images";
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

const CoreServicesPage = () => {
  const sections: SectionData[] = [
    {
      id: "account-information",
      title: "Account Information",
      subtitle: "Empower decisions with real-time banking data.",
      description: `Access live, secure financial data directly from users’ bank accounts with their explicit consent. Account Information Services (AIS) provide seamless, real-time connectivity to a customer’s financial history, including current balances, detailed transaction records, and account identity. This data can be retrieved across multiple banks and accounts, ensuring a 360-degree view of personal or business finances. AIS empowers businesses to make faster and more accurate credit assessments, deliver tailored financial recommendations, and optimise budgeting tools with confidence. It’s an essential building block for personal finance apps, lending platforms, wealth management tools, and risk evaluation engines. With powerful categorisation and enrichment layers, the raw data becomes actionable insights in seconds. Our AIS infrastructure supports full PSD2 compliance, with coverage across major UK and EU banks. Combined with strong consent management and advanced data security protocols, it guarantees trust, transparency, and regulatory peace of mind. Whether you're building a fintech solution or improving existing offerings, AIS unlocks smarter financial experiences from the ground up.`,
      features: [
        "Up-to-the-minute Account Balances ",
        "Full Transaction History Retrieval",
        "Multi-bank Data Aggregation",
        "Verified Account Ownership",
        "Smart Spending & Budget Analysis",
        "Recognition of Recurring Payments",
        "Dynamic Expense Management",
        "Full PSD2 Regulatory Alignment",
        "Broadcast & Full Banking Network",
      ],
      imageUrl: coreservicesimg1.src,
      featuresHeading: "Account Information Services:",
      mediaRadius: "20px 20px 0 0",
    },
    {
      id: "secure-payment-initiation",
      title: "Secure Payment Initiation",
      subtitle: "Initiate payments instantly. No cards. No delays.",
      description: `Empower users and businesses to initiate secure, real-time payments directly from their bank accounts. Payment Initiation Services (PIS) eliminate the friction of traditional card processing, offering a faster and more cost-effective alternative. Users can authorise one-time or recurring payments with complete transparency and control. With built-in Strong Customer Authentication (SCA), transactions remain fully compliant and protected.  PIS is ideal for a range of use cases, from ecommerce checkouts and utility bill payments to peer-to-peer transfers and financial service disbursements. Refunds are streamlined, and payment statuses are easily tracked for operational ease. The user journey is smooth, with customisable consent screens and intuitive interfaces. By leveraging open banking rails, PIS delivers trusted, frictionless, and scalable payment experiences.`,
      features: [
        "Instant Bank Transfers",
        "One-Off & Recurring Payments",
        "Strong Customer Authentication (SCA)",
        "Payment Status Tracking",
        "Refund Handling",
        "Customizable Consent Flows",
        "Compliance with PSD2 Regulations",
        "Integrated Payment UX/UI",
        "Developer-Friendly APIs",
      ],
      imageUrl: coreservicesimg2.src,
      featuresHeading: "Payment Initiation Features:",
      mediaRadius: "20px 20px 0 0",
    },
    {
      id: "bank-connectivity-data-aggregation",
      title: "Bank Connectivity & Data Aggregation",
      subtitle: "Connect once. Scale everywhere. Built for open finance.",
      description: `Empower your product with direct, secure access to thousands of banks through robust and high-speed API integrations. Our platform ensures seamless connectivity with both traditional and challenger banks across the UK and EU, supporting everything from personal finance tools to payment and lending applications. With real-time, PSD2-compliant data access, you benefit from bank-grade encryption and stringent security protocols. We simplify integration with a unified API that normalises varied banking data into a consistent format. Uptime monitoring and smart routing ensure stability and performance, even during high-demand periods. Consent flows are optimised for user experience, while fallback mechanisms ensure uninterrupted access. Designed for developers and businesses alike, our bank connectivity layer eliminates complexity so you can innovate with confidence. Scale effortlessly as we handle the infrastructure behind the scenes.`,
      features: [
        "PSD2-Compliant API Access",
        "Coverage Across Major UK & EU Banks",
        "Uptime Monitoring & Connection Health",
        "Multi-Bank Aggregation Capabilities",
        "Unified Data Normalisation Layer",
        "Developer-Friendly SDKs & Sandbox",
        "Smart Routing & Failover Support",
        "Instant Onboarding & Consent Handling",
      ],
      imageUrl: coreservicesimg3.src,
      featuresHeading: "Connectivity & Aggregation Services:",
      mediaRadius: "20px 20px 0 0",
    },
  ];

  return (
    <>
      <Box sx={{ bgcolor: "#ffffff" }}>
        <HeroCustomSection
          subtitle="Core Services"
          title="Core Services – Connect, Transact & Transform."
          description="Core Services form the foundation of your financial infrastructure, offering robust capabilities that ensure secure, scalable, and compliant operations. These services include Account Information Services (AIS) and Payment Initiation Services (PIS), enabling seamless bank data access and direct payments. Built for reliability, they connect with hundreds of banks through a single API, providing users with real-time account balances, transaction histories, and payment authorisation. This reduces friction and improves transparency across the customer journey. From onboarding to final transaction, Core Services support smooth integration, empowering businesses with the tools they need to operate smarter. Whether for fintechs, lenders, or marketplaces, these services are essential to driving innovation in open banking."
          textColor="#FFFFFF"
        />
        <SectionPanel sections={sections} />
      </Box>
    </>
  );
};

export default CoreServicesPage;
