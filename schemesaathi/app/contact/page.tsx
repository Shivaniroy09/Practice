"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Flag,
  ChevronRight,
  Send,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  MessageSquare,
  ShieldAlert,
} from "lucide-react";
import { schemes } from "@/data/schemes";

export default function ContactPage() {
  const [formType, setFormType] = useState<"report_error" | "suggest_scheme" | "feedback">("report_error");
  const [selectedSchemeId, setSelectedSchemeId] = useState("");
  const [description, setDescription] = useState("");
  const [referenceUrl, setReferenceUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setDescription("");
      setReferenceUrl("");
      setSelectedSchemeId("");
    }, 500);
  };

  return (
    <div className="py-8 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">Report & Contact</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-2">
            <MessageSquare className="w-4 h-4" />
            <span>Civic Feedback & Quality Assurance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-3">
            Report an Issue or Suggest a Scheme
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Help us maintain accurate, reliable, and up-to-date welfare information for all citizens.
          </p>
        </div>

        {/* Crucial Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 mb-8 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-warning shrink-0 mt-0.5" />
          <div className="text-xs text-amber-950 leading-relaxed">
            <strong>Important:</strong> SchemeSaathi does not process applications or resolve personal grievances regarding scheme payments. For individual status checks or grievance redressal, please consult the official department portal or file a grievance via the Government of India&apos;s Centralized Public Grievance Redress and Monitoring System (CPGRAMS).
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-trust-green flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy">
                Thank You for Your Civic Contribution!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Your feedback has been received by our editorial team. We will review and verify against the latest official government gazettes.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-5 py-2.5 text-xs font-bold bg-navy text-white rounded-lg hover:bg-navy-light transition-colors"
              >
                Submit Another Report
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Type Switcher */}
              <div>
                <label className="block text-xs font-bold text-navy mb-2">
                  What would you like to do?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: "report_error", label: "Report Inaccurate Info" },
                    { id: "suggest_scheme", label: "Suggest a Missing Scheme" },
                    { id: "feedback", label: "General Feedback" },
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormType(type.id as typeof formType)}
                      className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                        formType === type.id
                          ? "border-primary bg-light-blue text-navy ring-2 ring-primary/20"
                          : "border-slate-200 hover:border-slate-300 text-slate-700 bg-white"
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scheme Dropdown (if reporting error) */}
              {formType === "report_error" && (
                <div>
                  <label
                    htmlFor="scheme-select"
                    className="block text-xs font-bold text-navy mb-1"
                  >
                    Select the Affected Scheme (Optional)
                  </label>
                  <select
                    id="scheme-select"
                    value={selectedSchemeId}
                    onChange={(e) => setSelectedSchemeId(e.target.value)}
                    className="w-full p-3 text-xs border border-slate-300 rounded-xl text-slate-800 focus:ring-2 focus:ring-primary outline-hidden bg-white"
                  >
                    <option value="">-- Choose a scheme --</option>
                    {schemes.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.governmentLevel})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Official Source Reference Link */}
              <div>
                <label
                  htmlFor="ref-url"
                  className="block text-xs font-bold text-navy mb-1"
                >
                  Official Source / Reference Link (Optional)
                </label>
                <input
                  id="ref-url"
                  type="url"
                  placeholder="https://..."
                  value={referenceUrl}
                  onChange={(e) => setReferenceUrl(e.target.value)}
                  className="w-full p-3 text-xs border border-slate-300 rounded-xl text-slate-800 focus:ring-2 focus:ring-primary outline-hidden"
                />
              </div>

              {/* Description Details */}
              <div>
                <label
                  htmlFor="details-text"
                  className="block text-xs font-bold text-navy mb-1"
                >
                  Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="details-text"
                  rows={5}
                  required
                  placeholder={
                    formType === "report_error"
                      ? "Explain what information is outdated or incorrect..."
                      : formType === "suggest_scheme"
                      ? "Name of the scheme, state, ministry, and eligibility overview..."
                      : "Share your thoughts or usability feedback..."
                  }
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-3 text-xs border border-slate-300 rounded-xl text-slate-800 focus:ring-2 focus:ring-primary outline-hidden placeholder:text-slate-400"
                />
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-500">
                To preserve complete privacy, SchemeSaathi does not require your name or email. All reports are verified directly against official gazettes.
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-navy hover:bg-navy-light text-white font-semibold text-xs shadow-sm transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Information</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
