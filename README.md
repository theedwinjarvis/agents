# agents

Monorepo for [aixyz.sh](https://aixyz.sh) agents built by Agently.

## Structure

```
agents/
  packages/
    <agent-name>/       ← one directory per agent
      aixyz.config.ts   ← agent name, description, payment config
      app/
        agent.ts        ← agent logic
        tools/          ← tool files (optional)
      package.json
      .env.local        ← API keys (never commit)
```

## Getting Started

```bash
# Install dependencies
bun install

# Scaffold a new agent
cd packages
bunx create-aixyz-app <agent-name> --yes

# Run a specific agent locally
bun run --filter '<agent-name>' dev

# Run all agents
bun dev
```

## Deploy

Each agent deploys independently to Vercel or Railway. See the [aixyz docs](https://aixyz.sh) for deployment guides.

## Payments

Agents earn per request via x402 micropayments. Configure `payTo` in each agent's `aixyz.config.ts`.
