import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const InstantCoffee = () => {
  return (
    <>
    <div className="bg-gray-50 md:py-16 " data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <div className="container">
            <div className="grid md:grid-cols-2 gap-10 items-center mx-auto">
                <div className="order-2 md:flex InstantCoffee_col relative mx-auto">
                    <Image src="/images/coffee-banner.png" width={600} height={600} className='border-2 rounded-3xl border-gray-100 absolute top-0 left-20 z-20 md:w-[16rem] w-[10rem]'  />
                    <Image src="/images/coffee-banner.png" width={600} height={600} className='border-2 rounded-3xl border-gray-100 -rotate-12 z-10 md:w-[16rem] w-[10rem]' />
                    <img src="/images/hand-drawn.png" className='left- absolute top-20 md:-left-16 -z-10 max-w-lg md:max-w-md max-w-56' />

                </div>
               <div className="order-1 md:ps-40  py-0 md:py-0">
                <h1 className='text-3xl md:text-5xl  font-bold'>Instant Coffee At Your Home</h1>
                 <p className='text-gray-500 text-lg py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur est sed fuga. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, dolore!</p>
                 <Button className="p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">Download App</Button>
    
              </div>
            </div>


        </div>
        </div>
    
    
    </>
  )
}

export default InstantCoffee