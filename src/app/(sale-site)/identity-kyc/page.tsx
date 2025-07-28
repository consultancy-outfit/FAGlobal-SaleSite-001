import { Stack } from "@mui/material";
import Image from "next/image";

import CoreServiceImage from "./identity-kyc.svg";
export default function PartnerWithUs() {
  return (
    <Stack alignItems="center">
      <Image
        src={CoreServiceImage}
        alt="Home"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </Stack>
  );
}
