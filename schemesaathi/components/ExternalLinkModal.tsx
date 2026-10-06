"use client";

import React from "react";
import { ExternalLink, ShieldAlert, CheckCircle2, X } from "lucide-react";

interface ExternalLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetUrl: string;
  schemeName: string;
}

export default function ExternalLinkModal({
  isOpen,
  onClose,
  targetUrl,
  schemeName,
}: ExternalLinkModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-5 sm:p-6 shadow-2xl border border-slate-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-full bg-light-blue text-primary flex items-center justify-center shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <h3 id="modal-title" className="text-lg font-bold text-navy mb-2">
          Leaving SchemeSaathi for Official Government Portal
        </h3>

        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          You are being redirected to the verified official government portal for:
          <span className="block font-semibold text-navy mt-1 p-2 bg-slate-50 rounded border border-slate-200">
            {schemeName}
          </span>
        </p>

        <div className="bg-amber-50/70 border border-amber-200 rounded-lg p-3.5 mb-5 text-xs text-amber-900 space-y-2">
          <div className="flex items-center gap-1.5 font-semibold text-amber-950">
            <CheckCircle2 className="w-4 h-4 text-warning shrink-0" />
            <span>Important Notice:</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>SchemeSaathi does not process applications or store government documents.</li>
            <li>All applications, verifications, and approvals are managed exclusively by the respective government department.</li>
            <li>Double-check you are on a genuine government domain (usually ending in <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold">.gov.in</code> or <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold">.nic.in</code>).</li>
          </ul>
        </div>

        <div className="text-xs text-slate-500 mb-5 break-all">
          <span className="font-semibold text-slate-700">Official Destination URL: </span>
          <br />
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-primary hover:underline inline-flex items-center gap-1 mt-0.5"
          >
            <span>{targetUrl}</span>
            <ExternalLink className="w-3 h-3 shrink-0" />
          </a>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-3 border-t border-slate-100">
          <button
            onClick={onClose}
            type="button"
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
          >
            Stay on SchemeSaathi
          </button>
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-navy hover:bg-navy-light text-white font-semibold text-sm shadow-sm transition-colors text-center"
          >
            <span>Proceed to Official Website</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
