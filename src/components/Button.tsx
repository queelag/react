import { ButtonElement } from '@queelag/web'
import { h, Ref } from 'preact'
import { ButtonProps } from '../definitions/props'
import { forwardRef } from '../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-button': ButtonProps
    }
  }
}

export const Button = forwardRef((props: ButtonProps, ref: Ref<ButtonElement>) => {
  return <q-button {...props} ref={ref} />
})
