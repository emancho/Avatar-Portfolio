import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
        Connect with me on LinkedIn
      </a>
      <button onClick={() => document.getElementById('resume-popup').style.display = 'block'}>
        View Resume
      </button>
    </section>
  );
}

export default Contact;
