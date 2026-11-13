import { Link } from "react-router-dom";
import Star from "@/components/Star";
import { categories, openingHours, site } from "@/data/site";

const Footer = () => (
  <footer className="site-footer on-field">
    <div className="wrap">
      <div className="site-footer__mark">
        <Star fill="var(--brand)" withCore coreFill="var(--gold)" />
        <p className="site-footer__word" aria-hidden="true">
          Metrópole
        </p>
      </div>

      <div className="site-footer__cols">
        <div>
          <h2>Lojas</h2>
          <ul>
            <li><Link to="/lojas">Todas as lojas</Link></li>
            {categories.slice(0, 5).map((c) => (
              <li key={c.slug}><Link to={c.slug}>{c.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Mais lojas</h2>
          <ul>
            {categories.slice(5).map((c) => (
              <li key={c.slug}><Link to={c.slug}>{c.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2>O shopping</h2>
          <ul>
            <li><Link to="/eventos">Eventos</Link></li>
            <li><Link to="/comodidades">Comodidades</Link></li>
            <li><Link to="/mapa-contato">Como chegar</Link></li>
            <li><a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href={site.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </div>
        <div>
          <h2>Horário</h2>
          <ul>
            {openingHours.map((h) => (
              <li key={h.label}>{h.label}<br />{h.text}</li>
            ))}
          </ul>
        </div>
        <div className="site-footer__contact">
          <h2>Contato</h2>
          <ul>
            <li>{site.street}<br />{site.district}<br />CEP {site.cep}</li>
            <li><a href={site.phoneHref}>{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="site-footer__base">
        <p>© {new Date().getFullYear()} Metrópole Shopping. Em Águas Claras desde {site.since}.</p>
        <a className="button button--light" href={site.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
    </div>
  </footer>
);

export default Footer;
