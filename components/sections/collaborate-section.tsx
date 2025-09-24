"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react';

const CollaborateSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: '0px 0px -20% 0px' });

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "Technical Consulting",
    "Code Review & Auditing",
    "Team Training",
    "Architecture Planning"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="collaborate" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-10 md:mb-16">
            <h2 className="tracking-[-0.05em] text-center text-[34px] sm:text-[42px] md:text-[50px] text-white max-w-3xl w-full px-2 sm:px-0 mx-auto">
              Let's Collaborate
            </h2>
            <p className="tracking-[-0.02em] text-center text-white/70 pb-2 md:pb-4 max-w-3xl w-full px-2 sm:px-0 mx-auto text-sm sm:text-base">
              I'm always excited to work on new projects and help bring ideas to life.
              Let's discuss how we can work together to create something amazing.
            </p>
          </motion.div>

          <div className="gap-12">
            <motion.div variants={itemVariants}>
              <Card className="glass border-0 h-full">
                <CardContent className="p-4 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get in Touch</h3>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-white/90">
                      <Mail className="w-5 h-5" />
                      <span className="text-sm sm:text-base select-all">sarthakkarodework@gmail.com</span>
                    </div>
                    <motion.button
                      onClick={() => {
                        const to = 'sarthakkarodework@gmail.com';
                        const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`;
                        window.open(url, '_blank', 'noopener');
                      }}
                      className="gap-1 flex flex-row items-center px-3 py-2 text-[13px] border border-[rgba(28,28,28,0.2)] border-solid border-[1px] backdrop-blur-[20px] bg-gradient-to-b from-[rgba(69,69,69,0.2)] to-[rgb(31,31,31)] rounded-[8px] shadow-[rgba(72,88,138,0.68)_0px_0.602187px_1.56569px_-1.16667px_inset,rgba(72,88,138,0.61)_0px_2.28853px_5.95019px_-2.33333px_inset,rgba(72,88,138,0.3)_0px_10px_26px_-3.5px_inset,rgba(204,209,217,0.18)_0px_0.602187px_0.602187px_-1.25px_inset,rgba(204,209,217,0.16)_0px_2.28853px_2.28853px_-2.5px_inset,rgba(204,209,217,0.06)_0px_10px_10px_-3.75px_inset,rgba(72,88,138,0.65)_0px_0px_0px_-1.75px,rgba(72,88,138,0.3)_0px_0px_0px_-3.5px,rgba(72,88,138,0.58)_0px_-0.796192px_0.796192px_-0.9375px_inset,rgba(72,88,138,0.55)_0px_-2.41451px_2.41451px_-1.875px_inset,rgba(72,88,138,0.47)_0px_-6.38265px_6.38265px_-2.8125px_inset,rgba(72,88,138,0.2)_0px_-20px_20px_-3.75px_inset] opacity-100"
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: -5,
                        rotateX: 5,
                        translateZ: 10
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send mail to Sarthak Karode
                      <Send className="w-4 h-4" />
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaborateSection;