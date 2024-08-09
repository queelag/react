import type { AttributeChangeEvent, StateChangeEvent } from '@aracna/web-components'
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

export interface UseObservableElementComponentOptions {
  blacklist?: string[]
  whitelist?: string[]
}

export interface UseObservableElementComponentReturn<K extends keyof HTMLElementTagNameMap, P extends Record<string, string> = Record<string, string>> {
  element: HTMLElementTagNameMap[K] | null
  onAttributeChange: (event: AttributeChangeEvent) => void
  onStateChange: (event: StateChangeEvent<any>) => void
  properties: P
  ref: MutableRefObject<HTMLElementTagNameMap[K] | null>
}

export interface UseWindowSizeReturn {
  innerHeight: number
  innerWidth: number
  outerHeight: number
  outerWidth: number
}
