import { stores, type Store } from "./stores";
import { categories } from "./site";

const collator = new Intl.Collator("pt-BR", { sensitivity: "base" });
export const byName = (a: Store, b: Store) => collator.compare(a.name, b.name);

export const storesIn = (category: string) => stores.filter((s) => s.category === category).sort(byName);
export const findStore = (name: string) => stores.find((s) => s.name === name);
export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);

export const normalize = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
