import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const education = [
  {
    num: 1,
    title: "Bachelor of Technology in Information Technology",
    school: "Sankalchand Patel University",
    date: "Expected 2027",
    // desc: "CGPA: 7.9/10. Pursuing comprehensive study in IT with focus on web technologies and frontend development.",
  },
  {
    num: 2,
    title: "Diploma in Computer Engineering",
    school: "Sankalchand Patel University",
    date: "Completed May 2024",
    // desc: "CGPA: 8.5/10. Strong foundation in computer science and programming fundamentals.",
  },
  {
  num: 3,
  title: "Primary & Secondary School (1st – 10th)",
  school: "Shetshri M. L. & Shethshri M. H. Sardar Patel Vidyalaya",
  date: "Completed 2021",
  }
];

const EducationSection = () => {
  return (
    <section className="py-20 px-6" id="education">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Education
          </h2>
          <div className="section-underline" />
        </motion.div>

        {/* Academic Section */}
        <div className="mt-12">
          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-12 border-l-2 border-primary"
              >
                <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {edu.num}
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover-card-lift hover-glow">
                  <h4 className="text-xl font-bold">{edu.title}</h4>
                  <p className="text-primary font-semibold mt-1">{edu.school}</p>
                  <p className="text-muted-foreground text-sm flex items-center gap-2 mt-2">
                    <Calendar size={14} />
                    {edu.date}
                  </p>
                  <p className="text-muted-foreground mt-3">{edu.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
