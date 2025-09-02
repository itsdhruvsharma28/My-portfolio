import { Experience, Project, Skill } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'AeronFly International Pvt. Ltd.',
    position: 'Frontend Developer',
    duration: 'Sep 2024 - Present',
    description: 'Designed, developed, and deployed a scalable AeronPay B2B fintech platform from scratch, building optimized and SEO-friendly UIs with Next.js for high performance and discoverability, and played a key role in building core financial modules such as Digital Gold and Gift Cards, and designed the complete purchase flow for Gift Cards including cart, checkout, and payment integration.Developed and integrated REST APIs with robust error handling, smooth loading states, and client-side validation, improving reliability and user experience.Design, Developed AeronFly Global Tour package, integrated dynamic APIs to display real-time tour package data with user-driven filters, and enhanced user experience through responsive layouts, intuitive filters, and smooth navigation.',
    skills: ['ReactJs',"Redux","React-Routing", 'Next.js', 'Javascript(ES6+)', 'AWS', 'Postman', 'RestfulApi',"Bootstrap",]
  },
  {
    id: '2',
    company: 'INFOTRIX',
    position: 'Full Stack Developer(Intern)',
    duration: 'Sep 2023 - Oct 2023',
    description: 'Collaborate in a team of four in spearheading the development of a Music Streaming Application, achieving a 10% reduction in app loading time. Delivered fully functional app with playlist editing capabilities, showcasing effective teamwork and technical expertise.',
   
    skills: ["React.js"," Node.js", "Express.js", "MongoDB", "Jest", "Postman", "Git", "GitHub"]
  },
  {
    id: '3',
    company: 'Acmegrade Pvt. Ltd.',
    position: 'Web Deveoper (Intern)',
    duration: 'Jun 2023 - 2020',
    description: 'Completed company-provided Training And Internship in Web Development, developed a Acmegrade WebApp, gained hands-on understanding of the company’s workflows, processes, and operational structure.',
    skills: ['React.js', 'JavaScript', 'Bootstrap', 'Html5', 'CSS3', 'Figma']
  }    
  ,
  {
    id: '4',
    company: 'INTERNSHALA',
    position: 'Web Deveoper (Trainee)',
    duration: 'Jun 2023 - 2020',
    description: 'Completed 2-month training with Internshala.Gained hands-on experience in full-stack development through the Pg-Life project.Learned practical skills in web application design, development, and deployment.',
    skills: ['Html', 'Css', 'Javascript', 'Bootstrap', 'PhP', 'DBMS','React']
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Travelsy',
    description: 'Created a full-stack online application that allows digital access to historical locations with real-time reservations, Stripe integration for payments.',
    image: 'src/data/Travelsy.PNG',
    skills: ['React',"javascript","AWS S3", 'Node.js',"Express.js","stripe Api Integration", 'MongoDB',],
    githubUrl: 'https://github.com/username/ecommerce',
    liveUrl: 'https://ecommerce-demo.com'
  },
  {
    id: '2',
    title: 'FIT-BIT',
    description: 'Collaborated with a team to develop a MERN‑based gym management platform offering tiered membership plans (Silver, Gold, Platinum) with corresponding amenities. Enabled users to easily purchase and manage their gym memberships through a seamless, full‑stack application.',
  image: 'src/data/Fit-bit.PNG',
    skills: ['React.js','vue.js', 'Node.js', 'Express.js', 'MongoDB',"Tailwind Css"],
    githubUrl: 'https://github.com/itsdhruvsharma28/Final_Year_Project',
    liveUrl: 'https://finalyearproject-fit-bit.netlify.app/'
  },
  {
    id: '3',
    title: 'Sortalgo Vision',
    description: 'Built an interactive web‑based sorting visualizer to demonstrate popular algorithms like Bubble Sort, Merge Sort, Quick Sort, and Insertion Sort.Integrated dynamic color‑coded animations and real‑time delay controls to help users intuitively grasp algorithm behavior.Designed with a user‑friendly interface to serve as an educational tool for beginners learning sorting concepts',
    image: '/src/components/sortalgo.PNG',
    skills: ['React', 'javascript', 'Css Animations', 'Algo Design'],
    githubUrl: 'https://github.com/username/social-dashboard',
    liveUrl: 'https://sortalgo-vision.netlify.app/'
  }
,
  
];

export const skills: Skill[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'NextJs', category: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Frontend' },
  { name: 'Jest', category: 'Frontend' },
  { name: 'JavaScript (ES6+)', category: 'Language' },
  { name: 'SQL', category: 'Frontend' },
  { name: 'Java', category: 'Backend' },
  { name: 'HTML5', category: 'Frontend' },
  { name: 'CSS3', category: 'Frontend' },
  { name: 'Bootstrap', category: 'Frontend' },
  { name: 'Tailwind Css', category: 'Frontend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Google Cloud Storage', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Restful Api', category: 'Cloud' },
  { name: 'Linux', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Postman', category: 'DevOps' },
  { name: 'Git', category: 'Tools' },
  { name: 'Github', category: 'Design' }
];