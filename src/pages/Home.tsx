import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OpenStatus from "@/components/OpenStatus";
import StoreRow from "@/components/StoreRow";
import VisitTicket from "@/components/VisitTicket";
import { categories, eventPhotos, site } from "@/data/site";
import { stores } from "@/data/stores";
import { findStore, storesIn } from "@/data/directory";
import { usePageMeta } from "@/hooks/use-page-meta";

const showcase = categories
  .filter((c) => c.cover && findStore(c.cover))
  .slice(0, 6)
  .map((c, i) => {
    const list = storesIn(c.name);
    return { ...c, cover: findStore(c.cover!)!, list, turn: i * 45 };
  });

const count = stores.length;

const Hero = () => (
  <section className="hero wrap" aria-labelledby="hero-title">
    <div className="hero__text">
      <h1 id="hero-title" data-rise style={{ ["--i" as string]: 0 }}>
        Seu shopping <br />em Águas Claras
      </h1>
      <p className="hero__lead" data-rise style={{ ["--i" as string]: 1 }}>
        {count} lojas, praça de alimentação, clínicas e academia na {site.street}. Estacione na frente ou no subsolo.
      </p>
      <div data-rise style={{ ["--i" as string]: 2 }}>
        <OpenStatus className="hero__status" />
      </div>
      <div className="hero__actions" data-rise style={{ ["--i" as string]: 3 }}>
        <Link className="button" to="/lojas">Ver as {count} lojas</Link>
        <Link className="link" to="/mapa-contato">Como chegar</Link>
      </div>
    </div>
    <div className="hero__shape shutter">
      <img src="/img/fachada.webp" alt="Fachada do Metrópole Shopping, com o letreiro verde e as faixas das lojas" width={2000} height={1333} fetchPriority="high" />
    </div>
  </section>
);

const Showcase = () => {
  const [active, setActive] = useState(0);
  const cur = showcase[active];
  const names = cur.list.filter((s) => s.name !== cur.cover.name).slice(0, 3).map((s) => s.name);
  return (
    <section className="section wrap" aria-labelledby="showcase-title">
      <div className="showcase">
        <div className="showcase__list" data-reveal>
          <h2 id="showcase-title">O que tem aqui</h2>
          <p className="showcase__hint">Escolha uma categoria para ver as lojas.</p>
          <div className="showcase__names" role="group" aria-label="Escolha uma categoria">
            {showcase.map((c, i) => (
              <button key={c.slug} className="chip" aria-pressed={i === active} onClick={() => setActive(i)}>
                <span>{c.name}</span>
                <span className="chip__count">{c.list.length}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="showcase__stage" data-reveal style={{ ["--i" as string]: 1 }}>
          <div className="showcase__disc" style={{ ["--turn" as string]: `${cur.turn}deg` }} />
          <div className="showcase__photo">
            {showcase.map((c, i) => (
              <img key={c.slug} src={c.cover.photo} alt={`Fachada da ${c.cover.name}`} data-active={i === active} loading="lazy" width={800} height={800} />
            ))}
          </div>
        </div>
        <div className="showcase__fact" aria-live="polite">
          <p>
            <strong>{cur.list.length} {cur.list.length === 1 ? "lugar" : "lugares"}.</strong> Na foto, {cur.cover.name}. {names.length ? `Também: ${names.join(", ")}.` : ""}
          </p>
          <p>
            <Link className="button showcase__go" to={cur.slug}>Ver {cur.name}</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

const FoodCourt = () => {
  const food = storesIn("Gastronomia");
  return (
    <section className="section wrap" aria-labelledby="food-title">
      <div className="dir-group">
        <div className="dir-group__head" data-reveal>
          <h2 id="food-title">Onde comer</h2>
          <span className="count">{food.length} lugares no térreo</span>
        </div>
        <ul className="dir-list">
          {food.map((s, i) => (
            <StoreRow key={s.id} store={s} reveal={(i % 2) + Math.floor(i / 2)} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const Events = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % eventPhotos.length), 3000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <section className="section wrap" aria-labelledby="events-title">
      <div className="frame-section">
        <div className="frame-section__text" data-reveal>
          <h2 id="events-title">Festa junina, férias e mais</h2>
          <p>
            O Metrópole faz eventos ao longo do ano: arraiá com quadrilha e comida típica, tardes de férias para as crianças e datas comemorativas. A programação sai primeiro no Instagram {site.instagramHandle}.
          </p>
          <Link className="button" to="/eventos">Ver eventos</Link>
        </div>
        <figure className="frame" data-reveal style={{ ["--i" as string]: 1 }} onClick={() => setI((n) => (n + 1) % eventPhotos.length)}>
          <div className="frame__pics cut">
            {eventPhotos.map((p, n) => (
              <img key={p.src} src={p.src} alt={p.alt} data-active={n === i} loading="lazy" width={800} height={1000} />
            ))}
          </div>
          <figcaption aria-live="polite">{eventPhotos[i].caption}</figcaption>
        </figure>
      </div>
    </section>
  );
};

const Comfort = () => (
  <section className="section wrap comfort" aria-labelledby="comfort-title">
    <div>
    <h2 id="comfort-title" className="sr-only">Comodidades</h2>
    <p className="statement" data-reveal>
      Estacione na frente
      <span className="slot"><img src="/img/fachada-frente.webp" alt="carros no estacionamento em frente ao shopping" loading="lazy" /></span>
      ou no subsolo, com carregador para carro elétrico. Suba pela escada rolante
      <span className="slot"><img src="/img/escada-rolante.webp" alt="escada rolante do shopping" loading="lazy" /></span>
      e traga seu pet
      <span className="slot"><img src="/lovable-uploads/b21b0102-f496-4512-9443-636941f00efb.webp" alt="fachada da Clínica das Patas" loading="lazy" /></span>
      junto.
    </p>
    <div className="statement-after" data-reveal style={{ ["--i" as string]: 1 }}>
      <p>Tem fraldário nos dois pisos, copa com micro-ondas e achados e perdidos na administração, no piso 2.</p>
      <Link className="link" to="/comodidades">Todas as comodidades</Link>
    </div>
    </div>
    <img className="comfort__photo cut" data-reveal style={{ ["--i" as string]: 2 }} src="/img/escada-familia.webp" alt="Mãe e filho descendo a escada rolante com uma sacola de compras" loading="lazy" width={1400} height={855} />
  </section>
);

const Home = () => {
  usePageMeta(null, `${count} lojas, praça de alimentação, clínicas e academia na Av. das Araucárias, 1525, em Águas Claras. Horários, lojas, eventos e como chegar.`);
  return (
    <>
      <Hero />
      <Showcase />
      <FoodCourt />
      <Events />
      <Comfort />
      <section className="section wrap" id="visite" aria-labelledby="visit-title">
        <VisitTicket headingId="visit-title" />
      </section>
    </>
  );
};

export default Home;
