import { useEffect, useRef, useState } from 'react';
import './App.css'
import About from './screens/About'
import Landing from './screens/Landing'
import Progress from './screens/Progress'
import Skills from './screens/Skills';
import { RootLayout } from './components/RootLayout';

function App() {
  const scrollRef = useRef(null);

  // useEffect(() => {
  //   const scrollingDiv = scrollRef.current;
  //   const handleScroll = (event) => {
  //     event.preventDefault();
  //     const scrollAmount = 0.95; // Adjust this value for your desired scroll speed

  //     // Calculate the amount to scroll
  //     const scrollIncrement = event.deltaY * scrollAmount;

  //     // Animate the scroll
  //     scrollingDiv.scrollTop += scrollIncrement;
  //   };

  //   if (scrollingDiv) {
  //     scrollingDiv.addEventListener("wheel", handleScroll, { passive: false });
  //   }

  //   return () => {
  //     if (scrollingDiv) {
  //       scrollingDiv.removeEventListener("wheel", handleScroll);
  //     }
  //   };
  // }, []);
  return (
    <RootLayout>
    <div className='mainPage w-screen h-screen overflow-auto scrollbar-hide !p-0' ref={scrollRef}  >
      <Landing/>
      <div className='' >
      <Skills />
      </div> 
      <About />
      <Progress />
    </div>
    </RootLayout>
  
  )
}

export default App
