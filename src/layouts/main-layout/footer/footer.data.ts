import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  XIcon,
  YoutubeIcon,
} from "@/assets/icons/common";
import { APP_ROUTES, SOCIAL_ROUTES } from "@/constants/routes";
import { SERVICES_DETAILS_ID } from "@/features/services/constants";

export const footerLinkData = [
  {
    title: "Services",
    links: [
      {
        name: "Check My DBS",
        path: `${APP_ROUTES?.SERVICES_DETAIL}?id=${[SERVICES_DETAILS_ID?.CHECK_MY_DBS]}`,
      },
      {
        name: "Digital ID Verification",
        path: `${APP_ROUTES?.SERVICES_DETAIL}?id=${[SERVICES_DETAILS_ID?.DIGITAL_ID_VERIFICATION]}`,
      },
      {
        name: "Right to Work",
        path: `${APP_ROUTES?.SERVICES_DETAIL}?id=${[SERVICES_DETAILS_ID?.RIGHT_TO_WORK]}`,
      },
      {
        name: "Social Media Checks",
        path: `${APP_ROUTES?.SERVICES_DETAIL}?id=${[SERVICES_DETAILS_ID?.SOCIAL_MEDIA_CHECKS]}`,
      },
      {
        name: "Know your Customer",
        path: `${APP_ROUTES?.SERVICES_DETAIL}?id=${[SERVICES_DETAILS_ID?.KNOW_YOUR_CUSTOMER]}`,
      },
      {
        name: "Identity Investigation",
        path: `${APP_ROUTES?.SERVICES_DETAIL}?id=${[SERVICES_DETAILS_ID?.IDENTITY_INVESTIGATION]}`,
      },
      {
        name: "Know your Business",
        path: `${APP_ROUTES?.SERVICES_DETAIL}?id=${[SERVICES_DETAILS_ID?.KNOW_YOUR_BUSINESS]}`,
      },
      { name: "View All", path: APP_ROUTES?.SERVICES },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "Home", path: APP_ROUTES?.HOME },
      { name: "About Us", path: APP_ROUTES?.ABOUT_US },
      { name: "Services", path: APP_ROUTES?.SERVICES },
      { name: "Careers", path: APP_ROUTES?.CAREERS },
      { name: "Pricing", path: APP_ROUTES?.PRICING },
      { name: "Partner with Us", path: APP_ROUTES?.PARTNER_WITH_US },
      { name: "Contact Us", path: APP_ROUTES?.CONTACT_US },
    ],
  },
];

export const footerTermsData = [
  { name: "Privacy Policy", path: APP_ROUTES?.PRIVACY_POLICY },
  { name: "Cookies Policy", path: APP_ROUTES?.COOKIE_POLICY },
  { name: "Data Protection Policy", path: APP_ROUTES?.DATA_PROTECTION_POLICY },
  { name: "Terms & Conditions", path: APP_ROUTES?.TERM_AND_CONDITION },
  {
    name: "Security And Compliance Policy",
    path: APP_ROUTES?.SECURITY_AND_COMPLIANCE_POLICY,
  },
];

export const footerSocialData = [
  { name: "X", path: SOCIAL_ROUTES?.TWITTER, icon: XIcon },
  { name: "Instagram", path: SOCIAL_ROUTES?.INSTAGRAM, icon: InstagramIcon },
  { name: "Facebook", path: SOCIAL_ROUTES?.FACEBOOK, icon: FacebookIcon },
  { name: "Tiktok", path: SOCIAL_ROUTES?.TIKTOK, icon: TikTokIcon },
  { name: "Youtube", path: SOCIAL_ROUTES?.YOUTUBE, icon: YoutubeIcon },
  { name: "LinkedIn", path: SOCIAL_ROUTES?.LINKEDIN, icon: LinkedInIcon },
];
