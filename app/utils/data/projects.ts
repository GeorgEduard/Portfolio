import { StaticImageData } from 'next/image';
import riskCockpitOverview from '../../../public/projects/riskcockpit/overview.png';
import squadraImage from '../../../public/projects/squadra/squadra.png';
import caveoImage from '../../../public/projects/caveo/caveo.png';
import neuronyImage from '../../../public/projects/neurony.png';
import pixelWildernessImage from '../../../public/projects/pixelwilderness.png';
import holaImage from '../../../public/projects/hola.png';
import dropsafeImage from '../../../public/projects/dropsafe.png';
import howardBlasImage from '../../../public/projects/howardblas.png';
import sciameImage from '../../../public/projects/sciame.png';
import monkeyboardImage from '../../../public/projects/monkeyboard.png';
import kamradImage from '../../../public/projects/kamrad.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  company: string;
  period: string;
  role: string;
  technologies: string[];
  image?: StaticImageData;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'risikocockpit',
    title: 'Risikocockpit',
    description:
      "An app that analyses a person or a family's financial situation, and then predicts possible issues and offers tailored solutions.",
    url: 'https://www.risikocockpit.ch/',
    company: 'Ganz Digital',
    period: '2022-2025',
    role: 'Lead Developer',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js'],
    image: riskCockpitOverview,
    featured: false,
  },
  {
    id: 'squadra',
    title: 'Squadra',
    description:
      'An ecosystem of web and mobile multi-language apps for shift and personnel management, live time tracking and accounting.',
    url: 'https://www.squadra.work/',
    company: 'Ganz Digital',
    period: '2022-2025',
    role: 'Main Developer',
    technologies: [
      'React',
      'React Native',
      'TypeScript',
      'Node.js',
      'Express.js',
    ],
    image: squadraImage,
    featured: true,
  },
  {
    id: 'caveo',
    title: 'Caveo',
    description:
      'A mobile insurance management and financial planning app with a redesigned presentation website and back-office admin web app.',
    url: 'https://www.caveo.ch/',
    company: 'Ganz Digital',
    period: '2022-2025',
    role: 'Lead Developer',
    technologies: ['React', 'React Native', 'TypeScript', 'Next.js', 'Node.js'],
    image: caveoImage,
    featured: true,
  },
  {
    id: 'neurony',
    title: 'Neurony',
    description: 'Company website for Neurony Solutions.',
    url: 'https://neurony.ro/',
    company: 'Neurony Solutions',
    period: '2020-2021',
    role: 'Front-End Developer',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS3', 'HTML5'],
    image: neuronyImage,
    featured: false,
  },
  {
    id: 'pixelwilderness',
    title: '',
    description: 'Company website for Pixel Wilderness web agency.',
    url: 'https://pixelwilderness.com/',
    company: 'Freelance',
    period: '2018-2020',
    role: 'WordPress Developer',
    technologies: [
      'WordPress',
      'PHP',
      'JavaScript',
      'CSS3',
      'HTML5',
      'WP Bakery',
    ],
    image: pixelWildernessImage,
    featured: false,
  },
  {
    id: 'holatransylvania',
    title: 'Hola Transylvania',
    description:
      'A travel website designed for touring the Transylvania region.',
    url: 'http://holatransylvania.com/',
    company: 'Freelance',
    period: '2018-2020',
    role: 'WordPress Developer',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS3', 'HTML5'],
    image: holaImage,
    featured: false,
  },
  {
    id: 'dropsafe',
    title: 'Dropsafe',
    description:
      'Product website for a company that provides solutions for safety in the workplace.',
    url: 'https://dropsafe.com/',
    company: 'Freelance',
    period: '2018-2020',
    role: 'WordPress Developer',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS3', 'HTML5'],
    image: dropsafeImage,
    featured: false,
  },
  {
    id: 'howardblas',
    title: 'Howard Blas',
    description: 'Personal website for Howard Blas.',
    url: 'https://howardblas.com/',
    company: 'Freelance',
    period: '2018-2020',
    role: 'WordPress Developer',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS3', 'HTML5'],
    image: howardBlasImage,
    featured: false,
  },
  {
    id: 'sciame',
    title: 'Sciame',
    description: 'Presentation website for a construction company',
    url: 'https://sciame.com/',
    company: 'Freelance',
    period: '2018-2020',
    role: 'WordPress Developer',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS3', 'HTML5'],
    image: sciameImage,
    featured: false,
  },
  {
    id: 'monkeyboard',
    title: 'Monkeyboard',
    description:
      'Product website for a company that commercialises hoverboards and other transportation devices.',
    url: 'https://monkeyboard.ro/',
    company: 'FixMyPC',
    period: '2016-2018',
    role: 'Front-End Developer',
    technologies: ['Laravel', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'PHP'],
    image: monkeyboardImage,
    featured: false,
  },
  {
    id: 'kamrad',
    title: 'Kamrad',
    description: 'Company website for an events and expo enterprise.',
    url: 'http://kamrad.ro/',
    company: 'FixMyPC',
    period: '2016-2018',
    role: 'Front-End Developer',
    technologies: ['Wordpress', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'PHP'],
    image: kamradImage,
    featured: false,
  },
];
