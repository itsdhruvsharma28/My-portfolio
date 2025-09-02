// import React from 'react';
// import { skills } from '../data/portfolio';

// const About: React.FC = () => {
//   return (
//     <section id="about" className="py-20 px-6">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold  mb-16">
//           <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//             About Me
//           </span>
//         </h2>
        
//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Content */}
//           <div className="space-y-8">
//             <div className="text-lg text-gray-400 leading-relaxed space-y-4">
//               <p>
//                 Hello! I am Dhruv Sharma, a dedicated and enthusiastic software developer with a strong background in Artificial Intelligence and Machine Learning. I am currently completing my B.Tech in Computer Science and Engineering from JIET Institute of Design and Technology, Jodhpur, where I have maintained a CGPA of 7.02.
//               </p>
//               <p>
//               I have hands-on experience in building scalable web applications and fintech platforms. At AeronPay, I contributed to developing a B2B fintech platform from scratch, creating optimized and SEO-friendly UIs with Next.js, and building key financial modules like Digital Gold and Gift Cards, including the complete purchase flow with cart, checkout, and payment integration. I also designed and developed AeronFly’s Global Tour Package platform, integrating real-time APIs with user-driven filters and enhancing the overall experience with responsive layouts and smooth navigation.
//               </p>
//               <p>During my internships, I gained valuable industry exposure and practical skills. At Infotrix, I collaborated in a team of four to develop a Task Management Web Application, improving efficiency by reducing page load time by 10% and delivering key features such as task creation, deadline tracking, and collaborative editing—showcasing both teamwork and technical expertise. At Acmegrade Pvt. Ltd., I completed company-provided training and internship in web development, where I built the Acmegrade WebApp and gained hands-on understanding of the company’s workflows, processes, and operational structure.</p>
//             </div>
            
//             {/* Skills */}
//             <div className="space-y-6">
//               <h3 className="text-2xl font-semibold text-white mb-4">Technical Skills</h3>
//               <div className="flex flex-wrap gap-3">
//                 {skills.map((skill) => (
//                   <span
//                     key={skill.name}
//                     className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-blue-400 hover:text-blue-400 transition-colors duration-200"
//                   >
//                     {skill.name}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
          
//           {/* Profile Image */}
//           {/* <div className="flex  justify-center items-start">
//             <div className="">
//               <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-gray-700 group-hover:border-blue-400 transition-colors duration-300">
//                 <img
//                   src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
//                   alt="Developer Profile"
//                   className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
//                 />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl opacity-60 group-hover:opacity-0 transition-opacity duration-300"></div>
//             </div>
//           </div> */}

//           <div className="flex justify-center items-start"> <div className=""> <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-gray-700 group-hover:border-blue-400 transition-colors duration-300"> <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Developer Profile" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" /> </div> <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl opacity-60 group-hover:opacity-0 transition-opacity duration-300"></div> </div> </div> </div>
//         </div>

//     </section>
//   );
// };

// export default About;


import React from 'react';
import { skills } from '../data/portfolio';


const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Content */}
          <div className="space-y-8">
            <div className="text-lg text-gray-400 leading-relaxed space-y-4">
              <p>
                Hello! I am Dhruv Sharma, a dedicated and enthusiastic software developer with a strong background in Artificial Intelligence and Machine Learning. I am currently completing my B.Tech in Computer Science and Engineering from JIET Institute of Design and Technology, Jodhpur, where I have maintained a CGPA of 7.02.
              </p>
              <p>
                I have hands-on experience in building scalable web applications and fintech platforms. At AeronPay, I contributed to developing a B2B fintech platform from scratch, creating optimized and SEO-friendly UIs with Next.js, and building key financial modules like Digital Gold and Gift Cards, including the complete purchase flow with cart, checkout, and payment integration. I also designed and developed AeronFly’s Global Tour Package platform, integrating real-time APIs with user-driven filters and enhancing the overall experience with responsive layouts and smooth navigation.
              </p>
              <p>
                During my internships, I gained valuable industry exposure and practical skills. At Infotrix, I collaborated in a team of four to develop a Task Management Web Application, improving efficiency by reducing page load time by 10% and delivering key features such as task creation, deadline tracking, and collaborative editing—showcasing both teamwork and technical expertise. At Acmegrade Pvt. Ltd., I completed company-provided training and internship in web development, where I built the Acmegrade WebApp and gained hands-on understanding of the company’s workflows, processes, and operational structure.
              </p>
            </div>

           

            {/* Skills */}
            <div id="skills" className="space-y-6">
              <p className=" text-lg text-gray-400">Here is a list of the technologies that I've worked with.</p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-blue-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center items-start">
            <div className="relative group">
              <div className="w-80 h-90 rounded-1xl overflow-hidden  transition-colors duration-300">
                <img
                  src="src\components\WhatsApp Image 2023-12-03 at 12.56.20.jpeg"
                  // src="src\components\WhatsApp Image 2023-12-03 at 12.56.20.jpeg"
                  alt="Developer Profile"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl opacity-60 group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default About;
