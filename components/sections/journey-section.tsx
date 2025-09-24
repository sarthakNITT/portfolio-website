"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';

const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: '0px 0px -20% 0px' });

  const journeySteps = [
    {
      year: "2023",
      title: "B-Tech in Production Engineering",
      company: "NIT Trichy",
      type: "Education",
      description: "• Pursuing B-Tech with CS Minor, focusing on software development and algorithms.",
      skills: ["Data Structures", "Algorithms", "Web Development", "Database Design", "Computer Networks", "Operating Systems", "System Design"],
      color: "from-blue-400 to-blue-600"
    },
    {
      year: "2023-Present",
      title: "Consultant Role at World Quant",
      company: "WorldQuant @Brain",
      type: "Contract Work",
      description: "Secured Top 19th rank in WorldQuant Brain Alphathon competition, leading to consultant role with WorldQuant.",
      skills: ["Quantitative Finance", "Equity Research", "Consulting", "Investment Strategies"],
      color: "from-green-400 to-green-600"
    },
    {
      year: "2023-2024",
      title: "All-Stack Developer (Web & Mobile)",
      company: "100xCohort",
      type: "Education",
      description: "Leaned full-stack development with a focus on web and mobile applications, including React Native, Xcode, Android Studio.",
      skills: ["Node.js", "MongoDB", "React", "React Native", "postgreSQL", "Tailwind CSS", "Next.js", "prisma", "Flutter", "Swift", "kotlin"],
      color: "from-purple-400 to-purple-600"
    },
    {
      year: "2024-present",
      title: "Application Developer at Spider R&D",
      company: "Spider R&D",
      type: "Work",
      description: "Built and deployed scalable applications as part of a team in Spider R&D, contributing to end-to-end development and project execution.",
      skills: ["TypeScript", "AWS", "gRPC", "GraphQL", "Docker", "Kubernetes", "CI/CD", "Smart Contracts"],
      color: "from-orange-400 to-orange-600"
    },
    {
      year: "2024-Present",
      title: "Open Source Contributions & Bounty Hunting",
      company: "GitHub, Algora, GitCoin, Opire, IssueHunt",
      type: "Open Source",
      description: "Actively contributed to open-source projects by fixing bugs, adding features, and enhancing documentation. Earned my first dollar through bounty hunting by solving real-world challenges and shipping production-level fixes.",
      skills: ["GitHub", "Stripe", "Turborepo", "Docker", "CI/CD", "Node.js", "Open Source", "Typescript"],
      color: "from-pink-400 to-pink-600"
    },
    {
      year: "2025-Present",
      title: "Build Developer Tool",
      company: "NPM Registry",
      type: "Contract",
      description: "Built and published a developer tool (auto-dep-install) to automate dependency installation across projects. Learned to build in public, raised initial support from the dev community, and engaged in early conversations with VCs and open-source maintainers.",
      skills: ["Open Source","Developer Tools","NPM","Build in Public","CLI","Fundraising","VC Outreach"],      
      color: "from-pink-400 to-pink-600"
    },
    {
      year: "2025",
      title: "Developed and Deployed High-Speed Trading Platform",
      company: "Zerodha Coin",
      type: "Internship",
      description: "Built and deployed a high-performance trading website with advanced server optimizations, working with finance teams and BSE (Bombay Stock Exchange) to ensure low latency and reliability for real-time operations.",
      skills: ["Trading", "FinTech", "Performance Optimization", "Go", "Kubernetes", "docker", "BSE", "Web Development", "GRPC"],
      color: "from-pink-400 to-pink-600"
    },
    {
      year: "2025-present",
      title: "Started freelancing & Contract work",
      company: "Remote",
      type: "Freelance",
      description: "Took the leap into freelancing. Bguilt trust with first clients, delivered real-world projects, and learned end-to-end ownership from client calls to deployment.",
      skills: ["Freelancing", "Client Work", "Fullstack Development", "Deployment", "Remote Work"],
      color: "from-pink-400 to-pink-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: { duration: 2, ease: "easeInOut" }
    }
  };

  return (
    <section id="journey" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-10 md:mb-16">
            <h2 className="tracking-[-0.05em] text-center text-[34px] sm:text-[42px] md:text-[50px] text-white max-w-3xl w-full px-2 sm:px-0 mx-auto">
              My Journey
            </h2>
            <p className="tracking-[-0.02em] text-center text-white/70 pb-2 md:pb-4 max-w-3xl w-full px-2 sm:px-0 mx-auto text-sm sm:text-base">
              The path that led me to where I am today. Each step has been a learning
              experience that shaped my skills and perspective.
            </p>
          </motion.div>

            <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-muted md:left-1/2 md:transform md:-translate-x-0.5">
              <motion.div
                variants={lineVariants}
                className="w-full bg-gradient-to-b from-blue-400 to-purple-600 rounded-full"
              />
            </div>

            {/* Journey Steps */}
            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col gap-4 md:gap-8`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`absolute left-4 sm:left-8 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r ${step.color} border-4 border-background z-10 md:left-1/2 md:transform md:-translate-x-1/2`}
                  />

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 pl-12 sm:pl-20 md:pl-0 ${index % 2 === 0 ? '' : 'md:mr-0'}`}>
                    <Card className="glass border-0 hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">
                                {step.year}
                              </Badge>
                              <Badge variant='default'>
                                {step.type}
                              </Badge>
                            </div>
                            
                            <h3 className="text-base sm:text-lg font-bold mb-1 group-hover:text-blue-400 transition-colors">
                              {step.title}
                            </h3>
                            
                            <div className="flex items-center gap-1 text-muted-foreground mb-3">
                              <MapPin className="h-4 w-4" />
                              <span className="text-xs sm:text-sm">{step.company}</span>
                            </div>
                            
                            <p className="text-muted-foreground text-xs sm:text-sm mb-4">
                              {step.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                              {step.skills.map((skill, skillIndex) => (
                                <motion.span
                                  key={skillIndex}
                                  whileHover={{ scale: 1.05 }}
                                  className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-[10px] sm:text-xs border border-blue-500/20"
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Empty space for alignment on larger screens */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full">
              <Calendar className="h-5 w-5 text-blue-400" />
              <span className="text-sm">The journey continues...</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;