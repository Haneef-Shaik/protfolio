'use client'

import {
  createContext,
  useEffect,
  useId,
  useState,
} from 'react'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import { GridPattern } from './GridPattern'
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
            className="absolute inset-x-0 -top-0 -z-10 h-full w-full fill-blue-500/50 stroke-blue-600/50 "
            yOffset={-96}
            interactive
          />

          <main className="w-full flex-auto">{children}</main>

        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children }) {
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner >{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}
