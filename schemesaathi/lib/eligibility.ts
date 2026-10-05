// ============================================================================
// SchemeSaathi — Eligibility Matching Engine
// Compares user profile against scheme requirements to determine match level.
// All matching is done client-side. No data is sent to any server.
// ============================================================================

import {
  Scheme,
  UserProfile,
  MatchResult,
  IncomeRange,
} from "@/types";

/**
 * Convert income range string to a numeric upper bound (in lakhs).
 */
function incomeRangeToNumber(range: IncomeRange): number | null {
  switch (range) {
    case "Below ₹1 lakh":
      return 1;
    case "₹1–2.5 lakh":
      return 2.5;
    case "₹2.5–5 lakh":
      return 5;
    case "₹5–8 lakh":
      return 8;
    case "₹8–10 lakh":
      return 10;
    case "Above ₹10 lakh":
      return 100; // effectively no upper limit issue
    case "Prefer not to say":
      return null;
    default:
      return null;
  }
}

/**
 * Main eligibility matching function.
 * Returns a list of MatchResults sorted by match score (descending).
 */
export function matchSchemes(
  profile: UserProfile,
  allSchemes: Scheme[]
): MatchResult[] {
  const results: MatchResult[] = [];

  for (const scheme of allSchemes) {
    if (scheme.status !== "Active") continue;

    const matched: string[] = [];
    const unmatched: string[] = [];
    let totalCriteria = 0;
    let matchedCount = 0;

    // ── 1. State match ───────────────────────────────────────────────────
    if (profile.state) {
      totalCriteria++;
      if (scheme.governmentLevel === "Central") {
        // Central schemes apply to all states — but check if state is specifically listed
        if (!scheme.state || scheme.state === profile.state) {
          matched.push("State matches (Central scheme applicable nationwide)");
          matchedCount++;
        } else {
          matched.push("Central government scheme");
          matchedCount += 0.5;
        }
      } else if (scheme.state) {
        if (scheme.state === profile.state) {
          matched.push(`State matches: ${profile.state}`);
          matchedCount++;
        } else {
          unmatched.push(
            `This scheme is for ${scheme.state} residents`
          );
        }
      }
    }

    // ── 2. Occupation match ──────────────────────────────────────────────
    if (profile.occupations.length > 0 && scheme.occupations.length > 0) {
      totalCriteria++;
      const occupationMatch = profile.occupations.some((occ) =>
        scheme.occupations.includes(occ)
      );
      if (occupationMatch) {
        matched.push("Occupation category matches");
        matchedCount++;
      } else {
        unmatched.push("Occupation may not match scheme target beneficiaries");
      }
    }

    // ── 3. Age match ─────────────────────────────────────────────────────
    if (profile.age !== null && (scheme.minAge || scheme.maxAge)) {
      totalCriteria++;
      const ageValid =
        (scheme.minAge === undefined || profile.age >= scheme.minAge) &&
        (scheme.maxAge === undefined || profile.age <= scheme.maxAge);
      if (ageValid) {
        matched.push("Age within eligible range");
        matchedCount++;
      } else {
        unmatched.push("Age may be outside the eligible range");
      }
    }

    // ── 4. Gender match ──────────────────────────────────────────────────
    if (profile.gender && profile.gender !== "Prefer not to say" && scheme.genders) {
      totalCriteria++;
      if (scheme.genders.includes(profile.gender)) {
        matched.push("Gender matches");
        matchedCount++;
      } else {
        unmatched.push("This scheme may be limited to specific genders");
      }
    }

    // ── 5. Education match ───────────────────────────────────────────────
    if (profile.education && scheme.educationLevels) {
      totalCriteria++;
      if (scheme.educationLevels.includes(profile.education)) {
        matched.push("Education level matches");
        matchedCount++;
      } else {
        unmatched.push(
          "Education level may not align with scheme requirements"
        );
      }
    }

    // ── 6. Social category match ─────────────────────────────────────────
    if (
      profile.socialCategory &&
      profile.socialCategory !== "Prefer not to say" &&
      scheme.socialCategories
    ) {
      totalCriteria++;
      if (scheme.socialCategories.includes(profile.socialCategory)) {
        matched.push("Social category matches");
        matchedCount++;
      } else {
        unmatched.push(
          "Social category may not be covered under this scheme"
        );
      }
    }

    // ── 7. Income match ─────────────────────────────────────────────────
    if (
      profile.incomeRange &&
      profile.incomeRange !== "Prefer not to say" &&
      scheme.incomeLimit
    ) {
      totalCriteria++;
      const userIncome = incomeRangeToNumber(profile.incomeRange as IncomeRange);
      if (userIncome !== null && userIncome <= scheme.incomeLimit) {
        matched.push("Income range appears within the listed threshold");
        matchedCount++;
      } else if (userIncome !== null) {
        unmatched.push("Income may exceed the scheme's threshold");
      }
    }

    // ── 8. Disability match ──────────────────────────────────────────────
    if (profile.disability && profile.disability !== "Prefer not to say") {
      if (scheme.disabilityApplicable === true) {
        totalCriteria++;
        if (profile.disability === "Yes") {
          matched.push("Disability-specific scheme applicable");
          matchedCount++;
        } else {
          unmatched.push("This scheme is specifically for persons with disabilities");
        }
      }
    }

    // ── 9. Rural/Urban match ─────────────────────────────────────────────
    if (
      profile.areaType &&
      profile.areaType !== "Prefer not to say" &&
      scheme.ruralUrban
    ) {
      totalCriteria++;
      if (scheme.ruralUrban.includes(profile.areaType)) {
        matched.push("Area type (rural/urban) matches");
        matchedCount++;
      } else {
        unmatched.push(
          `This scheme may be limited to ${scheme.ruralUrban.join("/")} areas`
        );
      }
    }

    // ── Skip schemes with critical mismatches ────────────────────────────
    // If the scheme is a state-level scheme and the state doesn't match, skip
    if (
      scheme.governmentLevel === "State" &&
      profile.state &&
      scheme.state &&
      scheme.state !== profile.state
    ) {
      continue;
    }

    // If the scheme requires disability and user said No, skip
    if (
      scheme.disabilityApplicable === true &&
      profile.disability === "No"
    ) {
      continue;
    }

    // ── Calculate score ──────────────────────────────────────────────────
    if (totalCriteria === 0) continue;

    const rawScore = matchedCount / totalCriteria;
    const matchScore = Math.round(rawScore * 100);

    let matchLevel: MatchResult["matchLevel"];
    if (matchScore >= 70) {
      matchLevel = "Strong Match";
    } else if (matchScore >= 40) {
      matchLevel = "Potential Match";
    } else {
      matchLevel = "Needs Verification";
    }

    // Only include results with at least 1 matched criterion
    if (matchedCount >= 1) {
      results.push({
        scheme,
        matchScore,
        matchLevel,
        matchedCriteria: matched,
        unmatchedCriteria: unmatched,
      });
    }
  }

  // Sort by match score descending
  results.sort((a, b) => b.matchScore - a.matchScore);

  return results;
}

