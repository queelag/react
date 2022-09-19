import type { AriaDisclosureButtonElement, AriaDisclosureElement, AriaDisclosurePanelElement, AriaDisclosureSectionElement } from '@queelag/web/elements'
import { h, Ref } from 'preact'
import { AriaDisclosureButtonProps, AriaDisclosurePanelProps, AriaDisclosureProps, AriaDisclosureSectionProps } from '../../definitions/props'
import { forwardRef } from '../../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-aria-disclosure': AriaDisclosureProps
      'q-aria-disclosure-button': AriaDisclosureButtonProps
      'q-aria-disclosure-panel': AriaDisclosurePanelProps
      'q-aria-disclosure-section': AriaDisclosureSectionProps
    }
  }
}

export const AriaDisclosure = forwardRef((props: AriaDisclosureProps, ref: Ref<AriaDisclosureElement>) => {
  return <q-aria-disclosure {...props} ref={ref} />
})

export const AriaDisclosureButton = forwardRef((props: AriaDisclosureButtonProps, ref: Ref<AriaDisclosureButtonElement>) => {
  return <q-aria-disclosure-button {...props} ref={ref} />
})

export const AriaDisclosurePanel = forwardRef((props: AriaDisclosurePanelProps, ref: Ref<AriaDisclosurePanelElement>) => {
  return <q-aria-disclosure-panel {...props} ref={ref} />
})

export const AriaDisclosureSection = forwardRef((props: AriaDisclosureSectionProps, ref: Ref<AriaDisclosureSectionElement>) => {
  return <q-aria-disclosure-section {...props} ref={ref} />
})
