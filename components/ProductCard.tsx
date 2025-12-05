import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col gap-3 group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl bg-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
        <img
          className="w-full h-auto object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[20px] block">favorite</span>
            </button>
        </div>
        <button className="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 text-text-light px-4 py-2 rounded-full font-medium text-sm shadow-lg hover:bg-primary hover:text-white w-[90%] flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]">visibility</span>
            Ver produto
        </button>
      </div>
      <div className="flex flex-col px-1">
        <h3 className="font-bold text-base group-hover:text-primary transition-colors">{product.name}</h3>
        <p className="text-sm text-primary font-semibold">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;