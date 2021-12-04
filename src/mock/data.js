import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '<Arwa />',
  subtitle: "I'm a highly driven Web Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'IMG_main3.jpeg',
  paragraphOne: 'I discovered computer programming late into my junior year of college. I particularly enjoyed its problem-solving, collaborative, and creative facets. While this discovery scared me because I felt it was too late to switch majors, it also ignited a new passion and spurred my interest in purposeful technology. With a few unexpected life detours, I decided to embark on a serious web development journey in the latter half of 2020.',
  paragraphTwo: 'I love combining my problem-solving skills and creativity to explore the endless amount I can do with programming. I have tried, failed, and succeeded and feel the same thrill each time I overcome speed bumps as I code. I’m always excited to learn and implement any tools a task calls for to add to my growing list. Thanks for visiting, and I hope you enjoy scrolling through my portfolio and some of my other projects below!',
  paragraphThree: 'P.S. Some of my non-coding hobbies are painting and reading on personality psychology/ MBTI.',
  resume: 'https://drive.google.com/file/d/1BxrWMEPqu9rogGRZ24KTkXsl1eimLHEe/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'algamar-boba.png',
    title:'Algamar Boba Shop',
    info: 'Algamar Boba Shop is a responsive e-commerce site stocked with some of my favorite Sudanese drinks turned into boba flavors you can add to your basket (from a JSON store I created).',
    info2: 'React | Next.js | Tailwind CSS | Authentication (NextAuth + Firebase) | Redux',
    url: 'https://algamar-boba-shop.vercel.app/',
    repo: 'https://github.com/arwaali96/algamar-boba-shop', // if no repo, the button will not show up

  },
  {
    id: nanoid(),
    img: 'fun-day.png',
    title:'Sunday فن Day',
    info: 'Sunday فن (pronounced “fun” and meaning “art” in Arabic) Day is an idea I had years ago for a place (initially a physical board) to document and share my artistic pursuits and decided to do so as a coding project.',
    info2: 'MERN stack | CRUD functionality | Redux | Material-UI',
    url: 'https://fun-day.netlify.app/',
    repo: 'https://github.com/arwaali96/sunday-fun-day-backend', // if no repo, the button will not show up

  },
   {
    id: nanoid(),
    img: 'heavenly-relaxation.png',
    title: 'Heavenly Relaxation',
    info: 'This is a responsive, multi-page web app that features two audio players with my favorite relaxing sounds to listen to while studying.',
    info2: 'React | Media Queries',
    url: 'https://heavenly-relaxation.netlify.app/',
    repo: 'https://github.com/arwaali96/heavenly-relaxation', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'task_tracker.png',
    title: 'React Task Tracker',
    info: "This task tracker allows users to easily add, delete, and view tasks and includes a mock backend to save changes to tasks.",
    info2: 'React w/ Hooks and Router | JSON Server',
    url: 'https://personal-task-tracker.netlify.app/',
    repo: 'https://github.com/arwaali96/task-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'roman_num.png',
    title: 'Roman Numeral Converter',
    info: 'This roman numeral converter built in React uses the JavaScript code from one of my first projects and combines it with an easy-to-use, sleek UI.',
    info2: 'React | JavaScript | CSS',
    url: 'https://arabic-to-roman.netlify.app/',
    repo: 'https://github.com/arwaali96/roman-numeral-converter', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'http://www.linkedin.com/in/arwa-ali96',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/arwaali96',
    },
  ],
};   

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
