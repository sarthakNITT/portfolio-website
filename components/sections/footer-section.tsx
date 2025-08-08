"use client"

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Journey', href: '#journey' },
      { name: 'Contact', href: '#collaborate' }
    ],
    'Services': [
      { name: 'Web Development', href: '#' },
      { name: 'Mobile Apps', href: '#' },
      { name: 'Consulting', href: '#' },
      { name: 'Code Review', href: '#' }
    ],
    'Resources': [
      { name: 'Blog', href: '#' },
      { name: 'Newsletter', href: '#' },
      { name: 'Resume', href: '#' },
      { name: 'Testimonials', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-background border-t">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative container mx-auto px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
                Portfolio
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Creating exceptional digital experiences through innovative web development
                and thoughtful design. Let's build something amazing together.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-10 h-10 glass rounded-full hover:shadow-lg transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-muted-foreground hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-b py-8 mb-8"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
            <p className="text-muted-foreground mb-4">
              Get the latest updates on new projects and tech insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 glass rounded-lg border-0 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <motion.button
                className="text-[13px] px-3 py-2 border border-[rgba(28,28,28,0.2)] border-solid border-[1px] backdrop-blur-[20px] bg-gradient-to-b from-[rgba(51,51,51,0.2)] to-[rgba(31,31,31,0.2)] rounded-[8px] shadow-[rgba(18,73,176,0.65)_0px_0px_0px_-1.75px,rgba(18,73,176,0.3)_0px_0px_0px_-3.5px,rgba(204,209,217,0.18)_0px_0.602187px_0.602187px_-1.25px_inset,rgba(204,209,217,0.16)_0px_2.28853px_2.28853px_-2.5px_inset,rgba(204,209,217,0.06)_0px_10px_10px_-3.75px_inset,rgba(18,73,176,0.68)_0px_0.602187px_1.56569px_-1.16667px_inset,rgba(18,73,176,0.61)_0px_2.28853px_5.95019px_-2.33333px_inset,rgba(18,73,176,0.3)_0px_10px_26px_-3.5px_inset,rgba(18,73,176,0.44)_0px_-0.796192px_0.796192px_-0.6875px_inset,rgba(18,73,176,0.43)_0px_-2.41451px_2.41451px_-1.375px_inset,rgba(18,73,176,0.41)_0px_-6.38265px_6.38265px_-2.0625px_inset,rgba(18,73,176,0.36)_0px_-20px_20px_-2.75px_inset] opacity-100 transition-shadow transition-colors duration-[5000ms] delay-[5000ms] hover:shadow-[rgba(18,73,176,0.68)_0px_0.602187px_1.56569px_-1.16667px,rgba(18,73,176,0.61)_0px_2.28853px_5.95019px_-2.33333px,rgba(18,73,176,0.3)_0px_10px_26px_-3.5px,rgba(204,209,217,0.18)_0px_0.602187px_0.602187px_-1.25px_inset,rgba(204,209,217,0.16)_0px_2.28853px_2.28853px_-2.5px_inset,rgba(204,209,217,0.06)_0px_10px_10px_-3.75px_inset,rgba(18,73,176,0.65)_0px_0px_0px_-1.75px_inset,rgba(18,73,176,0.3)_0px_0px_0px_-3.5px_inset,rgba(18,73,176,0)_0px_-0.796192px_0.796192px_-0.6875px_inset,rgba(18,73,176,0)_0px_-2.41451px_2.41451px_-1.375px_inset,rgba(18,73,176,0)_0px_-6.38265px_6.38265px_-2.0625px_inset,rgba(18,73,176,0)_0px_-20px_20px_-2.75px_inset]"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  translateZ: 10
                }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
            </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center text-sm text-muted-foreground mb-4 md:mb-0"
          >
            <span>© {currentYear} Portfolio. Made with</span>
            <Heart className="h-4 w-4 text-red-400 mx-1" />
            <span>by Creative Developer</span>
          </motion.div>

          <div className="flex items-center space-x-4">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-10 h-10 glass rounded-full hover:shadow-lg transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
            </motion.button>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="hover:text-blue-400 transition-colors"
              >
                Privacy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="hover:text-blue-400 transition-colors"
              >
                Terms
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;