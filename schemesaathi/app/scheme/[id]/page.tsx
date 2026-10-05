"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  Building2,
  Calendar,
  ExternalLink,
  FileText,
  Gift,
  CheckCircle2,
  AlertTriangle,
  Printer,
  Share2,
  Flag,
  ChevronRight,
  ArrowRight,
  HelpCircle,
  Clock,
  Layers,
} from "lucide-react";
import { schemes } from "@/data/schemes";
import ExternalLinkModal from "@/components/ExternalLinkModal";
import ReportIssueModal from "@/components/ReportIssueModal";
import SchemeCard from "@/components/SchemeCard";
import { useLanguage } from "@/lib/LanguageContext";

export default function SchemeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const scheme = schemes.find((s) => s.id === id);

  const { lang } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});

  if (!scheme) {
    notFound();
  }

  const title = lang === "hi" && scheme.nameHi ? scheme.nameHi : scheme.name;
  const shortDesc =
    lang === "hi" && scheme.shortDescriptionHi
      ? scheme.shortDescriptionHi
      : scheme.shortDescription;
  const longDesc =
    lang === "hi" && scheme.longDescriptionHi
      ? scheme.longDescriptionHi
      : scheme.longDescription;
  const benefits =
    lang === "hi" && scheme.benefitsHi ? scheme.benefitsHi : scheme.benefits;
  const eligibility =
    lang === "hi" && scheme.eligibilityHi
      ? scheme.eligibilityHi
      : scheme.eligibility;
  const documents =
    lang === "hi" && scheme.documentsHi ? scheme.documentsHi : scheme.documents;
  const howToApply =
    lang === "hi" && scheme.howToApplyHi
      ? scheme.howToApplyHi
      : scheme.howToApply;

  const toggleDoc = (index: number) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      if (navigator.share) {
        navigator.share({
          title: scheme.name,
          text: `Check out eligibility and official details for ${scheme.name} on SchemeSaathi:`,
          url: window.location.href,
        });
      } else {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  // Related schemes
  const relatedSchemes = schemes
    .filter((s) => s.id !== scheme.id && s.categories.some((c) => scheme.categories.includes(c)))
    .slice(0, 2);

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 print:hidden">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/results" className="hover:text-primary transition-colors">
            Schemes
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold truncate max-w-xs sm:max-w-md">
            {scheme.name}
          </span>
        </nav>

        {/* Scheme Header Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                  scheme.governmentLevel === "Central"
                    ? "bg-slate-100 text-slate-800 border border-slate-200"
                    : "bg-blue-50 text-primary border border-blue-200"
                }`}
              >
                {scheme.governmentLevel === "Central"
                  ? "Central Government"
                  : `${scheme.state || "State"} Scheme`}
              </span>

              {scheme.categories.map((c) => (
                <span
                  key={c}
                  className="text-xs bg-slate-100 text-slate-700 font-medium px-2.5 py-0.5 rounded-full"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs text-trust-green bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Source</span>
              </span>

              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Updated {scheme.lastVerified}
              </span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight mb-2">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-6">
            <div className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-slate-400" />
              <span>{scheme.ministry || scheme.department}</span>
            </div>
            {scheme.state && (
              <div className="flex items-center gap-1.5">
                <span>State: <strong>{scheme.state}</strong></span>
              </div>
            )}
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
            {longDesc || shortDesc}
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100 print:hidden">
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy hover:bg-navy-light text-white font-semibold text-sm shadow-sm transition-colors"
              >
                <span>Apply on Official Portal</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handlePrint}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-xs transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Checklist</span>
                </button>

                <button
                  onClick={handleShare}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-xs transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{copied ? "Link Copied!" : "Share"}</span>
                </button>
              </div>
            </div>

            <button
              onClick={() => setReportOpen(true)}
              className="inline-flex items-center justify-center sm:justify-start gap-1 text-xs text-slate-500 hover:text-warning py-1 transition-colors"
            >
              <Flag className="w-3.5 h-3.5" />
              <span>Report Inaccurate Information</span>
            </button>
          </div>
        </div>

        {/* Content Columns: Left Details, Right Application Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info Columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* 1. Benefits Provided */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
              <h2 className="text-lg font-bold text-navy flex items-center gap-2 mb-4">
                <Gift className="w-5 h-5 text-primary" />
                <span>Benefits & Financial Assistance</span>
              </h2>
              <ul className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-trust-green shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Detailed Eligibility Criteria */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
              <h2 className="text-lg font-bold text-navy flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Who is Eligible?</span>
              </h2>
              <ul className="space-y-3 mb-6">
                {eligibility.map((crit, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                    <span>{crit}</span>
                  </li>
                ))}
              </ul>

              {/* Explicit Exclusions or Limits */}
              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1.5">
                <div className="font-bold text-amber-950 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-warning" />
                  <span>Important Verification Notice:</span>
                </div>
                <p>
                  Meeting initial criteria does not guarantee sanction. Final verification and beneficiary selection are executed exclusively by the designated scrutiny officer of {scheme.department}.
                </p>
              </div>
            </div>

            {/* 3. Step-by-Step How to Apply */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
              <h2 className="text-lg font-bold text-navy flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-primary" />
                <span>How to Apply</span>
              </h2>
              <ol className="space-y-4">
                {howToApply.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-light-blue text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div className="text-sm text-slate-700 leading-relaxed pt-0.5">
                      {step}
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Ready to proceed?
                </span>
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark"
                >
                  <span>Go to official government application portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Document Checklist & Official Meta */}
          <div className="space-y-6">
            {/* Interactive Document Checklist */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-navy text-sm flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  <span>Required Documents Checklist</span>
                </h3>
                <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-semibold">
                  {Object.values(checkedDocs).filter(Boolean).length}/{documents.length}
                </span>
              </div>

              <p className="text-xs text-slate-500 mb-4">
                Check off documents you have prepared before starting your official portal application:
              </p>

              <div className="space-y-2.5">
                {documents.map((doc, idx) => {
                  const isChecked = !!checkedDocs[idx];
                  return (
                    <label
                      key={idx}
                      className={`flex items-start gap-3 p-2.5 rounded-xl border text-xs cursor-pointer select-none transition-all ${
                        isChecked
                          ? "bg-emerald-50 border-emerald-200 text-emerald-950 font-medium"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleDoc(idx)}
                        className="w-4 h-4 text-trust-green rounded border-slate-300 focus:ring-trust-green mt-0.5"
                      />
                      <span className={isChecked ? "line-through opacity-80" : ""}>
                        {doc}
                      </span>
                    </label>
                  );
                })}
              </div>

              {/* Official Source Box */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-700 mb-1">
                  Verified Government Source:
                </div>
                <div className="text-xs text-slate-500 mb-3 break-all font-mono">
                  {scheme.sourceName}
                </div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-navy hover:bg-navy-light text-white font-semibold text-xs transition-colors"
                >
                  <span>Open Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Schemes */}
        {relatedSchemes.length > 0 && (
          <div className="mt-14 pt-10 border-t border-slate-200 print:hidden">
            <h3 className="text-xl font-bold text-navy mb-6">
              Other Related Schemes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedSchemes.map((s) => (
                <SchemeCard key={s.id} scheme={s} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Official Government Portal Warning Modal */}
      <ExternalLinkModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        targetUrl={scheme.applicationUrl}
        schemeName={scheme.name}
      />

      {/* Report Issue Modal */}
      <ReportIssueModal
        isOpen={reportOpen}
        onClose={() => setReportOpen(false)}
        schemeId={scheme.id}
        schemeName={scheme.name}
      />
    </div>
  );
}
