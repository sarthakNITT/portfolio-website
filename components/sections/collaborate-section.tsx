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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "hello@example.com",
      action: "Send Email",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: MessageCircle,
      title: "Chat",
      description: "Let's have a conversation",
      action: "Start Chat",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Phone,
      title: "Call",
      description: "+1 (555) 123-4567",
      action: "Schedule Call",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: MapPin,
      title: "Location",
      description: "San Francisco, CA",
      action: "View Map",
      color: "from-orange-400 to-orange-600"
    }
  ];

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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Let's Collaborate
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm always excited to work on new projects and help bring ideas to life.
              Let's discuss how we can work together to create something amazing.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
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
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-400 to-purple-600 hover:from-blue-500 hover:to-purple-700 text-white border-0"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & Services */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Card className="glass border-0 cursor-pointer hover:shadow-lg transition-all duration-300 group">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${method.color} text-white`}>
                              <method.icon size={20} />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-sm group-hover:text-blue-400 transition-colors">
                                {method.title}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {method.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Services */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-6">Services I Offer</h3>
                <Card className="glass border-0">
                  <CardContent className="p-6">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {services.map((service, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex-shrink-0 group-hover:shadow-lg" />
                          <span className="text-sm group-hover:text-foreground transition-colors">
                            {service}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center justify-center w-12 h-12 glass rounded-full hover:shadow-lg transition-all duration-300 group"
                    >
                      <social.icon className="h-5 w-5 group-hover:text-blue-400 transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <Card className="glass border-0 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you need a website, mobile app, or technical consultation,
                  I'm here to help turn your ideas into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-400 to-purple-600 hover:from-blue-500 hover:to-purple-700 text-white border-0"
                  >
                    Start a Project
                  </Button>
                  <Button variant="outline" size="lg">
                    View Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaborateSection;