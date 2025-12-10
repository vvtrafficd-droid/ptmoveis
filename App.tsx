import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesBanner from './components/FeaturesBanner';
import CategoryGrid from './components/CategoryGrid';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import { fetchCategories, fetchProducts } from './services/api';
import { Category, Product } from './types';

const App: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [categoriesData, productsData] = await Promise.all([
          fetchCategories(),
          fetchProducts()
        ]);
        setCategories(categoriesData);
        setProducts(productsData);
      } catch (error) {
        console.error("Failed to load data", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const bestSellers = products.slice(0, 4);
  const beds = products.filter(p => p.categorySlug === 'camas-de-casal' || p.categorySlug === 'camas-de-solteiro').slice(0, 4);
  const sideboards = products.filter(p => p.categorySlug === 'aparador').slice(0, 4);
  const sofas = products.filter(p => p.categorySlug === 'sofas').slice(0, 4);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex w-full flex-col">

            <Header />

            <main className="flex flex-col w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-10 gap-16">
              <Hero />

              <FeaturesBanner />

              <CategoryGrid categories={categories} />

              <ProductSection
                title="Os Mais Vendidos"
                products={bestSellers}
              />

              <ProductSection
                title="Camas de Casal"
                products={beds}
                viewAllLink="#beds"
              />

              <ProductSection
                title="Aparadores"
                products={sideboards}
                viewAllLink="#sideboards"
              />

              <ProductSection
                title="Sofás"
                products={sofas}
                viewAllLink="#sofas"
              />
            </main>

            <Footer />

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;