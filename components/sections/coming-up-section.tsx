"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Zap, Target } from 'lucide-react';

const ComingUpSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: '0px 0px -20% 0px' });

  const upcomingProjects = [
    {
      title: "Meet-all",
      description: "A real-time communication platform where users can talk with multiple people, chat, share files, and present their screen.",
      timeline: "2026",
      status: "In Progress",
      progress: 25,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: " Dev Error Tracker CLI - NPM Tool for Debug Logging",
      description: "Creating an open-source CLI tool that auto-logs errors, tracks code changes, and documents debugging workflows in real time. Designed for developer productivity and open collaboration. Grew organically through build-in-public efforts, with support from early contributors and community-driven feedback.",
      timeline: "2026",
      status: "Planning",
      progress: 10,
      color: "from-blue-400 to-blue-600"
    },
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
    <section id="coming-up" className="pt-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-10 md:mb-16">
            <h2 className="tracking-[-0.05em] text-center text-[34px] sm:text-[42px] md:text-[50px] text-white max-w-3xl w-full px-2 sm:px-0 mx-auto">
              Coming Up Next
            </h2>
            <p className="tracking-[-0.02em] text-center text-white/70 pb-2 md:pb-4 max-w-3xl w-full px-2 sm:px-0 mx-auto text-sm sm:text-base">
              Exciting projects and initiatives I'm working on or planning for the near future.
              Stay tuned for updates!
            </p>
          </motion.div>

          {/* Upcoming Projects */}
          <div className="space-y-8 mb-16">
            {upcomingProjects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass border-0 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-6">
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <h3 className="text-lg sm:text-xl font-bold group-hover:text-blue-400 transition-colors">
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
                        
                        <p className="text-muted-foreground mb-4 text-sm">
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
        </motion.div>
      </div>
    </section>
  );
};

export default ComingUpSection;