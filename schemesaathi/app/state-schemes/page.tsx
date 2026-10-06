"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, MapPin, Search } from "lucide-react";
import { schemes } from "@/data/schemes";
import { ALL_STATES_AND_UTS } from "@/types";
import SchemeCard from "@/components/SchemeCard";
import ExternalLinkModal from "@/components/ExternalLinkModal";

export default function StateSchemesPage() {
  const [selectedState, setSelectedState] = useState<string>("Maharashtra");
  const [searchFilter, setSearchFilter] = useState("");
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    url: string;
    name: string;
  }>({
    isOpen: false,
    url: "",
    name: "",
  });

  const stateSchemes = schemes.filter(
    (s) =>
      s.governmentLevel === "State" &&
      s.state?.toLowerCase() === selectedState.toLowerCase()
  );

  const centralSchemes = schemes.filter((s) => s.governmentLevel === "Central");

  const filteredStates = ALL_STATES_AND_UTS.filter((st) =>
    st.toLowerCase().includes(searchFilter.toLowerCase())
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
          <span className="text-slate-800 font-semibold">State Schemes</span>
        </nav>

        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-2">
            <MapPin className="w-4 h-4" />
            <span>State Government Benefits</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-navy tracking-tight mb-2">
            State & Union Territory Directory
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Discover welfare initiatives funded and run specifically by State Governments in addition to national benefits. Select your state or UT below.
          </p>
        </div>

        {/* State Selection Strip */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <h3 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
              Select State / UT
            </h3>
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Find state..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg outline-hidden focus:border-primary"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-1">
            {filteredStates.map((st) => {
              const count = schemes.filter(
                (s) =>
                  s.governmentLevel === "State" &&
                  s.state?.toLowerCase() === st.toLowerCase()
              ).length;

              const isSelected = selectedState.toLowerCase() === st.toLowerCase();

              return (
                <button
                  key={st}
                  onClick={() => setSelectedState(st)}
                  className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-colors flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-navy border-navy text-white font-bold"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  <span>{st}</span>
                  {count > 0 && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected State Title */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-navy">
            Schemes in {selectedState} ({stateSchemes.length} state-specific)
          </h2>
          <Link
            href={`/results?state=${encodeURIComponent(selectedState)}`}
            className="text-xs text-primary font-bold hover:underline"
          >
            View all matching in {selectedState} &rarr;
          </Link>
        </div>

        {/* State Schemes List */}
        {stateSchemes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {stateSchemes.map((scheme) => (
              <SchemeCard
                key={scheme.id}
                scheme={scheme}
                onSelectOfficialUrl={(url, name) =>
                  setModalData({ isOpen: true, url, name })
                }
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center mb-12">
            <p className="text-sm text-slate-600 mb-2">
              No state-specific schemes are currently indexed for <strong>{selectedState}</strong>.
            </p>
            <p className="text-xs text-slate-500">
              However, all Central Government schemes remain 100% applicable to residents of {selectedState}.
            </p>
          </div>
        )}

        {/* Nationwide Central Schemes available to this state */}
        <div className="pt-6 border-t border-slate-200">
          <h3 className="text-lg font-bold text-navy mb-4">
            National Schemes Also Applicable in {selectedState}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {centralSchemes.slice(0, 4).map((scheme) => (
              <SchemeCard
                key={scheme.id}
                scheme={scheme}
                onSelectOfficialUrl={(url, name) =>
                  setModalData({ isOpen: true, url, name })
                }
              />
            ))}
          </div>
        </div>
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
