import { eventPhotos, pastEvent, site } from "@/data/site";
import { usePageMeta } from "@/hooks/use-page-meta";

const Events = () => {
  usePageMeta("Eventos", "Festa junina, programação de férias para as crianças e datas comemorativas no Metrópole Shopping, em Águas Claras.");
  return (
    <>
      <section className="wrap page-head">
        <h1 data-rise>Eventos</h1>
        <p data-rise style={{ ["--i" as string]: 1 }}>
          A programação muda ao longo do ano e sai primeiro no nosso Instagram.
        </p>
      </section>

      <section className="wrap" aria-labelledby="next-title">
        <div className="split" data-rise style={{ ["--i" as string]: 2 }}>
          <h2 id="next-title" className="head">Próximo evento</h2>
          <div className="stack">
            <p className="lead">Ainda não há data anunciada. Siga {site.instagramHandle} para saber primeiro.</p>
            <a className="button" href={site.instagram} target="_blank" rel="noopener noreferrer">Seguir no Instagram</a>
          </div>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="past-title">
        <div className="split split--rev">
          <figure data-reveal>
            <img className="cut wide" src={pastEvent.poster} alt={`Cartaz do evento ${pastEvent.title}`} width={1200} height={675} loading="lazy" />
          </figure>
          <div className="stack" data-reveal style={{ ["--i" as string]: 1 }}>
            <h2 id="past-title" className="head">{pastEvent.title}</h2>
            <p>Nosso último evento, em {pastEvent.dateShort}. {pastEvent.text}</p>
            <dl className="facts">
              <dt>Quando</dt><dd>{pastEvent.date}, {pastEvent.time}</dd>
              <dt>Onde</dt><dd>{pastEvent.place}</dd>
              <dt>Para quem</dt><dd>Crianças de {pastEvent.age}</dd>
              <dt>Entrada</dt><dd>{pastEvent.price}</dd>
              <dt>Com</dt><dd>{pastEvent.team}</dd>
            </dl>
          </div>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="junina-title">
        <h2 id="junina-title" className="head mosaic-title" data-reveal>Festa junina no Metrópole</h2>
        <div className="mosaic">
          {eventPhotos.slice(0, 5).map((p, i) => (
            <figure key={p.src} data-reveal style={{ ["--i" as string]: i }}>
              <img className="cut" src={p.src} alt={p.alt} loading="lazy" width={1200} height={800} />
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
};

export default Events;
