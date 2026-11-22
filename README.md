# ArtisanTrust

Trusted artisan marketplace — verified identity, verified location, verified skills.

Stack: Next.js (App Router) + TypeScript + Tailwind + shadcn-style UI · PostgreSQL + Prisma · NextAuth (email/OTP + Google) · Stripe Connect · Supabase Storage · Resend · deploy on Vercel.

## Getting started

    pnpm install
    pnpm db:push && pnpm db:seed
    pnpm dev

## Quality gates

    pnpm test            # vitest
    pnpm typecheck       # tsc --noEmit
    pnpm map:check       # locale key parity (en/fr/es/de)
    pnpm build           # next build

## GitHub auto-commit workflow

`.github/workflows/auto-commit.yml` keeps the repository actively committed on push to main and on a 6-hour schedule (with `[skip ci]` to prevent loops). The job uses `contents: write` permission and `persist-credentials: true`. If the default `GITHUB_TOKEN` cannot trigger downstream CI, store a Personal Access Token as `secrets.GH_PAT` and pass it to `actions/checkout`:

    - uses: actions/checkout@v4
      with:
        token: ${{ secrets.GH_PAT }}
        persist-credentials: true

Reproduce locally with `bash scripts/auto-commit-local.sh`.
