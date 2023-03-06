import React, { useEffect } from 'react';
import 'intersection-observer'; // import the polyfill

export default function Lore() {

  useEffect(() => {
    // create the observer when the component mounts
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    // observe all the elements with the "hide" class
    const hiddenElements = document.querySelectorAll('.hide-left, .hide-right');
    hiddenElements.forEach(element => {
      observer.observe(element);
    });

    // cleanup the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section id="lore" className='w-full min-h-screen bg-[#74acf7] relative flex justify-center items-center'>
          <div class="custom-shape-divider-top-1677879891">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill"></path>
              </svg>
          </div>
          
          <div className='max-w-6xl flex flex-col justify-center items-center my-11'>
            <div className='h-[20rem] w-[20rem] bg-red-300 my-11 hide-left'></div>
            <div className='h-[20rem] w-[20rem] bg-red-400 my-11 hide-right'></div>
            <div className='h-[20rem] w-[20rem] bg-red-500 my-11 hide-left'></div>
            <div className='h-[20rem] w-[20rem] bg-red-600 my-11 hide-right'></div>
          </div>
      </section>
    </>
  )
}
