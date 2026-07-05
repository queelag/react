import { getPascalCaseString, type KeyOf } from '@aracna/core'
import { createComponent } from '@lit/react'
import React from 'react'
import { DEFAULT_ELEMENT_COMPONENT_EVENTS } from '../definitions/constants.js'
import type { ElementComponent, ElementComponentAttributes, ElementComponentEvents, ElementComponentProps } from '../definitions/types.js'

/**
 * Creates a new React component that renders a custom element.
 * Optionally the events can be defined as well.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/functions/create-element-component)
 */
export function createElementComponent<
  Element extends HTMLElementTagNameMap[Key],
  Attributes extends ElementComponentAttributes = ElementComponentAttributes,
  Events extends ElementComponentEvents = ElementComponentEvents,
  Props extends ElementComponentProps<Element, Attributes, Events> = ElementComponentProps<Element, Attributes, Events>,
  Key extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap
>(tag: Key, element: new () => Element, events: KeyOf.Shallow<Events>[] = []): ElementComponent<Element, Props> {
  let es: Record<string, string> = DEFAULT_ELEMENT_COMPONENT_EVENTS

  for (let key of events) {
    es['on' + getPascalCaseString(String(key))] = String(key)
  }

  return createComponent({
    elementClass: element,
    events: es,
    react: React,
    tagName: tag
  }) as any
}
