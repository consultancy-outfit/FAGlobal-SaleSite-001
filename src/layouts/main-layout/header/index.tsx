"use client";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useEffect } from "react";
import { navLinksData } from "./header.data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkButton } from "@/components/buttons/link-button";
import { APP_ROUTES, PROJECT_WEB_APP_ROUTES } from "@/constants/routes";
import { motion, useAnimation } from "framer-motion";
import { useScroll } from "framer-motion";
import { MobileHeader } from "./mobile-header";
import { LogoAvatar } from "@/components/avatars/logo-avatar";

export const Header = () => {
  const pathname = usePathname();
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.01) {
        controls.start({
          width: "85%",
          transition: { duration: 0.4 },
          boxShadow:
            "0px 3px 4px rgba(0, 0, 0, 0.1), 0px 0px 3px rgba(0, 0, 0, 0.05)",
          backgroundColor: theme?.palette?.common?.white,
          top: 20,
          padding: "2.8rem 1rem",
        });
      } else {
        controls.start({
          width: "90%",
          transition: { duration: 0.4 },
          boxShadow: "none",
          backgroundColor: "transparent",
          top: 0,
          padding: "2.5rem 1rem",
        });
      }
    });
    return () => unsubscribe();
  }, [controls, scrollYProgress]);
  const theme = useTheme();

  return (
    <>
      <motion.div
        animate={controls}
        initial={{
          width: "90%",
          backgroundColor: "transparent",
          boxShadow: "none",
          top: 0,
        }}
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          zIndex: 1100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2.5rem 1rem",
          margin: "0 auto",
          borderRadius: 16,
          height: 80,
        }}
      >
        <Box>
          <LogoAvatar height="auto" isCenter isLight={false} />
        </Box>
        <Stack
          direction="row"
          spacing={{ xl: 3, xs: 2 }}
          alignItems="center"
          display={{ xs: "none", lg: "flex" }}
        >
          {navLinksData?.map((item) => (
            <Typography
              key={item?.title}
              variant="subtitle2"
              component={Link}
              href={item?.path}
              sx={{
                textDecoration: "none",
                color: theme?.palette?.text?.primary,
                fontWeight:
                  pathname?.startsWith(item?.path) && item?.path !== "/"
                    ? "fontWeightBold"
                    : pathname === "/" && item?.path === "/"
                      ? "fontWeightBold"
                      : "fontWeightMedium",
              }}
            >
              {item?.title}
            </Typography>
          ))}
        </Stack>
        <Stack direction="row" spacing={2} alignItems={"center"}>
          <Stack
            direction="row"
            spacing={2}
            display={{ xs: "none", sm: "flex" }}
          >
            <LinkButton
              link={APP_ROUTES?.PARTNER_WITH_US}
              variant="outlined"
              color="secondary"
              customStyles={{
                borderRadius: 2,
                px: 1,
                py: 1,
                color: theme?.palette?.text?.primary,
              }}
            >
              Partner With Us
            </LinkButton>
            <LinkButton
              link={PROJECT_WEB_APP_ROUTES?.SIGNUP}
              linkProps={{
                target: "_blank",
              }}
              customStyles={{
                borderRadius: 2,
                px: 1,
                py: 1,
                bgcolor: theme?.palette?.text?.primary,
              }}
            >
              Register Now
            </LinkButton>
          </Stack>
          <Box
            sx={{
              display: { xs: "block", lg: "none" },
            }}
          >
            <MobileHeader />
          </Box>
        </Stack>
      </motion.div>
    </>
  );
};
