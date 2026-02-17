import React from "react";
import { motion } from "framer-motion";
import SCMS from "../assets/SCMS.png";

const projects = [
  {
    title: "Smart Complaint Management System",
    description:
      "A full-stack web app for managing student complaints with role-based dashboards.",
    status: "In Progress",
    tech: ["React.js", "Node.js", "MongoDB","Express.js", "Tailwind CSS"],
    image: SCMS,
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="section-underline" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="hover-card-lift bg-card text-card-foreground p-6 rounded-[var(--radius)] shadow-md border"
            >

              {/* IMAGE SECTION */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <span
                  className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full font-medium ${
                    project.status === "Completed"
                      ? "bg-primary text-primary-foreground"
                      : "bg-yellow-400 text-white"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Status Badge */}
              <div className="flex justify-end mb-4">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    project.status === "Completed"
                      ? "bg-primary/10 text-primary"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-2">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-sm px-4 py-2 rounded-lg border border-border hover:bg-muted transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-sm px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
                >
                  Live Demo
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};


export default Projects;
