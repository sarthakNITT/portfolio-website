"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts and data visualization.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500",
      tags: ["Vue.js", "Chart.js", "REST API", "PWA"],
      github: "#",
      live: "#"
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with interactive charts.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500",
      tags: ["React", "D3.js", "Python", "FastAPI"],
      github: "#",
      live: "#"
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
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="tracking-[-0.05em] text-center text-[50px] text-white w-[50%] text-center mx-auto">
              My Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full glass border-0 overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-white font-desis pb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground font-desis text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-[10px] border border-blue-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
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
              View All Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;