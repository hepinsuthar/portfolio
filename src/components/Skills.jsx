import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiCplusplus } from "react-icons/si";
import { TbLetterC } from "react-icons/tb";

const skills = [
  { name: "HTML5", icon: FaHtml5},
  { name: "CSS3", icon: FaCss3Alt},
  { name: "JavaScript", icon: FaJs},
  { name: "Bootstrap", icon: FaBootstrap},
  { name: "Tailwind CSS", icon: SiTailwindcss},
  { name: "Python", icon: FaPython},
  { name: "C", icon: TbLetterC},
  { name: "C++", icon: SiCplusplus},
  { name: "Git", icon: FaGitAlt},
  { name: "GitHub", icon: FaGithub},
  { name: "MySQL", icon: SiMysql},
];

const doubledSkills = [...skills, ...skills];

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-muted/30 overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="section-underline" />
        </motion.div>

        <div className="mt-12 relative">

          {/* fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-scroll-left w-max">

            {doubledSkills.map((skill, i) => {
              const Icon = skill.icon;

              return (
                <div
                  key={`${skill.name}-${i}`}
                  className="
                    flex-shrink-0 w-44 mx-3
                    bg-card
                    border border-transparent
                    hover:border-primary
                    rounded-2xl
                    p-6
                    text-center
                    hover-card-lift hover-glow
                    group
                    transition-all duration-300
                  "
                >
                  <Icon
                    className="mx-auto mb-4 text-primary group-hover:scale-125 transition-transform duration-300"
                    size={40}
                  />

                  <p className="font-semibold text-sm">
                    {skill.name}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;