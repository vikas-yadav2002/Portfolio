import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { socialLinks, personalInfo } from '../data';

const Footer: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'mail':
        return <Mail size={20} />;
      default:
        return null;
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <motion.a
              href="#home"
              className="text-3xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary-400">{'<'}</span>
              Vikas Yadav
              <span className="text-primary-400">{'/>'}</span>
            </motion.a>

            <div className="flex space-x-6 mb-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark/80 border border-gray-700 flex items-center justify-center text-gray-300 hover:text-primary-400 hover:border-primary-500 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  {getIcon(link.icon)}
                </motion.a>
              ))}
            </div>

            <div className="w-full h-px bg-gray-800 mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#experience" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                      Experience
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400">
                    {personalInfo.location}
                  </li>
                  <li>
                    <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                      {personalInfo.email}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${personalInfo.phone}`} className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                      {personalInfo.phone}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center text-gray-400">
              <p className="flex items-center justify-center">
                © {currentYear} {personalInfo.name}. All rights reserved. Made with <Heart className="mx-1 text-red-500" size={16} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;