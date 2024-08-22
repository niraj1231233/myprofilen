import React from 'react';
import "./service.css";
const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">MY PROJECTS</h2>
      <div class="container">
         <div class="card__container">
            <article class="card__article">
               <img src={process.env.PUBLIC_URL + '/Ecom.jpg'} alt="image" class="card__img"/>

               <div class="card__data">
                  <span class="card__description">ECOMMERCE WEBSITE</span>
                  <h21 class="card__title">Technologies Used</h21>
                  <h31>☆ REACT JS</h31>
                  <h31>☆ SPRING BOOT</h31>
                  <h31>☆ SQL</h31>
               </div>
            </article>

            <article class="card__article">
               <img src={process.env.PUBLIC_URL + '/doctor.jpg'}  alt="image" class="card__img"/>

               <div class="card__data">
                  <span class="card__description">DOCTOR PROFILE</span>
                  <h21 class="card__title">Technologies Used</h21>
                  <h31>☆ ReactJS</h31>
                  <h31>☆ BOOTSTRAP</h31>
               </div>
            </article>

            <article class="card__article">
               <img src={process.env.PUBLIC_URL + '/travel.jpg'}  alt="image" class="card__img"/>

               <div class="card__data">
                  <span class="card__description">TRAVEL WEBSITE</span>
                  <h21 class="card__title">Technologies Used</h21>
                  <h31>☆ ReactJS</h31>
                  <h31>☆ BOOTSTRAP</h31>
               </div>
            </article>

            
         </div>
      </div>
    </section>
  );
};

export default Services;
