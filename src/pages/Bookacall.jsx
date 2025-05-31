import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ScheduleSession = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    duration: "30 mins",
    purpose: "",
  });

  const [confirmed, setConfirmed] = useState(false);
  const navigate = useNavigate();

  const durations = ["30 mins", "45 mins", "60 mins"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true); // Show confirmation message
    // You can send form data to backend here if needed
  };

  return (
    <div className="min-h-screen bg-white px-6 py-20 flex flex-col items-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#193CB8] mb-4 text-center">
        Schedule Your Session
      </h1>
      <p className="text-gray-600 text-lg mb-10 text-center max-w-xl">
        Let's discuss your next big idea! Choose a time that works best for you.
      </p>

      {!confirmed ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-md p-8 space-y-6"
        >
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#193CB8]"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#193CB8]"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block font-semibold text-gray-700 mb-1">Date</label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#193CB8]"
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold text-gray-700 mb-1">Time</label>
              <input
                type="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#193CB8]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">Duration</label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#193CB8]"
            >
              {durations.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">Meeting Purpose</label>
            <textarea
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              rows={4}
              placeholder="Describe the purpose of our meeting..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#193CB8]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#193CB8] text-white py-3 rounded-lg font-semibold hover:bg-[#162f9c] transition"
          >
            Confirm Meeting
          </button>
        </form>
      ) : (
        <div className="bg-green-100 text-green-800 border border-green-300 px-6 py-8 rounded-xl max-w-xl text-center shadow-md">
          <h2 className="text-3xl font-bold mb-2">Meeting Confirmed!</h2>
          <p className="text-lg">We’ve scheduled your session successfully. We’ll be in touch soon.</p>
        </div>
      )}

      <button
        onClick={() => navigate("/services")}
        className="mt-8 text-[#193CB8] font-medium underline hover:text-[#162f9c] transition"
      >
        ← Back to Services
      </button>
    </div>
  );
};

export default ScheduleSession;
