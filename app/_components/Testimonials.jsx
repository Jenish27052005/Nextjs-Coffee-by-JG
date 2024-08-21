'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';



// import required modules
import { FreeMode } from 'swiper/modules';
import { Star, StarIcon } from 'lucide-react';
import Image from 'next/image';

export default function Testimonails() {
  return (
    <>
    <div className="container px-4 py-20" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">

    <div className="grid md:grid-cols-6 text-center md:py-10">
    <div className=""></div>
    <div className="col-start-2 col-span-4">
    <h1 className='text-3xl md:text-5xl font-bold pt-10'>Client Testimonials</h1>
    <p className='py-4 text-gray-500 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur est sed fuga.</p>
    
    </div>
   
   </div>
   <div className="">
    <div className="mb-10 flex items-center justify-center gap-x-6">
    <div className="hidden sm:block -space-x-2 overflow-hidden">
        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80" alt=""/>
        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
    </div>
    <div className="boder-none sm:border-l-2 border-black sm:pl-8">
        <div className="flex justify-center sm:justify-start">
            <h3 className="text-2xl font-semibold mr-2">4.6</h3>

            <img className="w-5" src="https://www.svgrepo.com/show/513354/star.svg" alt="stars-icon" />
        </div>
        <div>
            <h3 className="text-sm">Rated by 25k on google.</h3>
        </div>
    </div>
</div>
    </div>
    <div className='md:flex hidden'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        classNameNameName="mySwiper "
      >
        <SwiperSlide>
        <div className="w-[350px] rounded-md  bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500 md:m-7 cursor-pointer hover:scale-105 duration-500 hover:shadow-lg transition-all">

  <div className='bg-gray-200'> 
     <Image
      src="/images/girl1.png"
      alt="Laptop"
      width={320}
      height={320}
      className="rounded-t-md object-cover mx-auto" /></div>
    <div className="p-7">
        <div className="grid grid-cols-2">
        <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
            About Macbook &nbsp;
        </h1>
        <div className='flex gap-1'>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
        </div>
        </div>
        <p className='text-gray-500 text-lg pt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur est sed fuga. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, dolore!</p>


     
    </div>
</div>
        </SwiperSlide>
{/**** */}
<SwiperSlide>
        <div className="w-[350px] rounded-md  bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500 md:m-7 cursor-pointer hover:scale-105 duration-500 hover:shadow-lg transition-all">
  <div className='bg-gray-200'> 
     <Image
      src="/images/girl1.png"
      alt="Laptop"
      width={320}
      height={320}
      className="rounded-t-md object-cover mx-auto" /></div>
    <div className="p-7">
        <div className="grid grid-cols-2">
        <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
            About Macbook &nbsp;
        </h1>
        <div className='flex gap-1'>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
        </div>
        </div>
        <p className='text-gray-500 text-lg pt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur est sed fuga. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, dolore!</p>


     
    </div>
</div>
        </SwiperSlide>
{/**** */}
<SwiperSlide>      
      <div className="w-[350px] rounded-md  bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500 md:m-7 cursor-pointer hover:scale-105 duration-500 hover:shadow-lg transition-all">

  <div className='bg-gray-200'> 
     <Image
      src="/images/girl1.png"
      alt="Laptop"
      width={320}
      height={320}
      className="rounded-t-md object-cover mx-auto" /></div>
    <div className="p-7">
        <div className="grid grid-cols-2">
        <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
            About Macbook &nbsp;
        </h1>
        <div className='flex gap-1'>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
        </div>
        </div>
        <p className='text-gray-500 text-lg pt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur est sed fuga. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, dolore!</p>


     
    </div>
</div>
        </SwiperSlide>
{/**** */}
<SwiperSlide>
<div className="w-[350px] rounded-md  bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500 md:m-7 cursor-pointer hover:scale-105 duration-500 hover:shadow-lg transition-all">

  <div className='bg-gray-200'> 
     <Image
      src="/images/girl1.png"
      alt="Laptop"
      width={320}
      height={320}
      className="rounded-t-md object-cover mx-auto" /></div>
    <div className="p-7">
        <div className="grid grid-cols-2">
        <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
            About Macbook &nbsp;
        </h1>
        <div className='flex gap-1'>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
        </div>
        </div>
        <p className='text-gray-500 text-lg pt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur est sed fuga. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, dolore!</p>


     
    </div>
</div>
        </SwiperSlide>
{/**** */}

      
      </Swiper></div>


      {/**** */}
<div className=' md:hidden flex pt-10'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        classNameNameName="mySwiper"
      >
        <SwiperSlide>
        <div className=" rounded-md  bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500 md:m-7 cursor-pointer hover:scale-105 duration-500 hover:shadow-lg transition-all">

  <div className='bg-gray-200'> 
     <Image
      src="/images/girl1.png"
      alt="Laptop"
      width={320}
      height={320}
      className="rounded-t-md object-cover mx-auto" /></div>
    <div className="p-4">
        <div className="grid grid-cols-1 items-center gap-3">
        <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
            About Macbook &nbsp;
        </h1>
        <div className='flex gap-1'>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
        </div>
        </div>
        <p className='text-gray-500 text-lg pt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur est sed fuga. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, dolore!</p>


     
    </div>
</div>
        </SwiperSlide>



        <SwiperSlide>
        <div className=" rounded-md  bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500 md:m-7 cursor-pointer hover:scale-105 duration-500 hover:shadow-lg transition-all">

  <div className='bg-gray-200'> 
     <Image
      src="/images/girl1.png"
      alt="Laptop"
      width={320}
      height={320}
      className="rounded-t-md object-cover mx-auto" /></div>
    <div className="p-4">
        <div className="grid grid-cols-1 items-center gap-3">
        <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
            About Macbook &nbsp;
        </h1>
        <div className='flex gap-1'>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
        </div>
        </div>
        <p className='text-gray-500 text-lg pt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur est sed fuga. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, dolore!</p>


     
    </div>
</div>
        </SwiperSlide>



        <SwiperSlide>
        <div className=" rounded-md  bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500 md:m-7 cursor-pointer hover:scale-105 duration-500 hover:shadow-lg transition-all">

  <div className='bg-gray-200'> 
     <Image
      src="/images/girl1.png"
      alt="Laptop"
      width={320}
      height={320}
      className="rounded-t-md object-cover mx-auto" /></div>
    <div className="p-4">
        <div className="grid grid-cols-1 items-center gap-3">
        <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
            About Macbook &nbsp;
        </h1>
        <div className='flex gap-1'>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
        </div>
        </div>
        <p className='text-gray-500 text-lg pt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur est sed fuga. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, dolore!</p>


     
    </div>
</div>
        </SwiperSlide>



        <SwiperSlide>
        <div className=" rounded-md  bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500 md:m-7 cursor-pointer hover:scale-105 duration-500 hover:shadow-lg transition-all">

  <div className='bg-gray-200'> 
     <Image
      src="/images/girl1.png"
      alt="Laptop"
      width={320}
      height={320}
      className="rounded-t-md object-cover mx-auto" /></div>
    <div className="p-4">
        <div className="grid grid-cols-1 items-center gap-3">
        <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
            About Macbook &nbsp;
        </h1>
        <div className='flex gap-1'>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
            <Star width={25} className='text-yellow-400 '/>
        </div>
        </div>
        <p className='text-gray-500 text-lg pt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur est sed fuga. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, dolore!</p>


     
    </div>
</div>
        </SwiperSlide>

      
      </Swiper></div>
      </div>
    </>
  );
}

