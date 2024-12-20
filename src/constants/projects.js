import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const PROJECTS = [
  {
    title: "Universal International",
    image: project1,
    description:
      "A fully functional digital marketing and referral system for Virtusa's clients, providing services through online channels to reach and engage with the target audience.",
    technologies: [
      "Svelte",
      "Golang",
      "DynamoBD",
      "AWS",
      "API Gateway",
      "Adobe XD",
    ],
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS", "AWS"],
  },
  {
    title: "P&M Website",
    image: project3,
    description:
      "A fully functional wedding website, with seamless animation and also having RSVP support",
    technologies: ["HTML", "CSS", "React", "Node.js", "DynamoDB", "AWS"],
  },
  {
    title: "FurnX",
    image: project4,
    description:
      "An application for furniture in realtime using Agumented Reality with accurate measuring.",
    technologies: ["ReactNative", "Unity", "Blender", "Vuforia"],
  },
];
