import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { Clock, Phone, MapPin, Instagram, ExternalLink, MessageCircle, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


interface AllStoresProps {
  defaultCategory?: string;
}

const AllStores = ({ defaultCategory = "Todas" }: AllStoresProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [shuffledStores, setShuffledStores] = useState([]);

  // Function to shuffle array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Aggregating all stores from different categories
  const allStores = [
    // Fashion Stores
    {
      id: 1,
      name: "Dudaloo",
      logo: "/lovable-uploads/eee04c26-1a63-400e-aa91-4c48a9b6a5a8.png",
      storeImage: "/lovable-uploads/2823065f-8356-47ab-848f-53b0edd64a3b.png",
      instagramUrl: "https://www.instagram.com/dudalookidseteens",
      location: "Térreo - Metrópole Shopping",
      phone: "(61) 9 8114-6389",
      hours: "Segunda a Sábado: 10h às 19h",
      category: "Moda",
      subcategory: "Moda Infantil e Juvenil"
    },
    {
      id: 2,
      name: "Micaele Santana",
      logo: "/lovable-uploads/6ceef86e-abff-4439-849a-4731a45b5a92.png",
      storeImage: "/lovable-uploads/b991bf31-ed08-4f9b-b4c0-8e62e1417f36.png",
      instagramUrl: "https://www.instagram.com/micaelesantanaa_",
      location: "Térreo - Metrópole Shopping",
      phone: "(61) 9 9123-5358",
      hours: "Segunda a Sábado: 10h às 18h",
      category: "Moda",
      subcategory: "Moda Feminina"
    },
    {
      id: 3,
      name: "Empório Mix",
      logo: "/lovable-uploads/94df558f-09f5-47a9-9ba7-11636191a9d3.png",
      storeImage: "/lovable-uploads/99c7c2fd-7a6a-43ce-8c1e-ebc6fda1e1f6.png",
      instagramUrl: "https://www.instagram.com/emporiomix_/",
      location: "Térreo - Metrópole Shopping",
      phone: "(61) 9 9666-5579",
      hours: "Segunda a Sábado: 10h às 18h",
      category: "Moda",
      subcategory: "Moda Feminina"
    },
    {
      id: 4,
      name: "Tary",
      logo: "/lovable-uploads/28f1f3ae-48d2-475e-aedf-60aef9882759.png",
      storeImage: "/lovable-uploads/860ef219-8b79-45dc-b15c-7936127a6a3e.png",
      instagramUrl: "https://www.instagram.com/tary_modapraia/",
      location: "Térreo - Metrópole Shopping",
      phone: "(61) 9 9415-3460",
      hours: "Segunda a Sábado: 10h às 19h",
      category: "Moda",
      subcategory: "Moda Praia"
    },
    {
      id: 5,
      name: "Belle Vie",
      logo: "/lovable-uploads/d2cab731-dcb0-4c14-bef0-8b0c6633f0c9.png",
      storeImage: "/lovable-uploads/c799cc45-e545-4f5e-b456-654907112fb4.png",
      instagramUrl: "https://www.instagram.com/loja_bellevie",
      location: "Térreo - Metrópole Shopping",
      phone: "(61) 9 9410-0126",
      hours: "Segunda a Sábado: 10h às 20h",
      category: "Moda",
      subcategory: "Calçados e Acessórios"
    },
    {
      id: 8,
      name: "Sodalita",
      logo: "/lovable-uploads/65d758e1-38c1-4fac-bb91-a15a9396f6d2.png",
      storeImage: "/lovable-uploads/8b928911-7a7e-4b3e-b21a-cb855cd802a6.png",
      instagramUrl: "https://www.instagram.com/sodalitavestidos/",
      location: "Térreo - Metrópole Shopping",
      phone: "(61) 9 8305-8576",
      hours: "Segunda a Sábado: 10h às 20h",
      category: "Moda",
      subcategory: "Moda Feminina"
    },
    {
      id: 9,
      name: "Hering",
      logo: "/lovable-uploads/10f4c71d-9016-450e-bf4a-240bae38bc19.png",
      storeImage: "/lovable-uploads/2bfbc895-f6a2-4a22-a420-2370f05d981a.png",
      instagramUrl: "https://www.instagram.com/hering.metropole/",
      location: "Térreo - Metrópole Shopping",
      phone: "(61) 9 9205-5310",
      hours: "Segunda a Sábado: 09h às 21h | Domingo: 11h às 18h",
      category: "Moda",
      subcategory: "Moda Unissex"
    },
    {
      id: 10,
      name: "DUO & CO. Boutique",
      logo: "/lovable-uploads/89b14e97-5e75-4e0d-a8c3-634d5a8066df.png",
      storeImage: "/lovable-uploads/0351d5d5-7bf7-41b3-ad2f-71094a9b0b10.png",
      instagramUrl: "https://www.instagram.com/duoeco_boutique/",
      location: "Térreo - Metrópole Shopping",
      phone: "(61) 9 8283-0101",
      hours: "Segunda a Sábado: 09h às 21h | Domingo: 11h às 18h",
      category: "Moda",
      subcategory: "Moda Feminina"
    },
    {
      id: 11,
      name: "Unique Lingerie e Moda Fitness",
      logo: "/lovable-uploads/bfc79a2d-c9b0-46c3-a189-ccc142a47ffa.png",
      storeImage: "/lovable-uploads/17686da5-ec6d-42a9-849a-868984398ebb.png",
      instagramUrl: "https://www.instagram.com/unique_lingerieemodafitness/",
      location: "Térreo - Metrópole Shopping",
      phone: "(61) 9 8615-0118",
      hours: "Segunda a Sábado: 10h às 20h",
      category: "Moda",
      subcategory: "Lingerie e Moda Fitness"
    },
    {
      id: 12,
      name: "Quiosque dos Pijamas",
      logo: "/lovable-uploads/0477dc6d-bbd3-4819-a179-dda2f204d322.png",
      storeImage: "/lovable-uploads/c6623ec7-39be-400c-a770-a31bc14d486a.png",
      instagramUrl: "https://www.instagram.com/quiosquedospijamas/",
      location: "Térreo | Quiosque - Metrópole Shopping",
      phone: "(61) 9 9277-0102",
      hours: "Segunda a Sábado: 10h às 19h",
      category: "Moda",
      subcategory: "Sleepwear"
    },
    {
      id: 66,
      name: "LeBibi Kids",
      logo: "/lovable-uploads/kids.png",
      storeImage: "/lovable-uploads/lebebi.png",
      instagramUrl: "https://www.instagram.com/lebibikids/",
      whatsappUrl: "https://api.whatsapp.com/send/?phone=556196899972",
      location: "Térreo - Metrópole Shopping",
      phone: "(61) 96899-972",
      hours: "Segunda a Sábado: 10h às 22h",
      category: "Moda",
      subcategory: "Moda Infantil",
      type: "quiosque"
    },
    
    
    // Beauty Stores
    {
      id: 13,
      name: "Estúdio Ana Aquino",
      logo: "/lovable-uploads/6f14f117-5bfb-4629-bdb0-834db6ebd5f7.png",
      storeImage: "/lovable-uploads/03b466c8-81ef-414b-aeee-4e66f6ba048f.png",
      instagramUrl: "https://www.instagram.com/estudioanaaquino",
      location: "Piso Superior - Metrópole Shopping",
      phone: "(61) 9 9629-5989",
      hours: "Seg-Sáb: 10h - 20h",
      category: "Beleza",
      subcategory: "Estúdio de Sobrancelhas"
    },
    {
      id: 14,
      name: "Anas Studio",
      logo: "/lovable-uploads/9734ef21-7017-4edf-862e-410e5ba6617a.png",
      storeImage: "/lovable-uploads/e225d5bc-a943-499f-91e5-5327dfb6865f.png",
      instagramUrl: "https://www.instagram.com/anasceilandia/",
      location: "Piso Superior - Metrópole Shopping",
      phone: "(61) 9 9409-7878",
      hours: "Seg-Sáb: 10h - 19h",
      category: "Beleza",
      subcategory: "Sobrancelhas"
    },
    {
      id: 15,
      name: "Núbia Macedo Makeup",
      logo: "/lovable-uploads/nubia-macedo-logo.png",
      storeImage: "/lovable-uploads/nubiam.png",
      instagramUrl: "https://www.instagram.com/nubiamacedomakeup/",
      location: "Metrópole Shopping",
      phone: "(61) 9 8178-6206",
      hours: "Segunda a Sábado: 9h às 18h",
      category: "Beleza",
      subcategory: "Studio Maquiagem e Penteado"
    },
    {
      id: 16,
      name: "Empório Diva Makeup",
      logo: "/lovable-uploads/655ed441-c051-4ad1-973a-bc33498cc5a8.png",
      storeImage: "/lovable-uploads/a6e65ae7-e271-4091-93f9-d7f79707e84e.png",
      instagramUrl: "https://www.instagram.com/makeup_emporiodiva",
      location: "Térreo - Metrópole Shopping",
      phone: "(61) 9 8214-3762",
      hours: "Segunda a Sábado: 10h às 19h",
      category: "Beleza",
      subcategory: "Maquiagem"
    },
    {
      id: 17,
      name: "Balmee Clínica & SPA",
      logo: "/lovable-uploads/b16db417-3e0a-4cb1-867d-3f9bfd745282.png",
      storeImage: "/lovable-uploads/cfb7f745-2a26-4d25-abb0-aceb9255f754.png",
      instagramUrl: "https://www.instagram.com/balmeeclinicaspa/",
      location: "Metrópole Shopping",
      phone: "(61) 99316-7102",
      hours: "Segunda a Sábado: 10h às 19h",
      category: "Beleza",
      subcategory: "Clínica & SPA"
    },
    {
      id: 18,
      name: "Vanda Carvalho",
      logo: "/lovable-uploads/758f350d-bdfe-434c-93dc-7286fadd9263.png",
      storeImage: "/lovable-uploads/21be3cbb-d92b-41ba-9e49-3582ae1af3ed.png",
      instagramUrl: "https://www.instagram.com/vandacarvalho_beleza",
      location: "Metrópole Shopping",
      phone: "(61) 9 9303-8159",
      hours: "Segunda a Sábado: 9h às 19h",
      category: "Beleza",
      subcategory: "Studio de Beleza"
    },
    {
      id: 19,
      name: "Pose Instituto de Beleza",
      logo: "/lovable-uploads/fb1b0c48-378f-4c3b-aa7a-2f428f3daa4f.png",
      storeImage: "/lovable-uploads/b6d7a74e-40a0-4c52-8395-29daacc70d65.png",
      instagramUrl: "https://www.instagram.com/poseaguasclarassul/",
      location: "Metrópole Shopping",
      phone: "(61) 9 9880-9150",
      hours: "Segunda a Sábado: 10h às 20h",
      category: "Beleza",
      subcategory: "Instituto de Beleza"
    },
    {
      id: 20,
      name: "Lux - Instituto de Terapia Capilar",
      logo: "/lovable-uploads/d0b53605-1767-4f9e-9728-f400dcf5a5ff.png",
      storeImage: "/lovable-uploads/bcae1e1f-a1f2-42d3-a319-0866f75d356f.png",
      instagramUrl: "https://www.instagram.com/luxinstituto",
      location: "Metrópole Shopping",
      phone: "(61) 9 9116-2582",
      hours: "Terça a Sábado: 9h às 18h",
      category: "Beleza",
      subcategory: "Instituto de Terapia Capilar"
    },
    {
      id: 64,
      name: "Essências Árabe Perfumes",
      logo: "/lovable-uploads/arabelogo.png",
      storeImage: "/lovable-uploads/arabe.png",
      instagramUrl: "https://www.instagram.com/essenciasarabeperfumes/",
      whatsappUrl: "https://api.whatsapp.com/send/?phone=5561993806999&text&type=phone_number&app_absent=0",
      location: "Térreo - Metrópole Shopping",
      phone: "(61) 99380-6999",
      hours: "Segunda a Sábado: 10h às 20h",
      category: "Moda",
      subcategory: "Perfumaria"
    },
    {
      id: 68,
      name: "Perfect Hair by Graça Marques",
      logo: "/lovable-uploads/perfectlogo.png",
      storeImage: "/lovable-uploads/hair.png",
      instagramUrl: "https://www.instagram.com/perfecthairbygracamarques122/",
      whatsappUrl: "https://api.whatsapp.com/send?phone=5561994041028",
      location: "Piso Superior - Metrópole Shopping",
      phone: "(61) 99404-1028",
      hours: "Segunda a Sábado: 9h às 19h",
      category: "Beleza",
      subcategory: "Salão de Beleza"
    },
    

    // Health Stores
    {
      id: 21,
      name: "Instituto Iluma",
      logo: "/lovable-uploads/7ef9c4dc-427c-4383-a425-a0492192b21f.png",
      storeImage: "/lovable-uploads/d784b783-db16-45ec-b3cb-073723d08a4f.png",
      instagramUrl: "https://www.instagram.com/instituto.iluma",
      location: "Piso Superior - Metrópole Shopping",
      phone: "(61) 9 8333-6060",
      hours: "Seg-Sex: 08h - 18h | Sáb: 08h - 12h | Mediante agendamento",
      category: "Clínicas",
      subcategory: "Odontologia e Estética"
    },
    {
      id: 22,
      name: "Dupé",
      logo: "/lovable-uploads/1600902d-1fa0-43c8-bfc2-533680e6e659.png",
      storeImage: "/lovable-uploads/b9af666b-ec23-45cb-9435-2d13caecbdf9.png",
      instagramUrl: "https://www.instagram.com/dupepodologiaespecializada",
      location: "Piso Superior - Metrópole Shopping",
      phone: "(61) 9 8110-7315",
      hours: "Seg-Sáb: 10h - 20h",
      category: "Saúde",
      subcategory: "Podologia"
    },
    {
      id: 23,
      name: "Ótica Solaris",
      logo: "/lovable-uploads/86611441-7dcf-45db-92d6-25a7b20ea99b.png",
      storeImage: "/lovable-uploads/812fd18e-598e-4e1b-babc-c22135805d8f.png",
      instagramUrl: "https://www.instagram.com/oticasolaris.bsb/",
      location: "Metrópole Shopping",
      phone: null,
      hours: "Segunda a Sábado: 10h - 20h",
      category: "Saúde",
      subcategory: "Ótica",
      website: "https://oticasolarisbsb.com.br/"
    },
    {
      id: 24,
      name: "Brizzon Ótica",
      logo: "/lovable-uploads/82071436-136b-47e4-bc9f-704fcff38af1.png",
      storeImage: "/lovable-uploads/42d81401-5698-447c-bfd2-c77f98a0a8b9.png",
      instagramUrl: "https://www.instagram.com/oticabrizzon/",
      location: "Térreo - Metrópole Shopping",
      phone: "(61) 9 9279-2318",
      hours: "Segunda a Sábado: 10h às 20h",
      category: "Saúde",
      subcategory: "Ótica"
    },
    {
      id: 25,
      name: "Sabin Diagnóstico e Saúde",
      logo: "/lovable-uploads/4216d0f9-247a-4aca-b7e0-8a8f3ef64a6a.png",
      storeImage: "/lovable-uploads/06c2c5a5-83ca-47a8-a0e3-aaafa5036205.png",
      instagramUrl: "https://www.instagram.com/sabinbr_/",
      location: "Térreo - Metrópole Shopping",
      phone: "(61) 3329-8000",
      hours: "Seg-Sex: 06h - 17h | Sáb: 06h30 - 12h",
      category: "Clínicas",
      subcategory: "Exames e Laboratório"
    },
    {
      id: 26,
      name: "Daluzia Silveira",
      logo: "/lovable-uploads/e1645ca3-d8c3-4697-b057-331f2f9becce.png",
      storeImage: "/lovable-uploads/6f98aa85-a926-4672-982f-ffdd0e4d95af.png",
      instagramUrl: "https://www.instagram.com/daluziasilveirapsicopedagogia/",
      location: "Piso Superior - Metrópole Shopping",
      phone: "(61) 9627-3387",
      hours: "Seg-Sex: 08h - 20h",
      category: "Clínicas",
      subcategory: "Psicopedagogia"
    },
    {
      id: 27,
      name: "Clínica Equilibrium",
      logo: "/lovable-uploads/fb714381-9285-4602-bc8a-818b0bb6fe63.png",
      storeImage: "/lovable-uploads/23257745-7eaa-4ae1-b602-b51cde6fb167.png",
      instagramUrl: "https://www.instagram.com/clinicaequilibriummulti_/",
      location: "Térreo e Piso Superior - Metrópole Shopping",
      phone: "(61) 98153-6028",
      hours: "Seg-Qui: 07h - 21h30 | Sex: 07h - 20h40",
      category: "Clínicas",
      subcategory: "Clínica Médica Multiespecialidades"
    },
    {
      id: 28,
      name: "Clínica das Patas",
      logo: "/lovable-uploads/95b0b7d0-2a69-43c2-b7e3-fd2e2f4e6383.png",
      storeImage: "/lovable-uploads/b21b0102-f496-4512-9443-636941f00efb.png",
      instagramUrl: "https://www.instagram.com/clinicadaspatas",
      location: "Piso Superior - Metrópole Shopping",
      phone: "(61) 9 9126-6426",
      hours: "Seg-Sáb: 09h - 18h | Atendimento mediante agendamento",
      category: "Clínicas",
      subcategory: "Clínica Veterinária"
    },
    {
      id: 67,
      name: "Instituto NS - Estética Avançada",
      logo: "/lovable-uploads/logons.png",
      storeImage: "/lovable-uploads/ns.png",
      instagramUrl: "https://www.instagram.com/institutons_/",
      whatsappUrl: "https://chat.whatsapp.com/I9xAvfwd0kTAM18AFzNSDp",
      location: "Piso Superior - Metrópole Shopping",
      phone: "Grupo WhatsApp",
      hours: "Segunda a Sexta: 8h às 18h, Sábado: 8h às 12h",
      category: "Clínicas",
      subcategory: "Estética e Saúde",
      type: "clinica"
    },
    

    // Sports Stores
    {
      id: 29,
      name: "Studio de Pilates Dayana Carvalho",
      logo: "/lovable-uploads/02698381-5285-4cda-ae7c-258afd192bbf.png",
      storeImage: "/lovable-uploads/ed648bdf-de4a-45b4-9848-536f225d1f2e.png",
      instagramUrl: "https://www.instagram.com/studiodepilatesdayanacarvalho/",
      location: "Metrópole Shopping",
      phone: "(61) 99995-4786",
      hours: "Mediante agendamento",
      category: "Esportes",
      subcategory: "Pilates e Fitness"
    },
    {
      id: 30,
      name: "Studio Personal Fast Training",
      logo: "/lovable-uploads/7e50435a-c13b-4585-987d-98b9200d89af.png",
      storeImage: "/lovable-uploads/ae848ad4-af5c-4cf3-941a-d330b5b913f7.png",
      instagramUrl: "https://www.instagram.com/studiopersonalft/",
      location: "Metrópole Shopping",
      phone: "(61) 99667-5666",
      hours: "Mediante agendamento",
      category: "Esportes",
      subcategory: "Personal Training"
    },
    {
      id: 31,
      name: "Cross Pilates Guilherme Vieira",
      logo: "/lovable-uploads/afea15c1-6a16-491f-a4c0-f039e03293de.png",
      storeImage: "/lovable-uploads/fd28d3d6-5f98-457f-a373-6627f3a87199.png",
      instagramUrl: "https://www.instagram.com/crosspilatesguilhermevieira/",
      location: "Metrópole Shopping",
      phone: "(61) 98554-3117",
      hours: "Consulte horários",
      category: "Esportes",
      subcategory: "Cross Pilates e Pilates Tradicional"
    },
    {
      id: 62,
      name: "World Gym Pro",
      logo: "/lovable-uploads/1768343092786_image.png",
      storeImage: "/lovable-uploads/WordGym.png",
      instagramUrl: "https://www.instagram.com/worldgympro/",
      location: "Subsolo 1 (Estacionamento) - Metrópole Shopping",
      phone: "(61) 98162-4046",
      hours: "Segunda a Sexta: 05h às 00h | Sábados e Feriados: 08h às 18h | Domingo: 08h às 16h",
      category: "Esportes",
      subcategory: "Academia"
    },
    {
      id: 65,
      name: "Fort Nutri",
      logo: "/lovable-uploads/fortnutrilogo.png",
      storeImage: "/lovable-uploads/fortnutri.png",
      instagramUrl: "https://www.instagram.com/fort.nutri/",
      whatsappUrl: "https://api.whatsapp.com/send/?phone=5561992848393",
      location: "Subsolo - Metrópole Shopping (em frente à World Gym)",
      phone: "(61) 99284-8393",
      hours: "Todos os dias",
      category: "Saúde",
      subcategory: "Nutrição Esportiva"
    },

    // Gastronomy Stores
    {
      id: 32,
      name: "10 Pastéis",
      logo: "/lovable-uploads/bd79e961-6d19-45f3-be29-514455dd35e5.png",
      storeImage: "/lovable-uploads/3dab8ddb-50c6-49ea-a6be-08343cd8fb2c.png",
      instagramUrl: "https://www.instagram.com/10pasteis.aguasclaras/",
      location: "Metrópole Shopping",
      phone: "(61) 98341-1079",
      hours: "Segunda a Sábado: 12h30 às 21h30 | Domingo: 17h00 às 21h30",
      category: "Gastronomia",
      subcategory: "Pastéis Artesanais"
    },
    {
      id: 33,
      name: "Burger King",
      logo: "/lovable-uploads/e1c3a521-1cb4-48e5-b2fe-bec6ccee804e.png",
      storeImage: "/lovable-uploads/2e9a2fd1-8e35-4976-aa09-7a26f835d736.png",
      instagramUrl: "https://www.instagram.com/burgerkingbr",
      location: "Metrópole Shopping",
      phone: null,
      hours: "Segunda a Sábado: 11h às 22h | Domingo: 12h às 22h | Drive: até 23h",
      category: "Gastronomia",
      subcategory: "Fast Food"
    },
    {
      id: 34,
      name: "Chiquinho Sorvetes",
      logo: "/lovable-uploads/chiquinholog.png",
      storeImage: "/lovable-uploads/chiquinhosorvete.png",
      instagramUrl: "https://www.instagram.com/chiquinhoaguasclaras_metropole",
      location: "Térreo - Metrópole Shopping",
      phone: "(61) 3382-3297",
      hours: "Segunda a Domingo: 12h às 22h30",
      category: "Gastronomia",
      subcategory: "Sorvetes"
    },
    {
      id: 35,
      name: "Vaca Preta (Self-service)",
      logo: "/lovable-uploads/3f2153c4-28bf-45ad-904e-1244efd8d539.png",
      storeImage: "/lovable-uploads/c7ca7487-2971-4d3c-9f6f-bc99e31f14d0.png",
      instagramUrl: "https://www.instagram.com/vacapretarestaurante/",
      location: "Térreo – Metrópole Shopping",
      phone: "(61) 9 9202-0259",
      hours: "Segunda a Sexta: 11h às 15h | Sábado: 11h às 15h30",
      category: "Gastronomia",
      subcategory: "Self-service"
    },
    {
      id: 36,
      name: "Careca Comida Chinesa",
      logo: "/lovable-uploads/979a9e7b-d20f-488b-8a20-adf13cc92f80.png",
      storeImage: "/lovable-uploads/f6ac6d0a-5709-461f-88ca-18136127f073.png",
      instagramUrl: "https://www.instagram.com/restaurantecareca.aguasclaras/",
      location: "Térreo – Metrópole Shopping",
      phone: "(61) 3053-6551",
      hours: "Terça a Sábado: 08h às 15h | Domingo: 08h às 16h",
      category: "Gastronomia",
      subcategory: "Comida Chinesa"
    },
    {
      id: 38,
      name: "Stonia",
      logo: "/lovable-uploads/9ad17553-5f2e-428f-85df-0a099c0ff294.png",
      storeImage: "/lovable-uploads/87e4363d-17f7-4041-99d5-b62c5051d2b9.png",
      instagramUrl: "https://www.instagram.com/stoniaice/",
      location: "Térreo – Metrópole Shopping",
      phone: "(61) 3526-3027",
      hours: "Segunda a Domingo: 12h às 22h",
      category: "Gastronomia",
      subcategory: "Sorveteria"
    },
    
    // Others Stores
    {
      id: 39,
      name: "Smart Club",
      logo: "/lovable-uploads/b8573ba7-6cb5-477e-a5c0-4633b145ab0a.png",
      storeImage: "/lovable-uploads/79983cef-6dd4-4589-aa8b-f8c809604004.png",
      instagramUrl: "https://www.instagram.com/smartclubcompras",
      location: "Piso Superior - Metrópole Shopping",
      phone: "(61) 9 9418-7624",
      hours: "Seg-Sex: 09h - 18h | Sáb: 09h - 12h",
      category: "Outros",
      subcategory: "Compras e Serviços"
    },
    {
      id: 40,
      name: "Meu Quarto Ideal",
      logo: "/lovable-uploads/d4f7ba5c-bc8a-432e-8541-c68b374cace7.png",
      storeImage: "/lovable-uploads/699708c2-ae23-4a2e-8cbc-c08981ebae76.png",
      instagramUrl: "https://www.instagram.com/meuquartoideal/",
      location: "Metrópole Shopping",
      phone: null,
      hours: "Seg-Sex: 10h - 18h | Sáb: 10h - 16h",
      category: "Decoração & Casa",
      subcategory: "Arquitetura e Personalização"
    },
    {
      id: 41,
      name: "Zelar",
      logo: "/lovable-uploads/926a72c9-a7cc-4d0b-a4e0-ceceb2ee9ee6.png",
      storeImage: "/lovable-uploads/d403fc72-b22e-4f3d-a831-9977899b69dc.png",
      instagramUrl: "https://www.instagram.com/zelar.oficial/",
      location: "Metrópole Shopping",
      phone: null,
      hours: "Seg-Sáb: 09h - 21h | Dom: 12h - 18h",
      category: "Decoração & Casa",
      subcategory: "Cama, Mesa e Banho"
    },
    {
      id: 42,
      name: "Multiflores Florenza",
      logo: "/lovable-uploads/0e446ed5-4bac-41cb-8a25-a84e4e8131ae.png",
      storeImage: "/lovable-uploads/613c0206-b335-482d-a29c-f4d34d529ae9.png",
      instagramUrl: "https://www.instagram.com/multiflores.florenza/",
      location: "Metrópole Shopping",
      phone: "(61) 98144-5718",
      hours: "Seg-Sáb: 10h - 20h | Dom: 12h - 18h",
      category: "Decoração & Casa",
      subcategory: "Floricultura e Presentes"
    },
    {
      id: 43,
      name: "Crieta Interiores",
      logo: "/lovable-uploads/8cb1aa7b-f08b-4b92-9643-b603d36162ac.png",
      storeImage: "/lovable-uploads/f95ca535-7750-4091-97d2-f7778e9cac7c.png",
      instagramUrl: "https://www.instagram.com/crieta_aguasclaras/",
      location: "Metrópole Shopping",
      phone: "(61) 9 8186-7850",
      hours: "Seg-Sex: 10h - 20h | Sáb: 10h - 18h",
      category: "Decoração & Casa",
      subcategory: "Arquitetura e Design de Interiores"
    },
    {
      id: 63,
      name: "Conexão",
      logo: "/lovable-uploads/conexaologo.png",
      storeImage: "/lovable-uploads/conexao.png",
      instagramUrl: "https://www.instagram.com/conexaosmartphone/",
      location: "Térreo | Quiosque - Metrópole Shopping",
      phone: "https://api.whatsapp.com/message/2ZNMES7PRE2HC1?autoload=1&app_absent=0&utm_source=ig",
      hours: "Segunda a Sábado: 10h às 20h",
      category: "Outros",
      subcategory: "Artigos para Celular e Tecnologia"
    },
    {
      id: 69,
      name: "Perfumes de Ambiente Décor",
      logo: "/lovable-uploads/decorcasa.png",
      storeImage: "/lovable-uploads/decorperfume.png",
      instagramUrl: "https://www.instagram.com/perfumesdeambientedecor/",
      whatsappUrl: "https://api.whatsapp.com/send?phone=5561981361941",
      location: "Térreo - Metrópole Shopping",
      phone: "(61) 98136-1941",
      hours: "Segunda a Sábado: 10h às 19h",
      category: "Decoração &  Casa",
      subcategory: "Perfumaria de Ambiente",
      type: "quiosque"
    },
    {
      id: 70,
      name: "Pointpel Papelaria e Presentes",
      logo: "/lovable-uploads/pelogo.png",
      storeImage: "/lovable-uploads/pelpoint.png",
      instagramUrl: "https://www.instagram.com/pointpel/",
      whatsappUrl: "https://api.whatsapp.com/send?phone=5561999826587",
      websiteUrl: "https://www.pointpel.com.br/",
      location: "Térreo | Quiosque - Metrópole Shopping",
      phone: "(61) 99982-6587",
      hours: "Seg a Sáb: 10h às 20h, Dom: 12h às 18h",
      category: "Outros",
      subcategory: "Papelaria",
      type: "quiosque"
    },
    
    

    // Education Stores
    {
      id: 44,
      name: "UniPet",
      logo: "/lovable-uploads/cc1914cb-6ff2-49ac-adb0-969a8038d377.png",
      storeImage: "/lovable-uploads/0636251c-0c9c-4ab4-a449-139d4624f944.png",
      instagramUrl: "https://www.instagram.com/unipet.df",
      location: "Piso Superior - Metrópole Shopping",
      phone: "(61) 9 9907-2350",
      hours: "Seg-Sex: 09h30 - 18h | Sáb: 09h30 - 14h30",
      category: "Educação",
      subcategory: "Universidade PetShop"
    },
    {
      id: 46,
      name: "CDF Cabine de Foco",
      logo: "/lovable-uploads/c2f19c52-cbaa-414d-b348-ac9e3df1e067.png",
      storeImage: "/lovable-uploads/cdffachada.png",
      instagramUrl: "https://www.instagram.com/cdfcabinedefoco",
      websiteUrl: "https://www.cdfsaladeestudo.com.br/",
      location: "Piso Superior - Metrópole Shopping",
      phone: "(61) 9 9633-4404",
      hours: "Seg-Dom: 07h - 01h | Inclusive Feriados",
      category: "Educação",
      subcategory: "Sala de Estudos"
    },
    {
      id: 47,
      name: "Fênix Tabacaria",
      logo: "/lovable-uploads/175a0a3b-7b9d-4567-88de-4e8998a3641f.png",
      storeImage: "/lovable-uploads/b5f89c4e-8618-4e74-9455-41253c8d82bb.png",
      instagramUrl: "https://www.instagram.com/fenixaguas/",
      location: "Piso Superior - Metrópole Shopping",
      phone: "(61) 9 8218-7062",
      hours: "Seg-Sáb: 12h - 20h",
      category: "Outros",
      subcategory: "Tabacaria"
    },
    {
      id: 48,
      name: "Over Power",
      logo: "/lovable-uploads/baf7b265-2acc-4527-b904-986738c4a77a.png",
      storeImage: "/lovable-uploads/3c9a9f2c-bf6f-420d-b29f-493f59db1df3.png",
      instagramUrl: "https://www.instagram.com/lojaoverpower",
      location: "Piso Superior - Metrópole Shopping",
      phone: "(61) 9 9118-8919",
      hours: "Seg-Sáb: 10h - 19h",
      category: "Outros",
      subcategory: "Video Games e Eletrônicos"
    },
    {
      id: 49,
      name: "Sport Inline",
      logo: "/lovable-uploads/363c1b79-b5de-4fc5-b057-00e0d6185a7d.png",
      storeImage: "/lovable-uploads/483690e1-396b-4ab6-a854-592b806b569c.png",
      instagramUrl: "https://www.instagram.com/sportinline",
      location: "Piso Superior - Metrópole Shopping",
      phone: "(61) 3578-3038",
      hours: "Seg-Sáb: 10h - 19h",
      category: "Esportes",
      subcategory: "Artigos Esportivos"
    },
    {
      id: 50,
      name: "Empório Suplementos",
      logo: "/lovable-uploads/4a607736-645e-4e7e-8cc0-9c80ab31176d.png",
      storeImage: "/lovable-uploads/836030d6-3642-4f07-bbde-f818e844e53e.png",
      instagramUrl: "https://www.instagram.com/emporiosuplementosbsb/",
      location: "Metrópole Shopping",
      phone: "(61) 99530-5353",
      category: "Saúde",
      subcategory: "Suplementação"
    },
    {
      id: 51,
      name: "Trio Bagunça",
      logo: "/lovable-uploads/825c3d6a-3204-422b-b9bd-297c78c3dd2c.png",
      storeImage: "/lovable-uploads/99435c4c-f46f-41cd-ac0b-7d2b98a3638c.png",
      instagramUrl: "https://www.instagram.com/triobaguncafesta/",
      location: "Metrópole Shopping",
      phone: "61 99181-5767",
      hours: "Seg-Sex: 13h - 19h15 | Sáb: 11h - 17h15",
      category: "Outros",
      subcategory: "Recreação Infantil"
    },
    {
      id: 52,
      name: "Amani Paper",
      logo: "/lovable-uploads/e1227d8c-7d2a-4173-b89e-d5a91b3e42dc.png",
      storeImage: "/lovable-uploads/3b50149b-2cdf-4aae-b6b9-8bc9569be0c4.png",
      location: "1° piso",
      hours: "Seg a Sex: 10h às 18h | Sáb: 10h às 16h",
      phone: "",
      instagramUrl: "https://www.instagram.com/amanipaper/",
      category: "Outros",
      subcategory: "Papelaria"
    },
    {
      id: 53,
      name: "Allen Joias",
      logo: "/lovable-uploads/2245159e-c829-49f5-9632-4b6a1870f561.png",
      storeImage: "/lovable-uploads/e755b51f-de0f-45b0-b554-2e8b082cb178.png",
      location: "1° piso",
      hours: "Seg a Sex: 10h às 19h | Sáb: 10h às 16h",
      phone: "",
      instagramUrl: "https://www.instagram.com/allenjoiasoficial/",
      category: "Moda",
      subcategory: "Joalheria"
    },

    // Imobiliárias
    {
      id: 54,
      name: "IMobly",
      logo: "/lovable-uploads/abed223b-e7f1-4052-8b37-f6e86c912451.png",
      storeImage: "/lovable-uploads/68438d66-04af-4f34-8381-f85331070504.png",
      instagramUrl: "https://www.instagram.com/imoblydf",
      location: "Piso Superior - Metrópole Shopping",
      phone: "(61) 3568-6035",
      hours: "Seg-Sex: 09h - 12h/13h - 17h",
      category: "Imobiliárias",
      subcategory: "Imobiliária"
    },
    {
      id: 55,
      name: "Lucas Imobiliária",
      logo: "/lovable-uploads/dc6ff6f0-1ebe-4cbf-9d46-8bd178e9dd58.png",
      storeImage: "/lovable-uploads/abda320a-ec34-4e84-87b2-cf98c0285eaf.png",
      instagramUrl: "https://www.instagram.com/imobiliarialucasdf",
      location: "Piso Superior - Metrópole Shopping",
      phone: "(61) 3351-3747",
      hours: "Seg-Sex: 08h - 18h | Sáb: 08h - 12h",
      category: "Imobiliárias",
      subcategory: "Imobiliária"
    },
    {
      id: 56,
      name: "Divino Morais Imóveis",
      logo: "/lovable-uploads/624e8135-7b74-4ab5-af1c-e6a0e07f139f.png",
      storeImage: "/lovable-uploads/e6c00d3d-d87c-40c2-bdc6-8b6f0b8eeef3.png",
      instagramUrl: "https://www.instagram.com/divinomoraisimoveis",
      location: "Piso Superior - Metrópole Shopping",
      phone: "(61) 3435-4814",
      hours: "Seg-Sex: 09h - 17h30 | Sáb: 08h30 - 12h",
      category: "Imobiliárias",
      subcategory: "Imobiliária"
    },

    // Joias & Bijuterias
    {
      id: 57,
      name: "Miss Moda Biju",
      logo: "/lovable-uploads/ed5b4c80-6e87-4551-bcad-4be74b38dbf6.png",
      storeImage: "/lovable-uploads/2ceff1cc-3a98-4e48-ba15-db4a86d02c12.png",
      instagramUrl: "https://www.instagram.com/missmodabiju/",
      location: "Térreo - Metrópole Shopping",
      phone: "(61) 9 8379-1820",
      hours: "Segunda a Sábado: 10h às 20h",
      category: "Joias & Bijuterias",
      subcategory: "Bijuterias"
    },
    {
      id: 58,
      name: "A Rainha",
      logo: "/lovable-uploads/52ff2b06-dabe-4635-b088-c8aa59962185.png",
      storeImage: "/lovable-uploads/9bb53ccc-19b7-4c3d-a78d-250c177b7a72.png",
      instagramUrl: "https://www.instagram.com/arainha_acessorios",
      location: "Térreo - Metrópole Shopping",
      phone: "(61) 9 9532-1313",
      hours: "Segunda a Sábado: 10h às 20h",
      category: "Joias & Bijuterias",
      subcategory: "Acessórios"
    },
    {
      id: 59,
      name: "Coisa de Madame",
      logo: "/lovable-uploads/b612e377-cf25-4103-93da-f7b1c651e052.png",
      storeImage: "/lovable-uploads/eda9cbb7-d779-4cf4-bd90-f22545d0dbf7.png",
      instagramUrl: "https://www.instagram.com/coisademadamedf/",
      location: "1° piso",
      phone: "",
      hours: "Seg a Sáb: 10h às 19h",
      category: "Joias & Bijuterias",
      subcategory: "Semijoias e Acessórios"
    },
    {
      id: 60,
      name: "Maria Diogo",
      logo: "/lovable-uploads/924d9b5e-18b9-4d77-a812-60c748d58060.png",
      storeImage: "/lovable-uploads/9ce6b52a-484b-473e-8f1c-b6d2f284e081.png",
      instagramUrl: "https://www.instagram.com/lojamariadiogo/",
      location: "1° piso",
      phone: "",
      hours: "Seg a Sáb: 10h às 19h",
      category: "Joias & Bijuterias",
      subcategory: "Acessórios"
    },
    {
      id: 61,
      name: "Balangandãs",
      logo: "/lovable-uploads/c16e79e3-fbe1-4e20-bf7c-be0bc9feb73c.png",
      storeImage: "/lovable-uploads/8c95f6bf-b9ce-4c9a-bdef-777a32409156.png",
      instagramUrl: "https://www.instagram.com/balangandasbijus/",
      location: "1° piso",
      phone: "",
      hours: "",
      category: "Joias & Bijuterias",
      subcategory: "Bijus, Folheados, Semijoias"
    }
  ];

  // Initialize shuffled stores on component mount
  useEffect(() => {
    setShuffledStores(shuffleArray(allStores));
  }, []);

  // Shuffle stores when "Todas" category is selected
  useEffect(() => {
    if (selectedCategory === "Todas") {
      setShuffledStores(shuffleArray(allStores));
    }
  }, [selectedCategory]);

  const categories = ["Todas", "Moda", "Beleza", "Saúde", "Clínicas", "Esportes", "Gastronomia", "Educação", "Decoração & Casa", "Imobiliárias", "Joias & Bijuterias", "Outros"];
  // Use shuffled stores when category is "Todas", otherwise use original order
  const storeList = selectedCategory === "Todas" ? shuffledStores : allStores;
  
  // Função para remover acentos na busca
  const removeAccents = (str: string) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };
  
  const filteredStores = storeList.filter(store => {
    const matchesSearch = 
      removeAccents(store.name.toLowerCase()).includes(removeAccents(searchTerm.toLowerCase())) ||
      removeAccents(store.subcategory.toLowerCase()).includes(removeAccents(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "Todas" || store.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleStoreClick = (instagramUrl: string) => {
    window.open(instagramUrl, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppClick = (phone: string) => {
    window.open(`https://wa.me/55${phone.replace(/\D/g, '')}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="pb-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Enhanced Header */}
        <div className="text-center mb-12 animate-fade-in pt-16">
          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 gradient-text leading-tight">
            Nossas Lojas
          </h1>
          
          {/* Simplified Description - REDUZIDO PARA 1 LINHA */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl md:text-2xl text-muted-foreground sophisticated-text leading-relaxed">
              Explore mais de <span className="text-primary font-semibold">66 estabelecimentos.</span> Onde sofisticação encontra conveniência.
            </p>
          </div>
        </div>

{/* Enhanced Search and Filter Section */}
<div className="mb-16 animate-fade-in" style={{animationDelay: '0.2s'}}>
  {/* Search Bar and Dropdown Filter Side by Side */}
  <div className="max-w-5xl mx-auto mb-10">
    <div className="flex flex-col md:flex-row gap-4 items-stretch">
      {/* Search Bar */}
      <div className="relative flex-1">
        <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground z-10" />
        <Input
          placeholder="Pesquisar por nome da loja ou categoria..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full h-[60px] pl-16 pr-6 text-lg border-2 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all bg-background/50 backdrop-blur-sm shadow-lg"
        />
      </div>
      
      {/* Dropdown Filter */}
      <div className="md:w-[280px]">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full h-[60px] px-6 text-lg border-2 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all bg-background/50 backdrop-blur-sm shadow-lg">
            <div className="flex items-center gap-3">
              <Filter className="h-5 w-5" />
              <SelectValue placeholder="Todas as Categorias" />
            </div>
          </SelectTrigger>
          <SelectContent className="rounded-xl border-2">
            {categories.map((category) => (
              <SelectItem 
                key={category} 
                value={category}
                className="text-base py-3 cursor-pointer hover:bg-primary/10 rounded-lg"
              >
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  </div>
  
  {/* Filter Description */}
  <div className="text-center">
    <p className="text-sm text-muted-foreground">
      {selectedCategory === "Todas" 
        ? "Mostrando todas as categorias disponíveis" 
        : `Filtrando por: ${selectedCategory}`}
    </p>
  </div>
</div>

        {/* Enhanced Results Counter */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <p className="text-muted-foreground font-medium">
              {filteredStores.length} {filteredStores.length === 1 ? 'loja encontrada' : 'lojas encontradas'}
            </p>
          </div>
        </div>

        {/* Stores Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {filteredStores.map((store, index) => (
            <Card 
              key={store.id} 
              className="luxury-card border-0 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden cursor-pointer" 
              style={{animationDelay: `${index * 100}ms`}}
            >
              {/* Store Image with Enhanced Overlay */}
              <div className="relative">
                <ResponsiveImage 
                  src={store.storeImage} 
                  alt={`Fachada da loja ${store.name}`}
                  aspectRatio="landscape"
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Category Badge - Menor no mobile */}
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                  <Badge className="bg-white/90 text-primary border-0 font-semibold px-2 py-0.5 text-[10px] sm:text-xs sm:px-3 sm:py-1">
                    {store.category}
                  </Badge>
                </div>
                
                {/* Hover Overlay - APENAS DESKTOP */}
                <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-display font-bold mb-2">{store.name}</h3>
                    <p className="text-sm text-white/90 mb-4">{store.subcategory}</p>
                    <div className="flex gap-2">
                      {store.instagramUrl && (
                        <Button 
                          size="sm" 
                          className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStoreClick(store.instagramUrl);
                          }}
                        >
                          <Instagram className="h-4 w-4 mr-2" />
                          Instagram
                        </Button>
                      )}
                      {store.phone && (
                        <Button 
                          size="sm" 
                          className="bg-green-500/20 hover:bg-green-500/30 text-white border border-green-400/30 backdrop-blur-sm transition-all"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleWhatsAppClick(store.phone);
                          }}
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          WhatsApp
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Store Information - RESPONSIVO */}
              <CardContent className="p-3 sm:p-6 lg:p-8 space-y-3 sm:space-y-4 lg:space-y-6">
                {/* Header with Logo and Title */}
                <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden bg-white shadow-lg flex-shrink-0 border border-primary/10">
                    <ResponsiveImage 
                      src={store.logo} 
                      alt={`Logo ${store.name}`} 
                      aspectRatio="square"
                      objectFit="contain"
                      className="w-full h-full bg-white p-0.5 sm:p-1 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-xs sm:text-sm lg:text-xl font-display font-bold mb-1 sm:mb-2 line-clamp-2">
                      {store.name}
                    </CardTitle>
                    <Badge variant="secondary" className="text-[9px] sm:text-xs lg:text-sm px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1">
                      {store.subcategory}
                    </Badge>
                  </div>
                </div>

                {/* Location - Compacto no mobile */}
                <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 lg:p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg sm:rounded-xl">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-foreground line-clamp-2 sm:line-clamp-none">{store.location}</span>
                </div>

                {/* Hours - Oculto no mobile */}
                <div className="hidden sm:block space-y-2 lg:space-y-3">
                  <h4 className="font-semibold text-xs lg:text-base flex items-center gap-2 text-foreground">
                    <Clock className="h-4 w-4 lg:h-5 lg:w-5 text-primary" />
                    Funcionamento
                  </h4>
                  <div className="pl-6 lg:pl-7">
                    <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                      {store.hours}
                    </p>
                  </div>
                </div>

                {/* Website Link - Oculto no mobile */}
                {store.website && (
                  <div className="hidden sm:flex items-center gap-3 p-3 bg-accent/10 rounded-lg">
                    <ExternalLink className="h-4 w-4 text-primary flex-shrink-0" />
                    <a 
                      href={store.website} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline font-medium transition-colors"
                      onClick={e => e.stopPropagation()}
                    >
                      Site oficial
                    </a>
                  </div>
                )}

                {/* Contact Buttons - COMPACTOS NO MOBILE */}
                <div className="flex gap-1.5 sm:gap-2 lg:gap-3 pt-1 sm:pt-2">
                  {store.phone && (
                    <Button 
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white transition-all duration-300 h-8 sm:h-9 lg:h-11 text-[10px] sm:text-xs lg:text-sm" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWhatsAppClick(store.phone);
                      }}
                    >
                      <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 sm:mr-2" />
                      <span className="hidden sm:inline">WhatsApp</span>
                    </Button>
                  )}

                  {store.instagramUrl && (
                    <Button 
                      variant="outline"
                      className="flex-1 border-2 hover:bg-primary/10 transition-all duration-300 h-8 sm:h-9 lg:h-11 text-[10px] sm:text-xs lg:text-sm" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleStoreClick(store.instagramUrl);
                      }}
                    >
                      <Instagram className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 sm:mr-2" />
                      <span className="hidden sm:inline">Instagram</span>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredStores.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Nenhuma loja encontrada</h3>
            <p className="text-muted-foreground mb-6">
              Tente ajustar seus filtros ou termo de pesquisa.
            </p>
            <Button onClick={() => {setSearchTerm(""); setSelectedCategory("Todas");}}>
              Limpar Filtros
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-luxury/10 rounded-3xl p-12 border border-primary/20">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Sua loja aqui?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Faça parte do Metrópole Shopping e expanda seus negócios em um ambiente 
              sofisticado e estrategicamente localizado.
            </p>
            <Button size="lg" className="elegant-button hero-section px-8 py-4 text-lg">
              <Phone className="h-5 w-5 mr-3" />
              Entre em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllStores;