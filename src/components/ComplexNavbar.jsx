import React from "react";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars2Icon } from "@heroicons/react/24/solid";
import logo from "../assets/SHKlogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaFileDownload } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";

const navListMenuItems = [
  { title: "Home", href: "#home" },
  { title: "About Me", href: "#about" },
  { title: "Tech", href: "#Tech" },
  { title: "Internship", href: "#internship" },
  { title: "Projects", href: "#projects" },
  { title: "Contact Me", href: "#contact" },
];

function NavListMenu() {
  return (
    <div className="hidden lg:flex space-x-6">
      {navListMenuItems.map(({ title, href }) => (
        <a
          href={href}
          key={title}
          className="text-blue-gray-900 hover:text-blue-gray-700 transition-colors"
        >
          {title}
        </a>
      ))}
    </div>
  );
}

function MobileNavListMenu() {
  return (
    <div className="flex flex-col space-y-4">
      {navListMenuItems.map(({ title, href }) => (
        <a
          href={href}
          key={title}
          className="text-blue-gray-900 hover:text-blue-gray-700 transition-colors"
        >
          {title}
        </a>
      ))}
      <div className="flex justify-center gap-4 text-2xl">
        <a
          href="src/assets/Sheik Mohamed's Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative text-yellow-200 hover:text-yellow-400"
        >
          <FaFileDownload />
          <span className="absolute top-8 left-1/2 -translate-x-1/2 translate-y-0 opacity-0 rounded bg-gray-800 p-2 text-sm text-white transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">
            Resume
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/sheik-mohamed-19802324b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Sheik1930"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white-700 hover:text-gray-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/sheik_.03/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export function ComplexNavbar() {
  const { scrollYProgress } = useScroll();
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MTNavbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6 bg-transparent">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left bg-cyan-500"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <div
          className="flex flex-shrink-0 items-center cursor-pointer"
          onClick={() => window.location.reload()}
        >
          <img className="mx-2 w-16" src={logo} alt="logo" />
        </div>
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <NavListMenu />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <a
            href="src/assets/Sheik Mohamed's Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-yellow-200 hover:text-yellow-400"
          >
            <FaFileDownload />
            <span className="absolute top-8 left-1/2 -translate-x-1/2 translate-y-0 opacity-0 rounded bg-gray-800 p-2 text-sm text-white transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">
              Resume
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/sheik-mohamed-19802324b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Sheik1930"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-700 hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/sheik_.03/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <MobileNavListMenu />
      </MobileNav>
    </MTNavbar>
  );
}

export default ComplexNavbar;
