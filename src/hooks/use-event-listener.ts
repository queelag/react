import { DependencyList, useEffect } from 'react'
import { UseEventListenerElement } from '../index.js'

/**
 * Adds an event listener to the given element.
 * Optionally a list of dependencies can be passed to refresh the listener.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/hooks/use-event-listener)
 */
export function useEventListener<T extends Element, K extends keyof HTMLElementEventMap>(
  element: UseEventListenerElement<T>,
  type: K,
  listener: (event: HTMLElementEventMap[K]) => unknown,
  deps?: DependencyList
): void
/**
 * Adds an event listener to the given element.
 * Optionally a list of dependencies can be passed to refresh the listener.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/hooks/use-event-listener)
 */
export function useEventListener<T extends Element, K extends keyof SVGElementEventMap>(
  element: UseEventListenerElement<T>,
  type: K,
  listener: (event: SVGElementEventMap[K]) => unknown,
  deps?: DependencyList
): void
/**
 * Adds an event listener to the given element.
 * Optionally a list of dependencies can be passed to refresh the listener.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/hooks/use-event-listener)
 */
export function useEventListener<T extends Element, E extends Event>(
  element: UseEventListenerElement<T>,
  type: string,
  listener: (event: E) => unknown,
  deps?: DependencyList
): void
export function useEventListener<T extends Element>(
  element: UseEventListenerElement<T>,
  type: string,
  listener: (event: unknown) => unknown,
  deps: DependencyList = []
): void {
  useEffect(() => {
    if (element instanceof Element) {
      element.addEventListener(type, listener)
      return () => element.removeEventListener(type, listener)
    }

    if (element?.current instanceof Element) {
      element.current.addEventListener(type, listener)
      return () => element.current?.removeEventListener(type, listener)
    }
  }, [element, type, listener, ...deps])
}
