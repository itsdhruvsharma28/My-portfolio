export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  skills: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Skill {
  name: string;
  category: string;
}