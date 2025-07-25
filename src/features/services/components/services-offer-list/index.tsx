import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { AvatarInfoCard } from "@/components/cards/avatar-info-card";
import { Box } from "@mui/material";
import { HeadingText } from "@/components/text/heading-text";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { pxToRem } from "@/utils/styles";

export const ServicesOfferList = (props: any) => {
  const { servicesListData } = props;

  return (
    <Box sx={{ textAlign: "center" }}>
      <SlideUpInView>
        <HeadingText variant="h4" fontWeight="fontWeightSemiBold">
          {servicesListData?.mainHeading}
        </HeadingText>
      </SlideUpInView>
      <Box
        sx={{
          maxWidth: pxToRem(1500),
          margin: "auto",
          marginY: 4,
        }}
      >
        <ContainerGridLayout
          spacing={4}
          customStyles={{ justifyContent: servicesListData?.alignment }}
        >
          {servicesListData?.offerServices?.map((service: any) => {
            return (
              <ItemGridLayout md={service?.md ?? 4} key={service?._id}>
                <SlideUpInView height="100%">
                  <AvatarInfoCard
                    Icon={service?.icon}
                    heading={service?.heading}
                    description={service?.description}
                    backgroundColor={service?.backgroundColor}
                    borderColor={service?.borderColor}
                    descriptionVariant="subtitle2"
                    descriptionFontWeight="fontWeightMedium"
                  />
                </SlideUpInView>
              </ItemGridLayout>
            );
          })}
        </ContainerGridLayout>
      </Box>
    </Box>
  );
};
