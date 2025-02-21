"use client";

import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav'
import dynamic from 'next/dynamic';


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
              
            </div>
            <div id='Capabilities' className='home-campaign-productivity px-4 pt-8 overflow-hidden'>
              
            </div>
            <div id='Projects' className='home-campaign-productivity px-4 pt-8 overflow-hidden'>
              
            </div>
            <div id='Contact' className='home-campaign-productivity px-4 pt-8 overflow-hidden'>
              
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

