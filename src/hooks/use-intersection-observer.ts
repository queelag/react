import { DependencyList, MutableRefObject, useEffect, useRef, useState } from 'react'
import {
  UseIntersectionObserverAreSomeIntersecting,
  UseIntersectionObserverIsEveryIntersecting,
  UseIntersectionObserverIsIntersecting,
  UseIntersectionObserverReturn
} from '../definitions/interfaces.js'
import { UseIntersectionObserverElement } from '../index.js'

/**
 * Creates an IntersectionObserver and observes the given targets.
 *
 * - Optionally the root element, root margin and threshold can be configured.
 * - Optionally a list of dependencies can be passed to refresh the IntersectionObserver.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/hooks/use-intersection-observer)
 */
export function useIntersectionObserver(
  targets: UseIntersectionObserverElement[],
  options?: IntersectionObserverInit,
  deps: DependencyList = []
): UseIntersectionObserverReturn {
  const observer = useRef<IntersectionObserver>()
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([])

  const areSomeIntersecting: UseIntersectionObserverAreSomeIntersecting = (...args: any[]): boolean => {
    const elements: (Element | null | undefined)[] = args[0] instanceof Element ? args : args[0]
    const refs: MutableRefObject<Element | null | undefined>[] = typeof args[0] === 'object' && Reflect.has(args[0], 'current') ? args : args[0]

    return entries
      .filter((entry: IntersectionObserverEntry) =>
        [elements.includes(entry.target), refs.some((ref: MutableRefObject<Element | null | undefined>) => ref.current === entry.target)].some(Boolean)
      )
      .some((entry: IntersectionObserverEntry) => entry.isIntersecting)
  }

  const isEveryIntersecting: UseIntersectionObserverIsEveryIntersecting = (...args: any[]): boolean => {
    const elements: (Element | null | undefined)[] = args[0] instanceof Element ? args : args[0]
    const refs: MutableRefObject<Element | null | undefined>[] = typeof args[0] === 'object' && Reflect.has(args[0], 'current') ? args : args[0]

    return entries
      .filter((entry: IntersectionObserverEntry) =>
        [elements.includes(entry.target), refs.some((ref: MutableRefObject<Element | null | undefined>) => ref.current === entry.target)].some(Boolean)
      )
      .every((entry: IntersectionObserverEntry) => entry.isIntersecting)
  }

  const isIntersecting: UseIntersectionObserverIsIntersecting = (...args: any[]): boolean => {
    return areSomeIntersecting(...args)
  }

  const callback = (entries: IntersectionObserverEntry[]): void => {
    setEntries(entries)
  }

  useEffect(() => {
    observer.current = new IntersectionObserver(callback, options)

    for (let target of targets) {
      if (target instanceof Element) {
        observer.current.observe(target)
        continue
      }

      if (target?.current instanceof Element) {
        observer.current.observe(target.current)
      }
    }

    return () => observer.current?.disconnect()
  }, [targets, options, ...deps])

  return { entries, observer, areSomeIntersecting, isEveryIntersecting, isIntersecting }
}
