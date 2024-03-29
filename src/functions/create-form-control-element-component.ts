import { KeyOf } from '@aracna/core'
import { FormControlElementAttributes, FormControlElementEventMap } from '@aracna/web'
import { ElementComponent, ElementComponentProps } from '../definitions/types.js'
import { createBaseElementComponent } from './create-base-element-component.js'

/**
 * Creates a new React component that renders a custom element which extends `FormControlElement`.
 * Optionally the events can be defined as well.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/functions/create-form-control-element-component)
 */
export function createFormControlElementComponent<
  Element extends HTMLElementTagNameMap[Key],
  Attributes extends FormControlElementAttributes = FormControlElementAttributes,
  Events extends FormControlElementEventMap = FormControlElementEventMap,
  Props extends ElementComponentProps<Element, Attributes, Events> = ElementComponentProps<Element, Attributes, Events>,
  Key extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap
>(tag: Key, element: new () => Element, events?: KeyOf.Shallow<Events>[]): ElementComponent<Element, Props> {
  return createBaseElementComponent<Element, Attributes, Events, Props, Key>(tag, element, events)
}
