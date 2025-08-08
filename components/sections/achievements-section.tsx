"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Trophy, Users, Code } from 'lucide-react';

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const achievements = [
    {
      icon: Trophy,
      title: "Hackathon Winner",
      description: "First place in TechCrunch Disrupt Hackathon 2023",
      year: "2023",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Award,
      title: "AWS Certified",
      description: "AWS Solutions Architect Professional Certification",
      year: "2023",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Users,
      title: "Community Leader",
      description: "Led a team of 15+ developers in open source project",
      year: "2022",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Code,
      title: "10k+ GitHub Stars",
      description: "Accumulated over 10,000 stars across repositories",
      year: "2022",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "10k+", label: "Lines of Code" }
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
    <section id="achievements" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Some milestones and recognitions I've earned throughout my journey
              as a developer and community member.
            </p>
          </motion.div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass border-0 text-center p-6 hover:shadow-lg transition-all duration-300">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full glass border-0 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${achievement.color} text-white flex-shrink-0`}
                      >
                        <achievement.icon size={24} />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors">
                            {achievement.title}
                          </h3>
                          <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full">
              <Trophy className="h-5 w-5 text-yellow-400" />
              <span className="text-sm">More achievements coming soon...</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;