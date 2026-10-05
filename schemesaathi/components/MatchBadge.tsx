"use client";

import React from "react";
import { CheckCircle2, AlertCircle, HelpCircle } from "lucide-react";

interface MatchBadgeProps {
  level: "Strong Match" | "Potential Match" | "Needs Verification";
  score?: number;
  showScore?: boolean;
  size?: "sm" | "md";
}

export default function MatchBadge({
  level,
  score,
  showScore = false,
  size = "md",
}: MatchBadgeProps) {
  const config = {
    "Strong Match": {
      icon: CheckCircle2,
      bg: "bg-green-50",
      text: "text-trust-green",
      border: "border-green-200",
      label: "🟢 Strong Match",
    },
    "Potential Match": {
      icon: AlertCircle,
      bg: "bg-blue-50",
      text: "text-primary",
      border: "border-blue-200",
      label: "🔵 Potential Match",
    },
    "Needs Verification": {
      icon: HelpCircle,
      bg: "bg-amber-50",
      text: "text-warning",
      border: "border-amber-200",
      label: "🟡 Needs Verification",
    },
  };

  const c = config[level];
  const Icon = c.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 border rounded-md font-medium ${c.bg} ${c.text} ${c.border} ${
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm"
      }`}
      role="status"
      aria-label={`Eligibility match level: ${level}`}
    >
      <Icon className={size === "sm" ? "w-3 h-3" : "w-4 h-4"} aria-hidden="true" />
      <span>{c.label}</span>
      {showScore && score !== undefined && (
        <span className="opacity-75">({score}%)</span>
      )}
    </span>
  );
}
