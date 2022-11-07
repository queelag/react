import { DetailedHTMLProps, HTMLAttributes } from 'preact/compat'

export type ComponentAttributes = Record<string, any>
export type ComponentEvents = Record<string, any>

export type ComponentProps<
  Element extends HTMLElement,
  Attributes extends ComponentAttributes = ComponentAttributes,
  Events extends ComponentEvents = ComponentEvents
> = DetailedHTMLProps<HTMLAttributes<Element>, Element> & Attributes & Events
