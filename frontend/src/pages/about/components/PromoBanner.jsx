import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import discountBadge from '../../../assets/images/discount_badge.png';
import { CONTACT_INFO } from '../../../constants/contact';

const PromoBanner = ({ variant = 'horizontal', className = '' }) => {
  if (variant === 'card') {
    return (
      <div className={`bg-primary p-8 rounded-md flex flex-col items-center justify-center text-center text-white relative overflow-hidden group min-h-[320px] h-full ${className}`}>
        <div className="relative z-10 flex flex-col h-full justify-between items-center py-4">
          <h3 className="text-2xl font-outfit font-black leading-tight mb-4">
            Book Your Appointment Now And Get 25% Off
          </h3>
          <p className="text-white/70 text-sm mb-6">
            Epic September Sale — 25% OFF on Restoration, Fades & Grooming
          </p>
          <Link to="/contact" className="w-full">
            <Button variant="outline-white" className="w-full text-xs py-3 mt-auto">
              BOOK APPOINTMENT
            </Button>
          </Link>
        </div>
        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-noise" />
      </div>
    );
  }

  return (
    <section className={`bg-primary py-12 px-8 overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6 text-white">
          <img src={discountBadge} alt="25% OFF" className="w-36 h-36 object-contain mix-blend-screen" />
          <div>
            <h2 className="text-2xl md:text-3xl font-outfit font-extrabold mb-1">
              Book Your Appointment Now And Get 25% Off
            </h2>
            <p className="text-white/80 font-medium">
              Epic September Sale - 25% OFF on Restoration, Fades & Grooming
            </p>
          </div>
        </div>
        <Link to="/contact">
          <Button variant="outline-white" className="min-w-[240px]">
            Book An Appointment
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default PromoBanner;
