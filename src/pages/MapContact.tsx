import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import InteractiveMap from "@/components/InteractiveMap";
import LocationCard from "@/components/LocationCard";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const MapContact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero 
          title="Mapa & Contato"
          subtitle="Encontre-nos facilmente e entre em contato conosco"
        />
        
        <LocationCard />
        <InteractiveMap />
        
        {/* Contact Info Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <Card className="elegant-card">
                  <CardHeader>
                    <CardTitle className="sophisticated-heading text-xl text-foreground">
                      Informações de Contato
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="sophisticated-text font-medium text-foreground">(61) 3047-2900</p>
                        <p className="sophisticated-text text-sm text-muted-foreground">Segunda a Sábado: 10h às 22h</p>
                      </div>
                    </div>
                    
                    
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="sophisticated-text font-medium text-foreground">contato@metropoleshopping.com.br</p>
                        <p className="sophisticated-text text-sm text-muted-foreground">Resposta em até 24h</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="sophisticated-text font-medium text-foreground">Endereço</p>
                        <p className="sophisticated-text text-sm text-muted-foreground">
                          Av. das Araucárias, 1525<br />
                          Águas Claras, Brasília – DF<br />
                          CEP: 71936-250
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="elegant-card">
                  <CardHeader>
                    <CardTitle className="sophisticated-heading text-xl text-foreground">
                      Administração
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="sophisticated-text text-muted-foreground mb-4">
                      Para assuntos administrativos, locação de espaços ou parcerias comerciais:
                    </p>
                    <div className="space-y-2">
                      <p className="sophisticated-text font-medium text-foreground">Piso 2 - Sala Administrativa</p>
                      <p className="sophisticated-text text-sm text-muted-foreground">
                        Segunda a Sexta: 9h às 18h<br />
                        Sábado: 9h às 17h
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MapContact;