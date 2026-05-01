import CategoriesSection from "@/components/HomePage/CategoriesSection";
import DesignInspiration from "@/components/HomePage/DesignInspiration";
import Hero from "@/components/HomePage/Hero";
import Marquees from "@/components/HomePage/Marquee";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Marquees />
      <CategoriesSection />
      <DesignInspiration />
    </div>
  );
};

export default HomePage;
