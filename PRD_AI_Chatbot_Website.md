# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## Nala AI — Marketing & Sales Website

**STATUS: DRAFT**

| Metadata | Details |
| --- | --- |
| **Product Name** | Nala AI — Marketing Website |
| **Document Version** | v0.1 (Initial Draft) |
| **Author(s)** | Product Lead |
| **Client / Stakeholder** | Internal / Founder |
| **Date** | 2026-07-31 |
| **Related Documents** | None provided — generated from a brief verbal description of the goal (no MoM/transcript supplied) |

---

# 1. Product Summary & Problem Statement

## 1.1 Problem Statement

The business currently has an AI chatbot product, Nala AI, but no dedicated web presence to explain what it does, demonstrate its value, communicate pricing, or convert interested visitors into leads/customers. Without this site, prospective buyers have no self-serve way to understand the offering, compare pricing tiers, or request a sales conversation — leading to lost inbound interest and an over-reliance on manual, one-off outreach to explain the product.

## 1.2 Proposed Solution & Product Overview

A public-facing marketing/sales **Web Portal** (single responsive website) whose purpose is to showcase Nala AI, not to host the chatbot's actual runtime functionality. Core modules: a Home/Overview page explaining the product and its value proposition, a Features/How-it-Works section, a Pricing page with tiered plans, a "Book a Consultation" CTA/lead-capture flow, and supporting trust-building pages (testimonials/case studies, FAQ, About/Contact). Primary target users are prospective B2B/B2C buyers evaluating an AI chatbot solution, and the business value delivered is increased qualified inbound leads and shortened sales-education time.

---

# 2. Goals & Success Metrics

- **Generate Qualified Leads:** Increase the number of visitors who book a consultation call via the CTA, measured by consultation form submissions per month.
- **Communicate Value Clearly:** Reduce visitor bounce rate on the Overview/Home page by clearly articulating the chatbot's value proposition within the first screen (above the fold).
- **Support Self-Serve Evaluation:** Enable visitors to understand pricing and plan differences without needing to contact sales first, measured by Pricing page engagement (time on page, plan comparisons viewed).

---

# 3. User Personas & Roles

- **Website Visitor (Prospect):** Anonymous or unauthenticated visitor browsing the site to learn about the product, compare pricing, and decide whether to request a consultation. No login required.
- **Lead (Post-Conversion Visitor):** A visitor who has submitted the consultation/contact form; their details are captured for the sales team to follow up.
- **Site Administrator / Marketing Team:** Internal role responsible for updating website content (copy, pricing, testimonials) via a CMS, and reviewing incoming leads.

---

# 4. Product Scope

## 4.1 In-Scope (MVP - Minimum Viable Product)

- **Home / Overview Page:** Hero section explaining the AI chatbot product, key value propositions, and primary CTA.
- **Features / How It Works Page (or Section):** Explains chatbot capabilities and use cases at a high level.
- **Pricing Page:** Tiered pricing plans with feature comparison.
- **Consultation CTA & Lead Capture:** A "Book a Consultation" flow (form and/or scheduling integration) accessible from multiple pages.
- **Contact / FAQ Page:** Basic contact details and answers to common pre-sales questions.
- **Responsive Design:** Fully usable on desktop, tablet, and mobile.

## 4.2 Out-of-Scope (Deferred / Future Phases)

- The AI chatbot's actual product functionality (this PRD covers the marketing website only, not the chatbot application itself).
- User authentication / customer login or account dashboard.
- Self-serve online checkout / payment processing for subscriptions.
- Multi-language / localization support.
- Blog or resource center with full CMS-driven content marketing.

---

# 5. Assumptions, Constraints & Tech Stack Dependencies

## 5.1 Tech Stack & Architectural Dependencies

| Layer | Technology Choice | Rationale / Notes |
| --- | --- | --- |
| **Frontend Framework** | Next.js (React) | SEO-friendly server-side rendering, fast marketing-site performance, easy deployment |
| **Styling** | Tailwind CSS | Rapid, consistent styling for a marketing site |
| **Backend Framework** | Next.js API routes (lightweight) | No complex backend needed for a marketing site; forms/leads handled via API routes |
| **Database System** | PostgreSQL (managed, e.g. Supabase) | Store lead/consultation submissions and testimonials |
| **CMS** | Headless CMS (e.g. Sanity or Contentful) | Allows marketing team to edit copy, pricing, testimonials without a redeploy |
| **Cloud / Hosting** | Vercel | Native fit for Next.js, simple CI/CD |
| **External APIs & Services** | Calendly (or similar) for scheduling, SendGrid for email notifications, Google Analytics / GA4 for tracking, HubSpot or similar CRM for lead sync | Consultation booking, lead follow-up, and marketing analytics |

## 5.2 Technical & Operational Constraints

- No detailed brand guidelines, copy, or final pricing figures were provided — actual content must be supplied by the client before launch.
- No confirmed budget or timeline was discussed.
- No confirmed CRM or scheduling tool preference was provided.

## 5.3 Engineering Assumptions

