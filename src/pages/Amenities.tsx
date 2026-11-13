import { amenities } from "@/data/site";
import { usePageMeta } from "@/hooks/use-page-meta";

const Amenities = () => {
  usePageMeta("Comodidades", "Estacionamento na frente e no subsolo com carregador para carro elétrico, pet friendly, fraldário, copa e achados e perdidos no Metrópole Shopping.");
  return (
    <>
      <section className="wrap page-head">
        <h1 data-rise>Comodidades</h1>
        <p data-rise style={{ ["--i" as string]: 1 }}>
          O que você encontra no Metrópole além das lojas.
        </p>
      </section>

      <div className="band" data-rise style={{ ["--i" as string]: 2 }}>
        <img src="/img/escada-familia.webp" alt="Mãe e filho descendo a escada rolante com sacola de compras" width={1400} height={855} />
      </div>

      <section className="section wrap" aria-label="Lista de comodidades">
        {amenities.map((a) => (
          <article key={a.id} id={a.id} className="amenity">
            <h2 data-reveal><span className="star-bullet" />{a.title}</h2>
            <div className="amenity__body" data-reveal style={{ ["--i" as string]: 0 }}>
              <p className="lead">{a.text}</p>
              {a.details && (
                <ul>
                  {a.details.map((d) => <li key={d}>{d}</li>)}
                </ul>
              )}
              {a.note && <p className="amenity__note">{a.note}</p>}
            </div>
            {a.photo && (
              <figure data-reveal style={{ ["--i" as string]: 1 }}>
                <img className="cut" src={a.photo.src} alt={a.photo.alt} loading="lazy" width={800} height={1000} />
                <figcaption>{a.photo.caption}</figcaption>
              </figure>
            )}
          </article>
        ))}
      </section>
    </>
  );
};

export default Amenities;
