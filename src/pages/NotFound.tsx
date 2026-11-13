import { Link } from "react-router-dom";
import Star from "@/components/Star";
import { usePageMeta } from "@/hooks/use-page-meta";

const NotFound = () => {
  usePageMeta("Página não encontrada");
  return (
    <section className="wrap page-head not-found">
      <div className="stack">
        <Star className="star-bullet-svg" fill="var(--brand)" />
        <h1>Página não encontrada</h1>
        <p className="lead">O endereço pode ter mudado. As lojas continuam todas aqui.</p>
        <Link className="button" to="/lojas">Ver as lojas</Link>
      </div>
    </section>
  );
};

export default NotFound;
