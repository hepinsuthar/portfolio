import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        min-h-screen
        flex items-center justify-center
        bg-background
        text-foreground
        px-6 pt-20 md:px-12
        transition-colors duration-300
      "
    >
      <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl text-left sm:text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-primary">
              Hepin Suthar
            </span>
          </h1>

          <h2 className="text-xl text-left sm:text-2xl md:text-3xl mt-4 font-semibold text-primary h-8 md:h-10">
            <Typewriter
              words={["Frontend Developer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          
          <p className="mt-6 text-left text-muted-foreground text-base md:text-lg max-w-xl mx-auto md:mx-0">
            A passionate frontend developer specializing in React,
            Tailwind CSS, and responsive web design.
            Let's build something amazing together.
          </p>
          {/* SOCIAL MEDIA ICONS */}
          <div className="mt-8 flex gap-5 justify-center md:justify-start">
            <a
              href="https://github.com/HepinSuthar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/hepin-suthar-ab2446301/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://www.instagram.com/hepin_suthar.26"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Instagram size={20} />
            </a>
          </div>
          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                bg-primary
                text-primary-foreground
                px-6 py-3
                rounded-lg
                font-semibold
                transition-all duration-300
              "
            >
              <a href="#projects" className="block w-full h-full">
                View My Work →
              </a>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                border border-border
                px-6 py-3
                rounded-lg
                font-semibold
                bg-secondary
                text-secondary-foreground
                hover:bg-accent
                transition-all duration-300
              "
            >
              <a href="#contact" className="block w-full h-full">
                Get In Touch
              </a>
            </motion.button>
          </div>

          
        </motion.div>
        
        {/* RIGHT SIDE - CODE CARD */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { duration: 0.6 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="
              bg-card
              text-card-foreground
              rounded-xl
              p-4 sm:p-5
              text-xs sm:text-sm
              font-mono
              w-full
              max-w-xs sm:max-w-sm md:max-w-md
              overflow-x-auto
              border border-border
              shadow-lg
              cursor-pointer
            "
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>

            <pre className="whitespace-pre leading-relaxed">
{`const developer = {
  name: "Hepin Suthar",
  role: "Frontend Developer",
  skills: ["React", "Tailwind", "JavaScript", "React js", "python", "git", "github"],
};

export default developer;`}
            </pre>
          </motion.div>
        </motion.div>

      </div>
      
    </section>
  );
}
