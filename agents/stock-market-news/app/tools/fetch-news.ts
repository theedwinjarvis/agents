import { tool } from "ai";
import { z } from "zod";

export default tool({
  description:
    "Fetch recent news headlines for a stock ticker from Yahoo Finance RSS feed.",
  inputSchema: z.object({
    ticker: z
      .string()
      .min(1)
      .max(10)
      .transform((v) => v.toUpperCase())
      .describe("Stock ticker symbol, e.g. AAPL, TSLA, NVDA"),
  }),
  execute: async ({ ticker }) => {
    const url = `https://feeds.finance.yahoo.com/rss/2.0/headline?s=${ticker}&region=US&lang=en-US`;
    const res = await fetch(url, {
      headers: { "User-Agent": "stock-market-news-agent/0.1.0" },
    });

    if (!res.ok) {
      throw new Error(
        `Yahoo Finance RSS error: ${res.status} ${res.statusText}`,
      );
    }

    const xml = await res.text();
    const items = xml.match(/<item>([\s\S]*?)<\/item>/g) ?? [];

    const headlines = items.slice(0, 8).map((item) => {
      const title =
        extractCdata(item, "title") ??
        extractTag(item, "title") ??
        "(no title)";
      const pubDate = extractTag(item, "pubDate") ?? "";
      const source = extractTag(item, "source") ?? "Yahoo Finance";
      const link = extractTag(item, "link") ?? "";
      return { title, source, pubDate, link };
    });

    return { ticker, headlines };
  },
});

function extractTag(xml: string, tag: string): string | null {
  const m = xml.match(new RegExp(`<${tag}[^>]*>([^<]*)</${tag}>`));
  return m?.[1]?.trim() ?? null;
}

function extractCdata(xml: string, tag: string): string | null {
  const m = xml.match(
    new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`),
  );
  return m?.[1]?.trim() ?? null;
}
