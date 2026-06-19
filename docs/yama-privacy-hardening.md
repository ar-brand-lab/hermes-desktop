# Yama Privacy Hardening

This fork removes the upstream desktop telemetry path so Yama Hermes One can run without sending usage data to PostHog.

## Removed

- Removed the `posthog-js` runtime dependency.
- Removed renderer analytics initialization, screen-view capture, feature capture, consent storage, and reset calls.
- Removed PostHog environment variables from renderer type definitions.
- Removed the analytics settings panel and translated analytics copy.
- Removed PostHog hosts from renderer and production Content Security Policy rules.
- Removed the example PostHog environment file.

## Fork identity

The desktop package now uses a separate app identity:

- Package name: `yama-hermes-one`
- Product name: `Yama Hermes One`
- App ID: `com.yama.hermesone`
- Windows executable: `yama-hermes-one`
- GitHub publish owner: `ar-brand-lab`

This avoids overwriting the stock Hermes One installation while we build the fork.

## Verification

Run from this repository:

```powershell
rg -n "posthog|PostHog|POSTHOG|us\.i\.posthog|eu\.i\.posthog" package.json package-lock.json src electron-builder.yml dev-app-update.yml
npm.cmd run typecheck
npm.cmd run build
rg -n "posthog|PostHog|POSTHOG|us\.i\.posthog|eu\.i\.posthog" out
```

The final `rg` command should produce no matches. A separate dependency audit is still needed before treating this fork as hardened beyond the PostHog removal.
