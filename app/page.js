"use client";

import { useEffect } from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Explore from "./_components/Explore";
import OrderCoffee from "./_components/OrderCoffee";
import SellingCoffee from "./_components/SellingCoffee";
import InstantCoffee from "./_components/InstantCoffee";
import Testimonials from "./_components/Testimonials";
import Footer from "./_components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles




export default function Home() {
  useEffect(() => {
    AOS.init({

    });
  },[])
  return (
  <>
    <Header />
    <Banner />
    <Explore />
    <OrderCoffee />
    <SellingCoffee />
    <InstantCoffee />
    <Testimonials />    
    <Footer />
    </>
  );
}
