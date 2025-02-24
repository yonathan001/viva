import { FiGlobe, FiShield, FiTrendingUp } from 'react-icons/fi';

import { FaArrowRight } from 'react-icons/fa';
import logo from '../assets/images/logoanim.PNG'; // Import your logo
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 mt-24"
    >
      {/* Animated Logo in the Middle */}
      <motion.img
        src={logo}
        alt="Viva Technology Logo"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 object-contain"
        initial={{ y: 0 }}
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8 text-center lg:text-left"
            >
              

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900"
              >
                Transforming Business Through{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Innovation
                </span>
              </motion.h1>

               {/* Viva Technology Tagline */}
               <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-blue-600 font-medium px-4 py-2 bg-blue-100 rounded-full"
              >
                viva technology 🇪🇹
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed"
              >
                Empowering businesses with cutting-edge technology solutions tailored to drive growth and efficiency.
              </motion.p>

             

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              >
                <a
                  href="#projects"
                  className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700"
                >
                  View Our Solutions
                  <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600/10 transition-colors text-center"
                >
                  Contact Us
                </a>
              </motion.div>

              {/* Feature badges */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col items-center p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <FiGlobe className="text-2xl text-blue-600 mb-2" />
                  <span className="text-sm font-medium text-gray-700">National Reach</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col items-center p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <FiTrendingUp className="text-2xl text-blue-600 mb-2" />
                  <span className="text-sm font-medium text-gray-700">Proven Results</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col items-center p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <FiShield className="text-2xl text-blue-600 mb-2" />
                  <span className="text-sm font-medium text-gray-700">Enterprise Security</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Hero Image/Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square">
                {/* Glass card */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/10 backdrop-blur-lg rounded-2xl shadow-glass border border-white/20 p-8 flex flex-col justify-center items-center text-center">
                  <span className="text-5xl font-bold text-blue-600 mb-4">5+</span>
                  <span className="text-lg text-gray-800 font-medium mb-2">Enterprise Clients</span>
                  <span className="text-sm text-gray-600">Trusted by Industry Leaders</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;