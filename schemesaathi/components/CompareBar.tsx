"use client";

import React from "react";
import Link from "next/link";
import { Scale, X, ArrowRight } from "lucide-react";
import { Scheme } from "@/types";

interface CompareBarProps {
  selectedSchemes: Scheme[];
  onRemove: (schemeId: string) => void;
  onClear: () => void;
}

export default function CompareBar({
  selectedSchemes,
  onRemove,
  onClear,
}: CompareBarProps) {
  if (selectedSchemes.length === 0) return null;

  return (
    <aside
      aria-label="Comparison dock"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-2xl bg-navy text-white rounded-2xl shadow-2xl border border-navy-light px-4 py-3 sm:px-5 sm:py-3.5"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <Scale className="w-4 h-4 text-white" />
          </div>
          <div className="text-xs sm:text-sm">
            <span className="font-bold">{selectedSchemes.length} of 4 schemes</span>
            <span className="text-blue-200 hidden sm:inline"> selected for comparison</span>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1">
          {selectedSchemes.map((s) => (
            <span
              key={s.id}
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-xs px-2.5 py-1 rounded-full text-white truncate max-w-[140px]"
            >
              <span className="truncate">{s.name}</span>
              <button
                onClick={() => onRemove(s.id)}
                className="hover:text-red-300 p-0.5 rounded-full"
                aria-label={`Remove ${s.name}`}
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={onClear}
            className="text-xs text-blue-200 hover:text-white px-2 py-1 rounded"
          >
            Clear
          </button>
          <Link
            href={`/compare?ids=${selectedSchemes.map((s) => s.id).join(",")}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold bg-primary hover:bg-primary-light text-white px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap"
          >
            <span>Compare Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
