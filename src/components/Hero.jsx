import { FiGlobe, FiShield, FiTrendingUp } from 'react-icons/fi';

import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 px-6 lg:px-12 py-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-12 w-72 h-72 bg-primary/15 rounded-full filter blur-3xl" />
        <div className="absolute top-1/3 -right-12 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-accent/15 rounded-full filter blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block text-primary font-medium px-6 py-2 bg-primary/10 rounded-full text-sm tracking-wide">
              Enterprise Technology Solutions in Ethiopia
            </span>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mt-4">
              Transforming Business Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Innovation
              </span>
            </h1>

            <p className="text-gray-700 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
              We provide cutting-edge technology solutions to help businesses thrive in the digital age.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg flex items-center gap-2 shadow-lg transition-all duration-300 hover:scale-105"
              >
                View Our Solutions
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                Contact Us
              </a>
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { icon: <FiGlobe />, text: 'National Reach' },
                { icon: <FiTrendingUp />, text: 'Proven Results' },
                { icon: <FiShield />, text: 'Enterprise Security' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex flex-col items-center p-5 rounded-xl bg-white shadow-md hover:shadow-xl transition-all"
                >
                  <div className="text-3xl text-primary mb-3">{feature.icon}</div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
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
              {/* Floating Elements */}
              <div className="absolute top-1/4 -right-8 w-20 h-20 bg-success/20 rounded-lg rotate-45 animate-pulse" />
              <div className="absolute bottom-1/4 -left-8 w-28 h-28 bg-warning/20 rounded-full animate-bounce" />
              
              {/* Glass Card */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/10 backdrop-blur-xl rounded-3xl shadow-lg border border-white/20 p-8 flex flex-col justify-center items-center text-center">
                <span className="text-6xl font-bold text-primary mb-3">5+</span>
                <span className="text-lg text-gray-900 font-semibold">Enterprise Clients</span>
                <span className="text-sm text-gray-600">Trusted by Industry Leaders</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
