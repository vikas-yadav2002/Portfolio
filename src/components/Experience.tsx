import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experiences, education } from '../data';

const Experience: React.FC = () => {
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
      id="experience"
      className="py-20 bg-gradient-to-b from-dark/70 to-dark/60"
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
              Experience & <span className="text-primary-400">Education</span>
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              My professional journey and educational background.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-8">
                <Briefcase className="text-primary-400 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-white">Work Experience</h3>
              </div>

              <div className="relative pl-8 border-l-2 border-gray-700">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className={`relative mb-12 ${index === experiences.length - 1 ? '' : ''}`}
                  >
                    <div className="absolute -left-[41px] w-20 h-20 rounded-full bg-dark/80 border-4 border-gray-700 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                        <span className="text-primary-400 font-bold">{experiences.length - index}</span>
                      </div>
                    </div>
                    <div className="bg-dark/50 rounded-xl p-6 border border-gray-800 ml-6 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                        <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                        <span className="text-primary-400 font-mono text-sm">{exp.duration}</span>
                      </div>
                      <p className="text-gray-400 mb-4">{exp.company}</p>
                      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-primary-500/20 text-primary-400 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-8">
                <GraduationCap className="text-primary-400 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="relative pl-8 border-l-2 border-gray-700">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    variants={itemVariants}
                    className={`relative mb-12 ${index === education.length - 1 ? '' : ''}`}
                  >
                    <div className="absolute -left-[41px] w-20 h-20 rounded-full bg-dark/80 border-4 border-gray-700 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                        <span className="text-primary-400 font-bold">{education.length - index}</span>
                      </div>
                    </div>
                    <div className="bg-dark/50 rounded-xl p-6 border border-gray-800 ml-6 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                        <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                        <span className="text-primary-400 font-mono text-sm">{edu.duration}</span>
                      </div>
                      <p className="text-gray-400 mb-4">{edu.institution}</p>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;