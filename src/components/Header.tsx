import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, Phone, Clock, MessageCircle, ChevronDown, Instagram } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMobileMenu } from "@/contexts/MobileMenuContext";
import { useState } from "react";

const Header = () => {
  const { isOpen, setIsOpen } = useMobileMenu();
  const location = useLocation();
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Lojas", href: "/lojas" },
    { name: "Comodidades", href: "/comodidades" },
    { name: "Eventos", href: "/eventos" },
    { name: "Mapa & Contato", href: "/mapa-contato" }
  ];

  const storeCategories = [
    { name: "Todas as Lojas", href: "/lojas" },
    { name: "Moda", href: "/moda-acessorios" },
    { name: "Beleza", href: "/beleza-bem-estar" },
    { name: "Saúde", href: "/saude" },
    { name: "Clínicas", href: "/clinicas" },
    { name: "Esportes", href: "/esportes" },
    { name: "Decoração & Casa", href: "/decoracao-casa" },
    { name: "Imobiliárias", href: "/imobiliarias" },
    { name: "Joias & Bijuterias", href: "/joias-bijuterias" },
    { name: "Outros", href: "/outros" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg">
      <div className="container-modern">
        <div className="flex items-center justify-between h-24 px-4 md:px-0">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/3623ddf5-1718-4329-804c-b9ae748e9966.png" 
              alt="Metrópole Shopping" 
              className="h-20 sm:h-20 md:h-20 w-auto"
              loading="eager"
              fetchPriority="high"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sophisticated transition-all duration-300 font-medium px-4 py-2 rounded-xl hover:bg-primary-subtle ${
                  location.pathname === item.href
                    ? "text-primary font-semibold bg-primary-subtle"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="cta-button">
                  Visitar Shopping
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-background/95 backdrop-blur-xl border-primary/20">
                {storeCategories.map((category) => (
                  <DropdownMenuItem key={category.name} asChild>
                    <Link
                      to={category.href}
                      className="w-full cursor-pointer font-medium hover:text-primary hover:bg-primary-subtle transition-colors"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                className="h-12 w-12 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/20 shadow-sm transition-all duration-200"
                size="icon"
              >
                <Menu className="h-6 w-6 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[400px] bg-background/95 backdrop-blur-xl overflow-y-auto">
              <div className="flex flex-col space-y-8 mt-8">
                <Link to="/" className="flex items-center justify-center" onClick={() => setIsOpen(false)}>
                  <img 
                    src="/lovable-uploads/3623ddf5-1718-4329-804c-b9ae748e9966.png" 
                    alt="Metrópole Shopping" 
                    className="h-20 w-auto mb-6"
                    loading="eager"
                  />
                </Link>
                
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-lg font-medium transition-all duration-300 p-4 rounded-xl touch-friendly ${
                      location.pathname === item.href
                        ? "text-primary font-semibold bg-primary-subtle"
                        : "text-foreground hover:text-primary hover:bg-primary-subtle"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-6 border-t border-border">
                  <button
                    onClick={() => setCategoriesOpen(!categoriesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-primary-subtle/50 rounded-lg transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        Categorias de Lojas
                      </h3>
                      <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                        {storeCategories.length}
                      </Badge>
                    </div>
                    
                    <div className={`transition-transform duration-300 ${categoriesOpen ? 'rotate-180' : 'rotate-0'}`}>
                      <ChevronDown className="h-5 w-5 text-primary" />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      categoriesOpen ? 'max-h-[600px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="space-y-2 pb-2">
                      {storeCategories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.href}
                          className={`block text-base font-medium transition-all duration-300 px-4 py-3 rounded-lg touch-friendly ${
                            location.pathname === category.href
                              ? "text-primary font-semibold bg-primary-subtle"
                              : "text-muted-foreground hover:text-primary hover:bg-primary-subtle/50"
                          }`}
                          onClick={() => {
                            setIsOpen(false);
                            setCategoriesOpen(false);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border space-y-6">
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-primary-subtle/30">
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="font-medium">(61) 3047-2900</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-luxury-subtle/30">
                      <Clock className="h-5 w-5 text-luxury" />
                      <span className="font-medium">Seg-Sáb: 10:00h-22:00h</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white border-0 shadow-lg"
                    onClick={() => window.open('https://wa.me/5561304729000', '_blank', 'noopener,noreferrer')}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Falar no WhatsApp
                  </Button>

                  <Button 
                    className="w-full bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] hover:opacity-90 text-white border-0 shadow-lg transition-opacity"
                    onClick={() => window.open('https://www.instagram.com/metropole_shopping/', '_blank', 'noopener,noreferrer')}
                  >
                    <Instagram className="h-5 w-5 mr-2" />
                    Siga no Instagram
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
