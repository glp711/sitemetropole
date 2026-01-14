import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AllStores from "@/components/AllStores";

const Others = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero 
          title="Outros Serviços"
          subtitle="Descubra serviços especializados que complementam sua experiência no shopping"
        />
        
        <AllStores defaultCategory="Outros" />
      </main>
      <Footer />
    </div>
  );
};

export default Others;