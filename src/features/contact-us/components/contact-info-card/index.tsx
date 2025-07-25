import { BodyText } from "@/components/text/body-text";
import { HeadingText } from "@/components/text/heading-text";
import { Box, IconButton, Stack, useTheme } from "@mui/material";
import { CheckIcon } from "../../assets/icons";
import { contactInfoData, contactSocialData } from "./contact-info.data";
import { PROJECT_NAME } from "@/configs/env";

const ContactInfoCard = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          backgroundColor: "common.card_bg_purple",
          borderRadius: 6,
          p: "6rem 1rem 1rem 1rem",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <HeadingText variant="h4" fontWeight="fontWeightMedium">
            Why {PROJECT_NAME}
          </HeadingText>
          <BodyText variant="body1" marginTop={3}>
            Tell {PROJECT_NAME} about you and we’ll put you in touch right away
            with our team
          </BodyText>
          <Box>
            {contactInfoData?.map((item) => (
              <Stack
                direction="row"
                key={item}
                spacing={2}
                mt={4}
                alignItems="center"
              >
                <CheckIcon />
                <BodyText
                  variant="body1"
                  customStyles={{ maxWidth: 320, lineHeight: "22px" }}
                >
                  {item}
                </BodyText>
              </Stack>
            ))}
          </Box>
        </Box>
        <Box
          mt={{ md: 4, xs: 2 }}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: 300,
            gap: 1,
          }}
        >
          {contactSocialData?.map((social) => (
            <IconButton
              key={social?.name}
              href={social?.path}
              target="_blank"
              sx={{
                bgcolor: `rgba(187, 192, 223, 0.4)`,
                p: 1.5,
                width: 50,
                height: 50,
              }}
            >
              <social.icon color={theme?.palette?.primary?.main} />
            </IconButton>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ContactInfoCard;
