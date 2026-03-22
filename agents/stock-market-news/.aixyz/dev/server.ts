import { AixyzApp } from "aixyz/app";
import { IndexPagePlugin } from "aixyz/app/plugins/index-page";
import { facilitator } from "../../app/accepts";
import { A2APlugin } from "aixyz/app/plugins/a2a";
import * as agent from "../../app/agent";
import { MCPPlugin } from "aixyz/app/plugins/mcp";
import * as fetchNews from "../../app/tools/fetch-news";

const app = new AixyzApp({ facilitators: facilitator });
await app.withPlugin(new IndexPagePlugin());
await app.withPlugin(new A2APlugin(agent));
await app.withPlugin(new MCPPlugin([
  { name: "fetch-news", exports: fetchNews },
]));
await app.initialize();
export default app;