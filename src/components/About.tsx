import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, Phone, Calendar } from 'lucide-react';
import { personalInfo } from '../data';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-dark to-dark/90"
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
              About <span className="text-primary-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Here you'll find more information about me, what I do, and my current skills in terms of programming and technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6">Get to know me!</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm a <strong className="text-primary-400">Full Stack Web Developer</strong> building the Front-end and Back-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                </p>
                <p>
                  I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to connect or follow me on my LinkedIn where I post useful content related to Web Development and Programming.
                </p>
                <p>
                  I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                </p>
              </div>
              <motion.div
                variants={itemVariants}
                className="mt-8"
              >
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-300 transform hover:scale-105"
                >
                  Contact Me
                </a>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6">Personal Information</h3>
              <div className="bg-dark/50 rounded-xl p-6 border border-gray-800">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mr-4">
                      <MapPin className="text-primary-400" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white">{personalInfo.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mr-4">
                      <Mail className="text-primary-400" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white">{personalInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mr-4">
                      <Phone className="text-primary-400" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white">{personalInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mr-4">
                      <Calendar className="text-primary-400" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Availability</p>
                      <p className="text-white">{personalInfo.availability}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;