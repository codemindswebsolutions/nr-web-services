import React from "react";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const pricingPlans = [
  {
    title: "Basic",
    price: "₹499",
    description: "Great for individuals getting started with our services.",
    features: ["1 Page Design", "Responsive Layout", "Basic Support"],
    buttonText: "Choose Basic",
  },
  {
    title: "Standard",
    price: "₹999",
    description: "Ideal for small businesses or portfolios.",
    features: [
      "Up to 5 Pages",
      "Responsive & SEO-Friendly",
      "5-Day Delivery",
      "Priority Support",
    ],
    buttonText: "Choose Standard",
  },
  {
    title: "Premium",
    price: "₹1999",
    description:
      "Perfect for full-scale business websites with premium support.",
    features: [
      "Unlimited Pages",
      "Custom Design & Animation",
      "Fast Delivery",
      "Premium Support",
      "Free Maintenance (1 Month)",
    ],
    buttonText: "Choose Premium",
  },
];

const Pricing = () => {
  const navigate = useNavigate();

  const handlePlanSelect = () => {
    navigate("/bookacall");
  };

  return (
    <div className="min-h-screen py-20 px-6 bg-white flex flex-col items-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[#193CB8] mb-4">
        Simple & Transparent Pricing
      </h1>
      <p className="text-lg text-gray-600 font-medium max-w-2xl text-center mb-12">
        Pick the plan that best fits your needs and get started today!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-start border border-gray-200 hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-[#193CB8] mb-2">
              {plan.title}
            </h2>
            <p className="text-3xl font-bold text-gray-800 mb-4">
              {plan.price}
            </p>
            <p className="text-gray-500 mb-6">{plan.description}</p>

            <ul className="mb-6 space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <CheckCircle2 className="text-[#193CB8] mr-2 w-5 h-5" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={handlePlanSelect}
              className="mt-auto w-full bg-[#193CB8] text-white font-semibold py-3 rounded-lg transition hover:bg-[#162f9c]"
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
