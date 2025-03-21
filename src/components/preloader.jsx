import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onLoadingComplete, loadingProgress = 0 }) => {
  // Remove the artificial progress calculation and use the passed progress
  const [internalProgress, setInternalProgress] = useState(0);
  
  useEffect(() => {
    // Ensure smooth progress transitions by gradually updating internal state
    const updateProgress = () => {
      setInternalProgress(prev => {
        // Move toward the target progress, but don't go backwards
        const nextProgress = Math.max(prev, Math.min(prev + 2, loadingProgress));
        
        // When we reach 100%, notify completion after a small delay
        if (nextProgress >= 100 && prev < 100) {
          setTimeout(() => {
            onLoadingComplete();
          }, 800);
        }
        return nextProgress;
      });
    };
    
    const timer = setInterval(updateProgress, 50);
    return () => clearInterval(timer);
  }, [loadingProgress, onLoadingComplete]);

  // Create stars with consistent animation settings
  const renderStars = () => {
    return Array.from({ length: 100 }).map((_, i) => {
      // Fixed duration range for consistent medium pace
      const animationDuration = 4 + (i % 3); // 4, 5, or 6 seconds
      const animationDelay = (i % 5) * 0.8; // 0, 0.8, 1.6, 2.4, or 3.2 seconds
      const size = 1 + Math.random() * 2; // Size between 1-3px
      
      return (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.2 + Math.random() * 0.6, // Between 0.2-0.8
            animation: `twinkle ${animationDuration}s infinite ${animationDelay}s`,
          }}
        />
      );
    });
  };

  return (
    <motion.div
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-black h-full"
      initial={{ opacity: 1 }}
      animate={{ opacity: internalProgress === 100 ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Star background with consistent animation */}
      <div className="absolute inset-0 overflow-hidden">
        {renderStars()}
      </div>

      {/* Rest of your preloader content remains the same */}
      <motion.div
        className="relative w-32 h-32 mb-8"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Existing orbit animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-900 via-purple-800 to-[#f8a71b] shadow-lg shadow-purple-500/30">
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-indigo-700 via-purple-600 to-[#ca891a] opacity-80"></div>

          <div className="absolute w-6 h-6 rounded-full bg-purple-900/50 top-4 left-6"></div>
          <div className="absolute w-4 h-4 rounded-full bg-purple-900/50 bottom-8 right-5"></div>
          <div className="absolute w-3 h-3 rounded-full bg-purple-900/50 top-12 right-8"></div>

          <div className="absolute -inset-4 border-2 border-purple-500/30 rounded-full border-dashed"></div>

          <motion.div
            className="absolute w-4 h-4 rounded-full bg-gray-300"
            animate={{
              x: [0, 20, 0, -20, 0],
              y: [20, 0, -20, 0, 20],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ top: "calc(50% - 8px)", left: "calc(50% - 8px)" }}
          ></motion.div>
        </div>
      </motion.div>

      <h1 className="text-4xl-center md:text-5xl font-bold tracking-widest font-['Old English Text MT'] text-[#ca891a] mb-8">
        HOLD TIGHT AS THE DATA UNFOLDS!
      </h1>

      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-600 via-[#f8a71b] to-purple-600"
          initial={{ width: 0 }}
          animate={{ width: `${internalProgress}%` }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      </div>

      <p className="text-[#f8a71b] text-sm">{Math.floor(internalProgress)}%</p>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {["σ", "μ", "∑", "π", "∫", "∞", "≈", "∝", "∂", "√"].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-500/40 text-2xl font-bold"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 3, 0],        // Smaller maximum size
              opacity: [0, 0.7, 0],    // Less intense
              x: [0, Math.random() * 100 - 50],  // More subtle movement
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 2,             // Longer duration for smoother effect
              repeat: Infinity,
              repeatDelay: Math.random() * 5 + 3,  // More frequent but still random
              ease: "easeInOut"        // Smoother transition
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Preloader;
