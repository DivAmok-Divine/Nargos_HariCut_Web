import React from 'react';
import { Facebook } from 'lucide-react';
import { WhatsAppIcon, TikTokIcon } from '../../../components/ui/Icons';

const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-white rounded-md flex flex-col items-center group overflow-hidden border border-gray-100 relative h-full">
      <div className="w-full h-80 overflow-hidden relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
        {/* Social Overlay - Runs from Bottom */}
        <div className="absolute inset-0 bg-midnight/40 flex items-end justify-center pb-4 gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href="#" className="w-8 h-8 bg-primary text-white rounded-md flex items-center justify-center hover:bg-whatsapp transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-[0ms]">
            <WhatsAppIcon size={20} />
          </a>
          <a href="#" className="w-8 h-8 bg-primary text-white rounded-md flex items-center justify-center hover:bg-facebook transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-[100ms]">
            <Facebook size={18} />
          </a>
          <a href="#" className="w-8 h-8 bg-primary text-white rounded-md flex items-center justify-center hover:bg-midnight transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-[200ms]">
            <TikTokIcon size={16} />
          </a>
        </div>
      </div>
      <div className="p-6 text-center flex-grow flex flex-col justify-between w-full">
        <h4 className="text-primary font-outfit font-bold text-lg mb-2 leading-tight">
          {member.name}
        </h4>
        <div className="mt-auto">
          <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold border-t border-gray-50 pt-4">
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
