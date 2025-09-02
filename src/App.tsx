import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import SocialIcons from './components/SocialIcons';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('about');
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading || showResume) return;

    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, showResume]);

  const handleNavigate = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeClick = () => {
    setShowResume(true);
  };

  const handleResumeBack = () => {
    setShowResume(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (showResume) {
    return <Resume onBack={handleResumeBack} />;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header 
        activeSection={activeSection} 
        onNavigate={handleNavigate}
        onResumeClick={handleResumeClick}
      />
      
      <main className="pt-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <SocialIcons />
      
      {/* Custom Styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        .diamond-border {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          padding: 2px;
          border-radius: 8px;
          transform: rotate(45deg);
        }
        
        .diamond-border-inner {
          background: #1f2937;
          border-radius: 6px;
          width: 100%;
          height: 100%;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}

export default App;