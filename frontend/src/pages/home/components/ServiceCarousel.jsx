import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ServiceCarousel = ({ children }) => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 400 : scrollLeft + 400;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };
  
  return (
    <div 
      className="w-full relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation Buttons - Hidden by default, show on group hover */}
      <div className={`absolute top-1/2 -translate-y-1/2 left-4 z-30 transition-all duration-500 ${isPaused ? 'opacity-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <button 
          onClick={() => scroll('left')}
          className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-md flex items-center justify-center text-white hover:bg-primary transition-all"
        >
          <ChevronLeft size={32} />
        </button>
      </div>

      <div className={`absolute top-1/2 -translate-y-1/2 right-4 z-30 transition-all duration-500 ${isPaused ? 'opacity-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <button 
          onClick={() => scroll('right')}
          className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-md flex items-center justify-center text-white hover:bg-primary transition-all"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Main Scroller */}
      <div 
        ref={scrollRef}
        className="w-full overflow-x-auto no-scrollbar pb-10"
      >
        <div 
          className={`flex gap-8 w-max ${!isPaused ? 'animate-scroll' : ''}`}
        >
          {/* Duplicate content for seamless loop */}
          {children}
          {children}
        </div>
      </div>
    </div>
  );
};

export default ServiceCarousel;
