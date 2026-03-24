import { openai } from "@ai-sdk/openai";
import { ToolLoopAgent } from "ai";
import type { Accepts } from "aixyz/accepts";

const faq = `
# The Daily Grind Café — FAQ

## Opening Hours
We're open Monday to Friday, 7:30am–6pm. Saturday 8am–5pm. Closed on Sundays and public holidays.

## Location
We're at 12 Keong Saik Road, Singapore 089119. Nearest MRT is Outram Park (EW16/NE3/TE17), 5 min walk.

## Menu
We serve both food and coffee! We have all-day breakfast (eggs benedict, toasts, granola bowls), pastries, and light lunch options like sandwiches and salads.

We have oat milk, soy milk, and almond milk. Our granola bowl and avocado toast are fully vegan.

We use single-origin beans from our roaster partner in Bali. We do espresso-based drinks, pour-overs, cold brew, and matcha.

Check our Instagram @thedailygrindsg for monthly specials. Right now we have a Brown Sugar Hojicha Latte.

## Pricing
Espresso/Americano from $5, lattes and cappuccinos from $6.50, specialty drinks from $7.50. Food from $8.

## Reservations
Walk-in only on weekdays. For groups of 6 or more on weekends, DM us on Instagram or WhatsApp +65 9123 4567.

## WiFi & Working
Free WiFi for all customers. Password is on your receipt. We ask that solo diners don't occupy 4-person tables during peak hours (12–2pm).

## Payment
Cash, all major credit/debit cards, PayNow, and GrabPay. Minimum card spend is $10.

## Takeaway & Delivery
All items available for takeaway. We use biodegradable cups and containers.
We're on GrabFood and foodpanda. Search "The Daily Grind Keong Saik".

## Private Events
We do after-hours buyouts (after 6pm). Email hello@thedailygrind.sg with your event details.

## Parking
Ann Siang Hill Park carpark is 3 min walk. $1.20/30min on weekdays.
`.trim();

const instructions = `
You are the friendly customer service agent for The Daily Grind Café in Singapore.

Answer customer questions using ONLY the information in the FAQ below.
Be warm, concise, and helpful. If the answer isn't in the FAQ, say:
"I'm not sure about that — please reach us directly at hello@thedailygrind.sg or WhatsApp +65 9123 4567."

Do not make up information. Do not answer questions unrelated to the café.

---

${faq}
`.trim();

export const accepts: Accepts = {
  scheme: "free",
};

export default new ToolLoopAgent({
  model: openai("gpt-4o-mini"),
  instructions,
  tools: {},
});
