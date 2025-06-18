import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ContextSection from '@/components/sections/ContextSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import Footer from '@/components/layout/Footer';
import SDKSection from '@/components/sections/SDKSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ContextSection />
        <SolutionsSection />
        <FeaturesSection />
        <SDKSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
