import { motion, AnimatePresence } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { useState, useEffect } from 'react';
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, 
  SiVuedotjs, SiTypescript, SiJavascript, SiTailwindcss, SiMongodb,
  SiExpress, SiDocker, SiGraphql, SiRedis, SiRust, SiGo, SiSolana,
  SiPython, SiKubernetes, SiGit, SiGithub, SiAngular, SiFlutter, 
  SiSwift, SiKotlin, SiPhp, SiAmazon, SiEthereum, SiBitcoin
} from 'react-icons/si';
import { Cloud, Code, Cpu, Database, Server, Workflow } from 'lucide-react';

type IconData = {
  Icon: any;
  color: string;
  name: string;
};

type CategoryKey = 'Full Stack Applications' | 'Developer Tools' | 'DApps' | 'DevOps';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if screen is mobile/tablet
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const iconCategories: Record<CategoryKey, IconData[]> = {
    'Full Stack Applications': [
      { Icon: SiReact, color: "#61DAFB", name: "React" },
      { Icon: SiNextdotjs, color: "#FFFFFF", name: "Next.js" },
      { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
      { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
      { Icon: SiPostgresql, color: "#336791", name: "PostgreSQL" },
      { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
      { Icon: SiExpress, color: "#FFFFFF", name: "Express" },
      { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" }
    ],
    'Developer Tools': [
      { Icon: Code, color: "#007ACC", name: "VS Code" },
      { Icon: SiGit, color: "#F05032", name: "Git" },
      { Icon: SiGithub, color: "#FFFFFF", name: "GitHub" },
      { Icon: SiDocker, color: "#2496ED", name: "Docker" },
      { Icon: Database, color: "#336791", name: "Database" },
      { Icon: Server, color: "#FF6B6B", name: "Server" },
      { Icon: SiPython, color: "#3776AB", name: "Python" },
      { Icon: Workflow, color: "#4CAF50", name: "Workflow" }
    ],
    'DApps': [
      { Icon: SiSolana, color: "#9945FF", name: "Solana" },
      { Icon: SiEthereum, color: "#627EEA", name: "Ethereum" },
      { Icon: SiBitcoin, color: "#F7931A", name: "Bitcoin" },
      { Icon: SiRust, color: "#FFFFFF", name: "Rust" },
      { Icon: SiReact, color: "#61DAFB", name: "React" },
      { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
      { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
      { Icon: Cloud, color: "#FF9900", name: "Web3" }
    ],
    'DevOps': [
      { Icon: SiDocker, color: "#2496ED", name: "Docker" },
      { Icon: SiKubernetes, color: "#326CE5", name: "Kubernetes" },
      { Icon: SiAmazon, color: "#FF9900", name: "AWS" },
      { Icon: Cloud, color: "#4CAF50", name: "Cloud" },
      { Icon: SiGit, color: "#F05032", name: "Git" },
      { Icon: Server, color: "#FF6B6B", name: "Server" },
      { Icon: Database, color: "#336791", name: "Database" },
      { Icon: Workflow, color: "#9C27B0", name: "CI/CD" }
    ]
  };

  // Get ALL icons from every category
  const allIcons: IconData[] = [
    ...iconCategories['Full Stack Applications'],
    ...iconCategories['Developer Tools'], 
    ...iconCategories['DApps'],
    ...iconCategories['DevOps']
  ];

  // Remove duplicates based on name but keep all unique technologies
  const uniqueIcons = allIcons.filter((icon, index, self) => 
    index === self.findIndex(i => i.name === icon.name)
  );

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-1000">
      {/* Desktop Layout: Positioned Icons */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {uniqueIcons.map((icon: IconData, index: number) => {
            // Safe positions that won't go off screen - adjusted for desktop
            const positions = [
              // Left side positions (safe margins)
              { x: 8, y: 15 },   { x: 12, y: 25 },  { x: 6, y: 35 },   { x: 14, y: 45 },
              { x: 10, y: 55 },  { x: 16, y: 65 },  { x: 7, y: 75 },   { x: 13, y: 85 },
              
              // Right side positions (safe margins)
              { x: 92, y: 12 },  { x: 88, y: 22 },  { x: 94, y: 32 },  { x: 86, y: 42 },
              { x: 90, y: 52 },  { x: 84, y: 62 },  { x: 93, y: 72 },  { x: 87, y: 82 },
              
              // Additional safe positions
              { x: 18, y: 18 },  { x: 82, y: 18 },  { x: 15, y: 38 },  { x: 85, y: 38 },
              { x: 20, y: 58 },  { x: 80, y: 58 },  { x: 17, y: 78 },  { x: 83, y: 78 }
            ];
            
            const pos = positions[index % positions.length];
            
            return (
              <motion.div
                key={`desktop-icon-${icon.name}-${index}`}
                className="absolute w-12 h-12 bg-gradient-to-br from-dark-700/90 to-dark-800/90 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/30 pointer-events-auto"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  transform: 'translate(-50%, -50%)',
                  color: icon.color,
                  zIndex: 10
                }}
                initial={{ 
                  scale: 0, 
                  opacity: 0
                }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  y: [0, -8, 0] // Continuous bouncing
                }}
                transition={{ 
                  scale: { duration: 0.6, delay: 1 + index * 0.05 },
                  opacity: { duration: 0.6, delay: 1 + index * 0.05 },
                  y: { 
                    duration: 2.5 + (index * 0.1), 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1.5 + index * 0.05
                  }
                }}
                whileHover={{ 
                  scale: 1.2,
                  y: -12,
                  boxShadow: `0 10px 25px ${icon.color}40`
                }}
              >
                <icon.Icon size={20} className="drop-shadow-lg" />
                <div className="absolute top-14 left-1/2 transform -translate-x-1/2 text-xs text-white/80 font-medium whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity bg-dark-800/90 px-2 py-1 rounded border border-white/20">
                  {icon.name}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
      
      {/* Mobile/Tablet Layout: Flowing Background Icons */}
      {isMobile && (
        <div className="absolute inset-0 overflow-hidden lg:hidden">
          {uniqueIcons.map((icon: IconData, index: number) => (
            <motion.div
              key={`mobile-icon-${icon.name}-${index}`}
              className="absolute opacity-20 hover:opacity-60 transition-opacity duration-300 pointer-events-none"
              style={{ 
                top: `${Math.random() * 80 + 10}%`,
                left: `-60px`,
                color: icon.color,
                fontSize: `${Math.random() * 15 + 25}px`
              }}
              animate={{
                x: [0, window.innerWidth + 100],
                y: [0, Math.sin(index) * 30],
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 15 + Math.random() * 8,
                repeat: Infinity,
                delay: index * 0.5,
                ease: "linear"
              }}
            >
              <icon.Icon className="animate-3d-float" />
            </motion.div>
          ))}
        </div>
      )}
      
      <div className="container mx-auto px-6 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="transform-3d"
        >
          <motion.div
            className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-white block mb-2">Hi, I'm</span>
            <div className="text-primary h-16 flex items-center justify-center">
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Developer',
                    'DevOps Engineer', 
                    'Cloud Architect',
                    'Web3 Developer'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 100,
                  cursor: '|'
                }}
              />
            </div>
          </motion.div>
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Building scalable applications and infrastructure with cutting-edge technologies
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.button
              onClick={() => scrollToSection("#projects")}
              className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform-3d"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                translateZ: 10
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform-3d"
              whileHover={{ 
                scale: 1.05,
                rotateY: -5,
                rotateX: 5,
                translateZ: 10
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
