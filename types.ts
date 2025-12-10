
export interface Product {
  id: string;
  name: string;
  price: number;
  promotionalPrice: number;
  hasPromotionalPrice: boolean;
  image: string;
  category: string;
  categorySlug: string;
  slug: string;
  description: string;
  tag?: 'Novo' | 'Oferta' | null;
  relatedProducts?: Product[];
  images?: string[];
}

export interface Category {
  id: string;
  title: string;
  image: string;
  slug: string;
}

export interface NavLink {
  label: string;
  href: string;
  subcategories?: { label: string; href: string }[];
}
