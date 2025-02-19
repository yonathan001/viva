import { FiClock, FiLinkedin, FiMail, FiMapPin, FiPhone, FiTwitter, FiInstagram} from 'react-icons/fi';

import Footer from './Footer';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Contact
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 max-w-2xl mx-auto"
              >
                Our team is here to help you navigate the digital landscape.
              </motion.p>
            </div>

            {/* Contact Grid */}
            <div className="flex justify-center">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8 w-full md:w-1/2"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <FiPhone className="text-primary w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Phone</h4>
                        <p className="text-gray-600"> +251914287268</p>
                        
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <FiMail className="text-primary w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Email</h4>
                        <p className="text-gray-600">vivatechnology11@gmail.com</p>
                        
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <FiMapPin className="text-primary w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Office Location</h4>
                        <p className="text-gray-600">N/A</p>
                     
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <FiClock className="text-primary w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Business Hours</h4>
                        <p className="text-gray-600"> 24/7</p>
                       
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-8 pt-8 border-t">
                    <h4 className="font-medium text-gray-900 mb-4">Connect With Us</h4>
                    <div className="flex space-x-4">
                      <a href="https://www.linkedin.com/company/vivatechnologies1/" className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors">
                        <FiLinkedin className="text-primary w-5 h-5" />
                      </a>
                      <a href="https://www.instagram.com/viva.technologies/" className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors">
                        <FiInstagram className="text-primary w-5 h-5" />
                      </a>
                      
      
                      
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
