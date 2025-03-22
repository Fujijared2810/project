import React, { useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  BarChart2,
  BookOpen,
  GitBranch as BrandTelegram,
  CheckCircle,
  Crown,
  DollarSign,
  GraduationCap,
  LineChart,
  MessageCircle,
  Star,
  Trophy,
  Users,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import xmLogo from "./img/XM.png";
import ExLogo from "./img/Exness.jpg";
import RoboForexLogo from "./img/Robo.png";

function AnimatedCard({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [showNav, setShowNav] = React.useState(true);

  React.useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Scroll handler function
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show nav when scrolling up, hide when scrolling down
      // Also always show nav when at the top of the page
      if (currentScrollY < 100) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      
      // Update last scroll position
      setLastScrollY(currentScrollY);
    };
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      // Clean up
      document.documentElement.style.scrollBehavior = '';
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const vipBenefits = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Quality Education",
      description:
        "Comprehensive trading knowledge and wisdom for every student",
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Weekly Livestreams and Signals",
      description:
        "Consistent weekly sessions with market analysis and signals",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Dedicated Mentoring",
      description: "Passionate teaching with personalized guidance",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Active Community",
      description: "Engaging community for sharing ideas and analyses",
    },
  ];

  const supremeBenefits = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "1:1 Private Calls",
      description: "Scheduled private mentoring sessions",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Enhanced Focus",
      description: "More nurture and quality time with students",
    },
    {
      icon: <Crown className="h-6 w-6" />,
      title: "Exclusive Resources",
      description: "Extra educational materials and premium content",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Premium Analysis",
      description: "Early access to high-performance market analysis",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Floating Navigation Bar */}
      {/* Floating Navigation Bar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: showNav ? 0 : -100,
          opacity: showNav ? 1 : 0
        }}
        transition={{ 
          duration: 0.3,
          ease: "easeInOut" 
        }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-gray-800/50"
      >
        {/* Rest of your nav bar code remains the same */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <h3 className="text-xl font-bold text-white">Prodigy Trading</h3>
            </motion.div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { name: "Strategy Finder", href: "#strategy-finder" },
                { name: "Programs", href: "#mentorship-programs" },
                { name: "Partners", href: "#partners" },
                { name: "Team", href: "#founders" }
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-gray-300 hover:text-white rounded-md transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            
            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2 text-sm hidden md:inline-flex"
                onClick={() => window.open("https://t.me/PTAStudentBot", "_blank")}
              >
                Start Trading <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white"
                onClick={() => alert('Mobile menu would open here')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with modern design elements */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Dynamic background with overlay */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: backgroundY,
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-blue-950/40 z-1"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10 z-2" 
            style={{backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"%3E%3Cpath d=\"M0 0h40v40H0V0zm1 1v38h38V1H1z\" fill=\"%23ffffff\" fill-opacity=\"0.15\"/%3E%3C/svg%3E')"}}></div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute inset-0 overflow-hidden z-3">
          <motion.div 
            className="absolute top-1/4 left-[15%] w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
            animate={{ 
              y: [0, -30, 0], 
              opacity: [0.5, 0.7, 0.5] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-[20%] w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"
            animate={{ 
              y: [0, 40, 0], 
              opacity: [0.5, 0.7, 0.5] 
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
        
        {/* Section transition element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-5"></div>
        
        {/* Content container with split layout */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
          {/* Left content - Main heading and description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-3/5 text-left mb-10 md:mb-0"
          >
            <Badge 
              variant="outline" 
              className="mb-4 py-1.5 px-4 text-sm border-blue-500 text-blue-400 bg-blue-900/20 backdrop-blur-sm"
            >
              The Future of Trading Education
            </Badge>
            
            {/* Academy Name */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Prodigy Trading Academy
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mt-2 rounded-full"></div>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="block text-white">Master the</span>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Financial Markets
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
            >
              Transform your trading journey through expert guidance, proven strategies, and a community of successful traders.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all text-white border-0 shadow-lg shadow-blue-900/30"
                onClick={() =>
                  window.open("https://t.me/PTAStudentBot", "_blank")
                }
              >
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-gray-200 hover:bg-gray-800 hover:text-white"
              >
                Explore Methods
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right content - Featured card/graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="md:w-2/5 md:pl-8"
          >
            <div className="relative">
              {/* Card background with glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-lg opacity-75"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-lg p-6 backdrop-blur-sm shadow-xl">
                {/* Card content - Trading chart mockup */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-400">EURUSD</span>
                  </div>
                  <Badge variant="secondary" className="bg-blue-900/30 text-blue-400 text-xs">Live Strategy</Badge>
                </div>
                
                {/* Mock chart - You could replace this with an actual chart component */}
                <div className="h-40 bg-gradient-to-b from-gray-800 to-gray-900 rounded mb-4 overflow-hidden flex items-end">
                  <svg viewBox="0 0 100 30" className="w-full h-full">
                    <path 
                      d="M0,30 L5,28 L10,29 L15,26 L20,24 L25,26 L30,25 L35,19 L40,17 L45,13 L50,15 L55,10 L60,12 L65,8 L70,5 L75,7 L80,3 L85,2 L90,0 L95,3 L100,1" 
                      fill="none" 
                      stroke="rgba(59, 130, 246, 0.8)" 
                      strokeWidth="1.5"
                    />
                    <path 
                      d="M0,30 L100,30" 
                      stroke="rgba(255, 255, 255, 0.1)" 
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>
                
                {/* Trading stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-gray-800/50 rounded p-2">
                    <p className="text-xs text-gray-400">Win Rate</p>
                    <p className="text-base font-semibold text-green-400">78%</p>
                  </div>
                  <div className="bg-gray-800/50 rounded p-2">
                    <p className="text-xs text-gray-400">ROI</p>
                    <p className="text-base font-semibold text-blue-400">32%</p>
                  </div>
                  <div className="bg-gray-800/50 rounded p-2">
                    <p className="text-xs text-gray-400">Risk:Reward</p>
                    <p className="text-base font-semibold text-purple-400">1:3</p>
                  </div>
                </div>
                
                <Button 
                  size="sm" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.open("https://t.me/PTAStudentBot", "_blank")}
                >
                  Learn This Strategy
                </Button>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-500 flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-blue-500"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </header>

      {/* Strategy Finder Section with transitions */}
      <section id='strategy-finder' className="relative py-24 overflow-hidden bg-black">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-40 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-600/20 rounded-full filter blur-[100px]"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-600/20 rounded-full filter blur-[90px]"></div>
        </div>
        
        {/* Section transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-black z-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <Badge 
              variant="outline" 
              className="mb-4 py-1.5 px-4 text-sm border-blue-500 text-blue-400 bg-blue-900/20 backdrop-blur-sm"
            >
              Find Your Edge
            </Badge>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Strategy Finder
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Discover the perfect trading approach that aligns with your personality, schedule, and financial goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                title: "ICT / SMC",
                description: "Trade alongside institutional players by understanding smart money concepts, order flow and market structure",
                icon: <BarChart2 className="h-8 w-8" />,
                colors: "from-blue-500 to-cyan-400",
                shadowColor: "shadow-blue-500/20",
                difficulty: "Advanced",
                timeframe: "All Timeframes",
                features: ["Order Blocks", "Liquidity", "Market Structure", "Fair Value Gaps"]
              },
              {
                title: "Price Action",
                description: "Master candlestick patterns, support/resistance levels, and chart formations without indicators",
                icon: <LineChart className="h-8 w-8" />,
                colors: "from-emerald-500 to-green-400",
                shadowColor: "shadow-emerald-500/20",
                difficulty: "Intermediate",
                timeframe: "All Timeframes",
                features: ["Candlestick Patterns", "Chart Patterns", "Support/Resistance", "Trend Analysis"]
              },
              {
                title: "Intra Day",
                description: "Capitalize on short-term price movements within a single trading session for quick profits",
                icon: <DollarSign className="h-8 w-8" />,
                colors: "from-amber-500 to-orange-400",
                shadowColor: "shadow-amber-500/20",
                difficulty: "Intermediate",
                timeframe: "Minutes to Hours",
                features: ["Scalping", "Breakouts", "Momentum Trading", "News Trading"]
              },
              {
                title: "Swing Trading",
                description: "Capture medium-term market movements by holding positions for several days to weeks",
                icon: <Trophy className="h-8 w-8" />,
                colors: "from-violet-500 to-purple-400", 
                shadowColor: "shadow-violet-500/20",
                difficulty: "Beginner-Friendly",
                timeframe: "Days to Weeks",
                features: ["Trend Following", "Higher Timeframes", "Fundamental Analysis", "Lower Screen Time"]
              }
            ].map((strategy, index) => (
              <AnimatedCard key={strategy.title} index={index * 0.15}>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`h-full rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/30 shadow-lg ${strategy.shadowColor} backdrop-blur-sm overflow-hidden flex flex-col`}
                >
                  {/* Card Header */}
                  <div className={`bg-gradient-to-r ${strategy.colors} px-6 py-5`}>
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-white">{strategy.title}</h3>
                      <div className="bg-white/20 p-2.5 rounded-lg backdrop-blur-sm">
                        {strategy.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-gray-300 mb-5 flex-grow">{strategy.description}</p>
                    
                    <div className="space-y-4 mb-5">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Difficulty</span>
                        <Badge variant="secondary" className={`bg-gray-800 text-xs font-medium`}>
                          {strategy.difficulty}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Timeframe</span>
                        <Badge variant="secondary" className={`bg-gray-800 text-xs font-medium`}>
                          {strategy.timeframe}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Feature List */}
                    <div className="mb-5">
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Key Elements</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {strategy.features.map(feature => (
                          <div key={feature} className="flex items-center text-xs">
                            <CheckCircle className="h-3 w-3 mr-1.5 text-blue-400" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Footer */}
                  <div className="p-6 pt-0">
                    <Button 
                      className={`w-full bg-gradient-to-r ${strategy.colors} hover:opacity-90 transition-opacity text-white`}
                      onClick={() => window.open("https://t.me/PTAStudentBot", "_blank")}
                    >
                      Learn This Strategy <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Not sure which strategy suits you best? Talk to our expert mentors for personalized guidance.
            </p>
            <Button 
              variant="outline" 
              className="border-blue-500/50 hover:border-blue-400 text-blue-400 hover:bg-blue-900/20"
              onClick={() => window.open("https://t.me/PTAStudentBot", "_blank")}
            >
              Get Strategy Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Mentorship Programs Section with enhanced design */}
      <section id='mentorship-programs' className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-950">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Abstract shapes */}
          <div className="absolute left-1/4 top-32 w-64 h-64 bg-blue-500/5 rounded-full filter blur-[80px]"></div>
          <div className="absolute right-1/4 bottom-32 w-72 h-72 bg-purple-500/5 rounded-full filter blur-[100px]"></div>
          
          {/* Grid pattern background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
          </div>
        </div>
        
        {/* Section transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-gray-950 z-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <Badge 
              variant="outline" 
              className="mb-4 py-1.5 px-4 text-sm border-blue-500 text-blue-400 bg-blue-900/20 backdrop-blur-sm"
            >
              Personalized Trading Education
            </Badge>
            <h2 className="text-4xl font-bold mb-5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mentorship Programs
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose the perfect mentorship plan tailored to your goals, schedule, and commitment level.
            </p>
          </motion.div>
          
          {/* Pricing toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-900/50 p-1.5 rounded-lg border border-gray-800 inline-flex">
              <button
                className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                  billingPeriod === 'yearly'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setBillingPeriod('yearly')}
              >
                Yearly <span className="text-xs ml-1 text-green-400"></span>
              </button>
            </div>
          </div>
          
          {/* Programs Comparison with Visual Price Indicator */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* VIP Program */}
            <AnimatedCard index={0}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="h-full rounded-2xl overflow-hidden group"
              >
                {/* Card with glow effect on hover */}
                <div className="relative h-full">
                  {/* Hover glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-70 transition-all duration-300 blur-md"></div>
                  
                  <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800/80 overflow-hidden flex flex-col">
                    {/* Price tag ribbon */}
                    <div className="absolute -right-12 top-8 rotate-45 bg-blue-600 text-white px-12 py-1.5 shadow-lg font-semibold text-sm z-10">
                      Popular
                    </div>

                    {/* Card Header */}
                    <div className="p-6 text-center bg-gradient-to-r from-blue-900/30 to-blue-800/10 border-b border-gray-800">
                      <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-900/40 mb-4">
                        <Users className="h-8 w-8 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-1">VIP Program</h3>
                      <div className="text-gray-400 text-sm mb-4">Complete trading foundation</div>
                      
                      {billingPeriod === 'monthly' ? (
                        <div className="space-y-4">
                          {/* Philippines Pricing */}
                          <div className="relative rounded-lg p-3 bg-gradient-to-r from-blue-900/30 to-blue-800/10 border border-blue-900/30">
                            <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-900/80 text-blue-200 text-xs">
                              Philippines
                            </Badge>
                            <div className="mb-1 flex items-baseline justify-center">
                              <span className="text-2xl font-bold mr-2 text-white">499</span>
                              <span className="text-gray-400 text-sm">($8.70/mo)</span>
                            </div>
                          </div>
                          
                          {/* Foreign Pricing */}
                          <div className="relative rounded-lg p-3 bg-gradient-to-r from-blue-900/30 to-blue-800/10 border border-blue-900/30">
                            <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-900/80 text-blue-200 text-xs">
                              International
                            </Badge>
                            <div className="mb-1 flex items-baseline justify-center">
                              <span className="text-2xl font-bold mr-2 text-white">$25</span>
                              <span className="text-gray-400 text-sm">/month</span>
                            </div>
                          </div>
                          
                          <div className="text-xs text-gray-500">Billed monthly</div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {/* Philippines Yearly Pricing */}
                          <div className="relative rounded-lg p-3 bg-gradient-to-r from-blue-900/30 to-blue-800/10 border border-blue-900/30">
                            <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-900/80 text-blue-200 text-xs">
                              Philippines
                            </Badge>
                            <div className="mb-1 flex items-baseline justify-center">
                              <span className="text-2xl font-bold mr-2 text-white">₱5,988</span>
                              <span className="text-gray-400 text-sm">($104.46/yr)</span>
                            </div>
                          </div>
                          
                          {/* Foreign Yearly Pricing */}
                          <div className="relative rounded-lg p-3 bg-gradient-to-r from-blue-900/30 to-blue-800/10 border border-blue-900/30">
                            <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-900/80 text-blue-200 text-xs">
                              International
                            </Badge>
                            <div className="mb-1 flex items-baseline justify-center">
                              <span className="text-2xl font-bold mr-2 text-white">$300</span>
                              <span className="text-gray-400 text-sm">/year</span>
                            </div>
                          </div>
                          
                          <div className="text-xs text-gray-500">Billed annually</div>
                        </div>
                      )}
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-6 flex-grow">
                      <div className="space-y-4">
                        {vipBenefits.map((benefit, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start gap-4 group"
                            whileHover={{ x: 5 }}
                          >
                            <div className="p-1.5 rounded-full bg-blue-900/30 text-blue-400 mt-0.5 group-hover:bg-blue-800/50 transition-colors">
                              {benefit.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold mb-0.5">{benefit.title}</h4>
                              <p className="text-sm text-gray-400">
                                {benefit.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Additional features */}
                      <div className="mt-6 space-y-3">
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-3 text-blue-400" />
                          <span className="text-gray-300">Weekly live mentoring sessions</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-3 text-blue-400" />
                          <span className="text-gray-300">Access to community forums</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-3 text-blue-400" />
                          <span className="text-gray-300">Trade idea discussions</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card Footer */}
                    <div className="p-6 pt-0">
                      <Button
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white shadow-lg shadow-blue-600/20"
                        onClick={() =>
                          window.open("https://t.me/PTAStudentBot", "_blank")
                        }
                      >
                        Join VIP {billingPeriod === 'yearly' ? 'Yearly' : 'Monthly'} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <div className="text-center mt-4 text-xs text-gray-500">No long-term contracts, cancel anytime</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedCard>

            {/* Supreme Program - Lifetime Membership */}
            <AnimatedCard index={1}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="h-full rounded-2xl overflow-hidden group"
              >
                {/* Card with glow effect on hover */}
                <div className="relative h-full">
                  {/* Hover glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-70 transition-all duration-300 blur-md"></div>
                  
                  <div className="relative h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800/80 overflow-hidden flex flex-col">
                    {/* Price tag ribbon */}
                    <div className="absolute -right-12 top-8 rotate-45 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-12 py-1.5 shadow-lg font-semibold text-sm z-10">
                      Not Available
                    </div>
                    
                    {/* Card Header */}
                    <div className="p-6 text-center bg-gradient-to-r from-purple-900/30 to-blue-900/10 border-b border-gray-800">
                      <div className="inline-flex items-center justify-center p-3 rounded-full bg-purple-900/40 mb-4">
                        <Crown className="h-8 w-8 text-purple-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-1">Supreme Program</h3>
                      <div className="text-gray-400 text-sm mb-4">Advanced, personalized training</div>
                      
                      {/* Unavailable pricing display */}
                      <div className="mb-1 flex items-baseline justify-center">
                        <span className="text-lg font-medium mr-2 text-gray-400">Limited Availability</span>
                      </div>
                      <div className="text-xs text-gray-500">Currently by invitation only</div>
                    </div>
                    
                    {/* Rest of the card content remains the same */}
                    <div className="p-6 flex-grow">
                      <div className="space-y-4">
                        {supremeBenefits.map((benefit, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start gap-4 group"
                            whileHover={{ x: 5 }}
                          >
                            <div className="p-1.5 rounded-full bg-purple-900/30 text-purple-400 mt-0.5 group-hover:bg-purple-800/50 transition-colors">
                              {benefit.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold mb-0.5">{benefit.title}</h4>
                              <p className="text-sm text-gray-400">
                                {benefit.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Additional features */}
                      <div className="mt-6 space-y-3">
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-3 text-purple-400" />
                          <span className="text-gray-300">Personalized strategy development</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-3 text-purple-400" />
                          <span className="text-gray-300">Direct access to senior mentors</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-3 text-purple-400" />
                          <span className="text-gray-300">Trading psychology coaching</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-3 text-purple-400" />
                          <span className="text-gray-300">Lifetime updates & upgrades</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card Footer */}
                    <div className="p-6 pt-0">
                      <Button
                        className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-lg"
                        onClick={() =>
                          window.open("https://t.me/PTAStudentBot", "_blank")
                        }
                      >
                        Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <div className="text-center mt-4 text-xs text-gray-500">Get notified when spots become available</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Partners Section with enhanced design */}
      <section id='partners' className="relative py-28 bg-gradient-to-b from-black/60 to-black">
        {/* Subtle radial gradient background */}
        <div className="absolute inset-0 opacity-30" style={{
          background: "radial-gradient(circle at 50% 50%, rgba(30, 64, 175, 0.15), rgba(0, 0, 0, 0) 70%)"
        }}></div>
        
        {/* Animated particle background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute rounded-full opacity-20"
              animate={{
                x: [Math.random() * 100, Math.random() * 100 - 50],
                y: [Math.random() * 100, Math.random() * 100 - 50],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                width: `${20 + Math.random() * 30}px`,
                height: `${20 + Math.random() * 30}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 3 === 0 ? 'rgba(59, 130, 246, 0.3)' : 
                          i % 3 === 1 ? 'rgba(139, 92, 246, 0.3)' : 'rgba(34, 197, 94, 0.3)',
                filter: 'blur(8px)'
              }}
            />
          ))}
        </div>
        
        {/* Section transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-900/20 to-black z-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <Badge 
              variant="outline" 
              className="mb-4 py-1.5 px-4 text-sm border-blue-500 text-blue-400 bg-blue-900/20 backdrop-blur-sm"
            >
              Trusted By Professionals
            </Badge>
            <h2 className="text-4xl font-bold mb-5 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Our Partners</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We've built strategic relationships with leading financial institutions to provide our students with exclusive benefits and opportunities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* XM Trading Partner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }} 
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-gradient-to-b from-gray-900/80 to-black p-8 rounded-xl border border-gray-800 group-hover:border-blue-500/50 transition-all backdrop-blur-sm h-full flex flex-col">
                {/* Top ribbon */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                
                <div className="flex items-center justify-between mb-8">
                  <motion.div 
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }} 
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="absolute -inset-2 bg-blue-600/20 blur-md rounded-full"></div>
                    <img src={xmLogo} alt="XM Logo" className="h-24 w-auto relative" />
                  </motion.div>
                  <Badge variant="outline" className="border-blue-500 text-blue-400 bg-blue-900/20 backdrop-blur-sm">Premier Partner</Badge>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white">XM Trading</h3>
                <p className="text-gray-300 mb-8 flex-grow">
                  A leading forex and CFD broker providing access to over 1,000 instruments across 8 asset classes with competitive spreads.
                </p>
                
                {/* Benefits list */}
                <div className="mb-6 space-y-3">
                  <div className="flex items-start">
                    <div className="bg-blue-900/30 rounded-full p-1 mr-3 mt-1">
                      <CheckCircle className="h-3 w-3 text-blue-400" />
                    </div>
                    <span className="text-sm text-gray-400">Zero-fee account funding</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-900/30 rounded-full p-1 mr-3 mt-1">
                      <CheckCircle className="h-3 w-3 text-blue-400" />
                    </div>
                    <span className="text-sm text-gray-400">Exclusive educational webinars</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-900/30 rounded-full p-1 mr-3 mt-1">
                      <CheckCircle className="h-3 w-3 text-blue-400" />
                    </div>
                    <span className="text-sm text-gray-400">24/7 dedicated support desk</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-auto pt-6 border-t border-gray-800">
                  <span className="text-sm text-gray-500">Since 2022</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-blue-700/50 hover:bg-blue-900/20 text-blue-400"
                    onClick={() => window.open("https://t.me/PTAStudentBot", "_blank")}
                  >
                    Partner Benefits <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </motion.div>
            
            {/* Exness Partner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.03, y: -5 }} 
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-gradient-to-b from-gray-900/80 to-black p-8 rounded-xl border border-gray-800 group-hover:border-purple-500/50 transition-all backdrop-blur-sm h-full flex flex-col">
                {/* Top ribbon */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                
                <div className="flex items-center justify-between mb-8">
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="absolute -inset-2 bg-purple-600/20 blur-md rounded-full"></div>
                    <img src={ExLogo} alt="Exness Logo" className="h-24 w-auto relative" />
                  </motion.div>
                  <Badge variant="outline" className="border-purple-500 text-purple-400 bg-purple-900/20 backdrop-blur-sm">Official Partner</Badge>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white">Exness</h3>
                <p className="text-gray-300 mb-8 flex-grow">
                  Award-winning broker known for low spreads, ultra-fast execution, and exceptional trading conditions across global markets.
                </p>
                
                {/* Benefits list */}
                <div className="mb-6 space-y-3">
                  <div className="flex items-start">
                    <div className="bg-purple-900/30 rounded-full p-1 mr-3 mt-1">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <span className="text-sm text-gray-400">Multi-level account structure</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-900/30 rounded-full p-1 mr-3 mt-1">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <span className="text-sm text-gray-400">Enhanced deposit bonuses</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-900/30 rounded-full p-1 mr-3 mt-1">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <span className="text-sm text-gray-400">Priority customer service</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-auto pt-6 border-t border-gray-800">
                  <span className="text-sm text-gray-500">Since 2023</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-purple-700/50 hover:bg-purple-900/20 text-purple-400"
                    onClick={() => window.open("https://t.me/PTAStudentBot", "_blank")}
                  >
                    Partner Benefits <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </motion.div>
            
            {/* RoboForex Partner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.03, y: -5 }} 
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-gradient-to-b from-gray-900/80 to-black p-8 rounded-xl border border-gray-800 group-hover:border-green-500/50 transition-all backdrop-blur-sm h-full flex flex-col">
                {/* Top ribbon */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
                
                <div className="flex items-center justify-between mb-8">
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="absolute -inset-2 bg-green-600/20 blur-md rounded-full"></div>
                    <img src={RoboForexLogo} alt="RoboForex Logo" className="h-24 w-auto relative" />
                  </motion.div>
                  <Badge variant="outline" className="border-green-500 text-green-400 bg-green-900/20 backdrop-blur-sm">Strategic Partner</Badge>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white">RoboForex</h3>
                <p className="text-gray-300 mb-8 flex-grow">
                  Multi-award winning broker offering innovative trading solutions and advanced technological platforms for professional traders.
                </p>
                
                {/* Benefits list */}
                <div className="mb-6 space-y-3">
                  <div className="flex items-start">
                    <div className="bg-green-900/30 rounded-full p-1 mr-3 mt-1">
                      <CheckCircle className="h-3 w-3 text-green-400" />
                    </div>
                    <span className="text-sm text-gray-400">Advanced algo-trading platforms</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-900/30 rounded-full p-1 mr-3 mt-1">
                      <CheckCircle className="h-3 w-3 text-green-400" />
                    </div>
                    <span className="text-sm text-gray-400">Exclusive technical indicators</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-900/30 rounded-full p-1 mr-3 mt-1">
                      <CheckCircle className="h-3 w-3 text-green-400" />
                    </div>
                    <span className="text-sm text-gray-400">Extended leverage options</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-auto pt-6 border-t border-gray-800">
                  <span className="text-sm text-gray-500">Since 2024</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-green-700/50 hover:bg-green-900/20 text-green-400"
                    onClick={() => window.open("https://t.me/PTAStudentBot", "_blank")}
                  >
                    Partner Benefits <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Trust indicators and call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-20 flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 max-w-4xl mx-auto border border-gray-700/50"
          >
            <div className="flex items-center mb-6 md:mb-0 md:mr-6">
              <div className="bg-blue-900/30 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-white text-lg">Verified Partners</h4>
                <p className="text-gray-400 text-sm">All our partners undergo a strict verification process</p>
              </div>
            </div>
            <div className="md:ml-auto">
              <Button 
                variant="default" 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-900/30"
                onClick={() => window.open("https://t.me/PTAStudentBot", "_blank")}
              >
                Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Founders Section - Modernized */}
      <section id='founders' className="relative py-28 bg-black">
        {/* Transition from previous section */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-900/20 to-black z-0"></div>
        
        {/* Dynamic background elements */}
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full filter blur-[110px]"></div>
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-blue-600/20 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-600/20 rounded-full filter blur-[100px]"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute inset-0" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        </div>
        
        {/* Animated floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute rounded-full opacity-20"
              animate={{
                x: [Math.random() * 100, Math.random() * 100 - 50],
                y: [Math.random() * 100, Math.random() * 100 - 50],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                width: `${10 + Math.random() * 20}px`,
                height: `${10 + Math.random() * 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 3 === 0 ? 'rgba(139, 92, 246, 0.3)' : 
                          i % 3 === 1 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(236, 72, 153, 0.3)',
                filter: 'blur(5px)'
              }}
            />
          ))}
        </div>
        
        {/* Section transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-black/80 z-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <Badge 
              variant="outline" 
              className="mb-4 py-1.5 px-4 text-sm border-purple-500 text-purple-400 bg-purple-900/20 backdrop-blur-sm"
            >
              Meet Our Team
            </Badge>
            <h2 className="text-4xl font-bold mb-5 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">The Founders</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Led by experienced traders with a passion for education, our team is dedicated to transforming ambitious individuals into successful traders.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Fuji",
                role: "Web & Bot Developer",
                bio: "Built the PTA Bot and website, crafting sleek trading platforms with modern UI/UX and smooth animations.",
                telegram: "FujiiiiiPTA",
                email: "mesajared6@gmail.com",
                color: "from-sky-600 to-indigo-500",
                specialties: ["Trading platform development", "Modern UI/UX Design", "Automation & bot integration"]
              },
              {
                name: "RomFX",
                role: "Founder & Mentor",
                bio: "Expert mentor specializing in ICT and SMC trading strategies, providing in-depth insights, precise market analysis, and top-tier advice to help traders navigate the financial markets with confidence and consistency.",
                telegram: "rom_pta",
                email: "romfx.pta@gmail.com",
                color: "from-emerald-600 to-blue-500",
                specialties: ["Institutional Methods", "Risk Management", "Technical Analysis"]
              },
              {
                name: "Konfu",
                role: "Founder & Mentor",
                bio: "Founder and dedicated mentor with a deep expertise in Price Action trading strategies, helping traders refine their skills, master market structure, and develop a disciplined approach to trading success.",
                telegram: "fiftysevenrupees",
                email: "justinuybusiness@gmail.com",
                color: "from-amber-600 to-red-500",
                specialties: ["Market Structure Analysis", "Trading Psychology", "Technical Analysis"]
              },
              {
                name: "Xeno",
                role: "Community Founder",
                bio: "Founder of Prodigy, dedicated to building a thriving network focused on skill development, market mastery, and financial success through collaboration and education.",
                telegram: "TheNextProdigyPH",
                telegramLabel: "Visit The Next Prodigy",
                color: "from-purple-600 to-pink-500",
                specialties: ["Community Building", "Educational Programs", "Mentorship"]
              }
            ].map((founder, index) => (
              <AnimatedCard key={founder.name} index={index * 0.15}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="h-full rounded-2xl overflow-hidden group"
                >
                  {/* Card with glow effect on hover */}
                  <div className="relative h-full">
                    {/* Hover glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-70 transition-all duration-300 blur-md"
                        style={{backgroundImage: `linear-gradient(to right, ${
                          founder.color.includes('emerald') ? '#10b981, #3b82f6' : 
                          founder.color.includes('purple') ? '#9333ea, #ec4899' : 
                          founder.color.includes('sky') ? '#0284c7, #4f46e5' :
                          '#d97706, #ef4444'
                        })`}}>
                    </div>
                    
                    <div className="relative h-full bg-gradient-to-br from-gray-900 to-black border border-gray-800/50 rounded-2xl overflow-hidden flex flex-col">
                      {/* Decorative header pattern */}
                      <div className="absolute top-0 left-0 right-0 h-24 opacity-10"
                          style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`}}>
                      </div>
                      
                      {/* Gradient header */}
                      <div className="h-16 bg-gradient-to-r w-full"
                          style={{backgroundImage: `linear-gradient(to right, ${
                            founder.color.includes('emerald') ? '#10b981, #3b82f6' : 
                            founder.color.includes('purple') ? '#9333ea, #ec4899' : 
                            founder.color.includes('sky') ? '#0284c7, #4f46e5' :
                            '#d97706, #ef4444'
                          })`}}>
                      </div>
                      
                      {/* Profile Avatar */}
                      <div className="relative px-8">
                        <div className="absolute -top-12 left-8 p-1 rounded-xl bg-gray-900/80 backdrop-blur-sm">
                          <div className={`h-20 w-20 rounded-lg bg-gradient-to-br ${founder.color} flex items-center justify-center text-white font-bold text-4xl shadow-lg`}>
                            {founder.name.charAt(0)}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-8 pt-12 flex-grow">
                        {/* Name and role */}
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                          <p className={`text-sm inline-block py-1 px-3 rounded-full bg-opacity-20 ${
                            founder.color.includes('emerald') ? 'text-emerald-400 bg-emerald-900/20' : 
                            founder.color.includes('purple') ? 'text-purple-400 bg-purple-900/20' : 
                            founder.color.includes('sky') ? 'text-sky-400 bg-sky-900/20' :
                            'text-amber-400 bg-amber-900/20'
                          }`}>
                            {founder.role}
                          </p>
                        </div>
                        
                        {/* Bio */}
                        <p className="text-gray-300 mb-6">
                          {founder.bio}
                        </p>
                        
                        {/* Specialties */}
                        <div className="mb-6">
                          <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Specialties</h4>
                          <div className="flex flex-wrap gap-2">
                            {founder.specialties.map((specialty) => (
                              <span key={specialty} className="text-xs px-2 py-1 rounded-full border border-gray-800 text-gray-400">
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Contact links with improved styling */}
                      <div className="p-5 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-800/80">
                        <div className="flex flex-col space-y-3">
                          <motion.a 
                            href={`https://t.me/${founder.telegram}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`flex items-center px-4 py-2.5 rounded-lg ${
                              founder.color.includes('emerald') ? 'bg-emerald-900/20 text-emerald-400 hover:bg-emerald-900/30' : 
                              founder.color.includes('purple') ? 'bg-purple-900/20 text-purple-400 hover:bg-purple-900/30' : 
                              founder.color.includes('sky') ? 'bg-sky-900/20 text-sky-400 hover:bg-sky-900/30' :
                              'bg-amber-900/20 text-amber-400 hover:bg-amber-900/30'
                            } transition-colors`}
                            whileHover={{ x: 5 }}
                          >
                            <BrandTelegram className="h-5 w-5 mr-3" />
                            <span>{founder.telegramLabel || `@${founder.telegram}`}</span>
                          </motion.a>
                          
                          {founder.email && (
                            <motion.a 
                              href={`mailto:${founder.email}`}
                              className="flex items-center px-4 py-2.5 rounded-lg bg-gray-800/50 text-gray-300 hover:bg-gray-800 transition-colors"
                              whileHover={{ x: 5 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                              </svg>
                              <span className="text-sm">{founder.email}</span>
                            </motion.a>
                          )}
                        </div>
                      </div>
                      
                      {/* Decorative corner elements */}
                      <div className="absolute top-20 right-0 w-20 h-20 opacity-10 transform rotate-45">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
          
          {/* Call to action button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <Button 
              variant="default"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 shadow-lg shadow-purple-900/20"
              onClick={() => window.open("https://t.me/PTAStudentBot", "_blank")}
            >
              Connect With Our Founders <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer with modern elements */}
      <footer className="relative bg-gradient-to-b from-gray-950 to-black py-20">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-900/5 rounded-full filter blur-[100px]"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-900/5 rounded-full filter blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            {/* Brand column - wider on desktop */}
            <motion.div 
              className="md:col-span-5 lg:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Logo */}
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <h3 className="text-xl font-bold text-white">Prodigy Trading</h3>
              </div>
              
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering traders worldwide with professional education and
                mentorship. Transform your trading journey through expert guidance,
                proven strategies, and a supportive community.
              </p>
              
              {/* Social media links */}
              <div className="flex space-x-4 mb-6">
                {[
                  { icon: "M24 4.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337 2.6a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616 2c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z", name: "Twitter" },
                  { icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", name: "LinkedIn" },
                  { icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", name: "GitHub" },
                  { icon: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.892 5.017 15.294 5 12c.017-3.294.282-4.892 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.108 18.982 8.706 19 12c-.018 3.294-.282 4.892-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z", name: "YouTube" },
                  { icon: "M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-6.465-3.192c-.379.168-.786.282-1.213.333.437-.262.772-.675.931-1.169-.409.242-.86.418-1.341.513-.385-.41-.935-.667-1.542-.667-1.167 0-2.112.945-2.112 2.111 0 .166.018.327.054.482-1.754-.088-3.31-.927-4.352-2.203-.181.311-.286.673-.286 1.058 0 .733.373 1.379.94 1.757-.346-.01-.671-.106-.956-.264v.026c0 1.023.728 1.877 1.694 2.07-.177.049-.364.074-.556.074-.136 0-.268-.014-.397-.038.268.838 1.048 1.449 1.972 1.466-.723.566-1.633.904-2.622.904-.17 0-.338-.01-.503-.03.935.6 2.044.95 3.237.95 3.883 0 6.007-3.217 6.007-6.008 0-.091-.002-.183-.006-.273.413-.297.77-.667 1.054-1.089l-.019-.009z", name: "Telegram" }
                ].map((social) => (
                  <motion.a 
                    href="#"
                    key={social.name}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-gray-100 transition-colors"
                    whileHover={{ y: -3 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon}></path>
                    </svg>
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation columns */}
            <div className="md:col-span-7 lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  title: "Programs",
                  items: [
                    { label: "VIP Program", href: "#mentorship-programs" },
                    { label: "Supreme Program", href: "#mentorship-programs" },
                    { label: "Free Resources", href: "#strategy-finder" },
                  ],
                },
                {
                  title: "Resources",
                  items: [
                    { label: "Trading Tools", href: "#strategy-finder" },
                    { label: "Market Analysis", href: "#partners" },
                    { label: "FAQ", href: "#faq" },
                    ],
                },
                {
                  title: "Contact Us",
                  items: [
                    { label: "Join us on Telegram", href: "https://t.me/PTAStudentBot" },
                    { label: "support@prodigytrading.com", href: "mailto:support@prodigytrading.com" },
                    { label: "Available 24/7", href: "#partners" },
                    { label: "Partner Program", href: "#founders" },
                  ],
                },
              ].map((column, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4 className="text-white font-semibold text-lg mb-4">{column.title}</h4>
                  <ul className="space-y-3">
                    {column.items.map((item, i) => (
                      <li key={i}>
                        <motion.a 
                          href={item.href}
                          className="text-gray-400 hover:text-blue-400 flex items-center group"
                          whileHover={{ x: 4 }}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-gray-700 group-hover:bg-blue-500 mr-2 transition-colors"></span>
                          {item.label}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom bar with copyright and links */}
          <motion.div 
            className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row gap-4 items-center justify-between text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>&copy; 2025 Prodigy Trading Academy. All rights reserved.</p>
            
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Disclaimer</a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;