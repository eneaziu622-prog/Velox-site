# VELOX SEO Implementation Handoff
# Site: velox-design.netlify.app
# Last updated: 2026-05-28

---

## HOW TO USE THIS DOCUMENT
This file is a complete SEO implementation guide for the VELOX studio website.
Work through it in order. Each section is self-contained.
After completing a section, mark it [DONE] in the checklist at the top.

---

## MASTER CHECKLIST

### Phase 1 — Critical Technical Fixes (Do Today, ~2–3h)
- [ ] 1.1 Register a custom domain (.al or .com)
- [ ] 1.2 Create robots.txt
- [ ] 1.3 Create sitemap.xml
- [ ] 1.4 Verify site in Google Search Console + submit sitemap
- [ ] 1.5 Create Google My Business listing
- [ ] 1.6 Update all title tags (see Section 3)
- [ ] 1.7 Add all meta descriptions (see Section 3)
- [ ] 1.8 Fix H1 tags on all pages (see Section 3)
- [ ] 1.9 Add JSON-LD schema block (see Section 4)
- [ ] 1.10 Add Open Graph tags (see Section 5)
- [ ] 1.11 Add alt text to all portfolio images (see Section 6)

### Phase 2 — New Pages (One per day)
- [ ] 2.1 Pricing / Packages page
- [ ] 2.2 FAQ page — "Sa kushton nje faqe interneti?"
- [ ] 2.3 Web Design service page
- [ ] 2.4 Branding & Identity service page
- [ ] 2.5 UI/UX Product Design service page
- [ ] 2.6 SEO & Performance service page
- [ ] 2.7 Case study — Optimal Dental
- [ ] 2.8 Case study — The Blackstones Collective
- [ ] 2.9 Blog post — Webflow vs WordPress

### Phase 3 — Later This Month
- [ ] 3.1 English landing page (/en/) targeting "web design Albania"
- [ ] 3.2 Client reviews page with ReviewSchema
- [ ] 3.3 Google Analytics 4 setup
- [ ] 3.4 Get listed on TechBehemoths, Clutch, Dribbble, DesignRush

---

## SECTION 1 — CRITICAL TECHNICAL FIXES

### 1.1 Custom Domain
The site is hosted on `velox-design.netlify.app`. The `.netlify.app` subdomain
carries zero domain authority. Register a custom domain.

Recommended options (in order of preference):
1. `veloxstudio.al` — local authority, Albanian market signal
2. `veloxdesign.al`
3. `veloxstudio.co` or `veloxdesign.co`

Steps:
- Register domain at https://www.albdns.com/ (Albanian .al registrar) or Namecheap
- In Netlify dashboard: Site Settings → Domain Management → Add custom domain
- Netlify will provision SSL automatically

---

### 1.2 robots.txt
Create a file at the root of the site: `/public/robots.txt` (or wherever your
static files live — in Webflow: Settings → SEO → Robots.txt)

Content to use:
```
User-agent: *
Allow: /

Sitemap: https://YOUR-DOMAIN.al/sitemap.xml
```
Replace YOUR-DOMAIN.al with your actual domain once registered.

---

### 1.3 sitemap.xml
If built in Webflow: Settings → SEO → Auto-generate sitemap (enable it).
If built in Next.js: install `next-sitemap` package.
If static site: generate at https://www.xml-sitemaps.com/

Minimum sitemap should include:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://YOUR-DOMAIN.al/</loc><priority>1.0</priority></url>
  <url><loc>https://YOUR-DOMAIN.al/sherbimet</loc><priority>0.9</priority></url>
  <url><loc>https://YOUR-DOMAIN.al/procesi</loc><priority>0.8</priority></url>
  <url><loc>https://YOUR-DOMAIN.al/puna</loc><priority>0.8</priority></url>
  <url><loc>https://YOUR-DOMAIN.al/kontakt</loc><priority>0.7</priority></url>
