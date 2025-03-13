import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import starryBg from "../assets/starry sky3.png";
import alokGoswami from "../assets/alok_goswami.jpg";
import uttomBandyopadhyay from "../assets/uttom_bandyopadhyay.png";
import arindamSengupta from "../assets/arindam_sengupta.png";
import footerVideo from "../assets/Footer.mp4";
import night from "../assets/night.mp4";
function Seminar() {
  const footerVideoRef = useRef(null);

  // Handle footer video playback speed
  useEffect(() => {
    if (footerVideoRef.current) {
      footerVideoRef.current.playbackRate = 0.75;
    }
  }, []);

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
              Seminars '25
            </h1>

            <div className="h-1 w-48 md:w-64 bg-gradient-to-r from-transparent via-[#ca891a] to-transparent mx-auto my-8"></div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl sm:text-2xl font-light tracking-wide max-w-4xl mx-auto leading-relaxed text-gray-200"
            >
              A celebration of statistical excellence, bringing together
              brilliant minds to share knowledge and inspire the next
              generation.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Introduction Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-6 text-center">
            Every year, the team behind Inferencia works its hardest to make it
            an opportunity for learning and connecting with students and
            teachers across town. Hence, Inferencia starts off with a memorial
            lecture, hosting stalwarts in the field of statistics, researchers
            and teachers who have dedicated their lives to learning and pushing
            the boundaries of the subject.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wide text-center text-[#ffab19]">
            This year we would be having two State-Level Seminars.
          </p>
        </div>
      </motion.section>

      {/* Memorial Talks Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Ranjit Kandar Khanda Memorial Talk */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffab19]/20 to-gray-900/95 backdrop-blur-sm z-0"></div>

            <div className="relative z-10 p-6 sm:p-8 md:p-12">
              {/* Section header */}
              <div className="text-center mb-12">
                <h2 className="inline-block px-6 py-3 text-3xl sm:text-4xl font-bold tracking-wide text-white bg-gradient-to-r from-[#ffab19]/90 to-[#ca891a]/90 rounded-lg shadow-lg mb-4">
                  Ranjit Kandar Memorial Talk
                </h2>
                <div className="h-1 w-32 bg-white/30 mx-auto my-4"></div>
              </div>

              {/* Memorial info */}
              <div className="mb-12 max-w-3xl mx-auto">
                <p className="text-xl text-center leading-relaxed bg-black/30 p-6 rounded-lg">
                  <span className="text-[#ffcc00] font-bold">
                    Prof. Ranjit Kandar
                  </span>{" "}
                  was a pioneer in
                  <span className="text-[#ffcc00] font-bold">
                    {" "}
                    statistical inference and experimental design
                  </span>
                  . His groundbreaking work in
                  <span className="text-[#ffcc00] font-bold">
                    {" "}
                    regression analysis and sampling techniques
                  </span>
                  continues to shape the field.
                </p>

                <div className="text-center my-8">
                  <h3 className="inline-block text-2xl sm:text-3xl font-bold text-white py-2 px-6 border-b-2 border-[#ffab19]">
                    "A Chat On Coin Tossing"
                  </h3>
                </div>
              </div>

              {/* Speaker info */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 bg-black/40 p-6 rounded-xl">
                <div className="lg:w-1/3 flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full border-2 border-[#ffab19] animate-ping opacity-20"></div>
                    <img
                      src={arindamSengupta}
                      alt="Arindam Sengupta"
                      className="w-56 h-56 rounded-full object-cover shadow-lg border-4 border-[#ffab19]/50"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#ffcc00] mt-4 text-center">
                    Dr. Arindam Sengupta
                  </h3>
                  <p className="text-center text-gray-300 mt-1 font-light">
                    University of Calcutta
                  </p>
                </div>

                <div className="lg:w-2/3">
                  <div className="border-l-4 border-[#ffab19] pl-4 mb-4 hidden lg:block">
                    <h4 className="text-xl font-bold text-white">
                      About the Speaker
                    </h4>
                  </div>
                  <p className="text-lg leading-relaxed text-center lg:text-left">
                    Professor Arindam Sengupta is a distinguished academic in Probability Theory, 
                    currently serving as a Professor in the Department of Statistics at the University of Calcutta. 
                    He earned his B.Stat, M.Stat, and Ph.D. from the Indian Statistical Institute, Kolkata. His 
                    research interests include Probability Theory, Asymptotic Inference, and Stochastic Processes. 
                    He has published extensively in reputed journals and has contributed to academic conferences. 
                    He has guided M.Phil and Ph.D. students and has been recognized with the NBHM Research Award. 
                    He is also actively involved in refereeing and reviewing for prestigious statistical journals.
                  </p>
                </div>
              </div>

              
            </div>
          </motion.div>

          {/* Uttam Bandyopadhyay Memorial Talk */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl items-center overflow-hidden"
          >
            <div className="absolute inset-0 items-center bg-gradient-to-br from-[#ffab19]/20 to-gray-900/95 backdrop-blur-sm z-0"></div>

            <div className="relative z-10 p-6 sm:p-8 md:p-12 ">
              {/* Section header */}
              <div className="text-center mb-12">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full border-2 border-[#ffab19] animate-ping opacity-20"></div>
                  <img
                    src={uttomBandyopadhyay}
                    alt="Uttam Bandyopadhyay"
                    className="w-56 h-56 rounded-full object-cover m-auto shadow-lg border-4 border-[#ffab19]/50"
                  />
                </div>
                <h2 className="inline-block px-6 py-3 text-3xl sm:text-4xl font-bold tracking-wide text-white bg-gradient-to-r from-[#ffab19]/90 to-[#ca891a]/90 rounded-lg shadow-lg mb-4">
                  Uttam Bandyopadhyay Memorial Talk
                </h2>
                <div className="h-1 w-32 bg-white/30 mx-auto my-4"></div>
              </div>

              {/* Memorial info */}
              <div className="mb-12 max-w-3xl mx-auto">
                <p className="text-xl text-center leading-relaxed bg-black/30 p-6 rounded-lg">
                  Professor Uttam Bandyopadhyay was a revered statistician and educator, 
                  known for his dedication to teaching and research. He served at the 
                  University of Calcutta and RKMRC , earning immense respect from students 
                  and colleagues. His expertise spanned statistical inference and clinical trials, 
                  shaping the field and mentoring numerous scholars. A humble and compassionate 
                  individual, he was always supportive of students and faculty, leaving a lasting 
                  impact on the academic community. His tenure as Dean of Science further showcased 
                  his leadership. With his passing, the world of statistics has lost an exceptional 
                  teacher and researcher, but his legacy endures.
                </p>

                <div className="text-center my-8">
                  <h3 className="inline-block text-2xl sm:text-3xl font-bold text-white py-2 px-6 border-b-2 border-[#ffab19]">
                    "Sample Size 1 To ∞ : A Mathematical Peculiarity"
                  </h3>
                </div>
              </div>
              {/* Speaker info */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 bg-black/40 p-6 rounded-xl">
                <div className="lg:w-1/3 flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full border-2 border-[#ffab19] animate-ping opacity-20"></div>
                    <img
                      src={alokGoswami}
                      alt="Alok Goswami"
                      className="w-56 h-56 rounded-full object-cover shadow-lg border-4 border-[#ffab19]/50"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#ffcc00] mt-4 text-center">
                    Dr. Alok Goswami
                  </h3>
                  <p className="text-center text-gray-300 mt-1 font-light">
                    ISI, Kolkata
                  </p>
                </div>

                <div className="lg:w-2/3">
                  <div className="border-l-4 border-[#ffab19] pl-4 mb-4 hidden lg:block">
                    <h4 className="text-xl font-bold text-white">
                      About the Speaker
                    </h4>
                  </div>
                  <p className="text-lg leading-relaxed text-center lg:text-left">
                    Professor Alok Goswami is a renowned statistician
                    specializing in probability theory and stochastic processes.
                    He served at the Indian Statistical Institute, Kolkata, for
                    over two decades, contributing significantly to research and
                    education. Even after retirement in 2019, he continues as a
                    Visiting Professor at IACS, Kolkata. He co-authored "Measure
                    Theory for Analysis and Probability," a valuable academic
                    resource. His work has profoundly influenced students and
                    researchers in the field of mathematical statistics.
                  </p>
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-black/70 to-transparent"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
            Join Us for This Enlightening Experience
          </h2>
          <p className="text-xl mb-10 text-gray-300">
            Don't miss this opportunity to engage with brilliant minds in the
            field of statistics and expand your knowledge.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/registration"
              className="inline-block px-10 py-5 bg-gradient-to-r from-[#ffab19] to-[#ca891a] text-white font-bold uppercase 
                tracking-wider rounded-full shadow-lg transition-all duration-300 text-xl
                hover:shadow-[0_0_20px_rgba(202,137,26,0.6)]"
            >
              Register Now
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer Video */}
      <div className="relative w-full h-[30vh] overflow-hidden mt-12">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-10 pointer-events-none"></div>
        <video
          ref={footerVideoRef}
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

export default Seminar;
