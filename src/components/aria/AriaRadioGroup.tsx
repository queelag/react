import type { AriaRadioButtonElement, AriaRadioGroupElement } from '@queelag/web/elements'
import { h, Ref } from 'preact'
import { AriaRadioButtonProps, AriaRadioGroupProps } from '../../definitions/props'
import { forwardRef } from '../../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-aria-radio-button': AriaRadioButtonProps
      'q-aria-radio-group': AriaRadioGroupProps
    }
  }
}

export const AriaRadioButton = forwardRef((props: AriaRadioButtonProps, ref: Ref<AriaRadioButtonElement>) => {
  return <q-aria-radio-button {...props} ref={ref} />
})

export const AriaRadioGroup = forwardRef((props: AriaRadioGroupProps, ref: Ref<AriaRadioGroupElement>) => {
  return <q-aria-radio-group {...props} ref={ref} />
})
