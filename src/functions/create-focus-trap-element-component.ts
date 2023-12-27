import { KeyOf } from '@aracna/core'
import { FocusTrapElementAttributes, FocusTrapElementEventMap } from '@aracna/web'
import { ElementComponent, ElementComponentProps } from '../definitions/types.js'
import { createBaseElementComponent } from './create-base-element-component.js'

/**
 * Creates a new React component that renders a custom element that extends `FocusTrapElement`.
 * Optionally the events can be defined as well.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/functions/create-focus-trap-element-component)
 */
export function createFocusTrapElementComponent<
  Element extends HTMLElementTagNameMap[Key],
  Attributes extends FocusTrapElementAttributes = FocusTrapElementAttributes,
  Events extends FocusTrapElementEventMap = FocusTrapElementEventMap,
  Props extends ElementComponentProps<Element, Attributes, Events> = ElementComponentProps<Element, Attributes, Events>,
  Key extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap
>(tag: Key, element: new () => Element, events: KeyOf.Shallow<Events>[] = []): ElementComponent<Element, Props> {
  return createBaseElementComponent<Element, Attributes, Events, Props, Key>(tag, element, [
    'focus-trap-activate',
    'focus-trap-deactivate',
    'focus-trap-post-activate',
    'focus-trap-post-deactivate',
    ...events
  ])
}
