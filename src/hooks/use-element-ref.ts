import { isWindowDefined } from '@aracna/core'
import { type MutableRefObject, useRef } from 'react'

/**
 * Returns a mutable ref object whose `.current` property is initialized with a matching element.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/hooks/use-element-ref)
 */
export function useElementRef<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): MutableRefObject<HTMLElementTagNameMap[K]>
/**
 * Returns a mutable ref object whose `.current` property is initialized with a matching element.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/hooks/use-element-ref)
 */
export function useElementRef<K extends keyof SVGElementTagNameMap>(tagName: K, options?: ElementCreationOptions): MutableRefObject<SVGElementTagNameMap[K]>
export function useElementRef(tagName: string, options?: ElementCreationOptions): MutableRefObject<unknown> {
  return useRef(isWindowDefined() ? document.createElement(tagName, options) : ({ current: {} } as any))
}
