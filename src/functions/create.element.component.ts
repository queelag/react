import { getObjectProperty, getStartCaseString, KeyOf } from '@queelag/core'
import { createElement, createRef, DOMElement, ForwardedRef, forwardRef, Ref, useEffect } from 'react'
import { ElementComponent, ElementComponentAttributes, ElementComponentEvents, ElementComponentProps } from '../definitions/types'

export function createElementComponent<
  Element extends HTMLElementTagNameMap[Key],
  Attributes extends ElementComponentAttributes = {},
  Events extends ElementComponentEvents = {},
  Props extends ElementComponentProps<Element, Attributes, Events> = ElementComponentProps<Element, Attributes, Events>,
  Key extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap
>(tag: Key, element: { new (): Element }, events?: KeyOf.Shallow<Events>[]): ElementComponent<Element, Props> {
  return forwardRef((props: Props, _ref: ForwardedRef<Element>) => {
    const ref: Ref<Element> = _ref ?? createRef<Element>()
    const element: DOMElement<Props, Element> = createElement(tag, { ...props, ref, suppressHydrationWarning: true })
    const listeners: [string, EventListenerOrEventListenerObject][] = []

    const addEventListeners = () => {
      if (typeof ref !== 'object' || !ref?.current || !events) {
        return
      }

      for (let type of events) {
        let pct: string, listener: EventListenerOrEventListenerObject | undefined

        pct = 'on' + getStartCaseString(String(type))
        listener = getObjectProperty(props, pct)

        if (typeof listener !== 'function') {
          continue
        }

        ref.current.addEventListener(String(type), listener)
      }
    }

    const removeEventListeners = () => {
      if (typeof ref !== 'object' || !ref?.current) {
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
  }) as any
}
