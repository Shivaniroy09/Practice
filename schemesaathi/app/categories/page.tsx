"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Layers } from "lucide-react";
import { categories } from "@/data/categories";
import { schemes } from "@/data/schemes";
import CategoryCard from "@/components/CategoryCard";

export default function CategoriesPage() {
  const categoryCounts = categories.map((cat) => {
    const count = schemes.filter((s) => s.categories.includes(cat.id)).length;
    return { ...cat, count };
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
          <span className="text-slate-800 font-semibold">Scheme Categories</span>
        </nav>

        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-2">
            <Layers className="w-4 h-4" />
            <span>Civic Taxonomy</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-navy tracking-tight mb-2">
            Browse Schemes by Category
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Government welfare initiatives span multiple areas including education, agriculture, healthcare, housing, and social security. Select a sector below to view all verified schemes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryCounts.map((cat) => (
            <CategoryCard key={cat.id} category={cat} count={cat.count} />
          ))}
        </div>
      </div>
    </div>
  );
}
