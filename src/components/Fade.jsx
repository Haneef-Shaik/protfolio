'use client'
import React, { useEffect, useRef } from 'react';
import { useAnimation } from 'framer-motion';
import { createContext, useContext } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const FadeInStaggerContext = createContext(false)

const viewport = { once: false, margin: '0px 0px -100px' }

export function FadeIn(props) {
  let shouldReduceMotion = useReducedMotion()
  let isInStaggerGroup = useContext(FadeInStaggerContext)

  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementTop = element.offsetTop;

      if (scrollPosition > elementTop) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 50 });
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      animate={controls}
      transition={{ duration: 0.6 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
          })}
      {...props}
    />
  )
}
