"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-[50px] text-dosis text-white tracking-[-0.05em] text-center pb-4 w-[50%] text-center mx-auto">
              About Me
            </h2>
            <p className="text-sm text-dosis text-muted-foreground max-w-3xl mx-auto">
              I'm a creative developer with 5+ years of experience in building digital products. I love turning complex problems into simple, beautiful solutions that make a difference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative overflow-hidden rounded-full glass pulse-glow">
                  <img
                    src="https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-600/20 rounded-full" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 border-2 border-dashed border-blue-400/30 rounded-full"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="tracking-[-0.05em] text-[25px] text-white">Let me introduce myself</h3>
              <p className="tracking-[-0.05em] pb-4 text-dosis text-muted-foreground leading-relaxed text-muted-foreground max-w-3xl mx-auto">
                I'm <span className='font-bold text-white'>Sarthak karode</span>, B-Tech student at NIT Trichy. I build in public and a systems-oriented engineer focused on crafting impactful developer tools and modular infrastructure that scale across ecosystems. My work merges deep technical execution with a product-driven mindset — from designing intuitive DX-first tooling and publishing open-source packages, to leading GTM strategies, fundraising initiatives, and community adoption efforts. I thrive at the intersection of software architecture, developer experience, and global product growth — building with intent to empower the next generation of developers worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community through
                blogs and talks.
              </p>
              <div className="flex flex-wrap gap-3">
                {['React.js', 'Next.js', 'Node.js', 'Go', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'Rust', 'Solidity'].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full glass border-0 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <h3 className="tracking-[-0.05em] text-center text-white pb-4 w-[50%] text-center mx-auto">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
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