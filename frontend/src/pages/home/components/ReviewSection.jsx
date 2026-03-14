import React, { useState, useEffect } from 'react';
import { Quote, Facebook, Instagram } from 'lucide-react';
import { TikTokIcon, YoutubeIcon } from '../../../components/ui/Icons';
import { testimonialsData } from '../../../constants/testimonials';
import { CONTACT_INFO } from '../../../constants/contact';
import { motion, AnimatePresence } from 'framer-motion';

const ReviewSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonialsData.length]);

  return (
    <section className="py-16 bg-white px-8 relative border-t border-black/[0.03] shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.08)]">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative">

        {/* Header */}
        <h2 className="text-3xl font-outfit font-extrabold text-midnight mb-6 uppercase tracking-wider">
          Review Us
        </h2>

        {/* Social Icons (Matched with Footer) */}
        <div className="flex items-center gap-6 mb-12">
          {/* Instagram */}
          <a href={CONTACT_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary/5 transition-colors">
            <Instagram size={24} />
          </a>

          {/* Facebook */}
          <a href={CONTACT_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary/5 transition-colors">
            <Facebook size={24} fill="currentColor" />
          </a>

          {/* Youtube */}
          <a href={CONTACT_INFO.socials.youtube} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary/5 transition-colors">
            <YoutubeIcon size={24} />
          </a>

          {/* TikTok */}
          <a href={CONTACT_INFO.socials.tiktok} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary/5 transition-colors">
            <TikTokIcon size={24} />
          </a>
        </div>

        {/* Testimonial Display Wrapper */}
        <div className="relative h-[280px] w-full flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="flex flex-col items-center">
                {/* Avatar Area */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                    <img
                      src={testimonialsData[activeIndex].avatar}
                      alt={testimonialsData[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Quote Icon */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <Quote size={20} className="text-primary fill-current opacity-80" />
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl font-light italic">
                  "{testimonialsData[activeIndex].text}"
                </p>

                <h5 className="text-primary font-outfit font-bold text-lg">
                  — {testimonialsData[activeIndex].name}
                </h5>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Simple Pagination Dots - Moved to Side */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-20">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${activeIndex === index ? 'bg-primary h-6' : 'bg-gray-200'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
