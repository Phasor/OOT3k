import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import Image from 'next/image'

const images = [
    {img:'/narwhal2.jpeg'},
    {img:'/narwhal1.jpeg'},
    {img:'/narwhal3.jpeg'},
    {img:'/narwhal1.jpeg'},
    {img:'/narwhal2.jpeg'},
    {img:'/narwhal3.jpeg'},
    {img:'/narwhal1.jpeg'},
    {img:'/narwhal2.jpeg'},
    {img:'/narwhal3.jpeg'},
]

export default function Carousel() {
  return (
    <Swiper
        spaceBetween={1}
        slidesPerView={1}
        centeredSlides={true}
        centeredSlidesBounds={true}

        breakpoints={{
          140: {
            slidesPerView: 1,
            spaceBetween: 1,
            centeredSlides: true
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 50,
            centeredSlides: true
          },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: true,
            },
          }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-[80%] sm:w-full"
    >
        {images.map((image) => {
            return(
                <SwiperSlide key={image.img}>
                    <Image
                        src={image.img}
                        alt="Picture of the author"
                        width={400}
                        height={400}
                        className="object-cover h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]"
                    />
                </SwiperSlide>
            )
        }
        )}
    </Swiper>
  )
}