import type { AixyzConfig } from "aixyz/config";

const config: AixyzConfig = {
  name: "Stock Market News",
  description:
    "Get recent news headlines and sentiment analysis for any stock ticker symbol.",
  version: "0.1.0",
  x402: {
    payTo: "0xf3A480427777A0b4B1B05A320c084abAdDB12fb4",
    network: (process.env.X402_NETWORK as `${string}:${string}`) ?? "eip155:84532",
  },
  skills: [
    {
      id: "stock-news",
      name: "Stock News & Sentiment",
      description: "Get recent news and sentiment for a stock ticker",
      tags: ["finance", "stocks", "news", "sentiment"],
      examples: [
        "What's the latest news on AAPL?",
        "Give me a sentiment summary for TSLA",
        "What are analysts saying about NVDA this week?",
        "Any recent headlines for AMZN?",
      ],
    },
  ],
};

export default config;
