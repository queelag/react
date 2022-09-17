import { Environment } from '@queelag/core'
import { RefObject } from 'preact'
import { useRef } from 'preact/hooks'

export function useSafeRef<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): RefObject<HTMLElementTagNameMap[K]>
export function useSafeRef<K extends keyof SVGElementTagNameMap>(tagName: K, options?: ElementCreationOptions): RefObject<SVGElementTagNameMap[K]>
export function useSafeRef<K1 extends keyof HTMLElementTagNameMap, K2 extends keyof SVGElementTagNameMap>(
  tagName: K1 | K2,
  options?: ElementCreationOptions
): RefObject<HTMLElementTagNameMap[K1]> | RefObject<SVGElementTagNameMap[K2]> {
  return useRef(Environment.isWindowDefined ? document.createElement(tagName, options) : ({ current: {} } as any))
}
