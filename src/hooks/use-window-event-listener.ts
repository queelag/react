import { type DependencyList, useEffect } from 'react'

/**
 * Adds an event listener to the window.
 * Optionally a dependency list can be passed to refresh the listener.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/hooks/use-window-event-listener)
 */
export function useWindowEventListener<K extends keyof WindowEventMap>(type: K, listener: (event: WindowEventMap[K]) => any, deps: DependencyList = []) {
  useEffect(() => {
    window.addEventListener(type, listener)
    return () => window.removeEventListener(type, listener)
  }, [type, listener, ...deps])
}
