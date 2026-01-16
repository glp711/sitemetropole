import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  Calendar, 
  Music, 
  Palette, 
  Users, 
  Clock, 
  MapPin,
  Ticket,
  Star,
  ArrowRight,
  Camera,
  Heart,
  Mail,
  Phone,
  ExternalLink,
  Baby,
  Shield,
  Info,
  Gift,
  Sparkles,
  TreePine
} from "lucide-react";


const EventsSection = () => {
  // Banner Principal - Próximo Evento em Destaque
  const featuredEvent = {
    title: "Pequenos Exploradores",
    subtitle: "Férias no Metrópole",
    category: "Evento Infantil",
    date: "24 de janeiro",
    time: "14h às 18h",
    location: "Praça de Alimentação - Metrópole Shopping",
    description: "O Metrópole Shopping preparou uma tarde especial para a criançada aproveitar as férias com muita diversão, aprendizado e descobertas!",
    fullDescription: "O Pequenos Exploradores – Férias no Metrópole é um evento gratuito pensado para crianças de 4 a 12 anos, com recreação animada, brincadeiras dirigidas, gincanas, músicas e uma oficina criativa de plantinhas, estimulando o contato com a natureza e a imaginação.",
    image: "/lovable-uploads/1768258398504_image.webp",
    highlight: "Entrada Gratuita",
    highlightBadge: "Vagas Limitadas",
    activities: [
      "Recreação animada",
      "Brincadeiras dirigidas",
      "Gincanas divertidas",
      "Músicas e danças",
      "Oficina de plantinhas 🌱",
      "Atividades educativas"
    ],
    targetAge: "4 a 12 anos",
    team: "Trio Bagunça",
    isFree: true,
    requiresRegistration: true,
    registrationUrl: "https://www.sympla.com.br/evento/pequenos-exploradores-ferias-no-metropole/3273086?algoliaID=278b173e03df24d4eb89ff5d3a653916"
  };


  // Calendário mensal
  const monthlyCalendar = [
    { month: "Janeiro", events: ["Pequenos Exploradores", "Liquidação Verão"] },
    { month: "Fevereiro", events: ["Volta às Aulas"] },
    { month: "Março", events: ["Dia da Mulher", "Outono Cultural"] },
    { month: "Abril", events: ["Páscoa no Metrópole", "Feiras Temáticas"] }
  ];


  // Galeria de eventos passados
  const pastEventsGallery = [
    "/lovable-uploads/c912d792-4a73-4539-bf6a-349a7d68bf5b.png",
    "/lovable-uploads/daca7754-03d0-4526-98ff-ee47561a9ff7.png", 
    "/lovable-uploads/6cdefe40-6751-4093-a648-da65cd6f9d1b.png",
    "/lovable-uploads/fae98f1f-9f41-416b-889e-e9bca3e914a8.png",
    "/lovable-uploads/a3107b48-ac3d-44da-8eb7-23df7edca88e.png",
    "/lovable-uploads/c8768510-69ca-42e1-b8cb-9a6af0debd4f.png"
  ];


  return (
    <section id="eventos" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-subtle via-background to-accent/30">
      <div className="container-modern section-padding">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm sm:text-base border-primary/30 text-primary bg-primary-subtle">
            <Calendar className="h-4 w-4 mr-2" />
            Eventos & Programação
          </Badge>
          <h2 className="heading-xl sm:heading-2xl lg:heading-3xl gradient-text mb-4 sm:mb-6">
            Momentos Inesquecíveis
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Fique por dentro de toda nossa programação cultural e eventos especiais que acontecem no Metrópole Shopping.
          </p>
        </div>


        {/* 1. BANNER PRINCIPAL - Próximo Evento em Destaque */}
        <div className="mb-16 sm:mb-20">
          <Card className="premium-card border-0 overflow-hidden max-w-7xl mx-auto shadow-2xl bg-gradient-to-br from-primary-subtle via-accent to-luxury-subtle relative animate-scale-in">
            {/* Decorative gradient border - DESKTOP ONLY */}
            <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-luxury p-[2px] rounded-2xl sm:rounded-3xl">
              <div className="h-full w-full bg-white rounded-2xl sm:rounded-3xl"></div>
            </div>


            <div className="relative bg-gradient-to-br from-primary-subtle/80 via-white to-luxury-subtle/50">
              
              {/* MOBILE: Layout simplificado vertical - Formato 16:9 com bordas arredondadas */}
              <div className="sm:hidden overflow-hidden">
                {/* Imagem formato 16:9 com bordas arredondadas */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary-subtle to-accent">
                <img
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Badges destacados abaixo da imagem */}
                <div className="flex gap-2 p-4 bg-white">
                  <Badge className="bg-luxury text-white font-bold px-3 py-1.5 text-xs shadow-lg border-0">
                    <Gift className="h-3 w-3 mr-1" />
                    {featuredEvent.highlight}
                  </Badge>
                  <Badge className="bg-primary text-white font-bold px-3 py-1.5 text-xs shadow-lg border-0">
                    <Sparkles className="h-3 w-3 mr-1" />
                    {featuredEvent.highlightBadge}
                  </Badge>
                </div>

                {/* Informações principais */}
                <div className="p-4 bg-white space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {featuredEvent.title}
                    </h3>
                    <p className="text-base text-primary font-semibold mb-2">
                      {featuredEvent.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Chegou a hora de largar as telas e se aventurar na diversão!
                    </p>
                  </div>

                  {/* Data e hora em destaque */}
                  <div className="flex gap-2">
                    <div className="flex-1 bg-primary-subtle rounded-lg p-3 border border-primary/20">
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <Calendar className="h-4 w-4" />
                        <span className="text-xs font-semibold">Data</span>
                      </div>
                      <p className="text-sm font-bold text-foreground">{featuredEvent.date}</p>
                    </div>
                    <div className="flex-1 bg-primary-subtle rounded-lg p-3 border border-primary/20">
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <Clock className="h-4 w-4" />
                        <span className="text-xs font-semibold">Horário</span>
                      </div>
                      <p className="text-sm font-bold text-foreground">{featuredEvent.time}</p>
                    </div>
                  </div>

                  {/* Descrição resumida */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {featuredEvent.description}
                  </p>

                  {/* Informações rápidas */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-accent/30 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Baby className="h-4 w-4 text-luxury" />
                        <span className="text-xs font-semibold text-foreground">Idade</span>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">{featuredEvent.targetAge}</p>
                    </div>
                    <div className="bg-accent/30 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-xs font-semibold text-foreground">Animação</span>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">{featuredEvent.team}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    className="w-full bg-luxury hover:bg-luxury-light text-white border-0 text-base font-bold shadow-lg h-12"
                    onClick={() => window.open(featuredEvent.registrationUrl, '_blank')}
                  >
                    <Ticket className="h-5 w-5 mr-2" />
                    Fazer Inscrição Grátis
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Vagas limitadas - inscreva-se pelo Sympla
                  </p>
                </div>
              </div>

              {/* DESKTOP: Layout original com overlay */}
              <div className="hidden sm:block">
                {/* Banner do evento */}
                <div className="relative h-auto min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] overflow-hidden rounded-t-2xl sm:rounded-3xl bg-gradient-to-br from-primary-subtle to-accent">
                  <img
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Badges de destaque */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-col gap-2">
                    <Badge className="bg-luxury text-white font-bold px-4 py-2 text-sm sm:text-base shadow-lg border-0 animate-glow">
                      {featuredEvent.highlight}
                    </Badge>
                    <Badge className="bg-primary text-white font-bold px-4 py-2 text-sm sm:text-base shadow-lg border-0 animate-elegant-bounce">
                      <Sparkles className="h-4 w-4 mr-1" />
                      {featuredEvent.highlightBadge}
                    </Badge>
                  </div>


                  {/* Título e info principal */}
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-6">
                    <div className="max-w-2xl">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 drop-shadow-lg text-white">
                        {featuredEvent.title}
                      </h3>
                      <p className="text-lg sm:text-xl lg:text-2xl mb-3 drop-shadow-md text-primary font-bold">
                        {featuredEvent.subtitle}
                      </p>
                      <p className="text-base sm:text-lg lg:text-xl mb-2 drop-shadow-md text-white/95 font-medium">
                        Chegou a hora de largar as telas e se aventurar na diversão!
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-white/90 text-sm sm:text-base">
                        <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                          <Calendar className="h-4 w-4" />
                          <span className="font-semibold">{featuredEvent.date}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                          <Clock className="h-4 w-4" />
                          <span className="font-semibold">{featuredEvent.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Detalhes do evento - DESKTOP */}
                <div className="p-6 sm:p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">


                    {/* Coluna esquerda - Informações */}
                    <div className="space-y-6">
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        {featuredEvent.description}
                      </p>
                      
                      <p className="text-base sm:text-lg text-foreground leading-relaxed">
                        {featuredEvent.fullDescription}
                      </p>


                      {/* Informações básicas */}
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm sm:text-base text-foreground">Horário</p>
                            <p className="text-muted-foreground text-sm sm:text-base">{featuredEvent.time}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm sm:text-base text-foreground">Local</p>
                            <p className="text-muted-foreground text-sm sm:text-base">{featuredEvent.location}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Baby className="h-5 w-5 text-luxury mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm sm:text-base text-foreground">Indicação etária</p>
                            <p className="text-muted-foreground text-sm sm:text-base">{featuredEvent.targetAge}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm sm:text-base text-foreground">Animação</p>
                            <p className="text-muted-foreground text-sm sm:text-base">{featuredEvent.team}</p>
                          </div>
                        </div>
                      </div>


                      {/* Atividades */}
                      <div className="bg-gradient-to-br from-primary-subtle via-accent to-primary-subtle/50 rounded-xl p-4 sm:p-6 border border-primary/20 animate-fade-in">
                        <h4 className="font-bold text-primary-dark mb-4 flex items-center gap-2">
                          <TreePine className="h-5 w-5 text-luxury" />
                          Atividades e Atrações
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {featuredEvent.activities.map((activity, index) => (
                            <div key={index} className="flex items-center gap-2.5">
                              <Star className="h-4 w-4 text-luxury flex-shrink-0" />
                              <span className="text-sm sm:text-base text-foreground font-medium">{activity}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-primary/20">
                          <p className="text-sm text-muted-foreground italic flex items-center gap-2">
                            <Sparkles className="h-4 w-4 text-primary" />
                            Serão momentos de alegria, interação e memórias especiais em um ambiente seguro e acolhedor!
                          </p>
                        </div>
                      </div>
                    </div>


                    {/* Coluna direita - Call to Action */}
                    <div className="space-y-6">
                      <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-luxury/10 via-primary-subtle to-luxury/20 rounded-xl border-2 border-luxury/30 animate-glow">
                        <div className="w-16 h-16 bg-luxury rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-float">
                          <Gift className="h-8 w-8 text-white" />
                        </div>
                        <h5 className="text-xl sm:text-2xl font-bold text-primary-dark mb-2">
                          Evento Gratuito!
                        </h5>
                        <Badge className="mb-4 bg-luxury text-white border-0 text-sm font-bold px-3 py-1">
                          Vagas Limitadas
                        </Badge>
                        <p className="text-sm sm:text-base text-muted-foreground mb-6">
                          A animação ficará por conta da equipe do <strong>Trio Bagunça</strong>, garantindo interação, alegria e atividades adequadas para cada faixa etária.
                        </p>
                        <Button
                          size="lg"
                          className="w-full mb-4 bg-luxury hover:bg-luxury-light text-white border-0 text-base sm:text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-12 sm:h-14"
                          onClick={() => window.open(featuredEvent.registrationUrl, '_blank')}
                        >
                          <Ticket className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                          Fazer Inscrição no Sympla
                          <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
                        </Button>
                        <p className="text-xs text-muted-foreground">
                          Inscrições gratuitas pelo Sympla - vagas limitadas
                        </p>
                      </div>


                      {/* Informações importantes */}
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-md border border-primary/20">
                        <div className="flex items-center gap-3 mb-4">
                          <Shield className="h-5 w-5 text-primary" />
                          <span className="font-semibold text-primary-dark">Informações Importantes</span>
                        </div>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <p>• <strong>Entrada gratuita</strong></p>
                          <p>• Vagas limitadas - inscrição pelo Sympla</p>
                          <p>• Crianças de 4 a 12 anos</p>
                          <p>• Presença de responsável obrigatória</p>
                          <p>• Local: Praça de Alimentação</p>
                          <p>• Ambiente seguro e acolhedor</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>


        {/* 2. GALERIA DE EVENTOS PASSADOS */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-primary-dark">Galeria de Eventos Passados</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Reviva os melhores momentos dos nossos eventos anteriores
            </p>
          </div>


          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {pastEventsGallery.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="border border-primary/10 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-square relative">
                        <img
                          src={image}
                          alt={`Evento passado ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                          <Badge className="bg-white/95 text-primary-dark border-0 shadow-md">
                            <Camera className="h-3 w-3 mr-1" />
                            Eventos Metrópole
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-primary hover:bg-primary-dark text-white border-0 shadow-md" />
            <CarouselNext className="right-4 bg-primary hover:bg-primary-dark text-white border-0 shadow-md" />
          </Carousel>


          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors"
              onClick={() => window.open('https://drive.google.com/drive/folders/1RA7gK1rmYq4p0bejpRZjQXgeo3viySk5?usp=drive_link', '_blank')}
            >
              <Camera className="h-5 w-5 mr-2" />
              Ver mais na nossa galeria
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>


        {/* 3. CALENDÁRIO DE PROGRAMAÇÃO */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-primary-dark">Calendário de Programação</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Agenda mensal com todos os eventos e atividades programadas
            </p>
          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {monthlyCalendar.map((month) => (
              <Card key={month.month} className="premium-card border border-primary/10 text-center hover:scale-105 hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                    <Calendar className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-lg text-primary-dark">{month.month}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {month.events.map((event) => (
                      <div key={event} className="bg-primary-subtle rounded-lg p-3 border border-primary/10 hover:border-primary/30 transition-colors">
                        <span className="text-sm font-medium text-foreground">{event}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
