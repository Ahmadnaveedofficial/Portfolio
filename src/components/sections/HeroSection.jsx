import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext.jsx";
import profile2 from "../../assets/profile2.png";
import cvFile from "../../assets/AhmadCV.pdf";
import { containerVariants, itemsVariants } from "../../utils/helper.js";

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const socials = [
    {
      icon: FiGithub,
      href: "https://github.com/Ahmadnaveedofficial",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/ahmad-naveed-7b539521a/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:ahmadnaveedofficial05@gmail.com",
      label: "Email",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-10"
      >
        {/* Background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className={`absolute top-2 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? "bg-blue-500" : "bg-blue-400"
            }`}
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? "bg-purple-500" : "bg-purple-400"
            }`}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 mt-20">
          {/* Mobile layout */}
          <div className="block lg:hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              {/* Profile image mobile */}
              <motion.div variants={imageVariants} className="mb-8">
                <div className="w-32 h-32 mx-auto mt-5 relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-full h-32 rounded-full overflow-hidden border-4 ${isDarkMode ? "border-gray-800" : "border-gray-300"} 
                  shadow-2xl 
                   `}
                  >
                    <img
                      src={profile2}
                      alt="profile2"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* decoration ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-2 rounded-2xl border border-blue-500/20 "
                  />
                </div>
                {/* Status badge*/}
                <div className="flex justify-center mt-16">
                  <span className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 text-green-400 text-[10px] tracking-wider uppercase px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Available
                  </span>
                </div>
              </motion.div>

              {/* Eyebrow */}
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest mb-4 ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                }`}
              >
                AI Automation & Full Stack Engineer
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={itemsVariants}
                className="text-3xl md:text-5xl font-light mb-6 leading-tight"
              >
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  Building digital
                </span>
                <span className="text-blue-500 font-medium ml-2">
                  experiences
                </span>
                <br />
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  that matter
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemsVariants}
                className={`text-base md:text-lg mb-8 max-w-xl mx-auto font-light leading-relaxed ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Crafting beautiful, functional web applications with modern
                technologies and thoughtful user experience.
              </motion.p>

              {/* CTA buttons mobile */}
              <motion.div
                variants={itemsVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  View Work
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`cursor-pointer border px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  }`}
                >
                  Get in Touch
                </motion.button>
                <motion.a
                  href={cvFile}
                  download="Ahmad_Naveed_CV.pdf"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer border px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center gap-2 ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  }`}
                >
                  Download CV
                </motion.a>
              </motion.div>

              {/* Social links mobile */}
              <motion.div
                variants={itemsVariants}
                className="flex justify-center items-center space-x-6 mb-8"
              >
                {socials.map(({ icon: Icon, href, label }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    aria-label={label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`cursor-pointer p-3 rounded-full transition-colors ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </motion.div>

              {/* Tech stack */}
              <motion.div
                variants={itemsVariants}
                className="flex flex-wrap justify-center items-center space-x-6 text-xs uppercase tracking-widest"
              ></motion.div>
            </motion.div>
          </div>

          {/* ── Desktop layout ── */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left column */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-left"
            >
              {/* Status badge desktop */}
              <motion.div variants={textVariants} className="mb-6">
                <span
                  className={`inline-flex items-center gap-2 text-xs tracking-wider uppercase px-4 py-2 rounded-full border ${
                    isDarkMode
                      ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
                      : "bg-blue-50 border-blue-200 text-blue-600"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Available for work
                </span>
              </motion.div>

              {/* Eyebrow */}
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest mb-6 ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                }`}
              >
                AI Automation & Full Stack Engineer
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={itemsVariants}
                className="text-5xl xl:text-7xl font-light mb-8 leading-tight"
              >
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  Building digital
                </span>
                <br />
                <span className="text-blue-500 font-medium">experiences</span>
                <br />
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  that matter
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemsVariants}
                className={`text-xl mb-12 max-w-lg font-light leading-relaxed ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Crafting beautiful, functional web applications with modern
                technologies and thoughtful user experience.
              </motion.p>

              {/* CTA buttons desktop */}
              <motion.div variants={itemsVariants} className="flex gap-6 mb-8">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  View Work
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`cursor-pointer border px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  }`}
                >
                  Get in Touch
                </motion.button>
                <motion.a
                  href={cvFile}
                  download="Ahmad_Naveed_CV.pdf"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer border px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center gap-2 ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  }`}
                >
                  Download CV
                </motion.a>
              </motion.div>

              {/* Social links desktop */}
              <motion.div
                variants={itemsVariants}
                className="flex space-x-6 mb-12"
              >
                {socials.map(({ icon: Icon, href, label }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    aria-label={label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`cursor-pointer p-3 rounded-full transition-colors ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right column profile2 image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="flex justify-center items-center"
            >
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.04,
                  rotate: -1,
                }}
                className="relative"
              >
                {/* Glass Card */}
                <div
                  className={`relative p-8 rounded-[40px] backdrop-blur-xl ${
                    isDarkMode
                      ? "bg-white/5 border border-white/10"
                      : "bg-white/50 border border-white/60"
                  }`}
                >
                  {/* Blue Glow */}
                  <div className="absolute inset-0 rounded-[40px] bg-blue-500/10 blur-3xl" />

                  {/* Profile Image */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`relative w-80 h-96 rounded-full overflow-hidden border-4 ${
                      isDarkMode
                        ? "border-gray-700 shadow-[0_0_80px_rgba(59,130,246,0.35)]"
                        : "border-white shadow-[0_0_70px_rgba(59,130,246,0.25)]"
                    }`}
                  >
                    <img
                      src={profile2}
                      alt="profile2"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Ring 1 */}
                  <motion.div
                    animate={{
                      rotate: 360,
                      scale: [1, 1.03, 1],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-4 rounded-full border border-blue-500/30"
                  />

                  {/* Ring 2 */}
                  <motion.div
                    animate={{
                      rotate: -360,
                      scale: [1.05, 1.08, 1.05],
                      opacity: [0.15, 0.4, 0.15],
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-10 rounded-full border border-cyan-400/20"
                  />

                  {/* Ring 3 */}
                  <motion.div
                    animate={{
                      rotate: 360,
                      scale: [1.1, 1.14, 1.1],
                      opacity: [0.08, 0.2, 0.08],
                    }}
                    transition={{
                      duration: 42,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-16 rounded-full border border-purple-500/10"
                  />

                  {/* Floating Dot */}
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      x: [0, 8, 0],
                      scale: [1, 1.4, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-6 right-8 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,1)]"
                  />

                  {/* Floating Gradient Circle */}
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      x: [0, -10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-8 -left-5 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-[2px]"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection("work")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          <ArrowDown
            size={20}
            className={isDarkMode ? "text-gray-600" : "text-gray-400"}
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
