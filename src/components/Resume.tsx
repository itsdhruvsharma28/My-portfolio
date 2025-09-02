// import React from 'react';
// import { Download, ArrowLeft } from 'lucide-react';

// interface ResumeProps {
//   onBack: () => void;
// }

// const Resume: React.FC<ResumeProps> = ({ onBack }) => {
//   const handleDownload = () => {
//     // Create a mock image download
//     const link = document.createElement('a');
//     link.href = 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800';
//     link.download = 'Developer_Resume.jpg';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       <div className="max-w-4xl mx-auto px-6 py-8">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <button
//             onClick={onBack}
//             className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             <span>Back to Portfolio</span>
//           </button>
          
//           <button
//             onClick={handleDownload}
//             className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
//           >
//             <Download className="w-5 h-5" />
//             <span>Download Resume</span>
//           </button>
//         </div>
        
//         {/* Resume Content */}
//         <div className="bg-gray-800/50 rounded-xl shadow-2xl p-8 border border-gray-700">
//           <div className="text-center">
//             <h1 className="text-3xl font-bold mb-4 text-white">Resume Preview</h1>
//             <p className="text-gray-400 mb-8">
//               Your professional resume in image format
//             </p>
            
//             {/* Resume Image Preview */}
//             <div className="max-w-2xl mx-auto mb-8">
//               {/* <img
//                 src="src/components/dhruv sharma resume.pdf"
//                 alt="Professional Resume"
//                 className="w-full rounded-lg shadow-lg border border-gray-600"
//               /> */}
//               <iframe
//   src="src/components/dhruv-sharma-resume.pdf"
//   title="Professional Resume"
//   className="w-full h-[600px] rounded-lg shadow-lg border border-gray-600"
// />
//             </div>
            
//             <p className="text-gray-400 text-sm">
//               Click the download button above to save the resume to your device.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Resume;







// import React from 'react';
// import { Download, ArrowLeft } from 'lucide-react';

// import resumeFile from "./dhruv sharma resume.pdf";
// interface ResumeProps {
//   onBack: () => void;
// }

// const Resume: React.FC<ResumeProps> = ({ onBack }) => {
//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = resumeFile;
//     link.download = 'Dhruv_Sharma_Resume.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       <div className="max-w-4xl mx-auto px-6 py-8">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <button
//             onClick={onBack}
//             className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             <span>Back to Portfolio</span>
//           </button>
          
//           <button
//             onClick={handleDownload}
//             className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
//           >
//             <Download className="w-5 h-5" />
//             <span>Download Resume</span>
//           </button>
//         </div>
        
//         {/* Resume Preview */}
//         <div className="bg-gray-800/50 rounded-xl shadow-2xl p-8 border border-gray-700">
//           <div className="text-center">
//             <h1 className="text-3xl font-bold mb-4 text-white">Resume Preview</h1>
//             <div className=" mx-auto mb-8">
//               <iframe
//                 src={resumeFile} // ✅ use imported PDF here
//                 title="Professional Resume"
//                 className="w-full h-[600px] rounded-lg shadow-lg border border-gray-600"
//               />
             
//              <iframe
//   src={`https://docs.google.com/gview?url=${window.location.origin}${resumeFile}&embedded=true`}
//   title="Resume"
//   className="w-full h-[600px] rounded-lg shadow-lg border border-gray-600"
// />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Resume;


import React from "react";
import { Download, ArrowLeft } from "lucide-react";

interface ResumeProps {
  onBack: () => void;
}

const Resume: React.FC<ResumeProps> = ({ onBack }) => {
  return (
    <div className="fixed inset-0 w-full h-full bg-black">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
      </div>

      {/* Full Page Resume */}
      <iframe
        src="/dhruv-sharma-resume.pdf"
        title="Resume"
        className="w-full h-full"
      />
    </div>
  );
};

export default Resume;
