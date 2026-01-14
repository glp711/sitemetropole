import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AllStores from "@/components/AllStores";

const Sports = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero 
        title="Esportes e Fitness" 
        subtitle="Descubra as melhores opções para cuidar do seu corpo e mente"
      />
      <AllStores defaultCategory="Esportes" />
      <Footer />
    </div>
  );
};

export default Sports;