import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AllStores from "@/components/AllStores";

const Beauty = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero 
          title="Beleza & Bem-estar"
          subtitle="Cuidados especializados para você se sentir ainda mais bonita e confiante"
        />
        
        <AllStores defaultCategory="Beleza" />
      </main>
      <Footer />
    </div>
  );
};

export default Beauty;