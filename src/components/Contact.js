import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <section className='contact'>
      <h2>Contact</h2> 
      <div>
      <p>• Phone:<span></span> +962 789419293</p>
      <p>• Email: <a href="mailto:omarhudaib.it@gmail.com">omarhudaib.it@gmail.com</a></p>
      <p>
        • LinkedIn: 
        <a 
          href="https://www.linkedin.com/in/omar-hudaib-1b70ba262/" 
          target="_blank" 
          rel="noopener noreferrer">
           Omar Hudaib | LinkedIn
        </a>
      </p></div>
    </section>
  );
};

export default Contact;
