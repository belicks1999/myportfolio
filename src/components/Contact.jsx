import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; // Import the CSS file for styling

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isEmailValid = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPhoneValid = (phone) => {
    // Regular expression for mobile number validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    if (!isEmailValid(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!isPhoneValid(phone)) {
      alert('Please enter a valid phone number.');
      return;
    }

    emailjs.sendForm('service_8b1sg78', 'template_2pmg0cs', e.target, 'WuPKtBJmfMji2SlcB')
      .then((result) => {
        console.log(result.text);
        alert('Message Sent Successfully');
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, (error) => {
        console.log(error.text);
        alert('Failed to Send Message');
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row">
          <h1>Contact me</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row input-container">
            <div className="col-xs-12">
              <div className="styled-input wide">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
                <label>Name</label> 
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input">
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
                <label>Email</label> 
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input" style={{ float: 'right' }}>
                <input 
                  type="text" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                />
                <label>Phone Number</label> 
              </div>
            </div>
            <div className="col-xs-12">
              <div className="styled-input wide">
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                ></textarea>
                <label>Message</label>
              </div>
            </div>
            <div className="col-xs-12">
              <button type="submit" className="btn-lrg submit-btn">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
