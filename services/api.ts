import { Category, Product } from '../types';

export const API_BASE_URL = 'https://api.ptmoveis.pt';
export const IMAGE_BASE_URL = 'https://painel.ptmoveis.pt';

export interface ApiCategory {
    id: string;
    nome: string;
    slug: string;
    imagem: string;
    ordem: number;
}

export interface ApiProduct {
    id: string;
    nome: string;
    slug: string;
    codigo: string;
    thumb: string;
    thumb2?: string;
    thumb3?: string;
    preco: number;
    precoPromocional: number;
    habilitaPrecoPromocional: boolean;
    descricao: string;
    categoriaId: string;
    categoria: ApiCategory;
    produtosRelacionados?: ApiProduct[];
}

const mapApiProductToProduct = (prod: ApiProduct): Product => {
    const images = [prod.thumb];
    if (prod.thumb2) images.push(prod.thumb2);
    if (prod.thumb3) images.push(prod.thumb3);

    return {
        id: prod.id,
        name: prod.nome,
        price: prod.preco,
        promotionalPrice: prod.precoPromocional,
        hasPromotionalPrice: prod.habilitaPrecoPromocional,
        image: prod.thumb.startsWith('http') ? prod.thumb : `${IMAGE_BASE_URL}${prod.thumb}`,
        images: images.map(img => img.startsWith('http') ? img : `${IMAGE_BASE_URL}${img}`),
        category: prod.categoria?.nome || '',
        categorySlug: prod.categoria?.slug || '',
        slug: prod.slug,
        description: prod.descricao,
        relatedProducts: prod.produtosRelacionados ? prod.produtosRelacionados.map(p => ({
            id: p.id,
            name: p.nome,
            price: p.preco,
            promotionalPrice: p.precoPromocional,
            hasPromotionalPrice: p.habilitaPrecoPromocional,
            image: p.thumb.startsWith('http') ? p.thumb : `${IMAGE_BASE_URL}${p.thumb}`,
            category: p.categoria?.nome || '',
            categorySlug: p.categoria?.slug || '',
            slug: p.slug,
            description: p.descricao,
        })) : []
    };
};

export const fetchCategories = async (skip = 0, take = 50): Promise<Category[]> => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/v1/categorias/get?Skip=${skip}&Take=${take}`);
        const data = await response.json();
        if (data.success && Array.isArray(data.data)) {
            return data.data.map((cat: ApiCategory) => ({
                id: cat.id,
                title: cat.nome,
                image: cat.imagem.startsWith('http') ? cat.imagem : `${IMAGE_BASE_URL}${cat.imagem}`,
                slug: cat.slug,
            }));
        }
        return [];
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
};

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/v1/produtos/get`);
        const data = await response.json();
        if (data.success && Array.isArray(data.data)) {
            return data.data.map((prod: ApiProduct) => mapApiProductToProduct(prod));
        }
        return [];
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

export const fetchProductBySlug = async (slug: string): Promise<Product | null> => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/v1/produtos/produto/${slug}`);
        const data = await response.json();
        if (data.success && data.data) {
            return mapApiProductToProduct(data.data);
        }
        return null;
    } catch (error) {
        console.error(`Error fetching product ${slug}:`, error);
        return null;
    }
};
