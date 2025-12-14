import React from 'react';
import { Link } from 'react-router-dom';
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
      <div className="grid grid-cols-2 gap-4 p-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Link
            to={`/categoria/${cat.slug}`}
            key={cat.id}
            className="group relative flex h-40 md:h-64 flex-col justify-end overflow-hidden rounded-xl p-4 transition-all duration-500 hover:scale-[1.02] cursor-pointer shadow-md hover:shadow-xl"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-0" />

            <p className="text-white text-lg font-bold leading-tight relative z-10 translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
              {cat.title}
            </p>
            <div className="h-1 w-0 bg-primary group-hover:w-12 transition-all duration-300 absolute bottom-4 left-4 z-10" />
          </Link>
        ))}
      </div>
    </section >
  );
};

export default CategoryGrid;