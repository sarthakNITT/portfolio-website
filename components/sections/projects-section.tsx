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
      title: "Auto-dep-install",
      description: "A Node.js command-line tool that automatically installs missing packages, updates outdated ones, and removes unused dependencies as you work.",
      image: "/auto-dep-install.png",
      tags: ["React", "Node.js", "React Native", "CLI Tool", "Package Management",  "Typescript", "NPM", "Yarn", "PNPM", "Dependency Management"],
      github: "https://github.com/sarthakNITT/auto-dep-install",
      live: "https://www.npmjs.com/package/auto-dep-install"
    },
    {
      title: "Canvas-draw",
      description: " A web-based drawing tool inspired by Excalidraw, featuring hand-drawn-style diagrams, freehand drawing, shape tools, undo/redo using Next.Js/TypeScript.",
      image: "/canvas.png",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Websocket", "TypeScript", "Tailwind CSS", "Realtime Collaboration", "Drawing Tool"],
      github: "https://github.com/sarthakNITT/canvas-app",
      live: "https://canvaslanding.vercel.app"
    },
    {
      title: "Crypto Vault",
      description: "A lightweight Solana wallet application that allows users to create wallets and accounts, manage tokens, and check balances seamlessly.",
      image: "/cryptoVault.png",
      tags: ["React.js", "Vite", "bip39", "ed25519-hd-key", "tweetnacl", "@solana/web3.js", "@solana/spl-token", "TailwindCss", "Typescript"],
      github: "https://github.com/sarthakNITT/Wallet-blockchain",
      live: "https://sarthakwallet.vercel.app"
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

          <div className="grid md:grid-cols-3 gap-8">
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
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0" onClick={() => window.open(project.github, "_blank")}>
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0" onClick={() => window.open(project.live, "_blank")}>
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
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;