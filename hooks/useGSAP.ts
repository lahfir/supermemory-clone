'use client'

import { useRef, useEffect, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export const useGSAP = (
  callback: (context: { gsap: typeof gsap; ScrollTrigger: typeof ScrollTrigger }) => void,
  dependencies: React.DependencyList = []
) => {
  const contextRef = useRef<gsap.Context>(gsap.context(() => { }))

  useIsomorphicLayoutEffect(() => {
    if (typeof window === 'undefined') return

    gsap.registerPlugin(ScrollTrigger)

    contextRef.current = gsap.context(() => {
      callback({ gsap, ScrollTrigger })
    })

    return () => {
      contextRef.current?.revert()
    }
  }, dependencies)

  useEffect(() => {
    return () => {
      contextRef.current?.kill()
    }
  }, [])

  return contextRef.current
}

export const useFadeUp = (dependencies: React.DependencyList = []) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!elementRef.current) return

    gsap.fromTo(
      elementRef.current,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, dependencies)

  return elementRef
}

export const useFadeUpStagger = (dependencies: React.DependencyList = []) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    const children = gsap.utils.toArray(containerRef.current.children)

    gsap.fromTo(
      children,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, dependencies)

  return containerRef
}