</urlset>
```
Add new page URLs here each time a new page is published.

---

### 1.4 Google Search Console
- Go to https://search.google.com/search-console
- Add property → enter your domain
- Verify using the HTML tag method (paste meta tag in <head>)
- After verifying: Sitemaps → Submit sitemap URL
- Inspect URL → Request indexing for homepage

---

### 1.5 Google My Business
- Go to https://business.google.com
- Create profile: Business name = "VELOX Studio"
- Category: "Web Designer" (primary), "Graphic Designer" (secondary)
- Address: Tiranë, Albania
- Phone: +355 69 208 1322
- Website: your new custom domain
- Hours: Mon–Fri 09:00–18:00
- Add portfolio photos (at least 5 project screenshots)
- This enables map pack rankings for "web design Tirana" searches

---

## SECTION 2 — CONTENT BRIEF: PRICING PAGE

**URL:** /cmime (or /packages or /paketa)
**Target keyword:** "çmime web design Shqipëri", "sa kushton nje faqe interneti"
**Search intent:** Commercial / Transactional
**Goal:** Let clients self-qualify; reduce time spent on unqualified leads

### Title tag:
`Çmimet e Web Design — Paketa & Kosto | VELOX Studio Tiranë`

### Meta description:
`Shiko çmimet tona transparente për web design, brend dhe UI/UX. Paketa nga 490€ me dorëzim brenda 7 ditëve. Pa surpriza — fillo sot.`

### H1:
`Çmimet tona — të qarta, pa surpriza.`

### Page structure:
```
H1: Çmimet tona — të qarta, pa surpriza.

Intro paragraph (50 words):
  Ne besojmë në transparencë. Më poshtë gjeni paketa të ndryshme sipas
  nevojës suaj — nga faqet e thjeshta prezantuese deri tek zgjidhjet
  komplekse e-commerce. Çdo projekt fillon me një bisedë falas.

--- PACKAGE CARDS ---

Package 1: STARTER
  Price: Nga 490€
  Delivery: 7 ditë
  Includes:
  - Faqe prezantuese (1–5 faqe)
  - Dizajn custom në Webflow
  - Responsive (mobile + desktop)
  - Formular kontakti
  - SEO bazë (meta tags, sitemap)
  - Hosting i parë: 1 vit falas
  CTA: Fillo tani →

Package 2: BUSINESS
  Price: Nga 990€
  Delivery: 10–14 ditë
  Includes:
  - Deri 10 faqe
  - Brend & identitet (logo, ngjyra, tipografi)
  - Animacione & micro-interactions
  - Integrim WhatsApp / CRM
  - SEO on-page i plotë
  - Trajnim 1h për menaxhim
  CTA: Fillo tani →

Package 3: PRODUCT / SAAS
  Price: Me kuotë
  Delivery: Sipas projektit
  Includes:
  - Dashboard & UI kompleks
  - Figma prototyping
  - Next.js development
  - Design system
  - Testim & QA
  CTA: Kërko kuotë →

--- FAQ MINI-SECTION ---
H2: Pyetje të shpeshta mbi çmimet

Q: A ka kosto të fshehura?
A: Jo. Çmimi që dakordësojmë është çmimi final. Hosting dhe domain pas
   vitit të parë janë zakonisht 80–150€/vit.

Q: Mund ta paguaj me këste?
A: Po — 50% në fillim, 50% pas dorëzimit.

Q: Po nëse dua ndryshime pas dorëzimit?
A: Çdo projekt ka 2 raunde revizioni të përfshira. Pas kësaj, ndryshimet
   faturihen me 40€/orë.

CTA Section:
H2: Nuk je i sigurt çfarë ke nevojë?
  "Bisedojmë 15 minuta dhe të japim një kuotë konkrete — pa angazhim."
  Button: Dërgo mesazh në WhatsApp →
