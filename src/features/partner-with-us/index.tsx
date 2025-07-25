"use client";
import { Box } from "@mui/material";
import { PartnerWithUs, WhyPartnerWithUs } from "./components";
import { ContactCard } from "@/components/cards/contact-card";
import { GradientHeadingBlock } from "@/components/gradient-heading-block/gradient-heading-block";
import { PROJECT_NAME } from "@/configs/env";

export const PartnerWithUsFeature = () => {
  return (
    <Box>
      <Box
        sx={{
          background: "#f9f9fd",
          marginTop: "-110px",
        }}
      >
        <GradientHeadingBlock
          headingStart="Partner"
          highlightText="With Us"
          subheading={`At ${PROJECT_NAME}, we believe strong partnerships drive progress. Join us in reshaping trust in the digital world. By collaborating with us, you’ll leverage advanced identity verification solutions designed to empower both businesses and individuals.`}
          containerSx={{
            minHeight: "440PX",
            paddingTop: "150px",
            paddingBottom: "50px",
            width: { xs: "85%", md: "60%" },
            textAlign: "center",
            margin: "0 auto",
          }}
        />

        <GradientHeadingBlock
          headingStart="Why Partner with"
          highlightText={PROJECT_NAME}
          containerSx={{
            paddingBottom: "90px",
          }}
        />
      </Box>

      <WhyPartnerWithUs />
      <PartnerWithUs />
      <Box
        sx={{
          width: { xs: "95%", lg: "90%" },
          margin: "0 auto",
          marginBottom: "30px",
        }}
      >
        <ContactCard
          heading="How to Get Started"
          description={`Starting a partnership with ${PROJECT_NAME} is easy. Simply reach out to our partnership team via the contact form below. We'll arrange a consultation to understand your needs and discuss how our solutions can align with your goals. Together, we'll craft a roadmap for a successful partnership that fosters growth, innovation, and trust.`}
          extraDescription={`Join us in transforming the digital landscape. Partner with ${PROJECT_NAME} today and unlock the power of trust in a connected world.`}
          btnText="Contact Us"
          btnLink="/contact-us"
        />
      </Box>
    </Box>
  );
};
