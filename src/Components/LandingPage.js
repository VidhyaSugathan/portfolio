import { motion } from "framer-motion";
import profileImg from "./profile.jpeg";

function LandingPage() {
  return (
    <section className="landingpage" id="home">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            DATA ANALYST PORTFOLIO
          </motion.div>

          <h1>
            Vidhya <br />
            <span className="highlight">Sugathan</span>
          </h1>

          <p className="hero-sub">
            Turning data into insights using SQL, Python &amp; Power BI
          </p>

          <div className="hero-btns">
            <a href="/resume.pdf" download>
              <button className="btn-primary">Download Resume</button>
            </a>
            <a href="#contact">
              <button className="btn-outline">Contact Me</button>
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/vidhya-sugathan/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
              </svg>
            </a>
            <a
              href="https://github.com/VidhyaSugathan"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.92 10.92 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.15v3.19c0 .3.21.66.79.55C20.22 21.41 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-img"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="img-wrapper">
            <img src={profileImg} alt="Vidhya Sugathan - Data Analyst" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LandingPage;
