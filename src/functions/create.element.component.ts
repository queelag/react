import { getKebabCaseString, getObjectProperty, KeyOf } from '@queelag/core'
import { createElement, Ref, VNode } from 'preact'
import { forwardRef } from 'preact/compat'
import { useEffect, useRef } from 'preact/hooks'
import { ElementComponent, ElementComponentAttributes, ElementComponentEvents, ElementComponentProps } from '../definitions/types'

export function createElementComponent<
  Element extends HTMLElement,
  Attributes extends ElementComponentAttributes = {},
  Events extends ElementComponentEvents = {},
  Props extends ElementComponentProps<Element, Attributes, Events> = ElementComponentProps<Element, Attributes, Events>
>(tag: any, events?: Extract<KeyOf.Shallow<Events>, string>[]): ElementComponent<Element, Props> {
  return forwardRef((props: Props, _ref: Ref<Element>) => {
    const ref = _ref ?? useRef<Element>()
    const element: VNode<Props> = createElement(tag, { ...props, ref })
    const listeners: [string, EventListenerOrEventListenerObject][] = []

    const addEventListeners = () => {
      if (typeof ref !== 'object' || !ref?.current || !events) {
        return
      }

      for (let key of events) {
        let type: string, listener: EventListenerOrEventListenerObject | undefined

        type = getKebabCaseString(key).replace('on-', '')
        listener = getObjectProperty(props, key)

        if (typeof listener !== 'function') {
          continue
        }

        ref.current.addEventListener(type, listener)
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
  })
}
