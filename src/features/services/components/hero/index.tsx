import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { HeroContainer } from "@/components/containers/hero-container";
import { DecoratedImageText } from "@/components/data-displays/decorated-image-text";
import { HeadingText } from "@/components/text/heading-text";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { PROJECT_NAME } from "@/configs/env";
import { pxToRem } from "@/utils/styles";
import { Box } from "@mui/material";

export const Hero = () => {
  return (
    <HeroContainer>
      <SlideUpInView>
        <HeadingText
          variant="h3"
          fontWeight="fontWeightSemiBold"
          letterSpacing={pxToRem(-2)}
        >
          Comprehensive Identity Verification for a
          <DecoratedImageText letterSpacing={pxToRem(-2)}>
            {" "}
            Secure Digital{" "}
          </DecoratedImageText>
          World
        </HeadingText>
        <Box sx={{ marginY: 2 }}>
          <SubHeadingText variant="subtitle1" fontWeight="fontWeightNormal">
            {`  ${PROJECT_NAME} provides advanced, AI-powered verification solutions to help businesses prevent fraud, ensure compliance, and streamline onboarding. From Digital ID Verification to AML Compliance, our services are designed for speed, accuracy, and reliability. Whether you're hiring, verifying customers, or conducting business due diligence, we offer the tools you need to build trust and security effortlessly`}
          </SubHeadingText>
        </Box>
      </SlideUpInView>
    </HeroContainer>
  );
};
