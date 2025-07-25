import { HeroCard } from "@/components/cards/hero-card";
import { HeroImage } from "../../assets";
import { HeadingText } from "@/components/text/heading-text";
import { DecoratedText } from "@/components/data-displays/decorated-text";
import { pxToRem } from "@/utils/styles";
import { Box } from "@mui/material";

const Hero = () => {
  return (
    <Box px={4}>
      <HeroCard
        heading={
          <HeadingText
            variant="h1"
            fontWeight="fontWeightNormal"
            letterSpacing={pxToRem(-2)}
          >
            One verification platform to
            <DecoratedText
              variant="h1"
              letterSpacing={pxToRem(-2)}
              fontWeight="fontWeightNormal"
            >
              {" "}
              secure the{" "}
            </DecoratedText>
            whole user journey
          </HeadingText>
        }
        titleMaxWidth="md"
        description="Empower your business with fast, secure, and seamless identity verification solutions designed to build trust and ensure compliance."
        mainImage={HeroImage}
        primaryButtonText="Register Now"
      />
    </Box>
  );
};

export default Hero;
