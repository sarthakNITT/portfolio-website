"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageCircle, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const CollaborateSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="tracking-[-0.05em] text-center text-[50px] text-white w-[50%] text-center mx-auto">
              Let's Collaborate
            </h2>
            <p className="tracking-[-0.05em] text-center text-white/70 pb-4 w-[50%] text-center mx-auto">
              I'm always excited to work on new projects and help bring ideas to life.
              Let's discuss how we can work together to create something amazing.
            </p>
          </motion.div>

          <div className="gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="glass border-0 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <Input placeholder="Your name" className="glass border-0" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input type="email" placeholder="your@email.com" className="glass border-0" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Input placeholder="Project discussion" className="glass border-0" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        placeholder="Tell me about your project or idea..."
                        className="glass border-0 min-h-[120px]"
                      />
                    </div>
                    <motion.button
                      className="text-[13px] w-full px-3 py-2 border border-[rgba(28,28,28,0.2)] border-solid border-[1px] backdrop-blur-[20px] bg-gradient-to-b from-[rgba(51,51,51,0.2)] to-[rgba(31,31,31,0.2)] rounded-[8px] shadow-[rgba(18,73,176,0.65)_0px_0px_0px_-1.75px,rgba(18,73,176,0.3)_0px_0px_0px_-3.5px,rgba(204,209,217,0.18)_0px_0.602187px_0.602187px_-1.25px_inset,rgba(204,209,217,0.16)_0px_2.28853px_2.28853px_-2.5px_inset,rgba(204,209,217,0.06)_0px_10px_10px_-3.75px_inset,rgba(18,73,176,0.68)_0px_0.602187px_1.56569px_-1.16667px_inset,rgba(18,73,176,0.61)_0px_2.28853px_5.95019px_-2.33333px_inset,rgba(18,73,176,0.3)_0px_10px_26px_-3.5px_inset,rgba(18,73,176,0.44)_0px_-0.796192px_0.796192px_-0.6875px_inset,rgba(18,73,176,0.43)_0px_-2.41451px_2.41451px_-1.375px_inset,rgba(18,73,176,0.41)_0px_-6.38265px_6.38265px_-2.0625px_inset,rgba(18,73,176,0.36)_0px_-20px_20px_-2.75px_inset] opacity-100 transition-shadow transition-colors duration-[5000ms] delay-[5000ms] hover:shadow-[rgba(18,73,176,0.68)_0px_0.602187px_1.56569px_-1.16667px,rgba(18,73,176,0.61)_0px_2.28853px_5.95019px_-2.33333px,rgba(18,73,176,0.3)_0px_10px_26px_-3.5px,rgba(204,209,217,0.18)_0px_0.602187px_0.602187px_-1.25px_inset,rgba(204,209,217,0.16)_0px_2.28853px_2.28853px_-2.5px_inset,rgba(204,209,217,0.06)_0px_10px_10px_-3.75px_inset,rgba(18,73,176,0.65)_0px_0px_0px_-1.75px_inset,rgba(18,73,176,0.3)_0px_0px_0px_-3.5px_inset,rgba(18,73,176,0)_0px_-0.796192px_0.796192px_-0.6875px_inset,rgba(18,73,176,0)_0px_-2.41451px_2.41451px_-1.375px_inset,rgba(18,73,176,0)_0px_-6.38265px_6.38265px_-2.0625px_inset,rgba(18,73,176,0)_0px_-20px_20px_-2.75px_inset]"
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 5,
                        rotateX: 5,
                        translateZ: 10
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Message
                    </motion.button>
                  </form>
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