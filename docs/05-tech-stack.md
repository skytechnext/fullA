# 05 — Technology Stack

The concrete toolchain behind the automation backbone. Favor **dogfooding Odoo** wherever
Odoo has a module — it's free marketing, free QA, and a live reference for prospects.

## Core platform
- **Odoo** (Enterprise where the client needs it; OCA/Community where it fits) — the product.
- **`odoo.sh`** — hosting, staging branches, CI/CD, the home of demo & project branches.
- **Odoo Studio** — low-code last-mile customization (avoids custom dev).
- **OCA modules** — community-maintained building blocks; check here before building.

## TechNext runs on Odoo (dogfooding)
| Function | Odoo app |
| --- | --- |
| CRM / pipeline | Odoo CRM |
| Quotes / CPQ | Odoo Sales |
| Project delivery | Odoo Project |
| Support | Odoo Helpdesk |
| Discovery questionnaires | Odoo Surveys |
| Recurring revenue | Odoo Subscriptions |
| Billing / books | Odoo Accounting + Invoicing |
| Internal docs/training | Odoo Knowledge |

## AI layer
- **LLM (Claude)** — scope drafting, proposal generation, test-case & UAT generation,
  support answers, code assistance, documentation. Use the latest, most capable Claude
  models for production-quality output.
- **Claude Code** — AI-assisted module development and the catalog's tooling.
- **Transcription** — Whisper-class / Fireflies for discovery & demo calls.
- **RAG knowledge base** — vector store over Odoo docs, OCA docs, and every past project;
  serves the chatbot, scope drafting, and support desk.

## Orchestration & glue
- **n8n** (self-hostable, cost-friendly) or **Make/Zapier** — event wiring across systems
  ("deal won" → provision project + branch + kickoff docs + portal access).
- **Demo provisioning** — scripts/Docker images per vertical, or templated odoo.sh branches.

## Engineering
- **Git / GitHub** — source control for the reusable module catalog and config-as-code.
- **GitHub Actions / odoo.sh CI** — run Odoo's test framework on every change.
- **Odoo test framework** — `TransactionCase`, `HttpCase`, JS tours for automated QA.
- **Config-as-code** — internal "TechNext base" module shipping settings as XML/CSV data.

## Repositories TechNext should maintain
1. `technext-base` — config-as-code + shared settings module.
2. `technext-catalog` — the reusable internal module "app store."
3. `technext-templates` — per-vertical solution packages (modules + data + demo seed).
4. `technext-automations` — n8n workflows, provisioning scripts, AI prompt library.
5. `technext-playbooks` — the knowledge base source (markdown), feeding RAG.

## Build vs. buy guidance
- **Buy/adopt** anything commodity (hosting, transcription, orchestration, LLM API).
- **Build** only the assets that compound and differentiate: the templates, the catalog,
  the prompt/playbook library, the provisioning automation. These are TechNext's moat.
