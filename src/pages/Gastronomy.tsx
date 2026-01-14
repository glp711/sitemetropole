import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import AllStores from "@/components/AllStores";
import Footer from "@/components/Footer";

const Gastronomy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero 
          title="Gastronomia"
          subtitle="Descubra os sabores únicos e os melhores estabelecimentos da nossa praça de alimentação"
        />
        
        <AllStores defaultCategory="Gastronomia" />
      </main>
      <Footer />
    </div>
  );
};

export default Gastronomy;