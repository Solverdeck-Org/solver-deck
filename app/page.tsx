import CTA from "@/components/CTA";
import HeroSection from "@/components/HeroSection";
import About from "@/components/section/About";
import Contact from "@/components/section/Contact";
import Faq from "@/components/section/Faq";
import Process from "@/components/section/Process";
import Services from "@/components/section/Services";

import GoogleReviewsMarquee from "@/components/GoogleReviewsMarquee";
import { getGooglePlaceDetails } from "@/lib/google-places";

const Home = async () => {
  const placeDetails = await getGooglePlaceDetails();
  console.log("Home Page - Place Details:", placeDetails ? "Data received" : "No data");

  return (
    <main>
      <HeroSection 
        rating={placeDetails?.rating} 
        totalReviews={placeDetails?.userRatingCount} 
      />
      <GoogleReviewsMarquee reviews={placeDetails?.reviews} />
      <Services />
      <Process />
      <About />
      <Contact />
      <Faq />
      <CTA />
    </main>
  );
};

export default Home;
