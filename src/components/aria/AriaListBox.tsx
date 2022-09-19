import type { AriaListBoxElement, AriaListBoxOptionElement } from '@queelag/web/elements'
import { h, Ref } from 'preact'
import { AriaListBoxOptionProps, AriaListBoxProps } from '../../definitions/props'
import { forwardRef } from '../../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-aria-listbox': AriaListBoxProps
      'q-aria-listbox-option': AriaListBoxOptionProps
    }
  }
}

export const AriaListBox = forwardRef((props: AriaListBoxProps, ref: Ref<AriaListBoxElement>) => {
  return <q-aria-listbox {...props} ref={ref} />
})

export const AriaListBoxOption = forwardRef((props: AriaListBoxOptionProps, ref: Ref<AriaListBoxOptionElement>) => {
  return <q-aria-listbox-option {...props} ref={ref} />
})
