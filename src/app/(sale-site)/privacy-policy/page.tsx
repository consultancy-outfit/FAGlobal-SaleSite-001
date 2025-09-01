"use client";
import { TermsImage2 } from "@/assets/images/features/home";
import { Box, Stack, Typography } from "@mui/material";

export default function PrivacyPolicy() {
  const infoWeCollect = [
    "Personal Information: Name, email address, phone number, company name, job title.",
    "Financial Data: Bank account information, transaction history (if applicable to our services).",
    "Technical Information: IP address, browser type, device details, and cookies.",
    "Usage Data: Pages visited, actions taken, and preferences on our site.",
  ];
  const howWeUseYourInfo = [
    "Provide and manage our products and services.",
    "Communicate with you regarding updates or support.",
    "Improve our website functionality and user experience",
    "Ensure legal and regulatory compliance.",
    "Market relevant offers or updates (only with your consent).",
  ];
  const dataProtection = [
    "Trusted third-party service providers (e.g., hosting, analytics, CRM).",
    "Regulators or legal authorities if required by law.",
    "Affiliates or subsidiaries under FA Global for internal operations.",
  ];
  const yourRights = [
    "Access or correct your personal data.",
    "Request deletion of your data.",
    "Withdraw consent for marketing.",
    "File a complaint with a data protection authority.",
  ];
  return (
    <Stack
      sx={{ color: "#03020C" }}
      alignItems="center"
      px={{ lg: 4, xs: 3 }}
      py={{ lg: 1, xs: 8 }}
    >
      <Stack sx={{ width: { lg: "80%", xs: "100%" } }} spacing={4}>
        <Box
          sx={{
            width: "100%",
            height: "258px",
            backgroundImage: `url(${TermsImage2.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Typography
            color="#000"
            fontFamily="Manrope"
            fontWeight={800}
            textAlign="center"
            mt={12}
            sx={{
              fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem", lg: "4.25rem" },
              lineHeight: 1.2,
            }}
          >
            Privacy Policy
          </Typography>
        </Box>
        <Stack spacing={1}>
          <Typography
            color="#000"
            fontFamily="Manrope"
            fontWeight={600}
            textAlign="left"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.8rem",
                md: "2.3rem",
                lg: "2.5rem",
              },
            }}
          >
            Introduction
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
            }}
          >
            At FA Global, your privacy is important to us. This Privacy Policy
            outlines how we collect, use, store, and protect your personal
            information when you visit our website or use our services.
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#000"
            fontFamily="Manrope"
            fontWeight={600}
            textAlign="left"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.8rem",
                md: "2.3rem",
                lg: "1.5rem",
              },
            }}
          >
            Information We Collect
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
            }}
          >
            We may collect the following types of information:
          </Typography>
          {infoWeCollect?.map((items) => (
            // eslint-disable-next-line react/jsx-key
            <Typography
              color="#646464"
              fontFamily="Manrope"
              textAlign="left"
              component={"li"}
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
              }}
            >
              {items}
            </Typography>
          ))}
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#000"
            fontFamily="Manrope"
            fontWeight={600}
            textAlign="left"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.8rem",
                md: "2.3rem",
                lg: "1.5rem",
              },
            }}
          >
            How We Use Your Information
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
            }}
          >
            We use your information to:
          </Typography>
          {howWeUseYourInfo?.map((items) => (
            // eslint-disable-next-line react/jsx-key
            <Typography
              color="#646464"
              fontFamily="Manrope"
              textAlign="left"
              component={"li"}
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
              }}
            >
              {items}
            </Typography>
          ))}
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#000"
            fontFamily="Manrope"
            fontWeight={600}
            textAlign="left"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.8rem",
                md: "2.3rem",
                lg: "1.5rem",
              },
            }}
          >
            Data Protection & Security{" "}
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
            }}
          >
            We do not sell your personal data. However, we may share it
            with:{" "}
          </Typography>
          {dataProtection?.map((items) => (
            // eslint-disable-next-line react/jsx-key
            <Typography
              color="#646464"
              fontFamily="Manrope"
              textAlign="left"
              component={"li"}
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
              }}
            >
              {items}
            </Typography>
          ))}
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#000"
            fontFamily="Manrope"
            fontWeight={600}
            textAlign="left"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.8rem",
                md: "2.3rem",
                lg: "1.5rem",
              },
            }}
          >
            Your Rights
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
            }}
          >
            Depending on your location, you may have the right to:
          </Typography>
          {yourRights?.map((items) => (
            // eslint-disable-next-line react/jsx-key
            <Typography
              color="#646464"
              fontFamily="Manrope"
              textAlign="left"
              component={"li"}
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
              }}
            >
              {items}
            </Typography>
          ))}
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#000"
            fontFamily="Manrope"
            fontWeight={800}
            textAlign="left"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.8rem",
                md: "2.3rem",
                lg: "1.5rem",
              },
            }}
          >
            Third-Party Services{" "}
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
            }}
          >
            Our site may include links to third-party sites. We are not
            responsible for their privacy practices and encourage you to review
            their policies.
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#000"
            fontFamily="Manrope"
            fontWeight={600}
            textAlign="left"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.8rem",
                md: "2.3rem",
                lg: "1.5rem",
              },
            }}
          >
            Data Retention{" "}
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
            }}
          >
            We retain your data only as long as necessary to fulfil the purposes
            stated or as required by law.
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#000"
            fontFamily="Manrope"
            fontWeight={600}
            textAlign="left"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.8rem",
                md: "2.3rem",
                lg: "1.5rem",
              },
            }}
          >
            Policy Updates{" "}
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
            }}
          >
            We may update this Privacy Policy periodically. You’ll be notified
            of significant changes via email or a prominent site notice.
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography
            color="#000"
            fontFamily="Manrope"
            fontWeight={600}
            textAlign="left"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.8rem",
                md: "2.3rem",
                lg: "1.5rem",
              },
            }}
          >
            Contact Us{" "}
          </Typography>
          <Typography
            color="#646464"
            fontFamily="Manrope"
            textAlign="left"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
            }}
          >
            If you have any questions or concerns regarding your privacy, please
            contact us at business@faglobal.io
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
