"use client";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export const Works = () => {
    const howItWorksRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

         // How it works section animation
    if (howItWorksRef.current) {
        const steps = howItWorksRef.current.querySelectorAll(".step-item");
        
        gsap.from(howItWorksRef.current.querySelector("h2"), {
          opacity: 0,
          y: 30,
          duration: 0.8,
          scrollTrigger: {
            trigger: howItWorksRef.current,
            start: "top 80%",
          },
        });
        
        gsap.from(steps, {
          opacity: 0,
          x: -30,
          stagger: 0.2,
          duration: 0.8,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: howItWorksRef.current,
            start: "top 75%",
          },
        });
      }

    }, []);
    return (
        <section ref={howItWorksRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="step-item flex flex-col items-center text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                <div className="absolute top-0 right-0 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-600">Create your account and choose a subscription plan that works for you.</p>
            </div>
            
            <div className="step-item flex flex-col items-center text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                <div className="absolute top-0 right-0 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse Videos</h3>
              <p className="text-gray-600">Find videos for your specific subjects and topics from our extensive library.</p>
            </div>
            
            <div className="step-item flex flex-col items-center text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                <div className="absolute top-0 right-0 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Learning</h3>
              <p className="text-gray-600">Watch videos at your own pace and improve your understanding of challenging topics.</p>
            </div>
          </div>
        </div>
      </section>
  
    )
}

export default Works;