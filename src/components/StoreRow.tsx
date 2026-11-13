import { useState } from "react";
import type { Store } from "@/data/stores";

const floorLabel = (s: Store) => (s.floorNote ? `${s.floor}, ${s.floorNote}` : s.floor);

/** Uma loja na lista: logotipo como marcador, nome, piso, o que vende e contatos. */
const StoreRow = ({ store, showPhoto = true, photoOpen = false, reveal }: { store: Store; showPhoto?: boolean; photoOpen?: boolean; reveal?: number }) => {
  const [photo, setPhoto] = useState(photoOpen);
  return (
    <li className="store" {...(reveal !== undefined ? { "data-reveal": "", style: { ["--i" as string]: reveal } } : {})}>
      <img className="store__logo" src={store.logo} alt="" width={64} height={64} loading="lazy" />
      <div>
        <div className="store__line">
          <h3 className="store__name">{store.name}</h3>
          <span className="store__floor">{store.floor}</span>
        </div>
        <p className="store__type">
          {store.type}
          {store.floorNote ? `. ${floorLabel(store)}` : ""}
          {store.hours ? `. ${store.hours}` : ""}
        </p>
        <p className="store__links">
          {store.whatsapp && (
            <a className="link" href={store.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp{store.phone ? ` ${store.phone}` : ""}
            </a>
          )}
          {!store.whatsapp && store.tel && (
            <a className="link" href={store.tel}>Ligar {store.phone}</a>
          )}
          {store.instagram && (
            <a className="link" href={store.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          )}
          {store.website && (
            <a className="link" href={store.website} target="_blank" rel="noopener noreferrer">Site</a>
          )}
          {showPhoto && store.photo && (
            <button className="link" aria-expanded={photo} onClick={() => setPhoto((v) => !v)}>
              {photo ? "Esconder a fachada" : "Ver a fachada"}
            </button>
          )}
        </p>
        {photo && <img className="store__photo cut" src={store.photo} alt={`Fachada da loja ${store.name}`} loading="lazy" />}
      </div>
    </li>
  );
};

export default StoreRow;
