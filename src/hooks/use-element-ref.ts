import { isWindowDefined } from '@aracna/core'
import { type RefObject, useRef } from 'react'

/**
 * Returns a mutable ref object whose `.current` property is initialized with a matching element.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/hooks/use-element-ref)
 */
export function useElementRef<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): RefObject<HTMLElementTagNameMap[K]>
/**
 * Returns a mutable ref object whose `.current` property is initialized with a matching element.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/hooks/use-element-ref)
 */
export function useElementRef<K extends keyof SVGElementTagNameMap>(tagName: K, options?: ElementCreationOptions): RefObject<SVGElementTagNameMap[K]>
export function useElementRef(tagName: string, options?: ElementCreationOptions): RefObject<unknown> {
  return useRef(isWindowDefined() ? document.createElement(tagName, options) : ({ current: {} } as any))
}
