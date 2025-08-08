"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Zap, Target } from 'lucide-react';

const ComingUpSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const upcomingProjects = [
    {
      title: "AI-Powered Code Review Tool",
      description: "Building an intelligent code review assistant using machine learning to help developers write better code.",
      timeline: "Q2 2024",
      status: "In Progress",
      progress: 75,
      icon: Zap,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Open Source Design System",
      description: "Creating a comprehensive design system library for React applications with accessibility in mind.",
      timeline: "Q3 2024",
      status: "Planning",
      progress: 25,
      icon: Target,
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Developer Conference Talk",
      description: "Speaking at ReactConf about 'The Future of Web Development' and modern JavaScript frameworks.",
      timeline: "September 2024",
      status: "Scheduled",
      progress: 100,
      icon: Calendar,
      color: "from-green-400 to-green-600"
    }
  ];

  const goals = [
    "Launch 3 major open source projects",
    "Contribute to 50+ repositories",
    "Mentor 10 junior developers",
    "Speak at 5 tech conferences",
    "Write 20 technical blog posts",
    "Build a SaaS product from scratch"
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
    <section id="coming-up" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Coming Up Next
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Exciting projects and initiatives I'm working on or planning for the near future.
              Stay tuned for updates!
            </p>
          </motion.div>

          {/* Upcoming Projects */}
          <div className="space-y-8 mb-16">
            {upcomingProjects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass border-0 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} text-white flex-shrink-0`}
                      >
                        <project.icon size={28} />
                      </motion.div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {project.timeline}
                            </Badge>
                            <Badge 
                              variant={project.status === 'In Progress' ? 'default' : project.status === 'Scheduled' ? 'secondary' : 'outline'}
                              className={project.status === 'In Progress' ? 'bg-green-500/10 text-green-400 border-green-500/20' : ''}
                            >
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">
                          {project.description}
                        </p>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{project.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <motion.div
                              className={`h-full rounded-full bg-gradient-to-r ${project.color}`}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${project.progress}%` } : { width: 0 }}
                              transition={{ delay: index * 0.2, duration: 1 }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* 2024 Goals */}
          <motion.div variants={itemVariants}>
            <Card className="glass border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    2024 Goals
                  </span>
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {goals.map((goal, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex-shrink-0 group-hover:shadow-lg"
                      />
                      <span className="text-sm group-hover:text-foreground transition-colors">
                        {goal}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingUpSection;