import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE = "Metrópole Shopping";
const ORIGIN = "https://www.metropoleshopping.com.br";

/** Título, descrição e endereço canônico de cada página, para a aba do navegador e para o Google. */
export function usePageMeta(title: string | null, description?: string) {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : `${BASE} | Águas Claras, Brasília – DF`;
    if (description) document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", ORIGIN + pathname);
  }, [title, description, pathname]);
}
