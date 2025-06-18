'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const fadeUpAnimation = (element: HTMLElement | string, delay = 0) => {
  gsap.fromTo(
    element,
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

export const fadeUpStagger = (elements: HTMLElement[] | string, delayBetween = 0.1) => {
  gsap.fromTo(
    elements,
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      stagger: delayBetween,
      scrollTrigger: {
        trigger: elements,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

export const slideInFromLeft = (element: HTMLElement | string, delay = 0) => {
  gsap.fromTo(
    element,
    {
      x: -100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

export const slideInFromRight = (element: HTMLElement | string, delay = 0) => {
  gsap.fromTo(
    element,
    {
      x: 100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

export const scaleUpAnimation = (element: HTMLElement | string, delay = 0) => {
  gsap.fromTo(
    element,
    {
      scale: 0.8,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

export const initializeAnimations = () => {
  if (typeof window === 'undefined') return

  gsap.config({
    nullTargetWarn: false,
  })

  ScrollTrigger.refresh()
}

export const cleanupAnimations = () => {
  if (typeof window === 'undefined') return
  
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
}