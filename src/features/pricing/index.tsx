"use client";

import { Box } from "@mui/material";
import { Faqs, FeatureList, PricingPlans } from "./components";
import { ContactCard } from "@/components/cards/contact-card";
import { GradientHeadingBlock } from "@/components/gradient-heading-block/gradient-heading-block";
import { DropPlainImage } from "../contact-us/assets/images";

export const PricingFeature = () => {
  return (
    <Box sx={{ marginTop: "-120px" }}>
      <Box
        component="img"
        src={DropPlainImage.src}
        alt="Right Decoration"
        sx={{
          position: "absolute",
          right: { lg: 100, md: 50, sm: 80, xs: 20 },
          top: { lg: 45, md: 40, sm: 50, xs: 40 },
          width: { md: 200, xs: 120 },
          height: { md: 220, xs: 120 },
        }}
      />
      <Box
        sx={{
          background: "#f9f9fd",
        }}
      >
        <GradientHeadingBlock
          headingStart="Choose a pricing plan best"
          highlightText="suited for you"
          containerSx={{
            minHeight: "525PX",
            paddingTop: "190px",
            width: { xs: "90%", md: "837px" },
            textAlign: "center",
            margin: "0 auto",
          }}
        />
      </Box>

      <Box
        sx={{
          width: { xs: "90%", md: "80%", xl: "73%" },
          margin: "0 auto",
          marginBottom: "80px",
          marginTop: "-62px",
        }}
      >
        <PricingPlans />
      </Box>
      <Box sx={{ bgcolor: "#f8f6ff" }}>
        <Box
          sx={{ width: { xs: "90%", md: "80%", xl: "70%" }, margin: "0 auto" }}
        >
          <FeatureList />
        </Box>
      </Box>
      <Box
        sx={{ width: { xs: "90%", md: "80%", xl: "70%" }, margin: "0 auto" }}
      >
        <Faqs />
      </Box>
      <Box
        sx={{
          width: { xs: "95%", lg: "90%" },
          margin: "0 auto",
          marginBottom: "30px",
        }}
      >
        <ContactCard />
      </Box>
    </Box>
  );
};
