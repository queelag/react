import { DividerElement } from '@queelag/web'
import { h, Ref } from 'preact'
import { DividerProps } from '../definitions/props'
import { forwardRef } from '../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-divider': DividerProps
    }
  }
}

export const Divider = forwardRef((props: DividerProps, ref: Ref<DividerElement>) => {
  return <q-divider {...props} ref={ref} />
})
