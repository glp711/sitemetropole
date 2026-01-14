import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  Heart, 
  Search, 
  Baby, 
  Clock,
  MapPin,
  AlertTriangle,
  Sparkles,
  Utensils,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useState } from "react";


const AmenitiesSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const amenities = [
    {
      id: "estacionamento",
      title: "ESTACIONAMENTO",
      icon: Car,
      color: "from-green-600 to-green-700",
      description: "Externo e subsolo disponíveis",
      content: "Estacionamento externo em frente ao shopping com carregadores elétricos e subsolo com acesso por elevadores e escadas.",
      schedule: {
        weekdays: "Segunda a Sábado: 10h às 22h",
        weekend: "Domingo: 14h às 20h"
      }
    },
    {
      id: "fraldario", 
      title: "FRALDÁRIO",
      icon: Baby,
      color: "from-blue-600 to-blue-700",
      description: "2 locais disponíveis",
      content: "Espaço equipado para troca de fraldas com conforto e higiene.",
      locations: [
        "Piso 1 – próximo ao Sabin",
        "Piso 2 – próximo à Administração"
      ]
    },
    {
      id: "copa",
      title: "COPA",
      icon: Utensils,
      color: "from-orange-600 to-orange-700",
      description: "Micro-ondas disponível",
      content: "Espaço para refeições equipado com micro-ondas para sua comodidade.",
      locations: [
        "Piso 2 – ao lado da Administração"
      ]
    },
    {
      id: "pet-friendly",
      title: "PET FRIENDLY", 
      icon: Heart,
      color: "from-emerald-600 to-emerald-700",
      description: "Pets bem-vindos!",
      content: "Shopping Pet Friendly. Traga seu pet para passeios e compras com toda a família.",
      warning: "Em respeito às normas da Vigilância Sanitária, os pets não são permitidos nas praças de alimentação, restaurantes, clínicas, farmácias, fraldários e sanitários, exceto os cães-guias, que poderão acessar livremente esses locais (Lei Federal nº 11.126 de 27/06/2005)."
    },
    {
      id: "achados-perdidos",
      title: "ACHADOS E PERDIDOS",
      icon: Search,
      color: "from-purple-600 to-purple-700", 
      description: "Administração – Piso 2",
      content: "Perdeu ou encontrou algo? Dirija-se à administração no Piso 2. Guardamos objetos perdidos até que sejam reclamados.",
      schedule: {
        weekdays: "Segunda a Sábado: 10h às 22h",
        weekend: "Domingo: 14h às 20h"
      }
    }
  ];


  return (
    <section id="comodidades" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-accent/20 via-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 border border-primary/20">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">Comodidades</span>
          </div>
          
          <h1 className="heading-xl sm:heading-2xl lg:heading-3xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-primary via-primary-light to-luxury bg-clip-text text-transparent block">
              Serviços para
            </span>
            <span className="bg-gradient-to-r from-luxury via-primary-dark to-primary bg-clip-text text-transparent block">
              Seu Conforto
            </span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Informações claras sobre os serviços disponíveis para tornar sua experiência ainda mais agradável
          </p>
        </div>


        {/* Enhanced Amenities Grid - EXPANSÍVEL NO MOBILE */}
        <div className="grid grid-cols-2 gap-3 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20">
          {amenities.map((amenity, index) => {
            const isExpanded = expandedCard === amenity.id;
            
            return (
              <Card 
                key={amenity.id}
                className="group relative overflow-hidden premium-card border-0 shadow-lg sm:shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer sm:cursor-default"
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  animation: 'fade-in 0.8s ease-out forwards'
                }}
                onClick={() => toggleCard(amenity.id)}
              >
                {/* Gradient Border Top */}
                <div className={`h-1 bg-gradient-to-r ${amenity.color} group-hover:h-2 transition-all duration-500`}></div>
                
                {/* Floating Background Element */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${amenity.color} opacity-5 rounded-full group-hover:scale-125 transition-transform duration-700`}></div>
                
                <CardHeader className="pb-3 sm:pb-6 relative z-10 px-3 sm:px-6 pt-3 sm:pt-6">
                  <div className="flex flex-col items-center sm:flex-row sm:items-start gap-2 sm:gap-6 mb-2 sm:mb-4">
                    <div className={`relative w-16 h-16 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${amenity.color} p-3.5 sm:p-4 shadow-lg sm:shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}>
                      <amenity.icon className="h-8 w-8 sm:h-8 sm:w-8 text-white" />
                      <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${amenity.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                    </div>
                    
                    <div className="flex-1 min-w-0 text-center sm:text-left w-full">
                      <CardTitle className="text-sm sm:text-2xl lg:text-3xl font-display font-bold text-foreground mb-1 sm:mb-2 tracking-tight leading-tight break-words">
                        {amenity.title}
                      </CardTitle>
                      <p className="text-xs sm:text-base text-primary font-semibold bg-primary/10 rounded-full px-2 sm:px-4 py-1 sm:py-2 inline-block leading-tight">
                        {amenity.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Expand/Collapse Button - MOBILE ONLY */}
                  <div className="sm:hidden flex justify-center mt-2">
                    <div className={`inline-flex items-center gap-1 text-xs font-semibold ${isExpanded ? 'text-primary' : 'text-muted-foreground'} transition-colors`}>
                      <span>{isExpanded ? 'Ver menos' : 'Ver mais'}</span>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </div>
                  </div>
                </CardHeader>


                <CardContent className="space-y-2 sm:space-y-6 relative z-10 px-3 sm:px-6 pb-3 sm:pb-6">
                  <p className={`text-xs sm:text-lg text-muted-foreground leading-relaxed font-light ${!isExpanded ? 'line-clamp-2 sm:line-clamp-none' : ''}`}>
                    {amenity.content}
                  </p>


                  {/* Detalhes - Mostrar quando expandido no mobile OU sempre no desktop */}
                  <div className={`space-y-3 ${isExpanded ? 'block' : 'hidden'} sm:block sm:space-y-6`}>
                    {/* Enhanced Locations */}
                    {amenity.locations && (
                      <div className="bg-gradient-to-r from-accent/10 to-primary/5 rounded-lg sm:rounded-xl p-3 sm:p-6 border border-accent/20">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                          <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-primary" />
                          </div>
                          <span className="font-semibold text-xs sm:text-lg text-foreground">Localização</span>
                        </div>
                        <div className="space-y-2">
                          {amenity.locations.map((location, idx) => (
                            <div key={idx} className="flex items-start gap-2 p-2 sm:p-3 rounded-lg bg-background/50 backdrop-blur-sm">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-primary to-primary-light flex-shrink-0 mt-1"></div>
                              <span className="text-xs sm:text-base font-medium leading-tight">{location}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}


                    {/* Enhanced Schedule */}
                    {amenity.schedule && (
                      <div className="bg-gradient-to-r from-primary/5 to-luxury/10 rounded-lg sm:rounded-xl p-3 sm:p-6 border border-primary/20">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                          <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-luxury/20 flex items-center justify-center flex-shrink-0">
                            <Clock className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-luxury" />
                          </div>
                          <span className="font-semibold text-xs sm:text-lg text-foreground">Horário</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex flex-col p-2 sm:p-3 rounded-lg bg-background/50 backdrop-blur-sm gap-0">
                            <span className="font-medium text-[10px] sm:text-base">{amenity.schedule.weekdays.split(':')[0]}:</span>
                            <span className="font-bold text-primary text-xs sm:text-lg">{amenity.schedule.weekdays.split(': ')[1]}</span>
                          </div>
                          <div className="flex flex-col p-2 sm:p-3 rounded-lg bg-background/50 backdrop-blur-sm gap-0">
                            <span className="font-medium text-[10px] sm:text-base">{amenity.schedule.weekend.split(':')[0]}:</span>
                            <span className="font-bold text-primary text-xs sm:text-lg">{amenity.schedule.weekend.split(': ')[1]}</span>
                          </div>
                        </div>
                      </div>
                    )}


                    {/* Enhanced Warning - TEXTO RESUMIDO NO MOBILE */}
                    {amenity.warning && (
                      <div className="relative bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-lg sm:rounded-xl p-3 sm:p-6 dark:from-amber-950/20 dark:to-orange-950/20 dark:border-amber-800/50">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-t-lg sm:rounded-t-xl"></div>
                        <div className="flex items-start gap-2 sm:gap-4 mt-1">
                          <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-amber-600 dark:text-amber-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-amber-800 dark:text-amber-200 text-xs sm:text-base mb-1 sm:mb-2">
                              Observação Importante
                            </p>
                            {/* Texto resumido no mobile */}
                            <p className="sm:hidden text-amber-700 dark:text-amber-300 leading-relaxed text-[10px]">
                              Pets não permitidos em praças de alimentação, restaurantes, clínicas e farmácias. Cães-guias podem acessar todos os locais.
                            </p>
                            {/* Texto completo no desktop */}
                            <p className="hidden sm:block text-amber-700 dark:text-amber-300 leading-relaxed text-base">
                              {amenity.warning}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>


        {/* Enhanced Additional Info */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-luxury/5 to-secondary/5 rounded-xl sm:rounded-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-luxury to-secondary rounded-t-xl sm:rounded-t-3xl"></div>
          
          <Card className="relative premium-card border-0 shadow-lg sm:shadow-2xl rounded-xl sm:rounded-3xl">
            <CardContent className="text-center p-4 sm:p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-luxury/10 rounded-full px-3 sm:px-6 py-1.5 sm:py-3 mb-3 sm:mb-6">
                <Heart className="h-3 w-3 sm:h-5 sm:w-5 text-primary" />
                <span className="text-primary font-semibold text-xs sm:text-base">Informações Adicionais</span>
              </div>
              
              <h3 className="font-display text-lg sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-6">
                <span className="bg-gradient-to-r from-primary to-luxury bg-clip-text text-transparent">
                  Estamos Aqui para Ajudar
                </span>
              </h3>
              
              <p className="text-xs sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                Para mais informações sobre nossas comodidades ou para reportar algum problema, 
                dirija-se à nossa administração localizada no Piso 2 ou entre em contato conosco.
              </p>
              
              <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                <Badge variant="outline" className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm touch-friendly">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Piso 2
                </Badge>
                <Badge variant="outline" className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm touch-friendly">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  10h às 22h
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};


export default AmenitiesSection;
