"use client";

import React from "react";
import Link from "next/link";
import { ShieldAlert, ChevronRight, AlertTriangle, FileWarning, CheckCircle } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <div className="py-8 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">Disclaimer</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-warning" />
            <span>Legal & Civic Notice</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-3">
            Official Platform Disclaimer
          </h1>
          <p className="text-sm text-slate-600">
            Please read this notice carefully before using the SchemeSaathi website.
          </p>
        </div>

        {/* Prominent Warning Callout */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 sm:p-8 mb-10 shadow-xs">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-warning shrink-0 mt-0.5" />
            <div>
              <h2 className="text-base sm:text-lg font-bold text-amber-950 mb-2">
                Non-Affiliation & Independent Third-Party Status
              </h2>
              <p className="text-xs sm:text-sm text-amber-950/90 leading-relaxed mb-3">
                <strong>SchemeSaathi is NOT an official government website.</strong> It is not owned, operated, authorized, licensed, endorsed by, or affiliated with the Government of India, any State Government, Union Territory administration, or any Ministry, Department, or public statutory body.
              </p>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                SchemeSaathi does not process, approve, reject, or submit any government applications, nor do we issue identity documents, certificates, or financial disbursements.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-8 text-sm text-slate-700 leading-relaxed">
          <section>
            <h3 className="text-base font-bold text-navy mb-2">
              1. Informational & Educational Purpose Only
            </h3>
            <p className="mb-2">
              All data, scheme summaries, eligibility guidelines, timelines, and document requirements presented on SchemeSaathi are compiled solely for informational and public discovery purposes.
            </p>
            <p>
              While we make diligent efforts to verify facts against official notifications, gazettes, and ministry press releases, scheme guidelines are subject to frequent revisions, budget allocations, and state-level amendments. SchemeSaathi makes no warranties or representations regarding the complete accuracy, timeliness, or completeness of the information.
            </p>
          </section>

          <section>
            <h3 className="text-base font-bold text-navy mb-2">
              2. Sole Authority of Competent Government Bodies
            </h3>
            <p>
              Meeting the preliminary criteria listed on SchemeSaathi does <strong>not</strong> create any legal right, entitlement, or guarantee that you will receive benefits. Final determination of eligibility, verification of physical documents, biometric authentication, and disbursement of welfare funds rest solely with the designated scrutiny officers of the respective government ministry or department.
            </p>
          </section>

          <section>
            <h3 className="text-base font-bold text-navy mb-2">
              3. Redirection to Official Government Portals
            </h3>
            <p className="mb-2">
              All links labeled &ldquo;Official Portal&rdquo; or &ldquo;Apply on Official Website&rdquo; direct you outside SchemeSaathi to domains operated by legitimate government bodies (primarily ending in <code className="font-mono bg-slate-100 px-1 py-0.5 rounded font-bold">.gov.in</code> or <code className="font-mono bg-slate-100 px-1 py-0.5 rounded font-bold">.nic.in</code>).
            </p>
            <p>
              SchemeSaathi is not responsible for the uptime, security, availability, content, or practices of external third-party government websites.
            </p>
          </section>

          <section>
            <h3 className="text-base font-bold text-navy mb-2">
              4. Fraud & Impersonation Warning
            </h3>
            <p className="mb-2">
              Citizens are strongly advised never to pay money to agents or touts promising guaranteed selection or direct approvals for government schemes. SchemeSaathi will never call, message, email, or solicit money from you under any circumstances.
            </p>
            <p className="text-xs text-slate-500">
              Always verify you are on authentic government domains before submitting confidential details like your Aadhaar number or bank information.
            </p>
          </section>

          <section>
            <h3 className="text-base font-bold text-navy mb-2">
              5. Reporting Errors
            </h3>
            <p>
              If you identify an error, broken link, or outdated criterion, please help the civic community by notifying us immediately through our{" "}
              <Link href="/contact" className="text-primary font-bold hover:underline">
                Report Issue Form
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
