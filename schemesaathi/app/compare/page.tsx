"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Scale,
  ChevronRight,
  X,
  Plus,
  ExternalLink,
  CheckCircle2,
  Building2,
  Layers,
  FileText,
} from "lucide-react";
import { schemes } from "@/data/schemes";
import { Scheme } from "@/types";
import ExternalLinkModal from "@/components/ExternalLinkModal";

function CompareContent() {
  const searchParams = useSearchParams();
  const idsParam = searchParams.get("ids") || "";

  const initialSchemes = idsParam
    ? schemes.filter((s) => idsParam.split(",").includes(s.id))
    : schemes.slice(0, 2);

  const [selectedSchemes, setSelectedSchemes] = useState<Scheme[]>(initialSchemes);
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    url: string;
    name: string;
  }>({
    isOpen: false,
    url: "",
    name: "",
  });

  const removeScheme = (id: string) => {
    setSelectedSchemes((prev) => prev.filter((s) => s.id !== id));
  };

  const addScheme = (id: string) => {
    if (!id) return;
    const found = schemes.find((s) => s.id === id);
    if (found && !selectedSchemes.some((s) => s.id === id)) {
      if (selectedSchemes.length >= 4) {
        alert("You can compare up to 4 schemes simultaneously.");
        return;
      }
      setSelectedSchemes((prev) => [...prev, found]);
    }
  };

  const availableSchemes = schemes.filter(
    (s) => !selectedSchemes.some((sel) => sel.id === s.id)
  );

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">Compare Schemes</span>
        </nav>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-1">
              <Scale className="w-4 h-4" />
              <span>Side-by-Side Analysis</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Compare Government Schemes
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Analyze benefits, eligibility requirements, and needed documents across programs.
            </p>
          </div>

          {/* Add Scheme Selector */}
          {availableSchemes.length > 0 && selectedSchemes.length < 4 && (
            <div className="flex items-center gap-2">
              <select
                onChange={(e) => {
                  addScheme(e.target.value);
                  e.target.value = "";
                }}
                defaultValue=""
                className="text-xs border border-slate-300 rounded-xl p-2.5 bg-white text-slate-700 font-medium focus:ring-primary outline-hidden"
              >
                <option value="" disabled>
                  + Add another scheme to compare
                </option>
                {availableSchemes.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Mobile Swipe Hint */}
        {selectedSchemes.length > 0 && (
          <div className="md:hidden flex items-center justify-between text-xs text-slate-500 mb-2 px-1">
            <span>Scroll horizontally to see all columns</span>
            <span className="font-semibold text-primary">← Swipe →</span>
          </div>
        )}

        {/* Comparison Table */}
        {selectedSchemes.length > 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-x-auto touch-pan-x">
            <table className="w-full min-w-[700px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 sm:p-5 w-48 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Feature
                  </th>
                  {selectedSchemes.map((scheme) => (
                    <th key={scheme.id} className="p-4 sm:p-5 align-top min-w-[260px]">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span
                            className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                              scheme.governmentLevel === "Central"
                                ? "bg-slate-200 text-slate-800"
                                : "bg-blue-100 text-primary"
                            }`}
                          >
                            {scheme.governmentLevel}
                          </span>
                          <h3 className="font-bold text-navy text-base mt-2 line-clamp-2">
                            {scheme.name}
                          </h3>
                        </div>
                        <button
                          onClick={() => removeScheme(scheme.id)}
                          className="text-slate-400 hover:text-red-500 p-1"
                          aria-label={`Remove ${scheme.name}`}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {/* Ministry & Department */}
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-xs text-slate-600 bg-slate-50/50">
                    Ministry / Dept.
                  </td>
                  {selectedSchemes.map((scheme) => (
                    <td key={scheme.id} className="p-4 sm:p-5 text-xs text-slate-700">
                      {scheme.ministry || scheme.department}
                    </td>
                  ))}
                </tr>

                {/* Categories */}
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-xs text-slate-600 bg-slate-50/50">
                    Categories
                  </td>
                  {selectedSchemes.map((scheme) => (
                    <td key={scheme.id} className="p-4 sm:p-5">
                      <div className="flex flex-wrap gap-1">
                        {scheme.categories.map((c) => (
                          <span
                            key={c}
                            className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Target Occupations */}
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-xs text-slate-600 bg-slate-50/50">
                    Target Occupations
                  </td>
                  {selectedSchemes.map((scheme) => (
                    <td key={scheme.id} className="p-4 sm:p-5 text-xs text-slate-700">
                      {scheme.occupations.join(", ") || "All citizens"}
                    </td>
                  ))}
                </tr>

                {/* Benefits */}
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-xs text-slate-600 bg-slate-50/50 align-top">
                    Key Benefits
                  </td>
                  {selectedSchemes.map((scheme) => (
                    <td key={scheme.id} className="p-4 sm:p-5 align-top">
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {scheme.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-trust-green shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* Eligibility Criteria */}
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-xs text-slate-600 bg-slate-50/50 align-top">
                    Eligibility Criteria
                  </td>
                  {selectedSchemes.map((scheme) => (
                    <td key={scheme.id} className="p-4 sm:p-5 align-top">
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {scheme.eligibility.map((crit, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                            <span>{crit}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* Documents Required */}
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-xs text-slate-600 bg-slate-50/50 align-top">
                    Required Documents
                  </td>
                  {selectedSchemes.map((scheme) => (
                    <td key={scheme.id} className="p-4 sm:p-5 align-top">
                      <ul className="space-y-1 text-xs text-slate-700">
                        {scheme.documents.map((doc, i) => (
                          <li key={i}>• {doc}</li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* Actions */}
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-xs text-slate-600 bg-slate-50/50">
                    Action
                  </td>
                  {selectedSchemes.map((scheme) => (
                    <td key={scheme.id} className="p-4 sm:p-5">
                      <div className="flex flex-col gap-2">
                        <Link
                          href={`/scheme/${scheme.id}`}
                          className="text-xs font-semibold text-primary hover:underline"
                        >
                          View Full Details &rarr;
                        </Link>
                        <button
                          onClick={() =>
                            setModalData({
                              isOpen: true,
                              url: scheme.applicationUrl,
                              name: scheme.name,
                            })
                          }
                          className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold bg-navy hover:bg-navy-light text-white py-2 px-3 rounded-lg transition-colors"
                        >
                          <span>Official Portal</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
            <Scale className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-navy mb-1">
              No schemes selected for comparison
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Browse the scheme directory and click &ldquo;Compare&rdquo; on cards, or select schemes above.
            </p>
            <Link
              href="/results"
              className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-bold transition-colors"
            >
              Browse Schemes Directory
            </Link>
          </div>
        )}
      </div>

      <ExternalLinkModal
        isOpen={modalData.isOpen}
        onClose={() => setModalData({ isOpen: false, url: "", name: "" })}
        targetUrl={modalData.url}
        schemeName={modalData.name}
      />
    </div>
  );
}

export default function ComparePage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-slate-500 text-sm">
          Loading comparison...
        </div>
      }
    >
      <CompareContent />
    </Suspense>
  );
}
