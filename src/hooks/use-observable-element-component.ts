import type { AttributeChangeEvent, StateChangeEvent } from '@aracna/web'
import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch } from './use-dispatch.js'

interface Options {
  blacklist?: string[]
  whitelist?: string[]
}

interface Properties extends Record<string, any> {}

interface ReturnInterface<K extends keyof HTMLElementTagNameMap, P extends Properties = Properties> {
  element: HTMLElementTagNameMap[K] | null
  onAttributeChange: (event: AttributeChangeEvent) => void
  onStateChange: (event: StateChangeEvent<any>) => void
  properties: P
  ref: MutableRefObject<HTMLElementTagNameMap[K] | null>
}

export function useObservableElementComponent<K extends keyof HTMLElementTagNameMap, P extends Properties = Properties>(
  options?: Options
): ReturnInterface<K, P> {
  const ref = useRef<HTMLElementTagNameMap[K]>(null)
  const dispatch = useDispatch()
  const [properties, setProperties] = useState<P>({} as P)

  const onAttributeChange = useCallback(
    (event: AttributeChangeEvent) => {
      if (!event.detail) {
        return
      }

      if (options?.blacklist && options.blacklist.includes(event.detail.name)) {
        return
      }

      if (options?.whitelist && !options.whitelist.includes(event.detail.name)) {
        return
      }

      setProperties((properties: P) => (event.detail ? { ...properties, [event.detail.name]: event.detail.value } : properties))
    },
    [options?.blacklist, options?.whitelist]
  )

  const onStateChange = useCallback(
    (event: StateChangeEvent<any>) => {
      if (!event.detail) {
        return
      }

      if (options?.blacklist && options.blacklist.includes(event.detail.name)) {
        return
      }

      if (options?.whitelist && !options.whitelist.includes(event.detail.name)) {
        return
      }

      setProperties((properties: P) => (event.detail ? { ...properties, [event.detail.name]: event.detail.value } : properties))
    },
    [options?.blacklist, options?.whitelist]
  )

  useEffect(() => dispatch(), [ref.current])

  return { element: ref.current, onAttributeChange, onStateChange, properties, ref }
}
