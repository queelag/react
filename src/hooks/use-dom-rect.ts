import { StubDOMRect } from '@aracna/web'
import { type DependencyList, useEffect, useState } from 'react'
import type { UseDOMRectElement } from '../definitions/types.js'

/**
 * Returns the DOMRect of an element.
 * Optionally a dependency list can be passed to refresh the DOMRect.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/hooks/use-element-dom-rect)
 */
export function useDOMRect<T extends Element>(element: UseDOMRectElement<T>, deps: DependencyList = []) {
  const [rect, setRect] = useState<DOMRect>(new StubDOMRect())

  useEffect(() => {
    if (element instanceof Element) {
      setRect(element.getBoundingClientRect())
      return
    }

    if (element?.current instanceof Element) {
      setRect(element.current.getBoundingClientRect())
    }
  }, [element, ...deps])

  return rect
}
