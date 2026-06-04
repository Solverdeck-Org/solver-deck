import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Newsletter } from "@/components/Newsletter";
import { sanityFetch } from "@/sanity/lib/live";
import { getNavbarCaseStudiesQuery } from "@/sanity/lib/queries";
import { GoogleAnalytics } from "@next/third-parties/google";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: navCaseStudies } = await sanityFetch({
    query: getNavbarCaseStudiesQuery,
  });

  return (
    <>
      <Header navCaseStudies={navCaseStudies ?? []} />
      {children}
      <Newsletter />
      <Footer />
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ""} />
    </>
  );
}
