# SchemeSaathi — Indian Government Benefits Discovery Platform

[![Live Website](https://img.shields.io/badge/Live_Website-sathischeme.netlify.app-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://sathischeme.netlify.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![PWA Ready](https://img.shields.io/badge/PWA-Installable-purple?style=flat&logo=pwa)](https://sathischeme.netlify.app/)

> ### 🌐 Live Application
> **Official Live Website:** **[https://sathischeme.netlify.app/](https://sathischeme.netlify.app/)**  
> *Fully responsive civic platform with PWA mobile installation & direct verified government portal routing.*

An independent, third-party civic-technology platform designed to help Indian citizens discover Central and State Government schemes they may be eligible for — with **zero document collection**, transparent criteria scoring, and unblockable direct redirection to official `.gov.in` and `.nic.in` portals.

---

## 🏗️ Architecture

The SchemeSaathi architecture is engineered for dual-mode execution: instantaneous sub-50ms static delivery via Netlify Global Edge CDN, client-side zero-knowledge eligibility matching engine, and progressive web application (PWA) offline synchronization with verified routing to official Central & State Government portals.

### High-Level Flow

```mermaid
flowchart TD
    Client(["Citizen / Client Browser (PWA)"]):::clientNode
    
    Client -->|"HTTPS Request / PWA Launch"| Gateway["Netlify Edge CDN & Hosting Gateway<br/>(sathischeme.netlify.app)"]:::gatewayNode
    
    Gateway -->|"Sub-50ms Static Delivery"| StaticPages["Pre-rendered Static Pages (SSG)<br/>Home, Categories, Schemes Directory"]:::boxNode
    Gateway -->|"PWA Shell & Assets"| ServiceWorker["Service Worker & Cache Storage<br/>(sw.js & manifest.json)"]:::boxNode
    
    StaticPages --> Client
    ServiceWorker -.->|"Offline Fallback & Instant Cache"| Client
    
    Client -->|"Input Criteria (Age, State, Income, Category)"| Engine["Client-Side Matching Engine<br/>(lib/eligibility.ts)"]:::engineNode
    
    Engine -->|"Zero-Knowledge Local Evaluation"| Decision{"Eligibility Score<br/>Evaluation Status?"}:::decisionNode
    
    Decision -->|"Match Score >= 60%"| SuccessBox["Render Interactive Scheme Cards<br/>& Personalized Match Score"]:::successNode
    Decision -->|"Missing Input / Ineligible"| ErrorBox["Trigger Inline Guidance &<br/>Broad Category Exploration"]:::errorNode
    
    SuccessBox -->|"Citizen clicks 'Official Portal'"| Outbound["Native Direct Link Routing<br/>(target='_blank' rel='noopener')"]:::boxNode
    
    Outbound --> GovPortal[("Verified Government Portal<br/>(.gov.in / .nic.in / myScheme)")]:::govNode

    classDef clientNode fill:#2563eb,stroke:#60a5fa,stroke-width:2px,color:#ffffff,font-weight:bold;
    classDef gatewayNode fill:#1e293b,stroke:#64748b,stroke-width:2px,color:#f8fafc;
    classDef boxNode fill:#1e293b,stroke:#475569,stroke-width:1px,color:#f1f5f9;
    classDef engineNode fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#f8fafc;
    classDef decisionNode fill:#1e293b,stroke:#94a3b8,stroke-width:2px,color:#f8fafc;
    classDef successNode fill:#059669,stroke:#34d399,stroke-width:2px,color:#ffffff,font-weight:bold;
    classDef errorNode fill:#e11d48,stroke:#f43f5e,stroke-width:2px,color:#ffffff,font-weight:bold;
    classDef govNode fill:#0284c7,stroke:#38bdf8,stroke-width:2px,color:#ffffff,font-weight:bold;
```

### Component & Execution Flow

```mermaid
sequenceDiagram
    autonumber
    actor Citizen as Citizen / User
    participant Frontend as Frontend PWA (Next.js)
    participant CDN as Netlify Edge CDN
    participant Engine as Local Rules Engine
    participant GovPortal as Official Govt Portal (.gov.in)

    Citizen->>CDN: GET /find-schemes (HTTPS)
    CDN-->>Citizen: HTTP 200 (Static HTML, CSS & Client JS)
    
    Note over Citizen,Frontend: Service Worker caches static shell & assets for offline PWA access

    Citizen->>Frontend: Enter Profile Data (State: Bihar, Occupation: Student, Age: 20)
    Frontend->>Engine: evaluateEligibility(profile, schemesDataset)
    
    Note over Engine: Zero-Document Processing: Local algorithmic scoring without server transmission
    
    Engine-->>Frontend: Return MatchResults [Score: 92%, MatchedCriteria: [...]]
    
    Frontend->>Frontend: UI Transition to Ranked Results State
    Frontend-->>Citizen: Display Scheme Cards (Post-Matric Scholarship, Credit Card)
    
    Citizen->>Frontend: Click "Official Portal" on Verified Card
    Frontend->>GovPortal: Native Direct Navigation (target="_blank", rel="noopener")
    GovPortal-->>Citizen: Official Department Portal Loaded (scholarships.gov.in)
```

---

## 🌟 Key Architecture Highlights

- **🔒 Zero-Knowledge Civic Privacy:** No collection or remote storage of Aadhaar numbers, PAN, bank credentials, phone numbers, or uploaded documents. All eligibility scoring runs strictly client-side.
- **⚡ 100% Static HTML Pre-Rendering:** All scheme profiles, directory filters, and taxonomy categories are pre-generated at compile time (`output: "export"`) with `generateStaticParams()`.
- **📱 Progressive Web App (PWA):** Installs seamlessly on Android, iOS, and Desktop devices with service worker caching (`sw.js`), Web App Manifest (`manifest.json`), and custom adaptive maskable icons.
- **🔗 Unblockable Official Redirection:** Built with native target navigation to prevent mobile popup blockers from preventing citizen access to `.gov.in` and `.nic.in` portals.
- **🌐 15 Verified Live Government Schemes:** Fully tested and updated endpoint links for PM-KISAN, Ayushman Bharat PM-JAY, PMAY-G, Mudra Yojana, PMKVY, Sukanya Samriddhi, and State initiatives.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 16.3.8 (App Router, Static Export) |
| **Library** | React 19.2.8 |
| **Styling** | Tailwind CSS v4, Vanilla CSS Custom Variables |
| **Icons** | Lucide React |
| **PWA & Offline** | Service Worker Cache API, Web App Manifest |
| **Hosting & CDN** | Netlify Global Edge Network |
| **Language** | TypeScript 5 |

---

## 📂 Repository Structure

```
.
├── netlify.toml                        # Root Netlify configuration (base = "schemesaathi")
├── README.md                           # Main architecture & repository documentation
└── schemesaathi/                       # Next.js Application Root
    ├── app/                            # App Router Routes & Static Pages
    │   ├── categories/                 # Scheme Taxonomy & Category Pages
    │   ├── central-schemes/            # Central Government Schemes
    │   ├── compare/                    # Side-by-Side Scheme Comparison
    │   ├── find-schemes/               # 4-Step Eligibility Wizard
    │   ├── results/                    # Search & Dynamic Filter Directory
    │   ├── scheme/[id]/                # Static SSG Individual Scheme Details
    │   ├── state-schemes/              # 36 States & UTs Directory
    │   ├── layout.tsx                  # Root layout with PWA Meta & Providers
    │   └── page.tsx                    # Landing Page
    ├── components/                     # Reusable Civic UI Components
    │   ├── EligibilityWizard.tsx       # Multi-Step Criteria Form
    │   ├── ExternalLinkModal.tsx       # Official Portal Warning Dialog
    │   ├── PwaRegister.tsx             # Service Worker Registration & Install Banner
    │   └── SchemeCard.tsx              # Interactive Scheme Card
    ├── data/                           # Verified Schemes & Taxonomy Datasets
    ├── lib/                            # Matching Algorithm & Bilingual Context
    ├── public/                         # PWA Icons, Manifest, SW & Netlify Redirects
    │   ├── manifest.json               # Web App Manifest
    │   ├── sw.js                       # Service Worker for PWA
    │   └── _redirects                  # SPA & 404 Routing Rules
    ├── netlify.toml                    # Subdirectory Netlify Build Configuration
    └── package.json                    # Project dependencies & build scripts
```

---

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/Shivaniroy09/SchemeSathi-Ai-Project.git
cd SchemeSathi-Ai-Project/schemesaathi
npm install
```

### 2. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Build & Static Export
```bash
npm run build
```
Generates pure static assets into `schemesaathi/out/`.

### 4. Create Netlify Deployment Zip
```bash
npm run build:zip
```
Compiles the static export and creates `schemesaathi-netlify.zip` ready for drag-and-drop on [Netlify Drop](https://app.netlify.com/drop).

---

## 👩‍💻 Developed & Designed by

**Shivani**  
*Creator & Developer of SchemeSaathi*

- **LinkedIn:** [https://www.linkedin.com/in/shivani2302/](https://www.linkedin.com/in/shivani2302/)
- **GitHub:** [https://github.com/Shivaniroy09](https://github.com/Shivaniroy09)
- **Instagram:** [https://www.instagram.com/shivaniii.jpeg/](https://www.instagram.com/shivaniii.jpeg/)
- **Email:** [shivaniroy2309@gmail.com](mailto:shivaniroy2309@gmail.com)

---

## 📜 Legal Disclaimer

SchemeSaathi is an **independent third-party civic platform** and is **NOT** affiliated with, authorized, or operated by the Government of India or any State Government. SchemeSaathi does not process government applications, disburse benefits, or determine official beneficiary approvals. All applications are submitted directly on official government websites.

---

© 2026 SchemeSaathi. Designed & Developed by Shivani. All rights reserved.
