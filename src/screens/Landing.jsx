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
   className="w-full min-h-screen overflow-auto scrollbar-hide flex flex-col gap-2 justify-center  md:grid md:grid-cols-2 md:items-center md:place-items-center ">

  <FadeIn className="sticky  grid">
  <div className='z-20 text-white text-5xl md:text-6xl font-extrabold grid gap-1 ' >
    <div className="font-bold" >Hii, {"I'm"}</div>
    <div className="" >
  Haneef Shaik 
    </div>
    <div className="text-lg font-mono " > I Design and Develop Web Applications</div>
  <div>
  <span className=" text-2xl md:text-4xl"> <span className="text-gray-5200" >  {"<"}</span><span className="text-blue-500 font-medium">FullStack Developer </span>   <span className="text-gray-200" >{"/>"}</span>  </span>
  </div>
  </div>
  </FadeIn>


        <FadeIn 
        className="md:fixed md:right-[-15px] md:bottom-0 md:w-[40rem] pointer-events-none"
        >
        <div className="relative w-full h-full" >
        <img src={haneef} alt="haneef Shaik"   id="image-1"  className="absolute md:bottom-0 md:w-[40rem]" style={{transition:"0.1s", opacity:1}} />
        <img src={haneef2} alt="haneef Shaik"  id="image-2"  className=" md:right-[-15px] md:bottom-0 md:w-[40rem]" style={{transition:"0.6s"}} />
        </div>
  </FadeIn>

  </div>
    </RootLayout>
  )
}
