import type { AixyzConfig } from "aixyz/config";

const config: AixyzConfig = {
  name: "cafe-faq-agent",
  description: "Customer service FAQ agent for The Daily Grind Café, Singapore. Answers questions about opening hours, menu, pricing, reservations, delivery, and more.",
  version: "0.1.0",
  x402: {
    payTo: "0x0799872E07EA7a63c79357694504FE66EDfE4a0A",
    network: process.env.NODE_ENV === "production" ? "eip155:8453" : "eip155:84532",
  },
  skills: [
    {
      id: "cafe-faq",
      name: "Café FAQ",
      description: "Answer customer questions about The Daily Grind Café — hours, menu, pricing, reservations, WiFi, parking, delivery, and events.",
      tags: ["cafe", "faq", "customer-service", "singapore"],
      examples: [
        "What time do you open?",
        "Do you have vegan options?",
        "Can I book a table?",
        "How much is a latte?",
        "Are you on GrabFood?",
      ],
    },
  ],
};

export default config;
