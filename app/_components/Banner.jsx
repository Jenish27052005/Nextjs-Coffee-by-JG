"use client";

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Banner = () => {
  return (
  <>
        <div className="bg-gray-200" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: false,
        // }}
        
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='cursor-pointer'>
            <div className="container md:pt-20 md:pb-16">
            <div className="grid md:grid-cols-2">
                <div className="relative">
                    <h1 className='md:text-8xl text-4xl font-bold py-4 '>Alowishus Delicious Coffee </h1>
                    <div className='absolute top-56 mt-1 right-56 md:flex hidden'>
                        <Image src="/images/cafe.png" width={80} height={80} className='' />
                    </div>
                    <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ad, aliquam ipsum placeat quaerat blanditiis earum eveniet excepturi saepe tempore.</p>
                    <div className='md:flex gap-4 py-6 grid'>
                    <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">Download App</Button>
                    <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide" variant="outline">Shop Coffee</Button>
                    </div>
                </div>





                <div className="relative md:py-0 py-16">
                    <Image src="/images/hero1.png" width={600}  height={600} className=''/>
                    <div className='absolute top-10 md:top-4 md:right-24 right-0'>
                        <Image src="/images/cafe.png" width={120} height={120} className='md:w-28  w-16'/>
                    </div>
                </div>


                </div>
                </div></SwiperSlide>
{/* vhhd */}

         


{/* ibv */}

<SwiperSlide className='cursor-pointer'>
            <div className="container md:pt-20 md:pb-16">
            <div className="grid md:grid-cols-2">
                <div className="relative">
                    <h1 className='md:text-8xl text-4xl font-bold py-4 '>Alowishus Delicious Coffee </h1>
                    <div className='absolute top-56 mt-1 right-56 md:flex hidden'>
                        <Image src="/images/cafe.png" width={80} height={80} className='' />
                    </div>
                    <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ad, aliquam ipsum placeat quaerat blanditiis earum eveniet excepturi saepe tempore.</p>
                    <div className='md:flex gap-4 py-6 grid'>
                    <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">Download App</Button>
                    <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide" variant="outline">Shop Coffee</Button>
                    </div>
                </div>





                <div className="relative md:py-0 py-16">
                    <Image src="/images/alowishus-coffee.png" width={600}  height={600} className=''/>
                    <div className='absolute top-10 md:top-4 md:right-24 right-0'>
                        <Image src="/images/cafe.png" width={120} height={120} className='md:w-28  w-16'/>
                    </div>
                </div>


                </div>
                </div></SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide> */}
      </Swiper>
        </div>
    </>
  )
}

export default Banner;