"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Hero = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const decorationRefs = useRef([]);

  useEffect(() => {
    if (!heroRef.current) return;
    
    // Create a timeline for smoother sequence animation
    const tl = gsap.timeline();
    
    // Animate heading
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
    
    // Animate description
    tl.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.4" // Start slightly before previous animation ends
    );
    
    // Animate button
    tl.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.3"
    );
    

    tl.fromTo(
      imageRef.current,
      { opacity: 0, x: 30, rotateY: 5 },
      { opacity: 1, x: 0, rotateY: 0, duration: 1, ease: "power2.out" },
      "-=0.6"
    );
    
    // Animate decorative elements
    decorationRefs.current.forEach((el) => {
      tl.fromTo(
        el,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power1.out" },
        "-=0.7"
      );
    });
    
  }, []);

  const addToRefs = (el) => {
    if (el && !decorationRefs.current.includes(el)) {
      decorationRefs.current.push(el);
    }
  };

  return (
    <section 
      ref={heroRef} 
      className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-24 text-white overflow-hidden"
    >
      {/* Enhanced decorative elements */}
      <div 
        ref={addToRefs}
        className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" 
      />
      <div 
        ref={addToRefs}
        className="absolute top-32 left-1/4 w-12 h-12 bg-white/15 rounded-full animate-pulse animation-delay-300" 
      />
      <div 
        ref={addToRefs}
        className="absolute bottom-20 right-1/3 w-16 h-16 bg-white/10 rounded-full animate-pulse animation-delay-700" 
      />
      <div 
        ref={addToRefs}
        className="absolute bottom-10 right-10 w-28 h-28 bg-white/5 rounded-full animate-pulse animation-delay-500" 
      />
      
      {/* Subtle mesh gradient background */}
      <div className="absolute inset-0 bg-[url('/mesh-bg.svg')] opacity-10"></div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-12 relative z-10">
        {/* Left Content Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-black text-transparent bg-gradient-to-r from-white to-blue-100"
          >
            Ace Your IB Exams With Premium Video Lessons
          </h1>
          
          <p 
            ref={descriptionRef}
            className="text-lg md:text-xl text-blue-100 max-w-lg"
          >
            Expert-led video tutorials covering the entire IB curriculum, designed to help you understand complex concepts and excel in your examinations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="#">
              <button 
                ref={buttonRef}
                className="bg-white text-blue-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 active:shadow-md cursor-pointer"
              >
                Start Learning Now
              </button>
            </Link>
            <Link href="#">
              <button className="bg-transparent border-2 border-white/70 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-white/10 transition-all cursor-pointer">
                View Plans
              </button>
            </Link>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-4 mt-6 text-sm">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center text-xs">JL</div>
              <div className="w-8 h-8 rounded-full bg-blue-300 border-2 border-white flex items-center justify-center text-xs">KT</div>
              <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center text-xs">MR</div>
            </div>
            <p className="text-blue-100">Join 5,000+ IB students worldwide</p>
          </div>
        </div>
        
        {/* Right Image Section */}
       {/* Right Image Section */}
<div
  ref={imageRef}
  className="md:w-1/2 flex justify-center"
>
  <div className="relative w-full max-w-lg">
    <div className="absolute -inset-0.5 bg-white/20 rounded-2xl blur opacity-70"></div>
    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/20">
      {/* Image - commented out as it's overlapping with the video */}
      
      <Image
        src="/assets/nailib.png"
        alt="IB Video Platform"
        width={600}
        height={400}
        className="w-full h-auto object-cover"
        priority
      />
  
      
      {/* YouTube iframe - positioned correctly */}
     
{/* 
<iframe
  className="w-full h-[100px]"
  src="blob:https://player.vimeo.com/6fa9d5c5-e91a-42dc-b996-409f0a0d1c4c"
  title="Vimeo video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe> */}
      
      {/* Video player overlay elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 pointer-events-none">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center pointer-events-auto">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-blue-600 border-b-8 border-b-transparent ml-1"></div>
            </div>
            <span className="text-white font-medium">Biology HL: Cell Division</span>
          </div>
          <span className="text-white/80 text-sm">12:45</span>
        </div>
        <div className="mt-3 w-full h-1 bg-white/30 rounded-full overflow-hidden">
          <div className="h-full w-2/3 bg-blue-400 rounded-full"></div>
        </div> 
       </div>
    </div>
    
    {/* Floating badge */}
    <div className="absolute -right-4 -top-4 bg-yellow-400 text-blue-900 px-4 py-1 rounded-full font-bold shadow-lg transform rotate-12">
      New Videos Weekly!
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Hero;