// Informações do Metrópole Shopping usadas em todo o site. Edite aqui.

export const site = {
  name: "Metrópole Shopping",
  street: "Av. das Araucárias, 1525",
  district: "Águas Claras, Brasília – DF",
  cep: "71936-250",
  since: 2011,
  phone: "(61) 3047-2900",
  phoneHref: "tel:+556130472900",
  whatsappHref: "https://wa.me/556130472900",
  email: "contato@metropoleshopping.com.br",
  instagram: "https://www.instagram.com/metropole_shopping/",
  instagramHandle: "@metropole_shopping",
  facebook: "https://www.facebook.com/MetropoleShopping",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Metr%C3%B3pole+Shopping%2C+Av.+das+Arauc%C3%A1rias%2C+1525%2C+%C3%81guas+Claras%2C+Bras%C3%ADlia+-+DF",
  mapsEmbed: "https://www.google.com/maps?q=Metr%C3%B3pole+Shopping,+Av.+das+Arauc%C3%A1rias,+1525,+%C3%81guas+Claras,+Bras%C3%ADlia+-+DF&output=embed",
  admin: {
    where: "Piso 2, sala da administração",
    hours: [
      ["Segunda a sexta", "9h às 18h"],
      ["Sábado", "9h às 17h"],
    ] as [string, string][],
  },
};

/** Horário do shopping. dia: 0 = domingo … 6 = sábado. */
export const openingHours: { label: string; days: number[]; open: number; close: number; text: string }[] = [
  { label: "Segunda a sábado", days: [1, 2, 3, 4, 5, 6], open: 10, close: 22, text: "10h às 22h" },
  { label: "Domingo", days: [0], open: 14, close: 20, text: "14h às 20h" },
];

export const storeHoursNote = "Cada loja tem seu próprio horário. Confira na lista de lojas.";

/** Situação agora, no horário de Brasília. */
export function openStatus(now = new Date()): { open: boolean; text: string } {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "America/Sao_Paulo", weekday: "short", hour: "numeric", minute: "numeric", hourCycle: "h23" }).formatToParts(now);
  const wd = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(wd);
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0) + Number(parts.find((p) => p.type === "minute")?.value ?? 0) / 60;
  const today = openingHours.find((h) => h.days.includes(day));
  if (today && hour >= today.open && hour < today.close) {
    return { open: true, text: `Aberto agora, fecha às ${today.close}h` };
  }
  if (today && hour < today.open) return { open: false, text: `Fechado agora, abre hoje às ${today.open}h` };
  const tomorrow = openingHours.find((h) => h.days.includes((day + 1) % 7));
  return { open: false, text: tomorrow ? `Fechado agora, abre amanhã às ${tomorrow.open}h` : "Fechado agora" };
}

export interface Category {
  name: string;
  slug: string;
  /** Nome da loja cuja foto representa a categoria na página inicial. */
  cover?: string;
}

export const categories: Category[] = [
  { name: "Moda", slug: "/moda-acessorios", cover: "Hering" },
  { name: "Beleza", slug: "/beleza-bem-estar", cover: "Pose Instituto de Beleza" },
  { name: "Gastronomia", slug: "/gastronomia", cover: "Chiquinho Sorvetes" },
  { name: "Clínicas", slug: "/clinicas", cover: "Sabin Diagnóstico e Saúde" },
  { name: "Saúde", slug: "/saude", cover: "Brizzon Ótica" },
  { name: "Esportes", slug: "/esportes", cover: "World Gym Pro" },
  { name: "Joias & Bijuterias", slug: "/joias-bijuterias", cover: "A Rainha" },
  { name: "Decoração & Casa", slug: "/decoracao-casa", cover: "Zelar" },
  { name: "Educação", slug: "/educacao", cover: "CDF Cabine de Foco" },
  { name: "Imobiliárias", slug: "/imobiliarias", cover: "Lucas Imobiliária" },
  { name: "Outros", slug: "/outros", cover: "Pointpel Papelaria e Presentes" },
];

