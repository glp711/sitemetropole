import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Building2, Calendar, Users, Zap, Star, ArrowRight, Sparkles, TrendingUp, MapPin, Briefcase } from "lucide-react";
const ExpansionSection = () => {
  const expansionPhases = [{
    id: 1,
    title: "Expansão Planejada",
    status: "Em Desenvolvimento",
    progress: 25,
    completion: "A definir",
    description: "Novos espaços e experiências em desenvolvimento para ampliar ainda mais as opções do shopping.",
    highlights: ["Novos conceitos", "Experiências diferenciadas", "Espaços modernos"],
    investment: "Em planejamento",
    color: "from-green-500 to-emerald-500"
  }, {
    id: 2,
    title: "Melhorias Contínuas",
    status: "Constante",
    progress: 50,
    completion: "Processo contínuo",
    description: "Aprimoramentos constantes nos serviços, infraestrutura e experiência do cliente.",
    highlights: ["Tecnologia avançada", "Conforto premium", "Sustentabilidade", "Acessibilidade"],
    investment: "Investimento contínuo",
    color: "from-blue-500 to-cyan-500"
  }];
  const investmentStats = [{
    label: "Crescimento Planejado",
    value: "Em breve",
    icon: TrendingUp
  }, {
    label: "Oportunidades",
    value: "Diversas",
    icon: Users
  }, {
    label: "Novos Conceitos",
    value: "Modernos",
    icon: Building2
  }, {
    label: "Expansão",
    value: "Contínua",
    icon: MapPin
  }];
  const futureFeatures = ["Tecnologia avançada", "Sustentabilidade", "Acessibilidade aprimorada", "Experiências digitais", "Inovação constante", "Conforto premium"];
  return <section className="py-20 bg-gradient-to-br from-luxury/10 via-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Building2 className="h-4 w-4 mr-2" />
            Expansão & Inovação
          </Badge>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Crescimento Contínuo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto sophisticated-text">
            Acompanhe as melhorias e expansões planejadas para o Metrópole Shopping. 
            Novos espaços, experiências inovadoras e tecnologia de ponta em desenvolvimento.
          </p>
        </div>

        {/* Investment Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {investmentStats.map((stat, index) => <Card key={stat.label} className="luxury-card border-0 text-center hover:shadow-lg transition-all duration-300" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold font-display gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Expansion Phases */}
        


      </div>
    </section>;
};
export default ExpansionSection;