import { PascalCase } from '@aracna/core'
import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react'

export type ElementComponent<Element extends HTMLElement, Props extends HTMLAttributes<Element> = {}> = ForwardRefExoticComponent<Props>

export type ElementComponentAttributes = Record<string, any>
export type ElementComponentEvents = Record<string, any>

export type ElementComponentProps<
  Element extends HTMLElement,
  Attributes extends ElementComponentAttributes = ElementComponentAttributes,
  Events extends ElementComponentEvents = ElementComponentEvents
> = HTMLAttributes<Element> & RefAttributes<Element> & Attributes & MapComponentEvents<Events>

export type MapComponentEvents<Events extends ElementComponentEvents> = {
  [key in keyof Events as key extends string ? `on${PascalCase<key>}` : key]?: (event: Events[key]) => any
}
