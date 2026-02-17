import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay }
    })
  };

  return (
    <footer className="bg-background text-foreground border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* LEFT - Logo + About */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg"
              >
                HS
              </motion.div>
              <h3 className="text-xl font-bold">Hepin Suthar</h3>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Passionate frontend developer creating beautiful,
              responsive web experiences with modern technologies.
            </p>
          </motion.div>

          {/* MIDDLE - Quick Links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-muted-foreground">
              {["About", "Skills", "Projects", "Contact"].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-primary transition"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT - Social */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.5}
          >
            <h3 className="text-xl font-bold mb-6">Follow</h3>

            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, link: "https://github.com/HepinSuthar" },
                { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/hepin-suthar-ab2446301/" },
                { icon: <Instagram size={20} />, link: "https://www.instagram.com/hepin_suthar.26" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom Line */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.7}
          className="border-t border-border mt-12 pt-6 flex flex-col  justify-between  items-center text-sm text-muted-foreground"
        >
          <p>© 2026 Hepin Suthar. All rights reserved.</p>

        </motion.div>

      </div>
    </footer>
  );
}
