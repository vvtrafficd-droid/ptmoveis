
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductBySlug } from '../services/api';
import { Product } from '../types';
import ProductSection from './ProductSection';
import { ArrowLeft, Check, Truck, ShieldCheck, Heart } from 'lucide-react';

const ProductDetails: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeImage, setActiveImage] = useState<string>('');

    // Reset state when slug changes
    useEffect(() => {
        setProduct(null);
        setLoading(true);
        setActiveImage('');
        window.scrollTo(0, 0);
    }, [slug]);

    useEffect(() => {
        if (!slug) return;

        const loadProduct = async () => {
            try {
                const data = await fetchProductBySlug(slug);
                setProduct(data);
                if (data && data.images && data.images.length > 0) {
                    setActiveImage(data.images[0]);
                } else if (data) {
                    setActiveImage(data.image);
                }
            } catch (error) {
                console.error("Failed to load product", error);
            } finally {
                setLoading(false);
            }
        };

        loadProduct();
    }, [slug]);

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="max-w-[1440px] mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
                <Link to="/" className="text-primary hover:underline">Voltar para a página inicial</Link>
            </div>
        );
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(price);
    };

    return (
        <div className="w-full bg-background-light dark:bg-background-dark">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8">
                {/* Breadcrumb / Back */}
                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center gap-2 text-sm text-text-light/60 hover:text-primary transition-colors">
                        <ArrowLeft size={16} />
                        Voltar para a loja
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Images Section */}
                    <div className="flex flex-col gap-4">
                        <div className="aspect-square w-full bg-gray-100 rounded-2xl overflow-hidden relative shadow-sm">
                            <img
                                src={activeImage}
                                alt={product.name}
                                className="w-full h-full object-cover object-center"
                            />
                            {product.tag && (
                                <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {product.tag}
                                </span>
                            )}
                        </div>

                        {product.images && product.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-4">
                                {product.images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImage(img)}
                                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${activeImage === img ? 'border-primary' : 'border-transparent hover:border-gray-300'}`}
                                    >
                                        <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col">
                        <h1 className="text-3xl sm:text-4xl font-bold text-text-light mb-2">{product.name}</h1>
                        <p className="text-text-light/60 mb-6">{product.category}</p>

                        <div className="flex items-baseline gap-4 mb-8">
                            <span className="text-3xl font-bold text-primary">
                                {formatPrice(product.hasPromotionalPrice ? product.promotionalPrice : product.price)}
                            </span>
                            {product.hasPromotionalPrice && (
                                <span className="text-xl text-text-light/40 line-through">
                                    {formatPrice(product.price)}
                                </span>
                            )}
                        </div>

                        <div className="bg-text-light/5 rounded-xl p-6 mb-8 border border-text-light/10">
                            <p className="text-text-light/80 leading-relaxed whitespace-pre-line">
                                {product.description}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <a
                                href={`https://api.whatsapp.com/send?phone=351939076117&text=${encodeURIComponent(`*Quero comprar esse produto e saber mais informações:*\n${product.name.toUpperCase()}\nCódigo: ${product.code}\nPreço: ${product.hasPromotionalPrice ? product.promotionalPrice : product.price}€\nEndereço web do produto: https://ptmoveis.pt/produto/${product.slug}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-primary text-white font-bold py-4 px-8 rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined">chat</span>
                                Quero Comprar
                            </a>

                        </div>

                        <div className="flex flex-col gap-4 text-sm text-text-light/70">
                            <div className="flex items-center gap-3">
                                <Check size={18} className="text-green-500" />
                                <span>Em stock e pronto para envio</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Truck size={18} className="text-primary" />
                                <span>Entrega gratuita em Portugal Continental</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <ShieldCheck size={18} className="text-primary" />
                                <span>Garantia de 2 anos incluída</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {product.relatedProducts && product.relatedProducts.length > 0 && (
                    <div className="mt-20">
                        <ProductSection
                            title="Você também pode gostar"
                            products={product.relatedProducts}
                        />
                    </div>
                )}

            </div>
        </div>
    );
};

export default ProductDetails;
