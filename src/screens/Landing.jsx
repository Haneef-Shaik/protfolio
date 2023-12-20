import React, { useEffect, useLayoutEffect, useState } from "react";
import haneef from "../assets/haneef.png"
import haneef2 from "../assets/haneef_shaik.png"
import { FadeIn } from "../components/FadeIn";
import { RootLayout } from "../components/RootLayout";
export default function Landing() {

  
  useEffect(() => {
    const scrollingDiv = document.querySelector(".mainPage");
    const image1 = document.querySelector("#image-1")
    // const image2 = document.querySelector("#image-2")
    const handleScroll = () => {
      const scrollPosition = scrollingDiv.scrollTop;
      console.log(scrollPosition / window.innerHeight);

      image1.style.opacity = 1 - scrollPosition / window.innerHeight;
      // image2.style.opacity = scrollPosition / window.innerHeight;
    };
    if (scrollingDiv) {
      scrollingDiv.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollingDiv) {
        scrollingDiv.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return(
    <RootLayout>
  <div
   className="w-full min-h-screen overflow-auto scrollbar-hide gap-2 justify-between items-center grid md:grid-cols-2 md:items-center md:place-items-center ">

  <FadeIn className="sticky grid px-4">
  <div className='z-20 !text-[#e1e1e1] grid gap-3  md:px-4' >
    <div className="text-3xl md:text-3xl" >Hii, {"I'm"}</div>
    <div className="font-bold text-5xl md:text-6xl" >Haneef Shaik </div>
    <div className="text-3xl md:text-3xl " > I Design and Develop Web Applications</div>
  <div className="py-4" >
  <span className="font-extrabold text-2xl md:text-5xl text-gray-500"> 
  <span className="" >{"< "}</span>
  <span className="text-blue-500 font-medium">FullStack Developer </span> 
  <span className="" >{"/>"}</span>  </span>
  </div>
  </div>
  </FadeIn>


        <FadeIn 
        className="md:fixed md:right-[-15px] bottom-0 md:w-[40rem] pointer-events-none h-full "
        >
        <div className="relative w-full h-full" >
        <img src={haneef2} alt="haneef Shaik"  id="image-2"  className="absolute  bottom-0 md:w-[40rem]" style={{transition:"0.6s"}} />
        <img src={haneef} alt="haneef Shaik"   id="image-1"  className="absolute bottom-0 md:w-[40rem]" style={{transition:"0.1s", opacity:1}} />
        </div>
  </FadeIn>

  </div>
    </RootLayout>
  )
}
