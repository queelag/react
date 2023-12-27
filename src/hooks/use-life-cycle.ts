import { MutableRefObject, useEffect, useRef } from 'react'
import { ComponentLifeCycle } from '../definitions/enums.js'

/**
 * Returns the current life cycle of the component.
 *
 * - The `CONSTRUCTED` state means that the component has been created but not yet mounted.
 * - The `MOUNTED` state means that the component has been mounted.
 * - The `UNMOUNTED` state means that the component has been unmounted.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/hooks/use-life-cycle)
 */
export function useLifeCycle(): MutableRefObject<ComponentLifeCycle> {
  const value = useRef<ComponentLifeCycle>(ComponentLifeCycle.CONSTRUCTED)

  useEffect(() => {
    value.current = ComponentLifeCycle.MOUNTED
    return () => {
      value.current = ComponentLifeCycle.UNMOUNTED
    }
  }, [])

  return value
}
