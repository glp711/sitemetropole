import { useEffect, useState } from "react";
import { openStatus } from "@/data/site";
import Star from "./Star";

/** "Aberto agora, fecha às 22h", calculado no horário de Brasília e atualizado a cada minuto. */
const OpenStatus = ({ className }: { className?: string }) => {
  const [status, setStatus] = useState(() => openStatus());
  useEffect(() => {
    const id = window.setInterval(() => setStatus(openStatus()), 60_000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <p className={className} aria-live="polite">
      <Star className="star-bullet-svg" fill={status.open ? "var(--brand)" : "var(--muted)"} />
      {status.text}
    </p>
  );
};

export default OpenStatus;
