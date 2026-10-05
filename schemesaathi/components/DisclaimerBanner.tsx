"use client";

import React from "react";
import { Info } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function DisclaimerBanner() {
  const { t } = useLanguage();

  return (
    <div className="bg-light-blue border-b border-light-blue-dark" role="status">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex items-center gap-2 justify-center text-sm text-navy">
          <Info className="w-4 h-4 shrink-0 text-primary" aria-hidden="true" />
          <span className="font-medium">{t("site.independentPlatform")}</span>
          <span className="hidden sm:inline text-text-secondary">
            — {t("site.disclaimer")}
          </span>
        </div>
      </div>
    </div>
  );
}
