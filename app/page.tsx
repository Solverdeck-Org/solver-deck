import CTASection from "@/components/shared/CTASection"
import BlogSection from "@/features/home-page/BlogSection"
import CaseStudySection from "@/features/home-page/CaseStudySection"
import FAQSection from "@/features/home-page/FAQSection"
import HeroSection from "@/features/home-page/HeroSection"
import ServicesSection from "@/features/home-page/ServicesSection"
import TestimonialsSection from "@/features/home-page/TestimonialsSection"
import ValuePropositionSection from "@/features/home-page/ValuePropositionSection"
import ProcessSection from "@/features/services-page/ProcessSection"

const Home = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ValuePropositionSection />      
      <TestimonialsSection />
      <ProcessSection />
      <CaseStudySection />
      <BlogSection />
      <CTASection />
      <FAQSection />
    </main>
  )
}

export default Home