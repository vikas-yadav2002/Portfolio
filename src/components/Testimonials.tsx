import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-dark/60 to-dark/50"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Client <span className="text-primary-400">Testimonials</span>
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              What people say about working with me.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative bg-dark/50 rounded-xl p-8 border border-gray-800 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 max-w-4xl mx-auto"
          >
            <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center">
              <Quote className="text-white" size={20} />
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary-500/30 flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-gray-300 text-lg italic mb-6">
                  "{testimonials[currentIndex].testimonial}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary-400">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-dark/80 flex items-center justify-center text-white hover:bg-primary-500 transition-colors duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentIndex
                        ? 'bg-primary-500'
                        : 'bg-gray-600 hover:bg-primary-400'
                    } transition-colors duration-300`}
                  ></button>
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-dark/80 flex items-center justify-center text-white hover:bg-primary-500 transition-colors duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;