import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("vidhyasugathan19@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    emailjs
      .send(
        "service_a2cnmnq", // ← replace with your Service ID
        "template_jsuu4s9", // ← replace with your Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "RqTz4VorJZloxeKxk" // ← replace with your Public Key
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 3000);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
        setTimeout(() => setError(false), 3000);
      });
  };

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>

      <div className="contact-wrapper">
        {/* Info */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="contact-intro">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>

          <div className="contact-detail">
            <span className="contact-label">📧 Email</span>
            <div className="contact-email-row">
              <span>vidhyasugathan19@gmail.com</span>
              <button className="copy-btn" onClick={copyEmail}>
                {copied ? "✅ Copied!" : "Copy"}
              </button>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-label">📍 Location</span>
            <span>Thrissur, Kerala, India</span>
          </div>

          <div className="contact-socials">
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading
              ? "Sending..."
              : sent
              ? "✅ Message Sent!"
              : error
              ? "❌ Failed, Try Again"
              : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
