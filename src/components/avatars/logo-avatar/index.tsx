"use client";
import { Avatar, Box, Typography } from "@mui/material";
import { LogoAvatarPropsI } from "../avatars.interface";
import { PROJECT_NAME } from "@/configs/env";
import { AVATAR_VARIANTS } from "@/constants/ui";
import {
  CommonDarkLogoImage,
  CommonLightLogoImage,
} from "@/assets/images/logo";
import Link from "next/link";

export const LogoAvatar = (props: LogoAvatarPropsI) => {
  const {
    productName,
    isLight = true,
    width = "100%",
    height = 28,
    variant = AVATAR_VARIANTS?.SQUARE,
    link = "/",
    isCenter = false,
  } = props;

  const Logo = isLight ? CommonLightLogoImage?.src : CommonDarkLogoImage?.src;

  return (
    <Box>
      <Link href={link}>
        <Avatar
          src={Logo}
          alt={PROJECT_NAME}
          sx={{
            width,
            height,
            objectFit: "cover",
            maxWidth: "100%",
            margin: isCenter ? "auto" : "",
          }}
          variant={variant}
        />
        {!!productName && (
          <Typography
            component={"p"}
            sx={{
              color: "primary.main",
              textAlign: "right",
              fontWeight: "fontWeightBold",
            }}
          >
            {productName}
          </Typography>
        )}
      </Link>
    </Box>
  );
};
