
import { Category, NavLink, Product } from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "/" },
  {
    label: "Coleções",
    href: "#collections",
    subcategories: [
      { label: "SOFÁS", href: "/categoria/sofas" },
      { label: "COLCHÕES", href: "/categoria/colchoes" },
      { label: "CAMAS DE CASAL", href: "/categoria/camas-de-casal" },
      { label: "CADEIRAS", href: "/categoria/cadeiras" },
      { label: "CAMAS DE SOLTEIRO", href: "/categoria/camas-de-solteiro" },
      { label: "MÓVEIS DE QUARTO", href: "/categoria/moveis-de-quarto" },
      { label: "MESAS E CADEIRAS", href: "/categoria/mesas-e-cadeiras" },
      { label: "CADEIRÕES", href: "/categoria/cadeiroes" },
      { label: "TOUCADOR", href: "/categoria/toucador" },
      { label: "APARADOR", href: "/categoria/aparador" },
      { label: "MÓVEL SALA", href: "/categoria/movel-sala" },
    ]
  },
  // { label: "Sobre Nós", href: "#about" },
  // { label: "Contato", href: "#contact" },
];


// Mock data removed in favor of API integration.
// See services/api.ts for data fetching.
