import React, { useState } from 'react';


const Contact = () => {
  const [thankYouVisible, setThankYouVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        'Accept': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setThankYouVisible(true);
          form.reset();
          setTimeout(() => setThankYouVisible(false), 2000);
        } else {
          alert('There was a problem submitting the form.');
        }
      })
      .catch(() => alert('There was a problem submitting the form.'));
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>
      <form id="contact-form" action="https://formspree.io/f/xpwaprjn" method="POST" onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-box">
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="Email" placeholder="Email" required />
          </div>
          <div className="input-box">
            <input type="number" name="phone" placeholder="Phone Number" required />
            <input type="text" name="subject" placeholder="Subject" required />
          </div>
        </div>
        <div className="input-group2">
          <textarea name="message" cols="30" rows="10" placeholder="Your Message" required></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </div>
      </form>
      {thankYouVisible && (
        <div id="thank-you-popup" className="neon-popup">
          <p>Submitted!</p>
          <p>Thank you, we will try to contact you as soon as possible.</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
