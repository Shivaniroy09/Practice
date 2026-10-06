"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Building } from "lucide-react";
import { schemes } from "@/data/schemes";
import SchemeCard from "@/components/SchemeCard";
import ExternalLinkModal from "@/components/ExternalLinkModal";

export default function CentralSchemesPage() {
  const centralSchemes = schemes.filter((s) => s.governmentLevel === "Central");
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    url: string;
    name: string;
  }>({
    isOpen: false,
    url: "",
    name: "",
  });

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">Central Schemes</span>
        </nav>

        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-2">
            <Building className="w-4 h-4" />
            <span>Government of India</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-navy tracking-tight mb-2">
            Central Government Schemes
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Central Sector and Centrally Sponsored Schemes implemented by Union Ministries. Applicable to eligible citizens across all States and Union Territories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {centralSchemes.map((scheme) => (
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

      <ExternalLinkModal
        isOpen={modalData.isOpen}
        onClose={() => setModalData({ isOpen: false, url: "", name: "" })}
        targetUrl={modalData.url}
        schemeName={modalData.name}
      />
    </div>
  );
}
