
export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category?: string;
  tag?: 'Novo' | 'Oferta' | null;
}

export interface Category {
  id: string;
  title: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
  subcategories?: { label: string; href: string }[];
}
