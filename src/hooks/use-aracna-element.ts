import type { AttributeChangeEvent, StateChangeEvent } from '@aracna/web'
import { MutableRefObject, useEffect, useReducer, useRef } from 'react'
import { useEventListener } from './use-event-listener.js'

interface Options {
  attribute?: {
    blacklist?: string[]
    dispatch?: boolean
    whitelist?: string[]
  }
  state?: {
    blacklist?: string[]
    dispatch?: boolean
    whitelist?: string[]
  }
}

interface ReturnInterface<K extends keyof HTMLElementTagNameMap> {
  element: HTMLElementTagNameMap[K] | null
  ref: MutableRefObject<HTMLElementTagNameMap[K] | null>
}

export function useComponent<K extends keyof HTMLElementTagNameMap>(options?: Options): ReturnInterface<K> {
  const ref = useRef(null)
  const [, dispatch] = useReducer(() => ({}), {})

  const onAttributeChanged = (event: AttributeChangeEvent) => {
    if (options?.attribute?.dispatch !== true) {
      return
    }

    if (!event.detail) {
      return
    }

    if (options.attribute.blacklist && options.attribute.blacklist.includes(event.detail.name)) {
      return
    }

    if (options.attribute.whitelist && !options.attribute.whitelist.includes(event.detail.name)) {
      return
    }

    dispatch()
  }

  const onStateChanged = (event: StateChangeEvent<any>) => {
    if (options?.state?.dispatch !== true) {
      return
    }

    if (!event.detail) {
      return
    }

    if (options.state.blacklist && options.state.blacklist.includes(event.detail.name)) {
      return
    }

    if (options.state.whitelist && !options.state.whitelist.includes(event.detail.name)) {
      return
    }

    dispatch()
  }

  useEventListener(ref, 'attribute-changed', onAttributeChanged, [ref.current])
  useEventListener(ref, 'state-changed', onStateChanged, [ref.current])
  useEffect(() => dispatch(), [ref.current])

  return { element: ref.current, ref }
}
