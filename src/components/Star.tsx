// A estrela de oito pontas do letreiro do Metrópole, simplificada em uma forma só.
export const STAR_PATH =
  "M50 0 L61.1 23.2 L76.9 23.1 L76.8 38.9 L100 50 L76.8 61.1 L76.9 76.9 L61.1 76.8 L50 100 L38.9 76.8 L23.1 76.9 L23.2 61.1 L0 50 L23.2 38.9 L23.1 23.1 L38.9 23.2 Z";

interface StarProps {
  className?: string;
  fill?: string;
  /** Desenha o círculo central vazado, como no logotipo. */
  withCore?: boolean;
  coreFill?: string;
  title?: string;
}

const Star = ({ className, fill = "currentColor", withCore = false, coreFill, title }: StarProps) => (
  <svg viewBox="0 0 100 100" className={className} role={title ? "img" : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
    <path d={STAR_PATH} fill={fill} />
    {withCore && <circle cx="50" cy="50" r="11" fill={coreFill ?? "var(--field)"} />}
  </svg>
);

export default Star;
