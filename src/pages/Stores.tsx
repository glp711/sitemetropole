import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import StoreRow from "@/components/StoreRow";
import { categories, site } from "@/data/site";
import { stores, type Floor } from "@/data/stores";
import { byName, findStore, normalize } from "@/data/directory";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useRevealOn } from "@/hooks/use-reveal";

const floors: (Floor | "Todos")[] = ["Todos", "Térreo", "Piso Superior", "Subsolo"];

/** Três outras categorias, com a foto de uma loja de cada. */
const MoreCategories = ({ current }: { current: string }) => {
  const start = categories.findIndex((c) => c.name === current);
  const others = [1, 2, 3].map((n) => categories[(start + n) % categories.length]);
  return (
    <section className="section wrap after-list" aria-labelledby="more-title">
      <h2 id="more-title" className="head more-title" data-reveal>Mais no Metrópole</h2>
      <ul className="more">
        {others.map((c, i) => {
          const cover = c.cover ? findStore(c.cover) : undefined;
          const n = stores.filter((s) => s.category === c.name).length;
          return (
            <li key={c.slug} data-reveal style={{ ["--i" as string]: i }}>
              <Link to={c.slug} className="more__link">
                {cover && <img className="cut" src={cover.photo} alt={`Fachada da ${cover.name}`} loading="lazy" width={800} height={1000} />}
                <span className="more__name">{c.name}</span>
                <span className="more__count">{n} {n === 1 ? "lugar" : "lugares"}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const Stores = ({ category }: { category?: string }) => {
  const [query, setQuery] = useState("");
  const [floor, setFloor] = useState<Floor | "Todos">("Todos");

  const inCategory = category ? stores.filter((s) => s.category === category) : stores;
  usePageMeta(
    category ?? "Lojas",
    category
      ? `${inCategory.length} lugares de ${category.toLowerCase()} no Metrópole Shopping, em Águas Claras: piso, horário, WhatsApp e Instagram de cada um.`
      : `As ${stores.length} lojas do Metrópole Shopping, em Águas Claras: piso, horário, WhatsApp e Instagram de cada uma.`,
  );

  const groups = useMemo(() => {
    const q = normalize(query.trim());
    const match = inCategory
      .filter((s) => floor === "Todos" || s.floor === floor)
      .filter((s) => !q || normalize(`${s.name} ${s.type} ${s.category}`).includes(q))
      .sort(byName);
    const order = category ? [category] : categories.map((c) => c.name);
    return order.map((name) => ({ name, list: match.filter((s) => s.category === name) })).filter((g) => g.list.length);
  }, [query, floor, category, inCategory]);

  const total = groups.reduce((n, g) => n + g.list.length, 0);
  useRevealOn([query, floor, category]);
  const titleCount = inCategory.length;

  return (
    <>
      <section className="wrap page-head">
        <h1 data-rise>{category ?? "Lojas"}</h1>
        <p data-rise style={{ ["--i" as string]: 1 }}>
          {category
            ? `${titleCount} ${titleCount === 1 ? "lugar" : "lugares"} no Metrópole. Toque no nome para falar com a loja.`
            : `${titleCount} lojas no térreo, no piso superior e no subsolo. Cada uma com seu horário e contato.`}
        </p>
      </section>

      <section className="wrap" aria-label="Filtros">
        <div className="filters" data-rise style={{ ["--i" as string]: 2 }}>
          <label className="filters__search">
            <span className="sr-only">Buscar loja</span>
            <input className="field" type="search" placeholder="Buscar por nome ou pelo que vende" value={query} onChange={(e) => setQuery(e.target.value)} />
          </label>
          <nav className="filters__row" aria-label="Categorias">
            <Link to="/lojas" aria-current={!category ? "page" : undefined}>Todas</Link>
            {categories.map((c) => (
              <Link key={c.slug} to={c.slug} aria-current={category === c.name ? "page" : undefined}>{c.name}</Link>
            ))}
          </nav>
          <div className="filters__row" role="group" aria-label="Piso">
            {floors.map((f) => (
              <button key={f} aria-pressed={floor === f} onClick={() => setFloor(f)}>
                {f === "Todos" ? "Todos os pisos" : f}
              </button>
            ))}
          </div>
          <p className="count" aria-live="polite">
            {total === titleCount ? `Mostrando ${total} ${total === 1 ? "lugar" : "lugares"}` : `${total} de ${titleCount} ${titleCount === 1 ? "lugar" : "lugares"}`}
          </p>
        </div>
      </section>

      <section className="wrap" aria-label="Lista de lojas">
        {groups.length === 0 && (
          <p>
            Nenhuma loja encontrada.{" "}
            <button className="link" onClick={() => { setQuery(""); setFloor("Todos"); }}>Limpar a busca</button>
          </p>
        )}
        {groups.map((g) => {
          const coverName = categories.find((c) => c.name === g.name)?.cover;
          const cover = (coverName && g.list.find((s) => s.name === coverName)) || g.list.find((s) => s.photo) || (coverName ? findStore(coverName) : undefined);
          return (
            <div key={g.name} className={`dir-group dir-group--aside${category ? " dir-group--single" : ""}`}>
              <div className="dir-group__aside">
                <div className="dir-group__head" data-reveal>
                  <h2>{g.name}</h2>
                  <span className="count">{g.list.length} {g.list.length === 1 ? "lugar" : "lugares"}</span>
                </div>
                {cover && (
                  <figure data-reveal style={{ ["--i" as string]: 1 }}>
                    <img className="dir-group__photo cut" src={cover.photo} alt={`Fachada da ${cover.name}`} loading="lazy" width={800} height={1000} />
                    <figcaption className="small muted">{cover.name}, {cover.floor.toLowerCase()}</figcaption>
                  </figure>
                )}
              </div>
              <ul className="dir-list">
                {g.list.map((s, i) => (
                  <StoreRow key={s.id} store={s} reveal={i % 2} photoOpen={!!category && s.name !== cover?.name} />
                ))}
              </ul>
            </div>
          );
        })}
      </section>

      {category && <MoreCategories current={category} />}

      <section className="section wrap after-list" aria-labelledby="rent-title">
        <div className="split">
          <h2 id="rent-title" className="head">Quer abrir sua loja aqui?</h2>
          <div className="stack">
            <p className="lead">Fale com a administração sobre espaços para alugar e quiosques.</p>
            <a className="button" href={`mailto:${site.email}?subject=${encodeURIComponent("Locação de espaço no Metrópole Shopping")}`}>Escrever para a administração</a>
            <a className="link" href={site.phoneHref}>{site.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stores;
