import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import starryBg from "../assets/starry sky3.png";
import footerVideo from "../assets/Footer.mp4";
import welcomeImg from "../assets/welsome.png";
import chronicles from "../assets/chronicles.png";
import extrapolathon from "../assets/extrapolathon.jpg";
import stategic from "../assets/stategic.jpg";
import blitz from "../assets/blitz.jpg";
import endgame from "../assets/The endgame.jpg";

function StocastOLiga() {
  const [activeRound, setActiveRound] = useState(null);

  // Handle footer video playback speed
  useEffect(() => {
    const footerVideo = document.getElementById("footer-video");
    if (footerVideo) {
      footerVideo.playbackRate = 0.75;
    }

    // Add parallax effect on scroll
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const parallaxElements = document.querySelectorAll(".parallax");

      parallaxElements.forEach((element, index) => {
        const speed = 0.05 + index * 0.01;
        element.style.transform = `translateY(${scrollValue * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rounds = [
    {
      id: 1,
      name: "Chronicles",
      tagline: "Homage to the great minds who shaped the field.",
      description:
        "Teams will be asked to guess five great personalities on the basis of some clues. For each person, five clues will be provided. You may guess the name after any clue, write it on the paper provided and submit it to your team coordinator. A paper will be provided for each clue. Teams have the provision to change their answer after each clue or stick to their previous answer. Answers received after the fifth clue will be considered as the final answer.",
      image: chronicles,
      color: "from-purple-600/90 to-indigo-900/90",
    },
    {
      id: 2,
      name: "Extrapolathon",
      tagline: "Connect the dots to dig out the inner meaning",
      description:
        "A list of names or figures will be shown in this round and teams will be asked to determine the connection among them.",
      image: extrapolathon,
      color: "from-blue-600/90 to-cyan-900/90",
    },
    {
      id: 3,
      name: "Stat-e-Gic",
      tagline: "A Statistical Odyssey",
      description:
        "This round will consist of questions each featuring an unknown object/names/places marked by X (or in some cases X and Y). Teams must deduce these unknown(s) using the provided facts.",
      image: stategic,
      color: "from-amber-600/90 to-orange-900/90",
    },
    {
      id: 4,
      name: "Blitz",
      tagline: "Feel the heat as time keeps ticking",
      description:
        "In this round, each team will be given 1 minute to answer 20 rapid fire questions, on statistical trivia. Every correct answer will be awarded and every wrong answer will be penalized. The questions will not be shown on the screen and only read out by the Quizmaster. The teams may choose to pass the question, which causes no negative marking.",
      image: blitz,
      color: "from-red-600/90 to-rose-900/90",
    },
    {
      id: 5,
      name: "The Endgame",
      tagline: "The last dance to emerge victorious",
      description:
        "In this round, 6 topics will be displayed on the screen and teams will be asked to choose one of them to answer a question related to that field. The team with the highest score before this round begins gets to pick a category first, followed by the other teams in order of their scores. Before the question is read out, the adjacent next team will have a chance to challenge the chosen topic.",
      image: endgame,
      color: "from-emerald-600/90 to-teal-900/90",
    },
  ];

  return (
    <div
      className="min-h-screen bg-black text-white relative overflow-x-hidden"
      style={{ background: `url(${starryBg}) repeat fixed` }}
    >
      {/* Animated stars */}
      {/* <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`,
            }}
          />
        ))}
      </div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 relative z-10">
        {/* Hero section with welcome image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#ca891a]/30 to-transparent rounded-3xl transform -translate-y-6 scale-105 blur-xl"></div>
          <div className="flex justify-center items-center relative">
            <img
              src={welcomeImg}
              alt="Welcome to Stochast-O-Liga"
              className="w-full max-w-5xl mx-auto transform hover:scale-105 transition-transform duration-700 my-8"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-[#ca891a] to-transparent my-12"
        />

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mb-12 max-w-4xl mx-auto"
        >
          <h1 className="font-['DIN_Condensed'] text-4xl sm:text-5xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#f8a71b] to-[#ca891a]">
            <span className="relative inline-block">
              STOCHAST-O-LIGA
              <div className="absolute h-1 w-full bottom-0 left-0 bg-gradient-to-r from-[#f8a71b] to-[#ca891a] rounded-full"></div>
            </span>
          </h1>

          <div className="space-y-6 backdrop-blur-sm bg-black/30 p-6 sm:p-8 rounded-2xl border border-[#ca891a]/20">
            <p className="font-['DIN_Condensed'] text-2xl sm:text-3xl leading-relaxed text-gray-200">
              The second part of Inferencia is{" "}
              <b className="text-[#f8a71b]">Stochast-O-Liga</b>, a statistical
              problem-solving competition.
            </p>
            <p className="font-['DIN_Condensed'] text-xl sm:text-2xl leading-relaxed text-gray-300">
            Combining statistical aptitude, logical reasoning and scientific knowledge, this team event evaluates the critical thinking abilities of competing students while simultaneously enlightening the audience. Prior to the main event, all teams must participate in a preliminary round, which comprises mathematical and statistical challenges. The top-performing teams advance to the main event and subsequent rounds encompass a diverse range of questions, including those on personalities, theoretical concepts, statistical terminology and general scientific knowledge.
            </p>
            <p className="font-['DIN_Condensed'] text-xl sm:text-2xl leading-relaxed text-gray-300">
              Participants engage in friendly yet competitive rounds, with
              opportunities to network, learn and refine their analytical
              abilities. To deepen one's statistical knowledge, or simply to
              enjoy a challenge, this event has always been a rewarding
              experience for students across a wide array of disciplines.
            </p>
          </div>

          <div className="mt-8 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="inline-block text-3xl sm:text-4xl font-impact text-[#f8a71b] px-6 py-2 rounded-lg"
            >
              Let us go through the rounds
            </motion.p>
          </div>
        </motion.section>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 1.2 }}
          className="h-px bg-gradient-to-r from-transparent via-[#ca891a] to-transparent my-12"
        />

        {/* Rounds Section */}
        <section className="my-16">
          {/* Round navigation */}

          {/* Round details display */}
          <div className="space-y-15">
            {rounds.map((round, index) => (
              <motion.div
                onClick={() => setActiveRound(round.id)}
                key={round.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity:
                    activeRound === round.id || activeRound === null ? 1 : 0.5,
                  y: 0,
                  scale: activeRound === round.id ? 1.03 : 1,
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden relative transition-all duration-500 ${
                  activeRound === round.id
                    ? "ring-2 ring-[#ca891a] shadow-xl shadow-[#ca891a]/20"
                    : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40 z-10"></div>

                <div className="flex flex-col lg:flex-row items-center relative z-20">
                  <div
                    className={`w-full lg:w-1/3 overflow-hidden ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="relative h-64 lg:h-96 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
                      <img
                        src={round.image}
                        alt={round.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                      <div
                        className={`absolute top-0 left-0 h-full w-2 bg-gradient-to-b ${round.color}`}
                      ></div>
                    </div>
                  </div>

                  <div
                    className={`w-full lg:w-2/3 p-8 bg-gradient-to-br ${round.color} backdrop-blur-sm`}
                  >
                    <div className="max-w-2xl mx-auto">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-black font-bold text-xl mr-4">
                          {round.id}
                        </div>
                        <h2 className="font-impact text-3xl sm:text-4xl text-white">
                          {round.name}
                        </h2>
                      </div>

                      <p className="font-impact text-2xl text-white italic mb-4">
                        {round.tagline}
                      </p>

                      <p className="font-['DIN_Condensed'] text-xl text-white/90 leading-relaxed">
                        {round.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 1.5 }}
          className="h-px bg-gradient-to-r from-transparent via-[#ca891a] to-transparent my-12"
        />

        {/* General Rules Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#ca891a]/10 blur-2xl rounded-3xl"></div>
            <div className="relative backdrop-blur-sm bg-black/40 border border-[#ca891a]/30 rounded-2xl p-8 sm:p-10">
              <h2 className="font-impact text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-[#f8a71b] to-[#ca891a] mb-10">
                GENERAL RULES AND GUIDELINES
              </h2>

              <ul className="space-y-6 max-w-4xl mx-auto">
                {[
                  "If sufficient registrations are received, a Prelims will be held from which 10 teams will proceed to the main quiz. The Prelims will test your skills in Maths and Statistics.",
                  "There will be an elimination after Round 3 from which the top 6 teams will proceed to the final two rounds.",
                  "Each team will consist of 3 members. Inter-College pairing is allowed.",
                  "One participant can register for the entire team. The other two don't have to register separately.",
                  "Any use of electronics is prohibited during the course of the event.",
                  "The decision of Quizmaster is final and binding.",
                ].map((rule, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 2 + index * 0.1 }}
                    className="flex items-start gap-4 font-['DIN_Condensed'] text-xl"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#f8a71b] to-[#ca891a] flex items-center justify-center text-black font-bold mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-200">{rule}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2.6 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-[#f8a71b]/30 blur-xl rounded-full"></div>
            <Link
              to="/registration"
              className="relative inline-block px-12 py-5 bg-gradient-to-r from-[#f8a71b] to-[#ca891a] text-black font-impact 
                tracking-wider rounded-full shadow-lg hover:from-white hover:to-white hover:text-[#f8a71b] 
                transition-all duration-300 transform hover:-translate-y-1 text-2xl uppercase"
            >
              Register Your Team
            </Link>
          </div>

          <p className="mt-4 text-gray-400 font-['DIN_Condensed'] text-lg">
            Registration is free of cost. One registration per team is
            sufficient.
          </p>
        </motion.div>
      </div>

      {/* Footer Video */}
      <div className="relative w-full h-[25vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-10"></div>
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

      <style jsx>{`
        @keyframes twinkle {
          0% {
            opacity: 0.2;
          }
          100% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}

export default StocastOLiga;
