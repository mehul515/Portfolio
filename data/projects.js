export const projects = [
  {
    id: 3,
    title: "Task Grid",
    slug: "task-grid",
    description:
      "Task Grid is a task management web app that helps users organize and manage their daily to-dos using an intuitive drag-and-drop interface. Built using Next.js, Supabase, and Shadcn UI, the app supports real-time updates across devices, Firebase-based authentication, and categorization with deadlines. It also features filtering, reminders, and a clean modern interface with Tailwind CSS.",
    image: "/projects/taskgrid.png",
    category: "Web",
    technologies: ["NextJs", "Supabase", "Tailwind CSS", "Shadcn UI"],
    github: "https://github.com/mehul515/TaskGrid",
    live: "https://taskgridseven.vercel.app",
    features: [
      "Drag-and-drop task organization",
      "User authentication with Firebase",
      "Real-time updates across devices",
      "Task categorization and filtering",
      "Due date reminders and notifications",
    ],
    challenges:
      "Implementing real-time synchronization across multiple devices while maintaining a smooth user experience was a significant challenge.",
  },
  {
    id: 5,
    title: "Weather Junction",
    slug: "weather-forecast-app",
    description:
      "Weather Junction is a sleek weather forecasting web app built with React and the OpenWeather API. It provides real-time weather conditions, forecasts, and geolocation-based search. Designed with Material UI, it features responsive layouts, easy navigation, and accurate time-zone-based data presentation across various countries. Users can search cities, view current and upcoming weather, and receive temperature and humidity insights.",
    image: "/projects/weatherJunction.png",
    category: "Web",
    technologies: ["React", "OpenWeather API", "Material UI"],
    github: "https://github.com/mehul515/Weather-Junction",
    live: "https://weatherjunction.netlify.app",
    features: [
      "Current weather conditions",
      "Location search and geolocation",
      "Responsive design for all devices",
    ],
    challenges:
      "Handling API rate limits and ensuring accurate data presentation across different time zones and locations required careful implementation.",
  },
  {
    id: 6,
    title: "Wanderlust",
    slug: "wanderlust-travel-platform",
    description:
      "Wanderlust is a full-stack travel discovery web application that allows users to explore global destinations, discover local accommodations, and read/write reviews. Built using HTML, CSS, Bootstrap, JavaScript, EJS templating, Express, and MongoDB, it provides an interactive experience with map integrations, user-generated content, and a clean interface. Designed for travelers seeking both inspiration and practical info in one place.",
    image: "/projects/wanderlust.png",
    category: "Web",
    technologies: ["HTML", "CSS", "Bootstrap", "Express", "MongoDB", "EJS", "JavaScript"],
    github: "https://github.com/mehul515/Wanderlust", // update if needed
    live: "https://wanderlust-togt.onrender.com/listings", // update if needed
    features: [
      "Destination discovery with map views",
      "Accommodation listings and reviews",
      "User authentication and content submission",
      "Responsive and mobile-friendly layout",
    ],
    challenges:
      "Managing user-generated content and ensuring smooth integration with location-based data presented challenges in both backend and frontend coordination.",
  },
  {
    id: 7,
    title: "Finlytics",
    slug: "finlytics-ai-finance",
    description:
      "Finlytics is an AI-powered finance management platform that helps users take control of their personal finances. From real-time transaction tracking and budget planning to automated insights and smart analytics, the platform is designed to provide meaningful data-driven suggestions. Users can securely connect their accounts, receive smart notifications, and monitor their savings and expenses via Recharts dashboards. Built with modern tools like Next.js, Tailwind, Supabase, Clerk, and Inngest, the platform also integrates automated email workflows using React Email and Resend.",
    image: "/projects/finlytics.png",
    category: "Web",
    technologies: [
      "Next.js",
      "Shadcn UI",
      "Tailwind CSS",
      "Clerk",
      "Supabase",
      "Inngest",
      "React Email",
      "Resend",
      "Recharts"
    ],
    github: "https://github.com/mehul515/Finlytics  ", // update if repo is private
    live: "https://finlytics-biz.vercel.app", // update if hosted
    features: [
      "AI-powered analytics dashboard",
      "Smart receipt scanning with auto data extraction",
      "Real-time expense tracking and categorization",
      "Automated emails with React Email & Resend",
      "Event-driven flows with Inngest for insights and alerts",
      "Personalized budgeting recommendations",
      "Interactive charts and graphs using Recharts",
      "Secure authentication and account linking with Clerk",
      "User testimonials and results tracking section",
    ],
    challenges:
      "Coordinating multiple services like Resend, Inngest, and Supabase to work seamlessly was a key challenge. Ensuring real-time updates, secure flows, and responsive UI while maintaining low latency and performance was a critical focus.",
  },
  {
    id: 1,
    title: "Portfolio Website",
    slug: "portfolio-website",
    description:
      "A modern and visually appealing portfolio website built using Next.js and Tailwind CSS. This platform showcases my development projects, technical skills, and contact information. The UI leverages Framer Motion to deliver smooth transitions and animations, enhancing the user experience. It includes a responsive layout for all devices, support for dark and light modes, and an interactive contact form with email integration.",
    image: "/projects/portfolio.png",
    category: "Web",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/mehul515/portfolio",
    live: "https://mehulkohad.vercel.app",
    features: [
      "Responsive design for all devices",
      "Dark and light mode support",
      "Animated UI elements with Framer Motion",
      "Contact form with email integration",
    ],
    challenges:
      "Implementing smooth animations while maintaining performance was challenging. I used Framer Motion's lazy loading and optimized the animations to ensure a smooth experience.",
  },
];
