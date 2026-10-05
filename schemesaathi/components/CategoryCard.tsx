"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Wheat,
  Briefcase,
  UserCheck,
  Heart,
  Stethoscope,
  Home,
  Hammer,
  Users,
  Accessibility,
  ArrowRight,
  Shield,
  Coins,
} from "lucide-react";
import { CategoryInfo } from "@/types";
import { useLanguage } from "@/lib/LanguageContext";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  Wheat,
  Briefcase,
  UserCheck,
  Heart,
  Stethoscope,
  Home,
  Hammer,
  Users,
  Accessibility,
  Coins,
  Shield,
};

interface CategoryCardProps {
  category: CategoryInfo;
  count?: number;
}

export default function CategoryCard({ category, count }: CategoryCardProps) {
  const { lang } = useLanguage();
  const IconComponent = ICON_MAP[category.icon] || Briefcase;

  const label = lang === "hi" ? category.labelHi : category.label;
  const description =
    lang === "hi" ? category.descriptionHi : category.description;

  return (
    <Link
      href={`/results?category=${encodeURIComponent(category.id)}`}
      className="group bg-white rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-md p-5 transition-all duration-200 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-light-blue text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-200">
            <IconComponent className="w-6 h-6" />
          </div>
          {typeof count === "number" && (
            <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full group-hover:bg-blue-50 group-hover:text-primary transition-colors">
              {count} schemes
            </span>
          )}
        </div>

        <h3 className="font-bold text-navy text-base mb-1.5 group-hover:text-primary transition-colors">
          {label}
        </h3>

        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-primary group-hover:translate-x-0.5 transition-transform duration-150">
        <span>Explore benefits</span>
        <ArrowRight className="w-3.5 h-3.5 ml-1" />
      </div>
    </Link>
  );
}
