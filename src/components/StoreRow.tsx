import { useState } from "react";
import type { Store } from "@/data/stores";

/** Uma loja na lista: logotipo, nome e piso, o que vende, horário e contatos. */
const StoreRow = ({ store, showPhoto = true, photoOpen = false, reveal }: { store: Store; showPhoto?: boolean; photoOpen?: boolean; reveal?: number }) => {
  const [photo, setPhoto] = useState(photoOpen);
  const hours = store.hours.split("|").map((h) => h.trim()).filter(Boolean);
  return (
    <li className="store" {...(reveal !== undefined ? { "data-reveal": "", style: { ["--i" as string]: reveal } } : {})}>
      <img className="store__logo" src={store.logo} alt="" width={64} height={64} loading="lazy" />
      <div className="store__body">
        <div className="store__line">
          <h3 className="store__name">{store.name}</h3>
          <span className="store__floor">{store.floor}</span>
        </div>
        <p className="store__type">
          {store.type}
          {store.floorNote ? `, ${store.floorNote}` : ""}
        </p>
        {hours.length > 0 && (
          <p className="store__hours">
            {hours.map((h) => (
              <span key={h}>{h}</span>
            ))}
          </p>
        )}
        <div className="store__links">
          {store.whatsapp && (
            <a className="button button--sm" href={store.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp da ${store.name}`}>
              WhatsApp
            </a>
          )}
          {!store.whatsapp && store.tel && (
            <a className="button button--sm" href={store.tel} aria-label={`Ligar para ${store.name}`}>
              Ligar
            </a>
          )}
          {store.phone && <span className="store__phone">{store.phone}</span>}
          {store.instagram && (
            <a className="link" href={store.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          )}
          {store.website && (
            <a className="link" href={store.website} target="_blank" rel="noopener noreferrer">Site</a>
          )}
          {showPhoto && store.photo && (
            <button className="link" aria-expanded={photo} onClick={() => setPhoto((v) => !v)}>
              {photo ? "Esconder fachada" : "Ver fachada"}
            </button>
          )}
        </div>
        {photo && <img className="store__photo cut" src={store.photo} alt={`Fachada da loja ${store.name}`} loading="lazy" />}
      </div>
    </li>
  );
};

export default StoreRow;
