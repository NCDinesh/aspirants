import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaUser } from 'react-icons/fa';

const Contact = () => (
  <div className="max-w-7xl mx-auto py-12 px-4">
    <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Contact Us</h2>
    {/* Hero Image */}
    <div className="w-full h-56 md:h-72 rounded-xl overflow-hidden mb-8 max-w-4xl text-center mx-auto">
      <img src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww" alt="Contact" className="w-full h-full object-cover" />
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* Contact Form */}
      <form className="bg-white rounded-xl shadow p-8 grid gap-4">
        <div className="flex items-center gap-2 border-b pb-2"><FaUser className="text-secondary" /><input type="text" placeholder="Your Name" className="p-2 w-full focus:outline-none" required /></div>
        <div className="flex items-center gap-2 border-b pb-2"><FaEnvelope className="text-secondary" /><input type="email" placeholder="Your Email" className="p-2 w-full focus:outline-none" required /></div>
        <div className="flex items-center gap-2 border-b pb-2"><FaPhone className="text-secondary" /><input type="tel" placeholder="Your Phone" className="p-2 w-full focus:outline-none" /></div>
        <div className="flex items-start gap-2 border-b pb-2"><FaEnvelope className="text-secondary mt-2" /><textarea placeholder="Your Message" className="p-2 w-full focus:outline-none" rows={4} required /></div>
        <button type="submit" className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-secondary transition mt-2">Send Message</button>
      </form>
      {/* Info & Map */}
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2"><FaPhone className="text-primary" /> <span>+977 4531221, 01 4516197</span></div>
          <div className="flex items-center gap-2 mb-2"><FaEnvelope className="text-primary" /> <span>info@aspirants.edu.np</span></div>
          <div className="flex items-center gap-2 mb-2"><FaMapMarkerAlt className="text-primary" /> <span>Aspirants Avenue, Putalisadak, Kathmandu, Nepal</span></div>
        </div>
        <div className="flex gap-4 text-2xl">
          <a href="#" className="text-primary hover:text-secondary"><FaFacebook /></a>
          <a href="#" className="text-primary hover:text-secondary"><FaInstagram /></a>
          <a href="#" className="text-primary hover:text-secondary"><FaLinkedin /></a>
        </div>
        <div className="w-full h-[245px] rounded-lg overflow-hidden mt-4">
          {/* Google Maps Embed */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.026234263851!2d85.3187853150617!3d27.70903198279106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a4e2e2e2b%3A0x7d7b7b7b7b7b7b7b!2sPutalisadak%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1620000000000!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
);

export default Contact; 