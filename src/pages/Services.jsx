import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaBullhorn,
  FaLightbulb,
  FaUsers,
  FaChartLine,
  FaMobileAlt,
  FaSearch,
} from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";

export default function Services() {
  const [activeTab, setActiveTab] = useState("web");

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const bounceIcon = {
    animate: {
      scale: [1, 1.1, 1],
      transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
    },
  };

  const tabs = [
    { id: "web", label: "Web Solutions", icon: <FaLaptopCode className="mr-2" /> },
    { id: "graphic", label: "Branding", icon: <FaPaintBrush className="mr-2" /> },
    { id: "marketing", label: "Growth", icon: <FaBullhorn className="mr-2" /> },
  ];

  const successStories = [
    {
      id: 1,
      title: "E-commerce Transformation",
      challenge: "Low conversion rates and outdated design",
      solution: "Modern redesign with UX optimization",
      result: "230% increase in conversions",
      icon: <FaChartLine className="text-2xl text-green-500" />
    },
    {
      id: 2,
      title: "Brand Identity Overhaul",
      challenge: "Inconsistent branding across platforms",
      solution: "Complete visual identity system",
      result: "40% higher brand recognition",
      icon: <FaUsers className="text-2xl text-blue-500" />
    },
    {
      id: 3,
      title: "Digital Presence Launch",
      challenge: "No online presence for local business",
      solution: "Website + social media strategy",
      result: "300+ new customers in first month",
      icon: <FaMobileAlt className="text-2xl text-purple-500" />
    }
  ];

  const problemSolvingApproach = [
    {
      step: 1,
      title: "Understand Your Needs",
      description: "We start by deeply understanding your business goals, challenges, and target audience through comprehensive discovery sessions.",
      icon: <FaSearch className="text-xl" />
    },
    {
      step: 2,
      title: "Strategic Planning",
      description: "Our team develops customized solutions tailored to your specific requirements and market position.",
      icon: <FaLightbulb className="text-xl" />
    },
    {
      step: 3,
      title: "Collaborative Execution",
      description: "We work closely with you throughout the process, ensuring the solution aligns perfectly with your vision.",
      icon: <FaUsers className="text-xl" />
    },
    {
      step: 4,
      title: "Measurable Results",
      description: "We focus on delivering tangible outcomes that drive business growth and customer engagement.",
      icon: <FaChartLine className="text-xl" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-24">
      {/* Hero Section */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          className="text-5xl font-extrabold text-indigo-700 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Digital Solutions That Drive Results
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 max-w-2xl mx-auto"
          variants={fadeUp}
        >
          We transform challenges into opportunities through innovative digital solutions tailored to your unique needs.
        </motion.p>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div 
        className="flex justify-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="inline-flex rounded-xl bg-indigo-100 p-1">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg flex items-center transition-colors ${
                activeTab === tab.id
                  ? "bg-white text-indigo-700 shadow-sm"
                  : "text-indigo-600 hover:text-indigo-800"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.icon}
              {tab.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          {activeTab === "web" && (
            <motion.section
              className="grid md:grid-cols-2 gap-12 items-center"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp}>
                <h2 className="text-4xl font-bold text-indigo-600 mb-6">
                  Web Development & Design
                </h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  We solve the problem of ineffective online presence by creating websites that don't just look beautiful, but convert visitors into customers. Our solutions address:
                </p>

                <ul className="space-y-4 text-gray-600">
                  {[
                    "Low conversion rates with strategic UX design",
                    "Poor mobile experience with responsive frameworks",
                    "Slow performance through optimized architecture",
                    "Outdated designs with modern aesthetics",
                    "Lack of functionality with custom features"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      variants={fadeUp}
                    >
                      <IoMdCheckmarkCircle className="text-indigo-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                      <span className="text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="rounded-xl shadow-lg bg-gradient-to-br from-indigo-100 to-indigo-50 p-6 flex flex-col space-y-4"
              >
                <div className="relative overflow-hidden rounded-lg aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Web Development Process"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white text-xl font-bold">E-commerce Case Study</h3>
                      <p className="text-indigo-100">Increased conversions by 180% through UX optimization</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-center text-indigo-900 font-semibold text-lg mb-2">
                    Our Approach to Web Solutions
                  </p>
                  <p className="text-center text-indigo-700 text-sm">
                    We combine aesthetic design with conversion-focused functionality to create websites that perform.
                  </p>
                </div>
              </motion.div>
            </motion.section>
          )}

          {activeTab === "graphic" && (
            <motion.section
              className="grid md:grid-cols-2 gap-12 items-center"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={fadeUp}
                className="order-2 md:order-1 rounded-xl shadow-lg bg-gradient-to-br from-red-100 to-red-50 p-6 flex flex-col space-y-4"
              >
                <div className="relative overflow-hidden rounded-lg aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1567443024551-f3e3a7b9d41a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Branding Process"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white text-xl font-bold">Rebranding Success</h3>
                      <p className="text-red-100">Established cohesive visual identity across all platforms</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-center text-red-900 font-semibold text-lg mb-2">
                    Our Branding Philosophy
                  </p>
                  <p className="text-center text-red-700 text-sm">
                    We create visual identities that communicate your unique value and resonate with your audience.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="order-1 md:order-2">
                <h2 className="text-4xl font-bold text-red-600 mb-6">Branding & Visual Identity</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  We solve brand recognition problems by developing distinctive visual identities that:
                </p>

                <ul className="space-y-4 text-gray-600">
                  {[
                    "Establish instant recognition in crowded markets",
                    "Communicate your core values visually",
                    "Create consistency across all touchpoints",
                    "Differentiate from competitors effectively",
                    "Evolve with your business growth"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      variants={fadeUp}
                    >
                      <IoMdCheckmarkCircle className="text-red-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                      <span className="text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.section>
          )}

          {activeTab === "marketing" && (
            <motion.section
              className="space-y-10 max-w-4xl mx-auto"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                className="text-4xl font-bold text-green-700 text-center"
                variants={fadeUp}
              >
                Digital Growth Strategies
              </motion.h2>

              <motion.div
                className="grid md:grid-cols-2 gap-12"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {/* Challenges We Solve */}
                <motion.div
                  className="p-6 rounded-xl bg-green-50 shadow-md"
                  variants={fadeUp}
                >
                  <h3 className="text-2xl font-semibold text-green-800 mb-4 flex items-center">
                    <FaBullhorn className="mr-2" />
                    Marketing Challenges We Solve
                  </h3>
                  <ul className="space-y-4 text-green-700">
                    {[
                      "Low online visibility and poor SEO rankings",
                      "Ineffective social media presence",
                      "Poor lead generation and conversion",
                      "Lack of data-driven marketing decisions",
                      "Inconsistent messaging across channels"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        variants={fadeUp}
                      >
                        <IoMdCheckmarkCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Our Solutions */}
                <motion.div
                  className="p-6 rounded-xl bg-green-50 shadow-md"
                  variants={fadeUp}
                >
                  <h3 className="text-2xl font-semibold text-green-800 mb-4 flex items-center">
                    <FaBullhorn className="mr-2" />
                    Our Growth Solutions
                  </h3>
                  <ul className="space-y-4 text-green-700">
                    {[
                      "Comprehensive SEO strategy implementation",
                      "Data-driven social media campaigns",
                      "Conversion-focused content marketing",
                      "Targeted advertising with measurable ROI",
                      "Integrated multi-channel strategies"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        variants={fadeUp}
                      >
                        <IoMdCheckmarkCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </motion.section>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Success Stories */}
      <motion.section 
        className="max-w-7xl mx-auto py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Real Problems, Measurable Results
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          How we've helped businesses overcome challenges and achieve their goals
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <motion.div
              key={story.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "50px" }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 mb-4 mx-auto">
                {story.icon}
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{story.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500">Challenge</h4>
                  <p className="text-gray-700">{story.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-500">Our Solution</h4>
                  <p className="text-gray-700">{story.solution}</p>
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="text-sm font-semibold text-green-700">The Result</h4>
                  <p className="text-green-800 font-bold">{story.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Our Approach */}
      <motion.section 
        className="max-w-6xl mx-auto py-12 bg-indigo-50 rounded-2xl px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-12">
          Our Problem-Solving Approach
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problemSolvingApproach.map((step) => (
            <motion.div
              key={step.step}
              className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 mb-4">
                {step.icon}
              </div>
              <div className="flex items-start mb-2">
                <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded mr-2">
                  Step {step.step}
                </span>
                <h3 className="text-lg font-bold text-gray-800">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
   <motion.section
      className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-8 md:p-12 text-center text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Solve Your Digital Challenges?
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto text-indigo-100">
        Let's discuss how we can help you overcome obstacles and achieve your business goals.
      </p>
      <div className="flex justify-center">
        <motion.button
          className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/bookacall")}
        >
          Schedule Strategy Session
        </motion.button>
      </div>
    </motion.section>
    </div>
  );
}