"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiCalendar, FiDollarSign, FiUser, FiMail, FiPhone, FiBriefcase, FiCheckCircle } from "react-icons/fi";
import emailjs from "emailjs-com";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    number: "",
    email: "",
    project: "",
    budget: 5000,
    meetingDateTime: "",
  });

const [error, setError] = useState<null | string>(null);
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);


  // EmailJS credentials
  const SERVICE_ID = "service_p79zsoh";
  const TEMPLATE_ID = "template_py17lim";
  const USER_ID = "IYWUUuxVvar1I4x64";

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError(null);

  const templateParams = {
    fullName: formData.fullName,
    company: formData.company,
    number: formData.number,
    email: formData.email,
    project: formData.project,
    budget: formData.budget,
    meetingDateTime: formData.meetingDateTime,
  };

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        fullName: "",
        company: "",
        number: "",
        email: "",
        project: "",
        budget: 5000,
        meetingDateTime: "",
      });
    }, 3000);
  } catch (err) {
    console.error("Failed to send email:", err);
    setIsSubmitting(false);
    setError("Failed to send your message. Please try again later.");
  }
};

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ x: -100, y: -100 }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ x: 100, y: 100 }}
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-indigo-500/5 blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="show"
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Value Proposition */}
          <motion.div variants={item} className="space-y-8">
            <div>
              <motion.span 
                className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 text-purple-600 dark:text-purple-300 rounded-full text-sm font-medium mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Get in Touch
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4"
                whileHover={{ scale: 1.02 }}
              >
                Let`&apos`s Build Something <span className="text-gray-900 dark:text-white">Amazing</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300"
                whileHover={{ x: 2 }}
              >
                Our team will review your request and get back to you within 24 hours with a customized proposal.
              </motion.p>
            </div>

            {/* Value Points */}
            <motion.div variants={item} className="space-y-6">
              {[
                {
                  icon: "🚀",
                  title: "Fast Response",
                  description: "Typically respond within 4 business hours"
                },
                {
                  icon: "💎",
                  title: "Premium Support",
                  description: "Dedicated account manager for your project"
                },
                {
                  icon: "🛡️",
                  title: "Data Security",
                  description: "Enterprise-grade encryption for all communications"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -3 }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div variants={item}>
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6 bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Success Message */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute inset-0 bg-white dark:bg-gray-800 flex flex-col items-center justify-center p-8 text-center z-10"
                  >
                    <FiCheckCircle className="w-16 h-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Submission Successful!</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      We`&apos`ve received your request and will contact you shortly.
                    </p>
                    <motion.button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Close
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                >
                  {error}
                </motion.div>
              )}

              <motion.h2 
                className="text-2xl font-bold text-gray-800 dark:text-white"
                variants={item}
              >
                Project Inquiry
              </motion.h2>

              {/* Full Name */}
              <motion.div variants={item} className="space-y-1">
                <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                  <FiUser className="mr-2" /> Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              {/* Company */}
              <motion.div variants={item} className="space-y-1">
                <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                  <FiBriefcase className="mr-2" /> Company/Organization *
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Acme Inc."
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    <FiPhone className="mr-2" /> Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="number"
                    placeholder="+1 (555) 123-4567"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    value={formData.number}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    <FiMail className="mr-2" /> Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </motion.div>

              {/* Project Details */}
              <motion.div variants={item} className="space-y-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Tell us about your project *
                </label>
                <textarea
                  name="project"
                  placeholder="Describe your project goals, requirements, and timeline..."
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all min-h-[120px]"
                
                  value={formData.project}
                  onChange={handleChange}
                  required
                ></textarea>
              </motion.div>

              {/* Budget Range Slider */}
              <motion.div variants={item} className="space-y-4">
                <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                  <FiDollarSign className="mr-2" /> Project Budget (USD)
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    name="budget"
                    min="500"
                    max="50000"
                    step="500"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                  <motion.span 
                    className="whitespace-nowrap font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.05 }}
                  >
                    ${formData.budget.toLocaleString()}
                  </motion.span>
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>$500</span>
                  <span>$50,000+</span>
                </div>
              </motion.div>

              {/* Meeting Date and Time */}
              <motion.div variants={item} className="space-y-1">
                <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                  <FiCalendar className="mr-2" /> Preferred Meeting Time
                </label>
                <input
                  type="datetime-local"
                  name="meetingDateTime"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  value={formData.meetingDateTime}
                  onChange={handleChange}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={item} className="pt-4">
                <motion.button
                  type="submit"
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg hover:shadow-xl transition-all ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <FiSend className="mr-2" /> Submit Request
                    </span>
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}