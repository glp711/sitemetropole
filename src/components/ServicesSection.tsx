import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  Wifi, 
  Baby, 
  Accessibility, 
  CreditCard, 
  ShoppingBag, 
  Headphones, 
  Heart,
  Shield,
  Zap,
  Clock,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  MessageCircle,
  Star,
  Users
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      category: "Acessibilidade & Inclusão",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      items: [
        { icon: Accessibility, name: "Cadeiras de Rodas", description: "Disponível gratuitamente" },
        { icon: Headphones, name: "Audioguia", description: "Para deficientes visuais" },
        { icon: Shield, name: "Acompanhamento", description: "Atendimento especializado" }
      ]
    },
    {
      category: "Conveniência",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      items: [
        { icon: Car, name: "Estacionamento", description: "Serviço premium disponível" },
        { icon: Wifi, name: "Wi-Fi Gratuito", description: "Internet de alta velocidade" },
        { icon: Baby, name: "Fraldário", description: "Completo e higienizado" }
      ]
    },
    {
      category: "Serviços Financeiros",
      icon: CreditCard,
      color: "from-green-500 to-emerald-500",
      items: [
        { icon: CreditCard, name: "Caixas Eletrônicos", description: "24h disponível" },
        { icon: ShoppingBag, name: "Personal Shopper", description: "Consultoria personalizada" },
        { icon: Shield, name: "Seguro Compras", description: "Proteção total" }
      ]
    }
  ];

  const additionalServices = [
    "Concierge personalizado",
    "Embrulho para presente",
    "Entrega em domicílio",
    "Reserva de restaurantes",
    "Organização de eventos",
    "Lost & Found 24h"
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-secondary/30 via-background to-accent/20">
      <div className="container-modern section-padding max-w-7xl">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 border border-secondary/20">
            <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
            <span className="text-secondary font-semibold text-xs sm:text-sm uppercase tracking-wider">Serviços & Conveniência</span>
          </div>
          
          <h2 className="heading-xl sm:heading-2xl lg:heading-3xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-secondary via-luxury to-primary bg-clip-text text-transparent">
              Serviços Premium
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Nossa missão é proporcionar uma experiência completa e acessível para todos. 
            Descubra os serviços que fazem a diferença no seu dia a dia.
          </p>
        </div>

        {/* Enhanced Contact & Hours */}
        <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-2">
          <Card className="group relative overflow-hidden premium-card border-0 shadow-2xl hover:shadow-3xl transition-all duration-700">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-luxury"></div>
            
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl font-display font-bold">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <span className="leading-tight">Horários de Funcionamento</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 sm:py-4 px-4 sm:px-6 border-b border-border/50 rounded-lg bg-gradient-to-r from-primary/5 to-transparent gap-1 sm:gap-0">
                <span className="font-semibold text-base sm:text-lg">Segunda a Sábado</span>
                <span className="text-primary font-bold text-lg sm:text-xl">10:00h às 22:00h</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 sm:py-4 px-4 sm:px-6 border-b border-border/50 rounded-lg bg-gradient-to-r from-luxury/5 to-transparent gap-1 sm:gap-0">
                <span className="font-semibold text-base sm:text-lg">Domingos e Feriados</span>
                <span className="text-luxury font-bold text-lg sm:text-xl">11:00h às 20:00h</span>
              </div>
              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gradient-to-r from-accent/10 to-primary/5 rounded-xl border border-accent/20">
                <p className="text-xs sm:text-sm text-muted-foreground italic text-center">
                  *As lojas possuem horários independentes. Consulte cada estabelecimento.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden premium-card border-0 shadow-2xl hover:shadow-3xl transition-all duration-700">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary"></div>
            
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl font-display font-bold">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                </div>
                <span className="leading-tight">Central de Atendimento</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4 sm:space-y-6">
              <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed">
                Nossa equipe está sempre disponível para atendê-lo com excelência. 
                Entre em contato através dos nossos canais oficiais.
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                <button 
                  onClick={() => window.open('https://wa.me/5561304729000', '_blank', 'noopener,noreferrer')}
                  className="w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 dark:from-green-950/20 dark:to-emerald-950/20 dark:hover:from-green-900/30 dark:hover:to-emerald-900/30 transition-all duration-300 cursor-pointer group border border-green-200/50 dark:border-green-800/50 touch-friendly"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-bold group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors text-base sm:text-lg">WhatsApp</p>
                    <p className="text-muted-foreground font-medium text-sm sm:text-base">(61) 3047-2900</p>
                  </div>
                </button>
                
                <button 
                  onClick={() => window.open('https://www.instagram.com/metropole_shopping/', '_blank', 'noopener,noreferrer')}
                  className="w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 dark:from-purple-950/20 dark:to-pink-950/20 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30 transition-all duration-300 cursor-pointer group border border-purple-200/50 dark:border-purple-800/50 touch-friendly"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-bold group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors text-base sm:text-lg">Instagram</p>
                    <p className="text-muted-foreground font-medium text-sm sm:text-base">@metropole_shopping</p>
                  </div>
                </button>
                
                <button 
                  onClick={() => window.open('https://web.facebook.com/MetropoleShopping', '_blank', 'noopener,noreferrer')}
                  className="w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20 dark:hover:from-blue-900/30 dark:hover:to-indigo-900/30 transition-all duration-300 cursor-pointer group border border-blue-200/50 dark:border-blue-800/50 touch-friendly"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-bold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors text-base sm:text-lg">Facebook</p>
                    <p className="text-muted-foreground font-medium text-sm sm:text-base">MetropoleShopping</p>
                  </div>
                </button>
              </div>

              <Button 
                className="w-full cta-button bg-gradient-to-r from-primary to-luxury hover:from-primary-dark hover:to-luxury text-white shadow-xl hover:shadow-2xl transition-all duration-300 h-12 sm:h-14 text-base sm:text-lg font-bold touch-friendly"
                onClick={() => window.open('https://wa.me/5561304729000', '_blank', 'noopener,noreferrer')}
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Falar no WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;