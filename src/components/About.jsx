import {
  FiCloud,
  FiDatabase,
  FiFacebook,
  FiGrid,
  FiLayers,
  FiLinkedin,
  FiMonitor,
  FiPhone,
  FiServer,
  FiShield,
  FiTwitter
} from 'react-icons/fi';

import { motion } from 'framer-motion';

const About = () => {
  const technologies = [
    { name: 'Enterprise Software', icon: FiServer, color: 'text-blue-500', description: 'Custom enterprise applications' },
    { name: 'Network Solutions', icon: FiGrid, color: 'text-green-400', description: 'Advanced networking infrastructure' },
    { name: 'IT Infrastructure', icon: FiMonitor, color: 'text-blue-400', description: 'Modern IT infrastructure setup' },
    { name: 'IT Consultancy', icon: FiShield, color: 'text-gray-700', description: 'Consult any about information technology' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-primary font-medium px-4 py-2 bg-primary/10 rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Empowering Enterprises with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Advanced Technology
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Provider of comprehensive enterprise technology solutions, driving innovation and growth for businesses in Ethiopia. At Viva Technology, we're dedicated to transforming businesses through innovative technology solutions. Our comprehensive suite of services is designed to optimize operations, enhance security, and drive sustainable growth in the digital age.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-4xl font-bold text-primary mb-2">3+</h4>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-4xl font-bold text-primary mb-2">5+</h4>
              <p className="text-gray-600">Enterprise Clients</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-4xl font-bold text-primary mb-2">10+</h4>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-4xl font-bold text-primary mb-2">24/7</h4>
              <p className="text-gray-600">Support</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Solutions</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to deliver enterprise-grade solutions that drive business success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className={`w-16 h-16 ${tech.color} bg-gray-50 rounded-full flex items-center justify-center mb-6`}>
                <tech.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{tech.name}</h4>
              <p className="text-gray-600 text-center">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;