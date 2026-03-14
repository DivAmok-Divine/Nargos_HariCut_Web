import React from 'react';
import Navbar from './Navbar';
import Button from '../ui/Button';
import CurveDivider from '../ui/CurveDivider';
import heroBg from '../../assets/images/home_hero_bg_2.jpg';

const Header = () => {
  return (
    <header className="relative w-full min-h-[80vh] flex flex-col bg-charcoal overflow-hidden">
      {/* Hero Background */}
      <div
        className="absolute inset-0 z-0 opacity-60 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-transparent to-midnight"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex-grow flex flex-col justify-center max-w-7xl mx-auto w-full px-8 pb-24">
        <h5 className="text-primary font-outfit font-bold tracking-widest uppercase mb-4">
          Norgo's First Class
        </h5>
        <h1 className="text-5xl md:text-7xl font-outfit font-extrabold mb-6 leading-[1.1] max-w-2xl">
          Cuts That Tell Stories...
        </h1>
        <p className="text-white/70 max-w-xl text-lg mb-10 leading-relaxed font-light">
          Every sharp line and smooth fade is a statement of excellence.
          At Norgo's, we blend tradition with modern precision to deliver grooming
          that transforms your presence.
        </p>

        <div className="flex flex-col sm:flex-row gap-5">
          <Button variant="primary">
            Book An Appointment
          </Button>
          <Button variant="outline">
            Contact Now
          </Button>
        </div>
      </div>

      <CurveDivider />
    </header>
  );
};

export default Header;
