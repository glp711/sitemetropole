import PageHero from "@/components/PageHero";
import AllStores from "@/components/AllStores";

const Education = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHero 
        title="Estudos e Cursos"
        subtitle="Aprenda e se especialize com os melhores cursos e programas educacionais"
      />
      
      <AllStores defaultCategory="Educação" />
    </div>
  );
};

export default Education;