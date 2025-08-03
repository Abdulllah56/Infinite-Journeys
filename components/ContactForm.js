'use client';
import { useState, useEffect } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setShowSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-12">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-2xl transform -rotate-1"></div>
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl"></div>

      {/* Success Message */}
      {showSuccess && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg animate-bounce">
          Message sent successfully! We'll get back to you soon.
        </div>
      )}

      {/* Error Message */}
      {status === 'error' && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-full shadow-lg animate-shake">
          Oops! Something went wrong. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="relative space-y-6 p-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Get in Touch</h2>
          <p className="text-gray-600">We'd love to hear from you. Drop us a message below.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white/50 backdrop-blur-sm"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute left-3 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all duration-300 transform"
            >
              Your Name
            </label>
          </div>

          <div className="group relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white/50 backdrop-blur-sm"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all duration-300 transform"
            >
              Email Address
            </label>
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white/50 backdrop-blur-sm"
            placeholder=" "
          />
          <label
            htmlFor="subject"
            className="absolute left-3 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all duration-300 transform"
          >
            Subject
          </label>
        </div>

        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white/50 backdrop-blur-sm resize-none"
            placeholder=" "
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-3 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all duration-300 transform"
          >
            Your Message
          </label>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isLoading}
            className="group relative inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full overflow-hidden transition-all duration-300 hover:from-blue-500 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative flex items-center">
              {isLoading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                <>
                  Send Message
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </>
              )}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
