import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import headerImage from "../assets/header.png";
import footerVideo from "../assets/Footer.mp4";
import starryBg from "../assets/starry sky3.png"; // Background image

function Registration() {
  // Handle footer video playback speed
  useEffect(() => {
    const footerVideo = document.getElementById("footer-video");
    if (footerVideo) {
      footerVideo.playbackRate = 0.75;
    }
  }, []);

  return (
    <div
      className="min-h-screen bg-black text-white overflow-hidden relative"
      style={{
        background: `transparent`,
        backgroundSize: "cover",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/15 backdrop-blur-sm"></div>

      {/* Main Content */}
      <div className="relative pt-24 px-4 sm:px-6 md:px-8 z-10">
        {/* Headings Section */}
        <motion.div
          className="max-w-6xl mx-auto py-12 sm:py-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold font-mono tracking-wider text-[#ffab19] drop-shadow-lg">
            Register for INFERENCIA 2025
          </h1>

          <motion.hr
            className="border-[#ca891a] my-8 max-w-4xl mx-auto opacity-80"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2 }}
          />

          <p className="text-lg sm:text-2xl font-['DIN_Condensed'] tracking-wide mb-8 max-w-5xl mx-auto leading-relaxed px-4 sm:px-8 text-gray-300">
            Get ready to dive into a world of excitement, creativity, and
            unforgettable moments! By registering, you're not just joining an
            event—you're becoming part of our vibrant INFERENCIA family. Let's
            create magic, make memories, and celebrate together.
            <span className="block mt-2 text-[#ffab19] font-bold">
              Don't wait—your adventure starts here!
            </span>
          </p>
        </motion.div>

        {/* Registration Container */}
        <motion.div
          className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl text-center border border-gray-700 hover:shadow-2xl transition-all duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Header Image */}
          <motion.img
            src={headerImage}
            alt="Inferencia Header"
            className="w-4/5 mx-auto rounded-xl mb-8 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Google Form */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeYDrpoIgjz5UISYZOwJQt3-bE3UTq-IdVL1yggMjfrhWOkQQ/viewform?embedded=true"
            className="w-full h-[700px] rounded-xl bg-transparent border border-[#ffab19]/40 shadow-inner"
            frameBorder="0"
            title="Registration Form"
          />
        </motion.div>

        {/* General Rules Section */}
        <motion.div
          className="max-w-4xl mx-auto mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#ca891a]/10 blur-2xl rounded-3xl"></div>
            <div className="relative backdrop-blur-sm bg-black/40 border border-[#ca891a]/30 rounded-2xl p-8 sm:p-10">
              <h2 className="font-impact text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-[#f8a71b] to-[#ca891a] mb-10">
                GENERAL RULES AND GUIDELINES
              </h2>

              <ul className="space-y-6 max-w-4xl mx-auto">
                {[
                  "If you have found your teammates for Stochast-O-Liga, only one of you needs to fill out this form.",
                  "Cross-college teams are allowed.",
                  "Please enter your email address correctly.",
                  <>You will receive a confirmation email from us within 24 hours of registration. If you do not receive it, please <Link to="/contact" className="text-[#ffab19] hover:underline hover:text-[#f8a71b] transition-colors">contact us</Link>.</>,
                ].map((rule, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-4 font-['DIN_Condensed'] text-xl"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#f8a71b] to-[#ca891a] flex items-center justify-center text-black font-bold mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-200">{typeof rule === 'string' ? rule : <>{rule}</>}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Video */}
      <motion.div
        className="relative w-full h-[25vh] mt-16 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <video
          id="footer-video"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={footerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
}

export default Registration;
