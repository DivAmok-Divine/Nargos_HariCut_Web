import React from 'react';

const PricingCard = ({ title, services, className = '', ...props }) => {
  return (
    <div 
      className={`bg-white rounded-md p-10 flex flex-col items-center text-center transition-transform duration-300 ${className}`}
      {...props}
    >
      <h3 className="text-2xl font-outfit font-extrabold text-primary mb-2 uppercase tracking-wide">
        {title}
      </h3>
      
      {/* Divider */}
      <div className="w-12 h-[2px] bg-primary/20 mb-8" />
      
      <div className="w-full space-y-6">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col gap-1">
            <span className="text-midnight font-outfit font-bold text-lg">
              {service.name}
            </span>
            <span className="text-primary font-outfit font-bold">
              {service.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
