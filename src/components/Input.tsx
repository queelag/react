import { InputElement } from '@queelag/web'
import { h, Ref } from 'preact'
import { InputProps } from '../definitions/props'
import { forwardRef } from '../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-input': InputProps
    }
  }
}

export const Input = forwardRef((props: InputProps, ref: Ref<InputElement>) => {
  return <q-input {...props} ref={ref} />
})
