import  Hero  from './components/Hero/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities/Capabilities';
import Footer from './components/Footer/Footer';

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
            <div id='Capabilities' className='home-campaign-productivity px-4 pt-8 overflow-hidden'>
              <Capabilities />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

