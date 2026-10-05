// ============================================================================
// SchemeSaathi — Core Type Definitions
// ============================================================================

export interface Scheme {
  id: string;
  name: string;
  nameHi?: string;
  shortDescription: string;
  shortDescriptionHi?: string;
  longDescription: string;
  longDescriptionHi?: string;
  governmentLevel: "Central" | "State";
  state?: string;
  department: string;
  ministry?: string;
  categories: Category[];
  occupations: Occupation[];
  minAge?: number;
  maxAge?: number;
  genders?: Gender[];
  educationLevels?: EducationLevel[];
  socialCategories?: SocialCategory[];
  incomeLimit?: number; // in lakhs
  disabilityApplicable?: boolean;
  ruralUrban?: AreaType[];
  benefits: string[];
  benefitsHi?: string[];
  eligibility: string[];
  eligibilityHi?: string[];
  documents: string[];
  documentsHi?: string[];
  howToApply: string[];
  howToApplyHi?: string[];
  applicationUrl: string;
  officialSourceUrl: string;
  sourceName: string;
  lastVerified: string;
  verificationStatus: VerificationStatus;
  status: "Active" | "Closed" | "Upcoming";
}

export type Category =
  | "Education"
  | "Agriculture"
  | "Business"
  | "Employment"
  | "Women"
  | "Healthcare"
  | "Housing"
  | "Labour"
  | "Senior Citizens"
  | "Disability"
  | "Social Welfare"
  | "Financial Inclusion";

export type Occupation =
  | "Student"
  | "Farmer"
  | "Business Owner"
  | "Entrepreneur"
  | "Labourer"
  | "Job Seeker"
  | "Employee"
  | "Senior Citizen"
  | "Homemaker"
  | "Artisan"
  | "Self-employed"
  | "Person with Disability"
  | "Other";

export type EducationLevel =
  | "No formal education"
  | "Primary"
  | "Secondary"
  | "10th"
  | "12th"
  | "Diploma"
  | "Undergraduate"
  | "Postgraduate"
  | "PhD"
  | "Other";

export type SocialCategory =
  | "General"
  | "OBC"
  | "SC"
  | "ST"
  | "EWS"
  | "Minority"
  | "Other"
  | "Prefer not to say";

export type Gender =
  | "Female"
  | "Male"
  | "Transgender"
  | "Other"
  | "Prefer not to say";

export type AreaType = "Rural" | "Urban" | "Prefer not to say";

export type VerificationStatus = "verified" | "needs_verification" | "outdated";

export type IncomeRange =
  | "Below ₹1 lakh"
  | "₹1–2.5 lakh"
  | "₹2.5–5 lakh"
  | "₹5–8 lakh"
  | "₹8–10 lakh"
  | "Above ₹10 lakh"
  | "Prefer not to say";

export interface UserProfile {
  occupations: Occupation[];
  state: string;
  age: number | null;
  education: EducationLevel | "";
  socialCategory: SocialCategory | "";
  gender: Gender | "";
  incomeRange: IncomeRange | "";
  disability: "Yes" | "No" | "Prefer not to say" | "";
  areaType: AreaType | "";
}

export interface MatchResult {
  scheme: Scheme;
  matchScore: number; // 0–100
  matchLevel: "Strong Match" | "Potential Match" | "Needs Verification";
  matchedCriteria: string[];
  unmatchedCriteria: string[];
}

export type Language = "en" | "hi";

export interface CategoryInfo {
  id: Category;
  icon: string;
  label: string;
  labelHi: string;
  description: string;
  descriptionHi: string;
}

export const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
] as const;

export const UNION_TERRITORIES = [
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
] as const;

export const ALL_STATES_AND_UTS = [
  ...INDIAN_STATES,
  ...UNION_TERRITORIES,
] as const;
