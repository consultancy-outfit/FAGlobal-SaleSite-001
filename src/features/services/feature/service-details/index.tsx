"use client";
import { Box } from "@mui/material";
import { ServiceDetailsHero } from "../../components/service-details-hero";
import { ServiceDetailsSubHero } from "../../components/services-details-sub-hero";
import { ServicesOfferList } from "../../components/services-offer-list";
import { WhyChooseUs } from "../../components/why-choose-us";
import { HowItWorks } from "../../components/how-it-works";
import { useSearchParams } from "next/navigation";
import { servicesDetailsListData } from "./service-details.data";
import { MainContainer } from "@/components/containers/main-container";
import UiNoPageFoundState from "@/components/ui-status-states/ui-no-page-found-state";

export const ServiceDetailsFeature = () => {
  const params = useSearchParams();
  const serviceId: any = params?.get("id");
  const hasService = servicesDetailsListData?.[serviceId];
  const {
    heroHeading,
    offerServices,
    subHeroSection,
    chooseUs,
    showSubHero = true,
    heroImage,
    subHeroImage,
    howItWorks,
  }: any = hasService ?? {};

  if (!hasService) return <UiNoPageFoundState hasButton />;

  return (
    <MainContainer>
      <ServiceDetailsHero heroHeading={heroHeading} heroImage={heroImage} />
      <Box sx={{ marginY: { xs: "1rem", md: "5rem" } }}>
        <ServiceDetailsSubHero
          mainHeading={subHeroSection?.mainHeading}
          descriptionThree={subHeroSection?.descriptionThree}
          descriptionTwo={subHeroSection?.descriptionTwo}
          descriptionOne={subHeroSection?.descriptionOne}
        />
      </Box>
      <Box sx={{ marginY: { xs: "1rem", md: "5rem" } }}>
        <WhyChooseUs
          heading={chooseUs?.mainHeading}
          points={chooseUs?.points}
        />
      </Box>
      <Box sx={{ marginY: { xs: "1rem", md: "5rem" } }}>
        <HowItWorks
          heading={howItWorks?.mainHeading}
          points={howItWorks?.points}
        />
      </Box>
      {showSubHero && (
        <Box sx={{ marginY: { xs: "1rem", md: "5rem" } }}>
          <ServiceDetailsHero heroImage={subHeroImage} hasHeading={false} />
        </Box>
      )}
      {!!offerServices && (
        <Box sx={{ marginY: { xs: "1rem", md: "5rem" } }}>
          <ServicesOfferList servicesListData={offerServices} />
        </Box>
      )}
    </MainContainer>
  );
};
