// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.jpg';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Data Structures and Algorithms",
      company: "GeeksforGeeks ",
      date: "June 2024 - Augest 2024",
      desc: "Participated in a comprehensive training program focused on Data Structures and Algorithms, covering essential topics such as arrays, linked lists, stacks, queues, trees, graphs, recursion, dynamic programming, and sorting techniques. Gained hands-on experience in solving real-world coding problems and strengthened analytical and problem-solving skills through regular practice and contests.",
      skills: [
        "C++",
        "Java",
        "Python",
        "Algorithms",
        "Data Structures",
        "Problem Solving",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "React Training",
      company: "React Outreach Program – LPU",
      date: "Nov 2024 - Dec 2024",
      desc: "Completed a React training program as part of the React Outreach Program at Lovely Professional University (LPU). Gained in-depth knowledge of React.js, including component-based architecture, state management with Redux, and building responsive user interfaces. Developed practical skills through hands-on projects and real-world applications.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Lovely Professional University",
      date: "since Aug 2022 ",
      grade: "8.43 CGPA",
      desc: "I am currently in the third year of my B.Tech in Information Technology at Lovely Professional University (LPU). Throughout my academic journey, I have built a solid foundation in programming, software development, and core computer science concepts. I have studied subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participate in workshops, hackathons, and technical events, which have helped me enhance my practical skills and broaden my knowledge. My experience at LPU has played a key role in shaping my technical abilities and preparing me for a successful career in the tech industry.",
      degree: "Bachelor of Technology - Computer Science and Engineering",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Kendriya Vidyalaya Maithon Dam, Dhanbad",
      date: "Apr 2021 - June 2022",
      // grade: "87.4%",
      desc: "Completed Class 12 education from Kendriya Vidyalaya Maithon Dam, Dhanbad, under the CBSE board with a focus on Physics, Chemistry, Mathematics, and Biology (PCMB), building a strong academic foundation in both science and mathematics.",
      degree: "CBSE(XII) - PCM with Biology",
    },
    {
      id: 3,
      img: bsaLogo,
      school: "Kendriya Vidyalaya No.1, Kalpakkam",
      date: "Apr 2019 - March 2020",
      // grade: "84.4%",
      desc: "Completed Class 10 education from Kendriya Vidyalaya No.1, Kalpakkam, under the CBSE board with a focus on Science and Computer, laying a strong foundation in scientific concepts and basic computing skills.",
      degree: "CBSE(X) ",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Airbnb-like Rental Platform",
      description:
        "A dynamic and user-friendly React.js application inspired by Airbnb, designed to simplify property browsing and booking. Users can explore detailed listings, view images, check amenities, and make reservations with ease. With an intuitive interface and responsive design, this platform offers a seamless experience for both travelers and hosts, making it an ideal solution for modern accommodation needs.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React.js", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Vaibhav9520/Wanderlust-Project-main",
      webapp: "https://wanderlust-project-od3l.onrender.com/listings",
    },
    {
      id: 1,
      title: "Real-time Video Conferencing Platform",
      description:
        "A full-stack real-time video conferencing platform built to enable seamless virtual meetings, webinars, and collaborative sessions. Featuring high-quality video/audio streaming, screen sharing, chat functionality, and secure user authentication, the platform ensures smooth and reliable communication. Ideal for remote teams, online classes, and virtual events, it offers an intuitive interface and real-time performance for a truly connected experience.",
      image: csprepLogo,
      tags: ["Tailwind CSS", "Node.js", "Express.js", "MongoDB", "WebRTC", "Socket.io", "JWT"],
      github: "https://github.com/Vaibhav9520/Real-time-Video-Conferencing",
      webapp: "https://github.com/Vaibhav9520/Real-time-Video-Conferencing",
    },
    {
      id: 2,
      title: "MERN Website for Client",
      description:
      "A full-stack MERN web application built for a client, focusing on dynamic functionality and a seamless user experience. The platform features a responsive and engaging interface developed with React.js and Tailwind CSS, while the backend, powered by Node.js and Express.js, handles secure authentication and authorization using JWT. Real-time interactivity is enabled through Socket.io, enhancing user engagement and responsiveness.",
      image: movierecLogo,
      tags: ["Tailwind CSS", "Node.js", "Express.js", "MongoDB", "WebRTC", "Socket.io", "JWT"],
      github: "https://github.com/Vaibhav9520/Shopping-website",
      webapp: "https://github.com/Vaibhav9520/Shopping-website",
    },
    {
      id: 3,
      title: "LMS",
      description:
      "A robust and customizable Learning Management System (LMS) developed using PHP, designed to streamline the management of courses, users, and educational content. The platform enables instructors to create and organize lessons, manage student progress, and track performance with ease. With a user-friendly interface and efficient backend logic, it offers a complete solution for digital learning and training management.",
      image: npmLogo,
      tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Vaibhav9520/LMS",
      webapp: "https://github.com/Vaibhav9520/LMS",
    },
    {
      id: 4,
      title: "Cake Bake",
      description:
        "A visually appealing and user-friendly React website designed for a cake baking business. The platform showcases a variety of custom cakes with detailed descriptions and images, allowing users to browse, order, and inquire with ease. Built using React.js and styled with modern UI techniques, the site delivers a smooth and engaging experience for cake lovers and potential customers alike.",
      image: taskremLogo,
      tags: ["JavaScript", "React.js", "HTML", "CSS"],
      github: "https://github.com/Vaibhav9520/CakeBake",
      webapp: "https://github.com/Vaibhav9520/CakeBake",
    },
    {
      id: 5,
      title: "Binary Tree Visualization",
      description:
        "An interactive Binary Tree Visualizer web application designed to help users understand and explore data structures and algorithms (DSA). Built using HTML, CSS, and JavaScript, it features dynamic animations and a clean interface that visually represents binary tree operations like insertion, deletion, and traversal, making learning and debugging more intuitive for students and developers.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "DSA"],
      github: "",
      webapp: "",
    },
    {
      id: 6,
      title: "Music Web Player",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Vaibhav9520/Spotify-clone",
      webapp: "https://github.com/Vaibhav9520/Spotify-clone",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://removeyourbg.netlify.app/",
      webapp: "https://removeyourbg.netlify.app/",
    },
  ];  