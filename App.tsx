import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesBanner from './components/FeaturesBanner';
import CategoryGrid from './components/CategoryGrid';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import { BEST_SELLERS, BEDS, SIDEBOARDS, SOFAS } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex w-full flex-col">
            
            <Header />

            <main className="flex flex-col w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-10 gap-16">
              <Hero />
              
              <FeaturesBanner />
              
              <CategoryGrid />
              
              <ProductSection 
                title="Os Mais Vendidos" 
                products={BEST_SELLERS} 
              />
              
              <ProductSection 
                title="Camas de Casal" 
                products={BEDS} 
                viewAllLink="#beds"
              />
              
              <ProductSection 
                title="Aparadores" 
                products={SIDEBOARDS} 
                viewAllLink="#sideboards"
              />
              
              <ProductSection 
                title="Sofás" 
                products={SOFAS} 
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