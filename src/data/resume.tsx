import { Icons } from "@/components/icons";
import { HomeIcon, DownloadIcon } from "lucide-react";

export const DATA = {
  name: "Rohit Singh",
  initials: "RS",
  url: "https://rohit-dev.netlify.app",
  location: "Kolkata, India",
  locationLink: "https://www.google.com/maps/place/Newtown,+Kolkata,+West+Bengal/@22.5895636,88.4804413,12z/data=!4m6!3m5!1s0x3a0275350398a5b9:0x75e165b244323425!8m2!3d22.5753931!4d88.4797903!16zL20vMGMwNmhz?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D",
  description:
    "Full Stack Java Developer | Software Engineer at Tech Mahindra | Building scalable web apps with Java, Spring Boot, React.js & Next.js",
  summary:
    "I’m a Full Stack Web Developer skilled in Java, Spring Boot, React.js, and Next.js. Currently working as a Software Engineer at Tech Mahindra, I specialize in creating efficient, scalable, and user-friendly web applications with clean architecture and modern design principles.",
  avatarUrl: "/me.png",
  skills: [
    "Java",
    "Spring Boot",
    "React JS",
    "Next.js",
    "Typescript",
    "Node.js",
    "MySQL",
    "Postgres",
    "MongoDB",
    "Firestore",
    "Docker",
    "Git",
    "REST APIs",
    "GraphQL",
    "Cloudflare Workers"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home", download: false },
    { href: "/cv", icon: DownloadIcon, label: "Download CV", download: true },
  ],
  contact: {
    email: "rohitsingh20082002@gmail.com",
    tel: "+917679440150",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/RohitSingh-dev",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rohitsingh-dev",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/greed_is_my_sin",
        icon: Icons.x,

        navbar: true,
      },
      Pintrest: {
        name: "Pintrest",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.pintrest,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/?view=cm&to=rohitsingh20082002@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Tech Mahindra",
      href: "https://techmahindra.com",
      badges: [],
      location: "Remote",
      title: "Associate Software Engineer",
      logoUrl: "/techM.png",
      start: "Dec 2024",
      end: "Present",
      description:
        "As an Associate Software Engineer at Tech Mahindra, I develop full-stack web applications using Java, React.js, and REST APIs. I build responsive UIs, manage state with hooks, and work with tools like Git, Jenkins, JIRA, and Selenium to support CI/CD and test automation for efficient, high-quality software delivery.",
    },
    {
      company: "EBest Solutions Pvt. Ltd.",
      href: "https://ebestsolutions.net/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Trainee",
      logoUrl: "/ebest.png",
      start: "Sep 2024",
      end: "Dec 2024",
      description:
        "As a Software Engineer Trainee at EBest Solutions Pvt. Ltd., I developed web applications using React.js, Bootstrap, and REST APIs, improving UI performance and scalability. I built backend services with Java, Spring Boot, and PostgreSQL, ensuring efficient data handling, and contributed to Agile sprints to enhance feature delivery and team productivity.",
    },
  ],
  education: [
    {
      school: "Bengal College of Engineering and Technology",
      href: "https://bcetdgp.ac.in/",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl: "/bcet.png",
      start: "2020",
      end: "2024",
    },
    {
      school: "Sri Chaitanya Techno School",
      href: "https://srichaitanya.net/",
      degree: "Intermediate (MPC)",
      logoUrl: "/chaitanya.png",
      start: "2018",
      end: "2020",
    },
    {
      school: "St. Xavier's School",
      href: "https://sxsdgp.edu.in/",
      degree: "Matriculation",
      logoUrl: "/SXS.png",
      start: "2007",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Notion-AI Clone",
      href: "https://notion-clone-nuns9dfy9-rohit-singhs-projects-a0526b8a.vercel.app/",
      dates: "May 2025 - July 2025",
      active: true,
      description:
        "Built a full-stack Notion-style AI note-taking platform with real-time collaboration, rich-text editing, and AI-powered content generation using Next.js and OpenAI API. Integrated Firebase for scalable data handling and Cloudflare Workers for serverless backend logic. Implemented secure Clerk authentication with role-based access for seamless user collaboration.",
      technologies: [
        "Next.js",
        "Firebase",
        "Cloudflare Workers",
        "Clerk Auth",
        "OpenAI API",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://notion-clone-nuns9dfy9-rohit-singhs-projects-a0526b8a.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/RohitSingh-dev/notion-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Magnet",
      href: "#",
      dates: "Jan 2024 - Apr 2024",
      active: true,
      description:
        "Developed a full-stack social media platform using Java, Spring Boot, and React as part of a final-year project. Implemented features like real-time messaging, live notifications, and post creation to enhance user engagement and interactivity.",
      technologies: [
        "Java",
        "Spring Boot",
        "Maven",
        "React",
        "Redux",
        "MySQL",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/RohitSingh-dev/social-media",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "School Management System",
      href: "#",
      dates: "Sept 2023 - Dec 2023",
      active: true,
      description:
        "Built a digital management system for schools to handle attendance, student results, and fee payments. Automated MySQL operations with Hibernate and JPA, implemented security using Spring Security, and ensured reliability through unit testing with JUnit and Mockito.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "React",
        "MySQL",
        "Hibernate",
        "JUnit",
        "Mockito",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/RohitSingh-dev/school_management",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    ,
    {
      title: "House Renting System",
      href: "#",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed a backend system for a house rental platform using Spring Boot, enabling property listing management, tenant registration, and booking workflows. Implemented secure authentication, RESTful APIs, and integrated MySQL for efficient data persistence. Focused on scalability, clean architecture, and code maintainability.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Hibernate",
        "JPA",
        "MySQL",
        "Maven",
        "Postman",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/RohitSingh-dev/house-renting-website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
