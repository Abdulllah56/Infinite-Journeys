"use client"

import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const faqs = [
    {
      question: "What destinations do you offer?",
      answer: "We offer a wide range of destinations across the globe, including popular locations such as Europe, Asia, and the Americas, as well as unique hidden gems for those looking for something different."
    },
    {
      question: "How do I book a custom trip?",
      answer: "You can book a custom trip by reaching out to us through our contact form or by calling our office directly. We will work with you to create a personalized itinerary tailored to your preferences."
    },
    {
      question: "Are your tours guided?",
      answer: "Yes, we offer both guided and self-guided tours depending on the destination and your preferences. Our local guides are highly experienced and can provide deep insights into the culture and history of each location."
    },
    {
      question: "Do you provide group travel options?",
      answer: "Absolutely! We offer group travel packages for families, friends, corporate retreats, and more. You can choose from our pre-planned group tours or customize one specifically for your group."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We understand that plans change. Our cancellation policy varies depending on the destination and service. Please refer to our terms and conditions or contact us directly for more information."
    },
    {
      question: "Do you offer travel insurance?",
      answer: "Yes, we offer comprehensive travel insurance to ensure you're protected throughout your journey. You can opt for insurance during the booking process, and we highly recommend it for international travel."
    },
    {
      question: "Do you offer discounts or promotions?",
      answer: "Yes, we regularly offer discounts and special promotions for early bookings, group travel, and special holidays. Be sure to subscribe to our newsletter to stay updated on our latest offers."
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4 md:px-8">
      <h2 className="text-4xl font-extrabold text-center text-blue-950 mb-12">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item border-b border-gray-300 ${
              openIndex === index ? "open" : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >
            {/* FAQ Question */}
            <div
              className={`faq-question flex justify-between items-center cursor-pointer py-4 text-lg font-semibold transition-colors duration-300 ${
                openIndex === index ? "text-gray-700" : "text-blue-950"
              }`}
            >
              <span>{faq.question}</span>
              <span className="plus-icon transition-transform duration-300">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {/* FAQ Answer */}
            <div
              className={`faq-answer overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 px-4 py-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
