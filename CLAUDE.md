@AGENTS.md

# Session lessons

## Be proactive — don't ask the user to do what you can do yourself
- If `git push` fails, immediately switch to `mcp__github__push_files` — don't ask the user to fix credentials.
- If deployment config is wrong (e.g. Vercel output directory), push a config file (`vercel.json`) instead of asking the user to change settings in a UI.
- If a tool or approach fails, try the next approach yourself before escalating to the user.
- Only ask the user to act when it truly requires their account/permissions (e.g. installing a GitHub App).

## Claude Code web environment
- `git push` often fails due to proxy auth issues — default to `mcp__github__push_files` for pushing code.
- Google Fonts (`next/font/google`) are blocked — use system font stacks instead.
- Always set timeouts on potentially long-running bash commands to avoid getting stuck.
- Push files in batches via the GitHub API (config files, then source, then components) to avoid oversized payloads.
- Always include `vercel.json` with `{"framework": "nextjs"}` for Vercel deployments.
