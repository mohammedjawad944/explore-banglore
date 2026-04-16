import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  MessageSquare, 
  X, 
  Send,
  ChevronRight,
  Terminal,
  User,
  Layers,
  Briefcase,
  Activity
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Types ---
interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
}

interface Project {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  tags: string[];
  link: string;
  github?: string;
  image: string;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: 'Frontend' | 'Backend' | 'Tools' | 'AI';
}

// --- Data ---
const EXPERIENCE: Experience[] = [
  {
    company: "Indian Institute of Embedded Systems (IIES)",
    role: "Embedded Systems Intern",
    period: "Present",
    description: "Focusing on firmware development and hardware-software integration. Working with microcontrollers like ESP32 and Arduino to build robust IoT solutions and automated systems.",
    skills: ["Firmware Dev", "ESP32", "Arduino", "IoT", "C"]
  },
  {
    company: "Mindmatrix",
    role: "Android App Development Intern",
    period: "Present",
    description: "Developing AI-assisted Android applications. Leveraging modern mobile development frameworks and integrating AI capabilities to enhance user experience and application functionality.",
    skills: ["Android Studio", "Java/Kotlin", "AI Integration", "Mobile UI"]
  }
];

const PROJECTS: Project[] = [
  {
    title: "Explore Bangalore City",
    description: "A comprehensive web guide to exploring the vibrant city of Bangalore, featuring key landmarks and cultural spots.",
    longDescription: "Explore Bangalore City is a dedicated web platform designed to help tourists and locals discover the best of Bangalore. It provides curated lists of historical landmarks, parks, shopping districts, and culinary hotspots.",
    features: [
      "Curated landmark listings",
      "Interactive UI with responsive design",
      "Categorized exploration (Parks, History, Food)",
      "Direct links to maps and further info"
    ],
    tags: ["Web Development", "UI/UX", "Netlify"],
    link: "https://explore-bangalore-city.netlify.app/",
    image: "https://picsum.photos/seed/bangalore-city/800/600"
  },
  {
    title: "Sustainable Corridor Lighting",
    description: "Smart solar-powered lighting system using ESP32 and PIR sensors to reduce electricity consumption by 40%.",
    longDescription: "This project addresses energy wastage in public corridors. By using ESP32 microcontrollers and PIR motion sensors, the system intelligently dims or turns off lights when no occupancy is detected. It's powered by solar energy, making it completely sustainable.",
    features: [
      "Real-time occupancy detection",
      "Solar power management system",
      "ESP32 based wireless control",
      "40% reduction in energy consumption"
    ],
    tags: ["ESP32", "PIR Sensors", "Solar Energy", "IoT"],
    link: "#",
    github: "https://github.com/mohammedjawad944",
    image: "https://picsum.photos/seed/iot-hardware/800/600"
  },
  {
    title: "Medicine Identifier",
    description: "Computer vision system that extracts medicine names from tablet strip images using Tesseract OCR and OpenCV.",
    longDescription: "The Medicine Identifier uses advanced image processing and optical character recognition to help users identify medications. By processing images of tablet strips, it extracts text and matches it against a database to provide information about the medicine.",
    features: [
      "Tesseract OCR integration",
      "OpenCV image preprocessing (Grayscale, Thresholding)",
      "Automated text extraction from curved surfaces",
      "High accuracy name identification"
    ],
    tags: ["Python", "OpenCV", "Tesseract OCR", "Image Processing"],
    link: "#",
    github: "https://github.com/mohammedjawad944",
    image: "https://picsum.photos/seed/computer-vision/800/600"
  },
  {
    title: "RFID Attendance System",
    description: "Contactless attendance tracking using RFID tags and Arduino, with real-time data logging to Google Sheets.",
    longDescription: "A robust IoT solution for educational institutions and workplaces. Each user is assigned an RFID tag. When swiped, the Arduino reads the unique ID and sends it to a cloud-connected Google Sheet for real-time attendance logging and reporting.",
    features: [
      "Contactless RFID scanning",
      "Real-time Google Sheets integration",
      "Automated timestamping",
      "Low-cost hardware implementation"
    ],
    tags: ["Arduino", "RFID", "IoT", "Google Sheets"],
    link: "#",
    github: "https://github.com/mohammedjawad944",
    image: "https://picsum.photos/seed/arduino-tech/800/600"
  }
];

