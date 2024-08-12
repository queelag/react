import type { MutableRefObject } from 'react'
import type { UseIntersectionObserverElement } from './types.js'

export interface UseIntersectionObserverAreSomeIntersecting {
  (elements: UseIntersectionObserverElement[]): boolean
  (...elements: UseIntersectionObserverElement[]): boolean
}

export interface UseIntersectionObserverIsEveryIntersecting extends UseIntersectionObserverAreSomeIntersecting {}
export interface UseIntersectionObserverIsIntersecting extends UseIntersectionObserverAreSomeIntersecting {}

export interface UseIntersectionObserverReturn {
  areSomeIntersecting: UseIntersectionObserverAreSomeIntersecting
  entries: IntersectionObserverEntry[]
  isIntersecting: UseIntersectionObserverIsIntersecting
  isEveryIntersecting: UseIntersectionObserverIsEveryIntersecting
  observer: MutableRefObject<IntersectionObserver | undefined>
}

export interface UseWindowSizeReturn {
  innerHeight: number
  innerWidth: number
  outerHeight: number
  outerWidth: number
}
