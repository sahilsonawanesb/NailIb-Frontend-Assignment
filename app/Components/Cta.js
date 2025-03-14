"use client";
import {useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
export const Cta = () => {
    
  const ctaRef = useRef(null);
  
  useEffect(() => {


    // CTA section animation
    if (ctaRef.current) {
      gsap.from(ctaRef.current.querySelector("h2"), {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
      });
      
      gsap.from(ctaRef.current.querySelector(".cta-content"), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
      });
      
      gsap.from(ctaRef.current.querySelector("button"), {
        opacity: 0,
        y: 20,
        scale: 0.9,
        duration: 0.6,
        delay: 0.4,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
      });
    }
  }, []);

    return (
        <section ref={ctaRef} className="py-20 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your IB Experience?</h2>
          <div className="cta-content max-w-2xl mx-auto mb-8">
            <p className="text-lg md:text-xl text-blue-100">
              Join thousands of IB students who have improved their grades and confidence with Nailib Video resources.
              Start your journey today with our risk-free 7-day trial.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 cursor-pointer">
                Start Free Trial
              </button>
            </Link>
            <Link href="#">
              <button className="bg-transparent border-2 border-white px-6 py-4 rounded-lg text-lg font-medium hover:bg-white/10 transition cursor-pointer">
                Explore Our Subjects
              </button>
            </Link>
          </div>
          <p className="mt-6 text-blue-200 text-sm">No credit card required. Cancel anytime.</p>
        </div>
      </section>
    )
}

export default Cta;