import { GetStartedImage } from "@/assets/images/features/home";
import { Stack } from "@mui/material";
import Image from "next/image";

export default function ContactUs() {
  return (
    <Stack alignItems="center">
      <Image
        src={GetStartedImage}
        alt="Home"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </Stack>
  );
}
