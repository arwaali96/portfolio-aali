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
  name: 'Arwa',
  subtitle: "I'm a self-taught Web Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'IMG_main2.jpeg',
  paragraphOne: 'I discovered computer programming late into my junior year of college. I particularly enjoyed its problem-solving, collaborative, and creative facets. While this discovery scared me because I felt it was too late to switch majors, it also ignited a new passion and spurred my interest in purposeful technology. I knew the road to being a software developer would be a trying yet rewarding process that I wanted to pursue.',
  paragraphTwo: 'With a few unexpected life detours following graduation, including spending a year as a substitute teacher and the Covid-19 pandemic, I decided to embark on a serious web development journey in the latter half of 2020. I joined a dedicated community of learners on freeCodeCamp and took some lessons before going off on my own. I learned how to use technologies like React, Git, and Gatsby (which I used to create this portfolio) among other things.',
  paragraphThree: 'I have tried, failed, and succeeded and feel the same thrill each time I overcome speed bumps as I code. I love the learning process and am excited by how much there still is to explore! I’m looking forward to improving and growing in my software development journey. Thanks for visiting and check out some of my projects below!',
  resume: 'https://drive.google.com/file/d/1bZCV2YbVi9TBBMQE7JwbuTxFGfIN35LL/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  // {
  //   id: nanoid(),
  //   img: 'art.jpeg',
  //   title:'Sunday فن Day',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
   {
    id: nanoid(),
    img: 'heavenly-relaxation.png',
    title: 'Heavenly Relaxation',
    info: 'This is a responsive, multi-page web app built in React. It features two audio players that contain two of my favorite relaxing sounds to listen to while studying.',
    info2: 'Building it really helped me hone my creative debugging skills and was a rewarding learning process.',
    url: 'https://heavenly-relaxation.netlify.app/',
    repo: 'https://github.com/arwaali96/heavenly-relaxation', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'task_tracker.png',
    title: 'React Task Tracker',
    info: "This task tracker built in React utilizes React Hooks and React Router to allow users to easily add, delete, and view tasks. It also implements JSON server to create a mock backend to save changes to tasks.",
    info2: '',
    url: 'https://personal-task-tracker.netlify.app/',
    repo: 'https://github.com/arwaali96/task-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'roman_num.png',
    title: 'Roman Numeral Converter',
    info: 'This roman numeral converter built in React uses the JavaScript code from one of my first projects and combines it with an easy-to-use, sleek UI.',
    info2: '',
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
