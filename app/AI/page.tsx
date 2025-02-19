import  Hero  from './components/Hero';
import About from './components/About';

export default function AI() {
  
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
          <div className='hero-section px-3 '>
            <About />
          </div>
        </div>
      </div>
    </div>
    );
  }

