# 02 — The A-Team Operating Model

## Principle: collapse roles, don't just cut them

The traditional roles don't disappear — their *work* gets redistributed between
**generalist A-players** and the **automation platform**. The rule of thumb:

> If a task is repeatable, the platform does it. If it needs judgment, a generalist
> does it. Nobody exists solely to hand work from one specialist to another.

## Before → After

### Before (8 roles, ~6–8 people per engagement)

```
Account Manager ── owns client, upsell
Business Analyst ── gathers requirements, writes BRD
Functional Consultant ── maps processes to Odoo, configures
Project Manager ── timeline, coordination, status
Dev Lead ── architecture, code review
Odoo Developer ── Python/XML custom modules
Frontend Developer ── OWL/JS, portal, website
Tester / QA ── manual testing, UAT
```

### After (3–4 people + platform)

```
┌─────────────────────────────────────────────────────────────┐
│  CEO / PRINCIPAL  (you)                                       │
│  Vision · strategic accounts · partnerships · final close     │
└───────────────┬───────────────────────────────────────────────┘
                │
   ┌────────────┼─────────────────────────────┐
   ▼            ▼                              ▼
SOLUTIONS    SENIOR ODOO ENGINEER         DELIVERY /
ENGINEER     (Tech Lead)                  IMPLEMENTATION
(×1–2)                                    SPECIALIST (×1)
   │            │                              │
   └────────────┴───────────┬──────────────────┘
                            ▼
              ┌──────────────────────────────┐
              │  THE AUTOMATION PLATFORM      │
              │  (the non-human 5th member)   │
              │  demos · scoping · config ·   │
              │  testing · PM · support · AI  │
              └──────────────────────────────┘
```

## Role definitions

### 1. CEO / Principal Consultant — *you*
- Owns vision, brand, and the relationships that close deals.
- Steps into discovery/design only on strategic or large accounts.
- Owns partnerships (Odoo SA partner tier, OCA, referral network).
- Guardian of the productization strategy — says "no" to scope that breaks the model.

### 2. Solutions Engineer (×1–2) — *the front of the house*
**Absorbs:** Account Manager + Business Analyst + pre-sales Functional Consultant + part of PM.

- Qualifies inbound leads (AI chatbot hands off warm ones).
- Runs demos using self-provisioned, industry-specific Odoo instances.
- Leads discovery; the platform transcribes and drafts the scope — they refine and validate.
- Designs the solution: which modules, which templates, what custom work (if any).
- Produces the proposal/SOW from the auto-generated draft.
- Stays the client's primary relationship owner through go-live.

### 3. Senior Odoo Engineer / Tech Lead (×1) — *the engine room*
**Absorbs:** Dev Lead + Odoo Developer + Frontend Developer (amplified by AI + the catalog).

- Owns technical architecture and the **reusable module catalog**.
- Builds custom modules only when the catalog + Studio can't cover it — AI-assisted.
- Owns the automation platform itself: demo provisioning, config-as-code pipelines,
  CI/CD on `odoo.sh`, the internal knowledge base.
- Reviews everything that ships (the one quality gate that stays human).

### 4. Delivery / Implementation Specialist (×1) — *the back of the house*
**Absorbs:** delivery-phase Functional Consultant + Tester/QA + part of PM.

- Executes configuration from the chosen vertical template, tailoring the last mile.
- Runs data migration through the standardized ETL pipelines.
- Orchestrates testing (automated suites + AI-generated UAT scripts) and drives UAT.
- Delivers training (largely pre-built/AI-generated materials) and go-live.
- First line of human support after the AI desk.

### 5. The Automation Platform — *the fifth member*
Not a person, but treated like one: it has an owner (the Engineer), a roadmap, and KPIs.
Detailed in `03-automation-backbone.md`. Every role's leverage comes from here.

## Optional / fractional seats (add only when capacity demands)

- **Ops & Finance** — fractional; largely automated via dogfooded Odoo Accounting/Subscriptions.
- **Second Solutions Engineer** — the first hire when sales becomes the bottleneck.
- **Second Engineer / Delivery Specialist** — added per ~N concurrent projects (see economics).

## How a project flows through the A-Team

```
LEAD ─▶ [AI qualify] ─▶ Solutions Eng DEMO (auto-provisioned) ─▶ DISCOVERY
  │                                                                  │
  │                                          [AI transcript → scope draft]
  ▼                                                                  ▼
PROPOSAL (AI-drafted, SE-refined) ─▶ CLOSE ─▶ CONFIG (template load)
                                                  │
                              Delivery Spec tailors · Engineer custom (if any)
                                                  │
                          [automated tests + AI UAT scripts] ─▶ UAT ─▶ GO-LIVE
                                                  │
                                      [AI support desk] ─▶ human escalation
```

One client, two or three humans, end to end — never a cold handoff between strangers.
