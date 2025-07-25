import { IconAvatar } from "@/components/avatars/icon-avatar";
import { LinkButton } from "@/components/buttons/link-button";
import { CustomText } from "@/components/text/custom-text";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { AVATAR_VARIANTS } from "@/constants/ui";
import { ArrowForwardIos } from "@mui/icons-material";
import { Box } from "@mui/material";

export const ServiceCard = (props: any) => {
  const {
    Icon = null,
    heading,
    description,
    headingVariant = "h6",
    descriptionVariant = "body1",
    textAlign = "left",
    avatarVariant = AVATAR_VARIANTS?.CIRCULAR,
    avatarWidth = 80,
    avatarHeight = 80,
    hoverStyles = {},
    borderColor = "common.lightest_gray_border",
    backgroundColor = "common.white",
    avatarBgColor = "common.white",
    avatarBorderColor = "transparent",
    btnLink = "#",
  } = props;

  return (
    <Box
      sx={{
        borderRadius: 2,
        textAlign,
        border: "1px solid",
        borderColor,
        backgroundColor,
        boxShadow: 27,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          ...hoverStyles,
        },
      }}
    >
      <Box
        sx={{
          padding: 2,
        }}
      >
        {Icon !== null && (
          <IconAvatar
            variant={avatarVariant}
            width={avatarWidth}
            height={avatarHeight}
            backgroundColor={avatarBgColor}
            borderColor={avatarBorderColor}
          >
            {Icon}
          </IconAvatar>
        )}
        <Box sx={{ mt: 3, mb: 1 }}>
          <CustomText variant={headingVariant} fontWeight="fontWeightSemiBold">
            {heading}
          </CustomText>
        </Box>
        <SubHeadingText
          variant={descriptionVariant}
          fontWeight="fontWeightNormal"
        >
          {description}
        </SubHeadingText>
      </Box>
      <Box sx={{ flex: 1 }} />
      <LinkButton
        link={btnLink}
        primary
        fullWidth
        endIcon={<ArrowForwardIos />}
      >
        Read More
      </LinkButton>
    </Box>
  );
};
