"use client";

import React from "react";
import Link from "next/link";
import { Users } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const linkSections = [
    {
      title: t("nav.findSchemes"),
      links: [
        { href: "/find-schemes", label: t("nav.findSchemes") },
        { href: "/categories", label: t("nav.categories") },
        { href: "/central-schemes", label: t("nav.centralSchemes") },
        { href: "/state-schemes", label: t("nav.stateSchemes") },
      ],
    },
    {
      title: t("nav.about"),
      links: [
        { href: "/how-it-works", label: t("nav.howItWorks") },
        { href: "/about", label: t("nav.about") },
        { href: "/privacy", label: t("nav.privacy") },
        { href: "/disclaimer", label: t("nav.disclaimer") },
      ],
    },
    {
      title: t("nav.contact"),
      links: [
        { href: "/contact", label: t("nav.reportIssue") },
      ],
    },
  ];

  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold">{t("site.name")}</span>
              </div>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              {t("site.footerDescription")}
            </p>
            <p className="text-sm text-blue-300 leading-relaxed">
              {t("site.tagline")}
            </p>
          </div>

          {/* Link Sections */}
          {linkSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-blue-200 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-xs text-blue-300 text-center leading-relaxed max-w-3xl mx-auto">
            {t("site.footerDisclaimer")}
          </p>
          <p className="text-xs text-blue-400 text-center mt-3">
            © {new Date().getFullYear()} {t("site.name")}. {t("site.footerDescription")}.
          </p>
        </div>
      </div>
    </footer>
  );
}
