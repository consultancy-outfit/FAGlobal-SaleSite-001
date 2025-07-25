import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { pxToRem } from "@/utils/styles";
import { Avatar, Box } from "@mui/material";
import { HeadingText } from "@/components/text/heading-text";
import { HeroContainer } from "@/components/containers/hero-container";

export const ServiceDetailsHero = (props: any) => {
  const { heroHeading = "", heroImage, hasHeading = true } = props;
  return (
    <>
      {hasHeading && (
        <HeroContainer paddingYMd={"2rem"} maxWidth={900}>
          <SlideUpInView>
            <HeadingText
              variant="h3"
              fontWeight="fontWeightSemiBold"
              letterSpacing={pxToRem(-2)}
            >
              {heroHeading}
            </HeadingText>
          </SlideUpInView>
        </HeroContainer>
      )}

      <Box
        sx={{
          maxWidth: pxToRem(1500),
          margin: "auto",
          my: 3,
        }}
      >
        <ScaleInView>
          <Avatar
            src={heroImage?.src}
            alt={"get started"}
            variant="square"
            sx={{
              width: { xs: "100%" },
              height: { xs: "auto" },
              maxWidth: "100%",
              margin: "auto",
              backgroundColor: "transparent",
            }}
          />
        </ScaleInView>
      </Box>
    </>
  );
};
