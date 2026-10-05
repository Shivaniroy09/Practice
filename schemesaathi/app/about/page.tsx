"use client";

import React from "react";
import Link from "next/link";
import {
  Users,
  ShieldAlert,
  ChevronRight,
  HeartHandshake,
  CheckCircle2,
  Lock,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-8 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">About Us</span>
        </nav>

        {/* Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-2">
            <Users className="w-4 h-4" />
            <span>Civic Tech Mission</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight mb-4">
            About SchemeSaathi
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            SchemeSaathi is an independent, non-governmental civic tech initiative dedicated to democratizing access to welfare information for all Indian citizens.
          </p>
        </div>

        {/* Clear Independence Declaration */}
        <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 sm:p-7 mb-12">
          <div className="flex items-start gap-3.5">
            <ShieldAlert className="w-6 h-6 text-warning shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-950 text-base mb-1">
                Important Declaration of Independence
              </h3>
              <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                SchemeSaathi is <strong>NOT</strong> an official website of the Government of India or any State Government. We do not represent, partner with, or act as an agent for any government department. Our platform operates strictly as an independent information aggregator and eligibility discovery tool to help citizens find official public services.
              </p>
            </div>
          </div>
        </div>

        {/* Why SchemeSaathi Exists */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-8 space-y-4">
          <h2 className="text-xl font-bold text-navy">The Challenge We Address</h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Every year, the Central and State Governments allocate hundreds of thousands of crores of rupees to welfare programs covering agriculture, healthcare, scholarships, pensions, and MSME entrepreneurship.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            However, information is scattered across thousands of disconnected websites, written in dense bureaucratic language, and obscured behind complex eligibility conditions. As a result, millions of eligible citizens—especially students, farmers, daily-wage workers, and small business owners—never learn about programs designed for their benefit.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            SchemeSaathi bridges this civic information gap by providing a clean, accessible, zero-surveillance discovery engine that indexes requirements and routes citizens straight to the official government applications.
          </p>
        </div>

        {/* Our 4 Guiding Principles */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-12">
          <h2 className="text-xl font-bold text-navy mb-6">Our Guiding Principles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-slate-100 p-5 rounded-xl bg-slate-50/50">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-trust-green flex items-center justify-center mb-3">
                <Lock className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-navy text-sm mb-1">Privacy First</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We never collect Aadhaar, PAN, phone numbers, or upload documents. All eligibility calculations happen locally on your phone or computer.
              </p>
            </div>

            <div className="border border-slate-100 p-5 rounded-xl bg-slate-50/50">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-primary flex items-center justify-center mb-3">
                <ExternalLink className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-navy text-sm mb-1">Direct Official Routing</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We never intermediate applications. We connect you directly to authentic government portals (<code className="font-mono">.gov.in</code> / <code className="font-mono">.nic.in</code>).
              </p>
            </div>

            <div className="border border-slate-100 p-5 rounded-xl bg-slate-50/50">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-navy text-sm mb-1">100% Free & Open</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                No subscription fees, no premium tiers, no sponsored ads, and no gatekeeping of civic information.
              </p>
            </div>

            <div className="border border-slate-100 p-5 rounded-xl bg-slate-50/50">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-warning flex items-center justify-center mb-3">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-navy text-sm mb-1">Editorial Integrity</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Scheme criteria are referenced against verified gazettes and ministry portals. Outdated information can be flagged anytime by users.
              </p>
            </div>
          </div>
        </div>

        {/* Developer & Creator Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                Platform Architecture & Design
              </div>
              <h2 className="text-xl font-bold text-navy">
                Designed & Developed by Shivani
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl leading-relaxed">
                SchemeSaathi was conceptualized, designed, and developed by Shivani as an open, privacy-centric civic-tech solution to empower citizens across India in discovering their rightful benefits.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="https://www.linkedin.com/in/shivani2302/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-blue-50 text-primary hover:bg-primary hover:text-white border border-blue-200 text-xs font-semibold transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Shivaniroy09"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-800 hover:text-white border border-slate-300 text-xs font-semibold transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/shivaniii.jpeg/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-pink-50 text-pink-700 hover:bg-pink-600 hover:text-white border border-pink-200 text-xs font-semibold transition-colors"
              >
                Instagram
              </a>
              <a
                href="mailto:shivaniroy2309@gmail.com"
                className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-700 hover:text-white border border-emerald-200 text-xs font-semibold transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-6">
          <Link
            href="/results"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy hover:bg-navy-light text-white rounded-xl font-semibold text-sm shadow-md transition-colors"
          >
            <span>Explore All Government Schemes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
