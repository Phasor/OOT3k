import React, { useEffect, useState } from 'react';
import 'intersection-observer'; // import the polyfill
import Image from 'next/image';

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
    <section id="lore" className="w-full min-h-screen relative flex justify-center items-center bg-[url('/dots.jpg')] bg-repeat bg-contain bg-center border-b-[0.5rem] border-t-[0.5rem] border-black">
        
        <div className='max-w-6xl flex flex-col justify-center items-center my-6 md:my-11'>
          <div className="p-2 my-2 md:my-11 hide-left sm:mr-[4rem] md:mr-[20rem]">
            <Image src="/comic1.png" height={500} width={500} alt="Comic 2" className="object-cover h-[350px] w-[350px] md:h-[600px] md:w-[600px]" />
          </div>
          <div className="p-2 my-2 md:my-11 hide-right sm:ml-[4rem] md:ml-[20rem]">
            <Image src="/comic2.png" height={500} width={500} alt="Comic 2" className="object-cover h-[350px] w-[350px] md:h-[600px] md:w-[600px]" />
          </div>
          <div className="p-2 my-2 md:my-11 hide-left sm:mr-[4rem] md:mr-[20rem]">
            <Image src="/comic3.png" height={500} width={500} alt="Comic 2" className="object-cover h-[350px] w-[350px] md:h-[600px] md:w-[600px]" />
          </div>
          <div className="p-2 my-2 md:my-11 hide-right sm:ml-[4rem] md:ml-[20rem]">
            <Image src="/comic4.png" height={500} width={500} alt="Comic 2" className="object-cover h-[350px] w-[350px] md:h-[600px] md:w-[600px]" />
          </div>
   
        </div>
    </section>
  )
}
