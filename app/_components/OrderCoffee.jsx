import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const OrderCoffee = () => {
  return (
  <>
        <div className="bg-gray-50 md:py-16 md:my-10 " data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <div className="container">
            <div className="grid md:grid-cols-2 md:gap-20 gap-6 items-center">
                <div className="">
                    <Image src="/images/coffee-mid.png" width={600} height={600} className="object-cover md:w-full" />
                </div>
                <div className="md:pe-40 py-10 md:py-0">
                <h1 className='text-3xl md:text-5xl font-bold'>Order Your Favorite Coffee</h1>
    <p className='text-gray-500 text-lg md:py-8 py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur est sed fuga. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, dolore!</p>
    <Button className="p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">ORDER NOW</Button>
    
                </div>
            </div>


        </div>
        </div>



  </>
  );
};

export default OrderCoffee;