```

### Word count target: 400–600 words
### Internal links to add: link to each service page, link to portfolio

---

## SECTION 2B — CONTENT BRIEF: FAQ PAGE

**URL:** /pyetje-te-shpeshta
**Target keyword:** "sa kushton nje faqe interneti", "si funksionon web design"
**Search intent:** Informational (leads to Commercial)
**Goal:** Capture top-of-funnel searchers and move them toward contact

### Title tag:
`Pyetje të Shpeshta mbi Web Design — VELOX Studio Tiranë`

### Meta description:
`Sa kushton nje faqe interneti? Sa zgjat? Çfarë teknologjie përdorim? Gjej përgjigjet e të gjitha pyetjeve rreth web design në Shqipëri.`

### H1:
`Pyetje të shpeshta — gjithçka që duhet të dish`

### Questions to cover (minimum 10):

1. **Sa kushton nje faqe interneti profesionale?**
   Answer: Varet nga kompleksiteti. Faqet tona fillojnë nga 490€ për faqe
   prezantuese dhe rriten me paketa Business dhe SaaS. Shiko çmimet →

2. **Sa kohë zgjat ndërtimi i nje faqe?**
   Answer: Projektet tona standard dorëzohen brenda 7 ditëve pune.
   Projektet më komplekse (e-commerce, SaaS) mund të zgjasin 2–4 javë.

3. **Çfarë teknologjie përdorni?**
   Answer: Webflow, Next.js, dhe WordPress — sipas nevojës së projektit.
   Dizajnet prototipojmë në Figma.

4. **A mund të menaxhoj vetë faqen pas dorëzimit?**
   Answer: Po. Çdo projekt vjen me trajnim 1h dhe udhëzues video.
   Webflow dhe WordPress janë veçanërisht të lehta për t'u menaxhuar.

5. **A përfshihet SEO?**
   Answer: SEO bazë (meta tags, tituj, sitemap, shpejtësi) është i
   përfshirë në çdo paketë. SEO i avancuar (content, link building)
   është shërbim i veçantë.

6. **Çfarë ndodh nëse nuk jam i kënaqur?**
   Answer: Çdo projekt ka 2 raunde revizioni. Qëllimi ynë është që
   rezultati të jetë saktësisht çfarë ke imagjinuar.

7. **A ndërtoni edhe faqe e-commerce?**
   Answer: Po — dyqane online me Webflow Commerce, WooCommerce ose
   Shopify, me integrim pagese dhe menaxhim produktesh.

8. **A ofron VELOX edhe shërbime marketing?**
   Answer: Fokusi ynë është dizajni dhe zhvillimi. Por ofrojmë SEO
   teknik dhe optimizim performancë si shërbim shtesë.

9. **Si fillon nje projekt me VELOX?**
   Answer: Dërgon mesazh në WhatsApp ose email. Bisedojmë 15–20 min
   për nevojat tuaja, pastaj dërgojmë kuotë brenda 24h.

10. **A punoni me klientë jashtë Shqipërisë?**
    Answer: Po — punojmë me klientë nga e gjithë Ballkani dhe diaspora
    shqiptare. Komunikojmë në shqip dhe anglisht.

### Schema to add (FAQ schema):
See Section 4B below.

### Word count target: 600–800 words
### Internal links: link to pricing, portfolio, contact

---

## SECTION 2C — CONTENT BRIEF: WEB DESIGN SERVICE PAGE

**URL:** /sherbimet/web-design
**Target keyword:** "web design profesional Tiranë", "krijim faqe interneti"
**Search intent:** Commercial
**Goal:** Convert visitors searching for a web designer in Tirana

### Title tag:
`Web Design Profesional në Tiranë — Faqe që Konvertojnë | VELOX`

### Meta description:
`Krijojmë faqe interneti profesionale në Tiranë që sjellin klientë të vërtetë. Webflow, Next.js & WordPress. Dorëzim brenda 7 ditëve. Fillo sot.`

### H1:
`Web Design Profesional — Faqe Interneti që Sjellin Klientë`

### Page structure:
```
H1: Web Design Profesional — Faqe Interneti që Sjellin Klientë

