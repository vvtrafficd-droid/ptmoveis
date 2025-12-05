import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-14 w-auto" }) => {
  // Substitua o URL abaixo pelo caminho da sua imagem de logo real.
  // Exemplo: "/logo.png" se estiver na pasta public, ou um URL externo.
  const logoUrl = "/logo.png";

  return (
    <img 
      src={logoUrl} 
      alt="PT Móveis" 
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;