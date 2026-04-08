import { motion } from "framer-motion";

const projects = [
  {
    title: "Sales Dashboard",
    desc: "Power BI dashboard with KPIs & revenue insights",
    tech: ["Power BI", "Excel"],
    img: "/p1.png",
    link: "#",
  },
  {
    title: "Customer Churn Analysis",
    desc: "Python + SQL analysis to identify churn patterns",
    tech: ["Python", "SQL"],
    img: "/p2.png",
    link: "#",
  },
  {
    title: "E-commerce Analysis",
    desc: "Excel + SQL insights on product performance",
    tech: ["Excel", "SQL"],
    img: "/p3.png",
    link: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="card"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="card-img-wrapper">
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div className="card-img-placeholder">
                <span>📊</span>
              </div>
            </div>

            <div className="card-body">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="card-tags">
                {project.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="card-link"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
