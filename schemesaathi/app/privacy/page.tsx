"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, ChevronRight, Lock, EyeOff, Server, Database } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="py-8 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">Privacy Policy</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full mb-3">
            <Lock className="w-3.5 h-3.5 text-trust-green" />
            <span>Privacy-First Civic Architecture</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-600">
            Last Updated: October 2026 • Effective Immediately
          </p>
        </div>

        {/* Key Guarantee Box */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-7 mb-10">
          <h3 className="text-base font-bold text-emerald-950 mb-2 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-trust-green" />
            <span>Our Core Privacy Guarantee: No Sensitive Information Ever Collected</span>
          </h3>
          <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
            SchemeSaathi was engineered from the ground up to operate without collecting or storing your identity records. We will NEVER ask you to enter an Aadhaar number, PAN, voter ID, bank account number, IFSC code, OTP, or upload any certificates or identity files.
          </p>
        </div>

        {/* Policy Details */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-8 text-sm text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-navy mb-2 flex items-center gap-2">
              <EyeOff className="w-4 h-4 text-primary" />
              <span>1. How Eligibility Matching Operates (Client-Side)</span>
            </h2>
            <p className="mb-2">
              When you answer questions in the SchemeSaathi Eligibility Wizard (such as age, state, or general occupation), all comparisons against scheme criteria are processed locally within your web browser using JavaScript.
            </p>
            <p>
              Your questionnaire inputs are not sent to any centralized database, are not logged on external servers, and are never monetized or sold to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2 flex items-center gap-2">
              <Database className="w-4 h-4 text-primary" />
              <span>2. Local Storage and Preferences</span>
            </h2>
            <p>
              We only use your browser&apos;s local storage to save your UI preferences (such as your chosen display language—English or Hindi—and schemes you have added to your comparison drawer). You can clear this data at any time through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2 flex items-center gap-2">
              <Server className="w-4 h-4 text-primary" />
              <span>3. External Official Government Websites</span>
            </h2>
            <p className="mb-2">
              When you click &ldquo;Apply on Official Portal&rdquo;, you leave SchemeSaathi and enter a website maintained by the Government of India or a State Government department (such as <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">pmkisan.gov.in</code> or <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">scholarships.gov.in</code>).
            </p>
            <p>
              Those government portals are governed by their respective official privacy policies, cybersecurity mandates, and statutory provisions. SchemeSaathi does not control, supervise, or accept liability for how government agencies process application forms submitted on their portals.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">
              4. No Commercial Advertising or Analytics Tracking
            </h2>
            <p>
              SchemeSaathi does not display third-party commercial advertisements, does not run invasive tracking pixels, and does not build behavioral profiles of citizens.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">
              5. Contact Us Regarding Privacy
            </h2>
            <p>
              If you have any questions, concerns, or technical feedback regarding our privacy practices, you can submit an inquiry through our{" "}
              <Link href="/contact" className="text-primary font-semibold hover:underline">
                Contact & Feedback Page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
