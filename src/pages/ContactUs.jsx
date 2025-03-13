import React from "react";
import { motion } from "framer-motion";
import night from "../assets/night.mp4";
import footerVideo from "../assets/Footer.mp4";

function ContactUs() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div 
      className="min-h-screen bg-black text-white overflow-x-hidden"
      style={{
        background: `url(${night}) repeat`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center relative">
            {/* Decorative stars */}
            <div className="absolute top-0 left-1/4 w-6 h-6 bg-[#ffab19] rounded-full opacity-60 blur-sm animate-pulse"></div>
            <div
              className="absolute top-12 right-1/4 w-4 h-4 bg-[#ffab19] rounded-full opacity-40 blur-sm animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center font-georgia mb-4 bg-gradient-to-r from-[#ffab19] to-[#ffcc00] bg-clip-text text-transparent">
              Contact Us
            </h1>

            <div className="h-1 w-48 md:w-64 bg-gradient-to-r from-transparent via-[#ca891a] to-transparent mx-auto my-8"></div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pb-24"
      >
        

        <div className="backdrop-blur-sm bg-black/30 border border-amber-800/30 rounded-xl p-8 shadow-lg shadow-amber-900/20">
          {/* WhatsApp Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-amber-200 mb-6 text-center">
              <span className="inline-block border-b-2 border-amber-500 pb-1">
                WhatsApp
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Daivik Dev", number: "+917002825344" },
                { name: "Riddhimann Chattopadhyay", number: "+919875435375" },
                { name: "Sanmitra Das", number: "+918910425071" },
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={`https://wa.me/${contact.number.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-col items-center p-5 rounded-lg bg-gradient-to-br from-black/60 to-amber-900/20 
            border border-amber-700/30 transition-all duration-300 hover:shadow-md hover:shadow-amber-500/30
            group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-amber-400/30 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <p className="font-medium text-amber-200 text-center group-hover:text-amber-100">
                    {contact.name}
                  </p>
                  <p className="text-amber-300/80 text-sm mt-1">
                    {contact.number}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-amber-200 mb-6 text-center">
              <span className="inline-block border-b-2 border-amber-500 pb-1">
                Social Media
              </span>
            </h3>

            <div className="flex flex-wrap justify-center gap-6">
              {[
                {
                  name: "Email",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  ),
                  link: "mailto:inferencia.rkmrc@gmail.com",
                },
                {
                  name: "Facebook",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  ),
                  link: "https://www.facebook.com/profile.php?id=100083186236126",
                },
                {
                  name: "Instagram",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  ),
                  link: "https://www.instagram.com/inferencia._",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-col items-center bg-gradient-to-br from-black/60 to-amber-900/20 
            p-5 rounded-lg border border-amber-700/30 min-w-[120px] transition-all duration-300 
            hover:shadow-md hover:shadow-amber-500/30 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-amber-400/30 transition-all duration-300">
                    <span className="text-black">{social.icon}</span>
                  </div>
                  <p className="font-medium text-amber-200 text-center group-hover:text-amber-100">
                    {social.name}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Video */}
      <div className="relative w-full h-[30vh] overflow-hidden mt-12">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-10 pointer-events-none"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={footerVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default ContactUs;
