import { useEffect, useRef, useState } from 'react'

export function useIntersection(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    }, {
      threshold: 0.1,
      ...options
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}

export function useParallax(speed = 0.5) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const elementOffset = window.pageYOffset + rect.top
        const windowOffset = window.scrollY
        
        if (windowOffset > elementOffset - window.innerHeight && 
            windowOffset < elementOffset + rect.height) {
          setOffset((windowOffset - (elementOffset - window.innerHeight)) * speed)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return [ref, offset]
}