Intro (80 words):
  Shumica e faqeve janë të bukura — por nuk shesin. Ne ndërtojmë
  faqe interneti që janë dizajnuar rreth një qëllimi: të kthejnë
  vizitorët në klientë. Çdo element — nga struktura, tek tipografia,
  tek shpejtësia — ka një arsye.

H2: Çfarë përfshin shërbimi ynë i web design

  Feature block 1:
    Dizajn Custom (jo template)
    Çdo faqe ndërtohet nga e para, sipas identitetit dhe qëllimeve
    tuaja të biznesit.

  Feature block 2:
    Responsive për çdo pajisje
    Desktop, tablet, telefon — faqja duket dhe funksionon perfekt
    kudo.

  Feature block 3:
    Shpejtësi & Performancë 100/100
    Faqe të shpejta renditen më lart në Google dhe mbajnë
    vizitorët më gjatë.

  Feature block 4:
    SEO i integruar
    Meta tags, tituj, sitemap, alt text dhe strukturë semantike —
    të gjitha të përfshira.

  Feature block 5:
    Dorëzim brenda 7 ditëve
    Nuk presësh muaj. Faqja jote live brenda një jave.

H2: Teknologjitë që përdorim
  [Webflow] [Next.js] [WordPress] [Figma]
  Zgjedhim teknologjinë sipas nevojës suaj — jo ajo që na vjen
  lehtë neve.

H2: Punët tona (portfolio CTA)
  [Shiko projektet →]

H2: Çmimet
  Paketa nga 490€ — [Shiko të gjitha çmimet →]

H2: Fillo sot
  CTA: Bisedo në WhatsApp →
```

### Word count target: 500–700 words
### Internal links: pricing page, portfolio, FAQ

---

## SECTION 2D — CONTENT BRIEF: BRANDING SERVICE PAGE

**URL:** /sherbimet/brend-identitet
**Target keyword:** "dizajn logo Shqipëri", "brand identity Tiranë"
**Search intent:** Commercial

### Title tag:
`Brend & Identitet Vizual — Logo dhe Dizajn Profesional | VELOX Tiranë`

### Meta description:
`Krijojmë identitete vizuale që dallohen — logo, ngjyra, tipografi, brand guidelines. Dizajn profesional në Tiranë me dorëzim të shpejtë.`

### H1:
`Brend & Identitet — Dizajni që te Ndihet i Ndryshëm`

### Key sections:
- What's included: Logo system, color palette, typography, brand guidelines, business card
- Why brand identity matters for conversion (not just aesthetics)
- Process: Discovery → Concepts → Refinement → Delivery
- Deliverables list (Figma file, SVG, PNG, PDF guidelines)
- CTA → Pricing or WhatsApp

### Word count target: 400–500 words

---

## SECTION 2E — CONTENT BRIEF: UI/UX SERVICE PAGE

**URL:** /sherbimet/ui-ux-design
**Target keyword:** "UI UX design Tiranë", "SaaS design Albania"
**Search intent:** Commercial

### Title tag:
`UI/UX Design — Dashboard, SaaS & App Design | VELOX Studio Tiranë`

### Meta description:
`Dizajnojmë interface për SaaS, dashboard dhe aplikacione mobile. Prototipim në Figma, testim me përdorues, dorëzim i plotë i design system.`

### H1:
`UI/UX Design — Interface që Njerëzit Duan të Përdorin`

### Key sections:
- Services: Dashboards, SaaS interfaces, mobile app design, design systems
- Tools: Figma, prototyping, user flows, component libraries
- Process: Research → Wireframes → Prototype → Handoff
- Portfolio examples (when available)
- CTA

### Word count target: 400–500 words

---

## SECTION 2F — CONTENT BRIEF: CASE STUDY — OPTIMAL DENTAL

**URL:** /puna/optimal-dental
**Target keyword:** "web design klinikë dentare", "Optimal Dental website"
**Search intent:** Navigational + Commercial

### Title tag:
`Optimal Dental — Web Design Case Study | VELOX Studio`

### Meta description:
`Si VELOX ndërtoi faqen e re të Optimal Dental — dizajn modern, shpejtësi 100/100, dhe rritje e rezervimeve online. Lexo case study-n.`

### H1:
`Optimal Dental — Faqe Interneti që Sjell Pacientë`

### Required sections:
1. **Sfondi** — çfarë ishte situata para projektit
2. **Sfida** — çfarë problemi duhej zgjidhur
3. **Zgjidhja** — çfarë ndërtuam dhe pse
4. **Teknologjia** — Webflow / Figma / tjetër
5. **Rezultati** — metrika konkrete nëse ke (shpejtësia, rezervimet, etj.)
6. **Screenshot-e** — para/pas nëse disponohet
7. **CTA** — "Dëshiron rezultate të ngjashme? Fillo →"

---

## SECTION 3 — OPTIMIZED TITLE TAGS & META DESCRIPTIONS

Apply these to every page in your CMS/Webflow/Next.js head.

### Homepage
```
Title:     Faqe Interneti Profesionale Tiranë — VELOX Studio | Web Design në 7 Ditë
           (58 chars ✓)

