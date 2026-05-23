import { forwardRef } from "react";
import { SlackAssistantCard } from "./solution/chatbot/SlackAssistantCard";
import { SocialLeadCard } from "./solution/chatbot/SocialLeadCard";
import { SupportChatCard } from "./solution/chatbot/SupportChatCard";

export const ChatbotCards = forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
    <SupportChatCard />
    <SlackAssistantCard />
    <SocialLeadCard />
  </div>
));

ChatbotCards.displayName = "ChatbotCards";
