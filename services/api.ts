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
    preco: number;
    precoPromocional: number;
    habilitaPrecoPromocional: boolean;
    descricao: string;
    categoriaId: string;
    categoria: ApiCategory;
}

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
            return data.data.map((prod: ApiProduct) => ({
                id: prod.id,
                name: prod.nome,
                price: prod.preco,
                promotionalPrice: prod.precoPromocional,
                hasPromotionalPrice: prod.habilitaPrecoPromocional,
                image: prod.thumb.startsWith('http') ? prod.thumb : `${IMAGE_BASE_URL}${prod.thumb}`,
                category: prod.categoria?.nome || '',
                categorySlug: prod.categoria?.slug || '',
                slug: prod.slug,
                description: prod.descricao,
            }));
        }
        return [];
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};
