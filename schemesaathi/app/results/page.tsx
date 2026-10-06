"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Filter,
  Search,
  SlidersHorizontal,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Info,
  X,
} from "lucide-react";
import { schemes } from "@/data/schemes";
import { categories } from "@/data/categories";
import {
  Scheme,
  MatchResult,
  UserProfile,
  ALL_STATES_AND_UTS,
  Category,
  Occupation,
  Gender,
  SocialCategory,
  IncomeRange,
  AreaType,
} from "@/types";
import { matchSchemes, searchSchemes } from "@/lib/eligibility";
import SchemeCard from "@/components/SchemeCard";
import CompareBar from "@/components/CompareBar";
import ExternalLinkModal from "@/components/ExternalLinkModal";

function ResultsContent() {
  const searchParams = useSearchParams();

  // URL Query Parameters
  const query = searchParams.get("q") || "";
  const paramState = searchParams.get("state") || "";
  const paramCategory = searchParams.get("category") || "";
  const paramLevel = searchParams.get("level") || "";
  const paramOccupations = searchParams.get("occupations") || "";
  const paramAge = searchParams.get("age");
  const paramGender = searchParams.get("gender") || "";
  const paramSocialCategory = searchParams.get("socialCategory") || "";
  const paramIncomeRange = searchParams.get("incomeRange") || "";
  const paramDisability = searchParams.get("disability") || "";
  const paramAreaType = searchParams.get("areaType") || "";

  // Local Filter States
  const [searchQuery, setSearchQuery] = useState(query);
  const [selectedLevel, setSelectedLevel] = useState<string>(paramLevel);
  const [selectedCategory, setSelectedCategory] = useState<string>(paramCategory);
  const [selectedState, setSelectedState] = useState<string>(paramState);
  const [sortBy, setSortBy] = useState<"match" | "name" | "category">("match");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Compare schemes selection
  const [compareSchemes, setCompareSchemes] = useState<Scheme[]>([]);

  // External link modal state
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    url: string;
    name: string;
  }>({
    isOpen: false,
    url: "",
    name: "",
  });

  // Construct UserProfile if eligibility signals are present
  const userProfile: UserProfile | null = useMemo(() => {
    const hasProfileSignals =
      paramState ||
      paramOccupations ||
      paramAge ||
      paramGender ||
      paramSocialCategory ||
      paramIncomeRange ||
      paramDisability ||
      paramAreaType;

    if (!hasProfileSignals) return null;

    return {
      state: paramState,
      occupations: paramOccupations
        ? (paramOccupations.split(",") as Occupation[])
        : [],
      age: paramAge ? parseInt(paramAge, 10) : null,
      gender: (paramGender as Gender) || "",
      socialCategory: (paramSocialCategory as SocialCategory) || "",
      incomeRange: (paramIncomeRange as IncomeRange) || "",
      education: "",
      disability: (paramDisability as "Yes" | "No" | "Prefer not to say" | "") || "",
      areaType: (paramAreaType as AreaType) || "",
    };
  }, [
    paramState,
    paramOccupations,
    paramAge,
    paramGender,
    paramSocialCategory,
    paramIncomeRange,
    paramDisability,
    paramAreaType,
  ]);

  // Compute matched results
  const resultsWithMatch = useMemo(() => {
    let pool = schemes;

    // Filter by text search
    if (searchQuery.trim()) {
      pool = searchSchemes(searchQuery, pool);
    }

    // Filter by Level
    if (selectedLevel) {
      pool = pool.filter((s) => s.governmentLevel === selectedLevel);
    }

    // Filter by Category
    if (selectedCategory) {
      pool = pool.filter((s) =>
        s.categories.includes(selectedCategory as Category)
      );
    }

    // Filter by State
    if (selectedState) {
      pool = pool.filter(
        (s) =>
          s.governmentLevel === "Central" ||
          !s.state ||
          s.state.toLowerCase() === selectedState.toLowerCase()
      );
    }

    // If user profile exists, evaluate match scores
    if (userProfile) {
      const matchMap = new Map<string, MatchResult>();
      const calculated = matchSchemes(userProfile, pool);
      calculated.forEach((m) => matchMap.set(m.scheme.id, m));

      const list = pool.map((s) => ({
        scheme: s,
        matchResult: matchMap.get(s.id),
      }));

      // Sorting
      if (sortBy === "match") {
        list.sort(
          (a, b) =>
            (b.matchResult?.matchScore || 0) - (a.matchResult?.matchScore || 0)
        );
      } else if (sortBy === "name") {
        list.sort((a, b) => a.scheme.name.localeCompare(b.scheme.name));
      } else if (sortBy === "category") {
        list.sort((a, b) =>
          (a.scheme.categories[0] || "").localeCompare(
            b.scheme.categories[0] || ""
          )
        );
      }

      return list;
    }

    // Default sorting when no profile
    const list = pool.map((s) => ({ scheme: s, matchResult: undefined }));
    if (sortBy === "name") {
      list.sort((a, b) => a.scheme.name.localeCompare(b.scheme.name));
    } else if (sortBy === "category") {
      list.sort((a, b) =>
        (a.scheme.categories[0] || "").localeCompare(
          b.scheme.categories[0] || ""
        )
      );
    }
    return list;
  }, [
    searchQuery,
    selectedLevel,
    selectedCategory,
    selectedState,
    sortBy,
    userProfile,
  ]);

  const handleCompareToggle = (scheme: Scheme) => {
    setCompareSchemes((prev) => {
      const exists = prev.some((s) => s.id === scheme.id);
      if (exists) {
        return prev.filter((s) => s.id !== scheme.id);
      } else {
        if (prev.length >= 4) {
          alert("You can compare up to 4 schemes at a time.");
          return prev;
        }
        return [...prev, scheme];
      }
    });
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedLevel("");
    setSelectedCategory("");
    setSelectedState("");
  };

  const hasActiveFilters =
    Boolean(searchQuery) ||
    Boolean(selectedLevel) ||
    Boolean(selectedCategory) ||
    Boolean(selectedState);

  return (
    <div className="py-6 sm:py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-4">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">Scheme Discovery</span>
        </nav>

        {/* Header title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy">
              Government Schemes Directory
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Found <strong>{resultsWithMatch.length}</strong> matching schemes across Central & State departments
            </p>
          </div>

          {userProfile && (
            <div className="inline-flex items-center gap-2 bg-light-blue border border-blue-200 px-3.5 py-1.5 rounded-xl text-xs text-navy">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>
                Personalized matches active for{" "}
                <strong>{userProfile.state || "India"}</strong>
              </span>
              <Link
                href="/find-schemes"
                className="text-primary font-bold hover:underline ml-1"
              >
                Edit Profile
              </Link>
            </div>
          )}
        </div>

        {/* Layout Grid: Filters on Left, Scheme Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-slate-300 rounded-xl text-xs font-bold text-navy shadow-xs"
            >
              <SlidersHorizontal className="w-4 h-4 text-primary" />
              <span>{mobileFilterOpen ? "Hide Filters" : "Show Search & Filters"}</span>
            </button>
          </div>

          {/* Left Filter Sidebar */}
          <aside
            className={`lg:block ${
              mobileFilterOpen ? "block" : "hidden"
            } space-y-6 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs h-fit sticky top-24`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-sm font-bold text-navy">
                <Filter className="w-4 h-4 text-primary" />
                <span>Filter Schemes</span>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="text-xs text-primary hover:underline font-semibold flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* Keyword Search */}
            <div>
              <label
                htmlFor="results-search"
                className="block text-xs font-bold text-navy mb-1.5"
              >
                Search by Keyword
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <input
                  id="results-search"
                  type="text"
                  placeholder="e.g. Kisan, loan, Ayushman..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-hidden"
                />
              </div>
            </div>

            {/* Government Level */}
            <div>
              <label className="block text-xs font-bold text-navy mb-1.5">
                Government Level
              </label>
              <div className="space-y-1.5">
                {[
                  { id: "", label: "All Levels" },
                  { id: "Central", label: "Central Government" },
                  { id: "State", label: "State Government" },
                ].map((lvl) => (
                  <label
                    key={lvl.id}
                    className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer select-none"
                  >
                    <input
                      type="radio"
                      name="govLevel"
                      checked={selectedLevel === lvl.id}
                      onChange={() => setSelectedLevel(lvl.id)}
                      className="w-3.5 h-3.5 text-primary focus:ring-primary border-slate-300"
                    />
                    <span>{lvl.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Category Dropdown */}
            <div>
              <label
                htmlFor="cat-filter"
                className="block text-xs font-bold text-navy mb-1.5"
              >
                Category
              </label>
              <select
                id="cat-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 text-xs border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-primary focus:border-primary outline-hidden bg-white"
              >
                <option value="">All Categories</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            {/* State Dropdown */}
            <div>
              <label
                htmlFor="state-filter"
                className="block text-xs font-bold text-navy mb-1.5"
              >
                State / Union Territory
              </label>
              <select
                id="state-filter"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full p-2 text-xs border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-primary focus:border-primary outline-hidden bg-white"
              >
                <option value="">All States & UTs</option>
                {ALL_STATES_AND_UTS.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            {/* Privacy note */}
            <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-start gap-2">
              <Info className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>Filters run locally on your device for immediate, privacy-safe discovery.</span>
            </div>

            {/* Mobile Close / Apply Button */}
            <div className="lg:hidden pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setMobileFilterOpen(false);
                  window.scrollTo({ top: 120, behavior: "smooth" });
                }}
                className="w-full py-2.5 px-4 bg-navy hover:bg-navy-light text-white font-semibold text-xs rounded-xl shadow-xs transition-colors"
              >
                View {resultsWithMatch.length} Schemes
              </button>
            </div>
          </aside>

          {/* Right Main Content */}
          <main className="lg:col-span-3 space-y-6">
            {/* Sorting bar & Active filter chips */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-500">
                  Active Filters:
                </span>
                {selectedLevel && (
                  <span className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full font-medium">
                    Level: {selectedLevel}
                    <button
                      onClick={() => setSelectedLevel("")}
                      className="hover:text-red-500"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full font-medium">
                    Category: {selectedCategory}
                    <button
                      onClick={() => setSelectedCategory("")}
                      className="hover:text-red-500"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedState && (
                  <span className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full font-medium">
                    State: {selectedState}
                    <button
                      onClick={() => setSelectedState("")}
                      className="hover:text-red-500"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {!hasActiveFilters && (
                  <span className="text-xs text-slate-400 italic">None</span>
                )}
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 text-xs">
                <span className="font-semibold text-slate-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "match" | "name" | "category")}
                  className="p-1.5 border border-slate-300 rounded-lg text-slate-800 font-medium focus:ring-primary outline-hidden bg-white"
                >
                  <option value="match">Highest Match Score</option>
                  <option value="name">Scheme Name (A-Z)</option>
                  <option value="category">Category</option>
                </select>
              </div>
            </div>

            {/* Scheme Cards Grid */}
            {resultsWithMatch.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {resultsWithMatch.map(({ scheme, matchResult }) => (
                  <SchemeCard
                    key={scheme.id}
                    scheme={scheme}
                    matchResult={matchResult}
                    onSelectOfficialUrl={(url, name) =>
                      setModalData({ isOpen: true, url, name })
                    }
                    onCompareToggle={handleCompareToggle}
                    isComparing={compareSchemes.some((s) => s.id === scheme.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-navy mb-1">
                  No schemes found matching your criteria
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto mb-6">
                  Try adjusting your search terms, removing state or category filters, or launch the eligibility wizard to get automated recommendations.
                </p>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={handleClearFilters}
                    className="px-4 py-2 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                  >
                    Clear All Filters
                  </button>
                  <Link
                    href="/find-schemes"
                    className="px-4 py-2 text-xs font-bold bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
                  >
                    Launch Eligibility Wizard
                  </Link>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Floating Compare Bar */}
      <CompareBar
        selectedSchemes={compareSchemes}
        onRemove={(id) =>
          setCompareSchemes((prev) => prev.filter((s) => s.id !== id))
        }
        onClear={() => setCompareSchemes([])}
      />

      {/* External Portal Safety Warning Modal */}
      <ExternalLinkModal
        isOpen={modalData.isOpen}
        onClose={() => setModalData({ isOpen: false, url: "", name: "" })}
        targetUrl={modalData.url}
        schemeName={modalData.name}
      />
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-slate-500 text-sm">
          Loading government benefits directory...
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
