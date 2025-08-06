import { PrivacyPolicyImage2 } from "@/assets/images/features/home";
import { Stack } from "@mui/material";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <Stack alignItems="center">
      <Image
        src={PrivacyPolicyImage2}
        alt="Home"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </Stack>
  );
}
