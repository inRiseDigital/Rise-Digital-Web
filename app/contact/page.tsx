"use client";

import  Hero  from './components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav'
import dynamic from 'next/dynamic';
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

const Model = dynamic(
  () => import("../components/Bot/Bot").then((mod) => mod.Model),
  { ssr: false }
);


export default function AI() {
  return (
    <>
      <div className=' '>
        <div className='relative z-50'>
          <div className='absolute'>
          </div>
        </div>
        <div>
          <div className='overflow-hidden'>
            <div className='hero-section px-3 '>
              <Hero/>
            </div>
            <div id='About' className='home-campaign-productivity px-4 pt-8 overflow-hidden'>
              <About />
            </div>
            <div id='Contact' className='home-campaign-productivity px-4 pt-8 overflow-hidden'>
              <Contact />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Nav />
      <div
        className="fixed bottom-4 right-4 z-50 pointer-events-none"
        onClick={() => (window.location.href = "/")}
      >
        <Model />
      </div>
    </>
  );
}

