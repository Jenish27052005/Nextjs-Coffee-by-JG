import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
   <>
   <div className="">
   <div class="bg-gray-100">
    <div class="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        <div class="p-5 sm:w-8/12">
           <Image src="/images/logo.png" width={150} height={80} className=''/>
            <div class="text-gray-500 uppercase text-sm gap-1 md:gap-8 grid md:flex mt-10">
            <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 mr-5"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 mr-5"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 mr-5"
                >
                  Company
                </a>
            </div>

        </div>
        <div class="p-5 sm:w-4/12">
            <h3 class="font-medium text-lg text-gray-900 mb-4">Subscribe to our Newsletter</h3>
            <form class="mt-4">
                <input class="border rounded w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="username@email.com" />
            </form>
        </div>
    </div>
    <div class="flex py-5 m-auto md:px-0 px-3 mx-auto text-center text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <p>© Copyright 2024. All Rights Reserved @JGSolution</p>
    </div>
</div>
   </div>
   </>
  )
}

export default Footer