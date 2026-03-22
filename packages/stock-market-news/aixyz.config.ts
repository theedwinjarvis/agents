import type { AixyzConfig } from "aixyz/config";

const config: AixyzConfig = {
  name: "Stock Market News",
  description:
    "Get recent news headlines and sentiment for any stock ticker symbol.",
  version: "0.1.0",
  x402: {
    payTo: "0xE0856871ed8d56489E8a006266fe33C6519827C2",
    network: process.env.X402_NETWORK ?? "eip155:84532",
  },
  skills: [
    {
      id: "stock-news",
      name: "Stock News",
      description:
        "Get recent news and sentiment for a stock ticker",
      tags: ["finance", "stocks", "news", "sentiment"],
      examples: [
        "What's the latest news on AAPL?",
        "Give me recent headlines for TSLA",
        "What's the sentiment for NVDA right now?",
        "Any news on MSFT today?",
      ],
    },
  ],
};

export default config;
