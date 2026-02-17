import { motion } from "framer-motion";
import about from "../assets/about.jpeg";

const AboutSection = () => {
  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-4xl md:text-5xl font-bold">About <span className="text-primary">Me</span></h2>
          <div className="section-underline" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Frontend Developer crafting beautiful, responsive interfaces with modern technologies. Specialized in HTML5, CSS3, Tailwind CSS, JavaScript, and React.js with a focus on clean code and user experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Currently pursuing my Bachelor's degree in Information Technology, I build web applications with smooth animations and optimal performance. Passionate about continuous learning and exploring emerging frontend technologies.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="flex justify-center">
            <div className="w-72 h-72 rounded-2xl bg-secondary flex items-center justify-center">
              <img src={about} alt="About Me" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
