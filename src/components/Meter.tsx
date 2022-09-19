import type { MeterElement } from '@queelag/web/elements'
import { h, Ref } from 'preact'
import { MeterProps } from '../definitions/props'
import { forwardRef } from '../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-meter': MeterProps
    }
  }
}

export const Meter = forwardRef((props: MeterProps, ref: Ref<MeterElement>) => {
  return <q-meter {...props} ref={ref} />
})
