import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaWordpress, FaDatabase } from 'react-icons/fa';
import '../App.css'; // Ensure appropriate styling

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90, icon: <FaHtml5 size={30} /> },
    { name: 'CSS', level: 90, icon: <FaCss3Alt size={30} /> },
    { name: 'JavaScript', level: 85, icon: <FaJs size={30} /> },
    { name: 'React', level: 75, icon: <FaReact size={30} /> },
    { name: 'Laravel', level: 80, icon: <FaPhp size={30} /> },
    { name: 'PHP', level: 70, icon: <FaPhp size={30} /> },
    { name: 'WordPress', level: 50, icon: <FaWordpress size={30} /> },
    { name: 'MySQL', level: 85, icon: <FaDatabase size={30} /> },
  ];

  return (
    <section className="skills-section">
      <h2 className="retro-title">SKILLS</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              {skill.icon}
              <h3 className="skill-name">{skill.name}</h3>
            </div>
            <div className="skill-bar">
              <div
                className="skill-bar-fill"
                style={{
                  width: `${skill.level}%`,
                }}
              />
            </div>
            <p className="skill-level">{skill.level}%</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
