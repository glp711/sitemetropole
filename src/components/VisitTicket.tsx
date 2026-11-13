import { Link } from "react-router-dom";
import OpenStatus from "./OpenStatus";
import { openingHours, site, storeHoursNote } from "@/data/site";

/** Endereço e horário em forma de ticket de estacionamento. */
const VisitTicket = ({ headingId, showMapLink = true }: { headingId: string; showMapLink?: boolean }) => (
  <div className="ticket on-field" data-reveal>
    <div className="ticket__left">
      <h2 id={headingId}>{site.street}</h2>
      <p>
        {site.district}, CEP {site.cep}. Estacionamento em frente ao shopping e no subsolo.
      </p>
    </div>
    <div className="ticket__right">
      <div className="hours-block">
        <OpenStatus className="hero__status" />
        <dl className="hours">
          {openingHours.map((h) => (
            <div key={h.label} className="contents">
              <dt>{h.label}</dt>
              <dd>{h.text}</dd>
            </div>
          ))}
        </dl>
        <p className="soft small">{storeHoursNote}</p>
      </div>
      <div className="ticket__actions">
        <a className="button button--light" href={site.mapsHref} target="_blank" rel="noopener noreferrer">Abrir no Google Maps</a>
        <a className="link" href={site.phoneHref}>{site.phone}</a>
        {showMapLink && <Link className="link" to="/mapa-contato">Mapa e contatos</Link>}
      </div>
    </div>
  </div>
);

export default VisitTicket;
