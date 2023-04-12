import React, { useEffect } from 'react'

export default function Test() {
  // comment to push to vercel

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = document.querySelector('body');
      let lastScroll = 0;

      window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) { // at top
          body.classList.remove('scroll-up');
        }

        if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) { // scrolling down
          body.classList.remove('scroll-up');
          body.classList.add('scroll-down');
        }

        if (currentScroll < lastScroll && body.classList.contains('scroll-down')) { // scrolling up
          body.classList.remove('scroll-down');
          body.classList.add('scroll-up');
        }

        lastScroll = currentScroll;
      });
    }
  });

  return (
    <div className="stickynav min-h-screen w-screen bg-black flex justify-center items-center">
      <header className="w-full h-30 fixed top-0 left-0 z-50 bg-white">
        <div className='w-full h-full flex justify-between'>
          <p className='text-black font-lekton text-lg font-bold p-4 ml-5'>Home</p>
          <p className='text-black font-lekton text-lg font-bold p-4'>Team</p>
          <p className='text-black font-lekton text-lg font-bold p-4'>FAQ</p>
          <p className='text-black font-lekton text-lg font-bold p-4 mr-5'>Buy</p>
        </div>

      </header>
      
      
      <div className='my-[10rem]'>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
        <p className='text-white font-lekton text-lg'>Some other content</p>
      </div>

    </div>
  )
}
