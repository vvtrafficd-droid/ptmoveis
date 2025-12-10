import React from 'react';
import { Category } from '../types';

interface CategoryGridProps {
  categories: Category[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4">
        Nossas Categorias
      </h2>
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-xl bg-cover bg-center p-4 transition-all duration-500 hover:scale-[1.02] cursor-pointer shadow-md hover:shadow-xl"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%), url("${cat.image}")`,
            }}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            <p className="text-white text-lg font-bold leading-tight relative z-10 translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
              {cat.title}
            </p>
            <div className="h-1 w-0 bg-primary group-hover:w-12 transition-all duration-300 absolute bottom-4 left-4" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;