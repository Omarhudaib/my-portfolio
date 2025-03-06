import React from 'react';
import '../App.css'; 
const Experience = () => {
  const experiences = [

    {
      role: 'Full Stack Web Development Trainee',
      company: 'Orange Academy, Al-Salt',
      duration: 'May 2024 - Dec 2024 ',
      responsibilities: [
        'Learning HTML, CSS, JavaScript, PHP, MySQL, React, Laravel, and WordPress.',
        'Working on web development projects and collaborative coding sessions.'
      ]
    },
    {
      role: 'Java and Android App Development Trainee',
      company: 'Ahli Bank, Al-Salt',
      duration: ' Jul 2023 - Aug 2023',
      responsibilities: [
        'Developed Android applications using Java.',
        'Implemented secure authentication and authorization mechanisms.',
        'Integrated mobile apps.'
      ]
    }
  ];

  return (
    <div> 
    <section className='experiences'>
     <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h3>{exp.role}</h3>
          <p><strong>{exp.company}</strong></p>
          <p>{exp.duration}</p>
          <ul>
            {exp.responsibilities.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </section></div>
  );
};

export default Experience;
