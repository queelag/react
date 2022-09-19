import type { FormElement } from '@queelag/web/elements'
import { h, Ref } from 'preact'
import { FormProps } from '../definitions/props'
import { forwardRef } from '../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-form': FormProps
    }
  }
}

export const Form = forwardRef((props: FormProps, ref: Ref<FormElement>) => {
  return <q-form {...props} ref={ref} />
})
