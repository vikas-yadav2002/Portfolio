import { Project, Skill, Experience, Education, Testimonial, SocialLink } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Pay Up: Multi-App Transaction Platform",
    description: "A secure and scalable multi-app transaction platform enabling real-time payment approvals via bank webhooks.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "NextAuth", "Turborepo"],
    github: "https://github.com/vikas-yadav2002/PayUp",
    demo: "https://payup-demo.com"
  },
  {
    id: 2,
    title: "Expressive Blogging App",
    description: "A high-performance blogging platform handling secure authentication, role-based access, and real-time content updates.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    tags: ["React", "TypeScript", "Hono", "PostgreSQL", "Prisma", "JWT"],
    github: "https://github.com/vikas-yadav2002/Menifestoza",
    demo: "https://expressive-blogging.com"
  }
];

export const skills: Skill[] = [
  { name: "React", icon: "react", level: 90 },
  { name: "TypeScript", icon: "typescript", level: 85 },
  { name: "Node.js", icon: "nodejs", level: 80 },
  { name: "JavaScript", icon: "javascript", level: 95 },
  { name: "HTML/CSS", icon: "html", level: 90 },
  { name: "MongoDB", icon: "mongodb", level: 75 },
  { name: "PostgreSQL", icon: "postgresql", level: 80 },
  { name: "NextAuth", icon: "nextauth", level: 75 },
  { name: "AWS", icon: "aws", level: 65 },
  { name: "Docker", icon: "docker", level: 70 }
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Front-End Developer Intern",
    company: "Porfyro, Hyderabad, India",
    duration: "June 2024 – Nov 2024",
    description: [
      "Designed & developed 5+ responsive websites, increasing client engagement by 20%.",
      "Optimized website performance, reducing page load times by 30%.",
      "Collaborated with international clients across 3+ countries, translating business requirements into functional web interfaces.",
      "Resolved 15+ critical bugs, enhancing website functionality and overall performance.",
      "Built fully responsive user interfaces using React.js and Tailwind CSS, increasing mobile compatibility by 40%."
    ],
    technologies: ["React.js", "Tailwind CSS", "Next.js", "TypeScript"]
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelors of Technology – Computer Science Engineering",
    institution: "Chaudhary Devi Lal University, Sirsa, India",
    duration: "Nov 2022 – June 2026 (Expected)",
    description: "Specialized in Web Technologies and Software Development."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "InnovateTech",
    testimonial: "One of the most talented developers I've worked with. Delivers high-quality code consistently and always meets deadlines.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/vikas-yadav2002",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vikas-yadav-65a47b2bb/",
    icon: "linkedin"
  },
  // {
  //   name: "LeetCode",
  //   url: "https://leetcode.com/u/VikasYadav2002/",
  //   icon: "leetcode"
  // },
  // {
  //   name: "GFG",
  //   url: "https://www.geeksforgeeks.org/user/vy3484z7w/",
  //   icon: "gfg"
  // },
  // {
  //   name: "Code360",
  //   url: "https://www.naukri.com/code360/profile/adc01f59-2d82-425b-a9c3-2bc3a5dc4dd8",
  //   icon: "code360"
  // },
  {
    name: "Email",
    url: "mailto:vy348697@gmail.com",
    icon: "mail"
  }
];

export const personalInfo = {
  name: "Vikas Yadav",
  role: "Full Stack Developer",
  bio: "Passionate full stack developer with expertise in building scalable web applications. Specialized in React.js, Next.js, TypeScript, and cloud technologies.",
  location: "India",
  email: "vy348697@gmail.com",
  phone: "+91 9027625085",
  availability: "Open to new opportunities"
};
