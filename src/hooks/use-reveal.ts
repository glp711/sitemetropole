import { useEffect, type DependencyList } from "react";
import { useLocation } from "react-router-dom";

/** Mostra uma vez cada elemento com [data-reveal] quando ele entra na tela. Nunca deixa nada escondido. */
function observeReveals() {
  const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"));
  if (!targets.length) return () => {};
  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-in"));
    return () => {};
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
  );
  targets.forEach((el) => io.observe(el));
  const safety = window.setTimeout(() => {
    targets.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight && r.bottom > 0) el.classList.add("is-in");
    });
  }, 2500);
  return () => {
    io.disconnect();
    window.clearTimeout(safety);
  };
}

/** Na troca de página. */
export function useReveal() {
  const { pathname } = useLocation();
  useEffect(observeReveals, [pathname]);
}

/** Para listas que mudam (busca e filtros). */
export function useRevealOn(deps: DependencyList) {
  useEffect(observeReveals, deps);
}
