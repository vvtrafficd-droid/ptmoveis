import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductSectionProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
  className?: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  products,
  viewAllLink,
  className = "",
}) => {
  return (
    <section className={className}>
      <div className="flex items-center justify-between px-4 pb-4">
        <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em]">
          {title}
        </h2>
        {viewAllLink && (
          <Link
            className="text-sm font-semibold text-accent hover:underline hover:text-primary transition-colors"
            to={viewAllLink}
          >
            Ver todos
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;