import React from 'react';

const CurveDivider = ({ className = '' }) => {
  return (
    <div className={`absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 ${className}`}>
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className="relative block w-[150%] h-[100px] text-white fill-current translate-x-[-10%]"
      >
        <path d="M0,0 C150,110 400,110 600,60 C800,10 1050,10 1200,80 L1200,120 L0,120 Z"></path>
      </svg>
    </div>
  );
};

export default CurveDivider;
