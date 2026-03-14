import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { CONTACT_INFO } from '../../constants/contact';

const Navbar = ({ className = '' }) => {
  return (
    <nav className={`relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full ${className}`}>
      {/* Logo */}
      <Link to="/home" className="flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
        <div className="text-3xl font-outfit font-extrabold tracking-tighter italic text-white flex items-center">
          <span className="text-primary mr-1 italic">N</span>ARGO'S
        </div>
      </Link>

      {/* Right side: Links + Button grouped together */}
      <div className="flex items-center gap-12">
        {/* Links aligned left relative to the button */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase text-white/90">
          <Link to="/home" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Action Button */}
        <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>
          <Button variant="outline-magenta" className="px-6 py-4 rounded-md">
            {CONTACT_INFO.phone}
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
