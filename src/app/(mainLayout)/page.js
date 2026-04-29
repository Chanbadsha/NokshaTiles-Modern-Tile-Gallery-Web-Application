import CategoriesSection from "@/components/HomePage/CategoriesSection";
import Hero from "@/components/HomePage/Hero";
import Marquees from "@/components/HomePage/Marquee";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Marquees />
      <CategoriesSection />
    </div>
  );
};

export default HomePage;
