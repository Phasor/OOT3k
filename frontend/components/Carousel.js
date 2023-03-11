import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import Image from 'next/image'

const images = [
    {img:'/narwhal1.jpeg'},
    {img:'/narwhal2.jpeg'},
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
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        {images.map((image) => {
            return(
                <SwiperSlide key={image.img}>
                    <Image
                        src={image.img}
                        alt="Picture of the author"
                        width={400}
                        height={400}
                    />
                </SwiperSlide>
            )
        }
        )}
    </Swiper>
  )
}