Meta:      Krijojmë faqe interneti profesionale në Tiranë brenda 7 ditëve.
           Web design, brend & UI/UX që sjell klientë të vërtetë. Fillo sot.
           (155 chars ✓)

H1:        Web Design Profesional në Tiranë
H2 (was H1): Faqja jote e re — gati për 7 ditë.
```

### Services overview page (/sherbimet)
```
Title:     Shërbimet e Web Design — VELOX Studio Tiranë
           (47 chars ✓)

Meta:      Web design, brend & identitet, UI/UX dhe SEO profesional në
           Tiranë. Dorëzim brenda 7 ditëve. Shiko të gjitha shërbimet tona.
           (148 chars ✓)

H1:        Shërbimet tona — gjithçka që i duhet biznesit tuaj online
```

### Portfolio page (/puna)
```
Title:     Portofolio — Projektet tona të Web Design | VELOX Studio
           (57 chars ✓)

Meta:      Shiko punën tonë — faqe interneti, identitete vizuale dhe
           interface për klientë shqiptarë dhe ndërkombëtarë. Realizuar nga VELOX.
           (154 chars ✓)

H1:        Puna jonë — projekte që flasin vetë
```

### Process page (/procesi)
```
Title:     Si Punojmë — Procesi ynë i Web Design | VELOX Studio Tiranë
           (62 chars ✓)

Meta:      Nga biseda e parë deri tek faqja live — ja si funksionon
           procesi ynë transparent me dorëzim brenda 7 ditëve.
           (126 chars ✓)

H1:        Procesi ynë — transparent nga hapi i parë
```

### Contact page (/kontakt)
```
Title:     Kontakt — Fillo Projektin tënd | VELOX Studio Tiranë
           (53 chars ✓)

Meta:      Dërgo mesazh në WhatsApp ose email dhe merr kuotë brenda
           24h. Pa angazhim — vetëm një bisedë e shkurtër për nevojat tuaja.
           (152 chars ✓)

H1:        Fillo me një bisedë. Pa angazhim.
```

### Pricing page (/cmime) — NEW
```
Title:     Çmimet e Web Design — Paketa & Kosto | VELOX Studio Tiranë
           (59 chars ✓)

Meta:      Shiko çmimet tona transparente për web design, brend dhe
           UI/UX. Paketa nga 490€ me dorëzim brenda 7 ditëve. Pa surpriza.
           (145 chars ✓)

H1:        Çmimet tona — të qarta, pa surpriza.
```

### FAQ page (/pyetje-te-shpeshta) — NEW
```
Title:     Pyetje të Shpeshta mbi Web Design — VELOX Studio Tiranë
           (56 chars ✓)

