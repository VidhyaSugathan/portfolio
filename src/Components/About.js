import { motion } from "framer-motion";

function About() {
  const stats = [
    { label: "Projects Completed", value: "10+" },
    { label: "Tools Mastered", value: "7+" },
    { label: "Datasets Analysed", value: "20+" },
  ];

  return (
    <section id="about" className="section">
      <h2>About Me</h2>

      <div className="about-wrapper">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Hi, I'm Vidhya Sugathan, a data professional based in Thrissur,
            Kerala. I turn complex, messy data into clear insights that help
            businesses make smarter decisions.
          </p>
          <p>
            I work across Data Analysis, Business Intelligence, and Data
            Engineering — from writing optimised SQL queries and Python scripts
            to building Power BI dashboards that stakeholders actually
            understand and use.
          </p>
          <p>
            I enjoy every stage of the data journey — cleaning raw datasets,
            finding hidden patterns, and translating numbers into stories that
            drive real action.
          </p>
        </motion.div>

        <div className="about-stats">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
