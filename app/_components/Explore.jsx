import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Explore = () => {
  return (
   <>
   <div className=' ' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
<div className="container py-20 ">
  {/******** */}
   <div className="grid md:grid-cols-6 text-center md:py-16">
    <div className=""></div>
    <div className="md:col-start-2 col-span-4">
    <h1 className='text-3xl md:text-5xl font-bold'>Explore Our Alowishus</h1>
    <p className='py-2 md:w-2/4  text-gray-500 text-lg mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur est sed fuga.</p>
    
    </div>
    <div className=""></div>
   </div>
  {/******** */}
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-6 md:w-4/5 mx-auto">
        <div className="shadow-lg hover:shadow-5xl cursor-pointer px-8 py-10 rounded-xl hover:scale-105 transition-all">
          <h1 className='text-3xl text-gray-700 font-semibold'> Our Catering</h1>
          <p className='py-2 text-gray-500 text-lg'>Lorem ipsum dolor sit amet consectetur </p>
          <div className="text-center">
            <Image src="/images/icon1.png" width={150} height={150} className='py-6 mx-auto'/> 
            <Button className="p-6 rounded-full shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">ORDER CATHERING</Button></div>
            </div>
        <div className="shadow-lg hover:shadow-5xl cursor-pointer px-8 py-10 rounded-xl hover:scale-105 transition-all">
        <h1 className='text-3xl text-gray-700 font-semibold'>The Food</h1>
          <p className='py-2 text-gray-500 text-lg'>Lorem ipsum dolor sit amet consectetur </p>
          <div className="text-center">
            <Image src="/images/icon2.png" width={150} height={150} className='py-6 mx-auto'/> 
            <Button className="p-6 rounded-full shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">FOOD MENU</Button></div>
            </div>
        <div className="shadow-lg hover:shadow-5xl cursor-pointer px-8 py-10 rounded-xl hover:scale-105 transition-all">
        <h1 className='text-3xl text-gray-700 font-semibold'> The Gelato</h1>
          <p className='py-2 text-gray-500 text-lg'>Lorem ipsum dolor sit amet consectetur </p>
          <div className="text-center">
            <Image src="/images/icon3.png" width={150} height={150} className='py-6 mx-auto'/> 
            <Button className="p-6 rounded-full shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">DISCOVER</Button></div>
            </div>
    </div>

  {/******** */}

</div></div>

   </>
  )
}

export default Explore