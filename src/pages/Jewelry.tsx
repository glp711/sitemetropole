import PageHero from "@/components/PageHero";
import AllStores from "@/components/AllStores";

const Jewelry = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHero 
        title="Joias & Bijuterias"
        subtitle="Encontre peças únicas e acessórios para completar seu look com estilo e elegância"
      />
      
      <AllStores defaultCategory="Joias & Bijuterias" />
    </div>
  );
};

export default Jewelry;