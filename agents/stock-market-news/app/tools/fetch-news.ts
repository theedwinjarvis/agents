import { tool } from "ai";
import { z } from "zod";

/**
 * Fetches recent news headlines for a stock ticker from Yahoo Finance RSS feed.
 * Free, no API key required.
 */
export default tool({
  description:
    "Fetch recent news headlines for a stock ticker from Yahoo Finance",
  parameters: z.object({
    ticker: z
      .string()
      .min(1)
      .max(10)
      .toUpperCase()
      .describe("Stock ticker symbol (e.g. AAPL, TSLA, NVDA)"),
  }),
  execute: async ({ ticker }) => {
    const url = `https://feeds.finance.yahoo.com/rss/2.0/headline?s=${ticker}&region=US&lang=en-US`;

    const res = await fetch(url, {
      headers: { "User-Agent": "stock-market-news-agent/0.1.0" },
    });

    if (!res.ok) {
      return {
        ticker,
        error: `Failed to fetch news: ${res.status} ${res.statusText}`,
        headlines: [],
      };
    }

    const xml = await res.text();

    // Parse <item> blocks from RSS
    const items: { title: string; source: string; date: string; link: string }[] =
      [];
    const itemMatches = xml.matchAll(/<item>([\s\S]*?)<\/item>/g);

    for (const match of itemMatches) {
      const block = match[1];
      const title = block.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1]
        ?? block.match(/<title>(.*?)<\/title>/)?.[1]
        ?? "Unknown";
      const pubDate =
        block.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? "";
      const link =
        block.match(/<link>(.*?)<\/link>/)?.[1]
        ?? block.match(/<guid[^>]*>(.*?)<\/guid>/)?.[1]
        ?? "";

      // Format date to readable short form
      const date = pubDate
        ? new Date(pubDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "Unknown";

      items.push({ title, source: "Yahoo Finance", date, link });

      if (items.length >= 8) break; // cap at 8 headlines
    }

    return { ticker, headlines: items, fetchedAt: new Date().toISOString() };
  },
});
