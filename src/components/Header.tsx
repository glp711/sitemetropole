import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import OpenStatus from "./OpenStatus";
import { categories, site } from "@/data/site";
import { stores } from "@/data/stores";

const nav = [
  { name: "Lojas", href: "/lojas", hint: `${stores.length} lojas em três pisos` },
  { name: "Eventos", href: "/eventos", hint: "Festa junina, férias e mais" },
  { name: "Comodidades", href: "/comodidades", hint: "Estacionamento, pet, fraldário" },
  { name: "Como chegar", href: "/mapa-contato", hint: site.street },
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

  const tab = open ? 0 : -1;

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
          <span className="menu-toggle__bars" aria-hidden="true" />
          Menu
        </button>
      </div>

      <div id="menu" className="mobile-menu" data-open={open} aria-hidden={!open} role="dialog" aria-modal="true" aria-label="Menu">
        <div className="mobile-menu__top">
          <Link to="/" aria-label="Metrópole Shopping, página inicial" tabIndex={tab} className="site-header__logo">
            <img src="/img/logo.png" alt="" width={200} height={240} />
          </Link>
          <button className="menu-close" onClick={() => setOpen(false)} tabIndex={tab}>
            Fechar
            <span className="menu-close__x" aria-hidden="true" />
          </button>
        </div>

        <OpenStatus className="mobile-menu__status" />

        <nav className="mobile-menu__links" aria-label="Menu principal">
          {[{ name: "Início", href: "/", hint: "Página inicial" }, ...nav].map((item, i) => (
            <NavLink key={item.href} to={item.href} end tabIndex={tab} style={{ ["--i" as string]: i }}>
              <span className="mobile-menu__name">
                <span className="star-bullet" />
                {item.name}
              </span>
              <span className="mobile-menu__hint">{item.hint}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mobile-menu__cats">
          <p className="mobile-menu__label">Categorias</p>
          <ul>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to={c.slug} tabIndex={tab}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mobile-menu__actions">
          <a className="button" href={site.whatsappHref} target="_blank" rel="noopener noreferrer" tabIndex={tab}>
            Falar no WhatsApp
          </a>
          <a className="button button--quiet" href={site.phoneHref} tabIndex={tab}>
            Ligar
          </a>
        </div>
        <p className="mobile-menu__foot">
          <a className="link" href={site.instagram} target="_blank" rel="noopener noreferrer" tabIndex={tab}>
            Instagram {site.instagramHandle}
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
