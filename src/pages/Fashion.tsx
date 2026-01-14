import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import AllStores from "@/components/AllStores";

const Fashion = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero 
          title="Moda & Acessórios"
          subtitle="Descubra as principais marcas de vestuário, calçados e acessórios para toda a família"
        />
        
        <AllStores defaultCategory="Moda" />
      </main>
      <Footer />
    </div>
  );
};

export default Fashion;