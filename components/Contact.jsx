"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="h-screen bg-gradient-to-br from-blue-900 to-blue-600 flex items-center justify-center px-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">Contact Us</h2>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-4 text-gray-700 w-full md:w-1/2">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              <span>+251 912-345-678</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600 text-xl" />
              <span>info@company.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
              <span>Addis Ababa, Ethiopia</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-blue-600 text-2xl hover:text-blue-800"><FaFacebook /></a>
              <a href="#" className="text-blue-600 text-2xl hover:text-blue-800"><FaTwitter /></a>
              <a href="#" className="text-blue-600 text-2xl hover:text-blue-800"><FaLinkedin /></a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="w-full md:w-1/2 space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-600" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-600" />
            <textarea rows={4} placeholder="Your Message" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-600"></textarea>
            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-800 transition">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
