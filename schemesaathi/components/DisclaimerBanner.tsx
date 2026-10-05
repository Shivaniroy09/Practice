"use client";

import React from "react";
import { Info } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function DisclaimerBanner() {
  const { t } = useLanguage();

  return (
    <div className="bg-light-blue border-b border-light-blue-dark" role="status">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 justify-center text-center text-xs sm:text-sm text-navy leading-normal">
          <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-primary" aria-hidden="true" />
          <span className="font-semibold">{t("site.independentPlatform")}</span>
          <span className="text-text-secondary text-xs sm:text-sm">
            — {t("site.disclaimer")}
          </span>
        </div>
      </div>
    </div>
  );
}
