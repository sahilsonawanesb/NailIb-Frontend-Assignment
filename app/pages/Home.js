"use client";
import Head from "next/head";
import { Hero } from "../Components/Hero.js";
import { Features } from "../Components/Feature.js";
import {Works} from "../Components/Work.js";
import {Navbar} from "../Components/Navbar.js";
import {Testimonials} from "../Components/Testimonial.js";
import {Cta} from "../Components/Cta.js";
import {Footer} from "../Components/Footer.js";
import {Subject} from "../Components/Subject.js";
import {Pricing} from "../Components/Pricing.js";


export const HomePage = () => {

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <Head>
        <title>Nailib Videos | Premium IB Video Resources</title>
        <meta
          name="description"
          content="Access high-quality IB study videos crafted by expert tutors. Enhance your learning experience with Nailib's comprehensive video library."
        />
        <link rel="icon" href="/favicon.svg" type="image/x-icon" />
      </Head>

      {/* Enhanced Navigation */}
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />
       
        {/* How It Works Section */}
        <Works />

        {/* Subjects */}
        <Subject />

        {/* Pricing */}

        <Pricing />

        {/* Testinomails */}
        <Testimonials />

        {/* CTA */}
        <Cta />
    </main>
    <Footer />
</div>
  )}

export default HomePage;