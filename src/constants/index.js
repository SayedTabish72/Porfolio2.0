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
  internList,
  Skilzen,
  GSSoC,
  Wix,
  InternList,
  ChatApp,
  attendence,
  Extension,
  Calculator,
  Encription,
  Task,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",   
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern (Next.js, Nest)",
    company_name: "Skilzen (Remote)",
    icon: Skilzen,
    iconBg: "#383E56",
    date: " Apr 2022 – jun 2022",
    points: [
      "Developing and maintained RESTful APIs for storing Public-Key and Private-Key data. I ensured that the Public-Key data was stored in a public database, while the Private-Key data was kept secure.",
      "I gained experience in using Material UI to design and implement responsive and user-friendly interfaces. I also collaborated with team members to identify and resolve issues in a timely and efficient manner.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Member of Technical Staff",
    company_name: "InternList",
    icon: internList,
    iconBg: "#E6DEDD",
    date: " jul 2022 - present 2023",
    points: [
      "Building and maintaining web-based applications that assist job seekers in being employed.",
      "To produce high-quality products, I work with cross-functional small teams that include designers, and developers.",
      "Putting responsive design into action and ensuring cross-browser compatibility.",
      "Participation in code reviews and constructive criticism to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Girl script summer of code 2022",
    icon: GSSoC,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Three-month-long Open-Source Program conducted every summer by the Girlscript Foundation",
      "Over the course of four months, I will participate to a variety of initiatives under the close supervision of professional mentors.Every summer, the Girlscript Foundation hosts a three-month Open-Source Programme. ",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "HTML, Flutter, Data Structures, Artificial Intelligence (AI), HTML5, Cascading Style Sheets (CSS), and React.js are all skills.",
    ]},
  {
    title: "Full stack Developer",
    company_name: "Wix.com",
    icon: Wix,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Designed numerous websites for clients (including individuals, startups, and businesses).WIX.com, JavaScript, and HTML/CSS were used.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "InternList",
    description:
      "Web-based platform that allows startups, and job-seekers looking to work at startups. HiringBoat strives to put job seekers first, giving them free access to search for jobs, post resumes, and research companies. Every day, we connect millions of people to new opportunities.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "orange-text-gradient",
      },
      {
        name: "Antd",
        color: "green-text-gradient",
      },
    ],
    image: InternList,
    source_code_link: "https://www.sayedtabish.co.in/internlist",
  },
  {
    name: "Real-Time ChatApp",
    description:
      "Real-time chat uses Web-based apps, which permit communication that is usually addressed directly but is anonymous among users in a multi-user environment. Common real-time chat programs and protocols include: Apple's Messages. Google Talk. AOL Instant Messenger (AIM)",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "socket io",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "orange-text-gradient",
      },
      {
        name: "Antd",
        color: "green-text-gradient",
      },
    ],
    image: ChatApp,
    source_code_link: "https://github.com/SayedTabish72/Real-Time-Chat-Application",
  },
  {
    name: "Face-Attendance",
    description:
      "In this project I'm going to Show how to perform Facial recognition with high accuracy. I will first briefly go through the basic implementation. Then I will created an Attendance project that.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Histogram of oriented gradients (HOG) ",
        color: "green-text-gradient",
      },
     
    ],
    image: attendence,
    source_code_link: "https://github.com/SayedTabish72/Face-Attendance",
  },
  {
    name: "Task-Manager",
    description: "To-do lists offer a way to increase productivity, stopping you from forgetting things, helps prioritise tasks, manage tasks effectively, use time wisely and improve time management as well as workflow.",
    tags: [
      {
        name: "Html5",
        color: "blue-text-gradient"
      },
      {
        name: "CSS3",
        color: "green-text-gradient"
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient"
      }
    ],
    image: Task,
    source_code_link: "https://github.com/SayedTabish72/Face-Attendance"
  }, 
  {
    name: "Image-Encryption-and-Decryption-using-Java",
    description:
      "Image-Encryption-and-Decryption-using-Java: Encryption is the process of converting information or data into a secrete code, especially to prevent unauthorized access. In these cases also we will do the same, For encryption, we will convert the image into a byte array and after converting it we will apply XOR operation on each value of the byte array and after performing XOR",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Histogram of oriented gradients (HOG) ",
        color: "green-text-gradient",
      },
     
    ],
    image: Encription,
    source_code_link: "https://github.com/SayedTabish72/Image-Encryption-and-Decryption-using-Java",
  },
  {
    name: "Face-Attendance",
    description:
      "In this project I'm going to Show how to perform Facial recognition with high accuracy. I will first briefly go through the basic implementation. Then I will created an Attendance project that.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Histogram of oriented gradients (HOG) ",
        color: "green-text-gradient",
      },
     
    ],
    image: attendence,
    source_code_link: "https://github.com/SayedTabish72/Face-Attendance",
  },
  {
    name: "Fun-Chrome-Extension",
    description:
      "With the joke extension get 100 new jokes delivered to your thinking module with the simple click of a button. The jokes are updated every 24 hours so check back often. The joke extension keeps track of the joke you viewed last so you don't have to go through the process of clicking through old viewed jokes. All jokes are polled from the top 100 of the last 24 hours on.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "Css3",
        color: "green-text-gradient",
      },
      {
        name: "Manifest.json",
        color: "orange-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
     
    ],
    image: Extension,
    source_code_link: "https://github.com/SayedTabish72/Jokes-Fun-Chrome-Extension",
  },
  {
    name: "Simple Calculator",
    description:
      "As we know, the Calculator is a portable device used in our daily life to perform various mathematical functions such as addition, subtraction, multiplication, division, root, etc used to solve complex tasks such as trigonometry functions, degrees, exponential operators, log functions, hyperbolic functions, square root.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "Css3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
     
    ],
    image: Calculator,
    source_code_link: "https://github.com/SayedTabish72/Face-Attendance",
  },
];

export { services, technologies, experiences, testimonials, projects };
