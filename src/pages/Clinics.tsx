import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AllStores from "@/components/AllStores";

const Clinics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero 
          title="Clínicas"
          subtitle="Cuidado com a sua saúde com atendimento especializado"
        />
        
        <AllStores defaultCategory="Clínicas" />
      </main>
      <Footer />
    </div>
  );
};

export default Clinics;
