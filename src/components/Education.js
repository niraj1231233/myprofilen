import React from 'react';

const Education = () => {
  return (
    <section className="education" id="education">
      
      <h2 className="heading">Education</h2>
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2018</div>
          <div className="timeline-content">
            <h3>School</h3>
            <p>I completed my schooling in 2018, laying a strong foundation for my academic journey. This period was crucial in shaping my interests and aspirations.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2020</div>
          <div className="timeline-content">
            <h3>College</h3>
            <p>In 2020, I completed my junior college, where I further developed my skills and deepened my understanding of various subjects, preparing me for higher education and future challenges.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2022</div>
          <div className="timeline-content">
            <h3>Internship/Job</h3>
            <p>I secured an Internship, marking a significant milestone in my career. This experience provided valuable practical knowledge and professional growth.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2023</div>
          <div className="timeline-content">
            <h3>University</h3>
            <p>I completed my BSc in IT in 2023, achieving a major academic milestone. This degree equipped me with comprehensive knowledge and technical skills, paving the way for my future endeavors in the tech industry.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
