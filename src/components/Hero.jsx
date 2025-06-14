import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import PIC from '../assets/me.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-4 left-2 w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-4 right-2 w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 bg-purple-200/20 dark:bg-purple-700/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">
                Mihiran Samarasinghe
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4"
            >
              Software Developer | UI/UX Designer | DevOps Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 mb-6 max-w-sm sm:max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Passionate about creating exceptional digital experiences through clean code, 
              intuitive design, and robust infrastructure. Let's build something amazing together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-row gap-4 items-center justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                className="inline-flex items-center px-5 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-800 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              >
                <Download className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                Download CV
              </motion.a>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="inline-flex items-center px-5 sm:px-6 py-3 sm:py-4 border-2 border-blue-800 text-blue-800 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 cursor-pointer text-sm sm:text-base"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enlarged Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-br from-blue-700 to-blue-900 p-2">
                <img
                  src={PIC}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 sm:-inset-6 rounded-full blur opacity-20"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link to="about" smooth={true} duration={500}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer p-2 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm"
          >
            <ArrowDown className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 dark:text-gray-400" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
