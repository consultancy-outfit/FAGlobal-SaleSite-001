"use client";
import { Box } from "@mui/material";
import {
  complianceAcccessimg1,
  complianceAcccessimg2,
  complianceAcccessimg3,
} from "../../assets/images";
import SectionPanel from "../proudct-card/proudct-card";
import HeroCustomSection from "../hero/hero";

interface SectionData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageUrl?: string;
  featuresHeading?: string;
}

export const ComplianceacccessFeature = () => {
  const sections: SectionData[] = [
    {
      id: "fca-psd2-regulatory-alignment",
      title: "FCA & PSD2 Regulatory Alignment",
      subtitle:
        "Meet the highest standards of Open Banking and PSD2 compliance with confidence.",
      description: `We provide a regulatory-grade infrastructure that ensures your operations align with FCA and PSD2 requirements. From secure authentication to audit-compliant data consent, our tools reduce legal exposure while supporting innovation. Perfect for Account Information Service Providers (AISPs) and Payment Initiation Service Providers (PISPs), our services include built-in support for Strong Customer Authentication (SCA), audit logs, and customer data permission flows. We also offer pre-vetted templates and sandbox environments to speed up FCA registration and authorisation processes.`,
      features: [
        "Strong Customer Authentication (SCA) support",
        "Secure consent capture & audit trails",
        "FCA sandbox integration tools",
        "AISP/PISP enablement toolkit",
        "Token & scope management APIs",
        "GDPR-aligned data handling practices",
      ],
      imageUrl: complianceAcccessimg1.src,
      featuresHeading: "Key Regulatory Features:",
    },
    {
      id: "wide-market-coverage",
      title: "Wide Market Coverage",
      subtitle:
        "Access 98% of UK and EU banks with consistent, secure, and always-on connectivity.",
      description: `Our platform connects to a wide range of retail and commercial banks, credit unions, and fintech institutions using both Open Banking APIs and secure screen-scraping fallback methods. With high-performance uptime and support for dual-rail data access (API + HTML), your business can access near-complete coverage across multiple geographies. This allows you to deliver services to all customer types without locking out users from unsupported banks.`,
      features: [
        "Open Banking API connectivity",
        "Secure fallback scraping for non-API banks",
        "Real-time and scheduled bank data pulls",
        "Commercial and SME account access",
        "Consent dashboards and expiry alerts",
        "International bank and currency support",
      ],
      imageUrl: complianceAcccessimg2.src,
      featuresHeading: "Wide Market Coverage Features:",
    },
    {
      id: "freemium-access-for-startups",
      title: "Freemium Access for Startups",
      subtitle:
        "Open Banking for everyone: empowering innovation for all, big and small.",
      description: `We believe early-stage companies should be able to experiment and build without incurring heavy upfront costs. Our freemium tier gives startups access to core API features including limited monthly requests, standard bank coverage, and regulatory templates. You also get access to our developer hub, mock bank data for testing, and upgrade flexibility as you scale. This approach fosters compliance-by-design from day one without restricting agility.`,
      features: [
        "Free sandbox with mock bank accounts",
        "Starter API tier with usage limits",
        "Developer console and API keys",
        "Plug-and-play templates for compliance",
        "Community support & documentation access",
        "Discounted upgrade plans for accelerators/incubators",
      ],
      imageUrl: complianceAcccessimg3.src,
      featuresHeading: "Freemium Access Benefits:",
    },
  ];

  return (
    <>
      <Box sx={{ bgcolor: "#ffffff" }}>
        <HeroCustomSection
          subtitle="Compliance & Access"
          title="Trusted financial access 
with regulatory compliance"
          description="Our Compliance & Access service ensures that your business adheres to all major financial data regulations, such as PSD2, UK Open Banking standards, and FCA mandates. Whether you're a bank, lender, fintech startup, or data aggregator, we provide the right frameworks to securely access and use customer data with full consent. With built-in consent management tools, data access auditing, and regulatory sandbox support, we help you launch faster without worrying about breaches or misalignment. The platform supports tiered access, tokenised APIs, and multi-bank integrations with consistent uptime and security. Startups and regulated firms alike can benefit from easy, future-proof API access to financial institutions."
          textColor="#FFFFFF"
          buttonText=""
        />
        <SectionPanel sections={sections} />
      </Box>
    </>
  );
};

export default ComplianceacccessFeature;
