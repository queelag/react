import { KeyOf, getPascalCaseString } from '@aracna/core'
import { createComponent } from '@lit-labs/react'
import React from 'react'
import { ElementComponent, ElementComponentAttributes, ElementComponentEvents, ElementComponentProps } from '../definitions/types.js'

export function createElementComponent<
  Element extends HTMLElementTagNameMap[Key],
  Attributes extends ElementComponentAttributes = ElementComponentAttributes,
  Events extends ElementComponentEvents = ElementComponentEvents,
  Props extends ElementComponentProps<Element, Attributes, Events> = ElementComponentProps<Element, Attributes, Events>,
  Key extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap
>(tag: Key, element: { new (): Element }, events?: KeyOf.Shallow<Events>[]): ElementComponent<Element, Props> {
  return createComponent({
    elementClass: element,
    events: events?.reduce((events, name) => ({ ...events, ['on' + getPascalCaseString(String(name))]: name }), {}),
    react: React,
    tagName: tag
  }) as any
}
