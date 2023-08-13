import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react'

export function useIntersectionObserver(targets: MutableRefObject<HTMLElement | SVGElement | null>[], options?: IntersectionObserverInit) {
  const observer = useRef<IntersectionObserver>()
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([])

  const areSomeIntersecting = useMemo(() => entries.some((entry: IntersectionObserverEntry) => entry.isIntersecting), [entries])
  const isEveryIntersecting = useMemo(() => entries.every((entry: IntersectionObserverEntry) => entry.isIntersecting), [entries])
  const isIntersecting = areSomeIntersecting

  const callback = (entries: IntersectionObserverEntry[]): void => {
    setEntries(entries)
  }

  useEffect(() => {
    observer.current = new IntersectionObserver(callback, options)

    for (let target of targets) {
      if (!target.current) {
        return
      }

      observer.current.observe(target.current)
    }

    return () => observer.current?.disconnect()
  }, [])

  return { entries, observer, areSomeIntersecting, isEveryIntersecting, isIntersecting }
}
