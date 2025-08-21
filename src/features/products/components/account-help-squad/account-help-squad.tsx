"use client";
import { Box } from "@mui/material";
import { accountant1, accountant2, accountant3 } from "../../assets/images";
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
  // Or PaymentsFeature
  const sections: SectionData[] = [
    {
      id: "digital-wallet-accounts",
      title: "Accounts Payable",
      subtitle: "Pay Smarter, Not Harder",
      description: `Never miss a payment again with AHS’s intuitive accounts payable module. It transforms traditional bill handling into a streamlined, digital workflow. Businesses can upload and categorise bills with just a few clicks, setting automated schedules and approvals based on internal policies. From vendor onboarding to transaction reconciliation, the module handles it all in one place. Users get a consolidated dashboard showing pending bills, due dates, and payment statuses in real time. Vendor performance can be tracked to negotiate better payment terms. Approval workflows ensure financial discipline with tiered review and authorisation mechanisms. Linked bank accounts allow direct payments, reducing errors and fraud. Notifications alert you to upcoming dues or irregularities. Historical records and audit logs ensure compliance and transparency. This system suits both small and large organisations, reducing processing costs and human error. With AHS, ensure every penny paid is accounted for smartly.`,
      features: [
        "Dashboard with bill status and alerts",
        "Bill Upload & Categorisation Tools",
        "Secure Bank Integrations for Payments",
        "Vendor Management & Tracking",
        "Custom Approval Workflows",
        "Payment Scheduling & Reminders",
        "Audit Trail & Transaction History",
        "Reports on Payables Ageing & Vendor Efficiency",
      ],
      imageUrl: accountant1.src, //
      featuresHeading: "Digital Wallet Account Features:",
      mediaRadius: "20px 20px 0 0",
    },
    {
      id: "card-solutions",
      title: "Accounts Receivable",
      subtitle: "Get Paid Faster, Stay Ahead",
      description: `Managing customer invoices and payments shouldn’t be a hassle. AHS empowers businesses to optimise their cash inflow by automating the entire receivables process—from invoice generation to payment tracking. With a powerful dashboard offering real-time insights into ageing invoices and balances, businesses can take proactive steps to follow up. Client management features centralise contact and history data, enhancing relationship building. Automated reminders and confirmations help reduce human follow-up time, improving collection rates. Custom reports provide deep insights into Days Sales Outstanding (DSO), overdue trends, and client-wise payment behaviour. The platform’s scalability means it suits both startups and growing enterprises alike. Multiple users can collaborate securely via permissions-based access. Businesses can send professional invoices instantly and accept payments through integrated gateways. Plus, AHS tracks collection performance across teams. Reduce write-offs and improve your liquidity with structured collections.`,
      features: [
        "Dashboard with real-time receivable metrics",
        "Invoice Management (create, send, track)",
        "Client Management & History Tracking",
        "Payment Reminders & Confirmations",
        "Reports & Analytics (DSO, ageing, projections)",
        "Custom Alerts for overdue or partial payments",
        "Secure Payment Integrations",
        "Performance Tracking & Audit Trail",
      ],
      imageUrl: accountant2.src,
      featuresHeading: "Card Solutions Features:",
      mediaRadius: "20px 20px 0 0",
    },
    {
      id: "money-movement",
      title: "Cash Flow Management",
      subtitle: "Stay in Control of Your Finances",
      description: `Cash flow is the lifeblood of any business, and AHS makes sure you’re always aware of yours. This tool provides a clear view of current liquidity, upcoming obligations, and future projections based on trends and transaction behaviour. Sync bank accounts to auto-import data or upload transactions manually with pre-built templates. Use flexible categorisation to track specific revenue sources and expense types. Dashboards show daily, weekly, and monthly summaries to help you make informed decisions. Predictive analytics identify periods of surplus or deficit, allowing timely interventions. The system flags anomalies or high-risk trends automatically. Businesses can also run simulations by adjusting income or expense forecasts. It supports planning for loans, investments, or procurement confidently. Built-in reports cater to CFOs, accountants, and business owners alike. Maintain operational stability by managing seasonal cash variations or emergency fund requirements.`,
      features: [
        "Live Cash Flow Dashboard",
        "Transaction Syncing from Bank Accounts",
        "Excel Import with Error Validation",
        "Custom Categorisation Options",
        "Predictive Cash Flow Forecasting",
        "Scenario Planning & Simulations",
        "Alerts for Low Balances or Gaps",
        "Reporting Tools for Trends & Liquidity Health",
      ],
      imageUrl: accountant3.src,
      featuresHeading: "Money Movement Features:",
      mediaRadius: "20px 20px 0 0",
    },
  ];

  return (
    <>
      <Box sx={{ bgcolor: "#ffffff" }}>
        <HeroCustomSection
          subtitle="Accountant Help Squad"
          title="Transform raw data into 
powerful financial insights."
          description="Accountant Help Squad (AHS) is your dedicated back-office finance partner, combining automation with professional support to simplify financial operations. Designed for SMEs, startups, and growing businesses, AHS ensures timely and compliant bookkeeping, smooth reconciliation, and proactive financial insights. Our services are modular, allowing you to pick what suits your current operations—be it managing supplier payments, collecting dues, tracking cashflow, or full-spectrum accounting. By integrating with your existing ERP or banking system, AHS reduces human error, improves reporting quality, and frees your team to focus on growth. All services come with expert oversight, making it a powerful tool for strategic financial control."
          textColor="#FFFFFF"
        />
        <SectionPanel sections={sections} />
      </Box>
    </>
  );
};

export default CentspayFeature;
