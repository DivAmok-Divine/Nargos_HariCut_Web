import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';

const Card = ({
  icon,
  title,
  description,
  backgroundImage,
  className = '',
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-md transition-all duration-500 border border-black/5 flex flex-col h-[450px] group cursor-pointer ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {/* Background Image Layer with Overlay */}
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-midnight/80 group-hover:bg-midnight/40 group-hover:backdrop-blur-sm transition-all duration-500" />
        </>
      )}

      {/* Content Layer */}
      <div className={`relative z-10 p-10 flex flex-col h-full ${backgroundImage ? 'text-white' : 'bg-white'}`}>
        <div>
          {icon && (
            <div className="mb-8 transition-transform duration-500">
              {icon}
            </div>
          )}
          <h3 className={`text-xl font-outfit font-bold mb-4 ${backgroundImage ? 'text-white' : 'text-midnight'}`}>
            {title}
          </h3>
          <p className={`text-lg leading-relaxed line-clamp-4 ${backgroundImage ? 'text-gray-300' : 'text-gray-500'}`}>
            {description}
          </p>
        </div>

        <div className="absolute bottom-10 left-10 right-10 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <Link to="/contact">
            <Button variant="primary-full">
              Book Service
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
