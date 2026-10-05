"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, HelpCircle, ChevronRight, Lock } from "lucide-react";
import EligibilityWizard from "@/components/EligibilityWizard";

export default function FindSchemesPage() {
  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">Find Schemes</span>
        </nav>

        {/* Civic Privacy Callout */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 sm:p-5 mb-8 flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-lg bg-emerald-100 text-trust-green flex items-center justify-center shrink-0">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-emerald-950">
              Zero Document Collection • 100% Privacy Preserved
            </h4>
            <p className="text-xs text-emerald-900/80 mt-0.5 leading-relaxed">
              SchemeSaathi never asks for your name, phone number, Aadhaar number, PAN, or financial credentials. All calculations run strictly in your web browser. When you decide to apply, you will be sent directly to the official government portal.
            </p>
          </div>
        </div>

        {/* Multi-step Eligibility Wizard */}
        <EligibilityWizard />

        {/* FAQ Section */}
        <div className="mt-14 max-w-3xl mx-auto border-t border-slate-200 pt-10">
          <h3 className="text-lg font-bold text-navy mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            <span>Frequently Asked Questions</span>
          </h3>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200">
              <h4 className="text-sm font-bold text-navy mb-1">
                Does SchemeSaathi approve or reject my application?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                No. SchemeSaathi is an independent discovery platform. Only designated government departments and scrutiny officers have the legal authority to determine and approve scheme benefits.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200">
              <h4 className="text-sm font-bold text-navy mb-1">
                What does a &ldquo;Strong Match&rdquo; vs &ldquo;Potential Match&rdquo; mean?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                A <strong>Strong Match</strong> means your age, occupation, state, and category satisfy all primary criteria listed in official guidelines. A <strong>Potential Match</strong> indicates most conditions are met, but specific localized rules (such as landholding records or municipal limits) must be verified on the official portal.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200">
              <h4 className="text-sm font-bold text-navy mb-1">
                Do I need to pay any service fee to search or apply?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                No. SchemeSaathi is 100% free and open to all citizens. Never pay anyone promising guaranteed scheme approvals or asking for processing fees on unofficial websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
