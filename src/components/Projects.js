import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Projects = () => {
  const projects = [
    { 
      title: 'Portfolio Website', 
      description: 'A personal portfolio to showcase my work.', 
      link: '#' 
    },
    { 
      title: 'E-commerce Platform', 
      description: 'An e-commerce platform built with Laravel.', 
      link: '#' 
    },
    { 
      title: 'House Rental System', 
      description: 'A comprehensive house rental system with Laravel, including property management and tenant features.', 
      link: 'https://github.com/laravelProjectRentalSystem/rental-system-last' 
    },
    { 
      title: 'English Test Application', 
      description: 'An interactive English proficiency test built using JavaScript.', 
      link: 'https://github.com/ahmadsaadaldin/quiz-website' 
    },
    { 
      title: 'HR and Employee Relationship System (dawam)', 
      description: 'A Laravel system to manage HR functions and employee relationships.', 
      link: 'https://github.com/laravelProjectRentalSystem/rental-system-last' 
    },
    { 
      title: 'Saas HR System for Companies', 
      description: 'A web platform for HR management supporting multiple companies, built with Laravel and React ,', 
      link: 'https://dawam-alpha.vercel.app/' 
    },

  ];

  return (
    <section>
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a 
              href={project.link === '#' ? undefined : project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
              onClick={(e) => {
                if (project.link === '#') {
                  e.preventDefault();
                  alert('No valid link for this project.');
                }
              }}
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
