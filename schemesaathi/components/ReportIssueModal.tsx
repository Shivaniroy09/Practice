"use client";

import React, { useState } from "react";
import { Flag, X, CheckCircle } from "lucide-react";

interface ReportIssueModalProps {
  isOpen: boolean;
  onClose: () => void;
  schemeId?: string;
  schemeName?: string;
}

export default function ReportIssueModal({
  isOpen,
  onClose,
  schemeName,
}: ReportIssueModalProps) {
  const [issueType, setIssueType] = useState("outdated_info");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setDetails("");
      onClose();
    }, 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="report-modal-title"
    >
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-5 sm:p-6 shadow-2xl border border-slate-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-full bg-amber-50 text-warning flex items-center justify-center">
            <Flag className="w-5 h-5" />
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <h3 id="report-modal-title" className="text-lg font-bold text-navy mb-1">
          Report Inaccurate Information
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          Help us keep citizen information 100% accurate and up to date.
          {schemeName && (
            <span className="block mt-1 font-semibold text-slate-700">
              Scheme: {schemeName}
            </span>
          )}
        </p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
            <CheckCircle className="w-10 h-10 text-trust-green mx-auto mb-2" />
            <h4 className="font-bold text-navy text-sm">Thank You for Reporting!</h4>
            <p className="text-xs text-slate-600 mt-1">
              Our civic editorial team will verify against the latest gazette or official department notification.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="issue-type"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Issue Type
              </label>
              <select
                id="issue-type"
                value={issueType}
                onChange={(e) => setIssueType(e.target.value)}
                className="w-full text-sm border border-slate-300 rounded-lg p-2.5 bg-white text-slate-800 focus:ring-2 focus:ring-primary focus:border-primary outline-hidden"
              >
                <option value="outdated_info">Outdated Scheme Information / Criteria</option>
                <option value="broken_link">Broken Official Portal URL</option>
                <option value="eligibility_mismatch">Incorrect Eligibility Criteria</option>
                <option value="document_missing">Missing Required Document</option>
                <option value="discontinued">Scheme Discontinued or Renamed</option>
                <option value="other">Other Issue</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="issue-details"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Details / Official Source Reference
              </label>
              <textarea
                id="issue-details"
                rows={4}
                required
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Please describe what information is incorrect or provide an official notification link..."
                className="w-full text-sm border border-slate-300 rounded-lg p-3 bg-white text-slate-800 focus:ring-2 focus:ring-primary focus:border-primary outline-hidden placeholder:text-slate-400"
              />
            </div>

            <p className="text-[11px] text-slate-500">
              SchemeSaathi does not collect your name or contact info for bug reports to maintain complete privacy.
            </p>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold bg-navy hover:bg-navy-light text-white rounded-lg transition-colors"
              >
                Submit Report
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
