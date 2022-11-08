import type { DOMElement, ForwardedRef, HTMLAttributes, RefAttributes } from 'react'

export type ElementComponent<Element extends HTMLElement, Props extends HTMLAttributes<Element> = {}> = (
  props: Props,
  ref: ForwardedRef<Element>
) => DOMElement<Props, Element>

export type ElementComponentAttributes = Record<string, any>
export type ElementComponentEvents = Record<string, Event>

export type ElementComponentProps<
  Element extends HTMLElement,
  Attributes extends ElementComponentAttributes = ElementComponentAttributes,
  Events extends ElementComponentEvents = ElementComponentEvents
> = HTMLAttributes<Element> & RefAttributes<Element> & MapComponentAttributes<Attributes | Events>

export type MapComponentAttributes<T extends ElementComponentAttributes> = {
  [key in keyof T]: T[key] extends Event | undefined ? (event: NonNullable<T[key]>) => any : T[key]
}
