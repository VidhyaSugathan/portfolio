import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Data & Analytics",
    skills: ["SQL", "Python", "Power BI", "Excel", "MySQL"],
  },
  {
    category: "Web & Dev",
    skills: ["React", "Node", "JavaScript", "HTML", "CSS"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-container">
        {skillGroups.map((group, gi) => (
          <div key={group.category} className="skill-group">
            <h3 className="skill-category">{group.category}</h3>
            <div className="skills">
              {group.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.1 + i * 0.08, duration: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