Meta:      Sa kushton nje faqe interneti? Sa zgjat? Çfarë teknologjie
           përdorim? Gjej përgjigjet e të gjitha pyetjeve rreth web design.
           (148 chars ✓)

H1:        Pyetje të shpeshta — gjithçka që duhet të dish
```

### Web Design service page (/sherbimet/web-design) — NEW
```
Title:     Web Design Profesional në Tiranë — Faqe që Konvertojnë | VELOX
           (64 chars ✓)

Meta:      Krijojmë faqe interneti profesionale në Tiranë që sjellin
           klientë. Webflow, Next.js & WordPress. Dorëzim brenda 7 ditëve.
           (145 chars ✓)

H1:        Web Design Profesional — Faqe Interneti që Sjellin Klientë
```

### Branding service page (/sherbimet/brend-identitet) — NEW
```
Title:     Brend & Identitet Vizual — Logo dhe Dizajn Profesional | VELOX
           (63 chars ✓)

Meta:      Krijojmë identitete vizuale që dallohen — logo, ngjyra,
           tipografi, brand guidelines. Dizajn profesional me dorëzim të shpejtë.
           (154 chars ✓)

H1:        Brend & Identitet — Dizajni që te Ndihet i Ndryshëm
```

### UI/UX service page (/sherbimet/ui-ux-design) — NEW
```
Title:     UI/UX Design — Dashboard, SaaS & App Design | VELOX Studio Tiranë
           (67 chars — borderline, trim if needed)

Meta:      Dizajnojmë interface për SaaS, dashboard dhe aplikacione
           mobile. Prototipim Figma, design system dhe dorëzim i plotë.
           (136 chars ✓)

H1:        UI/UX Design — Interface që Njerëzit Duan të Përdorin
```

---

## SECTION 4 — JSON-LD SCHEMA MARKUP

Paste this block inside the `<head>` of every page (update the domain).

### 4A — LocalBusiness + WebDesign schema (all pages)
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "name": "VELOX Studio",
  "url": "https://YOUR-DOMAIN.al",
  "logo": "https://YOUR-DOMAIN.al/logo.png",
  "image": "https://YOUR-DOMAIN.al/og-image.jpg",
  "description": "Studio web design profesional në Tiranë. Dizajn, brend, UI/UX dhe SEO me dorëzim brenda 7 ditëve.",
  "telephone": "+355692081322",
  "email": "eneaziu622@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tiranë",
    "addressCountry": "AL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "41.3275",
    "longitude": "19.8187"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "€€",
  "foundingDate": "2022",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": 1
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Shërbimet e VELOX Studio",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Design Profesional",
          "description": "Krijim faqe interneti profesionale me Webflow, Next.js dhe WordPress"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brend & Identitet Vizual",
          "description": "Logo, sistemet e ngjyrave, tipografia dhe brand guidelines"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UI/UX Product Design",
          "description": "Dashboard, SaaS interface dhe dizajn aplikacionesh mobile"
        }
      }
    ]
  },
  "sameAs": [
    "https://wa.me/355692081322"
  ]
}
</script>
```

### 4B — FAQ Schema (for FAQ page and homepage FAQ section)
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Sa kushton nje faqe interneti profesionale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Faqet tona fillojnë nga 490€ për faqe prezantuese. Paketat Business fillojnë nga 990€ dhe projektet SaaS kuotohen individualisht."
      }
    },
    {
      "@type": "Question",
      "name": "Sa kohë zgjat ndërtimi i nje faqe interneti?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Projektet tona standard dorëzohen brenda 7 ditëve pune. Projektet e-commerce ose SaaS mund të zgjasin 2–4 javë."
      }
    },
    {
      "@type": "Question",
      "name": "Çfarë teknologjie përdorni për web design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Punojmë me Webflow, Next.js dhe WordPress. Prototipimet bëhen në Figma. Teknologjia zgjidhet sipas nevojës tuaj."
      }
    },
    {
      "@type": "Question",
      "name": "A përfshihet SEO në çmim?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Po — SEO bazë (meta tags, sitemap, shpejtësi, strukturë) është i përfshirë në çdo paketë."
      }
    },
    {
      "@type": "Question",
      "name": "A mund të menaxhoj vetë faqen pas dorëzimit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Po. Çdo projekt vjen me trajnim 1 orë dhe udhëzues video."
      }
    }
  ]
}
</script>
```

### 4C — BreadcrumbList Schema (for service sub-pages)
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Kryefaqja",
      "item": "https://YOUR-DOMAIN.al/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Shërbimet",
      "item": "https://YOUR-DOMAIN.al/sherbimet"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Web Design",
      "item": "https://YOUR-DOMAIN.al/sherbimet/web-design"
    }
  ]
}
</script>
```
Update `position 3` name and item for each service page.

