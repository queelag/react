import { DependencyList, useEffect } from 'react'

export function useWindowEventListener<K extends keyof WindowEventMap>(type: K, listener: (event: WindowEventMap[K]) => any, deps: DependencyList = []) {
  useEffect(() => {
    window.addEventListener(type, listener)
    return () => window.removeEventListener(type, listener)
  }, deps)
}
