import { Ref, VNode } from 'preact'
import { DetailedHTMLProps, HTMLAttributes } from 'preact/compat'

export type ElementComponent<Element extends HTMLElement, Props = {}> = (props: Props, ref: Ref<Element>) => VNode<Props> | null

export type ElementComponentAttributes = Record<string, any>
export type ElementComponentEvents = Record<string, any>

export type ElementComponentProps<
  Element extends HTMLElement,
  Attributes extends ElementComponentAttributes = ElementComponentAttributes,
  Events extends ElementComponentEvents = ElementComponentEvents
> = DetailedHTMLProps<HTMLAttributes<Element>, Element> | Attributes | MapComponentEventsToListeners<Events>

type MapComponentEventsToListeners<T extends ElementComponentEvents> = {
  [key in keyof T]: (event: NonNullable<T[key]>) => any
}
