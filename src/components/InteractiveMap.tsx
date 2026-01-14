import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Navigation, 
  Search, 
  Store, 
  Utensils,
  Car,
  Info,
  Zap,
  Building2
} from "lucide-react";

const InteractiveMap = () => {
  const [selectedFloor, setSelectedFloor] = useState("terreo");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const floors = [
    { id: "terreo", name: "Térreo", description: "Praça de alimentação, serviços e cinema" },
    { id: "primeiro", name: "1º Piso", description: "Moda, beleza e acessórios" },
    { id: "segundo", name: "2º Piso", description: "Casa, decoração e entretenimento" },
    { id: "terceiro", name: "3º Piso", description: "Restaurantes premium e lazer" }
  ];

  const categories = [
    { id: "all", name: "Todos", icon: Building2, color: "text-gray-500" },
    { id: "food", name: "Alimentação", icon: Utensils, color: "text-orange-500" },
    { id: "fashion", name: "Moda", icon: Store, color: "text-purple-500" },
    { id: "services", name: "Serviços", icon: Zap, color: "text-blue-500" },
    { id: "parking", name: "Estacionamento", icon: Car, color: "text-green-500" }
  ];

  const mapPoints = {
    terreo: [
      { id: 1, name: "Praça Central", category: "food", x: 40, y: 60 },
      { id: 2, name: "Entretenimento", category: "services", x: 70, y: 30 },
      { id: 3, name: "Serviços Gerais", category: "services", x: 20, y: 40 },
      { id: 4, name: "Atendimento", category: "services", x: 60, y: 70 },
      { id: 5, name: "Estacionamento", category: "parking", x: 10, y: 80 }
    ],
    primeiro: [
      { id: 6, name: "Lojas Variadas", category: "fashion", x: 30, y: 50 },
      { id: 7, name: "Beleza & Bem-estar", category: "fashion", x: 60, y: 40 },
      { id: 8, name: "Serviços Especiais", category: "services", x: 80, y: 60 },
      { id: 9, name: "Conveniência", category: "services", x: 40, y: 70 }
    ],
    segundo: [
      { id: 10, name: "Casa & Decoração", category: "fashion", x: 50, y: 40 },
      { id: 11, name: "Tecnologia", category: "services", x: 30, y: 60 },
      { id: 12, name: "Cultura & Lazer", category: "services", x: 70, y: 50 },
      { id: 13, name: "Área Infantil", category: "services", x: 20, y: 30 }
    ],
    terceiro: [
      { id: 14, name: "Gastronomia Premium", category: "food", x: 50, y: 30 },
      { id: 15, name: "Entretenimento", category: "services", x: 30, y: 60 },
      { id: 16, name: "Espaços Especiais", category: "food", x: 70, y: 40 },
      { id: 17, name: "Área VIP", category: "services", x: 60, y: 70 }
    ]
  };

  const currentPoints = mapPoints[selectedFloor as keyof typeof mapPoints] || [];
  const filteredPoints = selectedCategory === "all" 
    ? currentPoints 
    : currentPoints.filter(point => point.category === selectedCategory);

  const quickAccessPoints = [
    { name: "Entrada Principal", icon: MapPin, floor: "Térreo" },
    { name: "Estacionamento", icon: Car, floor: "Subsolo" },
    { name: "Praça Central", icon: Utensils, floor: "Térreo" },
    { name: "Entretenimento", icon: Store, floor: "Térreo" },
    { name: "Gastronomia", icon: Utensils, floor: "3º Piso" },
    { name: "Área Infantil", icon: Store, floor: "2º Piso" }
  ];

  return null;
};

export default InteractiveMap;