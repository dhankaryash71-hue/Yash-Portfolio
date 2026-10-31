export const portfolioData = {
  personal: {
    name: "Yash Dhankar",
    role: "Full Stack Software Developer",
    email: "dhankaryash71@gmail.com",
    phone: "7983817368",
    location: "Ghaziabad, Uttar Pradesh, India",
    resumeUrl: "/Yash_Dhankar_Resume.pdf",
    shortBio:
      "Full Stack Software Developer specializing in building modern, scalable, and user-focused web applications with clean backend architectures and seamless digital experiences.",
    fullBio:
      "Full Stack Software Developer specializing in scalable web development, backend architecture, and database-driven applications. Experienced in building and deploying web applications, working with modern JavaScript frameworks, and managing relational databases. Focused on writing maintainable code, improving user experience, and delivering practical software solutions.",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/dhankaryash71-hue",
        username: "dhankaryash71-hue",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com",
        username: "Yash Dhankar",
      },
      {
        name: "LeetCode",
        url: "https://leetcode.com/u/YASHDHANKAR/",
        username: "YASHDHANKAR",
      },
    ],
  },

  techCategories: [
    {
      id: "languages",
      title: "Languages",
      description: "Core programming and markup languages used for clean software development",
      skills: [
        { name: "JavaScript", role: "Primary Language", accent: "#F7DF1E" },
        { name: "TypeScript", role: "Typed JavaScript", accent: "#3178C6" },
        { name: "Python", role: "Scripting & DSA", accent: "#3776AB" },
        { name: "C++", role: "Systems & DSA", accent: "#00599C" },
        { name: "SQL", role: "Database Queries", accent: "#336791" },
        { name: "HTML5", role: "Semantic Markup", accent: "#E34F26" },
        { name: "CSS3", role: "Styling & Responsive", accent: "#1572B6" },
      ],
    },
    {
      id: "frontend",
      title: "Frontend",
      description: "Modern frameworks and styling tools for reactive, responsive interfaces",
      skills: [
        { name: "React", role: "UI Library", accent: "#61DAFB" },
        { name: "Next.js", role: "Full-Stack React", accent: "#FFFFFF" },
        { name: "Tailwind CSS", role: "Utility-First CSS", accent: "#06B6D4" },
        { name: "HTML5", role: "Semantic Structure", accent: "#E34F26" },
        { name: "CSS3", role: "Modern Styling", accent: "#1572B6" },
      ],
    },
    {
      id: "backend",
      title: "Backend",
      description: "Robust runtime environments and web frameworks for APIs and services",
      skills: [
        { name: "Node.js", role: "JavaScript Runtime", accent: "#5FA04E" },
        { name: "Express", role: "Backend Web Framework", accent: "#9CA3AF" },
      ],
    },
    {
      id: "databases",
      title: "Databases",
      description: "Relational, document, and ORM solutions for data persistence and modeling",
      skills: [
        { name: "PostgreSQL", role: "Relational Database", accent: "#4169E1" },
        { name: "MongoDB", role: "NoSQL Document DB", accent: "#47A248" },
        { name: "MySQL", role: "Relational Database", accent: "#00758F" },
        { name: "Prisma", role: "Next-Gen Node & TS ORM", accent: "#5A67D8" },
      ],
    },
    {
      id: "tools",
      title: "Tools & Platforms",
      description: "Version control, containerization, and modern cloud deployment platforms",
      skills: [
        { name: "Git", role: "Version Control", accent: "#F05032" },
        { name: "GitHub", role: "Code Collaboration", accent: "#E6EDF3" },
        { name: "Docker", role: "Containerization", accent: "#2496ED" },
        { name: "Vercel", role: "Cloud Edge Platform", accent: "#FFFFFF" },
        { name: "Render", role: "Cloud Application Hosting", accent: "#46E3B7" },
      ],
    },
  ],

  projects: [
    {
      id: "queueless",
      title: "Queueless",
      subtitle: "Digital Token and Management System",
      description:
        "A web-based digital token and queue management system that organizes service queues through a digital workflow. Helps replace manual token handling with a more structured approach to queue and service management. Uses Next.js for the web application and PostgreSQL for storing and managing application data.",
      features: [
        "Digital token generation and instant queue position tracking",
        "Structured digital workflow replacing physical token bottlenecks",
        "PostgreSQL database integration with Prisma ORM for reliable record-keeping",
        "Responsive administrative dashboard and client-facing status display",
      ],
      technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
      liveDemo: "https://queueless-eta-one.vercel.app/",
      github: "https://github.com/dhankaryash71-hue/Queueless-Digital-Token-and-Management",
      accentColor: "from-blue-600 via-indigo-600 to-purple-600",
      imagePlaceholderPath: "/projects/queueless.png",
      badge: "Full Stack System",
    },
    {
      id: "shado",
      title: "SHADO",
      subtitle: "Real-Time Chat Application",
      description:
        "A real-time messaging app with private chats, online status, message delivery/read indicators, disappearing messages, authentication, and light/dark themes. Developed with React, Node.js, Express, Socket.IO, PostgreSQL, and Prisma.",
      features: [
        "Real-time bidirectional messaging powered by Socket.IO",
        "Live presence tracking, user typing indicators, and message status ticks",
        "Disappearing messages with automated expiration workflows",
        "Secure user authentication with responsive theme switching (light & dark)",
      ],
      technologies: ["React", "Node.js", "Express", "Socket.IO", "PostgreSQL", "Prisma"],
      liveDemo: "https://shado-your-space.vercel.app/",
      github: "https://github.com/dhankaryash71-hue/SHADO--YOUR-SPACE",
      accentColor: "from-purple-600 via-pink-600 to-blue-600",
      imagePlaceholderPath: "/projects/shado.png",
      badge: "Real-Time App",
    },
  ],

  experience: [
    {
      role: "Software Developer",
      company: "CodesWords",
      type: "Professional Experience",
      points: [
        "Contribute to the development and maintenance of web application features using JavaScript and modern frontend technologies.",
        "Work with frontend components and backend functionality to support application workflows and improve usability.",
        "Collaborate on debugging, testing, and refining features to help maintain reliable, maintainable code.",
      ],
      skills: ["JavaScript", "Frontend Development", "Application Workflows", "Debugging & Testing"],
    },
  ],

  education: {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Dr. A.P.J. Abdul Kalam Technical University",
    location: "Ghaziabad, Uttar Pradesh",
    period: "2023 – 2027",
    score: "SGPA: 7.8 / 10",
    highlights: [
      "Rigorous foundations in algorithms, data structures, and software engineering",
      "Focus on scalable distributed systems, web architectures, and relational databases",
    ],
  },

  dsa: {
    metric: "140+ Problems Solved",
    platform: "LeetCode",
    profileUrl: "https://leetcode.com/u/YASHDHANKAR/",
    topics: [
      { name: "Arrays", count: "35+ Problems", difficulty: "Fundamental & Two-Pointer" },
      { name: "Strings", count: "30+ Problems", difficulty: "Parsing & Substrings" },
      { name: "Linked Lists", count: "20+ Problems", difficulty: "Pointers & Traversal" },
      { name: "Two Pointers", count: "20+ Problems", difficulty: "Window & Array Search" },
      { name: "Stacks & Queues", count: "20+ Problems", difficulty: "Monotonic & FIFO" },
      { name: "Binary Search", count: "15+ Problems", difficulty: "Logarithmic Boundaries" },
    ],
    coursework: [
      "Data Structures & Algorithms (DSA)",
      "Database Management Systems (DBMS)",
      "Operating Systems (OS)",
      "Object-Oriented Programming (OOPs)",
      "Computer Networks (CN)",
    ],
  },
};
