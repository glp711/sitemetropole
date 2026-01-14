import Hero from "@/components/Hero";
import LocationCard from "@/components/LocationCard";
import PromotionsSection from "@/components/PromotionsSection";
import ExpansionSection from "@/components/ExpansionSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <LocationCard />
      <PromotionsSection />
      <ExpansionSection />
    </div>
  );
};

export default Home;