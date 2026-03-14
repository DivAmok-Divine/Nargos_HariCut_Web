import React from 'react';
import { Scissors, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-midnight flex items-center justify-center py-20 px-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] z-0" />
      
      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Large 404 Text */}
        <div className="relative inline-block mb-8">
          <h1 className="text-[120px] md:text-[200px] font-outfit font-black text-white/5 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-4">
              <Scissors size={48} className="text-primary -rotate-45 animate-bounce" />
              <div className="w-[2px] h-12 bg-primary/30" />
              <Search size={48} className="text-white/20" />
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-outfit font-extrabold text-white mb-6 uppercase tracking-tight">
          Oops! That Line Is <span className="text-primary">Out Of Place</span>
        </h2>
        
        <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-lg mx-auto">
          It looks like the page you're searching for has been faded out of existence. 
          Let's get you back to the main studio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="/home" 
              className="bg-primary hover:bg-magenta text-white px-10 py-4 rounded-md font-bold transition-all duration-500 min-w-[220px]"
            >
            Back To Studio
          </a>
          <button 
            onClick={() => window.history.back()}
            className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-4 rounded-md font-bold transition-all duration-500 min-w-[220px]"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
