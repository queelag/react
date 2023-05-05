import { KeyOf } from '@aracna/core'
import { FormFieldElementAttributes, FormFieldElementEventMap } from '@aracna/web'
import { ElementComponent, ElementComponentProps } from '../definitions/types.js'
import { createBaseElementComponent } from './create-base-element-component.js'

export function createFormFieldElementComponent<
  Element extends HTMLElementTagNameMap[Key],
  Attributes extends FormFieldElementAttributes = FormFieldElementAttributes,
  Events extends FormFieldElementEventMap = FormFieldElementEventMap,
  Props extends ElementComponentProps<Element, Attributes, Events> = ElementComponentProps<Element, Attributes, Events>,
  Key extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap
>(tag: Key, element: { new (): Element }, events?: KeyOf.Shallow<Events>[]): ElementComponent<Element, Props> {
  return createBaseElementComponent<Element, Attributes, Events, Props, Key>(tag, element, events)
}
