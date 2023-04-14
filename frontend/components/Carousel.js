import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
// import 'keen-slider/keen-slider.min.css'
// import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module


// const images = [
//   { img: '/turtlecard1.jpeg', id: 1},
//   { img: '/mermaidcard2.jpeg', id: 2},
//   { img: '/narwhalecard1.jpeg', id: 3},
//   { img: '/turtlecard1.jpeg', id: 4},
//   { img: '/mermaidcard2.jpeg', id: 5},
//   { img: '/narwhalecard1.jpeg', id: 6},
//   { img: '/turtlecard1.jpeg', id: 7},
//   { img: '/mermaidcard2.jpeg', id: 8},
//   { img: '/narwhalecard1.jpeg', id: 9},
//   { img: '/turtlecard1.jpeg', id: 10},
//   { img: '/mermaidcard2.jpeg', id: 11},
//   { img: '/narwhalecard1.jpeg', id: 12}
// ];


export default function Carousel({ reversed }) {
  // const [animationDuration, setAnimationDuration] = useState(60000);

  // useEffect(() => {
  //   const isSmallScreen = window.innerWidth <= 640;
  //   setAnimationDuration(isSmallScreen ? 20000 : 60000);
  // }, []);

  // const animation = useMemo(
  //   () => ({
  //     duration: animationDuration,
  //     easing: (t) => (reversed ? 1 - t : t),
  //   }),
  //   [animationDuration, reversed]
  // );

  // const [sliderRef, slider] = useKeenSlider({
  //   breakpoints: {
  //     '(min-width: 10px)': {
  //       slides: { perView: 4, spacing: 5 },
  //     },
  //     '(min-width: 600px)': {
  //       slides: { perView: 6, spacing: 10 },
  //     },
  //   },
  //   loop: true,
  //   renderMode: 'performance',
  //   drag: false,
  //   created(s) {
  //     s.moveToIdx(5, true, animation);
  //   },
  //   updated(s) {
  //     s.moveToIdx(s.track.details.abs + 5, true, animation);
  //   },
  //   animationEnded(s) {
  //     s.moveToIdx(s.track.details.abs + 5, true, animation);
  //   },
  // });

  // useEffect(() => {
  //   if (slider && slider.track && slider.track.details) {
  //     slider.moveToIdx(slider.track.details.abs + 5, true, animation);
  //   }
  // }, [animationDuration, slider]);

  return (
    // <div ref={sliderRef} className="keen-slider my-2 sm:my-4">
    //   {images.map((image) => (
    //     <div className="keen-slider__slide" key={image.id}>
    //       <img src={image.img} alt="narwhal image" height={150} width={150} />
    //     </div>
    //   ))}
    // </div>

    <div className='my-2 sm:my-4'>
      <Image
        src='/whirlpool-website.gif'
        alt='whirlpool animated gif'
        height={350}
        width={350}
        loading='lazy'
      />
    </div>
  );
}