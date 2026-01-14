import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle, Shield, Car, Wifi, CreditCard, Building2, ExternalLink } from "lucide-react";

const Footer = () => {
  const operatingHours = [
    {
      days: "Segunda a Sábado",
      hours: "10:00h às 22:00h"
    },
    {
      days: "Domingos e Feriados",
      hours: "11:00h às 20:00h"
    }
  ];

  const services = [
    { icon: Car, name: "Estacionamento" },
    { icon: Wifi, name: "Wi-Fi Gratuito" },
    { icon: CreditCard, name: "Todos os Cartões" },
    { icon: Shield, name: "Segurança 24h" }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://www.instagram.com/metropole_shopping/",
      followers: "@metropole_shopping"
    },
    {
      icon: Facebook,
      name: "Facebook",
      href: "https://web.facebook.com/MetropoleShopping",
      followers: "MetropoleShopping"
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      href: "https://wa.me/5561304729000",
      followers: "(61) 3047-2900"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white relative overflow-hidden">
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Brand & Contact Information */}
            <div className="space-y-8">
              {/* Brand Section */}
              <div className="space-y-6">
                <p className="text-primary-foreground/90 leading-relaxed text-base">
                  Experiência sofisticada em compras, gastronomia e lazer no coração de Águas Claras.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="heading-sm text-white mb-4 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-luxury" />
                  Informações de Contato
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all">
                    <MapPin className="h-5 w-5 text-luxury mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-base text-white">Águas Claras - DF</p>
                      <p className="text-primary-foreground/80 text-sm">Localização privilegiada</p>
                    </div>
                  </div>
                  
                  <a 
                    href="tel:+556130472900"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all cursor-pointer"
                  >
                    <Phone className="h-5 w-5 text-luxury flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-base text-white">(61) 3047-2900</p>
                      <p className="text-primary-foreground/80 text-sm">Atendimento e informações</p>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:contato@metropoleshopping.com.br"
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all cursor-pointer"
                  >
                    <Mail className="h-5 w-5 text-luxury mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-base text-white break-all">contato@metropoleshopping.com.br</p>
                      <p className="text-primary-foreground/80 text-sm">Dúvidas e sugestões</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours & Services */}
            <div className="space-y-8">
              {/* Operating Hours - SEM CARD */}
              <div className="space-y-4">
                <h3 className="heading-sm text-white mb-6 flex items-center gap-3">
                  <Clock className="h-6 w-6 text-luxury" />
                  Horários de Funcionamento
                </h3>
                <div className="space-y-4">
                  {operatingHours.map((schedule, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-white/20 last:border-b-0 gap-1">
                      <span className="text-primary-foreground/90 font-medium text-base">{schedule.days}</span>
                      <span className="font-bold text-luxury text-lg">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-white/5 rounded-lg border-l-4 border-luxury/50">
                  <p className="text-sm text-primary-foreground/70 italic">
                    *As lojas possuem horários independentes. Consulte cada estabelecimento.
                  </p>
                </div>
              </div>

              {/* Services - SEM CARD */}
              <div className="space-y-4">
                <h3 className="heading-sm text-white mb-6">Serviços Premium</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10">
                      <service.icon className="h-5 w-5 text-luxury flex-shrink-0" />
                      <span className="text-sm text-primary-foreground/90 font-medium">{service.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Media - SEM CARD */}
            <div className="lg:col-span-1 space-y-4">
              <h3 className="heading-sm text-white mb-6">Conecte-se Conosco</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 group border border-white/10"
                  >
                    <social.icon className="h-6 w-6 text-luxury flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-base text-white">{social.name}</p>
                      <p className="text-sm text-primary-foreground/70 truncate">{social.followers}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-primary-foreground/50 group-hover:text-luxury transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/30">
          <div className="container mx-auto px-4 py-12">
            
            {/* Copyright Section */}
            <div className="text-center mb-8">
              <p className="text-primary-foreground/90 font-medium text-lg mb-2">
                © 2026 Metrópole Shopping. Todos os direitos reservados.
              </p>
              <p className="text-sm text-primary-foreground/70">
                Desenvolvido com tecnologia de ponta para sua melhor experiência
              </p>
            </div>

            {/* Business Badge */}
            <div className="flex justify-center">
              <Badge variant="outline" className="border-luxury/50 text-luxury bg-luxury/10 px-6 py-3 text-base font-semibold">
                <Building2 className="h-5 w-5 mr-3" />
                Funcionando desde 2020 em Águas Claras
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
