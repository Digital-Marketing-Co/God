# World Morals 2629

Evidence-first interactive atlas built from **Universal Moral Code Statistical Atlas Edition XXI**.

## Verified source assertions
- 610 normalized moral teachings
- 52 represented religious systems
- 41 represented nonreligious systems
- 94 total represented systems
- 10,620 evidence mappings in the source workbook

The public static layer ships all 610 moral records and all 94 system classifications. The Prisma schema and deterministic importer scaffold are ready for PostgreSQL. Claim-level evidence should be imported only after source-locator QA; the UI explicitly avoids presenting unreviewed framework mappings as verified quotations.

## Local
```bash
npm install
npm run typecheck
npm run build
```

## Vercel
Import `Digital-Marketing-Co/God` into Vercel. No database is required for the initial static atlas. Add `DATABASE_URL` when enabling the research-admin/evidence database workflow. Set `NEXT_PUBLIC_SITE_URL` to the production origin.

## Editorial safeguard
Corpus frequency is descriptive. It is not a moral-worth score and does not establish that traditions use identical formulations.