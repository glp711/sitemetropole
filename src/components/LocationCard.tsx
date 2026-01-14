import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LocationCard = () => {
  return (
    <section className="py-16 bg-muted/30" id="localizacao">
      <div className="container mx-auto px-4">
        <Card className="elegant-card max-w-4xl mx-auto overflow-hidden">
          <CardHeader className="text-center pb-6">
            <CardTitle className="sophisticated-heading flex items-center justify-center gap-3 text-3xl mb-4">
              <MapPin className="h-8 w-8 text-primary" />
              Onde Estamos
            </CardTitle>
            <p className="sophisticated-text text-muted-foreground">
              Venha nos visitar e descubra tudo que o Metrópole Shopping tem a oferecer
            </p>
          </CardHeader>
          
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Map Section */}
              <div className="relative h-64 lg:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.2147836521634!2d-48.02853!3d-15.835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUwJzA2LjAiUyA0OMKwMDEnNDIuNyJX!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Metrópole Shopping"
                  className="w-full h-full"
                />
              </div>
              
              {/* Address Section */}
              <div className="p-8 bg-gradient-to-br from-background to-muted/20 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="sophisticated-text font-semibold text-xl mb-3 text-foreground">
                      Endereço Completo
                    </h3>
                    <p className="sophisticated-text text-muted-foreground leading-relaxed">
                      Av. das Araucárias, 1525<br />
                      Águas Claras, Brasília – DF<br />
                      CEP: 71936-250
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-border/50">
                    <h4 className="sophisticated-text font-semibold mb-2 text-foreground">
                      Horário de Funcionamento
                    </h4>
                    <div className="space-y-1 sophisticated-text text-muted-foreground">
                      <p>Segunda a Sábado: 10h às 22h</p>
                      <p>Domingo: 14h às 20h</p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <a
                      href="https://www.google.com/maps/search/Av.+das+Araucárias,+1525+Águas+Claras+Brasília+DF"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 sophisticated-text font-medium transition-colors"
                    >
                      <MapPin className="h-4 w-4" />
                      Ver no Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LocationCard;