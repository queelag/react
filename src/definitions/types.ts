import type { ForwardRefExoticComponent, HTMLAttributes, MutableRefObject, RefAttributes } from 'react'

export type ElementComponent<Element extends HTMLElement, Props extends HTMLAttributes<Element> = {}> = ForwardRefExoticComponent<Props>

export type ElementComponentAttributes = Record<string, any>
export type ElementComponentEvents = Record<string, any>

export type ElementComponentProps<
  Element extends HTMLElement,
  Attributes extends ElementComponentAttributes = ElementComponentAttributes,
  Events extends ElementComponentEvents = ElementComponentEvents
> = HTMLAttributes<Element> & RefAttributes<Element> & Attributes & MapComponentEvents<Events>

export type MapComponentEvents<Events extends ElementComponentEvents> = {
  [key in keyof Events as key extends string ? `on${KebabToPascalCase<key>}` : key]?: (event: Events[key]) => any
}

type KebabToCamelCase<S extends string> = S extends `${infer T}-${infer U}` ? `${T}${Capitalize<KebabToCamelCase<U>>}` : S
type KebabToPascalCase<S extends string> = Capitalize<KebabToCamelCase<S>>

export type UseDOMRectElement<T extends Element> = MutableRefObject<T | null | undefined> | T | null | undefined

export type UseEventListenerElement<T extends Element> = MutableRefObject<T | null | undefined> | T | null | undefined

export type UseIntersectionObserverElement = MutableRefObject<Element | null | undefined> | Element | null | undefined
