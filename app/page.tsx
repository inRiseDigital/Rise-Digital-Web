import Chat from "./chat/page";

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
            <Chat/>
          </div>
        </div>
      </div>
    </div>
  );
}
