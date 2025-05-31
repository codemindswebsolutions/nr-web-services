import React, { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setIsLoading(false);
    }, 1500);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16 px-4 sm:px-6 flex flex-col items-center">
      <motion.div 
        className="max-w-6xl w-full"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={item}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a project in mind or just want to say hello, drop us a message.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8"
            variants={item}
          >
            <h2 className="text-2xl font-bold text-indigo-800 mb-6">Send us a message</h2>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition flex justify-center items-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : "Send Message"}
                </motion.button>
              </form>
            ) : (
              <motion.div 
                className="text-center p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-indigo-600 font-medium hover:text-indigo-800 transition"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={item}
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-6">
              <motion.div 
                className="bg-white rounded-2xl shadow-xl p-6 flex items-start"
                whileHover={{ y: -5 }}
              >
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Phone className="text-indigo-600" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">Call Us</h3>
                  <p className="text-gray-600">+91 93902 28526</p>
                  <p className="text-gray-600">+91 81422 85266</p>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white rounded-2xl shadow-xl p-6 flex items-start"
                whileHover={{ y: -5 }}
              >
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Mail className="text-indigo-600" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">Email Us</h3>
                  <a 
                    href="mailto:codemindswebservices@gmail.com" 
                    className="text-indigo-600 hover:text-indigo-800 transition"
                  >
                    codemindswebservices@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white rounded-2xl shadow-xl p-6 flex items-start"
                whileHover={{ y: -5 }}
              >
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <MapPin className="text-indigo-600" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">Our Location</h3>
                  <p className="text-gray-600">Brindavan Colony, Ibrahimpatnam, Hyderabad</p>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white rounded-2xl shadow-xl p-6 flex items-start"
                whileHover={{ y: -5 }}
              >
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Clock className="text-indigo-600" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">Working Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
                  <p className="text-gray-600">Saturday: 10AM - 4PM</p>
                </div>
              </motion.div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {[
                  { icon: <Facebook size={24} />, url: "https://facebook.com", color: "bg-blue-100", text: "text-blue-600" },
                  { icon: <Twitter size={24} />, url: "https://twitter.com", color: "bg-sky-100", text: "text-sky-600" },
                  { icon: <Linkedin size={24} />, url: "https://linkedin.com", color: "bg-blue-100", text: "text-blue-600" },
                  { icon: <Instagram size={24} />, url: "https://instagram.com", color: "bg-pink-100", text: "text-pink-600" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} ${social.text} p-3 rounded-full hover:opacity-80 transition`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div 
          className="mt-16 rounded-2xl overflow-hidden shadow-xl border border-gray-200"
          variants={item}
        >
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.982792462976!2d78.50709867490786!3d17.324852294374807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99bc6c124b7b%3A0x91b26d621e63331e!2sIbrahimpatnam%2C%20Telangana!5e0!3m2!1sen!2sin!4v1685567891234!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;