---

## SECTION 5 — OPEN GRAPH & TWITTER CARD TAGS

Paste these in the `<head>` of every page. Update per-page values where noted.

```html
<!-- Open Graph (Facebook, LinkedIn, WhatsApp previews) -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="VELOX Studio" />
<meta property="og:locale" content="sq_AL" />

<!-- Update these per page: -->
<meta property="og:title" content="[PAGE TITLE HERE]" />
<meta property="og:description" content="[PAGE META DESCRIPTION HERE]" />
<meta property="og:url" content="https://YOUR-DOMAIN.al/[PAGE-URL]" />
<meta property="og:image" content="https://YOUR-DOMAIN.al/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[PAGE TITLE HERE]" />
<meta name="twitter:description" content="[PAGE META DESCRIPTION HERE]" />
<meta name="twitter:image" content="https://YOUR-DOMAIN.al/og-image.jpg" />
```

**OG Image requirements:**
- Create one image: 1200×630px
- Include VELOX logo + tagline "Web Design Profesional · Tiranë"
- Dark background works well with your brand aesthetic
- Save as `/public/og-image.jpg`

---

## SECTION 6 — IMAGE ALT TEXT GUIDELINES

All images on the site need descriptive alt text. Here are the rules:

**Format:**
- Portfolio images: `[Project name] — web design nga VELOX Studio, Tiranë`
- Logo: `VELOX Studio logo — web design profesional Tiranë`
- Process/UI screenshots: `[What it shows] — [context]`
- Team/office photos: `[What/who is shown], studio VELOX Tiranë`

**Examples:**
```html
<img src="optimal-dental.jpg"
     alt="Optimal Dental — faqe interneti e dizajnuar nga VELOX Studio, Tiranë" />

<img src="blackstones.jpg"
     alt="The Blackstones Collective — web design dhe brend nga VELOX Studio" />

<img src="logo.svg"
     alt="VELOX Studio — web design profesional Tiranë" />
```

Do NOT use: `image1.jpg`, `screenshot`, `photo`, or empty alt="" on non-decorative images.
Use empty alt="" ONLY for purely decorative images (backgrounds, dividers).

---

## SECTION 7 — INTERNAL LINKING MAP

Every page should link to at least 2–3 other pages. Follow this map:

```
Homepage
  → Shërbimet (services overview)
  → Puna (portfolio)
  → Çmimet (pricing)
  → Kontakt

Shërbimet
  → /sherbimet/web-design
  → /sherbimet/brend-identitet
  → /sherbimet/ui-ux-design
  → Çmimet

Web Design service page
  → Çmimet
  → Puna (portfolio with web design examples)
  → Pyetje të shpeshta
  → Kontakt

Çmimet
  → each service page
  → Kontakt
  → Pyetje të shpeshta

Pyetje të shpeshta
  → Çmimet
  → Kontakt
  → Puna

Portfolio / case studies
  → Relevant service page
  → Kontakt
```

---

## SECTION 8 — BLOG POST BRIEF (FIRST POST)

**URL:** /blog/webflow-vs-wordpress-cfare-te-zgjedhesh
**Target keyword:** "Webflow vs WordPress Shqipëri"
**Search intent:** Informational
**Goal:** Capture early-funnel visitors researching their options

