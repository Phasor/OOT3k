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
        slidesPerView={1}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full h-[300px] sm:h-[400px]"
        autoHeight
    >
        {images.map((image) => {
            return(
                <SwiperSlide key={image.img}>
                    <Image
                        src={image.img}
                        alt="Picture of Oceans of Terra NFT"
                        width={400}
                        height={400}
                        className="object-cover h-[100px] w-[100px] sm:h-[400px] sm:w-[400px]"
                    />
                </SwiperSlide>
            )
        }
        )}
    </Swiper>
  )
}
