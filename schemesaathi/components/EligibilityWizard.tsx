"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  MapPin,
  Briefcase,
  User,
  Wallet,
  Building,
  RotateCcw,
} from "lucide-react";
import {
  UserProfile,
  Occupation,
  EducationLevel,
  SocialCategory,
  Gender,
  IncomeRange,
  AreaType,
  ALL_STATES_AND_UTS,
} from "@/types";
import { useLanguage } from "@/lib/LanguageContext";

const OCCUPATION_OPTIONS: { id: Occupation; label: string; desc: string }[] = [
  { id: "Farmer", label: "Farmer / Agriculture", desc: "Cultivator, tenant farmer, or agri-allied worker" },
  { id: "Student", label: "Student", desc: "Enrolled in school, college, higher education, or vocational courses" },
  { id: "Business Owner", label: "Business Owner / MSME", desc: "Micro, small, or medium enterprise owner" },
  { id: "Entrepreneur", label: "Startup Founder / Entrepreneur", desc: "Starting or expanding a new venture" },
  { id: "Labourer", label: "Daily Wage / Construction Labour", desc: "Organized or unorganized manual labourer" },
  { id: "Job Seeker", label: "Job Seeker / Unemployed", desc: "Actively seeking employment or skill training" },
  { id: "Employee", label: "Salaried Employee", desc: "Private or contractual sector worker" },
  { id: "Senior Citizen", label: "Senior Citizen (60+)", desc: "Retired or elderly individual" },
  { id: "Homemaker", label: "Homemaker", desc: "Managing household affairs" },
  { id: "Artisan", label: "Artisan / Traditional Craftsperson", desc: "Weaver, potter, blacksmith, carpenter, etc." },
  { id: "Self-employed", label: "Self-Employed / Vendor", desc: "Street vendor, driver, freelancer, shopkeeper" },
  { id: "Person with Disability", label: "Person with Benchmark Disability", desc: "Divyangjan eligible for welfare benefits" },
  { id: "Other", label: "Other", desc: "Any other occupational background" },
];

const INCOME_OPTIONS: IncomeRange[] = [
  "Below ₹1 lakh",
  "₹1–2.5 lakh",
  "₹2.5–5 lakh",
  "₹5–8 lakh",
  "₹8–10 lakh",
  "Above ₹10 lakh",
  "Prefer not to say",
];

const SOCIAL_CATEGORIES: SocialCategory[] = [
  "General",
  "OBC",
  "SC",
  "ST",
  "EWS",
  "Minority",
  "Prefer not to say",
];

const EDUCATION_OPTIONS: EducationLevel[] = [
  "No formal education",
  "Primary",
  "Secondary",
  "10th",
  "12th",
  "Diploma",
  "Undergraduate",
  "Postgraduate",
  "PhD",
  "Other",
];

