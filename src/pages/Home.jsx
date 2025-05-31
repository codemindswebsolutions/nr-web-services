import React, { useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaNodeJs,
  FaDatabase,
  FaChevronDown,
  FaChevronUp,
  FaRocket,
  FaPalette,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const techStack = [
  { name: "React", icon: <FaReact size={40} className="text-[#61DBFB]" /> },
  { name: "HTML5", icon: <FaHtml5 size={40} className="text-[#E44D26]" /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} className="text-[#2965f1]" /> },
  { name: "Tailwind CSS", icon: <FaCss3Alt size={40} className="text-[#38B2AC]" /> },
  { name: "Bootstrap", icon: <FaBootstrap size={40} className="text-[#563d7c]" /> },
  { name: "JavaScript", icon: <FaJsSquare size={40} className="text-[#F0DB4F]" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-[#68A063]" /> },
  { name: "MongoDB", icon: <FaDatabase size={40} className="text-[#4DB33D]" /> },
];

const faqs = [
  {
    question: "What is NR Web Services?",
    answer:
      "NR Web Services is a full-service digital agency specializing in premium web design, development, and digital marketing solutions tailored to your business needs.",
  },
  {
    question: "How to start a project with you?",
    answer:
      "Simply reach out to us via the contact form or call, and we’ll schedule a free consultation to understand your goals and craft a plan.",
  },
  {
    question: "What are your pricing models?",
    answer:
      "We offer flexible pricing: fixed-price for small projects, and hourly or retainer models for ongoing work. Contact us for a detailed quote.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Absolutely! We provide post-launch support, maintenance, and updates to ensure your website stays fresh and secure.",
  },
];

const projects = [
  {
    title: "Lumina Health",
    date: "Apr 2025",
    description:
      "A cutting-edge telemedicine platform revolutionizing patient-doctor connectivity with real-time video consultations.",
    image:
      "https://images.unsplash.com/photo-1581090700227-c28e4e1e43b5?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "EcoTravel",
    date: "May 2025",
    description:
      "Sustainable travel booking app promoting eco-friendly destinations and carbon offset options for travelers.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "FinEdge",
    date: "Jun 2025",
    description:
      "An AI-powered personal finance dashboard helping users budget, invest, and achieve their financial goals.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Home() {
  // FAQ accordion state
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  // Fade in refs
  const [heroRef, heroVisible] = useFadeInOnScroll();
  const [featuresRef, featuresVisible] = useFadeInOnScroll();
  const [projectsRef, projectsVisible] = useFadeInOnScroll();
  const [credibilityRef, credibilityVisible] = useFadeInOnScroll();
  const [faqRef, faqVisible] = useFadeInOnScroll();

  return (
    <div className="font-sans text-gray-900 bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className={`relative flex items-center justify-center h-screen bg-gradient-to-tr from-[#193CB8] to-[#4A73FF] text-white px-6 transition-opacity duration-1000 ${
          heroVisible ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
        style={{ clipPath: "ellipse(150% 100% at 50% 0%)" }}
      >
        <div className="max-w-4xl text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide glow-text">
            Premium Solutions that Elevate Your Brand
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            We build bespoke digital experiences that deliver lasting impact and growth.
          </p>
          <a
            href="/bookacall"
            className="inline-block bg-white text-[#193CB8] font-semibold px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        className={`max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center transition-opacity duration-1000 ${
          featuresVisible ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        <FeatureCard icon={<FaRocket size={48} className="mx-auto text-[#193CB8]" />} title="Fast Delivery" />
        <FeatureCard icon={<FaPalette size={48} className="mx-auto text-[#193CB8]" />} title="Creative Design" />
        <FeatureCard icon={<FaChartLine size={48} className="mx-auto text-[#193CB8]" />} title="Business Growth" />
        <FeatureCard icon={<FaUsers size={48} className="mx-auto text-[#193CB8]" />} title="Expert Team" />
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        className={`max-w-7xl mx-auto px-6 pb-20 transition-opacity duration-1000 ${
          projectsVisible ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-extrabold mb-12 text-[#193CB8] text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map(({ title, date, description, image }, i) => (
            <div
              key={i}
              className="rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{title}</h3>
                <p className="text-sm text-gray-500 mb-3">{date}</p>
                <p className="text-gray-700">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Credibility Section */}
      <section
        ref={credibilityRef}
        className={`max-w-7xl mx-auto px-6 py-20 transition-opacity duration-1000 ${
          credibilityVisible ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-[#193CB8]">
            We Choose the Best to Deliver Maximum Results
          </h2>
          <p className="max-w-xl mx-auto text-gray-700 mb-12">
            From startups to global brands, our trusted partners and technology empower your success.
          </p>

          <div className="flex flex-wrap justify-center gap-10">
            {techStack.map(({ name, icon }, i) => (
              <div
                key={i}
                className="flex flex-col items-center space-y-2 w-28"
                title={name}
              >
                <div className="rounded-full p-3 border-2 border-[#193CB8] text-[#193CB8] hover:bg-[#193CB8] hover:text-white transition-colors duration-300">
                  {icon}
                </div>
                <span className="text-sm font-semibold">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div ref={faqRef} className={`max-w-3xl mx-auto transition-opacity duration-1000 ${faqVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          <h3 className="text-3xl font-extrabold mb-8 text-center text-[#193CB8]">FAQs</h3>
          <div className="space-y-6">
            {faqs.map(({ question, answer }, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-${index}`}
                >
                  {question}
                  {openIndex === index ? (
                    <FaChevronUp className="ml-4" />
                  ) : (
                    <FaChevronDown className="ml-4" />
                  )}
                </button>
                {openIndex === index && (
                  <div
                    id={`faq-${index}`}
                    className="px-6 pb-4 text-gray-700 leading-relaxed"
                  >
                    {answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        id="contact"
        className="bg-[#607ad8] text-white py-20 px-6 text-center"
      >
        <h2 className="text-4xl font-extrabold mb-6">
          Ready to Take Your Project to the Next Level?
        </h2>
        <a
          href="#contact-form"
          className="inline-block bg-white text-[#193CB8] font-semibold px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
        >
          Contact Us Now
        </a>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title }) {
  return (
    <div className="flex flex-col items-center space-y-4 px-6 py-8 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
      {icon}
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
}
