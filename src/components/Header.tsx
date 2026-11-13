import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { site } from "@/data/site";

const nav = [
  { name: "Lojas", href: "/lojas" },
  { name: "Eventos", href: "/eventos" },
  { name: "Comodidades", href: "/comodidades" },
  { name: "Como chegar", href: "/mapa-contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap site-header__bar">
        <Link to="/" className="site-header__logo" aria-label="Metrópole Shopping, página inicial">
          <img src="/img/logo.png" alt="" width={200} height={240} />
        </Link>
        <nav className="site-nav" aria-label="Principal">
          {nav.map((item) => (
            <NavLink key={item.href} to={item.href}>
              {item.name}
            </NavLink>
          ))}
        </nav>
        <a className="button site-header__action" href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
          Falar no WhatsApp
        </a>
        <button className="menu-toggle" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(true)}>
          Menu
        </button>
      </div>

      <div id="menu" className="mobile-menu on-field" data-open={open} aria-hidden={!open}>
        <div className="mobile-menu__top">
          <Link to="/" aria-label="Página inicial" tabIndex={open ? 0 : -1}>
            Metrópole Shopping
          </Link>
          <button className="menu-toggle" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            Fechar
          </button>
        </div>
        <nav className="mobile-menu__links" aria-label="Menu">
          <Link to="/" tabIndex={open ? 0 : -1}>Início</Link>
          {nav.map((item) => (
            <Link key={item.href} to={item.href} tabIndex={open ? 0 : -1}>
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__meta">
          <p>{site.street}, {site.district}</p>
          <a href={site.phoneHref} tabIndex={open ? 0 : -1}>{site.phone}</a>
          <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>WhatsApp</a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>Instagram {site.instagramHandle}</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