- Assumed the client wants a single marketing website (not a full web application) since the described purpose is overview + pricing + consultation CTA only.
- Assumed the consultation CTA leads to either an embedded scheduling widget (e.g., Calendly) or a lead-capture form reviewed manually by sales — exact mechanism to be confirmed.
- Assumed pricing will be tiered (e.g., Starter / Pro / Enterprise) as is standard for SaaS/AI chatbot products, pending actual pricing structure from the client.
- Assumed a headless CMS is desired so non-technical staff can update pricing/copy; if not needed, content can be hardcoded to reduce cost.

---

# 6. Functional Requirements

## 6.1 Home / Overview (HOME)

| ID | Functional Requirement | Priority |
| --- | --- | --- |
| **HOME-1** | System shall display a hero section summarizing Nala AI's core value proposition. | **Must Have** |
| **HOME-2** | System shall display a "How It Works" or feature-highlight section describing chatbot capabilities. | **Must Have** |
| **HOME-3** | System shall display a persistent/prominent CTA button ("Book a Consultation") accessible from the Home page. | **Must Have** |
| **HOME-4** | System shall display social proof (logos, testimonials, or stats) on the Home page. | **Should Have** |

## 6.2 Pricing (PRICE)

| ID | Functional Requirement | Priority |
| --- | --- | --- |
| **PRICE-1** | System shall display pricing plans in a comparison table/card layout with plan names, prices, and included features. | **Must Have** |
| **PRICE-2** | Each pricing plan shall include its own CTA (e.g., "Get Started" or "Book a Consultation"). | **Must Have** |
| **PRICE-3** | System shall support a toggle between monthly and annual billing display. | **Should Have** |
| **PRICE-4** | System shall display an FAQ section addressing common pricing questions. | **Should Have** |

## 6.3 Consultation CTA & Lead Capture (CTA)

| ID | Functional Requirement | Priority |
| --- | --- | --- |
| **CTA-1** | System shall provide a consultation request form capturing name, email, company, and message/needs. | **Must Have** |
| **CTA-2** | System shall confirm submission to the user (on-screen confirmation and/or confirmation email). | **Must Have** |
| **CTA-3** | System shall notify the internal sales team (via email or CRM) upon a new consultation submission. | **Must Have** |
| **CTA-4** | System shall optionally support direct calendar scheduling (e.g., embedded Calendly widget) in place of or alongside the form. | **Should Have** |

## 6.4 Content Management (CMS)

| ID | Functional Requirement | Priority |
| --- | --- | --- |
| **CMS-1** | System shall allow an administrator to update pricing, testimonials, and marketing copy without a code deployment. | **Should Have** |
| **CMS-2** | System shall allow an administrator to view submitted leads. | **Should Have** |

---

# 7. Key User Flows

## 7.1 Prospect Requests a Consultation (Happy Path)

1. **User Action:** Visitor lands on the Home page and reviews the product overview.
2. **System Response:** System displays the value proposition and a "Book a Consultation" CTA.
3. **User Action:** Visitor clicks the CTA, fills in the consultation form (name, email, company, needs), and submits.
4. **System Response:** System stores the submission, sends a confirmation to the visitor, and notifies the sales team — *Lead status changes to `"New"`.*

## 7.2 Prospect Compares Pricing Before Converting (Exception / Edge Case Path)

1. **User Action:** Visitor navigates directly to the Pricing page without reading the Home page.
2. **System Response:** System displays plan tiers, features, and pricing with an FAQ section to answer common objections.
3. **Alternative Step:** If the visitor is unsure which plan fits, they click a "Not sure? Talk to us" CTA, which routes to the same consultation form as CTA-1, pre-tagging the lead source as "Pricing Page."

---

# 8. Complete Database Schema & Data Model

## 8.1 Entity Relationship Summary

The core relationship is a simple, low-complexity model: a `Lead` is created from a consultation form submission and optionally references the `PricingPlan` the visitor was viewing when they converted. `Testimonial` and `PricingPlan` are independent, CMS-managed content entities with no direct relational dependency on `Lead`.

## 8.2 Entity Definitions

### 8.2.1 `Lead`
| Field Name | Data Type | Key / Constraints | Description |
| --- | --- | --- | --- |
| `id` | `UUID` | Primary Key | Unique Identifier |
| `full_name` | `VARCHAR` | `NOT NULL` | Name provided by the prospect |
| `email` | `VARCHAR` | `NOT NULL` | Contact email |
| `company` | `VARCHAR` | `OPTIONAL` | Prospect's company name |
| `message` | `TEXT` | `OPTIONAL` | Notes on their needs/use case |
| `source_page` | `VARCHAR` | `OPTIONAL` | Page the lead converted from (e.g., "Home", "Pricing") |
| `pricing_plan_id` | `UUID` | `FOREIGN KEY` | References `PricingPlan(id)`, nullable |
| `status` | `VARCHAR` | `DEFAULT 'New'` | Lead lifecycle status (e.g., New, Contacted, Closed) |
| `[crm_sync_id]` | `VARCHAR` | `OPTIONAL` | *Phase 2 field for CRM synchronization* |
| `created_at` | `TIMESTAMP` | `DEFAULT NOW()` | Record creation timestamp |
| `updated_at` | `TIMESTAMP` | `DEFAULT NOW()` | Record update timestamp |

