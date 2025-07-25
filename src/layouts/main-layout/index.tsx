import { Box } from "@mui/material";
import { Footer } from "./footer";
import { Header } from "./header";
import { ChatBot } from "@/features/ChatBot/ChatBot";

export const MainLayout = (props: any) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Box sx={{ height: 110 }} />
      {/* <ChatBot /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
};
