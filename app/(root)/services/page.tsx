import CTASection from "@/components/shared/CTASection";
// import ProcessSection from "@/features/services-page/ProcessSection";
import ServicesHeroSection from "@/features/services-page/ServicesHeroSection";
import ServicesListSection from "@/features/services-page/ServicesListSection";
import TechnologiesSection from "@/features/services-page/TechnologiesSection";

const Services = () => {
  return (
    <div>
      <ServicesHeroSection />
      <ServicesListSection />
      {/* <ProcessSection /> */}
      <TechnologiesSection />
      <CTASection />
    </div>
  );
};

export default Services;
