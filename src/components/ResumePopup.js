import React from 'react';

function ResumePopup() {
  const closePopup = () => {
    document.getElementById('resume-popup').style.display = 'none';
  };

  return (
    <div id="resume-popup" className="popup" style={{ display: 'none' }}>
      <div className="popup-content">
        <span onClick={closePopup} className="close">&times;</span>
        <h2>My Resume</h2>
        <iframe src="/path/to/your-resume.pdf" title="Resume" width="100%" height="500px" />
      </div>
    </div>
  );
}

export default ResumePopup;
