import logo from "../assets/SHKlogo.png";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFileDownload,
} from "react-icons/fa";
import { motion, useScroll } from "framer-motion";

const Navbar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <nav className="relative mb-20 flex items-center justify-between py-6">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left bg-cyan-500"
        style={{ scaleX: scrollYProgress }}
      />

      <div
        className="flex flex-shrink-0 items-center cursor-pointer"
        onClick={() => window.location.reload()}
      >
        <img className="mx-2 w-16" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href=""
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
    </nav>
  );
};

export default Navbar;
