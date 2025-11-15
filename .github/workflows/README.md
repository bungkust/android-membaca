# GitHub Actions Workflows

This repository has 3 GitHub Actions workflows configured:

## 1. CI Workflow (`ci.yml`)
**Trigger:** 
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

**What it does:**
- Runs linting (`pnpm lint`)
- Runs type checking (`pnpm typecheck`)
- Builds all packages (`pnpm build`)
- Uploads build artifacts

**Status:** ✅ Ready - No secrets required

## 2. Build Web Workflow (`build-web.yml`)
**Trigger:**
- Push to `main` branch (only when web-related files change)
- Manual trigger via `workflow_dispatch`
- Tags starting with `v*` (e.g., `v1.0.0`)

**What it does:**
- Builds web package (`pnpm build:web`)
- Uploads web dist as artifact

**Status:** ✅ Ready - No secrets required

**Note:** For automatic Netlify deployment, you can add Netlify deployment step using `netlify/action` with `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` secrets.

## 3. Build Mobile Workflow (`build-mobile.yml`)
**Trigger:**
- Manual trigger via `workflow_dispatch`
- Tags starting with `v*` (e.g., `v1.0.0`)

**What it does:**
- Builds Android APK using Expo EAS Build
- Requires EAS authentication

**Status:** ⚠️ Requires setup
**Required Secret:**
- `EXPO_TOKEN` - Your Expo access token

**How to get EXPO_TOKEN:**
1. Install EAS CLI: `npm install -g eas-cli`
2. Login: `eas login`
3. Get token: `eas whoami` or create token at https://expo.dev/accounts/[account]/settings/access-tokens

## Setup Instructions

### 1. Generate pnpm-lock.yaml (Required)
Before pushing to GitHub, run:
```bash
pnpm install
```
This will create `pnpm-lock.yaml` which is required for `--frozen-lockfile` to work.

### 2. Add GitHub Secrets (For Mobile Build)
Go to your repository → Settings → Secrets and variables → Actions → New repository secret:
- Add `EXPO_TOKEN` with your Expo access token

### 3. Optional: Add Netlify Deployment
To automatically deploy to Netlify on web build:
1. Add secrets: `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID`
2. Add deployment step to `build-web.yml`:
```yaml
- name: Deploy to Netlify
  uses: netlify/action@master
  env:
    NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
    NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
  with:
    publish-dir: './packages/web/dist'
```

## Workflow Status

| Workflow | Status | Secrets Required | Auto-triggered |
|----------|--------|------------------|----------------|
| CI | ✅ Ready | None | Yes (push/PR) |
| Build Web | ✅ Ready | None | Yes (push to main) |
| Build Mobile | ⚠️ Needs EXPO_TOKEN | EXPO_TOKEN | Manual/Tags |

## Testing Workflows

To test workflows:
1. Push code to trigger CI
2. Push to `main` to trigger web build
3. Go to Actions tab → Run workflow → Select "Build Mobile" for mobile build

