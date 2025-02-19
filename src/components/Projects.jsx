import { FiServer, FiCloud, FiShield, FiDatabase, FiMonitor, FiSmartphone } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Projects = () => {
  const services = [
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive enterprise software solutions tailored to streamline your business operations and boost productivity.',
      icon: FiServer,
      features: ['Custom softwares', 'Workflow Automation'],
    },
    
 
    {
      title: 'Data Management',
      description: 'Efficient data management solutions to help you make informed business decisions.',
      icon: FiDatabase,
      features: ['Database Design', 'Database management'],
    },
    {
      title: 'IT Infrastructure',
      description: 'Modern IT infrastructure solutions to build a robust foundation for your business.',
      icon: FiMonitor,
      features: ['Network Design', 'IT Consulting', '24/7 Support'],
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16">Our Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <service.icon className="text-2xl text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
