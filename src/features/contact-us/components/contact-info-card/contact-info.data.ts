import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  XIcon,
  YoutubeIcon,
} from "@/assets/icons/common";
import { SOCIAL_ROUTES } from "@/constants/routes";

export const contactInfoData = [
  "Don’t  lose on your customer acquisition costs and convert more real customers",
  "Make identity verification seamless with our simple integration",
  "Stand up to fraud and comply with regulations",
];
export const contactSocialData = [
  { name: "X", path: SOCIAL_ROUTES?.TWITTER, icon: XIcon },
  { name: "Instagram", path: SOCIAL_ROUTES?.INSTAGRAM, icon: InstagramIcon },
  { name: "Facebook", path: SOCIAL_ROUTES?.FACEBOOK, icon: FacebookIcon },
  { name: "Tiktok", path: SOCIAL_ROUTES?.TIKTOK, icon: TikTokIcon },
  { name: "Youtube", path: SOCIAL_ROUTES?.YOUTUBE, icon: YoutubeIcon },
  { name: "LinkedIn", path: SOCIAL_ROUTES?.LINKEDIN, icon: LinkedInIcon },
];
