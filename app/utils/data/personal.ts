export interface Skill {
  name: string;
  level: number; // 1-5 scale
  icon?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  socialLinks: {
    linkedin: string;
    github: string;
  };
  summary: string;
  skills: Skill[];
}

export const personalInfo: PersonalInfo = {
  name: 'George-Eduard Dinu',
  title: 'Web Developer',
  location: 'Bucharest, Romania',
  phone: '+40750491212',
  email: 'georgeduard.dinu@gmail.com',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/george-dinu/',
    github: 'https://github.com/GeorgEduard',
  },
  summary:
    'Web Developer with 9 years of diverse experience, evolving from PHP and WordPress foundations to modern JavaScript, TypeScript, React, and Node.js ecosystems. Throughout my career, I\'ve consistently embraced technological shifts while delivering high-quality solutions. Known for quickly adapting to the project requirements, I combine technical expertise with a genuine enthusiasm for continuous learning.I\'m lazy by nature, which drives me to find the most efficient solutions. My "work smarter, not harder" approach makes me both productive and hardworking.',
  skills: [
    { name: 'React', level: 5 },
    { name: 'JavaScript', level: 5 },
    { name: 'React Native', level: 4 },
    { name: 'Node.js', level: 4 },
    { name: 'Next.js', level: 4 },
    { name: 'TypeScript', level: 4 },
    { name: 'WordPress', level: 4 },
    { name: 'Tailwind CSS', level: 5 },
    { name: 'Git', level: 4 },
    { name: 'PHP', level: 3 },
    { name: 'jQuery', level: 3 },
    { name: 'HTML5/CSS3', level: 5 },
  ],
};
