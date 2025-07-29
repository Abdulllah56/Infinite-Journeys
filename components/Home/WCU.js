"use client"
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CountUpAnimation = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return <span ref={elementRef}>{count}+</span>;
};

export default function WhyChooseUs() {
  return (
    <div className="relative overflow-hidden py-20">
      {/* Background Particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            animate={{
              x: ["0%", "100%"],
              y: ["0%", "100%"],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Why Choose Infinite Journeys?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Embark on a journey where every detail is crafted for an unforgettable experience
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: 1000, label: "Happy Travelers" },
            { number: 50, label: "Countries" },
            { number: 150, label: "Expert Guides" },
            { number: 500, label: "Tours Completed" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                <CountUpAnimation target={stat.number} />
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Personalized Travel Planning",
              description: "We craft custom trips to match your unique preferences, ensuring every moment is perfect.",
              icon: "🎯",
              gradient: "from-blue-500 to-blue-700"
            },
            {
              title: "24/7 Customer Support",
              description: "Our dedicated team is here around the clock to assist with any travel need or emergency.",
              icon: "🤝",
              gradient: "from-purple-500 to-purple-700"
            },
            {
              title: "Experienced Local Guides",
              description: "Explore destinations with our seasoned local guides who provide deep insights.",
              icon: "🌎",
              gradient: "from-green-500 to-green-700"
            },
            {
              title: "Affordable Pricing",
              description: "Get the best deals for your dream destinations without breaking the bank.",
              icon: "💎",
              gradient: "from-yellow-500 to-yellow-700"
            },
            {
              title: "Quality Service Guaranteed",
              description: "We ensure every trip is filled with exceptional experiences and world-class service.",
              icon: "⭐",
              gradient: "from-red-500 to-red-700"
            },
            {
              title: "Exclusive Destinations",
              description: "Discover destinations only available through Infinite Journeys for a truly unique experience.",
              icon: "✈️",
              gradient: "from-teal-500 to-teal-700"
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05 }}
              className={`relative group overflow-hidden p-6 rounded-2xl bg-gradient-to-r ${benefit.gradient}`}
            >
              <div className="absolute inset-0 bg-white opacity-10 group-hover:opacity-0 transition-opacity duration-300" />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl mb-4"
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/90">{benefit.description}</p>
                
                <motion.div
                  className="absolute bottom-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mb-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 180, 270, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
