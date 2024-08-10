import { isWindowDefined } from '@aracna/core'
import { type DependencyList, useState } from 'react'
import { useWindowEventListener } from './use-window-event-listener.js'

/**
 * Returns the window size.
 * Optionally a dependency list can be passed to refresh the dimensions.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/hooks/use-window-size)
 */
export function useWindowSize(deps: DependencyList = []) {
  const [innerHeight, setInnerHeight] = useState<number>(isWindowDefined() ? window.innerHeight : 0)
  const [innerWidth, setInnerWidth] = useState<number>(isWindowDefined() ? window.innerWidth : 0)
  const [outerHeight, setOuterHeight] = useState<number>(isWindowDefined() ? window.outerHeight : 0)
  const [outerWidth, setOuterWidth] = useState<number>(isWindowDefined() ? window.outerWidth : 0)

  useWindowEventListener(
    'resize',
    () => {
      setInnerHeight(window.innerHeight)
      setInnerWidth(window.innerWidth)
      setOuterHeight(window.outerHeight)
      setOuterWidth(window.outerWidth)
    },
    deps
  )

  return { innerHeight, innerWidth, outerHeight, outerWidth }
}
