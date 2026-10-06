import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { schemes } from "@/data/schemes";
import SchemeDetailClient from "./SchemeDetailClient";

export function generateStaticParams() {
  return schemes.map((scheme) => ({
    id: scheme.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const scheme = schemes.find((s) => s.id === id);
  if (!scheme) {
    return {
      title: "Scheme Not Found — SchemeSaathi",
    };
  }
  return {
    title: `${scheme.name} — SchemeSaathi`,
    description: scheme.shortDescription,
  };
}

export default async function SchemeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const scheme = schemes.find((s) => s.id === id);

  if (!scheme) {
    notFound();
  }

  return <SchemeDetailClient id={id} />;
}
