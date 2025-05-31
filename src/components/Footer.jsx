import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-300 pt-10 pb-6"
      style={{
        background: 'linear-gradient(135deg, #193CB8 0%, #1A4ED4 50%, #193CB8 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">NR WebServices</h3>
          <p className="text-sm leading-relaxed">
            Providing premium web solutions tailored for your business growth. Reliable, modern, and innovative web development services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-300 transition">Home</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-300 transition">Services</Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-blue-300 transition">Pricing</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-300 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
          <p className="text-sm">
            Phone: <a href="tel:+919390228526" className="hover:text-blue-300 transition">+91 93902 28526</a>
          </p>
          <p className="text-sm">
            Email: <a href="mailto:info@nrwebservices.com" className="hover:text-blue-300 transition">info@nrwebservices.com</a>
          </p>
          <p className="text-sm">Address: Brindavan Colony, Ibrahimpatnam, Hyderabad</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
          <div className="flex space-x-4 text-gray-300">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-400 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-300 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-blue-700 pt-4 text-center text-xs text-blue-200">
        &copy; {new Date().getFullYear()} NR WebServices. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
