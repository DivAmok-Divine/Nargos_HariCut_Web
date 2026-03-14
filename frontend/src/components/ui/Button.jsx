import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyles = 'px-8 py-4 font-bold rounded-md uppercase tracking-wider text-sm transition-all duration-300 inline-block text-center';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    'primary-full': 'bg-primary text-white hover:bg-primary/90 w-full',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
    'outline-white': 'border border-white text-white hover:bg-white hover:text-primary',
    'outline-magenta': 'border border-primary text-white hover:bg-primary hover:text-white',
    'phone-nav': 'px-6 py-4 border border-primary rounded-md text-white font-bold text-sm hover:bg-primary'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
