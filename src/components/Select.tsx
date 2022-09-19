import type { SelectElement } from '@queelag/web/elements'
import { h, Ref } from 'preact'
import { SelectProps } from '../definitions/props'
import { forwardRef } from '../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-select': SelectProps
    }
  }
}

export const Select = forwardRef((props: SelectProps, ref: Ref<SelectElement>) => {
  return <q-select {...props} ref={ref} />
})
