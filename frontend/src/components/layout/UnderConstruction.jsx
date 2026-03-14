import React from 'react';
import { Hammer, Loader2 } from 'lucide-react';

const UnderConstruction = ({ pageName }) => {
  return (
    <div className="min-h-screen bg-midnight flex items-center justify-center py-20 px-8 relative overflow-hidden">
      {/* Abstract Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] z-0 animate-pulse" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] z-0" />
      
      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Animated Icon Container */}
        <div className="relative w-32 h-32 mx-auto mb-10">
          <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-12 animate-pulse" />
          <div className="absolute inset-0 bg-midnight border-2 border-primary/30 rounded-2xl flex items-center justify-center transform transition-transform hover:rotate-6 duration-500">
            <Hammer size={64} className="text-primary" />
          </div>
          {/* Spinner Orbit */}
          <div className="absolute -top-2 -right-2 w-10 h-10 bg-midnight border border-primary/20 rounded-full flex items-center justify-center animate-spin-slow">
            <Loader2 size={20} className="text-primary" />
          </div>
        </div>

        <h5 className="text-primary font-outfit font-bold tracking-[0.3em] uppercase mb-4 text-sm">
          Coming Soon
        </h5>
        
        <h1 className="text-4xl md:text-6xl font-outfit font-extrabold text-white mb-6 leading-tight">
          Crafting The <span className="italic text-primary">{pageName}</span> Experience
        </h1>
        
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
        
        <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-12">
          We are currently refining the digital details of our {pageName} page 
          to match the precision of our cuts. Excellence takes time, 
          but it's always worth the wait.
        </p>

        <a 
          href="/home" 
          className="inline-flex items-center gap-3 bg-white/5 hover:bg-primary border border-white/10 hover:border-primary text-white px-10 py-4 rounded-md font-bold transition-all duration-500 group"
        >
          Return To Excellence
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
};

export default UnderConstruction;
