import { getKebabCaseString } from '@queelag/core'
import { createElement, createRef, RefObject, VNode } from 'preact'
import { useEffect } from 'preact/hooks'
import { ComponentAttributes, ComponentEvents, ComponentProps } from '../definitions/types'

export function createComponent<
  Element extends HTMLElement,
  Attributes extends ComponentAttributes = {},
  Events extends ComponentEvents = {},
  Props extends ComponentProps<Element, Attributes, Events> = ComponentProps<Element, Attributes, Events>
>(tag: any, events?: Events): (props: Props, ref?: RefObject<Element>) => VNode<Props> {
  return (props: Props, ref: RefObject<Element> = createRef()) => {
    const element: VNode<Props> = createElement(tag, { ...props, ref })
    const listeners: [string, EventListenerOrEventListenerObject][] = []

    const addEventListeners = () => {
      console.log('addEventListeners', ref)

      if (!ref.current) {
        return
      }

      for (let key in events) {
        let type: string, listener: string | undefined

        type = getKebabCaseString(key)
        listener = props[key]

        if (typeof listener !== 'function') {
          continue
        }

        ref.current.addEventListener(type, listener)
      }
    }

    const removeEventListeners = () => {
      console.log('removeEventListeners', ref)

      if (!ref.current) {
        return
      }

      for (let listener of listeners) {
        ref.current.removeEventListener(...listener)
      }
    }

    useEffect(() => {
      addEventListeners()
      return removeEventListeners
    }, [])

    return element
  }
}
