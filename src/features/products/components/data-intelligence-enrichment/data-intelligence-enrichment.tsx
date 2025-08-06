"use client";
import { Box } from "@mui/material";
import {
  dataIntelligenceimg1,
  dataIntelligenceimg2,
  dataIntelligenceimg3,
} from "../../assets/images";
import HeroCustomSection from "../hero/hero";
import SectionPanel from "../proudct-card/proudct-card";

export const DataIntelligenceFeature = () => {
  const sections = [
    {
      id: "account-information",
      title: " Smart Transaction Categorisation",
      subtitle:
        "Understand financial behaviour by transforming transactions into meaningful categories.",
      description: `Our transaction categorisation engine uses advanced algorithms and merchant recognition to convert raw bank transactions into structured, easy-to-read spending and income labels. The service recognises patterns in user behaviour, classifies payments into hundreds of subcategories, and cleans merchant names with logos and metadata. It's ideal for banks, lenders, and finance apps that want to offer users real clarity into their financial lives. Businesses can create custom rules to fine-tune the categorisation according to region, user type, or vertical. The service supports recurring transaction identification and subscription tracking to highlight commitment-based spending.`,
      features: [
        "Auto-tagging of transactions into categories like Food, Utilities, Salary, etc.",
        "Duplicate removal and standardisation of merchant names",
        "Subscription detection and recurring payment tracking",
        "Merchant logos and geolocation metadata",
        "Industry-specific category customisation rules",
        "Full PSD2 Regulatory Alignment",
        "Multi-region and multi-language category mapping",
        "Real-time and batch categorisation options",
        "API-first architecture for smooth integration",
      ],
      imageUrl: dataIntelligenceimg1.src,
      featuresHeading: " Smart Transaction Categorisation-Related Services:",
    },
    {
      id: "secure-payment-initiation",
      title: "Income & Expense Insights",
      subtitle:
        "Turn transaction streams into powerful budgeting and financial planning tools.",
      description: `Income & Expense Insights go beyond categorisation to analyse how money flows in and out of user accounts. The service can identify primary salary deposits, government benefits, freelance income, and secondary earnings. On the expense side, it breaks down fixed obligations, variable costs, and discretionary spending, offering a clear picture of financial stability. Trends over time show whether users are improving or declining financially. These insights fuel alert systems, budgeting tools, and personalised financial coaching that help end-users make smarter decisions and avoid financial pitfalls. Businesses can segment users based on financial behaviour for better targeting and engagement.`,
      features: [
        "Detection of income streams (salary, benefits, freelance)",
        "Expense breakdown by fixed, variable, and flexible spending",
        "Trendline analytics by week, month, quarter",
        "Payment Status Tracking",
        "Insights into net savings or overspending",
        "Alerts for income dips or rising expenses",
        "Budget suggestions and savings triggers",
        "High-value or unusual transaction flags",
        "Exportable summaries for underwriting or financial advice",
      ],
      imageUrl: dataIntelligenceimg2.src,
      featuresHeading: "Income & Expense Insights-Related Services:",
    },
    {
      id: "bank-connectivity-data-aggregation",
      title: "Risk Scoring & Affordability Checks",
      subtitle:
        "Assess financial health and lending potential through real-time behavioural data.",
      description: `Our Risk Scoring & Affordability module evaluates a user’s ability to meet financial obligations using live bank data and behavioural analytics. It calculates disposable income, cash flow stability, and historical spending patterns to determine affordability in real-world terms. The risk scoring engine supports both rule-based and AI-driven models, enabling lenders, insurers, and property firms to make data-backed decisions beyond traditional credit scores. It helps identify high-risk customers, manage regulatory checks, and support fair lending frameworks. This service is fully FCA-compliant and designed to integrate easily into existing decisioning engines.`,
      features: [
        "Full audit trail for compliance and audit",
        "Overdraft usage frequency and cash flow gap analysis",
        "Monthly obligation pattern recognition",
        "Missed or delayed payment detection",
        "Predictive risk modelling based on spending volatility",
        "Custom scoring configurations for lenders or fintechs",
        "Real-time disposable income and affordability calculations",
        "Seamless integration with lending, BNPL, and credit workflows",
      ],
      imageUrl: dataIntelligenceimg3.src,
      featuresHeading: "Risk Scoring & Affordability Checks-Related Services:",
    },
  ];

  return (
    <>
      <Box sx={{ bgcolor: "#ffffff" }}>
        <HeroCustomSection
          subtitle="Data Intelligence & Enrichment"
          title="Smarter decisions from enriched data."
          description="Our Data Intelligence & Enrichment engine transforms raw transaction data into a meaningful, structured, and insightful resource. Whether you’re building a personal finance tool, a lending platform, or an accounting engine, these services help you offer customers clarity, prediction, and personalisation. Each feature can be tailored to your specific market needs, driving smarter workflows and more intuitive customer journeys."
          textColor="#FFFFFF"
        />
        <SectionPanel sections={sections} />
      </Box>
    </>
  );
};

export default DataIntelligenceFeature;
