import { AboutImage } from "@/assets/images/features/home";
import { Stack } from "@mui/material";
import Image from "next/image";

export default function AboutUs() {
  return (
    <Stack alignItems="center">
      <Image
        src={AboutImage}
        alt="Home"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </Stack>
  );
}
