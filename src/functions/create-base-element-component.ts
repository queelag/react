import { KeyOf } from '@aracna/core'
import { BaseElementAttributes, BaseElementEventMap } from '@aracna/web'
import { ElementComponent, ElementComponentProps } from '../definitions/types.js'
import { createElementComponent } from './create-element-component.js'

export function createBaseElementComponent<
  Element extends HTMLElementTagNameMap[Key],
  Attributes extends BaseElementAttributes = BaseElementAttributes,
  Events extends BaseElementEventMap = BaseElementEventMap,
  Props extends ElementComponentProps<Element, Attributes, Events> = ElementComponentProps<Element, Attributes, Events>,
  Key extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap
>(tag: Key, element: new () => Element, events: KeyOf.Shallow<Events>[] = []): ElementComponent<Element, Props> {
  return createElementComponent<Element, Attributes, Events, Props, Key>(tag, element, ['attribute-change', 'state-change', ...events])
}