const SKILLS: Skill[] = [
  { name: "C / Python", icon: <Code2 className="w-4 h-4" />, category: 'Backend' },
  { name: "Embedded Systems", icon: <Cpu className="w-4 h-4" />, category: 'Backend' },
  { name: "Arduino / ESP32", icon: <Terminal className="w-4 h-4" />, category: 'Backend' },
  { name: "Computer Vision", icon: <Globe className="w-4 h-4" />, category: 'AI' },
  { name: "OpenCV / OCR", icon: <Layers className="w-4 h-4" />, category: 'AI' },
  { name: "Android Studio", icon: <Briefcase className="w-4 h-4" />, category: 'Tools' },
  { name: "MATLAB / Xilinx", icon: <Layers className="w-4 h-4" />, category: 'Tools' },
  { name: "Circuit Design", icon: <Cpu className="w-4 h-4" />, category: 'Backend' },
];

// --- Components ---

const ProjectModal = ({ project, onClose }: { project: Project, onClose: () => void }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div 
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 20 }}
      className="glass tech-border w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm bg-zinc-900 shadow-2xl"
      onClick={e => e.stopPropagation()}
    >
      <div className="relative aspect-video md:aspect-[21/9] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-8 md:p-12">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">{project.title}</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Project Brief</h4>
              <p className="text-zinc-300 leading-relaxed text-lg">{project.longDescription}</p>
            </div>

            <div>
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Key Features</h4>
              <ul className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-6 glass tech-border rounded-sm bg-white/5">
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">Links & Resources</h4>
              <div className="space-y-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-sm border border-white/5 hover:bg-white/5 transition-all group"
                >
                  <span className="text-sm font-medium">Live Preview</span>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400" />
                </a>
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-sm border border-white/5 hover:bg-white/5 transition-all group"
                  >
                    <span className="text-sm font-medium">Source Code</span>
                    <Github className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 mb-4"
    >
      <div className="h-[2px] w-12 bg-emerald-500" />
      <h2 className="text-3xl md:text-4xl font-display font-bold">
        {children}
      </h2>
    </motion.div>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-zinc-400 max-w-2xl ml-16"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Hi! I'm Mohammed's AI assistant. Ask me anything about his projects, skills, or experience in ECE and Embedded Systems!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-latest",
        contents: userMsg,
        config: {
          systemInstruction: `You are a helpful assistant for Mohammed Jawad Ahmed Shaikh's portfolio. 
          Mohammed is an Electronics & Communication Engineering student at VTU (Expected 2026).
          Contact: shaikhjawad944@gmail.com | +91 88673 12379
          He is currently an Embedded Systems Intern at IIES and an Android App Dev Intern at Mindmatrix.
          Key Projects:
          1. Explore Bangalore City: Web guide (https://explore-bangalore-city.netlify.app/).
          2. Sustainable Corridor Lighting: ESP32/PIR based smart lighting.
          3. Medicine Identifier: Python/OpenCV/OCR for medicine detection.
          4. RFID Attendance: IoT-based attendance logging.
          Skills: C, Python, Arduino, ESP32, Computer Vision (OpenCV), Android Studio, MATLAB.
          Be professional, concise, and enthusiastic about Mohammed's work. Mention his interest in hardware-software integration.`,
        }
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || "I'm sorry, I couldn't process that." }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass w-80 md:w-96 h-[500px] rounded-2xl overflow-hidden flex flex-col mb-4 shadow-2xl"
          >
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-zinc-900">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-medium text-sm">Portfolio Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "flex",
                  msg.role === 'user' ? "justify-end" : "justify-start"
                )}>
                  <div className={cn(
                    "max-w-[85%] p-3 rounded-2xl text-sm",
                    msg.role === 'user' 
                      ? "bg-emerald-600 text-white rounded-tr-none" 
                      : "bg-zinc-800 text-zinc-200 rounded-tl-none"
                  )}>
                    <Markdown>{msg.text}</Markdown>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800 p-3 rounded-2xl rounded-tl-none">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-white/10 bg-zinc-900">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about my experience..."
                  className="w-full bg-zinc-800 border border-white/5 rounded-xl py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-emerald-500 hover:text-emerald-400 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>
    </div>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen font-sans">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-50"
        style={{ scaleX }}
      />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex justify-center p-6">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass rounded-full px-6 py-2 flex items-center gap-6"
        >
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "text-sm font-medium transition-colors hover:text-emerald-400",
                activeSection === item.id ? "text-emerald-400" : "text-zinc-400"
              )}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative"
        >
          <motion.div 
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-20 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-20"
          >
            <div className="w-32 h-px bg-gradient-to-r from-transparent to-emerald-500" />
            <Activity className="w-4 h-4 text-emerald-500" />
            <div className="w-32 h-px bg-gradient-to-l from-transparent to-emerald-500" />
          </motion.div>

          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-sm border border-emerald-500/20 bg-emerald-500/5 text-[10px] font-mono text-emerald-400 mb-8 tracking-[0.2em] uppercase"
          >
            System Status: Operational // ECE Engineer
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-tight text-gradient"
          >
            Mohammed <br />
            Jawad Ahmed Shaikh.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Engineering the intersection of <span className="text-zinc-200 font-medium">hardware</span> and <span className="text-zinc-200 font-medium">software</span>. 
            Specialized in Embedded Systems, IoT, and Computer Vision.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#projects" 
              className="px-8 py-4 rounded-sm bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400 transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              INITIALIZE_PROJECTS
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-4">
              <a href="https://github.com/mohammedjawad944" target="_blank" rel="noopener noreferrer" className="p-4 rounded-sm border border-white/10 hover:bg-white/5 transition-colors group">
                <Github className="w-5 h-5 group-hover:text-emerald-400 transition-colors" />
              </a>
              <a href="https://linkedin.com/in/mohammed-jawad-3709b52b9/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-sm border border-white/10 hover:bg-white/5 transition-colors group">
                <Linkedin className="w-5 h-5 group-hover:text-emerald-400 transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-10 hidden lg:block">
          <div className="flex flex-col gap-2 font-mono text-[10px] text-zinc-600">
            <span>LAT: 12.9716° N</span>
            <span>LNG: 77.5946° E</span>
            <span>LOC: BENGALURU, IN</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Technical Identity Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="glass tech-border overflow-hidden rounded-xl">
              <div className="bg-zinc-900/50 px-4 py-2 border-b border-white/5 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                </div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Identity_Profile.sys</span>
              </div>
              <div className="p-8 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <User className="w-10 h-10 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">Mohammed Jawad</h3>
                    <p className="text-emerald-500 font-mono text-xs">ECE_ENGINEER_V2.6</p>
                  </div>
                </div>

                <div className="space-y-4 font-mono">
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-[10px] text-zinc-500 uppercase">Education</span>
                    <span className="text-xs text-zinc-300 text-right">VTU / ECE</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-[10px] text-zinc-500 uppercase">Status</span>
                    <span className="text-xs text-emerald-500 text-right">Final Year Student</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-[10px] text-zinc-500 uppercase">Academic_Metric</span>
                    <span className="text-xs text-zinc-300 text-right">7.24 CGPA</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-[10px] text-zinc-500 uppercase">Location</span>
                    <span className="text-xs text-zinc-300 text-right">Bengaluru, IN</span>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Activity className="w-3 h-3 text-emerald-500" />
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Core_Focus</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Embedded', 'IoT', 'Computer Vision', 'Android'].map(tag => (
                      <span key={tag} className="text-[9px] font-mono px-2 py-1 rounded-sm bg-emerald-500/5 text-emerald-400 border border-emerald-500/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative Bio */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <SectionHeading subtitle="A brief look into my journey and what drives my passion for technology.">
              About Me
            </SectionHeading>
            
            <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
              <p>
                I am an Electronics and Communication Engineering student with hands-on experience in 
                <span className="text-zinc-200"> embedded systems, IoT, and computer vision</span>. 
                I enjoy building automation systems that combine hardware and software to solve real-world problems.
              </p>
              <p>
                My passion lies in creating efficient, sustainable technology. Whether it's 
                <span className="text-emerald-500/80"> optimizing power consumption</span> in smart lighting 
                or using AI for medical identification, I strive to bridge the gap between 
                physical hardware and intelligent software.
              </p>
              <p>
                Currently, I'm expanding my horizons through internships at <span className="text-zinc-200">IIES</span> and 
                <span className="text-zinc-200"> Mindmatrix</span>, where I'm applying my skills to 
                firmware development and AI-assisted mobile applications.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/20 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Cpu className="w-5 h-5 text-emerald-500" />
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider">Hardware</h4>
                  </div>
                  <p className="text-xs text-zinc-500">ESP32, Arduino, Sensors, RFID, Solar Management</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/20 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="w-5 h-5 text-emerald-500" />
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider">Software</h4>
                  </div>
                  <p className="text-xs text-zinc-500">Python, OpenCV, C, Android Studio, Java/Kotlin</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
        <SectionHeading subtitle="My professional journey and the roles where I've applied my engineering skills.">
          Professional Experience
        </SectionHeading>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="space-y-8"
        >
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
              }}
              className="glass tech-border p-8 md:p-12 group hover:bg-white/5 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-emerald-500 font-mono text-sm tracking-tight">{exp.role}</p>
                </div>
                <div className="px-4 py-1 rounded-sm border border-white/10 bg-white/5 text-zinc-500 text-xs font-mono h-fit w-fit">
                  {exp.period}
                </div>
              </div>
              
              <p className="text-zinc-400 mb-8 max-w-3xl leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {exp.skills.map(skill => (
                  <span key={skill} className="text-[10px] font-mono px-3 py-1 rounded-sm bg-zinc-800 text-zinc-400 border border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <SectionHeading subtitle="Selected works that demonstrate my technical capabilities and problem-solving skills.">
          Featured Projects
        </SectionHeading>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              onClick={() => setSelectedProject(project)}
              className="group glass tech-border overflow-hidden flex flex-col cursor-pointer hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://picsum.photos/seed/${project.title.replace(/\s+/g, '-')}/800/450`;
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.link} className="p-3 bg-white text-black rounded-full hover:bg-emerald-400 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  {project.github && (
                    <a href={project.github} className="p-3 bg-white text-black rounded-full hover:bg-emerald-400 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 text-sm mb-6 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
        <SectionHeading subtitle="The technologies and tools I use to bring ideas to life.">
          Technical Skills
        </SectionHeading>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              className="glass tech-border p-6 flex flex-col items-center text-center hover:border-emerald-500/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-all">
                {skill.icon}
              </div>
              <span className="font-medium text-sm mb-1">{skill.name}</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider">{skill.category}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="glass tech-border p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 italic">Let's build something <br /> amazing together.</h2>
            <p className="text-zinc-400 text-lg mb-12">
              Currently looking for new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:shaikhjawad944@gmail.com" 
                className="w-full md:w-auto px-10 py-5 rounded-sm bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400 transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20"
              >
                <Mail className="w-5 h-5" />
                shaikhjawad944@gmail.com
              </a>
              <a 
                href="tel:+918867312379" 
                className="w-full md:w-auto px-10 py-5 rounded-sm border border-white/10 text-white font-bold hover:bg-white/5 transition-all flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5 text-emerald-500" />
                +91 88673 12379
              </a>
            </div>
            <div className="flex items-center justify-center gap-8 mt-12">
              <a href="https://github.com/mohammedjawad944" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group">
                <Github className="w-5 h-5 group-hover:text-emerald-400 transition-colors" />
                <span className="text-sm font-mono tracking-tighter">GITHUB</span>
              </a>
              <a href="https://linkedin.com/in/mohammed-jawad-3709b52b9/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group">
                <Linkedin className="w-5 h-5 group-hover:text-emerald-400 transition-colors" />
                <span className="text-sm font-mono tracking-tighter">LINKEDIN</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} &mdash; Handcrafted with passion and AI.
        </p>
      </footer>

      {/* AI Assistant */}
      <ChatAssistant />

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
