import type { Metadata } from "next";
import { LegalBody } from "@/features/legal/LegalBody";
import { sanityFetch } from "@/sanity/lib/live";
import { getLegalPageQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Privacy Policy | Solverdeck",
  description: "Read Solverdeck's privacy policy to understand how we collect, use, and protect your personal data in accordance with UK GDPR.",
  alternates: { canonical: "https://solverdeck.com/privacy" },
  robots: { index: false, follow: false },
};

export default async function PrivacyPage() {
  const { data: page } = await sanityFetch({
    query: getLegalPageQuery,
    params: { slug: "privacy-policy" },
  });

  const updatedAt = page?._updatedAt
    ? new Date(page._updatedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
    : null;

  return (
    <main className="min-h-screen bg-black">
      <section className="pt-28 sm:pt-36 pb-24 px-5 sm:px-8 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{page?.title ?? "Privacy Policy"}</h1>
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
