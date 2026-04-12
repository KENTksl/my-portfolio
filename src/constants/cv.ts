import type { CvData } from "@/types/cv";

export const cv: CvData = {
  fullName: "Nguyen Huynh Quang Minh",
  headline: "Backend Developer Intern",
  location: "Ho Chi Minh City",
  birthDate: "21/12/2004",
  avatarSrc: "/avatar.png",
  contacts: [
    { label: "Phone", value: "0779567822", href: "tel:0779567822" },
    { label: "Email", value: "quangminh211204@gmail.com", href: "mailto:quangminh211204@gmail.com" },
    { label: "GitHub", value: "github.com/KENTksl", href: "https://github.com/KENTksl" },
  ],
  summary:
    "Backend Developer with hands-on experience in Java Spring Boot and Node.js, focused on building scalable APIs, database-driven systems, and clean architecture. Developed personal projects involving authentication, data management, and Docker-based deployment. Seeking a 3-month Backend Internship to contribute to production-grade systems and grow into a full-time Backend Engineer role.",
  skills: [
    { title: "Programming Languages", items: ["Java", "JavaScript", "C#"] },
    { title: "Backend Technologies", items: ["Spring Boot", "Node.js", "Express.js", "REST APIs"] },
    { title: "Databases", items: ["SQL Server", "MySQL", "MongoDB", "Firebase"] },
    { title: "Tools & DevOps", items: ["Git", "GitHub", "GitHub Actions", "Docker", "Postman", "VS Code"] },
    { title: "Soft Skills", items: ["Problem-solving", "Logical thinking", "Team collaboration", "Rapid learning"] },
  ],
  projects: [
    {
      name: "Football Tournament Web",
      period: "2025 - 2026",
      subtitle: "Backend-focused Web Application Development",
      technologies: ["Java 17", "Spring Boot", "MySQL", "Docker", "Thymeleaf"],
      repositoryUrl: "https://github.com/KENTksl/java-football-tournament",
      highlights: [
        "Built a Spring Boot and Thymeleaf web application for football tournament management with separate user and admin workflows.",
        "Implemented authentication and role-based authorization using Spring Security.",
        "Developed core modules including match scheduling, standings, bracket management, and analytics visualization with Chart.js.",
        "Containerized the application with Docker Compose to simplify local setup and deployment.",
      ],
    },
    {
      name: "Sports Tournament MVC",
      period: "09/2025 - 12/2025",
      subtitle: "Backend Development",
      technologies: ["Node.js", "Express.js", "MongoDB", "EJS"],
      repositoryUrl: "https://github.com/KENTksl/sports-tournament-mvc",
      highlights: [
        "Built a sports tournament management web application using Node.js and Express.js.",
        "Developed backend modules for tournament organization, team management, and match scheduling.",
        "Integrated database operations for storing tournament data and user-related information.",
        "Structured the application following MVC architecture for maintainability and scalability.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Information Technology",
      school: "HUTECH University",
      period: "2022 - 2026",
      specialization: "Software Engineering",
      gpa: "3.61 / 4.0",
      expectedGraduation: "2026",
    },
  ],
};
