import { DependencyList, MutableRefObject, useEffect } from 'react'

export function useEventListener<T extends Element, E extends Event, K extends keyof HTMLElementEventMap>(
  ref: MutableRefObject<T | null>,
  type: K,
  listener: (event: HTMLElementEventMap[K]) => any,
  deps?: DependencyList
): void
export function useEventListener<T extends Element, E extends Event, K extends keyof SVGElementEventMap>(
  ref: MutableRefObject<T | null>,
  type: K,
  listener: (event: SVGElementEventMap[K]) => any,
  deps?: DependencyList
): void
export function useEventListener<T extends Element, E extends Event>(
  ref: MutableRefObject<T | null>,
  type: string,
  listener: (event: E) => any,
  deps?: DependencyList
): void
export function useEventListener<T extends Element, E extends Event>(
  ref: MutableRefObject<T | null>,
  type: any,
  listener: (event: E) => any,
  deps: DependencyList = []
): void {
  useEffect(() => {
    ref.current?.addEventListener(type, listener)
    return () => ref.current?.removeEventListener(type, listener)
  }, deps)
}
