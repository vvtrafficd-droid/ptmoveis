
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProducts, fetchCategories } from '../services/api';
import { Product, Category } from '../types';
import ProductCard from './ProductCard';
import { ArrowLeft } from 'lucide-react';

const CategoryPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [products, setProducts] = useState<Product[]>([]);
    const [category, setCategory] = useState<Category | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const [productsData, categoriesData] = await Promise.all([
                    fetchProducts(),
                    fetchCategories()
                ]);

                // Filter products
                const filtered = productsData.filter(p => p.categorySlug === slug);
                setProducts(filtered);

                // Find category details for title/image
                const foundCategory = categoriesData.find(c => c.slug === slug);
                setCategory(foundCategory || null);

            } catch (error) {
                console.error("Failed to load category data", error);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            loadData();
        }

        // Scroll to top
        window.scrollTo(0, 0);

    }, [slug]);

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-10">
            <div className="mb-8">
                <Link to="/" className="inline-flex items-center gap-2 text-sm text-text-light/60 hover:text-primary transition-colors">
                    <ArrowLeft size={16} />
                    Voltar para a loja
                </Link>
            </div>

            <div className="flex flex-col gap-2 mb-8">
                <h1 className="text-3xl font-bold text-text-light">
                    {category ? category.title : slug?.replace(/-/g, ' ').toUpperCase()}
                </h1>
                {products.length > 0 && (
                    <p className="text-text-light/60">
                        {products.length} {products.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
                    </p>
                )}
            </div>

            {products.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="py-20 text-center bg-gray-50 rounded-xl">
                    <p className="text-xl text-gray-500">Nenhum produto encontrado nesta categoria.</p>
                </div>
            )}
        </div>
    );
};

export default CategoryPage;
