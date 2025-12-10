
import { Category, NavLink, Product } from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "#" },
  {
    label: "Coleções",
    href: "#collections",
    subcategories: [
      { label: "SOFÁS", href: "#sofas" },
      { label: "COLCHÕES", href: "#colchoes" },
      { label: "CAMAS DE CASAL", href: "#camas-casal" },
      { label: "CADEIRAS", href: "#cadeiras" },
      { label: "CAMAS DE SOLTEIRO", href: "#camas-solteiro" },
      { label: "MÓVEIS DE QUARTO", href: "#moveis-quarto" },
      { label: "MESAS E CADEIRAS", href: "#mesas-cadeiras" },
      { label: "CADEIRÕES", href: "#cadeiroes" },
      { label: "TOUCADOR", href: "#toucador" },
      { label: "APARADOR", href: "#aparador" },
      { label: "MÓVEL SALA", href: "#movel-sala" },
    ]
  },
  { label: "Sobre Nós", href: "#about" },
  { label: "Contato", href: "#contact" },
];


// Mock data removed in favor of API integration.
// See services/api.ts for data fetching.
