import ChatBotFullSize from "@/features/ChatBot/Pages/index";
import { Suspense } from "react";

export default function Chatbot() {
  return (
    <Suspense>
      <ChatBotFullSize />
    </Suspense>
  );
}
