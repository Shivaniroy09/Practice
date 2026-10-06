import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { schemes } from "@/data/schemes";
import { categories } from "@/data/categories";
import SchemeCard from "@/components/SchemeCard";

export function generateStaticParams() {
  const allCategories = new Set<string>();
  categories.forEach((c) => allCategories.add(c.id));
  schemes.forEach((s) => s.categories.forEach((c) => allCategories.add(c)));
  return Array.from(allCategories).map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);
  const categoryInfo = categories.find(
    (c) => c.id.toLowerCase() === decodedCategory.toLowerCase()
  );
  const categoryName = categoryInfo ? categoryInfo.label : decodedCategory;
  return {
    title: `${categoryName} Schemes — SchemeSaathi`,
    description: `Browse all verified Central & State government schemes under ${categoryName}.`,
  };
}

export default async function CategorySchemesPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);

  const categoryInfo = categories.find(
    (c) => c.id.toLowerCase() === decodedCategory.toLowerCase()
  );

  const filteredSchemes = schemes.filter((s) =>
    s.categories.some(
      (c) => c.toLowerCase() === decodedCategory.toLowerCase()
    )
  );

  if (!categoryInfo && filteredSchemes.length === 0) {
    notFound();
  }

  const categoryName = categoryInfo ? categoryInfo.label : decodedCategory;

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/categories" className="hover:text-primary transition-colors">
            Categories
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">{categoryName}</span>
        </nav>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy">
              {categoryName} Schemes
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              {categoryInfo?.description ||
                `Browse all verified Central & State government schemes under ${categoryName}.`}
            </p>
          </div>

          <Link
            href="/find-schemes"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-semibold shrink-0 shadow-xs transition-colors"
          >
            <span>Check My Eligibility</span>
          </Link>
        </div>

        {filteredSchemes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSchemes.map((scheme) => (
              <SchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center">
            <p className="text-slate-600 text-sm mb-4">
              No active schemes currently listed under this category.
            </p>
            <Link
              href="/categories"
              className="text-primary hover:underline text-xs font-semibold inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all categories</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
