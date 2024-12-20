import { HERO_CONTENT } from "../constants/const";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-col items-center lg:justify-center text-center">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
        >
          Sheik Mohamed
        </motion.h1>
        <motion.span
          variants={container(0.3)}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          className="bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent"
        >
          Full Stack Developer | Cloud Engineer
        </motion.span>
        <motion.p
          variants={container(0.6)}
          initial="hidden"
          animate="visible"
          className="my-2 max-w-xl py-6 font-light tracking-tighter"
        >
          {HERO_CONTENT}
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
