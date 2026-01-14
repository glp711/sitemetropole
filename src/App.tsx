import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Stores from "./pages/Stores";
import Fashion from "./pages/Fashion";
import Beauty from "./pages/Beauty";
import Health from "./pages/Health";
import Clinics from "./pages/Clinics";
import Sports from "./pages/Sports";
import Others from "./pages/Others";
import Education from "./pages/Education";
import Decoration from "./pages/Decoration";
import RealEstate from "./pages/RealEstate";
import Jewelry from "./pages/Jewelry";

import Amenities from "./pages/Amenities";
import Gastronomy from "./pages/Gastronomy";
import Events from "./pages/Events";
import MapContact from "./pages/MapContact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  return (
    <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lojas" element={<Stores />} />
            <Route path="/moda-acessorios" element={<Fashion />} />
            <Route path="/beleza-bem-estar" element={<Beauty />} />
            <Route path="/saude" element={<Health />} />
            <Route path="/clinicas" element={<Clinics />} />
            <Route path="/esportes" element={<Sports />} />
            <Route path="/decoracao-casa" element={<Decoration />} />
            <Route path="/imobiliarias" element={<RealEstate />} />
            <Route path="/joias-bijuterias" element={<Jewelry />} />
            <Route path="/outros" element={<Others />} />
            
            <Route path="/comodidades" element={<Amenities />} />
            <Route path="/eventos" element={<Events />} />
            <Route path="/mapa-contato" element={<MapContact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Layout>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