export default function EligibilityWizard() {
  const router = useRouter();
  const { t } = useLanguage();

  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [profile, setProfile] = useState<UserProfile>({
    occupations: [],
    state: "",
    age: null,
    education: "",
    socialCategory: "",
    gender: "",
    incomeRange: "",
    disability: "",
    areaType: "",
  });

  const toggleOccupation = (occ: Occupation) => {
    setProfile((prev) => {
      const exists = prev.occupations.includes(occ);
      if (exists) {
        return {
          ...prev,
          occupations: prev.occupations.filter((o) => o !== occ),
        };
      } else {
        return {
          ...prev,
          occupations: [...prev.occupations, occ],
        };
      }
    });
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Complete: encode profile and navigate to results page
      const params = new URLSearchParams();
      if (profile.state) params.set("state", profile.state);
      if (profile.occupations.length > 0)
        params.set("occupations", profile.occupations.join(","));
      if (profile.age !== null) params.set("age", profile.age.toString());
      if (profile.gender) params.set("gender", profile.gender);
      if (profile.socialCategory)
        params.set("socialCategory", profile.socialCategory);
      if (profile.incomeRange)
        params.set("incomeRange", profile.incomeRange);
      if (profile.education) params.set("education", profile.education);
      if (profile.disability) params.set("disability", profile.disability);
      if (profile.areaType) params.set("areaType", profile.areaType);

      router.push(`/results?${params.toString()}`);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((s) => s - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleReset = () => {
    setProfile({
      occupations: [],
      state: "",
      age: null,
      education: "",
      socialCategory: "",
      gender: "",
      incomeRange: "",
      disability: "",
      areaType: "",
    });
    setStep(1);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Wizard Header */}
      <div className="bg-navy p-6 sm:p-8 text-white relative">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-300" />
            <span>Eligibility Discovery Wizard</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% Private • Stored Locally Only</span>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
          Find Government Benefits You Qualify For
        </h2>
        <p className="text-sm text-blue-200 leading-relaxed max-w-xl">
          Answer a few general questions. We will calculate your eligibility across hundreds of Central & State schemes instantly on your device without asking for any Aadhaar or personal documents.
        </p>

        {/* Progress Bar */}
        <div className="mt-6 pt-4 border-t border-white/15">
          <div className="flex items-center justify-between text-xs font-medium text-blue-200 mb-2">
            <span>
              Step {step} of {totalSteps}:{" "}
              {step === 1 && "Location & Living Area"}
              {step === 2 && "Occupation & Activities"}
              {step === 3 && "Demographics & Education"}
              {step === 4 && "Category & Income Range"}
            </span>
            <span>{Math.round((step / totalSteps) * 100)}% Completed</span>
          </div>
          <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-300 rounded-full"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Wizard Body */}
      <div className="p-6 sm:p-8">
        {/* Step 1: Location & Area */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label
                htmlFor="state-select"
                className="block text-sm font-bold text-navy mb-1"
              >
                1. Select your State or Union Territory <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-slate-500 mb-3">
                This helps us match state-specific government benefits alongside national central schemes.
              </p>
              <select
                id="state-select"
                value={profile.state}
                onChange={(e) =>
                  setProfile({ ...profile, state: e.target.value })
                }
                className="w-full p-3.5 border border-slate-300 rounded-xl text-slate-800 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-hidden bg-white"
              >
                <option value="">-- Choose your State or UT --</option>
                {ALL_STATES_AND_UTS.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-navy mb-1">
                2. Do you reside in a Rural or Urban area?
              </label>
              <p className="text-xs text-slate-500 mb-3">
                Certain housing and livelihood schemes are tailored specifically for rural or urban residents.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(["Rural", "Urban", "Prefer not to say"] as AreaType[]).map(
                  (area) => (
                    <button
                      key={area}
                      type="button"
                      onClick={() => setProfile({ ...profile, areaType: area })}
                      className={`p-3.5 rounded-xl border text-sm font-medium text-left transition-all ${
                        profile.areaType === area
                          ? "border-primary bg-light-blue text-navy ring-2 ring-primary/20"
                          : "border-slate-200 hover:border-slate-300 bg-white text-slate-700"
                      }`}
                    >
                      {area === "Rural" && "🏡 Rural (Village / Gram Panchayat)"}
                      {area === "Urban" && "🏙️ Urban (City / Municipality)"}
                      {area === "Prefer not to say" && "⚪ Skip / Both"}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Occupations */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-navy mb-1">
                What best describes your current occupation or role?
              </label>
              <p className="text-xs text-slate-500 mb-3">
                You can select multiple options if applicable (e.g. Farmer + Homemaker).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1">
                {OCCUPATION_OPTIONS.map((occ) => {
                  const selected = profile.occupations.includes(occ.id);
                  return (
                    <button
                      key={occ.id}
                      type="button"
                      onClick={() => toggleOccupation(occ.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all flex items-start justify-between ${
                        selected
                          ? "border-primary bg-light-blue ring-2 ring-primary/20"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="pr-2">
                        <div className="text-sm font-bold text-navy">
                          {occ.label}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {occ.desc}
                        </div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded border mt-0.5 flex items-center justify-center shrink-0 ${
                          selected
                            ? "bg-primary border-primary text-white"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {selected && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Demographics & Education */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="age-input"
                  className="block text-sm font-bold text-navy mb-1"
                >
                  Your Age (Years)
                </label>
                <p className="text-xs text-slate-500 mb-2">
                  Helps identify youth, student, or senior citizen benefits.
                </p>
                <input
                  id="age-input"
                  type="number"
                  min="0"
                  max="120"
                  placeholder="e.g. 28"
                  value={profile.age === null ? "" : profile.age}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      age: e.target.value ? parseInt(e.target.value, 10) : null,
                    })
                  }
                  className="w-full p-3 border border-slate-300 rounded-xl text-slate-800 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-hidden"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-navy mb-1">
                  Gender
                </label>
                <p className="text-xs text-slate-500 mb-2">
                  Identifies women-empowerment & maternity schemes.
                </p>
                <select
                  value={profile.gender}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      gender: e.target.value as Gender,
                    })
                  }
                  className="w-full p-3 border border-slate-300 rounded-xl text-slate-800 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-hidden bg-white"
                >
                  <option value="">-- Select Gender --</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Transgender">Transgender</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-navy mb-1">
                Highest Completed or Current Education Level
              </label>
              <p className="text-xs text-slate-500 mb-2">
                Identifies matriculation, higher education, and scholarship schemes.
              </p>
              <select
                value={profile.education}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    education: e.target.value as EducationLevel,
                  })
                }
                className="w-full p-3 border border-slate-300 rounded-xl text-slate-800 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-hidden bg-white"
              >
                <option value="">-- Select Education Level --</option>
                {EDUCATION_OPTIONS.map((edu) => (
                  <option key={edu} value={edu}>
                    {edu}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-navy mb-1">
                Do you have a benchmark disability (Divyangjan)?
              </label>
              <p className="text-xs text-slate-500 mb-2">
                Special assistance, assistive devices, and pension schemes exist for persons with disabilities.
              </p>
              <div className="flex flex-wrap gap-3">
                {(["Yes", "No", "Prefer not to say"] as const).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() =>
                      setProfile({
                        ...profile,
                        disability: opt,
                      })
                    }
                    className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                      profile.disability === opt
                        ? "border-primary bg-light-blue text-navy ring-2 ring-primary/20"
                        : "border-slate-200 hover:border-slate-300 bg-white text-slate-700"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Social Category & Income */}
        {step === 4 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-navy mb-1">
                Social Category / Community
              </label>
              <p className="text-xs text-slate-500 mb-3">
                Used solely to discover affirmative action scholarships, MSME subsidies, and welfare schemes.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {SOCIAL_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() =>
                      setProfile({
                        ...profile,
                        socialCategory: cat,
                      })
                    }
                    className={`p-3 rounded-lg border text-sm font-medium text-center transition-all ${
                      profile.socialCategory === cat
                        ? "border-primary bg-light-blue text-navy ring-2 ring-primary/20 font-bold"
                        : "border-slate-200 hover:border-slate-300 bg-white text-slate-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-navy mb-1">
                Annual Family Income Range
              </label>
              <p className="text-xs text-slate-500 mb-3">
                Most government welfare benefits have family income ceilings (e.g. BPL, below ₹2.5L, or ₹8L for EWS/OBC-NCL).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {INCOME_OPTIONS.map((inc) => (
                  <button
                    key={inc}
                    type="button"
                    onClick={() =>
                      setProfile({
                        ...profile,
                        incomeRange: inc,
                      })
                    }
                    className={`p-3 rounded-lg border text-sm font-medium text-left transition-all ${
                      profile.incomeRange === inc
                        ? "border-primary bg-light-blue text-navy ring-2 ring-primary/20 font-bold"
                        : "border-slate-200 hover:border-slate-300 bg-white text-slate-700"
                    }`}
                  >
                    {inc}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
              <ShieldCheck className="w-5 h-5 text-trust-green shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-800">
                  Ready to calculate your benefits!
                </span>
                <p className="mt-0.5">
                  Clicking &ldquo;Find Eligible Schemes&rdquo; will run our matching algorithm against all active Central and State schemes. Your profile will never be uploaded to any server or shared with third parties.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Wizard Navigation Actions */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between gap-3">
          <div>
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700 p-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold text-sm shadow-sm transition-colors"
            >
              <span>
                {step === totalSteps ? "Find Eligible Schemes" : "Next Step"}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
