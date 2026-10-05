"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Users, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, lang, setLang } = useLanguage();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/find-schemes", label: t("nav.findSchemes") },
    { href: "/categories", label: t("nav.categories") },
    { href: "/central-schemes", label: t("nav.centralSchemes") },
    { href: "/state-schemes", label: t("nav.stateSchemes") },
    { href: "/how-it-works", label: t("nav.howItWorks") },
    { href: "/about", label: t("nav.about") },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-navy text-white sticky top-0 z-50 border-b border-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            aria-label="SchemeSaathi Home"
          >
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight tracking-tight">
                {t("site.name")}
              </span>
              <span className="text-[11px] text-blue-200 leading-tight hidden sm:block">
                {t("site.subtitle")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-white/15 text-white"
                    : "text-blue-100 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Language + CTA */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLang(lang === "en" ? "hi" : "en")}
                className="flex items-center gap-1 px-2.5 py-1.5 text-sm text-blue-100 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                aria-label="Change language"
              >
                <span className="font-medium">
                  {lang === "en" ? "हिंदी" : "English"}
                </span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* CTA Button */}
            <Link
              href="/find-schemes"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-lg transition-colors"
            >
              {t("nav.findSchemes")}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-blue-100 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy border-t border-navy-light">
          <nav className="px-4 py-3 space-y-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-white/15 text-white"
                    : "text-blue-100 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/find-schemes"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-3 px-4 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-lg text-center transition-colors"
            >
              {t("hero.cta.findSchemes")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
