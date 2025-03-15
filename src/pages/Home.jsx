import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FacultyCard from "../components/FacultyCard";
import Preloader from "../components/preloader";
import InferenciaVideo from "../assets/Inferencia.mp4";
import pkImage from "../assets/pk.jpg";
import nkdImage from "../assets/nkd.jpg";
import dksImage from "../assets/dks.jpg";
import pcImage from "../assets/pc.jpg";
import sbImage from "../assets/sb.jpg";
import tmImage from "../assets/tm.jpg";
import ppImage from "../assets/pp.jpg";
import schImage from "../assets/sch.jpg";
import opgImage from "../assets/opg.jpg";
import ssrImage from "../assets/ssr.jpg";
import aknImage from "../assets/akn.jpg";
import night from "../assets/night.mp4";
import spmImage from "../assets/spm.jpg";
import photogal from "../assets/photogal.mp4";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Home() {
  const videoRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  // Add state to track loading percentage
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Enhanced asset preloading 
  useEffect(() => {
    const imageAssets = [
      pkImage, nkdImage, dksImage, pcImage, sbImage, 
      tmImage, ppImage, schImage, opgImage, 
      ssrImage, aknImage, spmImage
    ];

    const videoAssets = [InferenciaVideo, night, photogal];

    let loadedImages = 0;
    let loadedVideos = 0;
    let totalAssets = imageAssets.length + videoAssets.length;

    console.log(`Starting to load ${imageAssets.length} images and ${videoAssets.length} videos`);

    const checkAllLoaded = () => {
      const totalLoaded = loadedImages + loadedVideos;
      const percentageLoaded = Math.round((totalLoaded / totalAssets) * 100);
      
      console.log(`Assets loaded: ${percentageLoaded}% (${totalLoaded}/${totalAssets})`);
      setLoadingProgress(percentageLoaded);
      
      if (loadedImages === imageAssets.length && loadedVideos === videoAssets.length) {
        console.log('All assets loaded successfully');
        // Only set assetsLoaded to true after a delay to ensure smooth transition
        setTimeout(() => {
          setAssetsLoaded(true);
        }, 200);
      }
    };

    // Preload images with proper error handling
    imageAssets.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        loadedImages++;
        checkAllLoaded();
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${src}`);
        loadedImages++;
        checkAllLoaded();
      };
      img.src = src;
    });

    // Enhanced video preloading logic
    videoAssets.forEach((src) => {
      const video = document.createElement('video');
      video.muted = true;
      video.preload = "auto";
      
      // Listen for both metadata and canplay events
      video.addEventListener('canplaythrough', function onCanPlay() {
        console.log(`Video can play through without buffering: ${src}`);
        video.removeEventListener('canplaythrough', onCanPlay);
        loadedVideos++;
        checkAllLoaded();
      });
      
      video.addEventListener('error', function onError() {
        console.error(`Failed to load video: ${src}`);
        video.removeEventListener('error', onError);
        loadedVideos++;
        checkAllLoaded();
      });
      
      // Start loading the video
      video.src = src;
      video.load();
    });

    // Safety timeout - only activate if assets haven't loaded in 15 seconds (increased time)
    const timeout = setTimeout(() => {
      if (!assetsLoaded) {
        console.warn('Loading timeout reached - forcing completion');
        setLoadingProgress(100);
        setAssetsLoaded(true);
      }
    }, 15000); // Increased to 15 seconds to give more time

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isLoading && assetsLoaded) {
      const video = videoRef.current;
      if (video) {
        document.getElementById("topnav").style.zIndex = 20;
        // Make sure the video is ready before playing
        if (video.readyState >= 3) {
          video.play().catch((error) => {
            console.log("Video autoplay failed:", error);
          });
        } else {
          // If not ready, wait for it
          const handleCanPlay = () => {
            video.play().catch((error) => {
              console.log("Video autoplay failed:", error);
            });
            video.removeEventListener('canplaythrough', handleCanPlay);
          };
          video.addEventListener('canplaythrough', handleCanPlay);
        }

        video.onended = () => {
          video.pause();
          video.style.zIndex = "2";
          video.style.transition = "opacity 1s ease";
          document.getElementById("topnav").style.zIndex = 100;
        };
      }
    }
  }, [isLoading, assetsLoaded]);

  // Add global styles for the preloader animations
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes twinkle {
      0% { opacity: 0.2; }
      25% { opacity: 0.4; }
      50% { opacity: 0.8; }
      75% { opacity: 0.4; }
      100% { opacity: 0.2; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Handle loading completion - don't hide preloader until assets are really loaded
  const handleLoadingComplete = () => {
    // Only complete loading if assets are actually loaded
    if (assetsLoaded) {
      setIsLoading(false);
    }
  };

  // Show preloader while assets are loading, pass the actual loading progress
  if (isLoading || !assetsLoaded) {
    return <Preloader 
      onLoadingComplete={handleLoadingComplete} 
      loadingProgress={loadingProgress}
    />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden w-screen">
      {/* Hero Section with Video */}
      <section
        id="video"
        className="relative z-20 mt-auto w-screen h-auto min-h-[300px] sm:min-h-60 lg:h-screen overflow-hidden"
      >
        <video
          id="bg-video"
          muted
          playsInline
          autoPlay
          className="absolute top-0 left-0 w-screen h-full object-cover"
          ref={videoRef}
        >
          <source src={InferenciaVideo} type="video/mp4" />
        </video>
      </section>

      {/* Title Frames with enhanced hover effects */}
      <motion.section
        className="relative z-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div
          className="relative z-51 bg-[url('https://i.pinimg.com/originals/d7/02/ce/d702ce6a0940a5bf272540d73c6ce8f3.gif')] py-16 text-center transition-all duration-500 text-white hover:bg-[url('https://i.pinimg.com/originals/d7/02/ce/d702ce6a0940a5bf272540d73c6ce8f3.gif')] group overflow-hidden"
          variants={fadeIn}
        >
          {/* Animated particle overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>

          <h2 className="relative text-4xl md:text-6xl font-bold tracking-widest font-extrabold font-['Old English Text MT'] transition-all duration-700 text-white group-hover:text-[#d4af37] group-hover:scale-105 transform">
            THE 4TH EDITION
          </h2>
        </motion.div>

        <motion.div
          className="relative group py-16 text-center bg-cover bg-center transition-all duration-500 bg-[url('https://windowscustomization.com/wp-content/uploads/2018/10/particles.gif')] hover:bg-[url('https://windowscustomization.com/wp-content/uploads/2018/10/particles.gif')] overflow-hidden"
          variants={fadeIn}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent group-hover:from-black/0 transition-all duration-500"></div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-widest text-[#d4af37] group-hover:text-white group-hover:scale-105 transform transition-all duration-500">
            CONTROLLING UNCERTAINTY
          </h2>
        </motion.div>

        <motion.div
          className="relative z-51 bg-[url('https://i.pinimg.com/originals/d7/02/ce/d702ce6a0940a5bf272540d73c6ce8f3.gif')] py-16 text-center transition-all duration-500 text-white hover:bg-[url('https://i.pinimg.com/originals/d7/02/ce/d702ce6a0940a5bf272540d73c6ce8f3.gif')] group overflow-hidden"
          variants={fadeIn}
        >
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-widest text-white group-hover:text-white group-hover:scale-105 transform transition-all duration-500">
            April 08, 2025
          </h2>
        </motion.div>
      </motion.section>

      {/* Main Content with enhanced animation and parallax effects */}
      <main className="relative z-1">
        {/* Background Video */}
        <div className="fixed inset-0 w-full z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
            src={night}
          >
            <source src={night} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/20 backdrop-filter backdrop-blur-sm"></div>
        </div>

        <div
          className="bg-[url('/assets/starry sky3.jpg')] bg-cover bg-fixed bg-center py-10 sm:py-16 md:py-20 relative z-10"
          style={{ backgroundPositionY: `${scrollY * 0.2}px` }}
        >
          <div className="space-y-12 sm:space-y-16 md:space-y-24 container mx-auto px-4 sm:px-6 lg:px-8">
            {/* About Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="max-w-4xl mx-auto p-8 sm:p-10 md:p-12 rounded-2xl bg-gradient-to-br from-[#d4af37]/90 to-black/90 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#f8a71b]/10 hover:border-[#f8a71b]/30"
            >
              <div className="relative text-center overflow-hidden">
                {/* Floating Atomic Particles Effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: -30, y: -30 }}
                  whileInView={{ opacity: 1, scale: 1, x: -50, y: -50 }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute -top-10 -left-10 w-14 h-14 rounded-full border-2 border-[#f8a71b] opacity-40"
                ></motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: 30, y: -30 }}
                  whileInView={{ opacity: 1, scale: 1, x: 50, y: -50 }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute top-5 right-5 w-12 h-12 rounded-full border-2 border-[#f8a71b] opacity-40"
                ></motion.div>

                {/* Background Numbers Flow Effect */}
                <div className="absolute inset-0 flex flex-wrap opacity-10 text-white text-xs font-mono pointer-events-none animate-flowing-numbers">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <span key={i} className="m-1">
                      {Math.floor(Math.random() * 100)}
                    </span>
                  ))}
                </div>

                {/* Main Content */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-6 md:mb-8 text-shadow">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f8a71b] to-yellow-500">
                    About Inferencia
                  </span>
                </h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <p className="text-base sm:text-lg mb-4 opacity-90 leading-relaxed px-2 sm:px-4 text-left text-white">
                    As an academic year neared its conclusion, a group of
                    budding statisticians, students about to graduate from
                    college, decided to pioneer a fest centred solely around
                    statistics.
                  </p>
                  <p className="text-base sm:text-lg mb-4 opacity-90 leading-relaxed px-2 sm:px-4 text-left text-white">
                    Inferencia has provided a remarkable opportunity to delve
                    deeper into the vast realm of statistics. The phenomenal
                    enthusiasm of all teachers and students in this fest has
                    never failed to amaze us.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-center mt-8 md:mt-10"
                >
                  <Link
                    to="/registration"
                    className="inline-block px-8 py-3 bg-[#ffd700] text-gray-900 
                font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-white 
                hover:text-[#ffd700] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105
                text-base relative overflow-hidden group"
                  >
                    <span className="relative z-10">Register Now</span>
                    <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </motion.div>
              </div>
            </motion.section>

            {/* Department & Professors Section */}
            <motion.section
              id="faculty"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
              className="max-w-5xl mx-auto p-8 sm:p-10 md:p-12 rounded-2xl bg-gradient-to-br from-[#d4af37]/90 to-black/90 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#f8a71b]/10 hover:border-[#f8a71b]/30"
            >
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-6 md:mb-8 text-shadow">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f8a71b] to-yellow-500">
                    Department & Professors
                  </span>
                </h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  className="relative bg-gradient-to-br from-gray-900/70 to-black/60 backdrop-blur-lg shadow-lg border border-gray-800 rounded-xl p-6 sm:p-8 md:p-12 text-white mb-12"
                >
                  <p className="text-lg sm:text-xl mb-4 opacity-90 leading-relaxed px-2 sm:px-4 text-left">
                    Welcome to the{" "}
                    <span className="text-[#d4af37] font-semibold">
                      Department of Statistics, RKMRC Narendrapur.
                    </span>
                  </p>
                  <p className="text-lg sm:text-xl mb-4 opacity-90 leading-relaxed px-2 sm:px-4 text-left">
                    Taught as a pass subject as early as{" "}
                    <span className="text-[#ffd700] font-medium">1960</span>,
                    the Dept. of Statistics emerged as an Honours Department a
                    couple of years later. Sri Bikash Chandra Sanyal, Sri
                    Gourikanta Bhattacharya, Sri Sukharanjan Chakraborty, Sri
                    Prasanta Kumar Giri and Sri Nanda Kishore De laid the
                    foundation of the Department in{" "}
                    <span className="text-[#ffd700] font-medium">1962</span>.
                    Through their unwavering commitment to excellence and
                    tireless spirit of service, the department has been able to
                    reach where it is today.
                  </p>
                  <p className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed px-2 sm:px-4 text-left">
                    A rigorous coursework combining the better parts of{" "}
                    <span className="text-[#d4af37] font-semibold">
                      traditional learning
                    </span>{" "}
                    with{" "}
                    <span className="text-[#d4af37] font-semibold">
                      modern innovations
                    </span>
                    , ensures growth of critical thinking skills and efficient
                    problem-solving strategies. Teachers who prioritize the
                    transmission of knowledge and the betterment of students not
                    only in academics, but also in all other fields of life, all
                    within an institution famed for fostering discipline and
                    strong bonds of friendship, truly creates an ideal
                    environment for{" "}
                    <span className="text-[#ffd700] font-medium">
                      holistic education.
                    </span>
                  </p>
                </motion.div>

                <div className="relative flex justify-center items-center mb-8">
                  {/* Sprouting Flowers */}
                  <motion.img
                    src="https://i.pinimg.com/originals/c3/fe/1a/c3fe1addb7c1df50f7e5ba2d6b53426f.gif"
                    alt="Flower"
                    initial={{ opacity: 0, scale: 0.5, x: -50, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, x: -80, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                    className="absolute left-0 w-16 sm:w-20 md:w-24"
                  />

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-xl sm:text-2xl md:text-3xl font-bold uppercase my-6 sm:my-8 text-[#ffd700] text-center px-2"
                  >
                    Honorary Faculty
                  </motion.h3>

                  <motion.img
                    src="https://i.pinimg.com/originals/c3/fe/1a/c3fe1addb7c1df50f7e5ba2d6b53426f.gif"
                    alt="Flower"
                    initial={{ opacity: 0, scale: 0.5, x: 50, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 80, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                    className="absolute right-0 w-16 sm:w-20 md:w-24"
                  />
                </div>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 py-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={staggerContainer}
                >
                  <motion.div variants={fadeIn} className="flex justify-center">
                    <FacultyCard
                      image={pkImage}
                      name="Dr. Prasanta Kumar Giri"
                      title="The Pioneer"
                      description="Professor Giri didn't just teach statistics—he built its foundation, brick by brick, book by book. His textbooks are the rite of passage for every aspiring statistician and retirement? Just an outlier in his dataset. Polite yet powerful, he turns complex theories into simple truths. In our department's grand equation, he's the undisputed constant!"
                    />
                  </motion.div>
                  <motion.div variants={fadeIn} className="flex justify-center">
                    <FacultyCard
                      image={nkdImage}
                      name="Dr. Nanda Kishore De"
                      title="The Evergreen"
                      description="Professor De makes even the toughest theorems feel like child's play. No question is too silly, no doubt too trivial—he tackles them all with the patience of a saint and the sharpness of a t-test. Retirement may have claimed his title, but teaching still runs in his regression line."
                    />
                  </motion.div>
                  <motion.div variants={fadeIn} className="flex justify-center">
                    <FacultyCard
                      image={dksImage}
                      name="Dr. Dilip Kumar Sahoo"
                      title="The Umbrella"
                      description="Professor Sahoo, the guardian of stats, shields his students and colleagues like a well-fitted confidence interval—always reliable, never overfitting. He teaches statistical inference, yet somehow, we fall for it like a perfect p-value. Tough? Maybe elsewhere. In his class, it's pure elegance. With wisdom as vast as his personality, he's not just a professor—he's our academic umbrella!"
                    />
                  </motion.div>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold uppercase my-8 sm:my-10 text-[#ffd700] text-center px-2"
                >
                  Faculty
                </motion.h3>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 max-w-6xl mx-auto px-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={staggerContainer}
                >
                  <motion.div variants={fadeIn} className="flex justify-center">
                    <FacultyCard
                      image={pcImage}
                      name="Dr. Parthasarathi Chakrabarti (HOD)"
                      title="The Luminary"
                      description="He is the King of Probability, the grandmaster of randomness and the ruler of distributions. When he teaches, even confusion takes notes. His lectures are not just lessons; they are intellectual adventures, where every student walks in with doubt and walks out with enlightenment. He doesn't just explain—he illuminates, making even the most stubborn concepts surrender to his brilliance."
                    />
                  </motion.div>
                  <motion.div variants={fadeIn} className="flex justify-center">
                    <FacultyCard
                      image={sbImage}
                      name="Sri Subhadeep Banerjee"
                      title="The Storyteller"
                      description="Professor Banerjee believes every theorem has a tale to tell. He won't rest until every student is hooked, convinced and nodding along—resistance is futile! With anecdotes sharper than a chi-square test, he turns dry formulas into gripping sagas. For him, numbers may lie, but a good story never does!"
                    />
                  </motion.div>
                  <motion.div variants={fadeIn} className="flex justify-center">
                    <FacultyCard
                      image={tmImage}
                      name="Sri Tulsidas Mukhopadhyay"
                      title="The Magician"
                      description="Professor Mukhopadhyay steps into the classroom and suddenly, statistics isn't numbers—it's pure magic. Summing up tricky problems? Child's play. Every tough equation melts like toffee in his hands, leaving students spellbound. With a flick of his chalk, even the hardest theorems surrender—because in his class, math doesn't just add up, it dazzles!"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto px-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={staggerContainer}
                >
                  <motion.div variants={fadeIn} className="flex justify-center">
                    <FacultyCard
                      image={ppImage}
                      name="Sri Palas Pal"
                      title="The Grand Mean"
                      description="Professor Pal doesn't teach statistics--he orchestrates it like a maestro. His lectures feel less like classes and more like front-row seats to reality unfolding in Anova tables. Class hours? Often extended to late-evening housefull movie shows with the help of his mystical statistical sorcery. Every student's best friend, he's got solutions for both tough assignments and tougher life choices. He's not just a professor; he's the algorithm behind every student's success. When life throws you residuals, he's always there to help you adjust your R²!"
                    />
                  </motion.div>
                  <motion.div variants={fadeIn} className="flex justify-center">
                    <FacultyCard
                      image={schImage}
                      name="Dr. Suryasish Chatterjee"
                      title="The Torchbearer"
                      description="Professor Chatterjee may be the department's newest recruit, but he's already as integral as the central limit theorem. He carries inference in his bones and patience in his soul, tackling doubts with the elegance of a well-posed function. His students suspect he's secretly asymptotic—always approaching perfection but never running out of time to listen. In his classroom, logic flows smoother than a Cauchy sequence and curiosity always finds a confident interval to thrive."
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.section>

            {/* Stochast-O-Liga Section */}
            <motion.section
              id="stochast"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
              className="max-w-4xl mx-auto p-8 sm:p-10 md:p-12 rounded-2xl bg-gradient-to-br from-[#d4af37]/90 to-black/90 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#f8a71b]/10 hover:border-[#f8a71b]/30"
            >
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-6 md:mb-8 text-shadow">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f8a71b] to-yellow-500">
                    Stochast-O-Liga
                  </span>
                </h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <p className="text-base sm:text-lg mb-4 opacity-90 leading-relaxed px-2 sm:px-4 text-left text-white">
                  The grand finale of Inferencia is Stochast-o-Liga, a high-stakes statistical gameplay, a quiz nothing less than a battle of statistical prowess, that encourages team spirit and challenge you to the very core.
                  </p>
                  <p className="text-base sm:text-lg mb-4 opacity-90 leading-relaxed px-2 sm:px-4 text-left text-white">
                  Combining statistical aptitude, logical reasoning and scientific knowledge, this team event evaluates the critical thinking abilities of competing students while simultaneously enlightening the audience. Prior to the main event, all teams must participate in a preliminary round, which comprises mathematical and statistical challenges. The top-performing teams advance to the main event and subsequent rounds encompass a diverse range of questions, including those on personalities, theoretical concepts, statistical terminology and general scientific knowledge.
                  </p>
                  <p className="text-base sm:text-lg mb-4 opacity-90 leading-relaxed px-2 sm:px-4 text-left text-white">
                    Participants engage in friendly yet competitive rounds, with
                    opportunities to network, learn and refine their analytical
                    abilities. To deepen one's statistical knowledge, or simply
                    to enjoy a challenge, this event has always been a rewarding
                    experience for students across a wide array of disciplines.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-center mt-8 md:mt-10"
                >
                  <Link
                    to="/stocast-o-liga"
                    className="inline-block px-8 py-3 bg-[#ffd700] text-gray-900 
                font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-white 
                hover:text-[#ffd700] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105
                text-base relative overflow-hidden group"
                  >
                    <span className="relative z-10">Know More</span>
                    <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </motion.div>
              </div>
            </motion.section>

            {/* Seminars Section */}
            <motion.section
              id="seminars"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
              className="max-w-4xl mx-auto p-8 sm:p-10 md:p-12 rounded-2xl bg-gradient-to-br from-[#d4af37]/90 to-black/90 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#f8a71b]/10 hover:border-[#f8a71b]/30"
            >
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-6 md:mb-8 text-shadow">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f8a71b] to-yellow-500">
                    Seminars
                  </span>
                </h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <p className="text-base sm:text-lg mb-4 opacity-90 leading-relaxed px-2 sm:px-4 text-left text-white">
                    Every year, the team behind Inferencia works its hardest to
                    make it an opportunity for learning and connecting with
                    students and teachers across town. Hence, Inferencia starts
                    off with a memorial lecture, hosting stalwarts in the field
                    of statistics, researchers and teachers who have dedicated
                    their lives to learning and pushing the boundaries of the
                    subject.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-center mt-8 md:mt-10"
                >
                  <Link
                    to="/seminar"
                    className="inline-block px-8 py-3 bg-[#ffd700] text-gray-900 
                font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-white 
                hover:text-[#ffd700] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105
                text-base relative overflow-hidden group"
                  >
                    <span className="relative z-10">What 2025 Awaits?</span>
                    <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold uppercase my-8 sm:my-10 text-[#ffd700] text-center px-2"
                >
                  Previous Seminars
                </motion.h3>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={staggerContainer}
                >
                  <motion.div variants={fadeIn} className="flex justify-center">
                    <FacultyCard
                      image={opgImage}
                      name="Sri Onkar Prosad Ghosh (2022)"
                      title="Deputy Director General at National Statistics Office"
                      description="Talk On 'Official Statistics — A Perspective Discourse'"
                    />
                  </motion.div>
                  <motion.div variants={fadeIn} className="flex justify-center">
                    <FacultyCard
                      image={ssrImage}
                      name="Dr. Sugata Sen Roy (2023)"
                      title="Professor, Calcutta University"
                      description="Talk On 'Unemployment, Underemployment — Definitions and Measurement'"
                    />
                  </motion.div>
                  <motion.div variants={fadeIn} className="flex justify-center">
                    <FacultyCard
                      image={aknImage}
                      name="Dr. Asok Kumar Nanda (2023)"
                      title="Professor, IISER Kolkata"
                      description="Talk On 'A Reliability Tour for Beginners'"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 mt-8 max-w-lg mx-auto px-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={fadeIn}
                >
                  <div className="flex justify-center">
                    <FacultyCard
                      image={spmImage}
                      name="Prof. Shyamaprasad Mukherjee (2024)"
                      title="Former Centenary Professor of Statistics, University of Calcutta"
                      description="Talk On 'Characterizations of Probability Distributions'"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.section>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="gallery-container w-full relative mt-12 overflow-hidden shadow-lg border-t-2 border-[#f8a71b]/30 bg-transparent"
        >
          {/* Header */}
          <h3 className="text-3xl md:text-4xl font-bold uppercase text-center py-8 text-[#ffd700] tracking-wide relative z-10">
            PHOTO GALLERY
          </h3>

          {/* Video */}
          <div className="relative">
            <video
              src={photogal}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </motion.div>
      </main>

      {/* Floating navigation dots */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col space-y-3">
          {["video", "faculty", "stochast", "seminars"].map(
            (section, index) => (
              <a
                key={section}
                href={`#${section}`}
                className="w-3 h-3 rounded-full bg-[#ffd700]/50 hover:bg-[#ffd700] transition-all duration-300 hover:scale-150"
                aria-label={`Navigate to ${section} section`}
              />
            )
          )}
        </div>
      </div>

      {/* Footer with subtle animation */}
      <footer className="bg-gray-800 text-white max-w-screen text-center py-3 sm:py-4 text-sm sm:text-base relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ca891a]/10 to-transparent"></div>
        <p className="relative">&copy; 2025 Inferencia. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
