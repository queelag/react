import { isWindowDefined } from '@aracna/core'
import { useState } from 'react'
import { useWindowEventListener } from './use-window-event-listener.js'

export function useWindowSize() {
  const [innerHeight, setInnerHeight] = useState<number>(isWindowDefined() ? window.innerHeight : 0)
  const [innerWidth, setInnerWidth] = useState<number>(isWindowDefined() ? window.innerWidth : 0)
  const [outerHeight, setOuterHeight] = useState<number>(isWindowDefined() ? window.outerHeight : 0)
  const [outerWidth, setOuterWidth] = useState<number>(isWindowDefined() ? window.outerWidth : 0)

  useWindowEventListener('resize', () => {
    setInnerHeight(window.innerHeight)
    setInnerWidth(window.innerWidth)
    setOuterHeight(window.outerHeight)
    setOuterWidth(window.outerWidth)
  })

  return { innerHeight, innerWidth, outerHeight, outerWidth }
}
