import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { HeadingText } from "@/components/text/heading-text";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { pxToRem } from "@/utils/styles";
import { Box } from "@mui/material";

export const ServiceDetailsSubHero = (props: any) => {
  const {
    mainHeading = ``,
    descriptionOne = ``,
    descriptionTwo,
    descriptionThree,
  } = props;

  return (
    <Box sx={{ marginY: 2, textAlign: "center" }}>
      <SlideUpInView>
        <Box sx={{ marginY: 2 }}>
          <HeadingText
            variant="h4"
            fontWeight="fontWeightSemiBold"
            letterSpacing={pxToRem(-2)}
          >
            {mainHeading}
          </HeadingText>
        </Box>
        <SubHeadingText variant="subtitle1" fontWeight="fontWeightNormal">
          {descriptionOne}
        </SubHeadingText>
        <Box sx={{ marginY: 2 }}>
          <SubHeadingText variant="subtitle1" fontWeight="fontWeightNormal">
            {descriptionTwo}
          </SubHeadingText>
        </Box>
        <SubHeadingText variant="subtitle1" fontWeight="fontWeightNormal">
          {descriptionThree}
        </SubHeadingText>
      </SlideUpInView>
    </Box>
  );
};
