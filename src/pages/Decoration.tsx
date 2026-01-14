import PageHero from "@/components/PageHero";
import AllStores from "@/components/AllStores";

const Decoration = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHero 
        title="Decoração & Casa"
        subtitle="Transforme seu lar com produtos únicos para decoração, flores e design de interiores"
      />
      
      <AllStores defaultCategory="Decoração & Casa" />
    </div>
  );
};

export default Decoration;