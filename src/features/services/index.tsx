import { Box } from "@mui/material";
import { Hero } from "./components/hero";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { CustomText } from "@/components/text/custom-text";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { pxToRem } from "@/utils/styles";
import { ServicesList } from "./components/services-list";
import { ContactCard } from "@/components/cards/contact-card";
import { MainContainer } from "@/components/containers/main-container";
import {
  ServicesListMainBgImage,
  ServicesListTopBgImage,
} from "./assets/images";
import { DecoratedText } from "@/components/data-displays/decorated-text";
import { SecondaryContainer } from "@/components/containers/secondary-container";

export const ServicesFeature = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "common.light_background",
        }}
      >
        <Box sx={{ padding: { xs: "1rem", md: "1rem 2rem" } }}>
          <Hero />
        </Box>
      </Box>
      <MainContainer
        customStyles={{
          backgroundImage: `url(${ServicesListTopBgImage?.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
        }}
      >
        <SlideUpInView>
          <CustomText
            variant="extraHeading"
            fontWeight="fontWeightMedium"
            letterSpacing={pxToRem(-2)}
          >
            Prevent fraud. Establish trust.
            <DecoratedText
              variant="extraHeading"
              fontWeight="fontWeightMedium"
              letterSpacing={pxToRem(-2)}
            >
              Simplified iden
            </DecoratedText>
            tity verification
          </CustomText>
          <Box
            sx={{
              maxWidth: pxToRem(1400),
              margin: "auto",
              marginY: 2,
              textAlign: "center",
            }}
          >
            <SubHeadingText variant="subtitle1" fontWeight="fontWeightNormal">
              {`AI-powered identity verification for fraud prevention, KYC compliance, and seamless customer conversions with IdentityGram. Trust our experts to handle verification while you focus on what matters most`}
            </SubHeadingText>
          </Box>
        </SlideUpInView>
        <Box
          sx={{
            backgroundImage: `url(${ServicesListMainBgImage?.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            marginTop: { xs: "1rem", md: "5rem" },
          }}
        >
          <ServicesList />
        </Box>
      </MainContainer>
      <SecondaryContainer>
        <ContactCard />
      </SecondaryContainer>
    </>
  );
};
