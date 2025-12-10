
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface SearchResultsProps {
    products: Product[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ products }) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q') || '';
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (query) {
            const lowerQuery = query.toLowerCase();
            const results = products.filter(product =>
                product.name.toLowerCase().includes(lowerQuery) ||
                product.category.toLowerCase().includes(lowerQuery) ||
                product.description.toLowerCase().includes(lowerQuery)
            );
            setFilteredProducts(results);
        } else {
            setFilteredProducts([]);
        }
    }, [query, products]);

    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-10">
            <h1 className="text-3xl font-bold mb-8">
                Resultados para: <span className="text-primary">"{query}"</span>
            </h1>

            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-gray-50 rounded-xl">
                    <span className="material-symbols-outlined text-6xl text-gray-300 mb-4 block">search_off</span>
                    <p className="text-xl text-gray-500 mb-4">Nenhum produto encontrado.</p>
                    <Link to="/" className="text-primary font-bold hover:underline">Voltar para a loja</Link>
                </div>
            )}
        </div>
    );
};

export default SearchResults;