### 8.2.2 `PricingPlan`
| Field Name | Data Type | Key / Constraints | Description |
| --- | --- | --- | --- |
| `id` | `UUID` | Primary Key | Unique Identifier |
| `name` | `VARCHAR` | `NOT NULL` | Plan name (e.g., Starter, Pro, Enterprise) |
| `price_monthly` | `DECIMAL` | `NOT NULL` | Monthly price |
| `price_annual` | `DECIMAL` | `OPTIONAL` | Annual price (if applicable) |
| `features` | `JSONB` | `NOT NULL` | List of included features |
| `is_featured` | `BOOLEAN` | `DEFAULT FALSE` | Whether to visually highlight this plan |

### 8.2.3 `Testimonial`
| Field Name | Data Type | Key / Constraints | Description |
| --- | --- | --- | --- |
| `id` | `UUID` | Primary Key | Unique Identifier |
| `author_name` | `VARCHAR` | `NOT NULL` | Name of the person quoted |
| `author_role` | `VARCHAR` | `OPTIONAL` | Their role/company |
| `quote` | `TEXT` | `NOT NULL` | Testimonial content |

---

# 9. Non-Functional Requirements (NFRs)

- **Performance & Latency:** Pages should achieve a Largest Contentful Paint (LCP) under 2.5s on standard broadband connections, given this is a conversion-focused marketing site.
- **Security & Authorization:** All form submissions transmitted over HTTPS/TLS; basic spam/bot protection (e.g., reCAPTCHA or honeypot) on the consultation form.
- **Scalability & Load:** Site should comfortably handle traffic spikes from marketing campaigns (e.g., a product launch or ad campaign) without manual intervention, given serverless/CDN-based hosting.
- **Availability & Uptime:** Target 99.9% uptime, consistent with standard managed hosting (e.g., Vercel) SLAs.
- **Data Privacy & Compliance:** Lead data (name, email, company) collected via the consultation form must be handled per applicable privacy regulations (e.g., GDPR if targeting EU visitors), including a privacy policy link near the form.
- **Responsiveness & Mobile Accessibility:** Mobile-first responsive design supporting viewports down to 360px width, since a meaningful share of prospects will browse on mobile.

---

# 10. Third-Party Integrations & External APIs

| Provider / API Name | Purpose / Functionality | Integration Method | Notes / Phase |
| --- | --- | --- | --- |
| **Calendly (or similar)** | Allow prospects to self-schedule a consultation call | Embedded widget / iFrame | **MVP** |
| **SendGrid (or similar)** | Send confirmation emails to leads and notification emails to sales | REST API | **MVP** |
| **Google Analytics (GA4)** | Track visitor behavior and conversion funnel | JS Tag | **MVP** |
| **CRM (e.g., HubSpot)** | Sync captured leads into the sales pipeline | REST API / Webhook | **Future Phase** |

---

# 11. Proposed Features & Future Roadmap

- **Blog / Resource Hub:** A content-marketing section (articles, case studies) to support SEO and inbound traffic growth beyond the MVP.
- **Interactive Product Demo:** An embedded live or sandboxed demo of the actual AI chatbot directly on the website, letting prospects try it before booking a consultation.
- **Self-Serve Checkout:** Allow smaller-tier customers to sign up and pay directly online without a sales call.
- **Multi-language Support:** Localize the site for additional markets/regions.

---

# 12. Open Questions & To Be Decided (TBD)

- [ ] **Brand Guidelines:** Product name is confirmed as **Nala AI** — logo files, color/type specifics, and tone-of-voice guidelines still needed to finalize the website's visual design.
- [ ] **Pricing Structure:** What are the actual plan names, prices, and feature breakdowns? (Currently placeholder/assumed 3-tier model.)
- [ ] **Consultation Mechanism:** Should the CTA use a scheduling tool (e.g., Calendly), a simple lead-capture form, or both?
- [ ] **CRM/Sales Tooling:** Which CRM (if any) should leads be synced to?
- [ ] **Content Ownership:** Who will supply final copy, testimonials, and case studies — client or engineering team drafts placeholders?
- [ ] **Domain & Hosting Ownership:** Does the client already own a domain, and who manages DNS/hosting billing?
- [ ] **Analytics/Marketing Stack:** Any existing marketing tools (e.g., ad pixels, existing GA account) that need to be integrated?
- [ ] **Compliance Scope:** Which regions/regulations (GDPR, CCPA, etc.) apply based on target markets?

---

# 13. Glossary

- **CTA (Call-to-Action):** A prompt (button/link) designed to drive a visitor toward a specific action, such as booking a consultation.
- **Lead:** A prospective customer who has submitted their contact information via the website.
- **MVP (Minimum Viable Product):** The smallest complete version of the website that delivers the core value (overview, pricing, consultation CTA).
- **Headless CMS:** A content management system that stores content separately from the presentation layer, accessed via API — allows non-technical editing without code changes.

---

*This document is a working draft and subject to modification upon further joint review between client stakeholders and the engineering team.*
