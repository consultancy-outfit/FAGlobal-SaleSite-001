"use client";
import { Box } from "@mui/material";
import {
  Centspayimg1, // Corresponds to Digital Wallet Accounts
  Centspayimg2, // Corresponds to Card Solutions
  Centspayimg3, // Corresponds to Money Movement
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

export const CentspayFeature = () => {
  const sections: SectionData[] = [
    {
      id: "digital-wallet-accounts",
      title: "Digital Wallet Accounts",
      subtitle: "One Wallet. Multiple Lives. Tailored for You",
      description: `Centspay offers dynamic digital wallet accounts designed to empower individuals, businesses, and students with secure, flexible, and intuitive money management tools. The Personal Account supports spending, saving, gifting, and smart financial decisions in one place. Business Accounts come equipped with role-based access, payment tracking, and advanced analytics for efficient operations. The Student Account helps learners manage allowances, control spending, and build healthy financial habits under the watchful guidance of guardians. All accounts provide access to real-time notifications, spend history, digital vaults, and custom rules. Users can link their wallets to multiple funding sources, enjoy instant top-ups, and enable biometric access. Each wallet is secured by advanced encryption and regulatory compliance features.`,
      features: [
        "Personal Wallet Account",
        "Business Wallet Account",
        "Student Wallet Account with oversight features",
        "Secure fund transfers",
        "Gifting & budgeting tools",
        "Real-time balance monitoring",
        "Linked card management",
        "Expense breakdowns & reports",
      ],
      imageUrl: Centspayimg1.src,
      featuresHeading: "Digital Wallet Account Features:",
      mediaRadius: "20px 20px 0 0",
    },
    {
      id: "card-solutions",
      title: "Card Solutions",
      subtitle: "Spend Freely. Stay Secure. Choose Your Card",
      description: `Centspay offers both Physical and Virtual Cards tailored for daily use, online shopping, corporate spending, and global transactions. Physical cards are accepted worldwide, feature chip & PIN, and come with configurable usage rules like region locks and spending caps. Virtual cards are generated instantly and ideal for secure online use, trials, and subscriptions, preventing fraud and overcharges. Both card types can be paused, reissued, or topped up in real-time through the app. Integrated spending insights and card-specific analytics help track usage across categories. Business users can assign cards to team members with approval workflows and fund limitations. Parental controls for student accounts add safety layers.`,
      features: [
        "Physical Debit Cards (ATM & POS support)",
        "Virtual Cards (instant, online usage)",
        "Custom Spending Limits",
        "Freeze/Unfreeze card option",
        "Region/Currency Controls",
        "Card Assignment to Users",
        "Subscription Management",
        "Lost/Stolen Card Management",
      ],
      imageUrl: Centspayimg2.src,
      featuresHeading: "Card Solutions Features:",
      mediaRadius: "20px 20px 0 0",
    },
    {
      id: "money-movement",
      title: "Money Movement",
      subtitle: "Transfer Smarter. Move Faster. Globally.",
      description: `Centspay enables instant transfers, both domestic and international, through a secure and user-friendly interface. Users can send and receive funds across wallets, bank accounts, and platforms with real-time notifications and low conversion costs. Recurring Payments allow users to automate bill payments, subscriptions, and regular transfers. Centspay also supports multi-currency wallets, enabling users to hold and convert GBP, EUR, USD, and more—making it ideal for travellers, remote workers, and international businesses. The platform uses bank-grade security and compliance protocols to protect each transaction. Users can manage all transfers from a centralised dashboard, with scheduled payment management, transaction tracking, and customizable alerts.`,
      features: [
        "Instant Send & Receive (local & global)",
        "Scheduled Transfers",
        "Recurring Payments & Auto-Pay",
        "Multi-Currency Wallets (GBP, USD, EUR, etc.)",
        "FX Conversion Tools",
        "Vendor Payouts",
        "Peer-to-Peer Transfers",
        "Transfer Notifications & Logs",
      ],
      imageUrl: Centspayimg3.src,
      featuresHeading: "Money Movement Features:",
      mediaRadius: "20px 20px 0 0",
    },
  ];

  return (
    <>
      <Box sx={{ bgcolor: "#ffffff" }}>
        <HeroCustomSection
          subtitle="Centspay"
          title="Smarter Spending, Instant Transfers. Global Access."
          description="Centspay is a next-generation digital wallet designed to simplify money management for individuals, students, and businesses. It enables fast, secure transactions with real-time notifications and smart tracking. Users can manage multiple wallets, send and receive funds, and control virtual or physical cards easily from one platform.With built-in budget tools and spend categorisation, users gain deeper insights into their financial habits. Businesses can streamline payouts, assign team cards, and reconcile expenses effortlessly. Students benefit from financial literacy tools, saving goals, and discounts.Centspay also supports multi-currency use, low-cost international transfers, and automated bill splitting. It's a powerful, flexible, and intelligent wallet built for the modern financial lifestyle."
          textColor="#FFFFFF"
        />
        <SectionPanel sections={sections} />
      </Box>
    </>
  );
};

export default CentspayFeature;
