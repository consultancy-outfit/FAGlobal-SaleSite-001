import { APP_ROUTES } from "@/constants/routes";
import React from "react";

import {
  AccountInformationIcon,
  PaymentInitiationIcon,
  BankConnectivityIcon,
  DataExplorersIcon,
  DataInsightsIcon,
  DebitCorpIcon,
  IdentityVerificationIcon,
  EnterpriseConfirmationIcon,
  FraudConfirmationIcon,
  KycAmlRegulatorsIcon,
  WideNormalCoverageIcon,
  FinancialInclusionIcon,
  DigitalWalletsIcon,
  DebitNotificationsIcon,
  VirtualMeasureIcon,
  AccountExpertsIcon,
} from "@/assets/icons/common";

type IconComponentType = React.FC<any>;

export interface NavLinkItem {
  title: string;
  path: string;
  icon?: string | IconComponentType;
  children?: NavLinkItem[];
}

export const navLinksData: NavLinkItem[] = [
  {
    title: "Home",
    path: APP_ROUTES.HOME,
  },
  {
    title: "About Us",
    path: APP_ROUTES.ABOUT_US,
  },
  {
    title: "Products",
    path: "", // Changed to empty string to disable navigation
    children: [
      {
        title: "Core Services",
        path: APP_ROUTES.PRODUCT_1,
        children: [
          {
            title: "Account Information",
            path: APP_ROUTES.PRODUCT_1,
            icon: AccountInformationIcon,
          },
          {
            title: "Payment Initiation",
            path: APP_ROUTES.PRODUCT_1,
            icon: PaymentInitiationIcon,
          },
          {
            title: "Bank Connectivity & Data Aggregation",
            path: APP_ROUTES.PRODUCT_1,
            icon: BankConnectivityIcon,
          },
        ],
      },
      {
        title: "Data Intelligence & Enrichment",
        path: APP_ROUTES.PRODUCT_2,
        children: [
          {
            title: "Transaction Categorization",
            path: APP_ROUTES.PRODUCT_2,
            icon: DataExplorersIcon,
          },
          {
            title: "Income & Expense Insights",
            path: APP_ROUTES.PRODUCT_2,
            icon: DataInsightsIcon,
          },
          {
            title: "Risk Scoring & Affordability Checks",
            path: APP_ROUTES.PRODUCT_2,
            icon: DebitCorpIcon,
          },
        ],
      },
      {
        title: "Identity & KYC",
        path: APP_ROUTES.PRODUCT_3,
        children: [
          {
            title: "Bank-Based Identity Verification",
            path: APP_ROUTES.PRODUCT_3,
            icon: IdentityVerificationIcon,
          },
          {
            title: "Account Ownership Confirmation",
            path: APP_ROUTES.PRODUCT_3,
            icon: EnterpriseConfirmationIcon,
          },
          {
            title: "Consent Flow Customization",
            path: APP_ROUTES.PRODUCT_3,
            icon: FraudConfirmationIcon,
          },
        ],
      },
      {
        title: "Compliance & Access",
        path: APP_ROUTES.PRODUCT_4,
        children: [
          {
            title: "FCA & PSD2 Regulatory Alignment",
            path: APP_ROUTES.PRODUCT_4,
            icon: KycAmlRegulatorsIcon,
          },
          {
            title: "Wide Market Coverage",
            path: APP_ROUTES.PRODUCT_4,
            icon: WideNormalCoverageIcon,
          },
          {
            title: "Freemium Access for Startups",
            path: APP_ROUTES.PRODUCT_4,
            icon: FinancialInclusionIcon,
          },
        ],
      },
      {
        title: "Centspay",
        path: APP_ROUTES.PRODUCT_5,
        children: [
          {
            title: "Digital Wallet Accounts",
            path: APP_ROUTES.PRODUCT_5,
            icon: DigitalWalletsIcon,
          },
          {
            title: "Card Solutions",
            path: APP_ROUTES.PRODUCT_5,
            icon: DebitNotificationsIcon,
          },
          {
            title: "Money Movement",
            path: APP_ROUTES.PRODUCT_5,
            icon: VirtualMeasureIcon,
          },
        ],
      },
      {
        title: "Accountant Help Squad",
        path: APP_ROUTES.PRODUCT_6,
        children: [
          {
            title: "Accounts Payable",
            path: APP_ROUTES.PRODUCT_6,
            icon: AccountExpertsIcon,
          },
          {
            title: "Account Receivable",
            path: APP_ROUTES.PRODUCT_6,
            icon: AccountExpertsIcon,
          },
          {
            title: "Account Cashflow",
            path: APP_ROUTES.PRODUCT_6,
            icon: AccountExpertsIcon,
          },
        ],
      },
      {
        title: "View All",
        path: APP_ROUTES.PRODUCT_7,
      },
    ],
  },
  {
    title: "Use Cases",
    path: APP_ROUTES.PRICING,
  },
  // {
  //   title: "Developers",
  //   path: "",
  //   children: [
  //     {
  //       title: "Documentations",
  //       path: APP_ROUTES.Comming_Soon,
  //     },
  //     {
  //       title: "API References",
  //       path: APP_ROUTES.Comming_Soon,
  //     },
  //     {
  //       title: "Product Demos",
  //       path: APP_ROUTES.Comming_Soon,
  //     },
  //   ],
  // },
  // {
  //   title: "Careers",
  //   path: APP_ROUTES.CAREERS,
  // },
  {
    title: "Contact Us",
    path: APP_ROUTES.CONTACT_US,
  },
];
