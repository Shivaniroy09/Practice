"use client";

import React from "react";
import Link from "next/link";
import {
  ExternalLink,
  ShieldCheck,
  Building2,
  Calendar,
  ArrowRight,
  FileText,
  Gift,
} from "lucide-react";
import { Scheme, MatchResult } from "@/types";
import { useLanguage } from "@/lib/LanguageContext";
import MatchBadge from "./MatchBadge";

interface SchemeCardProps {
  scheme: Scheme;
  matchResult?: MatchResult;
  onSelectOfficialUrl?: (url: string, schemeName: string) => void;
  onCompareToggle?: (scheme: Scheme) => void;
  isComparing?: boolean;
}

export default function SchemeCard({
  scheme,
  matchResult,
  onSelectOfficialUrl,
  onCompareToggle,
  isComparing = false,
}: SchemeCardProps) {
  const { lang } = useLanguage();

  const title = lang === "hi" && scheme.nameHi ? scheme.nameHi : scheme.name;
  const description =
    lang === "hi" && scheme.shortDescriptionHi
      ? scheme.shortDescriptionHi
      : scheme.shortDescription;

  const benefits =
    lang === "hi" && scheme.benefitsHi ? scheme.benefitsHi : scheme.benefits;

  const handleApplyClick = (e: React.MouseEvent) => {
    if (onSelectOfficialUrl) {
      e.preventDefault();
      onSelectOfficialUrl(scheme.applicationUrl, scheme.name);
    }
  };

  return (
    <article className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      {/* Header section */}
      <div className="p-5 sm:p-6 pb-4">
        {/* Top Badges & Meta */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                scheme.governmentLevel === "Central"
                  ? "bg-slate-100 text-slate-800 border border-slate-200"
                  : "bg-blue-50 text-primary border border-blue-200"
              }`}
            >
              {scheme.governmentLevel === "Central"
                ? "Central Government"
                : `${scheme.state || "State"} Scheme`}
            </span>

            {scheme.categories.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="text-xs bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full font-medium"
              >
                {cat}
              </span>
            ))}
          </div>

          {matchResult ? (
            <MatchBadge
              level={matchResult.matchLevel}
              score={matchResult.matchScore}
              showScore
              size="sm"
            />
          ) : (
            <span className="inline-flex items-center gap-1 text-xs text-trust-green bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Source
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-navy group-hover:text-primary transition-colors line-clamp-2 mb-1.5">
          <Link href={`/scheme/${scheme.id}`} className="hover:underline focus:underline">
            {title}
          </Link>
        </h3>

        {/* Ministry/Department */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
          <Building2 className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{scheme.ministry || scheme.department}</span>
        </div>

        {/* Short description */}
        <p className="text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Key Highlight / Benefits preview */}
        {benefits && benefits.length > 0 && (
          <div className="bg-slate-50 rounded-lg p-3 mb-3 border border-slate-100">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5">
              <Gift className="w-3.5 h-3.5 text-primary" />
              <span>Key Benefit:</span>
            </div>
            <p className="text-xs text-slate-700 font-medium line-clamp-2">
              • {benefits[0]}
            </p>
          </div>
        )}

        {/* Matched Criteria Explanation if available */}
        {matchResult && matchResult.matchedCriteria.length > 0 && (
          <div className="text-xs text-slate-600 mb-3 bg-blue-50/60 p-2.5 rounded border border-blue-100">
            <span className="font-semibold text-primary block mb-1">
              Why this matches you:
            </span>
            <ul className="space-y-0.5 list-disc list-inside text-slate-700">
              {matchResult.matchedCriteria.slice(0, 2).map((crit, idx) => (
                <li key={idx} className="truncate">
                  {crit}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Documents requirement preview */}
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            {scheme.documents.length} Documents Required
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            Verified {scheme.lastVerified}
          </span>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-4 sm:px-6 py-3.5 bg-slate-50/90 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5 mt-2">
        <div className="flex items-center gap-2">
          {onCompareToggle && (
            <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={isComparing}
                onChange={() => onCompareToggle(scheme)}
                className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary"
              />
              <span className="font-medium">Compare</span>
            </label>
          )}
        </div>

        <div className="flex items-center gap-2 ml-auto sm:ml-0">
          <Link
            href={`/scheme/${scheme.id}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-dark px-2.5 py-1.5 rounded transition-colors"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={scheme.applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleApplyClick}
            className="inline-flex items-center gap-1.5 text-xs font-semibold bg-navy hover:bg-navy-light text-white px-3 py-1.5 rounded-lg shadow-xs transition-colors shrink-0"
            title="Opens official government portal"
          >
            <span>Official Portal</span>
            <ExternalLink className="w-3 h-3 text-blue-200" />
          </a>
        </div>
      </div>
    </article>
  );
}
