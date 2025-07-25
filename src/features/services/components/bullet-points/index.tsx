import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { HeadingText } from "@/components/text/heading-text";
import { pxToRem } from "@/utils/styles";
import { Box } from "@mui/material";
import { Fragment } from "react";

export const BulletPoints = (props: any) => {
  const { heading, points } = props;
  return (
    <Box sx={{ marginY: 2, textAlign: "center" }}>
      <SlideUpInView>
        <Box sx={{ marginY: 2 }}>
          <HeadingText
            variant="h4"
            fontWeight="fontWeightSemiBold"
            letterSpacing={pxToRem(-2)}
          >
            {heading}
          </HeadingText>
        </Box>
        <ul
          style={{
            marginTop: "0px",
            marginBottom: "0px",
            listStyle: "none",
          }}
        >
          {points?.map((point: any) => (
            <Fragment key={point?.heading ?? point?.title ?? point}>
              <li
                style={{
                  marginTop: pxToRem(16),
                  marginBottom: pxToRem(16),
                  fontSize: pxToRem(20),
                }}
              >
                <b>{point?.heading}</b> {point?.title ?? point}
              </li>
            </Fragment>
          ))}
        </ul>
      </SlideUpInView>
    </Box>
  );
};
