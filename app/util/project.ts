export const projects: project[] = [
  {
    name: "ezemail",
    des: "ezemail is a platform that helps users enhance their email writing skills with AI-driven feedback!",
    techStack: ["NextJs", "Auth0", "llama"],
    link: "https://ezemail-beta.vercel.app/",
  },
  {
    name: "CipherTalk",
    des: "CipherTalk is a secure, real-time chat application that ensures user privacy through end-to-end encryption.The application is designed to provide a seamless messaging experience while prioritizing security and scalability",
    techStack: ["React", "Express", "Prisma ORM", "PostgreSQL"],
    link: "https://github.com/wiishal/CipherTalk",
  },
  {
    name: "AI assisted todo app",
    des: "The AI-Assisted To-Do List App is a modern task management application designed to help users efficiently manage their tasks with AI-powered suggestions",
    techStack: ["React", "PostgreSQl", "hono(Cloudfare workers)"],
    link: "https://todo-six-zeta-27.vercel.app/",
  },
];

interface project {
  name: string;
  des: string;
  techStack: string[];
  link: string;
}
