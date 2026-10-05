"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Search,
  ExternalLink,
  ChevronRight,
  Sparkles,
  FileText,
  Lock,
  Building2,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="py-8 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">How It Works</span>
        </nav>

        {/* Page Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Civic Tech Transparency</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight mb-4">
            How SchemeSaathi Works
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Finding government benefits shouldn&apos;t require navigating dozens of confusing websites or submitting sensitive documents to intermediaries. Here is how SchemeSaathi helps you discover and apply with confidence.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="space-y-8 mb-16">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-light-blue text-primary font-bold text-xl flex items-center justify-center shrink-0">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">
                1. Share Broad Background Signals (Zero Sensitive Data)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                You provide basic non-sensitive information like your State, occupation (e.g. farmer, student, woman entrepreneur), age group, and approximate family income bracket.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-xs text-emerald-900 flex items-center gap-2">
                <Lock className="w-4 h-4 text-trust-green shrink-0" />
                <span>
                  We never ask for your Aadhaar, PAN, bank account, OTP, or identity documents.
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-light-blue text-primary font-bold text-xl flex items-center justify-center shrink-0">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">
                2. Client-Side Eligibility Matching Engine
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Our rule-based engine compares your profile directly in your browser against government guidelines, categorizing each scheme into match levels:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-lg border border-green-200 bg-green-50 text-xs">
                  <div className="font-bold text-trust-green mb-1">🟢 Strong Match</div>
                  <p className="text-slate-600">You meet all primary criteria (age, occupation, income ceiling, state).</p>
                </div>
                <div className="p-3 rounded-lg border border-blue-200 bg-blue-50 text-xs">
                  <div className="font-bold text-primary mb-1">🔵 Potential Match</div>
                  <p className="text-slate-600">You qualify on most points; specific minor details need verification.</p>
                </div>
                <div className="p-3 rounded-lg border border-amber-200 bg-amber-50 text-xs">
                  <div className="font-bold text-warning mb-1">🟡 Needs Verification</div>
                  <p className="text-slate-600">May apply, but criteria depend on district/sub-scheme guidelines.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-light-blue text-primary font-bold text-xl flex items-center justify-center shrink-0">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">
                3. Plain-Language Requirements & Document Checklist
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                Government circulars are often 50 pages of legal terminology. SchemeSaathi summarizes benefits, required paperwork, and application steps in simple bullet points in English and Hindi.
              </p>
              <p className="text-xs text-slate-500">
                You can check off documents on our interactive checklist and print or save the summary before opening the government portal.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-light-blue text-primary font-bold text-xl flex items-center justify-center shrink-0">
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">
                4. Safe Navigation to Verified Official Portals
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                When you click &ldquo;Apply on Official Portal&rdquo;, we provide a safety confirmation warning showing the verified destination address (usually ending in <code className="font-mono bg-slate-100 px-1 py-0.5 rounded font-bold">.gov.in</code> or <code className="font-mono bg-slate-100 px-1 py-0.5 rounded font-bold">.nic.in</code>).
              </p>
              <p className="text-xs text-slate-600">
                You apply directly with the government department without any middleman taking commissions or accessing your private records.
              </p>
            </div>
          </div>
        </div>

        {/* Verification Standards */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-12">
          <h2 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-trust-green" />
            <span>Our Data Verification Standards</span>
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              All scheme information hosted on SchemeSaathi is derived strictly from public government sources:
            </p>
            <ul className="list-disc list-inside space-y-2 text-xs text-slate-600 ml-2">
              <li>Official Central Ministry portals (e.g. agriculture.gov.in, pmjay.gov.in)</li>
              <li>State Government department gazettes and departmental websites</li>
              <li>Press Information Bureau (PIB) official releases</li>
              <li>National Portal of India (india.gov.in)</li>
            </ul>
            <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
              Every scheme displays a &ldquo;Last Verified&rdquo; date and verified source link. If you discover an outdated requirement, you can report it instantly with our built-in feedback tool.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-6">
          <Link
            href="/find-schemes"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold text-sm shadow-md transition-colors"
          >
            <span>Try the Eligibility Wizard</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
