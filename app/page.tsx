import Image from 'next/image';
import Hero from './components/Hero-section/Hero';
import Capabilities from './components/Capabilities/Capabilities';
import Security from './components/Expertise/Expertise';
import Globe from './components/Contact/Contact';
import Footer from './components/Contact/Footer';
import Clients from './components/Clients/Clients';

export default function Home() {
  
  return (
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
          <div id='clients' className='home-campaign-productivity px-4 pt-8 overflow-hidden'>
            <Clients />
          </div>
          <div id='collaboration' className='home-campaign-productivity px-4 pt-8  overflow-hidden'>
          </div>
          <div id='productivity' className='home-campaign-productivity px-4 pt-8 overflow-hidden'>
            <Capabilities/>
          </div>
          <div id='collaboration' className='home-campaign-productivity px-4 pt-8  overflow-hidden'>
          </div>
          <div id='security' className='home-campaign-productivity px-4 pt-8 pb-16 overflow-hidden'>
            <Security/>
          </div>
         <Globe/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
