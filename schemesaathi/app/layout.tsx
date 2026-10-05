import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "SchemeSaathi — Find Your Government Benefits & Apply Directly",
  description:
    "An independent third-party Indian Government Benefits Discovery Platform. Match your eligibility across Central & State schemes with zero document uploads and direct verified official portal links.",
  keywords: [
    "Indian Government Schemes",
    "Sarkari Yojana",
    "PM Kisan",
    "Ayushman Bharat",
    "Scholarships",
    "Central Schemes",
    "State Schemes",
    "Scheme Eligibility",
    "Civic Tech India",
  ],
  authors: [{ name: "SchemeSaathi Project" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#F7F9FC] text-[#172B3A] font-sans">
        <LanguageProvider>
          <DisclaimerBanner />
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
