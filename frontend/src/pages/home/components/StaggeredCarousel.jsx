import React from 'react';
import { motion } from 'framer-motion';

const StaggeredCarousel = ({ images }) => {
  // Define staggered offsets for the columns
  const offsets = [40, 0, 20, 60];

  const itemWidth = 240;
  const gap = 24; // gap-6
  const totalSetWidth = (itemWidth + gap) * images.length;

  return (
    <div className="w-full overflow-hidden py-10">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: [0, -totalSetWidth] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Duplicate images to create a seamless infinite loop */}
        {[...images, ...images].map((src, index) => {
          const offsetIndex = index % offsets.length;
          return (
            <div
              key={index}
              className="relative rounded-md overflow-hidden shadow-2xl shrink-0"
              style={{
                width: `${itemWidth}px`,
                height: '550px',
                marginTop: `${offsets[offsetIndex]}px`
              }}
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default StaggeredCarousel;
