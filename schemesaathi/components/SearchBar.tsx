"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, Mic, MicOff } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

interface SearchBarProps {
  large?: boolean;
  className?: string;
}

export default function SearchBar({ large = false, className = "" }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [voiceStatus, setVoiceStatus] = useState<"idle" | "listening" | "unsupported">("idle");
  const router = useRouter();
  const { t } = useLanguage();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/results?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const startVoiceSearch = () => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      (window as unknown as Record<string, unknown>).SpeechRecognition ||
      (window as unknown as Record<string, unknown>).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setVoiceStatus("unsupported");
      setTimeout(() => setVoiceStatus("idle"), 3000);
      return;
    }

    const recognition = new (SpeechRecognition as new () => {
      lang: string;
      interimResults: boolean;
      maxAlternatives: number;
      start: () => void;
      onresult: ((event: { results: { transcript: string }[][] }) => void) | null;
      onerror: (() => void) | null;
      onend: (() => void) | null;
    })();
    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
      setVoiceStatus("idle");
      if (transcript.trim()) {
        router.push(`/results?q=${encodeURIComponent(transcript.trim())}`);
      }
    };

    recognition.onerror = () => {
      setVoiceStatus("idle");
    };

    recognition.onend = () => {
      setVoiceStatus("idle");
    };

    setVoiceStatus("listening");
    recognition.start();
  };

  const examples = [
    "Scholarships for students",
    "Farmer subsidy",
    "Women entrepreneurship",
    "Housing assistance",
    "Business loans",
  ];

  return (
    <div className={className}>
      <form onSubmit={handleSearch} role="search" aria-label="Search schemes">
        <div
          className={`relative flex items-center bg-white border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow ${
            large ? "py-0.5 sm:py-1 px-1" : ""
          }`}
        >
          <Search
            className={`absolute left-3.5 sm:left-4 text-text-secondary ${
              large ? "w-4 h-4 sm:w-5 sm:h-5" : "w-4 h-4"
            }`}
            aria-hidden="true"
          />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("hero.search.placeholder")}
            className={`w-full bg-transparent border-0 outline-none text-text placeholder:text-text-secondary ${
              large
                ? "pl-10 sm:pl-12 pr-24 sm:pr-28 py-3.5 sm:py-4 text-sm sm:text-base"
                : "pl-9 sm:pl-10 pr-20 sm:pr-24 py-2.5 sm:py-3 text-xs sm:text-sm"
            }`}
            aria-label="Search for schemes"
          />
          <div className="absolute right-1.5 sm:right-2 flex items-center gap-1">
            <button
              type="button"
              onClick={startVoiceSearch}
              className={`p-2 rounded-lg transition-colors flex items-center justify-center min-w-[36px] min-h-[36px] ${
                voiceStatus === "listening"
                  ? "text-error bg-red-50"
                  : "text-text-secondary hover:text-primary hover:bg-light-blue"
              }`}
              aria-label={voiceStatus === "listening" ? "Listening..." : "Voice search"}
              title={
                voiceStatus === "unsupported"
                  ? t("search.voiceUnsupported")
                  : "Voice search"
              }
            >
              {voiceStatus === "unsupported" ? (
                <MicOff className="w-4 h-4" />
              ) : (
                <Mic className={`w-4 h-4 ${voiceStatus === "listening" ? "animate-pulse" : ""}`} />
              )}
            </button>
            <button
              type="submit"
              className={`bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors shrink-0 ${
                large
                  ? "px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm"
                  : "px-3 sm:px-4 py-1.5 sm:py-2 text-xs"
              }`}
            >
              {t("nav.findSchemes").split(" ")[0]}
            </button>
          </div>
        </div>
      </form>

      {/* Voice unsupported message */}
      {voiceStatus === "unsupported" && (
        <p className="text-xs text-warning mt-2" role="alert">
          {t("search.voiceUnsupported")}
        </p>
      )}

      {/* Search examples */}
      {large && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-xs text-text-secondary">{t("search.examples")}</span>
          {examples.map((example) => (
            <button
              key={example}
              type="button"
              onClick={() => {
                setQuery(example);
                router.push(`/results?q=${encodeURIComponent(example)}`);
              }}
              className="text-xs text-primary hover:text-primary-dark bg-light-blue hover:bg-light-blue-dark px-3 py-1.5 rounded-md transition-colors"
            >
              {example}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
