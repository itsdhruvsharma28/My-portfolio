import React, { useState } from 'react';
import { experiences } from '../data/portfolio';
import { ChevronDown, } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState(experiences[0].id);

  const activeExp = experiences.find(exp => exp.id === activeExperience);

  return (
    <section id="experience" className="py-20 px-6 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
         <div className='mb-16'>
        <h2 className="text-4xl font-bold  mb-5 text-gray-200">
          Professional  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        
        <p className=' text-gray-400'>A journey of growth, learning, and delivering impactful solutions across diverse projects and teams.</p>
        </div>
        
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Company List */}
          <div className="space-y-2">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExperience(exp.id)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-200 group ${
                  activeExperience === exp.id
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400'
                    : 'hover:bg-gray-800 border border-transparent'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`font-semibold ${
                      activeExperience === exp.id ? 'text-blue-400' : 'text-white group-hover:text-blue-400'
                    }`}>
                      {exp.company}
                    </h3>
              
                  </div>
                  
                  <ChevronDown 
  className={`w-5 h-5 transition-transform duration-200 ${
    activeExperience === exp.id 
      ? 'rotate-[-90deg] text-blue-400'   // Rotate right
      : 'rotate-0 text-gray-500'          // Default down
  }`} 
/>

                </div>
              </button>
            ))}
          </div>
          
          {/* Company Details */}
          <div className="lg:col-span-2">
            {activeExp && (
              <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{activeExp.position}</h3>
                  <p className="text-blue-400 font-medium mb-1">{activeExp.company}</p>
                  <p className="text-gray-400 text-sm">{activeExp.duration}</p>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-8">
                  {activeExp.description}
                </p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-3">
                    {activeExp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;