/**
 * Search schemes by keyword across multiple fields.
 */
export function searchSchemes(query: string, allSchemes: Scheme[]): Scheme[] {
  if (!query.trim()) return allSchemes;

  const lowerQuery = query.toLowerCase().trim();
  const terms = lowerQuery.split(/\s+/);

  return allSchemes.filter((scheme) => {
    const searchText = [
      scheme.name,
      scheme.nameHi || "",
      scheme.shortDescription,
      scheme.shortDescriptionHi || "",
      scheme.department,
      scheme.ministry || "",
      scheme.state || "",
      ...scheme.categories,
      ...scheme.occupations,
      ...scheme.benefits,
      ...(scheme.benefitsHi || []),
    ]
      .join(" ")
      .toLowerCase();

    return terms.every((term) => searchText.includes(term));
  });
}

/**
 * Filter schemes by various criteria.
 */
export function filterSchemes(
  allSchemes: Scheme[],
  filters: {
    governmentLevel?: "Central" | "State";
    state?: string;
    category?: string;
    matchLevel?: string;
  }
): Scheme[] {
  return allSchemes.filter((scheme) => {
    if (
      filters.governmentLevel &&
      scheme.governmentLevel !== filters.governmentLevel
    ) {
      return false;
    }
    if (filters.state && scheme.state !== filters.state) {
      return false;
    }
    if (
      filters.category &&
      !scheme.categories.includes(filters.category as never)
    ) {
      return false;
    }
    return true;
  });
}
