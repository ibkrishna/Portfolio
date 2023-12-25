import {
  mobile,
  backend,
  creator,
  web,
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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  corplyx,
  xeroframe,
  graduation,
  mpp,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  modern,
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "UI & UX Developer",
    icon: mobile,
  },
  {
    title: "SEO Specialist",
    icon: backend,
  },
  {
    title: "MERN Stack Developer",
    icon: creator,
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
 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Corplyx Technologies Pvt. Ltd",
    icon: corplyx,
    iconBg: "#383E56",
    date: "june 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-End Developer Intern",
    company_name: "XeroFrame",
    icon: xeroframe,
    iconBg: "#E6DEDD",
    date: "OCT 2022 - JAN 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Bachelor of Technology",
    company_name: "B.Tech",
    icon: graduation,
    iconBg: "#383E56",
    date: "Jun 2019 - Jun 2023",
    points: [
      
      "Computer Science Engineering.",
     "IILM COLLEGE OF ENGINEERING & TECHNOLOGY, GREATER NOIDA (AKTU)",
     "CGPA-7.2",
      "Participat in various college activities during graduation.",
    ],
  },
  {
    title: "Intermediate",
    company_name: "12th -PCM",
    icon: mpp,
    iconBg: "#E6DEDD",
    date: "2016 - 2018",
    points: [
      " MPP INTER COLLEGE,",
       "Percentage-84%",
      
    ],
  },

  {
    title: "High School",
    company_name: "10th",
    icon: modern,
    iconBg: "#E6DEDD",
    date: "2015- 2016",
    points: [
      " BMS INTER COLLEGE ,",
       "Percentage-84.5%",
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Bal Krishna proved me wrong.",
    name: "Neetu Singh",
    designation: "Client",
    company: "  websites",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },


  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Bal Krishna does.",
    name: "Yash Jain",
    designation: "CEO",
    company: "Corplyx Technologies",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Neha Tiwari",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
