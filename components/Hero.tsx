
import React, { useEffect, useState } from 'react';
import { fetchSlides } from '../services/api';
import { Slide } from '../types';

const Hero: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSlides = async () => {
      try {
        const data = await fetchSlides();
        setSlides(data);
      } catch (error) {
        console.error("Failed to load slides", error);
      } finally {
        setLoading(false);
      }
    };
    loadSlides();
  }, []);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  if (loading) {
    return (
      <div className="w-full h-[520px] bg-gray-200 animate-pulse rounded-xl flex items-center justify-center">
        <span className="sr-only">Carregando banner...</span>
      </div>
    );
  }

  if (slides.length === 0) {
    return (
      <div className="w-full h-[520px] bg-gray-100 rounded-xl flex items-center justify-center">
        <p className="text-gray-400">Banner indisponível</p>
      </div>
    )
  }

  return (
    <section className="@container relative w-full overflow-hidden rounded-xl shadow-xl group">
      <div
        className="flex transition-transform duration-700 ease-in-out h-[520px] w-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full flex-shrink-0 relative"
          >
            {slide.link ? (
              <a href={slide.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 pointer-events-none" />
              </a>
            ) : (
              <>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </>
            )}

            {/* Optional Caption if Title is meaningful and not just "capa 01" */}
            {/* 
            <div className="absolute bottom-20 left-10 text-white max-w-xl">
                 <h2 className="text-4xl font-bold mb-4 drop-shadow-md">{slide.title}</h2>
            </div> 
            */}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 shadow-sm ${currentSlide === index ? "bg-primary w-8" : "bg-white/60 hover:bg-white"
                }`}
            >
              <span className="sr-only">Slide {index + 1}</span>
            </button>
          ))}
        </div>
      )}

      {/* Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </>
      )}
    </section>
  );
};

export default Hero;