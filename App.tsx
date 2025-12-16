import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesBanner from './components/FeaturesBanner';
import CategoryGrid from './components/CategoryGrid';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import SearchResults from './components/SearchResults';
import CategoryPage from './components/CategoryPage';
import Preloader from './components/Preloader';
import { fetchCategories, fetchProducts, fetchSlides } from './services/api';
import { Category, Product, Slide } from './types';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage: React.FC<{
  categories: Category[];
  bestSellers: Product[];
  beds: Product[];
  sideboards: Product[];
  sofas: Product[];
  slides: Slide[];
}> = ({ categories, bestSellers, beds, sideboards, sofas, slides }) => {
  return (
    <>
      <main className="flex flex-col w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-10 gap-16">
        <Hero slides={slides} />
        <FeaturesBanner />
        <CategoryGrid categories={categories} />
        <ProductSection title="Os Mais Vendidos" products={bestSellers} />
        <ProductSection title="Camas de Casal" products={beds} viewAllLink="/categoria/camas-de-casal" />
        <ProductSection title="Aparadores" products={sideboards} viewAllLink="/categoria/aparador" />
        <ProductSection title="Sofás" products={sofas} viewAllLink="/categoria/sofas" />
      </main>
    </>
  );
};

const App: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [categoriesData, productsData, slidesData] = await Promise.all([
          fetchCategories(),
          fetchProducts(),
          fetchSlides(),
        ]);
        setCategories(categoriesData);
        setProducts(productsData);
        setSlides(slidesData);

        // Preload logic: Wait for critical resources
        const promises: Promise<any>[] = [];

        // 1. Preload Fonts (Material Symbols) to prevent icon popping
        // We try to wait for document.fonts.ready, but set a timeout so we don't block forever
        const fontPromise = new Promise<void>(resolve => {
          if ('fonts' in document) {
            document.fonts.ready.then(() => resolve()).catch(() => resolve());
          } else {
            setTimeout(resolve, 0); // fallback for older browsers
          }
        });
        promises.push(fontPromise);

        // 2. Preload first Hero Slide
        if (slidesData.length > 0) {
          promises.push(new Promise((resolve) => {
            const img = new Image();
            img.src = slidesData[0].image;
            img.onload = resolve;
            img.onerror = resolve;
          }));
        }

        // 3. Preload top 4 Categories (usually visible or just below fold)
        const topCategories = categoriesData.slice(0, 4);
        topCategories.forEach(cat => {
          promises.push(new Promise((resolve) => {
            const img = new Image();
            img.src = cat.image;
            img.onload = resolve;
            img.onerror = resolve;
          }));
        });

        // Race against a safety timeout of 4 seconds (in case some image is stuck)
        // This ensures the user isn't stuck on loading screen forever
        await Promise.race([
          Promise.all(promises),
          new Promise(resolve => setTimeout(resolve, 4000))
        ]);

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
    return <Preloader />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center">
            <div className="layout-content-container flex w-full flex-col">

              <Header />

              <Routes>
                <Route path="/" element={
                  <HomePage
                    categories={categories}
                    bestSellers={bestSellers}
                    beds={beds}
                    sideboards={sideboards}
                    sofas={sofas}
                    slides={slides}
                  />
                } />
                <Route path="/produto/:slug" element={<ProductDetails />} />
                <Route path="/categoria/:slug" element={<CategoryPage />} />
                <Route path="/busca" element={<SearchResults products={products} />} />
              </Routes>

              <Footer />

            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;