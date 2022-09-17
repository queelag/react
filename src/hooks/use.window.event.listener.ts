import { Inputs, useEffect } from 'preact/hooks'

export function useWindowEventListener<K extends keyof WindowEventMap>(type: K, listener: (event: WindowEventMap[K]) => any, inputs: Inputs = []) {
  useEffect(() => {
    window.addEventListener(type, listener)
    return () => window.removeEventListener(type, listener)
  }, inputs)
}
