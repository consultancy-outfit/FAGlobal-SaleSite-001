"use client";
import {
  Box,
  ClickAwayListener,
  useTheme,
  Stack,
  Collapse,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { navLinksData } from "../header.data";
import { APP_ROUTES } from "@/constants/routes";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { CustomLinkButton } from "@/layouts/main-layout/header/mobile-header";

export const MobileHeader = () => {
  const [active, setActive] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleClose = () => {
    setActive(false);
    setOpenItem(null);
  };
  const handleOpen = () => setActive(true);

  const pathname = usePathname();
  const theme = useTheme();

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box sx={{ position: "relative" }}>
        {/* Hamburger / Cross Icon */}
        <Box
          onClick={active ? handleClose : handleOpen}
          role="button"
          aria-label="Toggle navigation menu"
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 1,
            zIndex: 300,
          }}
        >
          <Box>
            <Box
              sx={{
                height: 3,
                borderRadius: 2,
                background: theme.palette.secondary.main,
                my: 0.5,
                width: 24,
                transform: active ? "translateY(7px) rotate(45deg)" : "none",
                transition: "all 0.3s ease",
              }}
            />
            <Box
              sx={{
                height: 3,
                borderRadius: 2,
                background: theme.palette.secondary.main,
                my: 0.5,
                width: 24,
                opacity: active ? 0 : 1,
                transition: "all 0.3s ease",
              }}
            />
            <Box
              sx={{
                height: 3,
                borderRadius: 2,
                background: theme.palette.secondary.main,
                my: 0.5,
                width: 24,
                transform: active ? "translateY(-7px) rotate(-45deg)" : "none",
                transition: "all 0.3s ease",
              }}
            />
          </Box>
        </Box>

        {/* Full Screen Menu */}
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: theme.palette.background.paper,
            zIndex: 1200,
            transform: active ? "translateY(0)" : "translateY(-100%)",
            transition: "transform 0.5s ease",
            display: "flex",
            flexDirection: "column",
            p: 4,
            overflowY: "auto",
          }}
        >
          {/* Navigation Links */}
          <Stack spacing={2} sx={{ mt: 8 }}>
            {navLinksData?.map((item) => (
              <Box key={item.title}>
                {item.children ? (
                  <>
                    <Box
                      onClick={() =>
                        setOpenItem(openItem === item.title ? null : item.title)
                      }
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        cursor: "pointer",
                        color: pathname?.startsWith(item.path)
                          ? theme.palette.primary.main
                          : theme.palette.text.secondary,
                        fontSize: "14x",
                        fontWeight: theme.typography.fontWeightRegular,
                      }}
                    >
                      {item.title}
                      {openItem === item.title ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </Box>
                    <Collapse
                      in={openItem === item.title}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Stack spacing={1} pl={2} mt={1}>
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.path}
                            onClick={handleClose}
                            style={{
                              textDecoration: "none",
                              color:
                                pathname === child.path
                                  ? theme.palette.primary.main
                                  : theme.palette.text.secondary,
                              fontSize: "14px",
                            }}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </Stack>
                    </Collapse>
                  </>
                ) : (
                  <Link
                    href={item.path}
                    onClick={handleClose}
                    style={{
                      textDecoration: "none",
                      color:
                        pathname === item.path
                          ? theme.palette.primary.main
                          : theme.palette.text.secondary,
                      fontSize: "14px",
                      fontWeight:
                        pathname === item.path
                          ? theme.typography.fontWeightBold
                          : theme.typography.fontWeightMedium,
                    }}
                  >
                    {item.title}
                  </Link>
                )}
              </Box>
            ))}

            {/* Buttons below links */}
            <Stack
              direction="column"
              spacing={2}
              alignItems="center"
              mt={2}
              sx={{
                "& > a": {
                  width: { xs: "100%", sm: "fit-content" },
                },
                display: { xs: "flex", sm: "none" },
              }}
            >
              <CustomLinkButton
                link={APP_ROUTES.PARTNER_WITH_US}
                customStyles={{
                  borderRadius: "999px",
                  border: "1px solid #F2F2F2",
                  padding: "8px 24px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: theme.palette.common.white,
                  color: theme.palette.text.primary,
                }}
                onClick={handleClose}
              >
                Login
              </CustomLinkButton>
              <CustomLinkButton
                link={APP_ROUTES.Get_STARTED}
                customStyles={{
                  borderRadius: "999px",
                  border: `1.5px solid ${theme.palette.primary.main}`,
                  padding: "8px 24px",
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.common.white,
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={handleClose}
              >
                Get Started
              </CustomLinkButton>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </ClickAwayListener>
  );
};
