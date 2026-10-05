"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Search,
  ArrowRight,
  Sparkles,
  FileCheck,
  ExternalLink,
  Users,
  Building2,
  CheckCircle2,
  HelpCircle,
  Award,
  Globe2,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import SearchBar from "@/components/SearchBar";
import CategoryCard from "@/components/CategoryCard";
import SchemeCard from "@/components/SchemeCard";
import ExternalLinkModal from "@/components/ExternalLinkModal";
import { categories } from "@/data/categories";
import { schemes } from "@/data/schemes";
import { ALL_STATES_AND_UTS, Scheme } from "@/types";
import { useLanguage } from "@/lib/LanguageContext";

export default function HomePage() {
  const { t, lang } = useLanguage();
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    url: string;
    name: string;
  }>({
    isOpen: false,
    url: "",
    name: "",
  });

  // Calculate category counts
  const categoryCounts = categories.map((cat) => {
    const count = schemes.filter((s) => s.categories.includes(cat.id)).length;
    return { ...cat, count };
  });

  // Featured flagship schemes
  const featuredSchemes = schemes.slice(0, 4);

  const handleOfficialUrl = (url: string, schemeName: string) => {
    setModalData({
      isOpen: true,
      url,
      name: schemeName,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── 1. Hero Section ────────────────────────────────────────────── */}
      <section className="bg-navy text-white relative overflow-hidden py-14 sm:py-20 border-b border-navy-light">
        {/* Subtle geometric background pattern for civic tech elegance */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, #12304A 1px)",
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0, 12px 12px",
          }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Trust pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full text-xs font-semibold text-blue-200 mb-6 backdrop-blur-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span>Independent Citizen Benefit Discovery Platform</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Find Your Benefits.
            <span className="block text-primary-light mt-1">
              Apply with Confidence.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto font-normal leading-relaxed mb-8">
            Discover Central and State Government schemes matched to your eligibility. No document uploads, no account creation, and zero sensitive data collection.
          </p>

          {/* Interactive Search Bar */}
          <div className="max-w-3xl mx-auto mb-8 text-left">
            <SearchBar large />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/find-schemes"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-light text-white font-semibold text-base shadow-md hover:shadow-lg transition-all"
            >
              <Sparkles className="w-5 h-5 text-blue-200" />
              <span>Check Eligibility Wizard</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>

            <Link
              href="/results"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 transition-all"
            >
              <span>Explore All {schemes.length}+ Schemes</span>
            </Link>
          </div>

          {/* Civic safety sub-text */}
          <p className="text-xs text-blue-200/90 mt-6 max-w-xl mx-auto italic">
            &ldquo;We don&apos;t replace government portals. We help you find the right one.&rdquo;
          </p>
        </div>
      </section>

      {/* ── 2. Four Civic Guarantees (Trust Bar) ────────────────────────── */}
      <section className="bg-white border-b border-slate-200 py-6 sm:py-8 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-trust-green flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-navy text-sm">No Personal Documents</h4>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  We never collect Aadhaar, PAN, phone numbers, OTPs, or bank account details.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-primary flex items-center justify-center shrink-0">
                <ExternalLink className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-navy text-sm">Verified Official Portals</h4>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  You apply directly on official government websites ending in <code className="font-mono text-slate-700 font-semibold">.gov.in</code>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-warning flex items-center justify-center shrink-0">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-navy text-sm">Clear Eligibility Rules</h4>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Transparent criteria explanations show why each scheme matched your profile.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-300 text-slate-700 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-navy text-sm">100% Free & Open</h4>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  No login required, no paywalls, and no sponsored government ads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Category Explorer ───────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                Explore by Domain
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                Schemes by Category
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Browse government welfare and support programs organized by citizen segment and sector.
              </p>
            </div>
            <Link
              href="/categories"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-dark shrink-0"
            >
              <span>View All Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoryCounts.map((cat) => (
              <CategoryCard key={cat.id} category={cat} count={cat.count} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Featured Flagship Schemes ─────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-1">
                <TrendingUp className="w-4 h-4" />
                <span>Verified Programs</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                Key Central & State Schemes
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Major national initiatives providing financial assistance, healthcare, education, and shelter to millions of citizens.
              </p>
            </div>
            <Link
              href="/results"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-dark shrink-0"
            >
              <span>Browse All ({schemes.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredSchemes.map((scheme) => (
              <SchemeCard
                key={scheme.id}
                scheme={scheme}
                onSelectOfficialUrl={handleOfficialUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. How It Works ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
            Civic Transparency
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-navy mb-4">
            How SchemeSaathi Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-12">
            We simplify the complex landscape of hundreds of government portals so you can find what you are entitled to without confusion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs relative">
              <div className="w-12 h-12 rounded-xl bg-light-blue text-primary font-bold text-xl flex items-center justify-center mb-5">
                1
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Answer General Questions
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Provide basic eligibility signals like state, occupation, and family income range. No Aadhaar, phone numbers, or document uploads required.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs relative">
              <div className="w-12 h-12 rounded-xl bg-light-blue text-primary font-bold text-xl flex items-center justify-center mb-5">
                2
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Instant Matching Engine
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our algorithm evaluates your profile against Central & State criteria on your device and ranks results into Strong Matches and Potential Matches.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs relative">
              <div className="w-12 h-12 rounded-xl bg-light-blue text-primary font-bold text-xl flex items-center justify-center mb-5">
                3
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Direct Official Application
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                View required documents and exact application steps. When ready, click through directly to the verified official government portal.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-dark"
            >
              <span>Read complete details on our mission & verification standards</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. State Schemes Directory Selector ──────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
              State-Specific Welfare
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
              Explore Schemes by State or Union Territory
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Select your state to discover schemes run by your state government along with applicable Central schemes.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {ALL_STATES_AND_UTS.slice(0, 24).map((stateName) => (
              <Link
                key={stateName}
                href={`/results?state=${encodeURIComponent(stateName)}`}
                className="p-3 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-light-blue hover:text-primary rounded-lg border border-slate-200 transition-colors truncate flex items-center justify-between"
              >
                <span className="truncate">{stateName}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50 shrink-0" />
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/state-schemes"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark"
            >
              <span>View full list of all 36 States & Union Territories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. Call To Action Footer Banner ──────────────────────────────── */}
      <section className="bg-navy py-12 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Not Sure Which Schemes You Qualify For?
          </h2>
          <p className="text-sm text-blue-200 max-w-xl mx-auto mb-6">
            Use our guided eligibility questionnaire. Answer questions about your occupation, state, and category to receive tailored recommendations.
          </p>
          <Link
            href="/find-schemes"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-light text-white font-semibold text-sm shadow-md transition-colors"
          >
            <span>Launch Eligibility Wizard</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* External Link Safety Modal */}
      <ExternalLinkModal
        isOpen={modalData.isOpen}
        onClose={() => setModalData({ isOpen: false, url: "", name: "" })}
        targetUrl={modalData.url}
        schemeName={modalData.name}
      />
    </div>
  );
}
