"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Features = () => {
  const featuresRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (featuresRef.current) {
        const featureCards = gsap.utils.toArray(".feature-card");

        // Title Animation
        gsap.from(featuresRef.current.querySelector("h2"), {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        // Feature Cards Animation
        featureCards.forEach((card, index) => {
          gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power3.out",
            delay: index * 0.1, // Stagger effect manually
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
              once: true, // Prevent re-triggering on scroll back
            },
          });
        });
      }
    }, featuresRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section ref={featuresRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          Why Choose Nailib Videos?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "IB-Specific Content",
              desc: "All videos are tailored to the IB curriculum, covering exactly what you need for your exams.",
              icon: "M19 14l-7 7m0 0l-7-7m7 7V3",
            },
            {
              title: "Expert Tutors",
              desc: "Learn from experienced IB teachers and examiners who know what it takes to succeed.",
              icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
            },
            {
              title: "High-Quality Production",
              desc: "Professionally recorded and edited videos with clear audio and visuals.",
              icon: "M13 10V3L4 14h7v7l9-11h-7z",
            },
            {
              title: "Learn at Your Pace",
              desc: "Access videos anytime, anywhere. Pause, rewind, and review as needed.",
              icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              title: "Exam-Focused Approach",
              desc: "Content designed to help you master exam techniques and scoring strategies.",
              icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
            },
            {
              title: "Regular Updates",
              desc: "New videos added regularly to keep up with curriculum changes and student needs.",
              icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
