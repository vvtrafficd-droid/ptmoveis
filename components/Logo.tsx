import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-14 w-auto" }) => {
  // Substitua o URL abaixo pelo caminho da sua imagem de logo real.
  // Exemplo: "/logo.png" se estiver na pasta public, ou um URL externo.
  const logoUrl = "https://placehold.co/200x150/transparent/d4af35?text=PT%0AM%C3%93VEIS&font=montserrat";

  return (
    <img 
      src={logoUrl} 
      alt="PT Móveis" 
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;