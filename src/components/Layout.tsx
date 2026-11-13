import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { useReveal } from "@/hooks/use-reveal";

const Layout = ({ children }: { children: ReactNode }) => {
  useScrollToTop();
  useReveal();
  return (
    <>
      <a href="#conteudo" className="sr-only">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
