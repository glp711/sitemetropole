interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  className?: string;
}

const PageHero = ({ title, subtitle, backgroundImage, className = "" }: PageHeroProps) => {
  return (
    <section className={`relative min-h-[10vh] flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 ${className}`}>
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
    </section>
  );
};

export default PageHero;