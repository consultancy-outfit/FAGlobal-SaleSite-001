import { LoginImage } from "@/assets/images/features/home";
import { Stack } from "@mui/material";
import Image from "next/image";

export default function PartnerWithUs() {
  return (
    <Stack alignItems="center">
      <Image
        src={LoginImage}
        alt="Home"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </Stack>
  );
}
