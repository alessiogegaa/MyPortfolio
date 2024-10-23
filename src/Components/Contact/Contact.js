import React from 'react'
import './Contact.css'
import img1 from "../../assets/phone-call.png"
import img2 from "../../assets/mail.png"
import img3 from "../../assets/location.png"
const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-description">
            Reach out to me directly via phone, email, or simply fill out the
            form on the right. I'm always open to discussing new projects,
            creative ideas, or opportunities to be part of your visions.
          </p>
          <ul className="contact-details">
            <li>
              <img src={img1} alt="Phone" />
              <span>+123 456 7890</span>
            </li>
            <li>
              <img src={img2} alt="" />
              <span>alessiogega@example.com</span>
            </li>
            <li>
              <img src={img3} alt="" />
              <span>Tirana, Albania</span>
            </li>
          </ul>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" action="" method="POST">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" >Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact