import type { RefObject } from 'preact'
import { Inputs, useEffect } from 'preact/hooks'

export function useEventListener<T extends Element, E extends Event, K extends keyof HTMLElementEventMap>(
  ref: RefObject<T | null>,
  type: K,
  listener: (event: HTMLElementEventMap[K]) => any,
  inputs?: Inputs
): void
export function useEventListener<T extends Element, E extends Event, K extends keyof SVGElementEventMap>(
  ref: RefObject<T | null>,
  type: K,
  listener: (event: SVGElementEventMap[K]) => any,
  inputs?: Inputs
): void
export function useEventListener<T extends Element, E extends Event>(ref: RefObject<T | null>, type: string, listener: (event: E) => any, inputs?: Inputs): void
export function useEventListener<T extends Element, E extends Event>(
  ref: RefObject<T | null>,
  type: any,
  listener: (event: E) => any,
  inputs: Inputs = []
): void {
  useEffect(() => {
    ref.current?.addEventListener(type, listener)
    return () => ref.current?.removeEventListener(type, listener)
  }, inputs)
}
