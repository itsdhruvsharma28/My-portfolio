// import React from 'react';
// import { Github, Linkedin, Mail } from 'lucide-react';

// const SocialIcons: React.FC = () => {
//   const socialLinks = [
//     {
//       icon: Github,
//       href: 'https://github.com/itsdhruvsharma28?tab=repositories',
//       label: 'GitHub'
//     },
//     {
//       icon: Linkedin,
//       href: 'https://www.linkedin.com/in/dhruv28/',
//       label: 'LinkedIn'
//     },
//     {
//       icon: Mail,
//       href: 'dhruvsharma6377122@gmail.com',
//       label: 'Email'
//     }
//   ];

//   return (
//     <div className="fixed bottom-8 right-8 z-30">
//       <div className="flex flex-col space-y-4">
//         {socialLinks.map((link) => {
//           const IconComponent = link.icon;
//           return (
//             <a
//               key={link.label}
//               href={link.href}
//               target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
//               rel="noopener noreferrer"
//               className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-400 hover:bg-blue-500/20 transition-all duration-200 transform hover:scale-110"
//               aria-label={link.label}
//             >
//               <IconComponent className="w-5 h-5" />
//             </a>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default SocialIcons;

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const SocialIcons: React.FC = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/itsdhruvsharma28?tab=repositories",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/dhruv28/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:dhruvsharma6377122@gmail.com?subject=Let%27s%20Work%20Together",
      label: "Email",
    },
  ];

  return (
    <>
      <div className="fixed bottom-8 left-0 z-30 ml-12">
        <div className="flex flex-col space-y-4 h-52">
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-400 hover:bg-blue-500/20 transition-all duration-200 transform hover:scale-110"
                aria-label={link.label}
              >
                <IconComponent className="w-5 h-5" />
              </a>
            );
          })}
        </div>
        <div className="w-px h-52 bg-gray-700 mx-auto animate-line-grow"></div>
      </div>

      <div className="fixed bottom-8 right-0 z-30 mr-12">
        <div className="flex flex-col space-y-4 h-64">
          {/* <span className=" text-gray-400 text-sm ">
            dhruvsharma6377122@gmail.com
          </span> */}

          <a
            href="mailto:dhruvsharma6377122@gmail.com?subject=Let%27s%20Work%20Together"
            target="mailto:dhruvsharma6377122@gmail.com?subject=Let%27s%20Work%20Together"
            rel="noopener noreferrer"
            className="w-12 [writing-mode:vertical-rl] [text-orientation:mixed] border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400  transition-all duration-200 transform hover:scale-110"
            aria-label={"mail"}
          >
            dhruvsharma6377122@gmail.com
          </a>
        </div>
        <div className="w-px h-52 bg-gray-700 mx-auto animate-line-grow-xs"></div>
      </div>
    </>
  );
};

export default SocialIcons;
