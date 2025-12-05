import React from 'react';

const FeaturesBanner: React.FC = () => {
  const features = [
    {
      icon: "verified",
      title: "Garantia de 3 anos",
      description: "Todos nossos produtos contam com garantia e suporte de até 3 anos para sua segurança!"
    },
    {
      icon: "local_shipping",
      title: "Entrega e montagem",
      description: "Contamos com profissionais capacitados e altamente treinados para melhor atendimento."
    },
    {
      icon: "payments",
      title: "Pagamento na entrega",
      description: "Sem necessidade de pagamento antecipado ou qualquer tipo de sinal."
    },
    {
      icon: "support_agent",
      title: "Apoio ao Cliente / Suporte:",
      description: "Equipa treinada e capacitada para melhor lhe atender de forma rápida e eficaz!"
    }
  ];

  return (
    <section className="w-full bg-[#F5F5F5] dark:bg-[#2a271f] py-8 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 px-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="shrink-0 text-text-light dark:text-text-dark">
              <span className="material-symbols-outlined text-[40px] font-light">
                {feature.icon}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-text-light dark:text-text-dark leading-tight">
                {feature.title}
              </h3>
              <p className="text-xs text-text-light/80 dark:text-text-dark/80 font-medium leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesBanner;