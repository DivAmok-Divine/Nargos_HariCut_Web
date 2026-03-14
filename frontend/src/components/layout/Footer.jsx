import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../../constants/contact';
import { WhatsAppIcon, TikTokIcon, YoutubeIcon } from '../ui/Icons';

const Footer = () => {
  return (
    <footer id="contact" className="bg-footer-bg text-white pt-24 pb-12 px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">

          {/* Column 1: Logo & Socials */}
          <div className="flex flex-col gap-8">
            <Link to="/home" className="text-4xl font-outfit font-extrabold tracking-tighter italic text-white flex items-center hover:opacity-80 transition-opacity">
              <span className="text-primary mr-1 italic">N</span>ARGO'S
            </Link>

            <div className="flex items-center gap-4">
              <a href={CONTACT_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary flex items-center justify-center rounded-md hover:bg-instagram transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href={CONTACT_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary flex items-center justify-center rounded-md hover:bg-facebook transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href={CONTACT_INFO.socials.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary flex items-center justify-center rounded-md hover:bg-youtube transition-all duration-300">
                <YoutubeIcon size={20} />
              </a>
              <a href={CONTACT_INFO.socials.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary flex items-center justify-center rounded-md hover:bg-midnight transition-all duration-300">
                <TikTokIcon size={20} />
              </a>
              <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary flex items-center justify-center rounded-md hover:bg-whatsapp transition-all duration-300">
                <WhatsAppIcon size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xl font-outfit font-bold mb-8 text-primary">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-white/70 font-medium">
              <li><Link to="/home" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right">
            <h4 className="text-xl font-outfit font-bold mb-8 text-primary">Get In Touch</h4>
            <div className="space-y-4 text-white/70 font-medium max-w-sm">
              <p>
                {CONTACT_INFO.location}
              </p>
              <p className="text-primary font-bold text-lg">{CONTACT_INFO.phone}</p>
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary transition-colors cursor-pointer block">
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <p>Copyright © 2026 <Link to="/home" className="text-primary/60 font-bold hover:text-primary transition-colors">nargosfirstclass.com</Link></p>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p>Designed By <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary/60 font-bold hover:text-primary transition-colors">DivAmok Corp.</a></p>
            <div className="flex items-center gap-4 md:border-l md:border-white/10 md:pl-6">
              <Link to="/terms" className="text-primary/60 font-bold hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="text-primary/60 font-bold hover:text-primary transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
