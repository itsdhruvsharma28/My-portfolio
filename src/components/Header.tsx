import React from 'react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  onResumeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate, onResumeClick }) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - Diamond D */}
        <div className="flex items-center">
          <div className="relative w-12 h-12 transform rotate-45">
            <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
            <div className="absolute inset-0 flex items-center justify-center transform -rotate-45">
              <span className="text-xl font-bold text-white">
                D
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                activeSection === item.id 
                  ? 'bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent' 
                  : 'text-gray-300'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={onResumeClick}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            Resume
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;