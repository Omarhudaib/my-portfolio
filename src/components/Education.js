import React from 'react';
import '../App.css'; 
const Education = () => {
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: 'Al-Balqa Applied University',
      graduationYear: '2023'
    }
  ];

  return (
    <section className='education' style={{ height: '25vh;'} }>
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h3>{edu.degree}</h3>
          <p><strong>{edu.institution}</strong></p>
          <p>Graduated: {edu.graduationYear}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
