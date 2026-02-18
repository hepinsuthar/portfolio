import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com"; // ✅ Import EmailJS

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); // ✅ Website message

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data using EmailJS
    emailjs
      .send(
        "service_iyz3nhg",      // Replace with your Service ID
        "template_3loropo",     // Replace with your Template ID
        {
          from_name: form.name,       
          from_email: form.email,     
          message: form.message,      
        },
        "F0eMLgpIbH4DJ23fe"     // Replace with your Public Key
      )
      .then(
        () => {
          setSuccessMessage("✅ Your message has been sent successfully!");
          setForm({ name: "", email: "", message: "" }); // reset form
          setTimeout(() => setSuccessMessage(""), 5000); // hide after 5s
        },
        (error) => {
          console.error(error);
          setSuccessMessage("❌ Oops! Something went wrong. Please try again.");
          setTimeout(() => setSuccessMessage(""), 5000);
        }
      );
  };

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="section-underline" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition hover:border-primary/50"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition hover:border-primary/50"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                placeholder="Your message here..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none hover:border-primary/50"
                required
              />
            </div>

            {/* ✅ Website success/error message */}
            {successMessage && (
              <div
                className={`px-4 py-2 rounded-lg text-center font-semibold ${
                  successMessage.startsWith("✅")
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {successMessage}
              </div>
            )}

            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-medium flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Contact Information</h3>

            {[
              { icon: Phone, label: "Phone", value: "+91-9875092395" },
              { icon: Mail, label: "Email", value: "sutharhepin2610@gmail.com" },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "hepin-suthar",
                link: "https://www.linkedin.com/in/hepin-suthar/",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover-card-lift hover-glow group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon
                    className="text-primary group-hover:text-primary-foreground transition-colors"
                    size={22}
                  />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
