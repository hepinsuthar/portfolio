import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const courseCertifications = [
  {
    title: "HTML5 & CSS Certification",
    org: "LetsUpgrade",
    issue: "2024",
    link: "https://drive.google.com/file/d/1oEVXyay1RQX5JBD5zOMfvHnR5NOFCZGq/view",
  },
  {
    title: "JavaScript Certification",
    org: "LetsUpgrade",
    issue: "2024",
    link: "https://drive.google.com/file/d/1pCU9EiP1Ir3-zsqKun-Hml0v6uTxmB-5/view",
  },
  {
    title: "Bootstrap Certification",
    org: "LetsUpgrade",
    issue: "2024",
    link: "https://drive.google.com/file/d/1zREnNXN-3sgRyuWoK7CXOqL6614oOxd7/view",
  },
  {
    title: "Git & GitHub Certification",
    org: "LetsUpgrade",
    issue: "2024",
    link: "https://drive.google.com/file/d/1rEvJ9cNL6IUPWE5GOXSlMCAnUO3V9cKZ/view",
  },
  {
    title: "Full-Stack Web Dev Bootcamp",
    org: "L&T Edutech",
    issue: "2025",
    link: "https://drive.google.com/file/d/1JU-_K0kvWEXGqWOEd4EtnHCDIJrt1i8i/view",
  },
  {
    title: "Certificate Of Virtual Internship",
    org: "Eduskill",
    issue: "2025",
    link: "https://drive.google.com/file/d/1DMWrYraSaJu37ncg4t4Q9q9gLcofX3bk/view",
  },
];

const participationCertificates = [
  {
    title: "ABHIGYAAN-2023 International Techfest (Code Hunt)",
    org: "Swami Sachchidanand Polytechnic College, Visnagar",
    issue: "2023",
    link: "https://drive.google.com/file/d/15HI_ZHMXvMZ0k8NsHnXOAsmE09Gf6lbV/view?usp=sharing",
  },
  {
    title: "ABHIGYAAN-2024 International Techfest (Project Presentation)",
    org: "Swami Sachchidanand Polytechnic College, Visnagar",
    issue: "2024",
    link: "https://drive.google.com/file/d/1A8cwJIs8jhkpiQ0HGYMUHbw7TaEz5WCg/view?usp=drive_link",
  },
  {
    title: "Two Day Workshop on Quantum Technology, AIML & ITS Application (National Science Day Celebration)",
    org: "Sankalchand Patel College of Engineering, Visnagar",
    issue: "2025",
    link: "https://drive.google.com/file/d/1O23d5OJZCZ5bgKD5i8xRgHlpnQaliRo_/view?usp=drive_link",
  },
  {
    title: "Engi360 – Innoverse 2025",
    org: "Science Club, (Sankalchand Patel College Of Engineering, Visnagar)",
    issue: "2025",
    link: "https://drive.google.com/file/d/1CYkPZx4l1oo0sI7uyofb7uCPrFdQnhi-/view?usp=sharing",
  },
];

const googleCertificates = [
  {
    title: "Google Cloud Skill Boost",
    org: "Google Cloud",
    issue: "2025",
    link: "https://www.cloudskillsboost.google/public_profiles/55cc6eb0-b53e-410a-9337-e6a87a91e3ef",
  },
];

const Certifications = () => {
  return (
    <section className="py-20 px-6 bg-muted/30" id="certifications">
      <div className="max-w-6xl mx-auto px-6">

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            🏆 <span className="text-primary">Certifications</span>
          </h2>
          <div className="section-underline" />
        </motion.div>

        {/* ================= Course Certifications ================= */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">
            1️⃣ Course Certifications
          </h3>

          <div className="grid md:grid-cols-3 gap-3">
            {courseCertifications.map((cert, i) => (
              <motion.a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 flex items-start gap-4 hover-card-lift hover-glow group"
              >
                <Award
                  className="text-primary mt-1 shrink-0 group-hover:scale-110 transition-transform"
                  size={28}
                />
                <div className="flex-1">
                  <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{cert.org}</p>
                  <p className="text-muted-foreground text-sm">{cert.issue}</p>
                </div>
                <ExternalLink
                  className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1"
                  size={18}
                />
              </motion.a>
            ))}
          </div>
        </div>

        {/* ================= Participation ================= */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">
            2️⃣ Participation Certificate
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {participationCertificates.map((cert, i) => (
              <motion.a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 flex items-start gap-4 hover-card-lift hover-glow group"
              >
                <Award
                  className="text-primary mt-1 shrink-0 group-hover:scale-110 transition-transform"
                  size={28}
                />
                <div className="flex-1">
                  <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{cert.org}</p>
                  <p className="text-muted-foreground text-sm">{cert.issue}</p>
                </div>
                <ExternalLink
                  className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1"
                  size={18}
                />
              </motion.a>
            ))}
          </div>
        </div>

        {/* ================= Google Cloud ================= */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">
            3️⃣ Google Cloud Student Program
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {googleCertificates.map((cert, i) => (
              <motion.a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 flex items-start gap-4 hover-card-lift hover-glow group"
              >
                <Award
                  className="text-primary mt-1 shrink-0 group-hover:scale-110 transition-transform"
                  size={28}
                />
                <div className="flex-1">
                  <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{cert.org}</p>
                  <p className="text-muted-foreground text-sm">{cert.issue}</p>
                </div>
                <ExternalLink
                  className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1"
                  size={18}
                />
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
