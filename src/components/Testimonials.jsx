import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Esete Getachew',
      position: 'CEO & Founder of Ethiopian Kidney Care | NGO',
      image: 'assets/images/es.JPG', 
      content: ' I’m so impressed by your problem-solving skills. I look forward to working with you',
      rating: 5,
    },
    {
      name: 'Biruktawit Taye',
      position: 'Owner of " የእለት / yelet" Design',
      image: 'assets/images/bi.PNG', 
      content: 'Working with you was a pleasure. You turned my ideas into reality with skill and precision.',
      rating: 5,
    },
    {
      name: 'Dr. Wendatir Getaneh',
      position: 'Owner of BENA Dental clinic',
      image: 'assets/images/wo.PNG', 
      content: 'Your ability to understand my needs and deliver exactly what I wanted is commendable. Thank you!',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-tertiary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-title text-center mb-16">Client Testimonials</h2>
          
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary p-6 rounded-2xl shadow-xl h-full flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-textSecondary text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar
                        key={i}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  
                  <p className="text-textSecondary flex-grow">
                    "{testimonial.content}"
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style jsx>{`
        .testimonials-swiper {
          padding-bottom: 4rem;
        }
        .testimonials-swiper .swiper-pagination {
          bottom: 0;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          background: #64ffda;
          opacity: 0.5;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
