"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';

const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const journeySteps = [
    {
      year: "2019",
      title: "Computer Science Degree",
      company: "State University",
      type: "education",
      icon: GraduationCap,
      description: "Graduated with honors in Computer Science, specializing in web technologies and algorithms.",
      skills: ["Data Structures", "Algorithms", "Web Development", "Database Design"],
      color: "from-blue-400 to-blue-600"
    },
    {
      year: "2019-2020",
      title: "Junior Frontend Developer",
      company: "StartupTech Inc.",
      type: "work",
      icon: Briefcase,
      description: "Built responsive web applications using React and collaborated with UX designers.",
      skills: ["React", "JavaScript", "HTML/CSS", "Git"],
      color: "from-green-400 to-green-600"
    },
    {
      year: "2020-2022",
      title: "Full-Stack Developer",
      company: "Digital Solutions Co.",
      type: "work",
      icon: Briefcase,
      description: "Developed end-to-end web applications and led a team of 3 junior developers.",
      skills: ["Node.js", "MongoDB", "React", "Team Leadership"],
      color: "from-purple-400 to-purple-600"
    },
    {
      year: "2022-2023",
      title: "Senior Frontend Engineer",
      company: "TechCorp Global",
      type: "work",
      icon: Briefcase,
      description: "Architected scalable frontend solutions and mentored junior developers.",
      skills: ["Next.js", "TypeScript", "AWS", "Mentoring"],
      color: "from-orange-400 to-orange-600"
    },
    {
      year: "2023-Present",
      title: "Lead Developer & Consultant",
      company: "Freelance",
      type: "work",
      icon: Briefcase,
      description: "Leading development teams and providing technical consultation for various clients.",
      skills: ["Technical Leadership", "Consulting", "Architecture", "Strategy"],
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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              My Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The path that led me to where I am today. Each step has been a learning
              experience that shaped my skills and perspective.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-muted md:left-1/2 md:transform md:-translate-x-0.5">
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
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`absolute left-8 w-4 h-4 rounded-full bg-gradient-to-r ${step.color} border-4 border-background z-10 md:left-1/2 md:transform md:-translate-x-1/2`}
                  />

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? '' : 'md:mr-0'}`}>
                    <Card className="glass border-0 hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <motion.div
                            whileHover={{ rotate: 5 }}
                            className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} text-white flex-shrink-0`}
                          >
                            <step.icon size={24} />
                          </motion.div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">
                                {step.year}
                              </Badge>
                              <Badge variant={step.type === 'education' ? 'secondary' : 'default'}>
                                {step.type === 'education' ? 'Education' : 'Work'}
                              </Badge>
                            </div>
                            
                            <h3 className="text-lg font-bold mb-1 group-hover:text-blue-400 transition-colors">
                              {step.title}
                            </h3>
                            
                            <div className="flex items-center gap-1 text-muted-foreground mb-3">
                              <MapPin className="h-4 w-4" />
                              <span className="text-sm">{step.company}</span>
                            </div>
                            
                            <p className="text-muted-foreground text-sm mb-4">
                              {step.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                              {step.skills.map((skill, skillIndex) => (
                                <motion.span
                                  key={skillIndex}
                                  whileHover={{ scale: 1.05 }}
                                  className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs border border-blue-500/20"
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