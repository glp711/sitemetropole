import VisitTicket from "@/components/VisitTicket";
import { site } from "@/data/site";
import { usePageMeta } from "@/hooks/use-page-meta";

const MapContact = () => {
  usePageMeta("Como chegar", `Metrópole Shopping: ${site.street}, ${site.district}. Mapa, horário, telefone, WhatsApp e e-mail.`);
  return (
    <>
      <section className="wrap page-head">
        <h1 data-rise>Como chegar</h1>
        <p data-rise style={{ ["--i" as string]: 1 }}>
          {site.street}, {site.district}. CEP {site.cep}.
        </p>
      </section>

      <iframe
        className="map"
        src={site.mapsEmbed}
        title="Mapa com a localização do Metrópole Shopping"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />

      <section className="section wrap" aria-labelledby="visit-title">
        <VisitTicket headingId="visit-title" showMapLink={false} />
      </section>

      <section className="section wrap" aria-labelledby="arrive-title">
        <h2 id="arrive-title" className="head arrive-title" data-reveal>Procure o letreiro verde</h2>
        <div className="arrive">
          <figure data-reveal style={{ ["--i" as string]: 0 }}>
            <img className="cut" src="/img/fachada-lojas.webp" alt="Fachada comprida do Metrópole com as faixas verticais das lojas e o estacionamento em frente" loading="lazy" width={1800} height={1199} />
            <figcaption>A fachada na Av. das Araucárias, com as faixas das lojas.</figcaption>
          </figure>
          <figure data-reveal style={{ ["--i" as string]: 1 }}>
            <img className="cut" src="/img/letreiro.webp" alt="Letreiro verde do Metrópole Shopping com a estrela" loading="lazy" width={1180} height={769} />
            <figcaption>O letreiro com a estrela.</figcaption>
          </figure>
          <figure data-reveal style={{ ["--i" as string]: 2 }}>
            <img className="cut" src="/img/fachada-frente.webp" alt="Entrada do shopping com carros estacionados na frente" loading="lazy" width={1800} height={1350} />
            <figcaption>A entrada principal e o estacionamento.</figcaption>
          </figure>
          <figure data-reveal style={{ ["--i" as string]: 3 }}>
            <img className="cut" src="/img/praca.webp" alt="Mesas da praça de alimentação sob o vão central, com os dois pisos de lojas em volta" loading="lazy" width={1800} height={1200} />
            <figcaption>Lá dentro, a praça de alimentação fica no vão central do térreo.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="contact-title">
        <div className="split" data-reveal>
          <h2 id="contact-title" className="head">Fale com a gente</h2>
          <dl className="facts">
            <dt>Telefone</dt><dd><a className="link" href={site.phoneHref}>{site.phone}</a></dd>
            <dt>WhatsApp</dt><dd><a className="link" href={site.whatsappHref} target="_blank" rel="noopener noreferrer">{site.phone}</a></dd>
            <dt>E-mail</dt><dd><a className="link" href={`mailto:${site.email}`}>{site.email}</a></dd>
            <dt>Instagram</dt><dd><a className="link" href={site.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle}</a></dd>
            <dt>Facebook</dt><dd><a className="link" href={site.facebook} target="_blank" rel="noopener noreferrer">MetropoleShopping</a></dd>
          </dl>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="admin-title">
        <div className="split" data-reveal>
          <h2 id="admin-title" className="head">Administração</h2>
          <div className="stack">
            <p className="lead">Locação de espaços, parcerias e achados e perdidos.</p>
            <dl className="facts">
              <dt>Onde</dt><dd>{site.admin.where}</dd>
              {site.admin.hours.map(([d, h]) => (
                <div key={d} className="contents"><dt>{d}</dt><dd>{h}</dd></div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
};

export default MapContact;
