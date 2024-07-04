import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.a 
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 block"
        >
          {CONTACT.address}
        </motion.a>
        <motion.a 
          href={`tel:${CONTACT.phoneNo}`}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 block"
        >
          {CONTACT.phoneNo}
        </motion.a>
        <motion.a 
          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfrKhxGQwkgGdkFFRrnDPBQvPHmkmBDlhMXLRfRXJGhPXxMbkvtqZhwLJzrRrSHqWnmrbq"
          target="_blank"
          rel="noopener noreferrer"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="border-b"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;