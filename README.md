# Portfolio — Akshaya Niveditha

Minimal React portfolio. All content lives in **`src/data.js`** — that is the
only file you edit for daily updates.

## Run locally

Requires Node.js 18+ (download from nodejs.org).

```bash
npm install     # first time only
npm run dev     # opens http://localhost:5173
```

Edit `src/data.js`, save — the browser refreshes instantly.

## Daily update (2 minutes)

1. Open `src/data.js`
2. Bump the `status` counters (day, shipped, streak)
3. When a project ships: copy the template entry, fill it, paste it at the
   TOP of the `projects` list, set `status: "shipped"`
4. Commit + push — the live site redeploys automatically (see below)

## Deploy — Option A: Vercel (recommended, easiest)

1. Push this folder to a GitHub repo (e.g. `portfolio`)
2. Go to vercel.com → sign in with GitHub → Add New Project → import the repo
3. Framework is auto-detected (Vite). Click Deploy.
4. Done — you get `your-project.vercel.app`, and every future `git push`
   redeploys automatically. You can add a custom domain later.

## Deploy — Option B: GitHub Pages (username.github.io)

1. Push this folder to your `akshayaniveditha.github.io` repo
2. In the repo: Settings → Pages → Source: **GitHub Actions**
3. Add the official "Deploy static content" workflow when prompted, but change
   the upload path to `./dist` and add a build step (`npm ci && npm run build`)
   before it — or simply run `npm run build` locally and push the contents of
   the `dist/` folder to the repo root instead.

Vercel is genuinely simpler; use it unless you specifically want the
`.github.io` address.

## Stack

Vite · React 18 · plain CSS (no framework) · automatic dark mode
