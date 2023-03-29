import React from 'react';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module


const images = [
  { img: '/narwhal1.jpeg' },
  { img: '/narwhal2.jpeg' },
  { img: '/narwhal3.jpeg' },
  { img: '/narwhal1.jpeg' },
  { img: '/narwhal2.jpeg' },
  { img: '/narwhal3.jpeg' },
  { img: '/narwhal1.jpeg' },
  { img: '/narwhal2.jpeg' },
  { img: '/narwhal3.jpeg' },
  { img: '/narwhal1.jpeg' },
  { img: '/narwhal2.jpeg' },
  { img: '/narwhal3.jpeg' },
];

const animation = { duration: 60000, easing: (t) => t }

export default function Carousel() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 6,
      spacing: 10,
    },
    loop: true,
    renderMode: 'performance',
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {images.map((image) => {
        return (
          <div className="keen-slider__slide">
            <img src={image.img} alt="narwhal image" height={200} width={200} />
          </div>
        );
      })}
    </div>
  );
}