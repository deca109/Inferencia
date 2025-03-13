import React, { useState } from "react";

const FacultyCard = ({ image, name, title, description }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    console.error(`Failed to load image for ${name}`);
    setImageError(true);
  };

  const toggleReveal = () => {
    setIsRevealed(!isRevealed);
  };

  return (
    <div
      className="relative w-72 h-96 cursor-pointer overflow-hidden rounded-xl shadow-lg 
      transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl 
      hover:shadow-[#ca891a]/20 group border border-transparent hover:border-[#ca891a]/30
      before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t 
      before:from-black/40 before:to-transparent before:opacity-0 before:transition-opacity 
      before:duration-300 hover:before:opacity-100"
      onClick={toggleReveal}
    >
      {/* Clickable Indicator */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-[#ca891a]/80 rounded-full 
        flex items-center justify-center opacity-0 group-hover:opacity-100 
        transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 text-white"
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
        </svg>
      </div>

      {/* Image with Overlay */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isRevealed ? "brightness-30 blur-sm" : "brightness-100"
        }`}
      >
        {!imageError ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">Image not available</span>
          </div>
        )}
      </div>

      {/* Content Overlay */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-start text-center 
        transition-all duration-500 p-4 ${
          isRevealed ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <h2 className="text-xl font-bold text-[#ca891a] mb-3">{title}</h2>
        <div className="max-h-[70%] overflow-y-auto custom-scrollbar">
          <p className="text-white text-sm leading-relaxed 
            bg-black/40 p-3 rounded-lg backdrop-blur-sm">
            {description}
          </p>
        </div>
      </div>

      {/* Name at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t 
        from-black/90 via-black/70 to-transparent group-hover:from-black/95">
        <h2 className="text-white text-lg font-bold transform transition-transform 
          duration-300 group-hover:scale-105">{name}</h2>
      </div>
    </div>
  );
};

export default FacultyCard;
