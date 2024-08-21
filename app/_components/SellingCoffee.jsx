import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const SellingCoffee = () => {
  return (
    <>
    <div className="py-20">
        {/****** */}
        <div className="grid md:grid-cols-6 text-center md:py-16" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
    <div className=""></div>
    <div className="md:col-start-2 col-span-4">
    <h1 className='text-3xl md:text-5xl font-bold'>Best Selling Coffee</h1>
    <p className='py-2 md:w-2/4 mx-auto text-gray-500 text-lg '>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, in! adipisicing elit. Modi aspernatur est sed fuga.</p>
    
    </div>
    <div className=""></div>
   </div>
   {/**** */}
        <div className="container md:pb-10 py-20 px-2 pt-36">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-11/12 mx-auto">
                <div className="shadow-lg hover:shadow-5xl cursor-pointer md:px-12 px-8 py-8 rounded-xl hover:scale-105 transition-all relative">
                    <div className="grid grid-cols-2 gap-6 items-end">
                        <Image src="/images/mid1.png" width={280} height={280} className='absolute -right-8 bottom-51  w-3/4 '/>
                        <div className=''>
                            <p className='text-gray-500 text-lg'>#1 Selling</p>
                            <h1 className='text-3xl py-2 text-gray-700 font-semibold'> Double Espresso</h1>
                        </div>
                    </div>

                    <p className='text-gray-500 text-lg py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem ipsa rem dolorem quos ducimus, velit totam cum dolorum aliquam placeat, ab nemo incidunt debitis.</p>
                    <div className="grid md:grid-cols-2 gap-6 items-center py-2">
    <h1 className='font-semibold text-2xl'>$59.99</h1>
    <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">Order Now</Button>
</div>
                </div>
   {/********* */}
   <div className="shadow-lg hover:shadow-5xl cursor-pointer md:px-12 px-8 py-8 rounded-xl hover:scale-105 transition-all relative">
                    <div className="grid grid-cols-2 gap-6 items-end">
                        <Image src="/images/mid2.png" width={280} height={280} className='absolute -right-8 bottom-51  w-3/4 '/>
                        <div className=''>
                            <p className='text-gray-500 text-lg'>#1 Selling</p>
                            <h1 className='text-3xl py-2 text-gray-700 font-semibold'> Double Espresso</h1>
                        </div>
                    </div>

                    <p className='text-gray-500 text-lg py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem ipsa rem dolorem quos ducimus, velit totam cum dolorum aliquam placeat, ab nemo incidunt debitis.</p>
                    <div className="grid md:grid-cols-2 gap-6 items-center py-2">
    <h1 className='font-semibold text-2xl'>$59.99</h1>
    <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">Order Now</Button>
</div>
                </div>
      {/********* */}

      <div className="shadow-lg hover:shadow-5xl cursor-pointer md:px-12 px-8 py-8 rounded-xl hover:scale-105 transition-all relative">
                    <div className="grid grid-cols-2 gap-6 items-end">
                        <Image src="/images/mid3.png" width={280} height={280} className='absolute -right-8 bottom-51  w-3/4 '/>
                        <div className=''>
                            <p className='text-gray-500 text-lg'>#1 Selling</p>
                            <h1 className='text-3xl py-2 text-gray-700 font-semibold'> Double Espresso</h1>
                        </div>
                    </div>

                    <p className='text-gray-500 text-lg py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem ipsa rem dolorem quos ducimus, velit totam cum dolorum aliquam placeat, ab nemo incidunt debitis.</p>
<div className="grid md:grid-cols-2 gap-6 items-center py-2">
    <h1 className='font-semibold text-2xl'>$59.99</h1>
    <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">Order Now</Button>
</div>
                </div>
            </div>
            {/********* */}
       
        </div>
    </div>
    
    </>
  )
}

export default SellingCoffee