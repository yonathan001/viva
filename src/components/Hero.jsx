import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { FiShield, FiTrendingUp, FiGlobe } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 mt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-1/3 -right-12 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-secondary/15 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

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
              <motion.span 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-primary font-medium px-4 py-2 bg-primary/10 rounded-full"
              >
                Enterprise Technology Solutions in Ethiopia 
               
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl font-bold tracking-tight"
              >
                Transforming Business Through{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Innovation
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed"
              >
             
                
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              >
                <a
                  href="#projects"
                  className="group w-full sm:w-auto px-8 py-4 bg-primary hover:bg-secondary text-white rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View Our Solutions
                  <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-center"
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
                  <FiGlobe className="text-2xl text-primary mb-2" />
                  <span className="text-sm font-medium">National Reach</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col items-center p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <FiTrendingUp className="text-2xl text-primary mb-2" />
                  <span className="text-sm font-medium">Proven Results</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col items-center p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <FiShield className="text-2xl text-primary mb-2" />
                  <span className="text-sm font-medium">Enterprise Security</span>
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
               
                {/* Decorative elements */}
                <div className="absolute top-1/4 -right-8 w-24 h-24 bg-success/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-1/4 -left-8 w-32 h-32 bg-warning/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
                
                {/* Glass card */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/10 backdrop-blur-lg rounded-2xl shadow-glass border border-white/20 p-8 flex flex-col justify-center items-center text-center">
                  <span className="text-5xl font-bold text-primary mb-4">5+</span>
                  <span className="text-lg text-gray-800 font-medium mb-2">Enterprise Clients</span>
                  <span className="text-sm text-gray-600">Trusted by Industry Leaders</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
     
    </section>
  );
};

export default Hero;
