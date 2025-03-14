"use client";
import {useEffect,useRef} from "react";
import Link from "next/link";
import Image from "next/image";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export const Navbar = () => {

    const navRef = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
         // Navbar animation
    if (navRef.current) {
        gsap.fromTo(
          navRef.current,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
        );
      }
  

    }, []);
    return (
        <nav ref={navRef} className="bg-white/95 backdrop-blur-sm fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
        <Link href="/" className="flex items-center">
            <Image
              src="https://cdn.nailib.com/_next/static/media/logo-small.5691114d.svg?w=256&q=75"
              alt="Nail IB's App Icon"
              width={50}
              height={50}
              // className="w-[10px] h-auto"
              priority // Loads faster
            />
        </Link>
      </div>
            
            <div className="hidden md:flex md:items-center md:space-x-10">
              <Link href="https://nailib.com/ib-past-papers" className="gap-2 text-gray-700 hover:text-blue-600 transition px-3 py-2 text-sm font-medium ">
                Past Papers
              </Link>
              <Link href="https://nailib.com/schools" className="text-gray-700 hover:text-blue-600 transition px-3 py-2 text-sm font-medium">
                Schools
              </Link>
              <Link href="https://nailib.com/ib-flashcards" className="text-gray-700 hover:text-blue-600 transition px-3 py-2 text-sm font-medium">
                Flashcards
              </Link>
              <Link href="https://nailib.com/ib-question-bank" className="text-gray-700 hover:text-blue-600 transition px-3 py-2 text-sm font-medium">
                Question Bank
              </Link>
              <Link href="#" className="bg-blue-600 text-white rounded-md px-3 py-2 text-sm font-medium">
                Videos
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
            <Link href="#" className="text-gray-700 hover:text-blue-600 transition px-3 py-2 text-sm font-medium">
                Log in
              </Link>
              <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition shadow-md hover:shadow-lg">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;