import { CheckBoxElement } from '@queelag/web'
import { h, Ref } from 'preact'
import { CheckBoxProps } from '../definitions/props'
import { forwardRef } from '../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-checkbox': CheckBoxProps
    }
  }
}

export const CheckBox = forwardRef((props: CheckBoxProps, ref: Ref<CheckBoxElement>) => {
  return <q-checkbox {...props} ref={ref} />
})
