import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import starryBg from "../assets/starry sky3.png";
import night from "../assets/night.mp4";
import footerVideo from "../assets/Footer.mp4";
import { motion, AnimatePresence } from "framer-motion";

function FAQ() {
  // State to track which FAQ is open
  const [openFAQ, setOpenFAQ] = useState(null);
  const faqRefs = useRef([]);

  // FAQ data
  const faqs = [
    {
      question: "What is Inferencia?",
      answer:
        "Inferencia is the annual departmental fest organized by RKMRC's Department of Statistics, featuring State-Level Seminars and a one of a kind Quiz Competition, Stochast-O-Liga.",
    },
    {
      question: "Who can participate?",
      answer:
        "Any Undergraduate or Postgraduate student of Statistics can participate in this event. However, Stochast-O-Liga is exclusive to only Undergraduate students.",
    },
    {
      question: "Is there any Registration Fee?",
      answer: "No, participation in Inferencia is completely free of cost.",
    },
    {
      question: "How to Register?",
      answer: (
        <>
          Fill out the{" "}
          <Link
            to="/registration"
            className="text-amber-300 hover:text-amber-200 underline transition-colors"
          >
            Form
          </Link>{" "}
          to complete your registration.
          <br /> Stochast-O-Liga participants must note, one participant can
          register for the entire team. The other two don't have to register
          separately.
        </>
      ),
    },
    {
      question:
        "What if I don't have teammates but want to participate in Stochast-O-Liga?",
      answer:
        'No worries. Such participants must fill under "Seminar Only" and reach us out at the WhatsApp Numbers provided. We would notify all such people, and they can form their teams accordingly.',
    },
    {
      question: "When and How to reach?",
      answer: (
        <>
          The schedule for the date would be conveyed via Instagram, Facebook
          and Mail to the participants. Please, check regularly for updates.
          <br />
          <br />
          Participants travelling via Metro must get down at the Kavi Nazrul
          Metro Station. A 15min Auto/Bus ride would take you to the location.
          <br />
          <br />
          <a
            href="https://maps.app.goo.gl/UqKBF8x4KJGekBiN8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300 hover:text-amber-200 underline transition-colors flex items-center gap-2"
          >
            <span>View Location</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </>
      ),
    },
  ];

  // Handle footer video playback speed
  useEffect(() => {
    const footerVideo = document.getElementById("footer-video");
    if (footerVideo) {
      footerVideo.playbackRate = 0.75;
    }
  }, []);

  // Toggle FAQ
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);

    // Scroll to the FAQ if it's being opened
    if (openFAQ !== index && faqRefs.current[index]) {
      const yOffset = -100; // Offset to account for any fixed headers
      const element = faqRefs.current[index];
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-h-screen relative text-white overflow-hidden"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.3)), url(${night}) repeat`,
        backgroundSize: "cover",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      <main className="relative z-20 pt-32 px-4 sm:px-6 md:px-8 pb-24 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-300">
            FAQ
          </h1>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-amber-400 to-yellow-600"></div>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              ref={(el) => (faqRefs.current[index] = el)}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="backdrop-blur-sm bg-black/30 border border-amber-800/30 rounded-xl overflow-hidden"
            >
              <button
                className="w-full p-5 text-left focus:outline-none group"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFAQ === index}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl sm:text-2xl font-medium text-amber-200 group-hover:text-amber-100 transition-colors">
                    {faq.question}
                  </h2>
                  <span
                    className={`flex items-center justify-center h-8 w-8 rounded-full 
                    bg-gradient-to-br from-amber-500 to-amber-700 text-black 
                    transform transition-all duration-300 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </div>
              </button>

              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 border-t border-amber-700/30">
                      <div className="bg-gradient-to-r from-amber-900/20 to-black/20 p-5 rounded-lg text-lg text-amber-50">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </main>
      {/* Footer Video with Overlay */}
      <div className="relative w-full h-[30vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10"></div>
        <video
          id="footer-video"
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

export default FAQ;
