import { GradientHeadingBlock } from "@/components/gradient-heading-block/gradient-heading-block";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { Office1, Office2, Office3, Office4 } from "../../assets";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { LinkButton } from "@/components/buttons/link-button";
import { BodyText } from "@/components/text/body-text";
import SlideSidewayInView from "@/components/animations/animation-scroll/slide-sideway-in-view";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { APP_ROUTES } from "@/constants/routes";

const Hero = () => {
  return (
    <Box>
      <GradientHeadingBlock
        headingStart="About Our"
        highlightText="Company"
        containerSx={{
          minHeight: "150px",
          paddingTop: "50px",
          width: { xs: "90%", md: "837px" },
          textAlign: "center",
          margin: "0 auto",
        }}
      />
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        my={5}
        px={{ md: 0, xs: 5 }}
      >
        <Grid size={{ lg: 3, md: 3, xs: 12 }}>
          <SlideSidewayInView initialX={-100}>
            <Image
              src={Office1}
              alt="About Us"
              style={{ width: "100%", height: "auto" }}
            />
          </SlideSidewayInView>
        </Grid>
        <Grid size={{ lg: 6, md: 6, xs: 12 }}>
          <Grid size={{ xs: 12 }} container spacing={2}>
            <Grid size={{ xs: 6 }}>
              <SlideUpInView initialY={-100}>
                <Image
                  src={Office2}
                  alt="About Us"
                  style={{ width: "100%", height: "auto" }}
                />
              </SlideUpInView>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <SlideSidewayInView initialX={100}>
                <Image
                  src={Office3}
                  alt="About Us"
                  style={{ width: "100%", height: "auto" }}
                />
              </SlideSidewayInView>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <SlideUpInView initialY={100}>
              <Image
                src={Office4}
                alt="About Us"
                style={{ width: "100%", height: "auto" }}
              />
            </SlideUpInView>
          </Grid>
        </Grid>
      </Grid>
      <Box px={{ md: 0, xs: 5 }}>
        <ContainerGridLayout
          customStyles={{
            justifyContent: "center",
            alignContent: "center",
            gap: 2,
          }}
        >
          <ItemGridLayout
            xs={12}
            md={4}
            customStyles={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <GradientHeadingBlock
              headingStart=""
              highlightText="How we work"
              headingEnd="with our Clients"
              containerSx={{
                textAlign: "left",
                px: 0,
                width: { xs: "90%", md: "80%" },
                mb: 2,
              }}
            />
            <LinkButton link={APP_ROUTES?.CONTACT_US}>Contact Us</LinkButton>
          </ItemGridLayout>
          <ItemGridLayout xs={12} md={4}>
            <BodyText variant="body1" marginBottom={2}>
              We are a global identity verification company dedicated to
              empowering businesses with secure, seamless, and compliant
              onboarding solutions. From fintech to healthcare, our platform
              ensures trust and transparency throughout the entire customer
              journey.
            </BodyText>
            <BodyText variant="body1">
              Our client relationships are rooted in collaboration, innovation,
              and compliance. We tailor our identity verification solutions to
              suit each client’s unique needs while maintaining global
              regulatory standards. With robust support and flexible
              integration, we help businesses scale securely and efficiently.
            </BodyText>
          </ItemGridLayout>
        </ContainerGridLayout>
      </Box>
    </Box>
  );
};

export default Hero;
