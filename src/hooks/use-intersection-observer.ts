import { isArray } from '@aracna/core'
import { type DependencyList, type MutableRefObject, useEffect, useRef, useState } from 'react'
import type {
  UseIntersectionObserverAreSomeIntersecting,
  UseIntersectionObserverIsEveryIntersecting,
  UseIntersectionObserverIsIntersecting,
  UseIntersectionObserverReturn
} from '../definitions/interfaces.js'
import type { UseIntersectionObserverElement } from '../definitions/types.js'

interface FilterEntries {
  (elements: UseIntersectionObserverElement[]): IntersectionObserverEntry[]
  (...elements: UseIntersectionObserverElement[]): IntersectionObserverEntry[]
}

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

  const filterEntries: FilterEntries = (...args: any[]): IntersectionObserverEntry[] => {
    const elements: (Element | null | undefined)[] = isArray<Element | null | undefined>(args[0])
      ? args[0][0] instanceof Element
        ? args[0]
        : []
      : args[0] instanceof Element
        ? args
        : []

    if (elements.length > 0) {
      return entries.filter((entry: IntersectionObserverEntry) => elements.includes(entry.target))
    }

    const refs: MutableRefObject<Element | null | undefined>[] = isArray<MutableRefObject<Element | null | undefined>>(args[0])
      ? args[0][0]?.current instanceof Element
        ? args[0]
        : []
      : args[0]?.current instanceof Element
        ? args
        : []

    if (refs.length > 0) {
      return entries.filter((entry: IntersectionObserverEntry) =>
        refs.some((ref: MutableRefObject<Element | null | undefined>) => ref.current === entry.target)
      )
    }

    return entries
  }

  const areSomeIntersecting: UseIntersectionObserverAreSomeIntersecting = (...args: any[]): boolean => {
    return filterEntries(...args).some((entry: IntersectionObserverEntry) => entry.isIntersecting)
  }

  const isEveryIntersecting: UseIntersectionObserverIsEveryIntersecting = (...args: any[]): boolean => {
    return filterEntries(...args).every((entry: IntersectionObserverEntry) => entry.isIntersecting)
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
  }, [...targets, options?.root, options?.rootMargin, options?.threshold, ...deps])

  return { entries, observer, areSomeIntersecting, isEveryIntersecting, isIntersecting }
}
