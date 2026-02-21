import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Menu, X, Sun, Moon } from "lucide-react";

const navLinks = ["About", "Skills", "Education", "Certifications", "Projects", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // ✅ Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // ✅ Toggle theme
  const toggleDark = () => {
    setDark((prev) => {
      const newDark = !prev;

      if (newDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return newDark;
    });
  };

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 
                  bg-background/80 
                  backdrop-blur-lg 
                  border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div
            className="w-10 h-10 rounded-full 
                        bg-primary text-primary-foreground 
                        flex items-center justify-center 
                        font-bold text-sm 
                        transition-transform duration-300 
                        group-hover:scale-110"
          >
            HS
          </div>

          <span
            className="text-xl font-bold text-foreground 
                        transition-colors duration-300 
                        group-hover:text-primary"
          >
            Hepin Suthar
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="nav-link"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-3">

          {/* Dark Toggle */}
          <button
            onClick={toggleDark}
            className="w-9 h-9 rounded-full border border-border 
                        flex items-center justify-center 
                        text-muted-foreground 
                        hover:text-primary 
                        transition-all duration-300"
          >
            {dark ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* Resume Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground 
                        px-5 py-2 rounded-lg text-sm font-medium 
                        flex items-center gap-2 
                        transition-all duration-300"
          >
            <Download size={16} />
            <a href="/HEPIN SUTHAR RESUME.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </motion.button>
        </div>

        {/* Mobile Right Side */}
        <div className="flex md:hidden items-center gap-3">

          <button
            onClick={toggleDark}
            className="w-9 h-9 rounded-full border border-border 
                        flex items-center justify-center 
                        text-muted-foreground 
                        hover:text-primary 
                        transition-all duration-300"
          >
            {dark ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background border-b border-border px-6 py-4 space-y-4"
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left nav-link"
            >
              {link}
            </button>
          ))}

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full bg-primary text-primary-foreground 
                        py-2 rounded-lg text-sm font-medium 
                        flex items-center justify-center gap-2"
          >
            <Download size={16} />
            Resume
          </motion.button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
