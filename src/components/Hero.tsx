// import React from 'react';

// const Hero: React.FC = () => {
//   return (
//     <section className="min-h-screen flex py-20">
//       <div className="max-w-4xl mx-auto ">
//         <div className="mb-8">
//           <h6 className='text-gray-200 text-lg'>Greetings World! My name is</h6>
//           <h1 className="text-5xl md:text-7xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
//               Dhruv Sharma
//             </span>
//           </h1>
//           <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
//         Building innovation through code
//           </h2>
//           <h4 className="text-lg text-gray-400">
//             Glad to connect!
//           </h4>
//           <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
//             I’m an aspiring Software Engineer eager to learn, grow, and contribute while working alongside talented professionals. 
//           </p>
//           <p className='text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed'>Always open to I am always open for discussions  @ <a href="https://www.linkedin.com/in/dhruv28/" target='_blank_'><span className='bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent'>Linkedin</span></a></p>
//         </div>
        
//         <div className=""></div>
        
//       </div>
//     </section>
//   );
// };

// export default Hero;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { ChevronDown } from 'lucide-react';

// const Hero: React.FC = () => {
//   return (
//     <section className="min-h-screen flex flex-col justify-between py-20">
//       {/* Top Content */}
//       <div className="max-w-4xl mx-auto ">
//         <div className="mb-8">
//           <h6 className="text-gray-200 text-lg">Greetings World! My name is</h6>
//           <h1 className="text-5xl md:text-7xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
//               Dhruv Sharma
//             </span>
//           </h1>
//           <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
//             Building innovation through code
//           </h2>
//           <h4 className="text-lg text-gray-400">Glad to connect!</h4>
//           <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
//             I’m an aspiring Software Engineer eager to learn, grow, and contribute while working alongside talented professionals.
//           </p>
//           <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
//             I am always open for discussions @{" "}
//             <a
//               href="https://www.linkedin.com/in/dhruv28/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
//                 Linkedin
//               </span>
//             </a>
//           </p>
//         </div>
//       </div>

//       {/* Down Arrow */}
//       <div className="flex justify-center mb-6">
//         <motion.div
//           animate={{ y: [0, 15, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//         >
//           <ChevronDown className="w-10 h-10 text-gray-300 cursor-pointer" />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const [showArrow, setShowArrow] = useState(true);

  // Hide arrow when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to next section
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight, // scroll down by 1 viewport height
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen flex flex-col justify-between py-20">
      {/* Top Content */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h6 className="text-gray-200 text-lg">Greetings World! My name is</h6>
          <h1 className="text-5xl md:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Dhruv Sharma
            </span>
          </h1>
          <h2 className="text-4xl md:text-5xl text-gray-300 mb-6">
            {/* Building innovation through code */}
            Transforming lines of code into digital magic.

          </h2>
          {/* <h4 className="text-lg text-gray-400">Glad to connect!</h4> */}
          <h4 className="text-lg text-gray-400">Glad to e-meet you!</h4>

          <p className="text-lg text-gray-400 max-w-2xl  leading-relaxed">
            {/* I’m an aspiring Software Engineer eager to learn, grow, and
            contribute while working alongside talented professionals. */}
            An aspiring software engineer with the ability to grow as an individual and learn in the surrounding of talented people.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl  leading-relaxed">
            I am always open for discussions @{" "}
            <a
              href="https://www.linkedin.com/in/dhruv28/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                Linkedin
              </span>
            </a>
          </p>
        </div>
      </div>

      {/* Down Arrow */}
      {showArrow && (
        <div className="flex justify-center mb-6">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={scrollToNextSection}
            className="cursor-pointer"
          >
            <ChevronDown className="w-10 h-10 text-gray-300" />
          </motion.div>
        </div>
      )}
    </section>
  );
};  

export default Hero;
