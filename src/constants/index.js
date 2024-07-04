import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a highly motivated and detail-oriented final-year student specializing in web and app development. On the front end, I excel with React, React Native, and Three.js, creating dynamic and engaging user interfaces. My backend expertise covers Node.js, MySQL, and a range of AWS services including EC2, S3, RDS, DynamoDB, and Lambda, enabling me to build robust and scalable applications. With a proven ability to work effectively both independently and as part of a team, I am eager to bring my skills and enthusiasm to a dynamic and collaborative environment. I thrive on challenges and am committed to delivering high-quality solutions that meet and exceed expectations.`;

export const ABOUT_TEXT = `I am a final-year student passionate about technology and innovation, with a focus on web and app development. My journey began with a curiosity for how things work, 
leading me to explore coding and software development. Over the years, I have honed my skills in front-end development using React, React Native, and Three.js, as well as backend
development with Node.js, MySQL, and various AWS services such as EC2, S3, RDS, DynamoDB, and Lambda I enjoy creating dynamic, user-friendly applications that solve real-world problems. My detail-oriented approach ensures that every project is functional, scalable, and efficient. My passion for learning keeps me updated with the latest industry trends and best practices. In addition to my technical skills, I am a strong team player with a proven ability to work independently. I thrive in collaborative environments where I can contribute to innovative projects and learn from others. My ultimate goal is to use my skills and knowledge to develop solutions that positively impact society.`;


export const EXPERIENCES = [
  {
    year: "July 2023 - Dec 2023",
    role: "App and AR Developer",
    company: "Nokia Networks",
    description: `Led a team in developing and maintaining app applications using JavaScript, ReactNative and Node.js. Implemented RESTful APIs and integrated with SQL databases. For Warehouse Stock Allocation and Details are displayed in Augmented Reality.`,
    technologies: ["ReactNative", "MySQL", "Blender", "Vuforia", "Unity"],
  },
  {
    year: "Sep 2022",
    role: "Frontend Developer / Designer",
    company: "Cisco",
    description: `Designed in Figma and developed user interfaces for web applications using  React.Implemented responsive designs and optimized frontend performance.`,
    technologies: ["React", "Figma", "Tailwind CSS"],
  },
];

export const PROJECTS = [
    {
    title: "Universal International",
    image: project1,
    description:
      "A fully functional digital marketing and referral system for Virtusa's clients, providing services through online channels to reach and engage with the target audience.",
    technologies: ["Svelte", "Golang", "DynamoBD", "AWS", "API Gateway", "Adobe XD"],
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

export const CONTACT = {
  address: "Casagrand Savoye, Chennai, India",
  phoneNo: "+91 9361819677",
  email: "sheikmohd1930@gmail.com",
};
