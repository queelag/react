import { SwitchElement } from '@queelag/web'
import { h, Ref } from 'preact'
import { SwitchProps } from '../definitions/props'
import { forwardRef } from '../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-switch': SwitchProps
    }
  }
}

export const Switch = forwardRef((props: SwitchProps, ref: Ref<SwitchElement>) => {
  return <q-switch {...props} ref={ref} />
})
