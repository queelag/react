import { Environment } from '@queelag/core'
import { MutableRefObject, useRef } from 'react'

export function useSafeRef<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): MutableRefObject<HTMLElementTagNameMap[K]>
export function useSafeRef<K extends keyof SVGElementTagNameMap>(tagName: K, options?: ElementCreationOptions): MutableRefObject<SVGElementTagNameMap[K]>
export function useSafeRef<K1 extends keyof HTMLElementTagNameMap, K2 extends keyof SVGElementTagNameMap>(
  tagName: K1 | K2,
  options?: ElementCreationOptions
): MutableRefObject<HTMLElementTagNameMap[K1]> | MutableRefObject<SVGElementTagNameMap[K2]> {
  return useRef(Environment.isWindowDefined ? document.createElement(tagName, options) : ({ current: {} } as any))
}
