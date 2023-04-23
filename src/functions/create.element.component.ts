import { getObjectProperty, getPascalCaseString, KeyOf, setObjectProperty } from '@aracna/core'
import { createElement, createRef, DOMElement, ForwardedRef, forwardRef, Ref, useEffect, useState } from 'react'
import { ElementComponent, ElementComponentAttributes, ElementComponentEvents, ElementComponentProps } from '../definitions/types'

export function createElementComponent<
  Element extends HTMLElementTagNameMap[Key],
  Attributes extends ElementComponentAttributes = {},
  Events extends ElementComponentEvents = {},
  Props extends ElementComponentProps<Element, Attributes, Events> = ElementComponentProps<Element, Attributes, Events>,
  Key extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap
>(tag: Key, element: { new (): Element }, events?: KeyOf.Shallow<Events>[]): ElementComponent<Element, Props> {
  return forwardRef((props: Props, _ref: ForwardedRef<Element>) => {
    /**
     * Clone props shallowly so we don't alter the real ones.
     */
    props = { ...props }

    for (let key in props) {
      /**
       * Remove key if value is false to match standard DOM API.
       */
      if (props[key] === false) {
        delete props[key]
      }
      /**
       * Set empty string if value is true to match standard DOM API.
       */
      if (props[key] === true) {
        props[key] = '' as any
      }
    }

    if (props.className) {
      setObjectProperty(props, 'class', props.className)
      delete props.className
    }

    const ref: Ref<Element> = _ref ?? createRef<Element>()
    const element: DOMElement<Props, Element> = createElement(tag, { ...props, ref, suppressHydrationWarning: true })
    const [listeners]: [Map<string, EventListenerOrEventListenerObject>, any] = useState(new Map())

    const addEventListeners = () => {
      if (typeof ref !== 'object' || !ref?.current || !events) {
        return
      }

      for (let type of events) {
        let pct: string, listener: EventListenerOrEventListenerObject | undefined

        pct = 'on' + getPascalCaseString(String(type))
        listener = getObjectProperty(props, pct)

        if (typeof listener !== 'function') {
          continue
        }

        ref.current.addEventListener(String(type), listener)
        listeners.set(String(type), listener)
      }
    }

    const removeEventListeners = () => {
      if (typeof ref !== 'object' || !ref?.current) {
        return
      }

      for (let listener of listeners) {
        ref.current.removeEventListener(...listener)
        listeners.delete(listener[0])
      }
    }

    useEffect(() => {
      removeEventListeners()
      addEventListeners()

      return removeEventListeners
    }, [props])

    return element
  }) as any
}
