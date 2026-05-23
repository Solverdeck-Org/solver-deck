import type { Metadata } from "next";
import { LegalBody } from "@/features/legal/LegalBody";
import { sanityFetch } from "@/sanity/lib/live";
import { getLegalPageQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Terms of Service | Solverdeck",
  description: "Read Solverdeck's terms of service governing use of our website and services.",
  alternates: { canonical: "https://solverdeck.com/terms" },
  robots: { index: false, follow: false },
};

export default async function TermsPage() {
  const { data: page } = await sanityFetch({
    query: getLegalPageQuery,
    params: { slug: "terms-of-service" },
  });

  const updatedAt = page?._updatedAt
    ? new Date(page._updatedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
    : null;

  return (
    <main className="min-h-screen bg-black">
      <section className="pt-28 sm:pt-36 pb-24 px-5 sm:px-8 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{page?.title ?? "Terms of Service"}</h1>
        {updatedAt && (
          <p className="text-white text-sm mb-12 font-mono">Last updated: {updatedAt}</p>
        )}
        {page?.sections?.length ? (
          <LegalBody sections={page.sections} intro={page.intro} />
        ) : (
          <p className="text-white">This page is being updated. Please check back soon.</p>
        )}
      </section>
    </main>
  );
}
