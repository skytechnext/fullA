# 08 — Risks & Mitigations

A lean, automated model concentrates both leverage and risk. Name the failure modes and
design guardrails before they bite.

| # | Risk | Why it matters | Mitigation |
| --- | --- | --- | --- |
| 1 | **Key-person dependency** | 3–4 people means one departure is a crisis | Document everything in the knowledge base; cross-train across seats; the platform encodes know-how so it doesn't all live in heads; retention via equity/profit-share |
| 2 | **Automation produces wrong output** | AI scope/proposal/test errors reach clients | Human validation gate on every client-facing artifact; track AI correction rates; never auto-send to clients without sign-off |
| 3 | **Over-templating loses the deal** | Forcing every client into a template alienates the complex ones | Tier 2 bespoke track exists by design; SE judgment decides fit early |
| 4 | **Quality perception** | Buyers may distrust "small team + AI" vs. a big agency | Lead with case studies, dogfooded proof, fixed-price guarantees, and faster go-live as the *selling* point |
| 5 | **Template/catalog rot** | Odoo version upgrades break reused assets | CI test suites on every catalog module; scheduled upgrade cycles; OCA-first to inherit community maintenance |
| 6 | **Margin illusion** | Platform build cost hidden; "free" automation isn't | Track platform cost as % of revenue (`07`); treat the platform as a budgeted product |
| 7 | **Capacity cliff** | A tiny team can be overwhelmed by a sales spike | Productized pipeline = predictable load; clear hire triggers; a vetted contractor bench for surges |
| 8 | **Vendor/AI dependency** | LLM API or tool pricing/availability changes | Abstract the LLM behind an internal interface; keep prompts/playbooks portable; avoid lock-in on commodity layers |
| 9 | **Data security & client confidentiality** | AI processing of client data, demo data leakage | Data handling policy; scrub PII before LLM calls where feasible; isolated demo instances with auto-teardown; clear DPA terms |
| 10 | **Change resistance (internal)** | Current specialists may resist the new model | Frame as upskilling into higher-value generalist roles; involve them in building the platform; transparent transition plan |
| 11 | **Scope creep within fixed price** | Productized deals bleed margin if scope isn't held | Tight SOWs, "customization credits," and a disciplined change-order process; the Principal guards the line |
| 12 | **Single-cloud / odoo.sh dependency** | Hosting outage or policy change | Maintain export/portability of config-as-code; documented DR; the config-as-code repo is the source of truth, not any one environment |

## Two guardrails worth stating loudly
- **The human sign-off gate is non-negotiable.** Automation drafts; humans approve
  anything a client sees. This is what protects the brand while moving fast.
- **The knowledge base is the company's memory.** If it isn't written down and fed to the
  platform, it doesn't scale and it walks out the door when someone leaves. Treat
  documentation as core delivery work, not overhead.
