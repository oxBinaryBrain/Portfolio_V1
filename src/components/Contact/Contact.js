import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; 
import "./Contact.css"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      {/* Get In Touch Section */}
      <div className="get-in-touch">
        <h2 className="title">
          Get <span className="gradient-text">In Touch</span>
        </h2>
        <div className="underline"></div>
        
        {/* Subtitle with proper line break */}
        <p className="subtitle">
          I'm currently open for freelance opportunities and interesting projects.
          <br />
          Let's build something amazing together!
        </p>
      </div>

      {/* Contact Form Box */}
      <div className="contact-form-box">
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Hi, I'd like to talk about..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Send Message ✈️
          </button>
        </form>
      </div>

      {/* Direct Email Contact */}
      <p className="direct-contact-text">Or reach me directly at:</p>
      <a href="mailto:ud4yg@yandex.com" className="email-button">
        📧 ud4yg@yandex.com
      </a>

      {/* Social Media Buttons with Icons */}
      <div className="social-links">
        <a href="https://github.com/oxBinaryBrain" target="_blank" rel="noopener noreferrer" className="social-button">
          <FaGithub size={24} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/uday-g-601ba9266/" target="_blank" rel="noopener noreferrer" className="social-button">
          <FaLinkedin size={24} /> LinkedIn
        </a>
        <a href="mailto:ud4yg@yandex.com" className="social-button">
          <FaEnvelope size={24} /> Email
        </a>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <button
          className="star-repo-button"
          onClick={() => window.open("https://github.com/oxBinaryBrain/Portfolio_V1", "_blank")}
        >
          ⭐ Star this repo for support
        </button>
      </div>
    </div>
  );
};

export default Contact;
