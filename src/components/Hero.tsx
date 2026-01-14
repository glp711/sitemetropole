import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Calendar, MapPin, Utensils, Store, ChevronLeft, ChevronRight } from "lucide-react";
import { useMobileMenu } from "@/contexts/MobileMenuContext";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import metropoleFacade1 from "@/assets/metropole-facade-1.jpg";
import metropoleInterior from "@/assets/metropole-interior.jpg";
import metropoleExterior from "@/assets/metropole-exterior.jpg";
const Hero = () => {
  const { toggleMenu } = useMobileMenu();
  
  // Carrossel de imagens
  const heroImages = [
    metropoleFacade1,
    metropoleInterior,
    metropoleExterior,
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return <section className="relative w-full overflow-hidden">
      {/* Hero Banner Carousel */}
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {heroImages.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-10"></div>
              <img
                src={image}
                alt={`Metrópole Shopping ${index + 1}`}
                className="w-full h-[70vh] md:h-[80vh] object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 glass-card p-3 rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={scrollNext}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 glass-card p-3 rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Próxima imagem"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-luxury w-6 md:w-8 shadow-lg shadow-luxury/50"
                  : "bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-15 flex items-center justify-center">
          <div className="container-modern text-center px-4">
            <div className="max-w-5xl mx-auto content-fade">
              {/* Premium Badge */}
              <div className="hidden md:inline-flex items-center gap-3 glass-card px-6 py-3 mb-8 border border-white/30">
                <Sparkles className="h-5 w-5 text-luxury animate-pulse" />
                <span className="text-white font-semibold text-base md:text-lg tracking-wide">
                  Experiência Premium em Águas Claras
                </span>
              </div>

              {/* Enhanced Main Heading */}
              <div className="mb-6 md:mb-8">
                <h1 className="text-4xl md:text-7xl font-heading font-bold text-white mb-3 md:mb-4 leading-none animate-slide-up">
                  Metrópole
                </h1>
                <h2 className="text-3xl md:text-6xl font-heading font-light mb-4 md:mb-6 leading-tight animate-slide-up animation-delay-200">
                  <span className="bg-gradient-to-r from-luxury via-white to-luxury bg-clip-text text-transparent">
                    Shopping
                  </span>
                </h2>
              </div>

              {/* Sophisticated Subtitle */}
              <p className="text-base md:text-xl text-white/95 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-400 px-4">
                <span className="md:hidden">
                  Compras, gastronomia e entretenimento no coração de Águas Claras.
                </span>
                <span className="hidden md:inline">
                  Onde sofisticação encontra conveniência. Descubra uma nova dimensão em compras, 
                  gastronomia e entretenimento no coração de Águas Claras.
                </span>
              </p>

              {/* CTA Button */}
              <div className="animate-slide-up animation-delay-600 px-4">
                <Button 
                  size="lg" 
                  className="bg-luxury hover:bg-luxury-light text-white font-bold px-8 md:px-10 py-5 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-luxury/50 transition-all duration-300 hover:scale-105 w-full md:w-auto"
                  onClick={toggleMenu}
                >
                  Explorar Shopping
                  <Store className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15)_0%,transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(255,255,255,0.03)_60deg,transparent_120deg)]"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border border-luxury/30 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute top-1/2 left-20 w-3 h-3 bg-luxury rounded-full animate-glow"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white/60 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-luxury/80 rounded-full animate-pulse delay-1000"></div>
        </div>

        {/* Destacos do Shopping */}
        <div className="relative z-10 container-modern py-16 md:py-24">
          <div className="grid-modern md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto animate-scale-in">
            <div className="premium-card text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-luxury/20 p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-luxury/30 transition-colors">
                <Utensils className="h-8 w-8 text-luxury" />
              </div>
              <h3 className="font-semibold text-white mb-2 text-lg">Praça de Alimentação</h3>
              <p className="text-white/80 text-sm">Acessível e para todos os paladares</p>
            </div>
            <div className="premium-card text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-luxury/20 p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-luxury/30 transition-colors">
                <MapPin className="h-8 w-8 text-luxury" />
              </div>
              <h3 className="font-semibold text-white mb-2 text-lg">Localização</h3>
              <p className="text-white/80 text-sm">No coração de Águas Claras</p>
            </div>
            <div className="premium-card text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-luxury/20 p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-luxury/30 transition-colors">
                <Calendar className="h-8 w-8 text-luxury" />
              </div>
              <h3 className="font-semibold text-white mb-2 text-lg">Eventos</h3>
              <p className="text-white/80 text-sm">Únicos – programação cultural exclusiva</p>
            </div>
            <div className="premium-card text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-luxury/20 p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-luxury/30 transition-colors">
                <Store className="h-8 w-8 text-luxury" />
              </div>
              <h3 className="font-semibold text-white mb-2 text-lg">Lojas</h3>
              <p className="text-white/80 text-sm">+ de 60 lojas</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="relative z-10 flex justify-center pt-8 animate-float">
            <div className="glass-card p-3 rounded-full border border-white/30 glow-effect">
              <ArrowDown className="h-5 w-5 text-white/90" />
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-32 md:h-40 text-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
                <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <path d="M1200 120L0 120V30C300 70 600 5 900 25C1000 35 1100 40 1200 45V120Z" fill="url(#waveGradient)"></path>
          </svg>
        </div>
      </section>
    </section>;
};
export default Hero;