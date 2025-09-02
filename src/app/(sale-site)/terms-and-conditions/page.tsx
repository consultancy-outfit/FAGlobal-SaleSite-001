"use client";
import { TermsImage2 } from "@/assets/images/features/home";
import { Box, Stack, Typography } from "@mui/material";

export default function TermsAndConditionsPolicy() {
  const accountRegistration = [
    "Providing accurate, current information.",
    "Maintaining the confidentiality of your account credentials.",
    "Notifying us immediately of any unauthorized use.",
  ];
  const useOfServices = [
    "Violate any intellectual property or proprietary rights.",
    "Distribute harmful or malicious software.",
    "Attempt to gain unauthorised access to our systems.",
  ];
  const disclaimers = [
    "Continuous or secure access to our services.",
    "That the information is accurate, complete, or up to date.",
    "That our services will be free from viruses or other harmful components.",
  ];
  return (
    <Stack
      // sx={{ color: "#03020C" }}
      alignItems="center"
      px={{ lg: 4, xs: 3 }}
      py={{ lg: 1, xs: 1 }}
    >
      <Stack sx={{ width: { lg: "80%", xs: "100%" } }}>
        <Box
          sx={{
            width: "100%",
            height: { xs: "150px", sm: "200px", md: "240px", lg: "242px" },
            backgroundImage: `url(${TermsImage2.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Typography
            color="rgba(16, 15, 17, 1)"
            fontFamily="Inter Tight"
            fontWeight={600}
            textAlign="center"
            sx={{
              fontSize: {
                xs: "2.5rem",
                sm: "3rem",
                md: "4.25rem",
                lg: "4.25rem",
              },
              mt: {
                xs: 5,
                sm: 10,
                md: 8,
                lg: 9,
              },
              lineHeight: 1.2,
            }}
          >
            Terms & Conditions
          </Typography>
        </Box>
        <Stack spacing={1} mb={2}>
          <Typography
            color="rgba(16, 15, 17, 1)"
            fontFamily="Inter Tight"
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
            Welcome to FA Global{" "}
          </Typography>
          <Typography
            color="rgba(87, 87, 87, 1)"
            fontFamily="Inter Tight"
            textAlign="left"
            align="justify"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
            }}
          >
            {` Welcome to FA Global. These Terms and Conditions ("Terms") govern your access to and use of our website, services, and digital platforms operated by FA Global ("we," "us," or "our"). By using our services, you agree to be bound by these Terms.`}
          </Typography>
        </Stack>
        <Stack spacing={1} mb={2}>
          <Typography
            color="rgba(16, 15, 17, 1)"
            fontFamily="Inter Tight"
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
            Acceptance of Terms
          </Typography>
          <Typography
            color="rgba(87, 87, 87, 1)"
            fontFamily="Inter Tight"
            textAlign="left"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
            }}
          >
            By accessing or using our website or services, you confirm that you
            have read, understood, and agree to these Terms. If you do not
            agree, you must not use our services.
          </Typography>
        </Stack>
        <Stack spacing={1} mb={2}>
          <Typography
            color="rgba(16, 15, 17, 1)"
            fontFamily="Inter Tight"
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
            Account Registration
          </Typography>
          <Typography
            color="rgba(87, 87, 87, 1)"
            fontFamily="Inter Tight"
            textAlign="left"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
            }}
          >
            To access certain features, you may be required to create an
            account. You are responsible for:{" "}
          </Typography>
          {accountRegistration?.map((items) => (
            <Typography
              color="rgba(87, 87, 87, 1)"
              fontFamily="Inter Tight"
              textAlign="left"
              component={"li"}
              key={items}
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
              }}
            >
              {items}
            </Typography>
          ))}
        </Stack>
        <Stack spacing={1} mb={2}>
          <Typography
            color="rgba(16, 15, 17, 1)"
            fontFamily="Inter Tight"
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
            Use of Services{" "}
          </Typography>
          <Typography
            color="rgba(87, 87, 87, 1)"
            fontFamily="Inter Tight"
            textAlign="left"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
            }}
          >
            You agree to use our services only for lawful purposes and in
            compliance with all applicable laws. You must not:
          </Typography>
          {useOfServices?.map((items) => (
            <Typography
              color="rgba(87, 87, 87, 1)"
              fontFamily="Inter Tight"
              textAlign="left"
              component={"li"}
              key={items}
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
              }}
            >
              {items}
            </Typography>
          ))}
        </Stack>
        <Stack spacing={1} mb={2}>
          <Typography
            color="rgba(16, 15, 17, 1)"
            fontFamily="Inter Tight"
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
            Intellectual Property{" "}
          </Typography>
          <Typography
            color="rgba(87, 87, 87, 1)"
            fontFamily="Inter Tight"
            textAlign="left"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
            }}
          >
            All content on our site and services—including text, graphics,
            logos, software, and trademarks—is the property of FA Global or its
            licensors and is protected by intellectual property laws. You may
            not copy, distribute, or use it without prior written permission.
          </Typography>
        </Stack>
        <Stack spacing={1} mb={2}>
          <Typography
            color="rgba(16, 15, 17, 1)"
            fontFamily="Inter Tight"
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
            Privacy
          </Typography>
          <Typography
            color="rgba(87, 87, 87, 1)"
            fontFamily="Inter Tight"
            textAlign="left"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
            }}
          >
            Your use of our services is also governed by our Privacy Policy,
            which explains how we collect and use your information.
          </Typography>
        </Stack>

        <Stack spacing={1} mb={2}>
          <Typography
            color="rgba(16, 15, 17, 1)"
            fontFamily="Inter Tight"
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
            Disclaimers{" "}
          </Typography>
          <Typography
            color="rgba(87, 87, 87, 1)"
            fontFamily="Inter Tight"
            textAlign="left"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
            }}
          >
            Our services are provided “as is” and “as available” without
            warranties of any kind. We do not guarantee:
          </Typography>
          {disclaimers?.map((items) => (
            <Typography
              color="rgba(87, 87, 87, 1)"
              fontFamily="Inter Tight"
              textAlign="left"
              component={"li"}
              key={items}
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
              }}
            >
              {items}
            </Typography>
          ))}
        </Stack>
        <Stack spacing={1} mb={2}>
          <Typography
            color="rgba(16, 15, 17, 1)"
            fontFamily="Inter Tight"
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
            Limitation of Liability
          </Typography>
          <Typography
            color="rgba(87, 87, 87, 1)"
            fontFamily="Inter Tight"
            textAlign="left"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
            }}
          >
            To the maximum extent permitted by law, FA Global shall not be
            liable for any indirect, incidental, special, or consequential
            damages, or loss of data, arising from your use of our services.
          </Typography>
        </Stack>
        <Stack spacing={1} mb={2}>
          <Typography
            color="rgba(16, 15, 17, 1)"
            fontFamily="Inter Tight"
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
            Modifications
          </Typography>
          <Typography
            color="rgba(87, 87, 87, 1)"
            fontFamily="Inter Tight"
            textAlign="left"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
            }}
          >
            We reserve the right to modify these Terms at any time. Changes will
            be posted on this page and become effective immediately. Continued
            use after changes indicates your acceptance.
          </Typography>
        </Stack>
        <Stack spacing={1} mb={2}>
          <Typography
            color="rgba(16, 15, 17, 1)"
            fontFamily="Inter Tight"
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
            Governing Law
          </Typography>
          <Typography
            color="rgba(87, 87, 87, 1)"
            fontFamily="Inter Tight"
            textAlign="left"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
            }}
          >
            These Terms are governed by the laws of United Kingdom, without
            regard to its conflict of law principles. Any disputes will be
            handled in the courts of UK.
          </Typography>
        </Stack>
        <Stack spacing={1} mb={2}>
          <Typography
            color="rgba(16, 15, 17, 1)"
            fontFamily="Inter Tight"
            fontWeight={600}
            textAlign="left"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.8rem",
                md: "2.3rem",
                lg: "1.5em",
              },
            }}
          >
            Contact Us{" "}
          </Typography>
          <Typography
            color="rgba(87, 87, 87, 1)"
            fontFamily="Inter Tight"
            textAlign="left"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "22px" },
            }}
          >
            If you have any questions or concerns about these Terms of Service,
            please reach out to us at business@faglobal.io
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
