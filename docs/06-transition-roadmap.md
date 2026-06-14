# 06 — Transition Roadmap (0 → 12 months)

You cannot flip the model overnight without risking active client work. Transition in
phases: build the assets while the current structure keeps the lights on, then migrate
delivery onto the platform, then right-size the team.

## Guiding rule
> Don't lay people off to chase the org chart. Re-deploy your best people into the new
> seats and let attrition + automation close the gap. The plan is about leverage, not cuts.

---

## Phase 0 — Foundation (Month 0–1)
**Goal: decide, instrument, and pick the first vertical.**
- Lock target verticals (start with the 1–2 you already win most).
- Stand up TechNext's own Odoo (dogfood CRM, Project, Helpdesk, Surveys).
- Create the five repositories (`05-tech-stack.md`).
- Identify which current team members map to the new A-Team seats.
- Baseline today's metrics (project cycle time, gross margin, utilization) so you can
  prove the model worked.

## Phase 1 — First template + demo automation (Month 1–3)
**Goal: prove the 80% can be templated.**
- Build the **first vertical solution template** as config-as-code (`technext-templates`).
- Stand up **one-click demo provisioning** for that vertical.
- Seed the **knowledge base** with Odoo docs + 3–5 past projects; launch the sales chatbot.
- Pilot **AI scope drafting** on real discovery calls (human-validated every time).
- Deliver **one pilot project** using the template end-to-end with a 2-person crew.

## Phase 2 — Delivery & testing automation (Month 3–6)
**Goal: shrink delivery time and remove manual QA.**
- Build **automated test suites** for the catalog + AI-generated UAT scripts.
- Stand up **CI/CD on odoo.sh** for templates and catalog.
- Build the **migration ETL pipelines** for the 2–3 most common source systems.
- Launch **productized Tier 0/1 packages** (`04-productized-offerings.md`).
- Move project management fully onto **dogfooded Odoo Project + client portal**.
- Run 2–3 concurrent projects with the lean crew; measure against the baseline.

## Phase 3 — Sales & support automation (Month 6–9)
**Goal: front and back of house run themselves.**
- Full **AI proposal/CPQ** generation wired into Odoo CRM/Sales.
- Launch **AI-first support desk** + **TechNext Care** subscription.
- Add the **second vertical template** and connector catalog entries.
- Orchestration layer (n8n) wiring deal-won → project spin-up end to end.

## Phase 4 — Scale & right-size (Month 9–12)
**Goal: lock in the steady-state A-Team.**
- Settle into the 3–4 core seats + platform; add a second SE or Engineer **only** when
  metrics show a sustained bottleneck (not before).
- Catalog + templates now cover the majority of incoming work; bespoke is the exception.
- Quarterly review of unit economics; reinvest margin into the platform.
- Publish case studies (from dogfooded data) to feed the inbound funnel.

---

## Sequencing logic
Demo + scoping automation first (they shorten the **sales** cycle and bring cash in),
then delivery + testing (they protect **margin**), then support + scale (they create the
**annuity**). Each phase funds the next.

## Exit criteria per phase (don't advance until met)
- P1: one project delivered from a template by ≤2 people, client satisfied.
- P2: delivery cycle time down ≥30% vs. baseline; QA fully automated for the catalog.
- P3: ≥1 deal sold as a productized package; AI desk deflecting ≥50% of tickets.
- P4: steady-state margin target hit (see `07-economics-and-kpis.md`).
