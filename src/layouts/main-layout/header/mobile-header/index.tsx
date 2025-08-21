"use client";
import {
  Box,
  ClickAwayListener,
  Typography,
  useTheme,
  Stack,
  MenuItem,
  ListItemButton,
  ListItemText,
  Collapse,
  List,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import { APP_ROUTES } from "@/constants/routes";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { NavLinkItem, navLinksData } from "../header.data";

// Custom Button
interface LinkButtonPropsI {
  children: React.ReactNode;
  link: string;
  customStyles: React.CSSProperties;
  onClick?: () => void;
}

export const CustomLinkButton: React.FC<LinkButtonPropsI> = ({
  children,
  link,
  customStyles,
  onClick,
}) => {
  return (
    <Link
      href={link}
      style={{
        ...customStyles,
        textDecoration: "none",
      }}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

// Mobile Menu Item with Children
interface MobileMenuItemWithChildrenProps {
  item: NavLinkItem;
  pathname: string | null;
  handleCloseAll: () => void;
  getIconComponent?: (icon?: string | React.FC<any>) => React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenuItemWithChildren: React.FC<MobileMenuItemWithChildrenProps> = ({
  item,
  pathname,
  handleCloseAll,
  getIconComponent,
  isOpen,
  onToggle,
}) => {
  const theme = useTheme();

  const isChildActive = item.children?.some((child) =>
    pathname?.startsWith(child.path),
  );
  const isParentActive = item.path ? pathname?.startsWith(item.path) : false;
  const isActive = isChildActive || isParentActive;

  return (
    <Box>
      <ListItemButton
        onClick={onToggle}
        aria-expanded={isOpen ? "true" : "false"}
        aria-label={`Toggle ${item.title} menu`}
        sx={{
          borderRadius: 1,
          px: 2,
          py: 1,
          justifyContent: "flex-start",
          color: isActive
            ? theme.palette.primary.main
            : theme.palette.text.primary,
          fontWeight: theme.typography.fontWeightMedium,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        }}
      >
        <Stack direction="row" alignItems="center" sx={{ flexGrow: 1, gap: 1 }}>
          {getIconComponent?.(item.icon)}
          <ListItemText
            primary={item.title}
            primaryTypographyProps={{
              sx: {
                color: isActive
                  ? theme.palette.primary.main
                  : theme.palette.text.primary,
                fontWeight: theme.typography.fontWeightMedium,
              },
            }}
          />
        </Stack>
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ pl: 2 }}>
          {item.children?.map((childItem) => (
            <MenuItem
              key={childItem.title}
              component={Link}
              href={childItem.path}
              onClick={handleCloseAll}
              sx={{
                color:
                  pathname === childItem.path
                    ? theme.palette.primary.main
                    : theme.palette.text.primary,
                fontWeight:
                  pathname === childItem.path
                    ? theme.typography.fontWeightBold
                    : theme.typography.fontWeightRegular,
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
                borderRadius: 1,
                px: 2,
                py: 1,
                justifyContent: "flex-start",
              }}
            >
              <Stack direction="row" alignItems="center" gap={1}>
                {getIconComponent?.(childItem.icon)}
                <Typography variant="body1">{childItem.title}</Typography>
              </Stack>
            </MenuItem>
          ))}
        </List>
      </Collapse>
    </Box>
  );
};

// Main Mobile Header
export const MobileHeader: React.FC<{
  getIconComponent?: (icon?: string | React.FC<any>) => React.ReactNode;
}> = ({ getIconComponent }) => {
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
        {/* Hamburger Button */}
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

        {/* Mobile Menu */}
        <Box
          sx={{
            position: "fixed",
            top: active ? 0 : "-100%",
            left: 0,
            right: 0,
            opacity: active ? 1 : 0,
            pointerEvents: active ? "auto" : "none",
            zIndex: 200,
            transition: "top 0.5s ease, opacity 0.3s ease",
            backgroundColor: theme.palette.background.paper,
            width: "100vw",
            height: "100vh",
            overflowY: "auto",
            p: 2,
            boxShadow: theme.shadows[4],
          }}
        >
          <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
            {navLinksData.map((item) => (
              <React.Fragment key={item.title}>
                {item.children ? (
                  <MobileMenuItemWithChildren
                    item={item}
                    pathname={pathname}
                    handleCloseAll={handleClose}
                    getIconComponent={getIconComponent}
                    isOpen={openItem === item.title}
                    onToggle={() =>
                      setOpenItem(openItem === item.title ? null : item.title)
                    }
                  />
                ) : (
                  <MenuItem
                    component={Link}
                    href={item.path || "#"}
                    onClick={handleClose}
                    sx={{
                      color:
                        pathname === item.path
                          ? theme.palette.primary.main
                          : theme.palette.text.primary,
                      fontWeight:
                        pathname === item.path
                          ? theme.typography.fontWeightBold
                          : theme.typography.fontWeightRegular,
                      "&:hover": {
                        backgroundColor: theme.palette.action.hover,
                      },
                      borderRadius: 1,
                      px: 2,
                      py: 1,
                      justifyContent: "flex-start",
                    }}
                  >
                    <Stack direction="row" alignItems="center" gap={1}>
                      {getIconComponent?.(item.icon)}
                      <Typography variant="body1">{item.title}</Typography>
                    </Stack>
                  </MenuItem>
                )}
              </React.Fragment>
            ))}

            {/* Buttons for Login & Get Started */}
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
