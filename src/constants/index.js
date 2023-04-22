import {
  fullstack,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  express,
  sql,
  nextjs,
  redditclone,
  quickelectric,
  yelpcamp,
  dashboard,
  chakraui,
  firebase,
  bootstrap,
  mui,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Full-stack Developer",
    icon: fullstack,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Node.js",
  //   icon: nodejs,
  // },
  // {
  //   name: "Express",
  //   icon: express,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "sql",
  //   icon: sql,
  // },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "Next.js",
  //   icon: nextjs,
  // },
  // {
  //   name: "chakra ui",
  //   icon: chakraui,
  // },
  // {
  //   name: "firebase",
  //   icon: firebase,
  // },
  // {
  //   name: "Bootstrap",
  //   icon: bootstrap,
  // },
  // {
  //   name: "MUI",
  //   icon: mui,
  // },
];

const projects = [
  {
    name: "Youtube clone",
    description: "A clone site of one of the most popular websites: Youtube",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Java Script",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "pink-text-gradient",
      },
      // {
      //   name: "Firebase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "Chakra UI",
      //   color: "pink-text-gradient",
      // },
    ],
    image: redditclone,
    source_code_link: "https://github.com/Rohitdobliyal24/Youtube-clone.github.io",
    live_address: "https://youtube-clone-dobliyal.vercel.app/",
  },
  {
    name: "FoodVila",
    description:
      "Web application that allow users to view the details of each restaurant and the menu items available using Swiggy live API.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "Java Script",
        color: "pink-text-gradient",
      },
      // {
      //   name: "MongoDB",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "Bootstrap 5",
      //   color: "pink-text-gradient",
      // },
    ],
    image: yelpcamp,
    source_code_link: "https://github.com/Rohitdobliyal24/Foodies.github.io",
    live_address: "https://foodiedobliyal.netlify.app/",
  },
  {
    name: "Snake Game",
    description:
      "Classic Snake game in JavaScript. Control a snake, eat food, grow longer. Avoid collision with walls and own body.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      // {
      //   name: "Next.js",
      //   color: "blue-text-gradient",
      // },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Java Script",
        color: "pink-text-gradient",
      },
    ],
    image: quickelectric,
    source_code_link: "https://github.com/Rohitdobliyal24/SnakeGame.github.io",
    live_address: "https://snakegamedobliyal.netlify.app/",
  },
  // {
  //   name: "Dashboard",
  //   description:
  //     "A site that gives a user the ability so see his business users and revenue, with charts and pies that shows the info visually  (Please have patient with the site loading due to slow loading service provided free by render)",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Nodejs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "ExpressJs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "MongoDB",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "MUI",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: dashboard,
  //   source_code_link: "https://github.com/yarinlaniado/Dashboard-Fullstack",
  //   live_address: "https://dashboard-frontend-m1q2.onrender.com/",
  // },
];

export { services, technologies, projects };
