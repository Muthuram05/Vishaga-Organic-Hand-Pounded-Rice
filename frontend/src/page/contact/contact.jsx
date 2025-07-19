import React from "react";
import emailjs from '@emailjs/browser';

import "./style.css";

export function Contact() {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_vf1xct2', 'template_tiyf55g', form.current, 'RvlX4cKLWdp1UQopG')
      .then((result) => {
          console.log(result.text);
          // e.target.user_email.value = "";
          form.current.value = "";
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="testimonial-wrapper">
      <h1 className="testimonial-title">Testimonial</h1>
      <h2 className="feedback-title">Feedback</h2>

      <div className="feedback-container">
        <div className="feedback-card">
          <div className="feedback-image" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="feedback-card">
          <div className="feedback-image" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className="contact-container">
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea rows="4" placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      <footer className="footer-links">
        <div className="links-left">
          <h3>Links</h3>
        </div>
        <div className="links-right">
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
}
