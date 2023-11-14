'use client'

import {
  createContext,
  useEffect,
  useState,
} from 'react'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import { GridPattern } from '../components/GridPattern'
import { FadeIn } from '../components/FadeIn'
const RootLayoutContext = createContext({})
function RootLayoutInner({ children }) {
  let [expanded, setExpanded] = useState(false)
  let shouldReduceMotion = useReducedMotion()
  useEffect(() => {
    function onClick(event) {
      if (event.target.closest('a')?.href === window.location.href) {
        setExpanded(false)
      }
    }
    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <motion.div
        layout
        className="relative flex flex-auto overflow-hidden bg-[#262626] w-full h-full min-h-[500px]"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col"
        >
          <GridPattern
            className="absolute inset-x-0 -top-0 -z-10 h-full w-full fill-blue-500/50 stroke-blue-600/50"
            yOffset={-96}
            interactive
          />

          <main className="w-full flex-auto">{children}</main>

        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

function RootLayout({ children }) {
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner >{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}


export default function Progress() {

  

  return (
    <RootLayout>
      <div className="w-full min-h-screen grid items-center ">
        <FadeIn className="sticky  grid">
          <div className="text-[5vw] text-center text-white font-bold">
            {" "}
            Something Great in Progress ...
          </div>
        </FadeIn>
      </div>
    </RootLayout>
  );
}
