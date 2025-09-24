"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: '0px 0px -20% 0px' });

  const skills = [
    {
      title: "Full-Stack Development",
      description: "Proficient in modern web technologies including Next.js, Node.js, Go, TypeScript and Rust."
    },
    {
      title: "DevOps & UI/UX Design",
      description: "Creating seamless, scalable deployments with CI/CD pipelines while designing intuitive, user-focused interfaces with precision and care."
    },
    {
      title: "Blockchain & Smart Contracts",
      description: "Laying the groundwork in Web3 with hands-on smart contract development and a growing understanding of decentralized technologies."
    },
    {
      title: "Collaboration & Fundraising",
      description: "Actively engaging in team collaborations and contributing to successful fundraising initiatives for innovative tech projects."
    }
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
    <section id="about" className="pb-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-10 md:mb-16">
            <h2 className="text-[34px] sm:text-[42px] md:text-[50px] text-dosis text-white tracking-[-0.05em] text-center pb-2 md:pb-4 max-w-3xl w-full px-2 sm:px-0 mx-auto">
              About Me
            </h2>
            <p className="text-sm sm:text-base text-dosis text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
              I'm a creative developer with 5+ years of experience in building digital products. I love turning complex problems into simple, beautiful solutions that make a difference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto relative overflow-hidden rounded-full glass pulse-glow">
                  <img src="/profile.png" alt="Profile" className="w-full h-full object-cover"/>
                  {/* <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-600/20 rounded-full" /> */}
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 sm:-inset-3 md:-inset-4 border-2 border-dashed border-blue-400/30 rounded-full"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <h3 className="tracking-[-0.05em] text-[20px] sm:text-[22px] md:text-[25px] text-white">Let me introduce myself</h3>
              <p className="tracking-[-0.02em] pb-2 sm:pb-4 text-dosis text-muted-foreground leading-relaxed max-w-3xl mx-auto text-sm sm:text-base px-2 sm:px-0">
                I'm <span className='font-bold text-white'>Sarthak karode</span>, B-Tech student at NIT Trichy. I build in public and a systems-oriented engineer focused on crafting impactful developer tools and modular infrastructure that scale across ecosystems. My work merges deep technical execution with a product-driven mindset — from designing intuitive DX-first tooling and publishing open-source packages, to leading GTM strategies, fundraising initiatives, and community adoption efforts. I thrive at the intersection of software architecture, developer experience, and global product growth — building with intent to empower the next generation of developers worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base px-2 sm:px-0">
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community through
                blogs and talks.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['React.js', 'Next.js', 'Node.js', 'Go', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'Rust', 'Solidity'].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1 }}
                    className="px-2 sm:px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs sm:text-sm border border-blue-500/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full glass border-0 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <h3 className="tracking-[-0.05em] text-center text-white pb-2 sm:pb-4 w-full mx-auto text-base sm:text-lg">
                      {skill.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;