export const amenities = [
  {
    id: "estacionamento",
    title: "Estacionamento",
    text: "Estacionamento externo em frente ao shopping, com carregadores para carro elétrico, e subsolo com acesso por elevadores e escadas.",
    details: openingHours.map((h) => `${h.label}: ${h.text}`),
    photo: { src: "/img/fachada-frente.webp", alt: "Carros estacionados em frente ao Metrópole Shopping", caption: "Estacionamento em frente ao shopping" },
  },
  {
    id: "pet",
    title: "Pet friendly",
    text: "Seu pet pode passear e fazer compras com a família.",
    photo: { src: "/lovable-uploads/b21b0102-f496-4512-9443-636941f00efb.webp", alt: "Fachada da Clínica das Patas", caption: "Clínica das Patas, clínica veterinária no piso superior" },
    note: "Por norma da Vigilância Sanitária, pets não entram nas praças de alimentação, restaurantes, clínicas, farmácias, fraldários e sanitários. Cães-guia têm acesso livre a todos esses lugares (Lei Federal nº 11.126, de 27/06/2005).",
  },
  {
    id: "fraldario",
    title: "Fraldário",
    text: "Espaço para troca de fraldas, em dois lugares.",
    details: ["Piso 1, perto do Sabin", "Piso 2, perto da administração"],
    photo: { src: "/img/escada-rolante.webp", alt: "Mãe e filho na escada rolante do shopping", caption: "Escada rolante entre os pisos" },
  },
  {
    id: "copa",
    title: "Copa",
    text: "Espaço para refeições, com micro-ondas.",
    details: ["Piso 2, ao lado da administração"],
    photo: { src: "/img/praca.webp", alt: "Mesas da praça de alimentação sob o vão central do shopping", caption: "Praça de alimentação, no térreo" },
  },
  {
    id: "achados",
    title: "Achados e perdidos",
    text: "Perdeu ou encontrou alguma coisa? Procure a administração, no piso 2. Os objetos ficam guardados até alguém buscar.",
    details: openingHours.map((h) => `${h.label}: ${h.text}`),
  },
];

export interface EventPhoto { src: string; alt: string; caption: string }

export const eventPhotos: EventPhoto[] = [
  { src: "/lovable-uploads/fae98f1f-9f41-416b-889e-e9bca3e914a8.webp", alt: "Quadrilha dançando à noite com vestidos rodados azuis e vermelhos", caption: "Quadrilha na festa junina do Metrópole" },
  { src: "/lovable-uploads/daca7754-03d0-4526-98ff-ee47561a9ff7.webp", alt: "Menina com vestido xadrez posa em um cenário de festa junina com girassóis", caption: "Cenário de fotos da festa junina" },
  { src: "/lovable-uploads/c8768510-69ca-42e1-b8cb-9a6af0debd4f.webp", alt: "Senhora servindo caldo em uma barraca de comida típica", caption: "Comida típica nas barracas" },
  { src: "/lovable-uploads/6cdefe40-6751-4093-a648-da65cd6f9d1b.webp", alt: "Crianças descendo um escorregador inflável colorido", caption: "Brinquedos para as crianças" },
  { src: "/lovable-uploads/a3107b48-ac3d-44da-8eb7-23df7edca88e.webp", alt: "Dançarinos de quadrilha com roupas típicas e convidados", caption: "Dançarinos e convidados no arraiá" },
  { src: "/lovable-uploads/c912d792-4a73-4539-bf6a-349a7d68bf5b.webp", alt: "Casal sorrindo no meio do público da festa à noite", caption: "Público na festa junina" },
];

export const pastEvent = {
  title: "Pequenos Exploradores",
  subtitle: "Férias no Metrópole",
  date: "24 de janeiro de 2026",
  dateShort: "24 de janeiro",
  time: "14h às 18h",
  place: "Praça de alimentação",
  price: "Gratuito",
  age: "4 a 12 anos",
  team: "Trio Bagunça",
  text: "Uma tarde de férias para a criançada, com recreação, brincadeiras dirigidas, gincanas, música e uma oficina de plantinhas.",
  activities: ["Recreação", "Brincadeiras dirigidas", "Gincanas", "Música e dança", "Oficina de plantinhas", "Atividades educativas"],
  poster: "/lovable-uploads/1768258398504_image.webp",
};
