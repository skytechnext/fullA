# 03 — The Automation Backbone

This is the heart of the strategy. The platform is what lets 3–4 people do the work of
8 roles. Each subsystem below replaces hours of specialist labor. Build them in the
order given in `06-transition-roadmap.md`.

The platform spans **three layers**:

1. **Odoo itself** — Studio, the OCA module ecosystem, config-as-code, `odoo.sh`,
   built-in test framework. We dogfood TechNext's own ops on Odoo.
2. **AI layer** — LLM (Claude) for generation/extraction/Q&A, transcription for calls,
   a RAG knowledge base over Odoo docs + every past project.
3. **Orchestration layer** — n8n / Make to wire events between systems (e.g. "deal won"
   → spin up project, create odoo.sh branch, generate kickoff docs).

---

## A. Sales & Marketing automation

**Replaces:** most of the Account Manager's prospecting/admin and BA's intake work.

- **AI website chatbot** qualifies inbound visitors, answers product questions from the
  RAG knowledge base, and books demos straight into the Solutions Engineer's calendar.
- **CRM = dogfooded Odoo CRM.** Automated lead scoring, nurture email sequences, and
  stage automation. No deal sits without a next action.
- **AI proposal generation.** After discovery, the transcript + selected modules feed a
  templated proposal/SOW generator. The SE edits rather than writes from scratch.
- **CPQ (Configure-Price-Quote).** Productized editions (see `04`) map to standard line
  items; quotes are generated, not hand-built.
- **Content engine.** AI-assisted case studies, comparison pages, and vertical landing
  pages — the dogfooded Odoo instance generates real metrics to publish.

## B. Demo automation

**Replaces:** the functional consultant's manual demo prep.

- **One-click industry demo instances.** Pre-built, fully-populated Odoo databases per
  vertical (manufacturing, retail, professional services, distribution, etc.) stored as
  `odoo.sh` branches or Docker images with demo data.
- A `provision-demo <vertical> <prospect>` script spins a fresh, branded instance in
  minutes — the SE walks the prospect through *their own* industry, not a generic tour.
- Demo instances auto-expire/tear down to control cost.
- Guided demo scripts per vertical are AI-generated and kept in the knowledge base.

## C. Discovery & Scoping automation

**Replaces:** the Business Analyst.

- **Structured discovery questionnaire** (an Odoo Survey) captures the basics before the call.
- **Call transcription** (Whisper / Fireflies-class) on every discovery session.
- **AI scope drafting.** Transcript + questionnaire → draft Business Requirements
  Document, process map, gap list, and a module/feature checklist — in hours, not weeks.
- The SE validates and corrects the draft; the corrected version trains the next one.
- **Fit-gap automation.** AI compares stated requirements against standard Odoo + the
  template library and flags the true custom-dev items (the only place real dev is needed).

## D. Configuration automation (the biggest lever)

**Replaces:** the bulk of the Functional Consultant's clicking.

- **Vertical solution templates.** For each target industry, a versioned, maintained
  package of: installed modules, configured settings, chart of accounts, workflows,
  approval rules, report layouts, and sample master data.
- **Config-as-code.** Settings are shipped as Odoo data files (XML/CSV) inside an
  internal "TechNext base" module, loaded into a new project database deterministically —
  no manual re-clicking, fully version-controlled, diff-able, repeatable.
- **Odoo Studio for the last mile.** Client-specific tweaks (custom fields, screens,
  small automations) done low-code by the Delivery Specialist instead of custom dev.
- **Odoo Automation Rules / server actions** configure in-product business logic
  (auto-assign, escalations, scheduled jobs) without code.

## E. Development automation

**Replaces:** Dev Lead + Developer + Frontend, by shrinking the volume of net-new code.

- **Reusable module catalog** — TechNext's internal "app store" of hardened modules
  built once and reused across clients. Lean on **OCA** modules before building anything.
- **AI-assisted development** (Claude Code et al.) for scaffolding modules, writing
  Python/XML/OWL, and generating boilerplate — the Engineer directs and reviews.
- **CI/CD on `odoo.sh`** — every change runs the test suite on a staging branch before
  it touches production.
- **Code review stays human** — the one non-negotiable quality gate the Tech Lead owns.

## F. Testing & QA automation

**Replaces:** the QA/Tester role.

- **Automated test suites** using Odoo's framework: `TransactionCase`/`SavepointCase`
  for logic, `HttpCase` + JS **tours** for UI flows.
- **AI-generated test cases** from the requirements checklist — every requirement maps
  to a verifiable test.
- **AI-generated UAT scripts** handed to the client as step-by-step acceptance scripts.
- **Regression safety net** — the catalog's tests run on every CI build, so reusing a
  module never silently breaks.

## G. Project management automation

**Replaces:** the dedicated Project Manager.

- **Dogfooded Odoo Project.** Every engagement is a project with templated task lists
  per edition — the plan generates itself from the chosen package.
- **Automated status.** Progress, milestones, and budget burn published to a **client
  portal** automatically — no status meetings to prepare.
- **AI standups / digests.** Daily/weekly summaries generated from task and timesheet
  activity and posted to the team channel and client portal.
- **Orchestration triggers.** "Deal won" auto-creates the project, the odoo.sh branch,
  the kickoff doc, and the client portal access.

## H. Support automation

**Replaces:** tier-1 support headcount.

- **AI support desk** (dogfooded Odoo Helpdesk + LLM) answers from the knowledge base
  and the client's own config docs first.
- **Tiered escalation** — only genuinely novel tickets reach the Delivery Specialist.
- **Self-service** — auto-generated, client-specific documentation and how-to videos
  deflect tickets before they're opened.
- **Continuous learning** — resolved tickets feed back into the knowledge base.

## I. Knowledge base (the connective tissue)

A single RAG knowledge base over: Odoo official docs, OCA module docs, every past
project's scope/config/tickets, and TechNext's playbooks. Powers the sales chatbot,
scope drafting, support desk, and onboarding of new hires. It compounds: every project
makes the next one cheaper to deliver.

---

## What stays human (on purpose)

- The client relationship and trust-building.
- Solution design judgment for the novel 20%.
- Code review and architectural decisions.
- Final sign-off on anything client-facing.
- The empathy in training and change management.

Automation removes the toil, not the judgment.
