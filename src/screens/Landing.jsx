import React, { useEffect, useLayoutEffect, useState } from "react";
import haneef from "../assets/haneef.png";
import haneef2 from "../assets/haneef_shaik.png";
import { RootLayout } from "../components/RootLayout";
import { FadeIn } from "../components/Fade";
export default function Landing() {
  // useEffect(() => {
  //   const scrollingDiv = document.querySelector(".mainPage");
  //   const image1 = document.querySelector("#image-1");
  //   // const image2 = document.querySelector("#image-2")
  //   const handleScroll = () => {
  //     const scrollPosition = scrollingDiv.scrollTop;
  //     console.log(scrollPosition / window.innerHeight);

  //     image1.style.opacity = 1 - scrollPosition / window.innerHeight;
  //     // image2.style.opacity = scrollPosition / window.innerHeight;
  //   };
  //   if (scrollingDiv) {
  //     scrollingDiv.addEventListener("scroll", handleScroll);
  //   }
  //   return () => {
  //     if (scrollingDiv) {
  //       scrollingDiv.removeEventListener("scroll", handleScroll);
  //     }
  //   };
  // }, []);

   useEffect(() => {
    const scrollingDiv = document.querySelector(".mainPage");
    const image1 = document.querySelector("#image-1");
    const content = document.querySelector("#content");
    const bgLayer = document.querySelector(".bg-layer") 
    const landing_page = document.querySelector(".landing_page") 
    const handleScroll = () => {
      const scrollPosition = scrollingDiv.scrollTop / 10  ;
      image1.style.right = - scrollPosition + "%";
      content.style.left = - scrollPosition + "%";
      bgLayer.style.left = - scrollPosition + "%";
      // bgLayer.style.background = `linear-gradient(to bottom left, transparent ${((scrollingDiv.scrollTop / landing_page.clientHeight) * 100 ) }%, #262626 65%,#262626)`;
      image1.style.top = ` calc(100vh + ${parseInt(scrollingDiv.scrollTop )}px`;
      content.style.top = `calc(50vh + ${parseInt(scrollingDiv.scrollTop )}px`;
      bgLayer.style.top = `${parseInt(scrollingDiv.scrollTop)}px`;
      // content.style.bottom = scrollPosition + "%";
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

  return (
        <FadeIn className="grid px-4 landing_page w-screen overflow-hidden !p-0 m-0 "   >
      <div className="relative w-screen min-h-[180vh] overflow-hidden p-0 !m-0 transition"  >

          <div style={{background:"linear-gradient(to bottom left, transparent 50%,#262626 65%,#262626)"}} className="bg-layer absolute left-0 top-0  w-screen h-screen"></div>

          <div className="absolute left-0 top-[50vh] translate-y-[-50%] z-20 !text-[#e1e1e1] grid gap-3  md:px-6 h-fill"
          id="content">
            <div className="text-3xl md:text-3xl">Hii, {"I'm"}</div>
            <div className="font-bold text-5xl md:text-6xl">Haneef Shaik </div>
            <div className="text-3xl md:text-3xl ">
              {" "}
              I Design and Develop Web Applications
            </div>
            <div className="py-4">
              <span className="font-extrabold text-2xl md:text-5xl text-gray-500">
                <span className="">{"< "}</span>
                <span className="text-blue-500 font-medium">
                  FullStack Developer{" "}
                </span>
                <span className="">{"/>"}</span>{" "}
              </span>
            </div>
          </div>

        {/* <FadeIn className="md:fixed md:right-[-15px] bottom-0 md:w-[40rem] pointer-events-none h-full ">
          <div className="relative w-full h-full">
            <img
              src={haneef2}
              alt="haneef Shaik"
              id="image-2"
              className="absolute  bottom-0 md:w-[40rem]"
              style={{ transition: "0.6s" }}
            />
            <img
              src={haneef}
              alt="haneef Shaik"
              id="image-1"
              className="absolute bottom-0 md:w-[40rem]"
              style={{ transition: "0.1s", opacity: 1 }}
            />
          </div>
        </FadeIn> */}
            <img
              src={haneef}
              alt="haneef Shaik"
              id="image-1"
              className="absolute top-[100vh] transform translate-y-[-100%]  right-0 w-1/2"
            />
      </div>
      
      </FadeIn>
  );
}
