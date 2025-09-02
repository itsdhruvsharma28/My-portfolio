// import React from 'react';
// import { Mail } from 'lucide-react';

// const Contact: React.FC = () => {
//   const handleEmailClick = () => {
//     window.location.href = 'mailto:dhruvsharma6377122@gmail.com=Let\'s Work Together';
//   };

//   return (
//     <section id="contact" className="py-20 px-6 bg-gray-800/30">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-8">
//           <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//             Get In Touch
//           </span>
//         </h2>
        
//         <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
//           Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
//         </p>
        
//         <button
//           onClick={handleEmailClick}
//           className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
//         >
//           <Mail className="w-5 h-5" />
//           <span>Send Email</span>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const handleEmailClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=dhruvsharma6377122@gmail.com&su=Let's Work Together&body=Hello",
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-800/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <p className=" text-gray-400 mb-12 max-w-2xl mx-auto">
          Ready to start your next project? Let's discuss how we can work
          together to bring your ideas to life.
        </p>

        <button
          onClick={handleEmailClick}
          className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
        >
          <Mail className="w-5 h-5" />
          <span>Send Email</span>
        </button>
      </div>
    </section>
  );
};

export default Contact;
