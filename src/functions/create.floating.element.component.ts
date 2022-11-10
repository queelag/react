import { KeyOf } from '@queelag/core'
import { FloatingElementAttributes, FloatingElementEventMap } from '@queelag/web'
import { ElementComponent, ElementComponentProps } from '../definitions/types'
import { createBaseElementComponent } from './create.base.element.component'

export function createFloatingElementComponent<
  Element extends HTMLElementTagNameMap[Key],
  Attributes extends FloatingElementAttributes = FloatingElementAttributes,
  Events extends FloatingElementEventMap = FloatingElementEventMap,
  Props extends ElementComponentProps<Element, Attributes, Events> = ElementComponentProps<Element, Attributes, Events>,
  Key extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap
>(tag: Key, element: { new (): Element }, events?: KeyOf.Shallow<Events>[]): ElementComponent<Element, Props> {
  return createBaseElementComponent<Element, Attributes, Events, Props, Key>(tag, element, events)
}
