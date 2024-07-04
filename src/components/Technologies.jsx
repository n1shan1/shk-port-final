import {RiReactjsLine} from "react-icons/ri";
import { FaAws } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";
import { DiMysql } from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import { RiSvelteLine } from "react-icons/ri";
import { SiAmazondynamodb } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { motion } from "framer-motion"


const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity:0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity:0, x: -100 }}
      transition={{ duration: 1.5 }}
      className="flex flex-wrap items-center justify-center gap-4">

       <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">
       <motion.div 
       variants={iconVariants(2.5)}
       initial="initial"
       animate="animate"
       className="rounded-2xl border-4 border-neutral-800 p-4">
       <RiReactjsLine className="text-7xl text-cyan-400 hover:text-cyan-700 "/>
       </motion.div>
       </a>

      <a href="https://docs.aws.amazon.com/" target="_blank" rel="noopener noreferrer">
       <motion.div 
       variants={iconVariants(3)}
       initial="initial"
       animate="animate"
       className="rounded-2xl border-4 border-neutral-800 p-4">
       <FaAws className="text-7xl text-orange-600 hover:text-orange-900 "/>
       </motion.div>
      </a>

      <a href="https://nodejs.org/docs/latest/api/" target="_blank" rel="noopener noreferrer">
       <motion.div 
       variants={iconVariants(5)}
       initial="initial"
       animate="animate"
       className="rounded-2xl border-4 border-neutral-800 p-4">
       <FaNodeJs className="text-7xl text-green-400 hover:text-green-600 "/>
       </motion.div>
       </a>

      <a href="https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene" target="_blank" rel="noopener noreferrer">
       <motion.div 
       variants={iconVariants(2)}
       initial="initial"
       animate="animate"      
       className="rounded-2xl border-4 border-neutral-800 p-4">
       <TbBrandThreejs className="text-7xl  text-white hover:text-gray-400"/>
       </motion.div>
      </a>

       <a href="https://docs.aws.amazon.com/dynamodb/?icmpid=docs_homepage_featuredsvcs" target="_blank" rel="noopener noreferrer">
       <motion.div 
       variants={iconVariants(6)}
       initial="initial"
       animate="animate"
       className="rounded-2xl border-4 border-neutral-800 p-4">
       <SiAmazondynamodb className="text-7xl text-blue-700 hover:text-blue-800 "/>
       </motion.div>
       </a>

      <a href="https://helpx.adobe.com/in/xd/user-guide.html" target="_blank" rel="noopener noreferrer">
       <motion.div 
       variants={iconVariants(4)}
       initial="initial"
       animate="animate"
       className="rounded-2xl border-4 border-neutral-800 p-4">
       <SiAdobexd className="text-7xl text-pink-600 hover:text-pink-800 "/>
       </motion.div>
       </a>

      <a href="https://help.figma.com/hc/en-us" target="_blank" rel="noopener noreferrer">
       <motion.div 
       variants={iconVariants(2.5)}
       initial="initial"
       animate="animate"
       className="rounded-2xl border-4 border-neutral-800 p-4">
       <FaFigma className="text-7xl text-orange-800 hover:text-orange-600 "/>
       </motion.div>
       </a>

      </motion.div>
    </div>
  )
}

export default Technologies
