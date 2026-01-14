import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import AllStores from "@/components/AllStores";
import Footer from "@/components/Footer";

const Health = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero 
          title="Saúde"
          subtitle="Cuidados especializados para sua saúde e bem-estar"
        />
        <AllStores defaultCategory="Saúde" />
      </main>
      <Footer />
    </div>
  );
};

export default Health;