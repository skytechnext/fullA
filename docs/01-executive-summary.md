# 01 — Executive Summary

## The thesis

Odoo implementation work is **80% repeatable and 20% bespoke**. The traditional
agency model staffs every project as if it were 100% bespoke — an account manager,
a business analyst, a functional consultant, a project manager, a dev lead, an Odoo
developer, a frontend developer, and testers. Eight handoffs, eight calendars, eight
salaries, and a coordination tax that eats the margin.

TechNext's advantage is to attack the 80%. We pre-build it, template it, and automate
it — so that a **small team of A-players plus an automation platform** delivers what
the eight-person pyramid delivered, faster and at far higher margin. The humans focus
their judgment on the 20% that actually requires it: the client relationship, the
genuinely novel process, the tricky integration, the close.

## What changes

| | Traditional model | TechNext A-Team model |
| --- | --- | --- |
| People per engagement | 6–8 specialists | 2–3 generalists + platform |
| Handoffs | Account Mgr → BA → Functional → PM → Dev Lead → Dev → Frontend → QA | Solutions Engineer ↔ Engineer ↔ Delivery, all sharing one system |
| Pre-sales | Manual decks, manual demos | Self-provisioning industry demo instances; AI-built proposals |
| Requirements | BA writes a spec over weeks | Discovery call → AI transcript → auto-drafted scope in hours |
| Configuration | Functional consultant clicks through every setting | Versioned vertical templates loaded as config-as-code |
| Custom dev | Dev lead + devs from scratch | Reusable module catalog + AI-assisted development |
| Testing | Manual QA team | Automated test suites + AI-generated UAT scripts |
| Project mgmt | Dedicated PM, status meetings | Dogfooded Odoo Project + automated status to a client portal |
| Support | Tiered human desk | AI desk first, human escalation |
| Pricing | Time & materials, scope creep | Productized fixed-scope "editions" |

## The team (detail in `02-operating-model.md`)

1. **CEO / Principal** (you) — vision, strategic accounts, partnerships, final close.
2. **Solutions Engineer** ×1–2 — owns lead → demo → discovery → solution design → proposal.
3. **Senior Odoo Engineer (Tech Lead)** ×1 — architecture, custom dev, the automation platform itself.
4. **Delivery / Implementation Specialist** ×1 — config, migration, testing, training, go-live, support.
5. **The Automation Platform** — the non-human "fifth member" every role leans on.

## Why now

- AI coding and writing assistants make a senior generalist 3–5× more productive on
  exactly the work that used to require junior specialists (spec writing, config docs,
  test cases, boilerplate modules, support answers).
- Odoo's own low-code surface (Studio), module ecosystem (OCA), and `odoo.sh` CI/CD
  mean most "development" is now assembly and configuration, not greenfield coding.
- Buyers increasingly prefer fixed-price, fast-to-value packages over open-ended
  consulting engagements — which is exactly what a templated, automated shop can sell.

## Stated assumptions (tune to reality)

- TechNext today runs projects with the 8-role structure described and wants to reach
  a steady state of **3–4 core people** handling the full lifecycle.
- Target client profile is **SMB to lower-mid-market** (10–250 employees) — the segment
  where templating and productization pay off most. Large bespoke enterprise deals can
  still be taken selectively and staffed up temporarily.
- We are willing to invest ~1 quarter of focused effort building the reusable assets
  (templates, catalog, automations) before harvesting the leverage.
- We will run TechNext itself on Odoo ("dogfooding") so every internal workflow doubles
  as a reference implementation and a sales asset.

> Every figure in `07-economics-and-kpis.md` is illustrative. Replace with TechNext's
> real revenue, headcount, and cost numbers to pressure-test the model.
