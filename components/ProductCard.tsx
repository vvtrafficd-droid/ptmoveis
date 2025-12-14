import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/produto/${product.slug}`} className="flex flex-col gap-3 group cursor-pointer block">
      <div className="relative overflow-hidden rounded-xl bg-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
        <img
          className="w-full h-auto object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors" onClick={(e) => e.preventDefault()}>
            <span className="material-symbols-outlined text-[20px] block">favorite</span>
          </button>
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-[90%]">
          <button className="bg-white/90 text-text-light px-4 py-2 rounded-full font-medium text-sm shadow-lg hover:bg-primary hover:text-white w-full flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]">visibility</span>
            Ver produto
          </button>
        </div>
      </div>
      <div className="flex flex-col px-1">
        <h3 className="font-bold text-base group-hover:text-primary transition-colors">{product.name}</h3>
        <p className="text-sm text-primary font-semibold">
          {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(product.price)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;