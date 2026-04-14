import { useRef } from "react";
import {
  color,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { Mail, Heart, ArrowUp, Code2, icons } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import { containerVariants, itemsVariants } from "../utils/helper.js";

const Footer = () => {
  const { isDarkMode } = useTheme();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll();
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const socialLinks = [
    {
      name: "GitHub",
      icons: FiGithub,
      url: "https://github.com/Ahmadnaveedofficial",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icons: FiLinkedin,
      url: "https://www.linkedin.com/in/ahmad-naveed-7b539521a/",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icons: FiTwitter,
      url: "https://www.linkedin.com/in/ahmad-naveed-7b539521a/",
      color: "hover:text-sky-400",
    },
    {
      name: "Email",
      icons: Mail,
      url: "mailto:ahmadnaveedofficial05@gmail.com",
      color: "hover:text-green-400",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // animated gradient line component
  const AnimatedGradientLine = () => {
    return (
      <div className="absolute top-0 left-0 w-full h-px overflow-hidden">
        <motion.div
          className={`h-px bg-gradient-to-r ${isDarkMode ? "from-transparent via-blue-500 to-transparent" : "from-transparent via-blue-600 to-transparent"}`}
          initial={{ width: "0%", opacity: 0 }}
          animate={isInView ? { width: "100%", opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.div
          className={`absolute top-0 h-px w-32 bg-gradient-to-r ${
            isDarkMode
              ? "from-blue-400 via-purple-500 to-blue-400"
              : "from-blue-500 via-purple-600 to-blue-500"
          } blur-sm`}
          animate={{
            x: ["-50%", "calc(100vw + 50%)"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 6,
              ease: "linear",
              delay: 1,
            },
          }}
        />
      </div>
    );
  };

  return (
    <footer
      ref={footerRef}
      className={`relative ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} overflow-hidden`}
    >
      {/*  animated wave/gradient line  */}
      <AnimatedGradientLine />

      {/* background elements */}
      <motion.div
        style={{ y: scrollY }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div
          className={`absolute bottom-10 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-3 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"}`}
        />
        <div
          className={`absolute top-10 right-1/3 w-48 h-48 rounded-full blur-3xl opacity-3 ${isDarkMode ? "bg-purple-500" : "bg-purple-400"} `}
        />
      </motion.div>

      <div className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* main footer content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center space-y-8"
          >
            {/* logo and brand */}
            <motion.div variants={itemsVariants} className="space-y-4">
              <motion.div
                className="inline-flex items-center space-x-2 text-2xl font-medium "
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-blue-500"
                >
                  <Code2 size={28} />
                </motion.div>
                <span>Muhammad Ahmad Naveed</span>
              </motion.div>
              <motion.p
                variants={itemsVariants}
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"} max-w-md mx-auto`}
              >
                Crafting digital experiences with passion precision, and a touch
                of magic.
              </motion.p>
            </motion.div>

            {/* social links  */}
            <motion.div
              variants={itemsVariants}
              className="flex justify-center space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferre"
                  className={`p-3 rounded-full transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gray-800/50 hover:bg-gray-700/50"
                      : "bg-gray-100/50 hover:bg-gray-200/50"
                  } 
                               ${social.color}
                               backdrop-blur-sm 
                              `}
                  whileHover={{ scale: 1.1, y: -2, rotate: [0, -5, 5, 0] }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: index * 0.1 + 0.5,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <social.icons size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* divider */}
            <motion.div
              variants={itemsVariants}
              className="flex items-center justify-center space-x-4"
            >
              <div
                className={`h-px w-16 ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`}
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-red-500"
              >
                <Heart size={16} />
              </motion.div>
              <div
                className={`h-px w-16 ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`}
              />
            </motion.div>

            {/* copyRight */}
            <motion.div variants={itemsVariants} className="space-y-2">
              <p
                className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}
              >
                © {new Date().getFullYear()} Muhammad Ahmad Naveed. All rights
                reserved.
              </p>
              <p
                className={`text-xs ${isDarkMode ? "text-gray-600 " : "text-gray-500"}`}
              >
                Built with React & Frame Motion ● Designed with care
              </p>
            </motion.div>

            <motion.div variants={itemsVariants}>
              <motion.button
                onClick={scrollToTop}
                className={`cursor-pointer inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white"
                    : "bg-gray-100/50 hover:bg-gray-200/50 text-gray-600 hover:text-gray-900"
                } backdrop-blur-sm border ${
                  isDarkMode ? "border-gray-700" : "border-gray-300"
                }`}
                whileHover={{
                  y: -2,
                  scale: 1.05,
                  boxShadow: isDarkMode
                    ? "0 10px 25px rgba(59,130,246,0.15)"
                    : "0 10px 25px rgba(59,130,246,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp size={16} />
                <span>Back to top</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
