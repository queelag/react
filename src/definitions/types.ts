import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes, RefObject } from 'react'

export type ElementComponent<Element extends HTMLElement, Props extends HTMLAttributes<Element> = HTMLAttributes<Element>> = ForwardRefExoticComponent<Props>

export type ElementComponentAttributes = Record<string, any>
export type ElementComponentEvents = Record<string, any>

export type ElementComponentProps<
  Element extends HTMLElement,
  Attributes extends ElementComponentAttributes = ElementComponentAttributes,
  Events extends ElementComponentEvents = ElementComponentEvents
> = HTMLAttributes<Element> & RefAttributes<Element> & Attributes & MapComponentEvents<Events>

export type MapComponentEvents<Events extends ElementComponentEvents> = {
  [Key in keyof Events as Key extends string ? `on${KebabToPascalCase<Key>}` : Key]?: (event: Events[Key]) => any
}

type KebabToCamelCase<S extends string> = S extends `${infer T}-${infer U}` ? `${T}${Capitalize<KebabToCamelCase<U>>}` : S
type KebabToPascalCase<S extends string> = Capitalize<KebabToCamelCase<S>>

export type UseDOMRectElement<T extends Element> = RefObject<T | null | undefined> | T | null | undefined

export type UseEventListenerElement<T extends Element> = RefObject<T | null | undefined> | T | null | undefined

export type UseIntersectionObserverElement = RefObject<Element | null | undefined> | Element | null | undefined
