"use client";
import {
  Box,
  Container,
  Link,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import {
  footerLinkData,
  footerSocialData,
  footerTermsData,
} from "./footer.data";
import NextLink from "next/link";
import {
  COMPANY_CRN,
  COMPANY_EMAIL_ADDRESS,
  COMPANY_LOCATION_ADDRESS,
  PROJECT_NAME,
} from "@/configs/env";
import { FooterBgImage } from "@/assets/images/layout";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { ArrowOutward } from "@mui/icons-material";
import { LogoAvatar } from "@/components/avatars/logo-avatar";

export const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        pt: { md: 8, sm: 18, xs: "none" },
        backgroundImage: { sm: `url(${FooterBgImage.src})`, xs: null },
        bgcolor: { sm: "unset", xs: theme?.palette?.primary?.main },
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="xl" sx={{ py: 4, mt: 14 }}>
        <ContainerGridLayout spacing={2}>
          <ItemGridLayout xs={12} md={3.5}>
            <Box>
              <LogoAvatar link="javascript:void(0)" height={60} width={229} />
            </Box>
            <Typography
              variant="body1"
              color={theme?.palette?.common?.white}
              mt={1}
              maxWidth={370}
            >
              {`${PROJECT_NAME}’s AI-powered verification prevents fraud, ensures KYC compliance, and drives fast customer conversions—leave identity verification to our experts and focus on what you do best.`}
            </Typography>
            <Box
              mt={{ md: 4, xs: 2 }}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: 300,
                gap: 1,
              }}
            >
              {footerSocialData?.map((social) => (
                <IconButton
                  key={social?.name}
                  href={social?.path}
                  target="_blank"
                  sx={{
                    bgcolor: `rgba(255, 255, 255, 0.2)`,
                    p: 1.5,
                    width: 50,
                    height: 50,
                  }}
                >
                  <social.icon />
                </IconButton>
              ))}
            </Box>
          </ItemGridLayout>

          {footerLinkData?.map((item) => (
            <ItemGridLayout xs={6} md={2.7} key={item?.title}>
              <Typography
                variant="subtitle2"
                fontWeight="fontWeightBold"
                gutterBottom
                color={theme?.palette?.common?.white}
                mb={2}
              >
                {item?.title}
              </Typography>
              {item?.links?.map((link) => (
                <Link
                  key={link?.name}
                  href={link?.path}
                  underline="none"
                  color={theme?.palette?.common?.white}
                  display="block"
                  py={0.5}
                  component={NextLink}
                  fontSize={18}
                  fontWeight="fontWeightNormal"
                  width="fit-content"
                >
                  {link?.name}{" "}
                  {link?.name === "View All" && (
                    <ArrowOutward fontSize="small" sx={{ mb: -0.4 }} />
                  )}
                </Link>
              ))}
            </ItemGridLayout>
          ))}
          <ItemGridLayout xs={12} md={3.1}>
            <Typography
              variant="subtitle2"
              fontWeight="fontWeightBold"
              gutterBottom
              color={theme?.palette?.common?.white}
              mb={2}
            >
              Contact Us
            </Typography>
            <SubHeadingText
              variant="subtitle2"
              fontWeight="fontWeightBold"
              color={theme?.palette?.common?.white}
            >
              Location
            </SubHeadingText>
            <SubHeadingText
              variant="subtitle2"
              fontWeight="fontWeightNormal"
              color={theme?.palette?.common?.white}
            >
              {COMPANY_LOCATION_ADDRESS}, CRN ({COMPANY_CRN})
            </SubHeadingText>
            <SubHeadingText
              variant="subtitle2"
              fontWeight="fontWeightBold"
              color={theme?.palette?.common?.white}
              marginTop={2}
            >
              Email
            </SubHeadingText>
            <SubHeadingText
              variant="subtitle2"
              fontWeight="fontWeightNormal"
              color={theme?.palette?.common?.white}
            >
              {COMPANY_EMAIL_ADDRESS}
            </SubHeadingText>
          </ItemGridLayout>
        </ContainerGridLayout>
      </Container>

      <Box bgcolor={theme?.palette?.primary?.dark} py={3}>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: { lg: "space-between", xs: "center" },
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            variant="body1"
            color={theme?.palette?.common?.white}
            textAlign="center"
          >
            Copyrights © 2025 All Rights Reserved by {PROJECT_NAME}
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
            {footerTermsData?.map((item) => (
              <Typography
                key={item?.name}
                variant="body1"
                color={theme?.palette?.common?.white}
              >
                <NextLink
                  href={item?.path}
                  style={{
                    textDecoration: "none",
                    color: theme?.palette?.common?.white,
                    fontWeight: 400,
                  }}
                >
                  {item?.name}
                </NextLink>
              </Typography>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