### Title tag:
`Webflow vs WordPress — Çfarë të Zgjedhësh për Faqen Tënde? | VELOX`

### Meta description:
`Webflow apo WordPress? Krahasojmë shpejtësinë, lehtësinë, çmimin dhe SEO-n — dhe të tregojmë cilën zgjedhim ne dhe pse. Lexo para se të vendosësh.`

### H1:
`Webflow vs WordPress — Krahasimi i Sinqertë`

### Structure:
```
Intro (why this question matters for Albanian businesses)

H2: Çfarë është Webflow?
H2: Çfarë është WordPress?
H2: Krahasimi drejtpërsëdrejti
  - Shpejtësia & performanca
  - Lehtësia e përdorimit
  - SEO
  - Çmimi
  - Siguria & mirëmbajtja
  - Fleksibiliteti

H2: Kur të zgjedhësh Webflow
H2: Kur të zgjedhësh WordPress
H2: Çfarë zgjedhim ne në VELOX dhe pse
  (This section establishes expertise + trust)

CTA: "Nuk je i sigurt? Tregona projektin tënd dhe të rekomandojmë teknologjinë e duhur."
  Button: Fillo bisedën →
```

### Word count target: 800–1200 words
### Publish date target: Day 9 of implementation

---

## SECTION 9 — QUICK REFERENCE: IMPLEMENTATION ORDER

```
Day 1 (Today):
  ✓ Buy custom domain
  ✓ Add domain to Netlify
  ✓ Create robots.txt
  ✓ Create sitemap.xml
  ✓ Update all title tags (Section 3)
  ✓ Add all meta descriptions (Section 3)
  ✓ Fix H1 tags (Section 3)
  ✓ Add LocalBusiness schema (Section 4A)
  ✓ Add OG tags (Section 5)
  ✓ Add image alt text (Section 6)
  ✓ Verify in Google Search Console
  ✓ Create Google My Business

Day 2:
  ✓ Build Pricing page (Section 2, brief above)
  ✓ Add to sitemap
  ✓ Add FAQ schema to pricing page

Day 3:
  ✓ Build FAQ page (Section 2B)
  ✓ Add FAQ schema (Section 4B)
  ✓ Add to sitemap

Day 4:
  ✓ Build Web Design service page (Section 2C)
  ✓ Add Breadcrumb schema (Section 4C)
  ✓ Add to sitemap

Day 5:
  ✓ Build Branding service page (Section 2D)
  ✓ Add to sitemap

Day 6:
  ✓ Build UI/UX service page (Section 2E)
  ✓ Add to sitemap

Day 7:
  ✓ Build Optimal Dental case study (Section 2F)
  ✓ Add to sitemap

Day 8:
  ✓ Review all pages, fix any broken internal links
  ✓ Re-submit sitemap in Google Search Console

Day 9+:
  ✓ Write Webflow vs WordPress blog post (Section 8)
  ✓ Get listed on TechBehemoths, Clutch, DesignRush
  ✓ Build English landing page /en/
```

---

## NOTES FOR CLAUDE CODE

When implementing, do NOT:
- Change the visual design or component layout
- Remove any existing Albanian copy unless replacing it with the new H1s listed above
- Delete existing sections — only add/update meta tags and schema

When implementing, DO:
- Add all <head> tags exactly as written in Sections 3, 4, 5
- Replace "YOUR-DOMAIN.al" with the actual registered domain everywhere
- Create new pages as separate routes following the URLs specified
- Use the exact title tags and meta descriptions from Section 3
- Follow the content structures in Section 2 when writing new pages
- Add the internal links from Section 7 to existing pages

Stack-specific notes:
- If Webflow: use Page Settings for title/meta, Custom Code tab for JSON-LD
- If Next.js: add tags via next/head or Next 13+ metadata API
- If the stack is unclear, check package.json and ask before proceeding
