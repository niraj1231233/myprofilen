import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-box">
        <h2 className="heading">TESTIMONIALS</h2>
       
        <div className="wrapper">
          <div className="testimonial-item">
          <img src={process.env.PUBLIC_URL + '/client1.jpg'} alt="Project 1" />
            <h2>Client 1</h2>
            <div className="rating">
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
            </div>
            <p>EXCELLENT SERVICES AND WORK</p>
          </div>
          <div className="testimonial-item">
          <img src={process.env.PUBLIC_URL + '/client2.jpg'} alt="Project 2" />
            <h2>Client 2</h2>
            <div className="rating">
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
            </div>
            <p>EXCELLENT SERVICES and WORK</p>
          </div>
          <div className="testimonial-item">
          <img src={process.env.PUBLIC_URL + '/client3.jpg'} alt="Project 3" />

            <h2>Client 3</h2>
            <div className="rating">
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
            </div>
            <p>EXCELLENT SERVICES and WORK</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
