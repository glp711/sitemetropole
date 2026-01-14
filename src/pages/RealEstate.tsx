import PageHero from "@/components/PageHero";
import AllStores from "@/components/AllStores";

const RealEstate = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHero 
        title="Imobiliárias"
        subtitle="Encontre o imóvel ideal com as melhores imobiliárias da região"
      />
      
      <AllStores defaultCategory="Imobiliárias" />
    </div>
  );
};

export default RealEstate;