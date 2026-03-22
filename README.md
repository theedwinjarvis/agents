# agents

Monorepo of [aixyz](https://aixyz.sh) agents — payment-native AI agents built on the x402 / ERC-8004 protocol stack.

## Structure

```
agents/
└── agents/
    └── <agent-name>/        # each agent is its own package
        ├── aixyz.config.ts  # agent identity, payment config, skills
        ├── app/
        │   ├── agent.ts     # main agent definition (Vercel AI SDK)
        │   ├── tools/       # auto-discovered tools (A2A + MCP)
        │   └── agents/      # sub-agents, each gets its own endpoint
        ├── package.json
        └── tsconfig.json
```

## Getting Started

Prerequisites: [Bun](https://bun.sh)

```bash
# Install workspace dependencies
bun install

# Dev a specific agent
cd packages/<agent-name>
bun run dev
```

## Adding a New Agent

```bash
cd agents
bunx create-aixyz-app <agent-name>
```

Each agent in `packages/` is an independent aixyz project deployed separately.

## Protocols

Every agent in this repo supports:
- **A2A** — Agent-to-Agent discovery and communication
- **MCP** — Model Context Protocol for tool sharing
- **x402** — HTTP 402 micropayments (on-chain settlement)
- **ERC-8004** — On-chain agent identity

## Links

- [aixyz docs](https://aixyz.sh)
- [use-agently marketplace](https://use-agently.com)
