import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="relative">
        {/* Animated Diamond Border */}
        <div className="diamond-border">
          <div className="diamond-border-inner"></div>
        </div>
        
        {/* Letter D */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            D
          </span>
        </div>
      </div>
      
      <style jsx>{`
        .diamond-border {
          width: 120px;
          height: 120px;
          position: relative;
          transform: rotate(45deg);
        }
        
        .diamond-border-inner {
          width: 100%;
          height: 100%;
          border: 3px solid transparent;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6) border-box;
          mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          animation: diamondForm 2s ease-in-out infinite;
        }
        
        @keyframes diamondForm {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 1;
          }
          100% {
            transform: scale(1) rotate(360deg);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;