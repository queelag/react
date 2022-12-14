import { KeyOf } from '@queelag/core'
import { FocusTrapElementAttributes, FocusTrapElementEventMap } from '@queelag/web'
import { ElementComponent, ElementComponentProps } from '../definitions/types'
import { createBaseElementComponent } from './create.base.element.component'

export function createFocusTrapElementComponent<
  Element extends HTMLElementTagNameMap[Key],
  Attributes extends FocusTrapElementAttributes = FocusTrapElementAttributes,
  Events extends FocusTrapElementEventMap = FocusTrapElementEventMap,
  Props extends ElementComponentProps<Element, Attributes, Events> = ElementComponentProps<Element, Attributes, Events>,
  Key extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap
>(tag: Key, element: { new (): Element }, events: KeyOf.Shallow<Events>[] = []): ElementComponent<Element, Props> {
  return createBaseElementComponent<Element, Attributes, Events, Props, Key>(tag, element, [
    'focus-trap-activate',
    'focus-trap-deactivate',
    'focus-trap-post-activate',
    'focus-trap-post-deactivate',
    ...events
  ])
}
